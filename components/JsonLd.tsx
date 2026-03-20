export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Mindcare of America",
    description:
      "Comprehensive mental healthcare services for individuals of all ages. Psychiatric evaluations, medication management, psychotherapy, and telehealth.",
    url: "https://www.mindcareofamerica.com",
    logo: "https://www.mindcareofamerica.com/logo.png",
    image: "https://www.mindcareofamerica.com/logo.png",
    telephone: "+1-561-797-0724",
    email: "Mindcareofamerica@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5813 South Congress Avenue",
      addressLocality: "Atlantis",
      addressRegion: "FL",
      postalCode: "33462",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.5959,
      longitude: -80.0953,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    medicalSpecialty: [
      "Psychiatry",
      "Psychology",
      "MentalHealth",
    ],
    founder: {
      "@type": "Person",
      name: "Dr. Ezechiel Madestin",
      jobTitle: "Founder & Psychiatric Provider",
    },
    sameAs: [],
    priceRange: "$$",
    acceptsReservations: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
