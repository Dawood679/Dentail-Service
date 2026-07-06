import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { doctors } from "@/data/doctors";

export function DoctorsPreview() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Our Doctors"
          title="Meet The Team Behind Your Smile"
          subtitle="A dedicated team of specialists bringing decades of combined experience to every visit."
        />

        <StaggerGrid className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <StaggerItem key={doctor.id}>
              <DoctorCard doctor={doctor} />
            </StaggerItem>
          ))}
        </StaggerGrid>

        <div className="mt-12 flex justify-center">
          <Button href="/doctors" variant="secondary">
            Meet All Doctors
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
