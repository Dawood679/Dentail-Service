"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion-variants";

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export function AnimatedSection({ children, delay = 0, ...props }: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      custom={delay}
      {...props}
    >
      {children}
    </motion.div>
  );
}
