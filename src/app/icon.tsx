import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "5px",
        }}
      >
        <div style={{ width: 38, height: 32, display: "flex", position: "relative" }}>
          <span style={{ position: "absolute", width: 25, height: 4, left: 0, top: 10, background: "#154f78", transform: "rotate(-40deg)" }} />
          <span style={{ position: "absolute", width: 25, height: 4, right: 0, top: 10, background: "#154f78", transform: "rotate(40deg)" }} />
          <span style={{ position: "absolute", width: 30, height: 3, left: 4, bottom: 5, background: "#d6563c" }} />
          <span style={{ position: "absolute", width: 38, height: 3, left: 0, bottom: 0, background: "#154f78" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
