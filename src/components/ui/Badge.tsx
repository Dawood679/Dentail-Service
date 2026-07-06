import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-cloud-100 px-3 py-1 text-xs font-medium text-brand-600 shadow-card-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
