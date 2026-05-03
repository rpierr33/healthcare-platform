import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { FloatingBookingButton } from "@/components/layout/FloatingBookingButton";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.mindcareofamerica.com"),
  title: {
    default: "Mindcare of America | Psychiatrist & Mental Health Services in Atlantis, FL",
    template: "%s | Mindcare of America — Atlantis, FL",
  },
  description:
    "Top-rated psychiatrist and mental health clinic in Atlantis, FL serving Palm Beach County. Psychiatric evaluations, medication management, therapy (CBT, DBT), ADHD treatment, anxiety & depression care, and telehealth appointments. Accepting new patients — all ages welcome.",
  keywords: [
    "psychiatrist Atlantis FL",
    "mental health services Palm Beach County",
    "psychiatric evaluation near me",
    "medication management Florida",
    "therapist Atlantis Florida",
    "ADHD treatment Palm Beach County",
    "anxiety therapist near me",
    "depression treatment Atlantis FL",
    "telehealth psychiatrist Florida",
    "child psychiatrist Palm Beach County",
    "bipolar disorder treatment",
    "OCD therapist Florida",
    "PTSD treatment South Florida",
    "substance abuse treatment Atlantis",
    "Suboxone doctor near me",
    "medication assisted treatment Florida",
    "CBT therapy Palm Beach County",
    "DBT therapy near me",
    "mental health clinic near me",
    "psychotherapy Atlantis FL",
    "schizophrenia treatment Florida",
    "eating disorder therapist",
    "autism spectrum disorder treatment",
    "psychiatric nurse practitioner Florida",
    "Mindcare of America",
    "Dr. Ezechiel Madestin",
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Mindcare",
  },
  openGraph: {
    title: "Mindcare of America | Psychiatry & Therapy in Atlantis, FL",
    description:
      "Compassionate, evidence-based mental health care for all ages. Psychiatric evaluations, medication management, psychotherapy, and telehealth. Serving Atlantis, Lake Worth, Boynton Beach, and all of Palm Beach County.",
    url: "https://www.mindcareofamerica.com",
    siteName: "Mindcare of America",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <JsonLd />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileCTABar />
        <FloatingBookingButton />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch(() => {});
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
