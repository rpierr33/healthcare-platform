import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive mental health services including psychiatric evaluations, medication management, psychotherapy, and substance use treatment at Mindcare of America.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
