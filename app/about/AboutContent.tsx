"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Shield,
  Users,
  Star,
  Target,
  Handshake,
  Sparkles,
  ArrowUpRight,
  Calendar,
  Award,
  Building2,
  Lightbulb,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { LeafDecoration } from "@/components/ui/LeafDecoration";

const coreValues = [
  { icon: Heart, title: "Compassion", description: "We treat every client with empathy, kindness, and respect." },
  { icon: Shield, title: "Integrity", description: "We uphold the highest ethical standards in all aspects of care." },
  { icon: Target, title: "Client-Centered Care", description: "We prioritize the needs, goals, and voices of our clients." },
  { icon: Star, title: "Excellence", description: "We deliver high-quality services through evidence-based practices." },
  { icon: ArrowUpRight, title: "Accessibility", description: "We strive to make mental health care approachable and available to all." },
  { icon: Handshake, title: "Respect & Dignity", description: "Every person deserves to be treated with fairness and respect." },
  { icon: Users, title: "Collaboration", description: "We value teamwork among clinicians, clients, families, and partners." },
  { icon: Sparkles, title: "Growth & Empowerment", description: "We empower individuals to build resilience and pursue growth." },
];

const differentiators = [
  { icon: Award, title: "Evidence-Based Care", description: "Every treatment plan is grounded in the latest clinical research and best practices." },
  { icon: Building2, title: "In-Office & Telehealth", description: "Flexible appointment options to fit your schedule and comfort level." },
  { icon: Users, title: "All Ages Welcome", description: "From children to seniors — we provide compassionate care for every stage of life." },
  { icon: Lightbulb, title: "Patient-Centered Approach", description: "Your goals and needs drive every decision in your treatment journey." },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-primary-light/30 to-white py-20">
        <div className="pointer-events-none absolute -top-6 -left-6 h-56 w-56 opacity-50">
          <LeafDecoration variant="corner-tl" primaryColor="#1B4332" accentColor="#C9A961" className="h-full w-full" />
        </div>
        <div className="pointer-events-none absolute -bottom-6 -right-6 h-56 w-56 opacity-40">
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
              About Mindcare of America
            </h1>
            <p className="mt-3 font-display text-xl italic text-secondary-dark sm:text-2xl">
              {SITE_CONFIG.tagline}
            </p>
            <p className="mt-4 text-lg text-neutral-mid">
              Healing the mind. Restoring lives. Empowering communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Story</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-neutral-dark">
                Founded on Compassion & Excellence
              </h2>
              <p className="mt-4 text-neutral-mid leading-relaxed">
                Mindcare of America is a mental health practice founded in 2022 by {SITE_CONFIG.founder.name}.
                We aim to provide comprehensive mental healthcare services to individuals of all ages,
                focusing on healing the mind to promote human psychosocial development.
              </p>
              <p className="mt-4 text-neutral-mid leading-relaxed">
                Our staff consists of passionate healthcare professionals committed to serving and caring
                for clients with diverse mental illnesses. We use a patient-centered approach to support
                each client for a complete recovery from mental illnesses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl ring-2 ring-secondary/30 shadow-xl">
                <Image
                  src="/dr-madestin-2.png"
                  alt={`${SITE_CONFIG.founder.name} providing compassionate psychiatric care at ${SITE_CONFIG.name}`}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-t from-primary-dark/80 to-transparent px-6 pb-6 pt-12">
                <p className="text-sm font-medium text-cream italic leading-relaxed">
                  &ldquo;We believe the stigmatization of mental illnesses must be banished. People suffering
                  from mental illnesses can be completely restored if they get appropriate treatment.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-secondary/30 bg-white p-8 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary-light p-3">
                <Target size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-neutral-dark">Our Mission</h3>
              <p className="mt-4 text-neutral-mid leading-relaxed">
                To provide compassionate, accessible, and evidence-based mental health care that empowers
                individuals, families, and communities to achieve emotional well-being, resilience, and a
                higher quality of life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-secondary/30 bg-white p-8 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-xl bg-secondary-light p-3">
                <Lightbulb size={28} className="text-secondary-dark" />
              </div>
              <h3 className="font-display text-2xl font-bold text-neutral-dark">Our Vision</h3>
              <p className="mt-4 text-neutral-mid leading-relaxed">
                To create a future where mental health care is accessible, compassionate, and stigma-free,
                empowering individuals and communities to live healthier, more fulfilling lives. We aim to
                become a trusted leader in mental health care by delivering innovative, evidence-based
                services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Provider */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Team</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-neutral-dark sm:text-4xl">
              Meet Your Provider
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-12 max-w-2xl rounded-2xl border border-secondary/30 bg-white p-8 shadow-md text-center"
          >
            <div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full ring-4 ring-secondary/40">
              <Image
                src="/dr-madestin.png"
                alt={`${SITE_CONFIG.founder.name} — ${SITE_CONFIG.founder.title} at ${SITE_CONFIG.name}`}
                width={160}
                height={160}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-neutral-dark">{SITE_CONFIG.founder.name}</h3>
            <p className="text-secondary-dark font-medium">{SITE_CONFIG.founder.title}</p>
            <p className="mt-4 text-neutral-mid leading-relaxed">
              {SITE_CONFIG.founder.name.split(" ")[1]} founded {SITE_CONFIG.name} in 2022 with a vision to provide compassionate,
              accessible mental health care. With extensive experience in psychiatric evaluation,
              psychiatric medication management, and psychotherapy, our team is dedicated to helping
              clients achieve complete recovery and emotional well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-neutral-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-neutral-dark sm:text-4xl">
              Our Core Values
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="rounded-xl bg-white p-6 shadow-sm text-center"
                >
                  <div className="mx-auto mb-3 inline-flex rounded-lg bg-primary-light p-2.5">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-neutral-dark">{value.title}</h3>
                  <p className="mt-1 text-sm text-neutral-mid">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-neutral-dark sm:text-4xl">
              Why Choose Mindcare of America?
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 rounded-xl bg-primary-light p-3 h-fit">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-dark">{item.title}</h3>
                    <p className="mt-1 text-neutral-mid">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
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
          <h2 className="mt-6 font-display text-3xl font-bold">Start Your Healing Journey</h2>
          <p className="mt-4 text-cream/85">
            You don&apos;t have to face this alone. Let us help you take the first step.
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
