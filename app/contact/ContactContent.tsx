"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight, ArrowLeft, Printer } from "lucide-react";
import Link from "next/link";
import { leadSchema, type LeadFormData, conditions, insuranceProviders } from "@/lib/validations/schemas";
import { SITE_CONFIG } from "@/lib/site-config";

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      preferredContact: "Either",
      conditions: [],
    },
  });

  const goToStep2 = async () => {
    const valid = await trigger(["firstName", "lastName", "email", "phone"]);
    if (valid) setStep(2);
  };

  const errorMsg = `Something went wrong. Please try again or call our office at ${SITE_CONFIG.phone.landline.display}.`;

  const onSubmit = async (data: LeadFormData) => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(errorMsg);
      }
    } catch {
      setError(errorMsg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream via-primary-light/40 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="font-display text-4xl font-bold text-neutral-dark sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-3 font-display text-lg italic text-secondary-dark sm:text-xl">
              {SITE_CONFIG.tagline}
            </p>
            <p className="mt-4 text-lg text-neutral-mid">
              We&apos;re here to help. Reach out and we&apos;ll respond within 1 business day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-neutral-dark">Get in Touch</h2>
              <p className="mt-2 text-neutral-mid">
                Have questions? We&apos;d love to hear from you.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary-light p-2.5">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-dark">Office Address</p>
                    <p className="text-neutral-mid">
                      {SITE_CONFIG.address.street}
                      <br />
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary-light p-2.5">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-dark">Phone</p>
                    <p className="mt-1">
                      <span className="text-sm text-neutral-mid">{SITE_CONFIG.phone.landline.label}: </span>
                      <a
                        href={`tel:${SITE_CONFIG.phone.landline.tel}`}
                        className="font-medium text-primary hover:text-primary-dark"
                      >
                        {SITE_CONFIG.phone.landline.display}
                      </a>
                    </p>
                    <p>
                      <span className="text-sm text-neutral-mid">{SITE_CONFIG.phone.cell.label}: </span>
                      <a
                        href={`tel:${SITE_CONFIG.phone.cell.tel}`}
                        className="font-medium text-primary hover:text-primary-dark"
                      >
                        {SITE_CONFIG.phone.cell.display}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary-light p-2.5">
                    <Printer size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-dark">Fax</p>
                    <p className="text-neutral-mid">{SITE_CONFIG.fax.display}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary-light p-2.5">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-dark">Email</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-primary hover:text-primary-dark"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary-light p-2.5">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-dark">Hours of Operation</p>
                    <p className="text-neutral-mid">
                      {SITE_CONFIG.hours.weekdays}
                      <br />
                      {SITE_CONFIG.hours.saturday}
                      <br />
                      {SITE_CONFIG.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-xl ring-1 ring-secondary/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.0!2d-80.095!3d26.595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s5813+South+Congress+Avenue+Atlantis+FL+33462!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mindcare of America Office Location"
                />
              </div>

              {/* Closing line */}
              <div className="mt-8 rounded-xl border border-secondary/30 bg-cream p-5 text-center">
                <p className="font-display text-base italic text-primary-dark">
                  {SITE_CONFIG.closingLine}
                </p>
                <p className="mt-1 text-sm text-neutral-mid italic">{SITE_CONFIG.closingSubline}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center rounded-2xl bg-accent-light p-12 text-center"
                >
                  <CheckCircle size={48} className="text-accent" />
                  <h3 className="mt-4 font-display text-2xl font-bold text-neutral-dark">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-neutral-mid">
                    Thank you for reaching out. We&apos;ll get back to you within 1 business day.
                  </p>
                  <div className="mt-6 space-y-3">
                    <p className="text-sm text-neutral-mid">
                      Need help sooner? Call us directly:
                    </p>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <a
                        href={`tel:${SITE_CONFIG.phone.landline.tel}`}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
                      >
                        <Phone size={16} />
                        {SITE_CONFIG.phone.landline.label} {SITE_CONFIG.phone.landline.display}
                      </a>
                      <a
                        href={`tel:${SITE_CONFIG.phone.cell.tel}`}
                        className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
                      >
                        <Phone size={16} />
                        {SITE_CONFIG.phone.cell.label} {SITE_CONFIG.phone.cell.display}
                      </a>
                    </div>
                    <div className="pt-2">
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark"
                      >
                        Learn more about our services <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h2 className="font-display text-2xl font-bold text-neutral-dark">Send Us a Message</h2>

                  {/* Step indicator */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white ${step >= 1 ? "bg-primary" : "bg-gray-300"}`}>1</div>
                    <div className={`h-0.5 flex-1 ${step >= 2 ? "bg-primary" : "bg-gray-200"}`} />
                    <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white ${step >= 2 ? "bg-primary" : "bg-gray-300"}`}>2</div>
                  </div>
                  <p className="mt-2 text-sm text-neutral-mid">
                    {step === 1 ? "Step 1: Your contact information" : "Step 2: Tell us how we can help"}
                  </p>

                  <AnimatePresence mode="wait">
                    {step === 1 ? (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="mt-6 grid gap-4 sm:grid-cols-2"
                      >
                        <div>
                          <label className="block text-sm font-medium text-neutral-dark" htmlFor="firstName">First Name *</label>
                          <input
                            id="firstName"
                            {...register("firstName")}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                          />
                          {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-neutral-dark" htmlFor="lastName">Last Name *</label>
                          <input
                            id="lastName"
                            {...register("lastName")}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                          />
                          {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-neutral-dark" htmlFor="email">Email *</label>
                          <input
                            id="email"
                            type="email"
                            {...register("email")}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                          />
                          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-neutral-dark" htmlFor="phone">Phone *</label>
                          <input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            placeholder="(555) 123-4567"
                            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                          />
                          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                        </div>

                        <div className="sm:col-span-2">
                          <button
                            type="button"
                            onClick={goToStep2}
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all hover:bg-primary-dark"
                          >
                            Continue
                            <ArrowRight size={18} />
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="mt-6 grid gap-4 sm:grid-cols-2"
                      >
                        <div>
                          <label className="block text-sm font-medium text-neutral-dark" htmlFor="dob">Date of Birth <span className="text-neutral-mid">(optional)</span></label>
                          <input
                            id="dob"
                            type="date"
                            {...register("dob")}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-neutral-dark" htmlFor="preferredContact">Preferred Contact Method</label>
                          <select
                            id="preferredContact"
                            {...register("preferredContact")}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                          >
                            <option value="Either">Either</option>
                            <option value="Email">Email</option>
                            <option value="Phone">Phone</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-neutral-dark" htmlFor="insurance">Insurance Provider *</label>
                          <select
                            id="insurance"
                            {...register("insurance")}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                          >
                            <option value="">Select insurance...</option>
                            {insuranceProviders.map((provider) => (
                              <option key={provider} value={provider}>{provider}</option>
                            ))}
                          </select>
                          {errors.insurance && <p className="mt-1 text-xs text-red-500">{errors.insurance.message}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-neutral-dark">Area of Focus *</label>
                          <div className="mt-1 grid grid-cols-1 gap-1.5 rounded-lg border border-gray-300 p-3">
                            {conditions.map((condition) => (
                              <label key={condition} className="flex items-center gap-2 rounded px-1 py-1 text-sm hover:bg-neutral-light">
                                <input
                                  type="checkbox"
                                  value={condition}
                                  {...register("conditions")}
                                  className="rounded border-gray-300 text-primary focus:ring-primary"
                                />
                                {condition}
                              </label>
                            ))}
                          </div>
                          {errors.conditions && <p className="mt-1 text-xs text-red-500">{errors.conditions.message}</p>}
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-sm font-medium text-neutral-dark" htmlFor="message">Message / Additional Notes <span className="text-neutral-mid">(optional)</span></label>
                          <textarea
                            id="message"
                            {...register("message")}
                            rows={4}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                            placeholder="Tell us how we can help..."
                          />
                        </div>

                        {error && (
                          <p className="sm:col-span-2 text-sm text-red-500">{error}</p>
                        )}

                        <div className="sm:col-span-2 flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 px-6 py-3 text-sm font-semibold text-neutral-mid transition-all hover:border-primary hover:text-primary"
                          >
                            <ArrowLeft size={16} />
                            Back
                          </button>
                          <button
                            type="submit"
                            disabled={submitting}
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all hover:bg-primary-dark disabled:opacity-50"
                          >
                            <Send size={18} />
                            {submitting ? "Sending..." : "Send Message"}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
