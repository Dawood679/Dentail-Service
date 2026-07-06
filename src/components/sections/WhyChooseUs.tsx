import { Cpu, HeartPulse, Users, Wallet, Siren, Smile, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { Button } from "@/components/ui/Button";

const highlights = [
  { icon: Cpu, title: "Modern Equipment" },
  { icon: HeartPulse, title: "Pain-Free Treatment" },
  { icon: Users, title: "Experienced Doctors" },
  { icon: Wallet, title: "Affordable Pricing" },
  { icon: Siren, title: "Emergency Support" },
  { icon: Smile, title: "Lifetime Smile Care" },
];

export function WhyChooseUs() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <AnimatedSection>
          <span className="inline-block rounded-full bg-cloud-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 shadow-card-sm">
            Why Choose Us
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            Advanced Care For A Healthier Smile
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-500">
            Every detail of Willowbrook Dental Studio is built to make your
            visit easier, calmer, and more effective &mdash; from the
            technology we use to the way our team treats you.
          </p>
          <Button href="/about" className="mt-8">
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Button>
        </AnimatedSection>

        <StaggerGrid className="grid grid-cols-2 gap-5 sm:grid-cols-3">
          {highlights.map((item) => (
            <StaggerItem
              key={item.title}
              className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-sky-500 text-white shadow-card-sm">
                <item.icon className="h-6 w-6" />
              </span>
              <p className="text-sm font-semibold text-ink-900">
                {item.title}
              </p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
