import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { SocialRow } from "@/components/ui/SocialRow";
import { pravatarUrl } from "@/lib/images";
import type { Doctor } from "@/types";

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const imageSrc = doctor.localImage ?? pravatarUrl(doctor.photoId, 400);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-lg">
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={doctor.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
        />
      </div>
      <div className="flex flex-1 flex-col items-center p-6">
        <h3 className="font-display text-xl font-semibold text-ink-900">
          {doctor.name}
        </h3>
        <div className="mt-2 flex justify-center">
          <Badge>{doctor.role}</Badge>
        </div>
        <p className="mt-3 text-xs font-medium uppercase tracking-wider text-ink-500">
          {doctor.credentials}
        </p>
        <p className="mt-1 text-sm font-semibold text-brand-600">
          {doctor.yearsExperience}+ years experience
        </p>
        <p className="mt-3 text-sm text-ink-500">{doctor.bio}</p>
        <SocialRow links={doctor.social} className="mt-5 justify-center" />
      </div>
    </div>
  );
}
