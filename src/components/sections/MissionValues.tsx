import { HeartHandshake, Sparkle, Lightbulb, Users2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";

const values = [
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "We listen first and treat every patient with patience and respect.",
  },
  {
    icon: Sparkle,
    title: "Integrity",
    description:
      "Honest recommendations, transparent pricing, no unnecessary treatments.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Continually investing in the latest techniques and technology.",
  },
  {
    icon: Users2,
    title: "Community",
    description:
      "Proud to support local schools and health initiatives in Willowbrook.",
  },
];

export function MissionValues() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Mission & Values"
          title="What guides everything we do"
        />

        <StaggerGrid className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <Card className="h-full text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-sky-500 text-white shadow-card-sm">
                  <value.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500">
                  {value.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
