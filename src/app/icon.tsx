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
          background: "#B06030",
          borderRadius: "10px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="33"
          height="33"
        >
          <path
            d="M4 32L24 12l20 20H4z"
            fill="white"
          />
          <rect x="30" y="14" width="4" height="10" rx="0.5" fill="rgba(255,255,255,0.7)"/>
        </svg>
      </div>
    ),
    { ...size }
  );
}
