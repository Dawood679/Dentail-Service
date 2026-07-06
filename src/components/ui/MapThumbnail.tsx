import { MapPin } from "lucide-react";
import { cn } from "@/lib/cn";

interface MapThumbnailProps {
  address: string;
  className?: string;
}

export function MapThumbnail({ address, className }: MapThumbnailProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div
      className={cn(
        "relative flex h-48 flex-col items-center justify-center overflow-hidden rounded-2xl bg-cloud-100 shadow-card-sm",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 text-mist-300 [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px]"
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <MapPin className="h-6 w-6 text-brand-500" />
        <p className="max-w-[14rem] text-xs text-ink-500">{address}</p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-brand-600 underline underline-offset-2"
        >
          View larger map
        </a>
      </div>
    </div>
  );
}
