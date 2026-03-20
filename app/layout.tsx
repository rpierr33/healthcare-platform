import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
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
    default: "Mindcare of America | Mental Health Services in Atlantis, FL",
    template: "%s | Mindcare of America",
  },
  description:
    "Comprehensive mental healthcare services for all ages. Psychiatric evaluations, medication management, psychotherapy, and telehealth. Accepting new patients in Atlantis, FL.",
  keywords: [
    "mental health",
    "psychiatry",
    "therapy",
    "Atlantis FL",
    "telehealth",
    "psychiatric evaluation",
    "medication management",
  ],
  openGraph: {
    title: "Mindcare of America | Your Wellness is Our Passion",
    description:
      "Compassionate, accessible mental health care for individuals and families.",
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
      </body>
    </html>
  );
}
