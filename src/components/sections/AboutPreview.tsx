import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { StatCounter } from "@/components/motion/StatCounter";
import { Button } from "@/components/ui/Button";
import { pravatarUrl, picsumUrl } from "@/lib/images";
import { aboutPreviewStats } from "@/data/clinic";

export function AboutPreview() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <AnimatedSection className="relative pb-10 pr-6">
          <div className="relative aspect-[3/4] w-4/5 overflow-hidden rounded-3xl shadow-card-lg">
            <Image
              src="/bestt.jpeg"

              alt="Dentist reviewing patient records on a tablet"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 340px, 70vw"
            />
          </div>
          <div className="absolute -right-2 top-6 aspect-square w-2/5 overflow-hidden rounded-2xl shadow-card-lg ring-4 ring-cloud-50">
            <Image
              src="/treat.jpeg"
              alt="Willowbrook Dental Studio building exterior"
              fill
              className="object-cover"
              sizes="200px"
            />
          </div>
          <div className="absolute bottom-2 left-4 hidden aspect-square w-1/3 overflow-hidden rounded-2xl shadow-card-lg ring-4 ring-cloud-50 sm:block">
            <Image
              src="/lightning.jpeg"
              alt="Modern treatment room interior"
              fill
              className="object-cover"
              sizes="150px"
            />
          </div>
          <div className="absolute -bottom-2 right-0 rounded-2xl bg-white px-5 py-4 text-center shadow-card-lg">
            <p className="font-display text-2xl font-semibold text-brand-600">
              25+
            </p>
            <p className="text-xs text-ink-500">Years of Experience</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <span className="inline-block rounded-full bg-cloud-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 shadow-card-sm">
            About Our Clinic
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            We Provide The Best Dental Care For You
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-500">
            At Willowbrook, we combine advanced technology with gentle care to
            deliver exceptional dental treatments. Our experienced team is
            committed to providing personalized care for a healthier,
            brighter smile.
          </p>

          <StaggerGrid className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {aboutPreviewStats.map((stat) => (
              <StaggerItem
                key={stat.label}
                className="rounded-2xl bg-cloud-100 px-4 py-5 text-center shadow-card-sm"
              >
                <p className="font-display text-2xl font-semibold text-ink-900">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs text-ink-500">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <Button href="/about" className="mt-8">
            Learn More About Us
            <ArrowRight className="h-4 w-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
