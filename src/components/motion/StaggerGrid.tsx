"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion-variants";

type StaggerGridProps = HTMLMotionProps<"div">;

export function StaggerGrid({ children, ...props }: StaggerGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = HTMLMotionProps<"div">;

export function StaggerItem({ children, ...props }: StaggerItemProps) {
  return (
    <motion.div variants={fadeUp} {...props}>
      {children}
    </motion.div>
  );
}
