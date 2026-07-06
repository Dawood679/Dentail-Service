import { cn } from "@/lib/cn";
import type { AccentColor } from "@/types";

const accentGradients: Record<AccentColor, string> = {
  teal: "from-brand-400 to-sky-500",
  sky: "from-sky-400 to-brand-500",
  mist: "from-mist-300 to-sky-400",
};

interface AvatarProps {
  initials: string;
  accent: AccentColor;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-10 w-10 text-sm",
  md: "h-14 w-14 text-base",
  lg: "h-20 w-20 text-xl",
};

export function Avatar({ initials, accent, size = "md", className }: AvatarProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-semibold text-white shadow-card-sm",
        accentGradients[accent],
        sizeClasses[size],
        className,
      )}
    >
      {initials}
    </div>
  );
}
