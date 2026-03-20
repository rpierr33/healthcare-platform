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
      <section className="bg-gradient-to-b from-primary-light to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="font-display text-4xl font-bold text-neutral-dark sm:text-5xl">
              About Mindcare of America
            </h1>
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
                Mindcare of America is a mental health practice founded in 2022 by Dr. Ezechiel Madestin.
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
            >
              <div className="rounded-2xl bg-primary-light p-8">
                <h3 className="font-display text-xl font-bold text-primary">Our Fundamental Belief</h3>
                <p className="mt-4 text-neutral-dark leading-relaxed italic">
                  &ldquo;We believe the stigmatization of mental illnesses must be banished. We also believe
                  that people suffering from mental illnesses can be completely restored if they get
                  appropriate treatment.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-neutral-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-8 shadow-sm"
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
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent-light p-3">
                <Lightbulb size={28} className="text-accent" />
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
            className="mx-auto mt-12 max-w-2xl rounded-2xl bg-white p-8 shadow-md text-center"
          >
            <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary-light to-accent-light">
              <Image src="/logo.png" alt="Dr. Ezechiel Madestin" width={80} height={80} className="h-20 w-auto" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-dark">Dr. Ezechiel Madestin</h3>
            <p className="text-primary font-medium">Founder & Psychiatric Provider</p>
            <p className="mt-4 text-neutral-mid leading-relaxed">
              Dr. Madestin founded Mindcare of America in 2022 with a vision to provide compassionate,
              accessible mental health care. With extensive experience in psychiatric evaluation,
              medication management, and psychotherapy, Dr. Madestin leads a team dedicated to helping
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
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-3xl px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold">Start Your Healing Journey</h2>
          <p className="mt-4 text-primary-light">
            You don&apos;t have to face this alone. Let us help you take the first step.
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
