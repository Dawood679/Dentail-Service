"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function StatCounter({ value, suffix = "", className }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);
  const isDecimal = !Number.isInteger(value);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
  }, [isInView, value]);

  const formatted = isDecimal
    ? display.toFixed(1)
    : Math.round(display).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {formatted}
      {suffix}
    </span>
  );
}
