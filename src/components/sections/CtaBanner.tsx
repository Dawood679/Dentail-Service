import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Button } from "@/components/ui/Button";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
}

export function CtaBanner({
  title = "Ready for a healthier smile?",
  subtitle = "Book your visit today and see why families across Willowbrook trust us with their care.",
}: CtaBannerProps) {
  return (
    <section className="px-6 pb-20">
      <AnimatedSection className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-sky-600 px-6 py-16 text-center shadow-card-lg sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-14 -right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        />
        <h2 className="relative font-display text-3xl font-semibold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base text-white/90">
          {subtitle}
        </p>
        <div className="relative mt-8 flex justify-center">
          <Button href="/contact" variant="secondary" size="lg">
            Book Appointment
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </AnimatedSection>
    </section>
  );
}
