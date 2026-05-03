"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/site-config";

const faqs = [
  {
    question: "What mental health services do you offer?",
    answer:
      "We offer psychiatric evaluations, psychiatric medication management, all types of psychotherapy (including CBT and DBT), and Medication Assisted Treatment (MAT) for substance use disorders. We treat depression, anxiety, ADHD, bipolar disorder, PTSD, OCD, schizophrenia, eating disorders, autism spectrum disorder, and more.",
  },
  {
    question: "Do you offer telehealth appointments?",
    answer:
      "Yes — we offer secure telehealth psychiatry and therapy appointments for patients located anywhere in Florida. You can schedule a virtual visit for psychiatric evaluations, medication management, and psychotherapy from the comfort of your home.",
  },
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept most major insurance plans including Medicare, Florida Medicaid, Aetna, Cigna, United Healthcare, Oscar Health, Florida Blue, and Optum. We also offer self-pay options. Contact us to verify your specific coverage before your first visit.",
  },
  {
    question: "Do you treat children and teenagers?",
    answer:
      "Yes — Mindcare of America provides mental health care for all ages including children, teens, adults, and seniors. We offer child and adolescent psychiatry for conditions like ADHD, anxiety, autism spectrum disorder, conduct disorder, and depression.",
  },
  {
    question: "Where is your office located?",
    answer:
      "Our office is at 5813 South Congress Avenue, Atlantis, FL 33462 — conveniently located near Lake Worth, Boynton Beach, Wellington, Greenacres, West Palm Beach, Delray Beach, and Boca Raton. We serve all of Palm Beach County and offer telehealth statewide.",
  },
  {
    question: "How do I book my first appointment?",
    answer: `You can book by calling our office at ${SITE_CONFIG.phone.landline.display} or cell ${SITE_CONFIG.phone.cell.display}, emailing ${SITE_CONFIG.email}, or using our online booking portal. We also accept appointments through Grow Therapy and Headway for select insurance plans. We typically respond within 1 business day.`,
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-neutral-light">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Common Questions
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-neutral-dark sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-neutral-mid">
            Find quick answers to common questions about our services, insurance, and scheduling.
          </p>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-xl bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 font-semibold text-neutral-dark">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={cn(
                      "shrink-0 text-primary transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 leading-relaxed text-neutral-mid">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
