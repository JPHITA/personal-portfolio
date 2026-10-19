"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useState,
  type KeyboardEvent,
} from "react";

export type ProjectCard = {
  slug: string;
  title: string;
  summary: string;
  lane: string;
  preview: { src: string; alt: string };
};

const AUTOPLAY_DELAY_MS = 5000;

function usePerPage() {
  // ponytail: status range only — slide widths come from CSS
  const [perPage, setPerPage] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setPerPage(mq.matches ? 2 : 1);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return perPage;
}

export function ProjectsCarousel({ projects }: { projects: ProjectCard[] }) {
  const labelId = useId();
  const perPage = usePerPage();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(projects.length);

  // ponytail: useState factory keeps Autoplay identity without reading a ref in render
  const [plugins] = useState(() => [
    Autoplay({
      delay: AUTOPLAY_DELAY_MS,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
      stopOnInteraction: false,
    }),
  ]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(prefers-reduced-motion: reduce)": { duration: 0 },
      },
    },
    plugins,
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setSnapCount(emblaApi.scrollSnapList().length);
    };

    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    // defer so select sync is not a sync setState in the effect body
    const frame = requestAnimationFrame(onSelect);
    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Honor prefers-reduced-motion: stop autoplay (docs also recommend duration: 0)
  useEffect(() => {
    if (!emblaApi) return;
    const ap = emblaApi.plugins()?.autoplay;
    if (!ap) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (mq.matches) ap.stop();
      else if (!ap.isPlaying()) ap.play();
    };
    mq.addEventListener("change", sync);
    const frame = requestAnimationFrame(sync);
    return () => {
      cancelAnimationFrame(frame);
      mq.removeEventListener("change", sync);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollNext();
    } else if (event.key === "Home") {
      event.preventDefault();
      scrollTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      scrollTo(Math.max(0, snapCount - 1));
    }
  };

  const from = selectedIndex + 1;
  const to = Math.min(projects.length, selectedIndex + perPage);

  return (
    <div
      className="project-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
      onKeyDown={onKeyDown}
    >
      <div className="project-carousel-head">
        <p id={labelId} className="projects-lab">
          Selected projects
        </p>
        <div className="project-carousel-controls">
          <p className="project-carousel-status synth-note" aria-live="polite">
            {from}–{to} / {projects.length}
          </p>
          <button
            type="button"
            className="project-carousel-nav"
            aria-label="Previous projects"
            onClick={scrollPrev}
          >
            Prev
          </button>
          <button
            type="button"
            className="project-carousel-nav"
            aria-label="Next projects"
            onClick={scrollNext}
          >
            Next
          </button>
        </div>
      </div>

      <div className="project-carousel-viewport" ref={emblaRef}>
        <ul className="project-carousel-track">
          {projects.map((p) => (
            <li className="project-carousel-slide" key={p.slug}>
              <Link href={`/projects/${p.slug}`} className="project-link">
                <span className="lane">{p.lane}</span>
                <h2>{p.title}</h2>
                <figure className="project-well">
                  <Image
                    src={p.preview.src}
                    alt={p.preview.alt}
                    width={960}
                    height={540}
                    sizes="(min-width: 768px) 40vw, 90vw"
                  />
                </figure>
                <p>{p.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {snapCount > 1 ? (
        <div
          className="project-carousel-dots"
          role="group"
          aria-label="Project slides"
        >
          {Array.from({ length: snapCount }, (_, i) => (
            <button
              key={i}
              type="button"
              className={
                i === selectedIndex
                  ? "project-carousel-dot is-active"
                  : "project-carousel-dot"
              }
              aria-label={`Project ${i + 1} of ${snapCount}`}
              aria-current={i === selectedIndex ? "true" : undefined}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
