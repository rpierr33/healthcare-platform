import { ImageResponse } from "next/og";

export const alt = "Mindcare of America — Your Wellness is Our Passion";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #E0F7FA 0%, #ffffff 50%, #E8F5E9 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "linear-gradient(135deg, #00838F, #4CAF50)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 42,
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          M
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#1A2332",
            marginBottom: 8,
          }}
        >
          Mindcare of America
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#00838F",
            marginBottom: 32,
          }}
        >
          Your Wellness is Our Passion
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#6B7280",
            maxWidth: 600,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Compassionate, evidence-based mental health care for individuals and families of all ages.
        </div>
        <div
          style={{
            marginTop: 32,
            padding: "12px 32px",
            background: "#00838F",
            color: "white",
            borderRadius: 999,
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Book an Appointment
        </div>
      </div>
    ),
    { ...size }
  );
}
