"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

interface CardProps extends HTMLMotionProps<"div"> {
  hover?: boolean;
}

export function Card({ hover = true, className, children, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "rounded-2xl bg-white p-6 shadow-card transition-shadow duration-300 sm:p-8",
        hover && "hover:shadow-card-lg",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
