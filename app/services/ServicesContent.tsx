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
import { SITE_CONFIG } from "@/lib/site-config";
import { LeafBullet, LeafDecoration } from "@/components/ui/LeafDecoration";

const serviceDescriptions: Record<string, { description: string; icon: typeof Stethoscope }> = {
  "Psychiatric Evaluation": {
    description:
      "Comprehensive psychiatric assessments for new patients. Our licensed providers evaluate symptoms, diagnose conditions such as depression, anxiety, ADHD, and bipolar disorder, and create a personalized treatment plan.",
    icon: Stethoscope,
  },
  "Psychiatric Medication Management": {
    description:
      "Ongoing psychiatric medication management to ensure optimal treatment outcomes. We prescribe, monitor effectiveness, adjust dosages, and manage side effects for antidepressants, mood stabilizers, stimulants, antipsychotics, and more.",
    icon: Pill,
  },
  "All Types of Psychotherapy": {
    description:
      "Evidence-based talk therapy including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), trauma-focused therapy, and other modalities for children, teens, adults, and seniors. A safe space for healing and personal growth.",
    icon: MessageSquare,
  },
  "Medication Assisted Treatment (MAT) for Substance Use Disorders": {
    description:
      "Specialized treatment for opioid and substance use disorders combining FDA-approved medications such as Suboxone with counseling and behavioral therapies for a whole-patient approach to recovery.",
    icon: Heart,
  },
};

const conditionCategories = [
  {
    category: "Mood Disorders",
    items: [
      { name: "Major Depressive Disorder (MDD)", icon: Brain, description: "Expert treatment for persistent sadness, hopelessness, and loss of interest through therapy, medication, or both." },
      { name: "Bipolar Disorder", icon: Zap, description: "Mood stabilization and long-term management for bipolar I and bipolar II disorder with medication and therapy." },
    ],
  },
  {
    category: "Anxiety & OCD",
    items: [
      { name: "Generalized Anxiety Disorder (GAD)", icon: Wind, description: "Treatment for excessive worry, panic attacks, social anxiety, and phobias through CBT, medication, and coping strategies." },
      { name: "Obsessive Compulsive Disorder (OCD)", icon: Puzzle, description: "Evidence-based treatment for intrusive thoughts and compulsive behaviors through therapy and medication management." },
    ],
  },
  {
    category: "Trauma & Stress",
    items: [
      { name: "PTSD / Trauma", icon: Shield, description: "Trauma-informed psychiatric care and therapy for post-traumatic stress disorder and acute stress reactions." },
    ],
  },
  {
    category: "Neurodevelopmental",
    items: [
      { name: "ADHD", icon: Flame, description: "Comprehensive ADHD evaluation, diagnosis, and treatment for children, teens, and adults — including stimulant and non-stimulant medication options." },
      { name: "Autism Spectrum Disorder", icon: Puzzle, description: "Supportive psychiatric care and behavioral strategies for individuals on the autism spectrum across all age groups." },
    ],
  },
  {
    category: "Behavioral Disorders",
    items: [
      { name: "Conduct Disorder", icon: AlertTriangle, description: "Behavioral therapy and psychiatric treatment for children and adolescents with persistent antisocial behavior patterns." },
      { name: "Oppositional Defiant Disorder", icon: AlertTriangle, description: "Treatment for defiant, argumentative, and irritable behavior in children and teens through therapy and family support." },
    ],
  },
  {
    category: "Other Conditions",
    items: [
      { name: "Eating Disorders", icon: Heart, description: "Psychiatric support for anorexia nervosa, bulimia, binge eating disorder, and related conditions." },
      { name: "Schizophrenia", icon: Brain, description: "Long-term psychiatric management for schizophrenia and schizoaffective disorder with antipsychotic medication and supportive care." },
      { name: "Substance Use Disorders", icon: Users, description: "Medication Assisted Treatment (MAT) and counseling for alcohol, opioid, and other substance use disorders." },
    ],
  },
];

export function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-primary-light/30 to-white py-20">
        <div className="pointer-events-none absolute -top-4 -left-4 h-48 w-48 opacity-50">
          <LeafDecoration variant="corner-tl" primaryColor="#1B4332" accentColor="#C9A961" className="h-full w-full" />
        </div>
        <div className="pointer-events-none absolute -bottom-6 -right-4 h-56 w-56 opacity-40">
          <LeafDecoration variant="corner-br" primaryColor="#1B4332" accentColor="#C9A961" className="h-full w-full" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="font-display text-4xl font-bold text-neutral-dark sm:text-5xl">
              Mental Health Services in Atlantis, FL
            </h1>
            <p className="mt-3 font-display text-lg italic text-secondary-dark sm:text-xl">
              {SITE_CONFIG.tagline}
            </p>
            <p className="mt-4 text-lg text-neutral-mid">
              Comprehensive psychiatry, therapy, and medication management tailored to your unique needs — available
              in-person at our Atlantis office near Lake Worth and Boynton Beach, or via telehealth anywhere in Florida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services — flyer-aligned leaf-bullet list */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary-dark">
              Services Provided
            </h2>
            <div className="mx-auto mt-4 max-w-xs">
              <LeafDecoration
                variant="flourish"
                primaryColor="#5C8A5C"
                accentColor="#C9A961"
                className="h-10 w-full"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SITE_CONFIG.services.map((service, index) => {
              const meta = serviceDescriptions[service.title];
              const Icon = meta?.icon ?? Stethoscope;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-secondary/30 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <LeafBullet color="#1B4332" className="h-9 w-9" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-lg font-bold text-primary-dark">
                          {service.title}
                        </h3>
                        <Icon size={22} className="shrink-0 text-secondary-dark opacity-60" />
                      </div>
                      <p className="mt-1 text-sm italic text-secondary-dark">
                        – {service.availability}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-mid">
                        {meta?.description}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                        {service.telehealth && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-accent-light px-3 py-1 font-medium text-primary-dark">
                            <Video size={12} /> Telehealth
                          </span>
                        )}
                        {service.inOffice && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-secondary-light px-3 py-1 font-medium text-secondary-dark">
                            <Building2 size={12} /> In-Office
                          </span>
                        )}
                      </div>
                    </div>
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
              Mental Health Conditions We Treat
            </h2>
            <p className="mt-4 text-neutral-mid">
              Our psychiatric providers diagnose and treat a wide range of mental health conditions
              in children, teens, adults, and seniors — in-office and via telehealth.
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
              Psychiatric Care for All Ages
            </h2>
            <p className="mt-4 text-neutral-mid">
              From child and adolescent psychiatry to adult and geriatric mental health care — we
              provide compassionate treatment for every stage of life.
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-16">
        <div className="pointer-events-none absolute -top-4 -left-4 h-48 w-48 opacity-25">
          <LeafDecoration variant="corner-tl" primaryColor="#C9A961" accentColor="#5C8A5C" className="h-full w-full" />
        </div>
        <div className="pointer-events-none absolute -bottom-4 -right-4 h-48 w-48 opacity-25">
          <LeafDecoration variant="corner-br" primaryColor="#C9A961" accentColor="#5C8A5C" className="h-full w-full" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center text-white sm:px-6 lg:px-8">
          <p className="font-display text-2xl italic text-secondary sm:text-3xl">
            {SITE_CONFIG.closingLine}
          </p>
          <p className="mt-2 text-base text-cream/85 italic">
            {SITE_CONFIG.closingSubline}
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-cream/85">
            Schedule your psychiatric evaluation or therapy appointment today — in-person in Atlantis, FL or via telehealth.
          </p>
          <Link
            href="/book"
            data-book-cta
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 font-semibold text-primary-dark shadow-lg shadow-secondary/30 transition-all hover:bg-cream hover:shadow-xl"
          >
            <Calendar size={20} />
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
