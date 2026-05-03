export const SITE_CONFIG = {
  name: "Mindcare of America",
  legalName: "Mindcare of America LLC",
  tagline: "Your Wellness is Our Passion",
  closingLine: "Compassionate & Confidential Mental Health Care",
  closingSubline: "Healing begins with the right support.",

  phone: {
    landline: { display: "(561) 268-2489", tel: "5612682489", label: "Office" },
    cell: { display: "(561) 797-0724", tel: "5617970724", label: "Cell" },
  },
  fax: { display: "(833) 502-4172", tel: "8335024172" },
  email: "Mindcareofamerica@gmail.com",

  address: {
    street: "5813 South Congress Avenue",
    city: "Atlantis",
    state: "FL",
    zip: "33462",
    full: "5813 South Congress Avenue, Atlantis, FL 33462",
  },

  website: "https://www.mindcareofamerica.com",
  websiteDisplay: "www.Mindcareofamerica.com",

  hours: {
    weekdays: "Mon–Fri: 9:00 AM – 5:00 PM EST",
    saturday: "Saturday: Upon Request",
    sunday: "Sunday: Closed",
  },

  booking: {
    enableDoc: {
      url: "https://appointmentbooking.enabledoc.net/book-appointment?PracticeID=4041286&FacilityIDs=6759,6760,6766,",
      label: "Online Scheduling Portal",
      description:
        "Schedule directly through our practice's official booking system — for in-office and telehealth visits.",
    },
    growTherapy: {
      url: "https://growtherapy.com/book-appointment?id=35965&utm_source=provider-sourced&utm_medium=booking-link&utm_campaign=provider-dashboard",
      label: "Grow Therapy",
      insurances: "Medicare, Florida Medicaid, Aetna, Cigna, Optum, United Healthcare",
    },
    headway: {
      url: "https://headway.co/providers/ezechiel-madestin?utm_source=pem&utm_medium=direct_link&utm_campaign=47552",
      label: "Headway",
      insurances: "Oscar Health, Oxford Plan, Florida Blue, United Healthcare, Aetna, Cigna",
    },
  },

  services: [
    {
      title: "Psychiatric Evaluation",
      availability: "In Office or Via Telehealth",
      inOffice: true,
      telehealth: true,
    },
    {
      title: "Psychiatric Medication Management",
      availability: "In Office or Via Telehealth",
      inOffice: true,
      telehealth: true,
    },
    {
      title: "All Types of Psychotherapy",
      availability: "In Office or Via Telehealth",
      inOffice: true,
      telehealth: true,
    },
    {
      title: "Medication Assisted Treatment (MAT) for Substance Use Disorders",
      availability: "In Office Only",
      inOffice: true,
      telehealth: false,
    },
  ],

  founder: {
    name: "Dr. Ezechiel Madestin",
    title: "Founder & Psychiatric Provider",
  },
} as const;
