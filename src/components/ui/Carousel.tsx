"use client";

import { Children, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
}

const GAP_PX = 24;

export function Carousel({ children, className, itemClassName }: CarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canOverflow, setCanOverflow] = useState(false);
  const items = Children.toArray(children);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const check = () => setCanOverflow(el.scrollWidth > el.clientWidth + 4);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [items.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const child = el.children[0] as HTMLElement | undefined;
        if (!child) return;
        const itemWidth = child.getBoundingClientRect().width + GAP_PX;
        setActiveIndex(Math.round(el.scrollLeft / itemWidth));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  function scrollByAmount(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[0] as HTMLElement | undefined;
    const amount = (child?.getBoundingClientRect().width ?? el.clientWidth) + GAP_PX;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  function scrollToIndex(index: number) {
    const el = scrollerRef.current;
    const child = el?.children[index] as HTMLElement | undefined;
    if (!el || !child) return;
    el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  }

  return (
    <div className={className}>
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((child, i) => (
          <div key={i} className={cn("shrink-0 snap-start", itemClassName)}>
            {child}
          </div>
        ))}
      </div>

      {canOverflow && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => scrollByAmount(-1)}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-700 shadow-card-sm transition-shadow hover:shadow-card-lg"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  i === activeIndex ? "bg-brand-500" : "bg-cloud-200",
                )}
              />
            ))}
          </div>
          <button
            onClick={() => scrollByAmount(1)}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-700 shadow-card-sm transition-shadow hover:shadow-card-lg"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
