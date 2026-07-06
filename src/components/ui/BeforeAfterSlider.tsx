"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { picsumUrl } from "@/lib/images";
import { cn } from "@/lib/cn";

interface BeforeAfterSliderProps {
  beforeSeed: string;
  afterSeed: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeSeed,
  afterSeed,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [pct, setPct] = useState(50);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.min(100, Math.max(0, ratio)));
  }, []);

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    draggingRef.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") setPct((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPct((p) => Math.min(100, p + 5));
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[4/5] w-full touch-none overflow-hidden rounded-3xl select-none sm:aspect-[16/10]",
        className,
      )}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <Image
        src={picsumUrl(afterSeed, 900, 700)}
        alt={`${afterLabel} treatment result`}
        fill
        className="object-cover"
        sizes="(min-width: 640px) 50vw, 100vw"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
      >
        <Image
          src={picsumUrl(beforeSeed, 900, 700)}
          alt={`${beforeLabel} treatment`}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink-900/70 px-3 py-1 text-xs font-semibold text-white">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-ink-900/70 px-3 py-1 text-xs font-semibold text-white">
        {afterLabel}
      </span>

      <div
        role="slider"
        tabIndex={0}
        aria-label="Drag to compare before and after"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={handleKeyDown}
        className="absolute top-0 bottom-0 flex w-10 -translate-x-1/2 cursor-ew-resize items-center justify-center focus:outline-none"
        style={{ left: `${pct}%` }}
      >
        <span className="h-full w-0.5 bg-white/80" />
        <span className="absolute flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-700 shadow-card">
          <MoveHorizontal className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}
