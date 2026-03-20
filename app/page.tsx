import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutSnapshot } from "@/components/sections/AboutSnapshot";
import { ConditionsGrid } from "@/components/sections/ConditionsGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadCaptureInline } from "@/components/sections/LeadCaptureInline";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutSnapshot />
      <ConditionsGrid />
      <HowItWorks />
      <Testimonials />
      <LeadCaptureInline />
    </>
  );
}
