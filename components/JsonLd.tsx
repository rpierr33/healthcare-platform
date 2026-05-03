import { SITE_CONFIG } from "@/lib/site-config";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_CONFIG.website}/#organization`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.legalName,
    slogan: SITE_CONFIG.tagline,
    description:
      "Mindcare of America is a psychiatric clinic in Atlantis, FL offering comprehensive mental health services including psychiatric evaluations, psychiatric medication management, all types of psychotherapy (CBT, DBT), ADHD treatment, anxiety and depression care, and Medication Assisted Treatment (MAT) for substance use disorders. Serving patients of all ages in Palm Beach County and across Florida via telehealth.",
    url: SITE_CONFIG.website,
    logo: `${SITE_CONFIG.website}/logo.png`,
    image: `${SITE_CONFIG.website}/logo.png`,
    telephone: `+1-${SITE_CONFIG.phone.landline.tel}`,
    email: SITE_CONFIG.email,
    faxNumber: `+1-${SITE_CONFIG.fax.tel}`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+1-${SITE_CONFIG.phone.landline.tel}`,
        contactType: "customer service",
        description: "Office (Landline)",
        areaServed: "US",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: `+1-${SITE_CONFIG.phone.cell.tel}`,
        contactType: "customer service",
        description: "Cell",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.5959,
      longitude: -80.0953,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Atlantis",
        containedInPlace: { "@type": "State", name: "Florida" },
      },
      { "@type": "City", name: "Lake Worth" },
      { "@type": "City", name: "Boynton Beach" },
      { "@type": "City", name: "Wellington" },
      { "@type": "City", name: "Greenacres" },
      { "@type": "City", name: "Lantana" },
      { "@type": "City", name: "West Palm Beach" },
      { "@type": "City", name: "Delray Beach" },
      { "@type": "City", name: "Boca Raton" },
      {
        "@type": "AdministrativeArea",
        name: "Palm Beach County",
      },
      {
        "@type": "State",
        name: "Florida",
        description: "Telehealth services available statewide",
      },
    ],
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
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Psychiatric Evaluation",
        description: "Comprehensive psychiatric assessments to diagnose mental health conditions and create personalized treatment plans. Available in office or via telehealth.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Psychiatric Medication Management",
        description: "Ongoing psychiatric medication prescribing, monitoring, and adjustment for optimal mental health outcomes. Available in office or via telehealth.",
      },
      {
        "@type": "MedicalTherapy",
        name: "All Types of Psychotherapy",
        description: "Evidence-based talk therapy including CBT, DBT, and trauma-focused therapy for all ages. Available in office or via telehealth.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Medication Assisted Treatment (MAT) for Substance Use Disorders",
        description: "FDA-approved medication combined with counseling for opioid and substance use disorder recovery. In office only.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Telehealth Psychiatry",
        description: "Secure virtual psychiatric and therapy appointments available across Florida.",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mental Health Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Psychiatric Evaluation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Psychiatric Medication Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "All Types of Psychotherapy (CBT, DBT)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medication Assisted Treatment (MAT)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Telehealth Appointments" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ADHD Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Anxiety Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Depression Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bipolar Disorder Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "PTSD / Trauma Therapy" } },
      ],
    },
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.founder.name,
      jobTitle: SITE_CONFIG.founder.title,
    },
    sameAs: [],
    priceRange: "$$",
    acceptsReservations: true,
    paymentAccepted: "Cash, Credit Card, Insurance",
    currenciesAccepted: "USD",
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What mental health services does Mindcare of America offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mindcare of America offers psychiatric evaluations, psychiatric medication management, all types of psychotherapy (including CBT and DBT), and Medication Assisted Treatment (MAT) for substance use disorders. We treat depression, anxiety, ADHD, bipolar disorder, PTSD, OCD, schizophrenia, eating disorders, and more.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer telehealth appointments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer secure telehealth psychiatry and therapy appointments for patients located anywhere in Florida. You can schedule a virtual visit for psychiatric evaluations, medication management, and psychotherapy.",
        },
      },
      {
        "@type": "Question",
        name: "What insurance plans do you accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We accept most major insurance plans including Medicare, Florida Medicaid, Aetna, Cigna, United Healthcare, Oscar Health, Florida Blue, and Optum. Contact us to verify your specific coverage.",
        },
      },
      {
        "@type": "Question",
        name: "Do you treat children and teenagers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Mindcare of America provides mental health care for all ages including children, teens, adults, and seniors. We offer child and adolescent psychiatry for conditions like ADHD, anxiety, autism spectrum disorder, conduct disorder, and depression.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Mindcare of America located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Our office is located at ${SITE_CONFIG.address.full}, conveniently serving patients from Lake Worth, Boynton Beach, Wellington, Greenacres, West Palm Beach, Delray Beach, Boca Raton, and all of Palm Beach County.`,
        },
      },
      {
        "@type": "Question",
        name: "How do I book an appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can book an appointment by calling our office at ${SITE_CONFIG.phone.landline.display} or cell ${SITE_CONFIG.phone.cell.display}, emailing ${SITE_CONFIG.email}, or using our online booking portal. We also accept appointments through Grow Therapy and Headway for select insurance plans.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}
