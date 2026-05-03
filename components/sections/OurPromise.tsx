"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { LeafBullet, LeafDecoration } from "@/components/ui/LeafDecoration";

export function OurPromise() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-20 text-white">
      {/* Botanical corner motifs */}
      <div className="pointer-events-none absolute -top-6 -left-8 h-64 w-64 opacity-25">
        <LeafDecoration
          variant="corner-tl"
          primaryColor="#C9A961"
          accentColor="#5C8A5C"
          className="h-full w-full"
        />
      </div>
      <div className="pointer-events-none absolute -bottom-8 -right-8 h-72 w-72 opacity-20">
        <LeafDecoration
          variant="corner-br"
          primaryColor="#C9A961"
          accentColor="#5C8A5C"
          className="h-full w-full"
        />
      </div>

      {/* Subtle radial light */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Brand mark + tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">
            Our Promise to You
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            <span className="bg-gradient-to-r from-secondary via-cream to-secondary bg-clip-text text-transparent">
              {SITE_CONFIG.tagline}
            </span>
          </h2>

          {/* Gold flourish divider */}
          <div className="mx-auto mt-6 max-w-xs">
            <LeafDecoration
              variant="flourish"
              primaryColor="#5C8A5C"
              accentColor="#C9A961"
              className="h-12 w-full"
            />
          </div>
        </motion.div>

        {/* Services list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-14 max-w-3xl"
        >
          <h3 className="text-center text-xs font-bold uppercase tracking-[0.25em] text-secondary/90">
            Services Provided
          </h3>
          <ul className="mt-8 space-y-5">
            {SITE_CONFIG.services.map((service, i) => (
              <motion.li
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-4 border-b border-secondary/15 pb-5 last:border-0"
              >
                <div className="shrink-0 pt-0.5">
                  <LeafBullet color="#C9A961" className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold text-cream sm:text-lg">
                    {service.title}
                  </p>
                  <p className="mt-0.5 text-sm italic text-secondary/95">
                    – {service.availability}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Closing line + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="font-display text-2xl italic text-cream sm:text-3xl">
            {SITE_CONFIG.closingLine}
          </p>
          <p className="mt-2 text-base text-cream/80 italic">
            {SITE_CONFIG.closingSubline}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book"
              data-book-cta
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-base font-semibold text-primary-dark shadow-lg shadow-secondary/30 transition-all duration-300 hover:bg-cream hover:shadow-xl hover:-translate-y-0.5"
            >
              <Calendar size={20} />
              Schedule a Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/60 px-8 py-4 text-base font-semibold text-secondary transition-all duration-300 hover:border-secondary hover:bg-secondary/10 hover:text-white"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
