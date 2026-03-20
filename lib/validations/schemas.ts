import { z } from 'zod/v4';

const phoneRegex = /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;

export const conditions = [
  "Major Depressive Disorder (MDD)",
  "Generalized Anxiety Disorder (GAD)",
  "Bipolar Disorder",
  "Schizophrenia",
  "Eating Disorder",
  "Obsessive Compulsive Disorder (OCD)",
  "Autism Spectrum Disorder",
  "Conduct Disorder",
  "Oppositional Defiant Disorder",
  "PTSD / Trauma",
  "ADHD",
  "Substance Use Disorder",
  "Other",
] as const;

export const insuranceProviders = [
  "Medicare",
  "Florida Medicaid",
  "Aetna",
  "Cigna",
  "Optum",
  "United Healthcare",
  "Oscar Health",
  "Oxford Plan",
  "Florida Blue (Blue Cross/Blue Shield)",
  "Self-Pay",
  "Other",
] as const;

export const leadSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Please enter a valid email"),
  phone: z.string().regex(phoneRegex, "Please enter a valid phone number"),
  dob: z.string().optional(),
  preferredContact: z.enum(["Email", "Phone", "Either"]),
  conditions: z.array(z.string()).min(1, "Please select at least one area of focus"),
  insurance: z.string().min(1, "Please select an insurance provider"),
  message: z.string().optional(),
});

export const appointmentSchema = leadSchema.extend({
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.enum(["Morning", "Afternoon", "Evening"]),
  visitType: z.enum(["In-Person", "Telehealth"]),
});

export type LeadFormData = z.infer<typeof leadSchema>;
export type AppointmentFormData = z.infer<typeof appointmentSchema>;
