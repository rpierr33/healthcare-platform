"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Calendar, Shield, Zap, Clock, Send, CheckCircle, Video, Building2 } from "lucide-react";
import { appointmentSchema, type AppointmentFormData, conditions, insuranceProviders } from "@/lib/validations/schemas";
import { cn } from "@/lib/utils";

type BookingTab = "zocdoc" | "direct";

export function BookContent() {
  const [activeTab, setActiveTab] = useState<BookingTab>("direct");
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
              Book an Appointment
            </h1>
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
              onClick={() => setActiveTab("direct")}
              className={cn(
                "flex-1 rounded-lg py-3 text-sm font-semibold transition-all",
                activeTab === "direct"
                  ? "bg-white text-primary shadow-sm"
                  : "text-neutral-mid hover:text-neutral-dark"
              )}
            >
              <Zap size={16} className="mr-1.5 inline" />
              Book Directly With Us
            </button>
            <button
              onClick={() => setActiveTab("zocdoc")}
              className={cn(
                "flex-1 rounded-lg py-3 text-sm font-semibold transition-all",
                activeTab === "zocdoc"
                  ? "bg-white text-primary shadow-sm"
                  : "text-neutral-mid hover:text-neutral-dark"
              )}
            >
              <Shield size={16} className="mr-1.5 inline" />
              Book via Telehealth Platforms
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "zocdoc" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="font-display text-xl font-bold text-neutral-dark">
                  For Telehealth Visits Across Florida
                </h3>
                <p className="mt-2 text-neutral-mid">
                  Choose your insurance provider below to book a telehealth appointment through our partner platforms.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl bg-accent-light p-6">
                    <h4 className="font-semibold text-neutral-dark">
                      Medicare, Florida Medicaid, Aetna, Cigna, Optum, United Healthcare
                    </h4>
                    <p className="mt-1 text-sm text-neutral-mid">Book through Grow Therapy</p>
                    <a
                      href="https://growtherapy.com/book-appointment?id=35965&utm_source=provider-sourced&utm_medium=booking-link&utm_campaign=provider-dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent/90"
                    >
                      <Calendar size={16} />
                      Book on Grow Therapy
                    </a>
                  </div>

                  <div className="rounded-xl bg-secondary-light p-6">
                    <h4 className="font-semibold text-neutral-dark">
                      Oscar Health, Oxford Plan, Florida Blue, United Healthcare, Aetna, Cigna
                    </h4>
                    <p className="mt-1 text-sm text-neutral-mid">Book through Headway</p>
                    <a
                      href="https://headway.co/providers/ezechiel-madestin?utm_source=pem&utm_medium=direct_link&utm_campaign=47552"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-secondary/90"
                    >
                      <Calendar size={16} />
                      Book on Headway
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="font-display text-xl font-bold text-neutral-dark">
                  For In-Office Visits
                </h3>
                <p className="mt-2 text-neutral-mid">
                  Visit us at our Atlantis, FL office. Call us or use the direct booking form.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:5617970724"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white"
                  >
                    Call (561) 797-0724
                  </a>
                  <button
                    onClick={() => setActiveTab("direct")}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary"
                  >
                    Use Direct Booking Form
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
                Appointment Request Submitted!
              </h3>
              <p className="mt-2 text-neutral-mid">
                We&apos;ll review your request and reach out within 1 business day to confirm.
              </p>
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
                  Book Directly With Us
                </h3>
                <p className="mt-1 text-sm text-neutral-mid">
                  Fastest for self-pay or urgent requests. Fields marked * are required.
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
                  <label className="block text-sm font-medium text-neutral-dark" htmlFor="dob">Date of Birth</label>
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
                <div>
                  <label className="block text-sm font-medium text-neutral-dark">Area of Focus *</label>
                  <div className="mt-1 max-h-40 overflow-y-auto rounded-lg border border-gray-300 p-3">
                    {conditions.map((c) => (
                      <label key={c} className="flex items-center gap-2 py-1 text-sm">
                        <input type="checkbox" value={c} {...register("conditions")} className="rounded border-gray-300 text-primary focus:ring-primary" />
                        {c}
                      </label>
                    ))}
                  </div>
                  {errors.conditions && <p className="mt-1 text-xs text-red-500">{errors.conditions.message}</p>}
                </div>

                {/* Booking-specific fields */}
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
                  <label className="block text-sm font-medium text-neutral-dark" htmlFor="message">Message / Additional Notes</label>
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
                {submitting ? "Submitting..." : "Request Appointment"}
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </>
  );
}
