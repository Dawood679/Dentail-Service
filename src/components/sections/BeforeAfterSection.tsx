import { SectionHeading } from "@/components/ui/SectionHeading";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { beforeAfterPairs } from "@/data/beforeAfter";

export function BeforeAfterSection() {
  const featured = beforeAfterPairs[0];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Before & After"
          title="Real Results, Real Smiles"
          subtitle={`Drag the slider to see the transformation from our ${featured.treatment.toLowerCase()} treatment.`}
        />

        <AnimatedSection delay={0.1} className="mt-12">
          <BeforeAfterSlider
            beforeSeed={featured.beforeSeed}
            afterSeed={featured.afterSeed}
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
