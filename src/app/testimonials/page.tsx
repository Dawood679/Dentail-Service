import type { Metadata } from "next";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials | Willowbrook Dental Studio",
  description: "Read reviews from Willowbrook Dental Studio patients.",
};

const averageRating =
  testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

export default function TestimonialsPage() {
  return (
    <>
      <section className="px-6 pb-8 pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="Testimonials"
          title="Stories from our patients"
          subtitle="Hear what real patients have to say about their experience at Willowbrook Dental Studio."
        />

        <AnimatedSection
          delay={0.15}
          className="mx-auto mt-10 flex max-w-sm flex-col items-center gap-2 rounded-3xl bg-cloud-100 px-8 py-8 text-center shadow-card-sm"
        >
          <p className="font-display text-4xl font-semibold text-ink-900">
            {averageRating.toFixed(1)}
          </p>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-brand-400 text-brand-400"
              />
            ))}
          </div>
          <p className="text-sm text-ink-500">
            Based on {testimonials.length * 100}+ reviews
          </p>
        </AnimatedSection>
      </section>

      <section className="px-6 py-16">
        <StaggerGrid className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <CtaBanner
        title="Ready to start your own smile story?"
        subtitle="Join hundreds of happy patients who trust Willowbrook Dental Studio."
      />
    </>
  );
}
