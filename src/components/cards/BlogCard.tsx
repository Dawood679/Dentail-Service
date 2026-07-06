import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { picsumUrl } from "@/lib/images";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const imageSrc = post.localImage ?? picsumUrl(post.coverSeed, 800, 500);

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-lg">
      <div className="relative aspect-[8/5] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
        />
        <Badge className="absolute left-4 top-4 bg-white">{post.category}</Badge>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-ink-500">
          {formattedDate}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold text-ink-900">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-ink-500">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-transform group-hover:translate-x-1"
        >
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
