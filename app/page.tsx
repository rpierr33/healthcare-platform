import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutSnapshot } from "@/components/sections/AboutSnapshot";
import { OurPromise } from "@/components/sections/OurPromise";
import { ConditionsGrid } from "@/components/sections/ConditionsGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { LeadCaptureInline } from "@/components/sections/LeadCaptureInline";

export const metadata: Metadata = {
  title: "Mindcare of America | Psychiatrist & Mental Health Services in Atlantis, FL",
  description:
    "Mindcare of America is a leading mental health clinic in Atlantis, FL offering psychiatric evaluations, medication management, psychotherapy, ADHD treatment, anxiety & depression care, and telehealth. Serving Palm Beach County — accepting new patients of all ages.",
  alternates: {
    canonical: "https://www.mindcareofamerica.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutSnapshot />
      <OurPromise />
      <ConditionsGrid />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <LeadCaptureInline />
    </>
  );
}
