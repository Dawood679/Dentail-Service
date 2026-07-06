import { Camera, Link2, MessageCircle, Share2 } from "lucide-react";
import { cn } from "@/lib/cn";
import type { SocialLink, SocialPlatform } from "@/types";

const platformIcon: Record<SocialPlatform, typeof Share2> = {
  facebook: Share2,
  linkedin: Link2,
  twitter: MessageCircle,
  instagram: Camera,
};

const platformLabel: Record<SocialPlatform, string> = {
  facebook: "Facebook",
  linkedin: "LinkedIn",
  twitter: "Twitter",
  instagram: "Instagram",
};

interface SocialRowProps {
  links: SocialLink[];
  className?: string;
}

export function SocialRow({ links, className }: SocialRowProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {links.map((link) => {
        const Icon = platformIcon[link.platform];
        return (
          <a
            key={link.platform}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${platformLabel[link.platform]} (opens in new tab)`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-cloud-100 text-ink-700 shadow-card-sm transition-colors hover:bg-brand-50 hover:text-brand-600"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
