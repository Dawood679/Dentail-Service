"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type LocomotiveScroll from "locomotive-scroll";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let mounted = true;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    import("locomotive-scroll").then(({ default: LocomotiveScrollCtor }) => {
      if (!mounted) return;
      scrollRef.current = new LocomotiveScrollCtor({
        lenisOptions: {
          lerp: 0.1,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1.5,
        },
      });
    });

    return () => {
      mounted = false;
      scrollRef.current?.destroy();
      scrollRef.current = null;
    };
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      scrollRef.current?.resize();
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return <>{children}</>;
}
