"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Mindcare of America changed my life. Dr. Madestin and the team provided the most compassionate care I've ever received. I finally feel like myself again.",
    rating: 5,
  },
  {
    name: "James T.",
    text: "The telehealth option made it so easy to get the help I needed. The staff is incredibly professional and truly cares about your well-being.",
    rating: 5,
  },
  {
    name: "Maria L.",
    text: "I was nervous about seeking help, but from the first visit I felt welcomed and understood. The treatment plan was tailored specifically to my needs.",
    rating: 5,
  },
  {
    name: "David R.",
    text: "Outstanding care for my son's ADHD. The team took the time to explain everything and made my child feel comfortable throughout the process.",
    rating: 5,
  },
];

const AUTOPLAY_INTERVAL = 5000;

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="relative rounded-2xl bg-white p-8 shadow-lg">
      {/* Gradient border effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(135deg,#00838F,#4CAF50,#F5A623)_border-box] opacity-60" />

      <Quote size={36} className="mb-4 text-primary/15" />

      <div className="mb-4 flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-secondary text-secondary" />
        ))}
      </div>

      <p className="text-base leading-relaxed text-neutral-dark/90 italic sm:text-lg">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
          {testimonial.name.charAt(0)}
        </div>
        <p className="font-semibold text-primary">{testimonial.name}</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const lastTickRef = useRef(Date.now());

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () =>
      setCurrent(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      ),
    []
  );

  // Reset progress when slide changes
  useEffect(() => {
    progressRef.current = 0;
    setProgress(0);
    lastTickRef.current = Date.now();
  }, [current]);

  // Autoplay with progress tracking
  useEffect(() => {
    if (isPaused) return;

    const tick = () => {
      const now = Date.now();
      const delta = now - lastTickRef.current;
      lastTickRef.current = now;
      progressRef.current = Math.min(
        progressRef.current + delta / AUTOPLAY_INTERVAL,
        1
      );
      setProgress(progressRef.current);

      if (progressRef.current >= 1) {
        next();
      } else {
        rafId = requestAnimationFrame(tick);
      }
    };

    let rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused, current, next]);

  // On desktop we show 2 cards; determine the second index
  const secondIndex = (current + 1) % testimonials.length;

  const springTransition = {
    type: "spring" as const,
    stiffness: 260,
    damping: 26,
    mass: 0.8,
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary-light/40 to-primary-light py-20">
      {/* Subtle background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #00838F 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-neutral-dark sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-neutral-mid">
            Hear from the people whose lives we have helped transform.
          </p>
        </div>

        {/* Carousel area */}
        <div
          className="relative mx-auto mt-14 max-w-5xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={springTransition}
            >
              {/* Desktop: 2 cards, Mobile: 1 card */}
              <div className="grid gap-6 lg:grid-cols-2">
                <TestimonialCard testimonial={testimonials[current]} />
                <div className="hidden lg:block">
                  <TestimonialCard testimonial={testimonials[secondIndex]} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              onClick={prev}
              className="rounded-full border-2 border-gray-200 p-2.5 text-neutral-mid transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary hover:shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-gradient-to-r from-primary to-accent"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="rounded-full border-2 border-gray-200 p-2.5 text-neutral-mid transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary hover:shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Autoplay progress bar */}
          <div className="mx-auto mt-6 h-1 max-w-xs overflow-hidden rounded-full bg-gray-200">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
              style={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.05, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
