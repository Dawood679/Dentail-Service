import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { pravatarUrl } from "@/lib/images";

export function BookingSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <AnimatedSection className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card-lg">
            <Image
              src="/smile.png"
              alt="Smiling patient ready for their appointment"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
          </div>
          <div className="mt-8">
            <span className="inline-block rounded-full bg-cloud-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 shadow-card-sm">
              Book Appointment
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
              Ready For Your Perfect Smile?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-500">
              Book your appointment today and take the first step toward a
              healthier, brighter smile.
            </p>
            <a
              href="/about"
              className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-brand-600"
            >
              Learn More
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ContactForm submitLabel="Book Appointment" />
        </AnimatedSection>
      </div>
    </section>
  );
}
