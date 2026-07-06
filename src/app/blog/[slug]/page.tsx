import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { BlogCard } from "@/components/cards/BlogCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { blogPosts } from "@/data/blog";
import { picsumUrl } from "@/lib/images";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Willowbrook Dental Studio`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <section className="px-6 pb-8 pt-16 sm:pt-20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <AnimatedSection delay={0.1} className="mt-6">
            <Badge>{post.category}</Badge>
            <h1 className="mt-4 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 text-sm text-ink-500">
              {formattedDate} &middot; {post.author}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6">
        <AnimatedSection
          delay={0.15}
          className="relative mx-auto aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-3xl shadow-card-lg"
        >
          <Image
            src={post.localImage ?? picsumUrl(post.coverSeed, 1200, 675)}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </AnimatedSection>
      </section>

      <section className="px-6 py-16">
        <AnimatedSection
          delay={0.2}
          className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-ink-700"
        >
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </AnimatedSection>
      </section>

      {relatedPosts.length > 0 && (
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              More From The Blog
            </h2>
            <StaggerGrid className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <StaggerItem key={related.slug}>
                  <BlogCard post={related} />
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
