import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import { pravatarUrl } from "@/lib/images";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <Quote className="h-8 w-8 text-mist-300" />
      <div className="mt-3 flex gap-1">
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
      <p className="mt-4 text-sm leading-relaxed text-ink-700">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
          <Image
            src={pravatarUrl(testimonial.photoId, 120)}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="44px"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-ink-900">
            {testimonial.name}
          </p>
          <p className="text-xs text-ink-500">{testimonial.treatment}</p>
        </div>
      </div>
    </Card>
  );
}
