import { StatCounter } from "@/components/motion/StatCounter";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import type { Stat } from "@/types";

interface StatsBandProps {
  stats: Stat[];
}

export function StatsBand({ stats }: StatsBandProps) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-cloud-100 px-6 py-12 shadow-card-sm sm:px-12">
        <StaggerGrid className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <p className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-ink-500">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
