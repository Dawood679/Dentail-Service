import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { doctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "Our Doctors | Willowbrook Dental Studio",
  description:
    "Meet the dentists and specialists at Willowbrook Dental Studio.",
};

export default function DoctorsPage() {
  return (
    <>
      <section className="px-6 pb-8 pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="Our Doctors"
          title="Meet the smiles behind your care"
          subtitle="A dedicated team of dentists and specialists focused on gentle, personalized treatment."
        />
      </section>

      <section className="px-6 py-16">
        <StaggerGrid className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <StaggerItem key={doctor.id}>
              <DoctorCard doctor={doctor} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <section className="px-6 pb-20">
        <AnimatedSection className="mx-auto max-w-2xl rounded-3xl bg-cloud-100 px-6 py-10 text-center shadow-card-sm sm:px-12">
          <p className="font-display text-xl italic text-ink-900 sm:text-2xl">
            &ldquo;Our team believes patient-first care means listening,
            explaining, and never rushing a visit.&rdquo;
          </p>
        </AnimatedSection>
      </section>

      <CtaBanner />
    </>
  );
}
