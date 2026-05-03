"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export function LeadCaptureInline() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: Record<string, string>) => {
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          conditions: ["General Inquiry"],
          insurance: "Not specified",
          preferredContact: "Either",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-2xl px-4 text-center text-white">
          <h3 className="font-display text-2xl font-bold">Thank You!</h3>
          <p className="mt-2 text-primary-light">We&apos;ll be in touch within 1 business day.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={`tel:${SITE_CONFIG.phone.landline.tel}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/25"
            >
              <Phone size={16} />
              Need help now? Call {SITE_CONFIG.phone.landline.display}
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary-light hover:text-white"
            >
              View our services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h3 className="font-display text-2xl font-bold sm:text-3xl">
            Ready to Take the First Step?
          </h3>
          <p className="mt-2 text-primary-light">
            Leave your details and we&apos;ll reach out to you within 1 business day.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-4 sm:grid-cols-2">
          <input
            {...register("firstName", { required: true })}
            placeholder="First Name *"
            className="rounded-lg border-0 px-4 py-3 text-neutral-dark placeholder:text-gray-400 focus:ring-2 focus:ring-secondary"
          />
          <input
            {...register("lastName", { required: true })}
            placeholder="Last Name *"
            className="rounded-lg border-0 px-4 py-3 text-neutral-dark placeholder:text-gray-400 focus:ring-2 focus:ring-secondary"
          />
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email Address *"
            className="rounded-lg border-0 px-4 py-3 text-neutral-dark placeholder:text-gray-400 focus:ring-2 focus:ring-secondary"
          />
          <input
            {...register("phone", { required: true })}
            type="tel"
            placeholder="Phone Number *"
            className="rounded-lg border-0 px-4 py-3 text-neutral-dark placeholder:text-gray-400 focus:ring-2 focus:ring-secondary"
          />
          <div className="sm:col-span-2">
            {error && (
              <p className="mb-3 text-sm text-red-200">
                Something went wrong. Please try again or call our office at {SITE_CONFIG.phone.landline.display}.
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-3 font-semibold text-white transition-all hover:bg-secondary/90 disabled:opacity-50 sm:w-auto"
            >
              <Send size={18} />
              {submitting ? "Sending..." : "Get in Touch"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
