import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteOrigin } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin().origin;
  return [
    { url: origin },
    ...projects.map((project) => ({
      url: `${origin}/projects/${project.slug}`,
    })),
  ];
}
