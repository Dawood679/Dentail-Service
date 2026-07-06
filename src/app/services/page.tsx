import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Willowbrook Dental Studio",
  description:
    "Explore our full range of dental services, from general checkups to cosmetic dentistry.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-8 pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive dental care for every need"
          subtitle="Whether it's a routine cleaning or a complete smile transformation, our team is here to help."
        />
      </section>

      <section className="px-6 py-16">
        <StaggerGrid className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} detailed />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <CtaBanner
        title="Not sure which service is right for you?"
        subtitle="Book a consultation and we'll help you find the best path to a healthier smile."
      />
    </>
  );
}
