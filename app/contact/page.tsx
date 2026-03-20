import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Mindcare of America. Contact us by phone, email, or through our online form. Located at 5813 South Congress Avenue, Atlantis, FL 33462.",
};

export default function ContactPage() {
  return <ContactContent />;
}
