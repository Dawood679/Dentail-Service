import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { BlogCard } from "@/components/cards/BlogCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Willowbrook Dental Studio",
  description:
    "Dental health tips, treatment guides, and news from Willowbrook Dental Studio.",
};

export default function BlogPage() {
  return (
    <>
      <section className="px-6 pb-8 pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="Blog"
          title="Dental Health Tips & News"
          subtitle="Guides and insights from our team to help you keep your smile healthy between visits."
        />
      </section>

      <section className="px-6 py-16">
        <StaggerGrid className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <CtaBanner />
    </>
  );
}
