"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Calendar, X } from "lucide-react";

const HIDDEN_PATH_PREFIXES = ["/admin", "/book"];
const STORAGE_KEY = "mc_floating_book_dismissed_v1";

export function FloatingBookingButton() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [otherCtaVisible, setOtherCtaVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "true") {
        setDismissed(true);
      }
    } catch {
      // sessionStorage may be unavailable (Safari private mode)
    }
  }, []);

  // Watch every in-page Book CTA. Hide the floater while any is in the viewport.
  useEffect(() => {
    if (!mounted) return;

    const visibleSet = new Set<Element>();
    let observer: IntersectionObserver | null = null;

    // Wait one frame so the new route's DOM is mounted before we query for CTAs
    const handle = window.setTimeout(() => {
      const ctaElements = document.querySelectorAll("[data-book-cta]");

      if (ctaElements.length === 0) {
        setOtherCtaVisible(false);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              visibleSet.add(entry.target);
            } else {
              visibleSet.delete(entry.target);
            }
          }
          setOtherCtaVisible(visibleSet.size > 0);
        },
        { threshold: 0.3 }
      );

      ctaElements.forEach((el) => observer!.observe(el));
    }, 50);

    return () => {
      window.clearTimeout(handle);
      observer?.disconnect();
      visibleSet.clear();
      setOtherCtaVisible(false);
    };
  }, [mounted, pathname]);

  if (!mounted) return null;
  if (HIDDEN_PATH_PREFIXES.some((p) => pathname.startsWith(p))) return null;

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore
    }
    setDismissed(true);
  };

  const visible = !dismissed && !otherCtaVisible;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="complementary"
          aria-label="Quick booking reminder"
          data-floating-cta
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 80 }}
          transition={{ duration: reduce ? 0 : 0.4, ease: "easeOut" }}
          className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 md:flex"
        >
          <Link
            href="/book"
            aria-label="Book an appointment with Mindcare of America"
            className="group relative flex items-center gap-3 rounded-2xl bg-gradient-to-br from-primary to-primary-dark px-4 py-3.5 pr-5 shadow-xl shadow-primary/30 ring-2 ring-secondary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/45 hover:ring-secondary hover:-translate-x-0.5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary-dark shadow-inner">
              <Calendar size={20} strokeWidth={2.4} />
            </span>
            <span className="font-display text-sm font-semibold leading-tight text-white">
              Book an
              <br />
              Appointment
            </span>
          </Link>
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss booking reminder"
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-cream text-primary-dark shadow-md ring-1 ring-primary/30 transition-all duration-200 hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            <X size={14} strokeWidth={2.6} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
