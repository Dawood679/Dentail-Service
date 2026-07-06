import Link from "next/link";
import { Mail, MapPin, Phone, Smile, Clock } from "lucide-react";
import { clinic, navLinks } from "@/data/clinic";
import { services } from "@/data/services";
import { SocialRow } from "@/components/ui/SocialRow";
import { MapThumbnail } from "@/components/ui/MapThumbnail";

export function Footer() {
  const year = new Date().getFullYear();
  const featuredServices = services.slice(0, 5);

  return (
    <footer className="border-t border-cloud-200 bg-cloud-100/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-sky-500 text-white shadow-card-sm">
              <Smile className="h-4 w-4" />
            </span>
            <span className="font-display text-base font-semibold text-ink-900">
              {clinic.name}
            </span>
          </div>
          <p className="mt-4 text-sm text-ink-500">{clinic.tagline}</p>
          <SocialRow links={clinic.social} className="mt-5" />
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink-900">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-500 transition-colors hover:text-brand-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink-900">
            Our Services
          </h3>
          <ul className="space-y-3">
            {featuredServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href="/services"
                  className="text-sm text-ink-500 transition-colors hover:text-brand-600"
                >
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
              >
                More Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink-900">
            Contact Info
          </h3>
          <ul className="space-y-3 text-sm text-ink-500">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <span>{clinic.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-500" />
              <span>{clinic.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand-500" />
              <span>{clinic.email}</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <span>{clinic.hours[0].time} (Mon–Thu)</span>
            </li>
          </ul>
          <MapThumbnail address={clinic.address} className="mt-4" />
        </div>
      </div>

      <div className="border-t border-cloud-200 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-xs text-ink-500 sm:flex-row sm:text-left">
          <span>
            © {year} {clinic.name}. All rights reserved. This is a demo site
            with placeholder content.
          </span>
          <span className="flex gap-4">
            <Link href="#" className="hover:text-brand-600">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-600">
              Terms
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
