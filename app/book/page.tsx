import type { Metadata } from "next";
import { BookContent } from "./BookContent";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Schedule your mental health appointment with Mindcare of America. Book online via Zocdoc or directly with us for in-person or telehealth visits.",
};

export default function BookPage() {
  return <BookContent />;
}
