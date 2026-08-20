import { ImageResponse } from "next/og";

export const alt = "dachdeckerjobs.ch — Dach- und Fassadenbaujobs Schweiz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 86px",
          background: "#eaf5fc",
          borderTop: "18px solid #d6563c",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          <div style={{ width: 112, height: 90, display: "flex", position: "relative" }}>
            <span style={{ position: "absolute", width: 75, height: 11, left: 0, top: 28, background: "#154f78", transform: "rotate(-39deg)" }} />
            <span style={{ position: "absolute", width: 75, height: 11, right: 0, top: 28, background: "#154f78", transform: "rotate(39deg)" }} />
            <span style={{ position: "absolute", width: 86, height: 8, left: 13, bottom: 15, background: "#d6563c" }} />
            <span style={{ position: "absolute", width: 112, height: 8, left: 0, bottom: 0, background: "#154f78" }} />
          </div>
          <div style={{ color: "#154f78", fontSize: 24, fontWeight: 800, letterSpacing: 3 }}>
            STEILDACH · FLACHDACH · GEBÄUDEHÜLLE
          </div>
        </div>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 0,
          }}
        >
          <span style={{ fontSize: 84, fontWeight: 900, color: "#0b2233", letterSpacing: -4 }}>
            dachdecker
          </span>
          <span style={{ fontSize: 84, fontWeight: 900, color: "#d6563c", letterSpacing: -4 }}>
            job
          </span>
          <span style={{ fontSize: 58, fontWeight: 700, color: "#154f78", letterSpacing: -2 }}>
            .ch
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#3e596d",
            marginTop: 20,
            letterSpacing: 0.5,
          }}
        >
          Dachdeckerstellen. Vom First bis zur Traufe.
        </div>
      </div>
    ),
    { ...size }
  );
}
