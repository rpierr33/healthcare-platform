import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative">
      {/* Gradient top border */}
      <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-secondary" />

      {/* Subtle gradient overlay for depth */}
      <div className="relative bg-neutral-dark overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-primary/[0.06]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Image
                src="/logo.png"
                alt="Mindcare of America"
                width={340}
                height={100}
                className="h-32 w-auto mb-5"
              />
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                Psychiatry, therapy, and medication management for all ages in Atlantis, FL.
                Serving Palm Beach County and all of Florida via telehealth.
              </p>

              {/* Social Media Links */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { label: "Facebook", href: "https://facebook.com" },
                  { label: "TikTok", href: "https://tiktok.com" },
                  { label: "X", href: "https://x.com" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-gray-600 px-4 py-1.5 text-xs font-semibold tracking-wide text-gray-300 transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-white hover:shadow-[0_0_12px_rgba(0,131,143,0.25)]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Services" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact" },
                  { href: "/book", label: "Book an Appointment" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-sm text-gray-300 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Psychiatric Evaluation",
                  "Medication Management",
                  "Psychotherapy",
                  "Substance Use Treatment",
                  "Telehealth Services",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="group relative inline-block text-sm text-gray-300 transition-colors duration-300 hover:text-white"
                    >
                      {service}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Newsletter */}
            <div>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-secondary" />
                  <span className="text-sm text-gray-300">
                    5813 South Congress Avenue
                    <br />
                    Atlantis, FL 33462
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-secondary" />
                  <a
                    href="tel:5617970724"
                    className="group relative inline-block text-sm text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    (561) 797-0724
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-secondary" />
                  <a
                    href="mailto:info@mindcareofamerica.com"
                    className="group relative inline-block text-sm text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    info@mindcareofamerica.com
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              </ul>
              <div className="mt-5">
                <p className="text-sm text-gray-400">
                  <strong className="text-gray-300">Hours:</strong>
                  <br />
                  Mon&ndash;Fri: 9:00 AM &ndash; 5:00 PM EST
                  <br />
                  Sat: Upon Request
                  <br />
                  Sun: Closed
                </p>
              </div>

              {/* Stay Connected */}
              <div className="mt-8">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                  Stay Connected
                </h3>
                <p className="mb-3 text-xs text-gray-500">
                  Get wellness tips and updates delivered to your inbox.
                </p>
                <form className="flex gap-2" onSubmit={undefined}>
                  <input
                    type="email"
                    placeholder="Your email"
                    aria-label="Email for newsletter"
                    className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary/50"
                    readOnly
                  />
                  <button
                    type="button"
                    className="flex shrink-0 items-center gap-1 rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,131,143,0.35)] hover:brightness-110"
                  >
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 border-t border-gray-700/60 pt-8 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Mindcare of America. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
