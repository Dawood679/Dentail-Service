import { Cpu, BadgeCheck, HeartPulse, Siren, SprayCan, Scan } from "lucide-react";
import { Carousel } from "@/components/ui/Carousel";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

const features = [
  { icon: Cpu, label: "Advanced Technology" },
  { icon: BadgeCheck, label: "Certified Dentists" },
  { icon: HeartPulse, label: "Painless Treatment" },
  { icon: Siren, label: "Emergency Care" },
  { icon: SprayCan, label: "Sterilized Clinic" },
  { icon: Scan, label: "Digital X-ray" },
];

export function FeatureStrip() {
  return (
    <section className="px-6 py-10 mt-10 sm:mt-16 lg:mt-20">
      <AnimatedSection className="mx-auto -mt-16 max-w-6xl rounded-3xl bg-white p-6 shadow-card-lg sm:p-8">
        <Carousel itemClassName="w-40 sm:w-auto">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex flex-col items-center gap-3 text-center sm:min-w-[9rem]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-sky-500 text-white shadow-card-sm">
                <feature.icon className="h-6 w-6" />
              </span>
              <p className="text-sm font-semibold text-ink-900">
                {feature.label}
              </p>
            </div>
          ))}
        </Carousel>
      </AnimatedSection>
    </section>
  );
}
