import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { picsumUrl } from "@/lib/images";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  detailed?: boolean;
}

export function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  const Icon = service.icon;
  const imageSrc = service.localImage ?? picsumUrl(service.imageSeed, 480, 360);

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
        />
        <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 text-white shadow-card">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-ink-900">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-ink-500">
          {detailed ? service.description : service.shortDescription}
        </p>
        {detailed && (
          <ul className="mt-4 space-y-2">
            {service.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-2 text-sm text-ink-700"
              >
                <Check className="h-4 w-4 shrink-0 text-brand-500" />
                {highlight}
              </li>
            ))}
          </ul>
        )}
        <Link
          href="/services"
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-transform group-hover:translate-x-1"
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
