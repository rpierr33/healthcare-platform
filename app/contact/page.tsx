import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Schedule a Visit or Ask a Question",
  description:
    "Contact Mindcare of America at (561) 268-2489 or (561) 797-0724, or visit us at 5813 South Congress Avenue, Atlantis, FL 33462. Reach our mental health team by phone, email, or online form. Located near Lake Worth, Boynton Beach, and Wellington in Palm Beach County.",
  alternates: {
    canonical: "https://www.mindcareofamerica.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
