"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Users, Video } from "lucide-react";
import { useRef } from "react";

const textLines = [
  "Founded in 2022 by Dr. Ezechiel Madestin, Mindcare of America provides comprehensive mental healthcare services to individuals of all ages.",
  "We focus on healing the mind to promote human psychosocial development.",
];

const wordVariants = {
  hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function AboutSnapshot() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</p>

            <h2 className="mt-2 font-display text-3xl font-bold text-neutral-dark sm:text-4xl">
              Healing the Mind, Restoring Lives
            </h2>

            {/* Word-by-word animated paragraphs */}
            <motion.div
              className="mt-4 space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.02, delayChildren: 0.3 }}
            >
              <p className="text-lg leading-relaxed text-neutral-mid">
                {textLines[0].split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    transition={{ duration: 0.3 }}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </motion.div>

            <motion.p
              className="mt-4 leading-relaxed text-neutral-mid"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Our team of passionate healthcare professionals is committed to serving
              clients with diverse mental health needs using a patient-centered
              approach for complete recovery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
              >
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Gradient ring effect */}
            <div className="absolute -inset-1.5 rounded-[1.25rem] bg-gradient-to-br from-primary via-accent to-primary opacity-20 blur-sm" />
            <div className="absolute -inset-1 rounded-[1.2rem] bg-gradient-to-br from-primary via-accent to-primary opacity-30" />

            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary-light to-accent-light flex items-center justify-center"
            >
              <Image
                src="/logo.png"
                alt="Mindcare of America"
                width={300}
                height={300}
                className="h-48 w-auto opacity-80"
              />
            </motion.div>

            {/* Floating stat: Years of Service */}
            <motion.div
              className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black/5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6, type: "spring", stiffness: 200 }}
            >
              <p className="text-3xl font-bold text-primary">4+</p>
              <p className="text-sm text-neutral-mid">Years of Service</p>
            </motion.div>

            {/* Floating stat: All Ages Welcome */}
            <motion.div
              className="absolute -top-4 -right-4 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-black/5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8, type: "spring", stiffness: 200 }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-light">
                <Users size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-dark">All Ages</p>
                <p className="text-xs text-neutral-mid">Welcome</p>
              </div>
            </motion.div>

            {/* Floating stat: Telehealth Available */}
            <motion.div
              className="absolute -bottom-4 right-8 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-black/5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.0, type: "spring", stiffness: 200 }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-light">
                <Video size={18} className="text-secondary" />
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-dark">Telehealth</p>
                <p className="text-xs text-neutral-mid">Available</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
