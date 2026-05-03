"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  CheckCircle,
  Video,
  Shield,
  Heart,
  UserCircle,
} from "lucide-react";
import { LeafDecoration } from "@/components/ui/LeafDecoration";
import { SITE_CONFIG } from "@/lib/site-config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const badgePulse = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.04, 1],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as const },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Layered cream + soft sage background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream to-white" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-secondary-light/30" />

      {/* Botanical leaf decorations — corners */}
      <div className="pointer-events-none absolute -top-8 -left-8 h-64 w-64 opacity-70">
        <LeafDecoration variant="corner-tl" primaryColor="#1B4332" accentColor="#5C8A5C" className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute -bottom-12 -right-8 h-72 w-72 opacity-60">
        <LeafDecoration variant="corner-br" primaryColor="#1B4332" accentColor="#C9A961" className="h-full w-full" />
      </div>

      {/* Subtle gold flourish behind heading */}
      <div className="pointer-events-none absolute top-12 right-[12%] h-40 w-40 rounded-full bg-secondary/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-[15%] h-48 w-48 rounded-full bg-primary/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badges with pulse */}
          <motion.div
            variants={childVariants}
            className="mb-8 flex flex-wrap items-center justify-center gap-3"
          >
            <motion.span
              variants={badgePulse}
              initial="initial"
              animate="animate"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent-light px-4 py-1.5 text-xs font-semibold text-primary shadow-sm ring-1 ring-primary/15"
            >
              <CheckCircle size={14} />
              Accepting New Patients
            </motion.span>
            <motion.span
              variants={badgePulse}
              initial="initial"
              animate="animate"
              style={{ animationDelay: "0.5s" }}
              className="inline-flex items-center gap-1.5 rounded-full bg-secondary-light px-4 py-1.5 text-xs font-semibold text-secondary-dark shadow-sm ring-1 ring-secondary/30"
            >
              <Video size={14} />
              Telehealth Available
            </motion.span>
          </motion.div>

          {/* Heading with gradient text */}
          <motion.h1
            variants={childVariants}
            className="font-display text-4xl font-bold tracking-tight text-neutral-dark sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Compassionate{" "}
            <span className="bg-gradient-to-r from-primary via-primary-dark to-accent bg-clip-text text-transparent">
              Mental Health Care
            </span>{" "}
            in South Florida
          </motion.h1>

          {/* Flyer tagline — Playfair italic, gold-leaf flanked */}
          <motion.div
            variants={childVariants}
            className="mt-6 flex items-center justify-center gap-4"
          >
            <span aria-hidden="true" className="h-px w-12 bg-gradient-to-r from-transparent to-secondary" />
            <p className="font-display text-xl italic text-secondary-dark sm:text-2xl">
              {SITE_CONFIG.tagline}
            </p>
            <span aria-hidden="true" className="h-px w-12 bg-gradient-to-l from-transparent to-secondary" />
          </motion.div>

          <motion.p
            variants={childVariants}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-mid sm:text-xl"
          >
            Psychiatry, therapy, and medication management for individuals and
            families of all ages. In-office in Atlantis, FL or via telehealth
            across Florida — accepting new patients today.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={childVariants}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/book"
              data-book-cta
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              <Calendar size={20} />
              Book an Appointment
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-secondary bg-white/60 px-8 py-4 text-base font-semibold text-secondary-dark shadow-sm transition-all duration-300 hover:bg-secondary hover:text-white hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              Contact Us
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={childVariants}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-mid sm:gap-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light">
                <UserCircle size={14} className="text-primary" />
              </div>
              <span className="font-medium">Led by {SITE_CONFIG.founder.name}</span>
            </div>
            <div className="hidden h-4 w-px bg-neutral-mid/30 sm:block" />
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-light">
                <Heart size={14} className="text-accent" />
              </div>
              <span className="font-medium">Trusted by 500+ Patients</span>
            </div>
            <div className="hidden h-4 w-px bg-neutral-mid/30 sm:block" />
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-light">
                <Shield size={14} className="text-secondary-dark" />
              </div>
              <span className="font-medium">Licensed &amp; Insured</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated wave SVG separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative block h-12 w-full sm:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,40 C150,80 350,0 500,40 C650,80 800,20 1000,50 C1100,65 1150,40 1200,45 L1200,120 L0,120 Z"
            fill="white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          />
          <motion.path
            d="M0,60 C200,20 400,90 600,50 C800,10 1000,70 1200,40 L1200,120 L0,120 Z"
            fill="white"
            fillOpacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
          />
        </motion.svg>
      </div>
    </section>
  );
}
