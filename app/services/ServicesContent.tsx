"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Stethoscope,
  Pill,
  MessageSquare,
  Heart,
  Brain,
  Shield,
  Zap,
  Wind,
  Puzzle,
  Flame,
  AlertTriangle,
  Users,
  Video,
  Building2,
  Calendar,
} from "lucide-react";

const services = [
  {
    title: "Psychiatric Evaluation",
    description: "Comprehensive psychiatric assessments conducted in-office or via telehealth. Our evaluations help identify mental health conditions and guide personalized treatment planning.",
    icon: Stethoscope,
    availability: "In-Office & Telehealth",
  },
  {
    title: "Medication Management",
    description: "Ongoing psychiatric medication management to ensure optimal treatment outcomes. We monitor effectiveness, adjust dosages, and manage side effects with care.",
    icon: Pill,
    availability: "In-Office & Telehealth",
  },
  {
    title: "Psychotherapy",
    description: "All types of evidence-based psychotherapy including CBT, DBT, and other modalities. Our therapists provide a safe space for healing and personal growth.",
    icon: MessageSquare,
    availability: "In-Office & Telehealth",
  },
  {
    title: "Medication Assisted Treatment (MAT)",
    description: "Specialized treatment for substance use disorders combining FDA-approved medications with counseling and behavioral therapies for a whole-patient approach.",
    icon: Heart,
    availability: "In-Office Only",
  },
];

const conditionCategories = [
  {
    category: "Mood Disorders",
    items: [
      { name: "Major Depressive Disorder (MDD)", icon: Brain, description: "Persistent feelings of sadness, hopelessness, and loss of interest affecting daily functioning." },
      { name: "Bipolar Disorder", icon: Zap, description: "Episodes of mood swings ranging from depressive lows to manic highs." },
    ],
  },
  {
    category: "Anxiety & OCD",
    items: [
      { name: "Generalized Anxiety Disorder (GAD)", icon: Wind, description: "Excessive, persistent worry and anxiety about everyday situations." },
      { name: "Obsessive Compulsive Disorder (OCD)", icon: Puzzle, description: "Recurring unwanted thoughts and repetitive behaviors." },
    ],
  },
  {
    category: "Trauma & Stress",
    items: [
      { name: "PTSD / Trauma", icon: Shield, description: "Lasting mental health effects following exposure to traumatic events." },
    ],
  },
  {
    category: "Neurodevelopmental",
    items: [
      { name: "ADHD", icon: Flame, description: "Difficulty maintaining attention, hyperactivity, and impulsive behavior." },
      { name: "Autism Spectrum Disorder", icon: Puzzle, description: "Neurodevelopmental condition affecting communication and behavior." },
    ],
  },
  {
    category: "Behavioral Disorders",
    items: [
      { name: "Conduct Disorder", icon: AlertTriangle, description: "Persistent patterns of behavior violating social norms and the rights of others." },
      { name: "Oppositional Defiant Disorder", icon: AlertTriangle, description: "A pattern of angry, irritable mood and argumentative, defiant behavior." },
    ],
  },
  {
    category: "Other Conditions",
    items: [
      { name: "Eating Disorders", icon: Heart, description: "Conditions involving serious disturbances in eating behavior and weight management." },
      { name: "Schizophrenia", icon: Brain, description: "A chronic brain disorder affecting thinking, feeling, and behavior." },
      { name: "Substance Use Disorders", icon: Users, description: "Dependence on alcohol, drugs, or other substances requiring professional treatment." },
    ],
  },
];

export function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="font-display text-4xl font-bold text-neutral-dark sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-neutral-mid">
              Comprehensive mental health care tailored to your unique needs — available
              in-person at our Atlantis, FL office or via telehealth across Florida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-primary-light p-3">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark">{service.title}</h3>
                  <p className="mt-3 text-neutral-mid leading-relaxed">{service.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm">
                    {service.availability.includes("Telehealth") && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-accent">
                        <Video size={12} /> Telehealth
                      </span>
                    )}
                    {service.availability.includes("In-Office") && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary-light px-3 py-1 text-xs font-medium text-secondary">
                        <Building2 size={12} /> In-Office
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="bg-neutral-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-neutral-dark sm:text-4xl">
              Conditions We Treat
            </h2>
            <p className="mt-4 text-neutral-mid">
              We provide care for a wide range of mental health conditions across all age groups.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {conditionCategories.map((category) => (
              <div key={category.category}>
                <h3 className="mb-4 text-lg font-bold text-primary">{category.category}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="rounded-xl bg-white p-6 shadow-sm"
                      >
                        <div className="mb-3 inline-flex rounded-lg bg-primary-light p-2">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <h4 className="font-semibold text-neutral-dark">{item.name}</h4>
                        <p className="mt-1 text-sm text-neutral-mid">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-neutral-dark sm:text-4xl">
              All Ages Welcome
            </h2>
            <p className="mt-4 text-neutral-mid">
              We proudly welcome clients of all ages — children, teens, adults, and seniors.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {["Children", "Teens", "Adults", "Seniors"].map((group) => (
              <div
                key={group}
                className="rounded-2xl bg-primary-light px-10 py-6 text-center"
              >
                <Users size={32} className="mx-auto text-primary" />
                <p className="mt-2 font-semibold text-neutral-dark">{group}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-3xl px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-primary-light">
            Take the first step towards better mental health today.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-primary transition-all hover:bg-neutral-light hover:shadow-lg"
          >
            <Calendar size={20} />
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
