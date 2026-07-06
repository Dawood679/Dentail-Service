import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ClinicStory } from "@/components/sections/ClinicStory";
import { MissionValues } from "@/components/sections/MissionValues";
import { StatsBand } from "@/components/sections/StatsBand";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { aboutStats } from "@/data/clinic";

export const metadata: Metadata = {
  title: "About Us | Willowbrook Dental Studio",
  description:
    "Learn about Willowbrook Dental Studio's story, mission, and values.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-8 pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="About Us"
          title="A studio built on trust and care"
          subtitle="For over 15 years, Willowbrook Dental Studio has combined modern dentistry with a genuinely warm, patient-first experience."
        />
      </section>

      <ClinicStory />
      <MissionValues />
      <StatsBand stats={aboutStats} />

      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-3xl bg-cloud-100 px-6 py-12 text-center shadow-card-sm sm:px-12">
          <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
            Meet the team behind your care
          </h2>
          <p className="max-w-xl text-sm text-ink-500 sm:text-base">
            Get to know the dentists and specialists who make Willowbrook
            Dental Studio feel like home.
          </p>
          <Button href="/doctors" variant="secondary">
            Meet Our Doctors
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
