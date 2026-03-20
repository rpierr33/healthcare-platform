"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { leadSchema, type LeadFormData, conditions, insuranceProviders } from "@/lib/validations/schemas";

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      preferredContact: "Either",
      conditions: [],
    },
  });

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
        setError("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="font-display text-4xl font-bold text-neutral-dark sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-neutral-mid">
              We&apos;re here to help. Reach out to us and we&apos;ll respond within 1 business day.
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
                    <p className="text-neutral-mid">5813 South Congress Avenue<br />Atlantis, FL 33462</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary-light p-2.5">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-dark">Phone</p>
                    <a href="tel:5617970724" className="text-primary hover:text-primary-dark">(561) 797-0724</a>
                    <p className="text-sm text-neutral-mid">Fax: (833) 502-4172</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary-light p-2.5">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-dark">Email</p>
                    <a href="mailto:Mindcareofamerica@gmail.com" className="text-primary hover:text-primary-dark">
                      Mindcareofamerica@gmail.com
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
                      Mon–Fri: 9:00 AM – 5:00 PM EST<br />
                      Saturday: Upon Request<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-xl">
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
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h2 className="font-display text-2xl font-bold text-neutral-dark">Send Us a Message</h2>
                  <p className="mt-1 text-sm text-neutral-mid">Fields marked with * are required.</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
                        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-dark" htmlFor="dob">Date of Birth</label>
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
                      <div className="mt-1 max-h-40 overflow-y-auto rounded-lg border border-gray-300 p-3">
                        {conditions.map((condition) => (
                          <label key={condition} className="flex items-center gap-2 py-1 text-sm">
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
                      <label className="block text-sm font-medium text-neutral-dark" htmlFor="message">Message / Additional Notes</label>
                      <textarea
                        id="message"
                        {...register("message")}
                        rows={4}
                        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="mt-4 text-sm text-red-500">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all hover:bg-primary-dark disabled:opacity-50"
                  >
                    <Send size={18} />
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
