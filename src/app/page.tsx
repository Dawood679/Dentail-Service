import { Hero } from "@/components/sections/Hero";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { DoctorsPreview } from "@/components/sections/DoctorsPreview";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { TestimonialsPreview } from "@/components/sections/TestimonialsPreview";
import { BookingSection } from "@/components/sections/BookingSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <DoctorsPreview />
      <BeforeAfterSection />
      <TestimonialsPreview />
      <BookingSection />
    </>
  );
}
