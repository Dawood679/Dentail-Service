import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-cloud-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 shadow-card-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-ink-500 sm:text-lg">{subtitle}</p>
      )}
    </AnimatedSection>
  );
}
