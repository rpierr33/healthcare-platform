import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Mindcare of America, our mission, values, and the dedicated team led by Dr. Ezechiel Madestin providing compassionate mental health care.",
};

export default function AboutPage() {
  return <AboutContent />;
}
