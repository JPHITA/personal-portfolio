import { ImageResponse } from "next/og";
import { site } from "@/content/projects";

export const alt = `${site.name}, ${site.specialty}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0c0c0e",
          color: "#f0f2f4",
          padding: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "12px solid #1a1c20",
            padding: "56px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#ff6a1a",
              fontSize: 28,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {site.specialty}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 64,
                lineHeight: 1.05,
                letterSpacing: -1,
              }}
            >
              {site.name}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontSize: 28,
                color: "#747a82",
              }}
            >
              Medellín, Colombia · UTC-5
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
