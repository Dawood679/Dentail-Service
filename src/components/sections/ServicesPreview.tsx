import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/data/services";

export function ServicesPreview() {
  const featured = services.slice(0, 5);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Our Services"
          title="Premium Dental Services"
          subtitle="From routine checkups to complete smile makeovers, we've got every stage of your dental health covered."
        />

        <div className="mt-12">
          <Carousel itemClassName="w-72 sm:w-80">
            {featured.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </Carousel>
        </div>

        <div className="mt-4 flex justify-center">
          <Button href="/services" variant="secondary">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
