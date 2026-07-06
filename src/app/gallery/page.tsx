import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { galleryImages } from "@/data/gallery";
import { picsumUrl } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery | Willowbrook Dental Studio",
  description: "A look inside Willowbrook Dental Studio.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="px-6 pb-8 pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="Gallery"
          title="A Look Inside Our Studio"
          subtitle="A glimpse of our studio, our team, and the smiles we care for every day."
        />
      </section>

      <section className="px-6 py-16">
        <StaggerGrid className="mx-auto columns-2 gap-4 [column-fill:_balance] sm:columns-3 lg:max-w-6xl lg:columns-4">
          {galleryImages.map((image) => (
            <StaggerItem
              key={image.id}
              className="mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-card"
            >
              <div
                className="relative w-full"
                style={{ aspectRatio: `${image.width} / ${image.height}` }}
              >
                <Image
                  src={image.localImage ?? picsumUrl(image.seed, image.width, image.height)}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 32vw, 48vw"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <CtaBanner />
    </>
  );
}
