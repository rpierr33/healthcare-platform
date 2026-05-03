"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Calendar, Zap, Send, CheckCircle, Video, Building2, Phone, ArrowRight, ExternalLink } from "lucide-react";
import { appointmentSchema, type AppointmentFormData, conditions, insuranceProviders } from "@/lib/validations/schemas";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

type BookingTab = "portals" | "direct";

export function BookContent() {
  const [activeTab, setActiveTab] = useState<BookingTab>("portals");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      preferredContact: "Either",
      conditions: [],
      preferredTime: "Morning",
      visitType: "Telehealth",
    },
  });

  const errorMsg = `Something went wrong. Please try again or call our office at ${SITE_CONFIG.phone.landline.display}.`;

  const onSubmit = async (data: AppointmentFormData) => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/appointments", {
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
              Book an Appointment
            </h1>
            <p className="mt-3 font-display text-lg italic text-secondary-dark sm:text-xl">
              {SITE_CONFIG.tagline}
            </p>
            <p className="mt-4 text-lg text-neutral-mid">
              Choose your preferred booking method below. We offer both in-person and telehealth appointments.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="mb-8 flex rounded-xl bg-neutral-light p-1">
            <button
              onClick={() => setActiveTab("portals")}
              className={cn(
                "flex-1 rounded-lg py-3 text-sm font-semibold transition-all",
                activeTab === "portals"
                  ? "bg-white text-primary shadow-sm"
                  : "text-neutral-mid hover:text-neutral-dark"
              )}
            >
              <Zap size={16} className="mr-1.5 inline" />
              Book Instantly
            </button>
            <button
              onClick={() => setActiveTab("direct")}
              className={cn(
                "flex-1 rounded-lg py-3 text-sm font-semibold transition-all",
                activeTab === "direct"
                  ? "bg-white text-primary shadow-sm"
                  : "text-neutral-mid hover:text-neutral-dark"
              )}
            >
              <Phone size={16} className="mr-1.5 inline" />
              Request a Call
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "portals" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="font-display text-xl font-bold text-neutral-dark">
                  Choose an Online Booking Portal
                </h3>
                <p className="mt-2 text-neutral-mid">
                  Schedule your visit through our practice portal or one of our insurance-tied platforms.
                </p>

                <div className="mt-6 space-y-4">
                  {/* EnableDoc — practice's own portal, FIRST card */}
                  <div className="relative rounded-xl border-2 border-primary bg-gradient-to-br from-primary-light/60 to-cream p-6">
                    <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                      Recommended
                    </span>
                    <h4 className="mt-1 font-semibold text-neutral-dark">
                      Mindcare of America Booking Portal
                    </h4>
                    <p className="mt-1 text-sm text-neutral-mid">
                      {SITE_CONFIG.booking.enableDoc.description} Available for all visit types — psychiatric evaluation, medication management, and psychotherapy.
                    </p>
                    <a
                      href={SITE_CONFIG.booking.enableDoc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/30 transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/40"
                    >
                      <Calendar size={16} />
                      Schedule Online
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  {/* Grow Therapy */}
                  <div className="rounded-xl bg-accent-light p-6">
                    <h4 className="font-semibold text-neutral-dark">
                      {SITE_CONFIG.booking.growTherapy.label}
                    </h4>
                    <p className="mt-1 text-sm text-neutral-mid">
                      For: {SITE_CONFIG.booking.growTherapy.insurances}
                    </p>
                    <a
                      href={SITE_CONFIG.booking.growTherapy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
                    >
                      <Calendar size={16} />
                      Book on {SITE_CONFIG.booking.growTherapy.label}
                    </a>
                  </div>

                  {/* Headway */}
                  <div className="rounded-xl bg-secondary-light p-6">
                    <h4 className="font-semibold text-neutral-dark">
                      {SITE_CONFIG.booking.headway.label}
                    </h4>
                    <p className="mt-1 text-sm text-neutral-mid">
                      For: {SITE_CONFIG.booking.headway.insurances}
                    </p>
                    <a
                      href={SITE_CONFIG.booking.headway.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-full bg-secondary-dark px-6 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
                    >
                      <Calendar size={16} />
                      Book on {SITE_CONFIG.booking.headway.label}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="font-display text-xl font-bold text-neutral-dark">
                  Prefer to Call?
                </h3>
                <p className="mt-2 text-neutral-mid">
                  Reach our office directly to schedule your visit at our Atlantis, FL location or via telehealth.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`tel:${SITE_CONFIG.phone.landline.tel}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white"
                  >
                    <Phone size={16} />
                    {SITE_CONFIG.phone.landline.label}: {SITE_CONFIG.phone.landline.display}
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone.cell.tel}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary"
                  >
                    <Phone size={16} />
                    {SITE_CONFIG.phone.cell.label}: {SITE_CONFIG.phone.cell.display}
                  </a>
                  <button
                    onClick={() => setActiveTab("direct")}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-secondary-dark px-6 py-2.5 text-sm font-semibold text-secondary-dark"
                  >
                    Request a Call
                  </button>
                </div>
              </div>
            </motion.div>
          ) : submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center rounded-2xl bg-accent-light p-12 text-center"
            >
              <CheckCircle size={48} className="text-accent" />
              <h3 className="mt-4 font-display text-2xl font-bold text-neutral-dark">
                Request Sent!
              </h3>
              <p className="mt-2 text-neutral-mid">
                We&apos;ll call you back within 1 business day to confirm your appointment.
              </p>
              <div className="mt-2 rounded-lg bg-white/60 px-4 py-3">
                <p className="text-sm text-neutral-mid">
                  <strong className="text-neutral-dark">What happens next:</strong> Our scheduling coordinator will call or email you to confirm the date, time, and any preparation needed for your visit.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-sm text-neutral-mid">
                  Need to reach us sooner?
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <a
                    href={`tel:${SITE_CONFIG.phone.landline.tel}`}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
                  >
                    <Phone size={16} />
                    {SITE_CONFIG.phone.landline.display}
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone.cell.tel}`}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
                  >
                    <Phone size={16} />
                    {SITE_CONFIG.phone.cell.display}
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
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-neutral-dark">
                  Request a Call
                </h3>
                <p className="mt-1 text-sm text-neutral-mid">
                  Share your preferences and our scheduling coordinator will call you back within 1 business day to confirm your appointment. Fields marked * are required.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-neutral-dark" htmlFor="firstName">First Name *</label>
                  <input id="firstName" {...register("firstName")} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
                  {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-dark" htmlFor="lastName">Last Name *</label>
                  <input id="lastName" {...register("lastName")} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
                  {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-dark" htmlFor="email">Email *</label>
                  <input id="email" type="email" {...register("email")} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-dark" htmlFor="phone">Phone *</label>
                  <input id="phone" type="tel" {...register("phone")} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-dark" htmlFor="dob">Date of Birth <span className="text-neutral-mid">(optional)</span></label>
                  <input id="dob" type="date" {...register("dob")} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-dark" htmlFor="preferredContact">Preferred Contact Method</label>
                  <select id="preferredContact" {...register("preferredContact")} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary">
                    <option value="Either">Either</option>
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-dark" htmlFor="insurance">Insurance Provider *</label>
                  <select id="insurance" {...register("insurance")} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary">
                    <option value="">Select insurance...</option>
                    {insuranceProviders.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                  {errors.insurance && <p className="mt-1 text-xs text-red-500">{errors.insurance.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-neutral-dark">Area of Focus *</label>
                  <div className="mt-1 grid grid-cols-1 gap-1.5 rounded-lg border border-gray-300 p-3 sm:grid-cols-2">
                    {conditions.map((c) => (
                      <label key={c} className="flex items-center gap-2 rounded px-1 py-1 text-sm hover:bg-neutral-light">
                        <input type="checkbox" value={c} {...register("conditions")} className="rounded border-gray-300 text-primary focus:ring-primary" />
                        {c}
                      </label>
                    ))}
                  </div>
                  {errors.conditions && <p className="mt-1 text-xs text-red-500">{errors.conditions.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-dark" htmlFor="preferredDate">Preferred Appointment Date *</label>
                  <input id="preferredDate" type="date" {...register("preferredDate")} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary" />
                  {errors.preferredDate && <p className="mt-1 text-xs text-red-500">{errors.preferredDate.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-dark" htmlFor="preferredTime">Preferred Time of Day *</label>
                  <select id="preferredTime" {...register("preferredTime")} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary">
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-neutral-dark">Visit Type *</label>
                  <div className="mt-2 flex gap-4">
                    <label className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary-light">
                      <input type="radio" value="In-Person" {...register("visitType")} className="text-primary focus:ring-primary" />
                      <Building2 size={16} className="text-primary" />
                      <span className="text-sm">In-Person</span>
                    </label>
                    <label className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary-light">
                      <input type="radio" value="Telehealth" {...register("visitType")} className="text-primary focus:ring-primary" />
                      <Video size={16} className="text-primary" />
                      <span className="text-sm">Telehealth</span>
                    </label>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-neutral-dark" htmlFor="message">Message / Additional Notes <span className="text-neutral-mid">(optional)</span></label>
                  <textarea id="message" {...register("message")} rows={3} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Any additional details..." />
                </div>
              </div>

              {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all hover:bg-primary-dark disabled:opacity-50"
              >
                <Send size={18} />
                {submitting ? "Sending..." : "Send Request"}
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </>
  );
}
