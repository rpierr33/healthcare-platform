"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  Shield,
  Zap,
  Pill,
  Puzzle,
  AlertTriangle,
  Frown,
  Wind,
  Flame,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

const conditions = [
  { name: "Depression", icon: Frown, description: "Major Depressive Disorder and related conditions" },
  { name: "Anxiety", icon: Wind, description: "Generalized Anxiety Disorder and panic disorders" },
  { name: "Bipolar Disorder", icon: Zap, description: "Mood stabilization and management" },
  { name: "Schizophrenia", icon: Brain, description: "Comprehensive psychotic disorder treatment" },
  { name: "OCD", icon: Puzzle, description: "Obsessive-Compulsive Disorder management" },
  { name: "PTSD & Trauma", icon: Shield, description: "Trauma-informed care and recovery" },
  { name: "ADHD", icon: Flame, description: "Attention and focus disorder treatment" },
  { name: "Eating Disorders", icon: Heart, description: "Compassionate eating disorder support" },
  { name: "Autism Spectrum", icon: Puzzle, description: "Neurodevelopmental support for children" },
  { name: "Substance Use", icon: Pill, description: "Medication-Assisted Treatment (MAT)" },
  { name: "Conduct Disorder", icon: AlertTriangle, description: "Behavioral disorder management" },
  { name: "Other Conditions", icon: HelpCircle, description: "Comprehensive mental health support" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function ConditionsGrid() {
  return (
    <section className="bg-neutral-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">What We Treat</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-neutral-dark sm:text-4xl">
            Conditions We Treat
          </h2>
          <p className="mt-4 text-neutral-mid">
            We provide mental health care services for a wide range of mental illnesses,
            behavioral disorders, and neurodevelopmental conditions.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {conditions.map((condition) => {
            const Icon = condition.icon;
            return (
              <motion.div
                key={condition.name}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-xl border-t-[3px] border-t-transparent bg-white p-6 shadow-sm transition-all duration-300 hover:border-t-primary hover:shadow-lg hover:-translate-y-1.5"
              >
                <div className="mb-3 inline-flex rounded-lg bg-gradient-to-br from-primary-light to-primary-light p-2.5 transition-all duration-300 group-hover:from-primary/15 group-hover:to-accent/15 group-hover:scale-110">
                  <Icon size={22} className="text-primary transition-colors duration-300 group-hover:text-primary-dark" />
                </div>
                <h3 className="font-semibold text-neutral-dark">{condition.name}</h3>
                <p className="mt-1 text-sm text-neutral-mid">{condition.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-8 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20"
          >
            View All Services
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
