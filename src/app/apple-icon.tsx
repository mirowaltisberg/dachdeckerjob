import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#eaf5fc",
          borderRadius: "30px",
        }}
      >
        <div style={{ width: 132, height: 110, display: "flex", position: "relative" }}>
          <span style={{ position: "absolute", width: 86, height: 14, left: 1, top: 33, background: "#154f78", transform: "rotate(-40deg)" }} />
          <span style={{ position: "absolute", width: 86, height: 14, right: 1, top: 33, background: "#154f78", transform: "rotate(40deg)" }} />
          <span style={{ position: "absolute", width: 102, height: 10, left: 15, bottom: 18, background: "#d6563c" }} />
          <span style={{ position: "absolute", width: 132, height: 10, left: 0, bottom: 0, background: "#154f78" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
