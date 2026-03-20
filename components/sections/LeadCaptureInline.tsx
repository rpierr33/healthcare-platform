"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send } from "lucide-react";

export function LeadCaptureInline() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: Record<string, string>) => {
    setSubmitting(true);
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
      if (res.ok) setSubmitted(true);
    } catch {
      // handle error silently
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h3 className="font-display text-2xl font-bold">Thank You!</h3>
          <p className="mt-2">We&apos;ll be in touch within 1 business day.</p>
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
