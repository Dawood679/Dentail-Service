import Image from "next/image";
import { ArrowRight, Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { cn } from "@/lib/cn";
import { pravatarUrl } from "@/lib/images";
import { testimonials } from "@/data/testimonials";

export function TestimonialsPreview() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What Our Patients Say"
          title="Loved By Our Patients"
          subtitle="Real stories from the families and individuals who trust us with their smiles."
        />

        <div className="mt-12">
          <Carousel itemClassName="w-full">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl bg-white p-8 text-center shadow-card-lg sm:p-12"
              >
                <Quote className="h-10 w-10 text-mist-300" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < testimonial.rating
                          ? "fill-brand-400 text-brand-400"
                          : "text-cloud-200",
                      )}
                    />
                  ))}
                </div>
                <p className="mt-6 text-lg leading-relaxed text-ink-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={pravatarUrl(testimonial.photoId, 120)}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-ink-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-ink-500">
                      {testimonial.treatment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="mt-4 flex justify-center">
          <Button href="/testimonials" variant="secondary">
            Read All Reviews
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
