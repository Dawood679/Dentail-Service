import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { MapThumbnail } from "@/components/ui/MapThumbnail";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Contact Us | Willowbrook Dental Studio",
  description:
    "Get in touch with Willowbrook Dental Studio or book your next appointment.",
};

export default function ContactPage() {
  return (
    <>
      <section className="px-6 pb-8 pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="Contact Us"
          title="We'd love to see your smile"
          subtitle="Reach out with any questions or book your next appointment &mdash; our team responds quickly."
        />
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          <AnimatedSection className="space-y-5 lg:col-span-2">
            <Card hover={false} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-sky-500 text-white shadow-card-sm">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-ink-900">Address</h3>
                <p className="mt-1 text-sm text-ink-500">{clinic.address}</p>
              </div>
            </Card>

            <Card hover={false} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-sky-500 text-white shadow-card-sm">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-ink-900">Phone</h3>
                <p className="mt-1 text-sm text-ink-500">{clinic.phone}</p>
              </div>
            </Card>

            <Card hover={false} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-sky-500 text-white shadow-card-sm">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-ink-900">Email</h3>
                <p className="mt-1 text-sm text-ink-500">{clinic.email}</p>
              </div>
            </Card>

            <Card hover={false} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-sky-500 text-white shadow-card-sm">
                <Clock className="h-5 w-5" />
              </span>
              <div className="w-full">
                <h3 className="font-semibold text-ink-900">Hours</h3>
                <ul className="mt-1 space-y-1 text-sm text-ink-500">
                  {clinic.hours.map((entry) => (
                    <li key={entry.day} className="flex justify-between gap-4">
                      <span>{entry.day}</span>
                      <span>{entry.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <AnimatedSection delay={0.1}>
              <MapThumbnail address={clinic.address} />
            </AnimatedSection>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="lg:col-span-3">
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
