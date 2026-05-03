import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Printer, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { LeafDecoration } from "@/components/ui/LeafDecoration";

export function Footer() {
  return (
    <footer className="relative">
      {/* Forest green + gold gradient top border */}
      <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="relative bg-primary-dark overflow-hidden">
        {/* Subtle radial overlay for depth */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-secondary/[0.06]"
          aria-hidden="true"
        />

        {/* Botanical motifs at corners */}
        <div className="pointer-events-none absolute -top-4 -left-4 h-48 w-48 opacity-25">
          <LeafDecoration
            variant="corner-tl"
            primaryColor="#5C8A5C"
            accentColor="#C9A961"
            className="h-full w-full"
          />
        </div>
        <div className="pointer-events-none absolute -bottom-6 -right-4 h-56 w-56 opacity-20">
          <LeafDecoration
            variant="corner-br"
            primaryColor="#5C8A5C"
            accentColor="#C9A961"
            className="h-full w-full"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Tagline header */}
          <div className="mb-12 text-center">
            <p className="font-display text-2xl italic text-secondary sm:text-3xl">
              {SITE_CONFIG.tagline}
            </p>
            <div className="mt-3 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="h-px w-16 bg-gradient-to-r from-transparent to-secondary/60" />
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-secondary" />
              <span aria-hidden="true" className="h-px w-16 bg-gradient-to-l from-transparent to-secondary/60" />
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Image
                src="/logo.png"
                alt="Mindcare of America"
                width={400}
                height={120}
                className="h-36 w-auto mb-5"
              />
              <p className="mt-4 text-sm text-cream/85 leading-relaxed">
                Psychiatry, therapy, and medication management for all ages in Atlantis, FL.
                Serving Palm Beach County and all of Florida via telehealth.
              </p>

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
                    className="inline-block rounded-full border border-secondary/40 px-4 py-1.5 text-xs font-semibold tracking-wide text-cream/90 transition-all duration-300 hover:border-secondary hover:bg-secondary/15 hover:text-white hover:shadow-[0_0_12px_rgba(201,169,97,0.35)]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
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
                      className="group relative inline-block text-sm text-cream/85 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-secondary to-accent transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Services
              </h3>
              <ul className="space-y-3">
                {SITE_CONFIG.services.map((service) => (
                  <li key={service.title}>
                    <Link
                      href="/services"
                      className="group relative inline-block text-sm text-cream/85 transition-colors duration-300 hover:text-white"
                    >
                      {service.title}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-secondary to-accent transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-secondary" />
                  <span className="text-sm text-cream/85">
                    {SITE_CONFIG.address.street}
                    <br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-secondary" />
                  <span className="text-sm text-cream/85">
                    <span className="block">
                      <span className="text-cream/60 mr-1">{SITE_CONFIG.phone.landline.label}:</span>
                      <a
                        href={`tel:${SITE_CONFIG.phone.landline.tel}`}
                        className="text-cream/90 transition-colors duration-300 hover:text-white"
                      >
                        {SITE_CONFIG.phone.landline.display}
                      </a>
                    </span>
                    <span className="block mt-1">
                      <span className="text-cream/60 mr-1">{SITE_CONFIG.phone.cell.label}:</span>
                      <a
                        href={`tel:${SITE_CONFIG.phone.cell.tel}`}
                        className="text-cream/90 transition-colors duration-300 hover:text-white"
                      >
                        {SITE_CONFIG.phone.cell.display}
                      </a>
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Printer size={18} className="shrink-0 text-secondary" />
                  <span className="text-sm text-cream/85">
                    <span className="text-cream/60 mr-1">Fax:</span>
                    {SITE_CONFIG.fax.display}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-secondary" />
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="group relative inline-block text-sm text-cream/90 transition-colors duration-300 hover:text-white"
                  >
                    {SITE_CONFIG.email}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              </ul>
              <div className="mt-5">
                <p className="text-sm text-cream/70">
                  <strong className="text-cream/90">Hours:</strong>
                  <br />
                  {SITE_CONFIG.hours.weekdays}
                  <br />
                  {SITE_CONFIG.hours.saturday}
                  <br />
                  {SITE_CONFIG.hours.sunday}
                </p>
              </div>

              <div className="mt-8">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                  Stay Connected
                </h3>
                <p className="mb-3 text-xs text-cream/65">
                  Get wellness tips and updates delivered to your inbox.
                </p>
                <form className="flex gap-2" onSubmit={undefined}>
                  <input
                    type="email"
                    placeholder="Your email"
                    aria-label="Email for newsletter"
                    className="min-w-0 flex-1 rounded-lg border border-secondary/30 bg-white/8 px-3 py-2 text-sm text-white placeholder-cream/50 outline-none transition-all duration-300 focus:border-secondary focus:ring-1 focus:ring-secondary/50"
                    readOnly
                  />
                  <button
                    type="button"
                    className="flex shrink-0 items-center gap-1 rounded-lg bg-gradient-to-r from-secondary to-secondary-dark px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_16px_rgba(201,169,97,0.45)] hover:brightness-110"
                  >
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Closing line */}
          <div className="mt-14 text-center">
            <p className="font-display text-lg italic text-cream/95">
              {SITE_CONFIG.closingLine}
            </p>
            <p className="mt-1 text-sm text-cream/70 italic">{SITE_CONFIG.closingSubline}</p>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-secondary/20 pt-8 text-center">
            <p className="text-sm text-cream/60">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
