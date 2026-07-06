import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { clinic } from "@/data/clinic";

export function ClinicStory() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <AnimatedSection>
          <span className="inline-block rounded-full bg-cloud-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 shadow-card-sm">
            Our Story
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            Caring for Willowbrook, one smile at a time
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-500">
            {clinic.description}
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            What began as a single-chair practice has grown into a full
            studio with four dentists and a dedicated hygiene team &mdash;
            but our commitment to unhurried, personal care hasn&apos;t
            changed.
          </p>
        </AnimatedSection>

        <AnimatedSection
          delay={0.15}
          className="relative rounded-3xl bg-cloud-100 p-10 shadow-card-sm"
        >
          <blockquote className="font-display text-xl italic leading-relaxed text-ink-900 sm:text-2xl">
            &ldquo;We built Willowbrook to be the kind of dental studio we
            wanted for our own families &mdash; calm, honest, and genuinely
            caring.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-semibold text-brand-600">
            Dr. Emily Hart, Founder
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
