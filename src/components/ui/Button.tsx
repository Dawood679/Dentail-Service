"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-light";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-br from-brand-400 to-sky-500 text-white shadow-card-sm hover:shadow-card-lg",
  secondary:
    "bg-cloud-100 text-ink-900 shadow-card-sm hover:shadow-card-lg",
  ghost: "bg-transparent text-ink-700 hover:bg-cloud-100",
  "outline-light":
    "border border-white/50 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

type ButtonProps = ButtonOwnProps &
  Omit<HTMLMotionProps<"button">, "href" | "children" | "onClick">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-shadow duration-300",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const motionProps = {
    whileHover: { y: -3 },
    whileTap: { scale: 0.96 },
    transition: { duration: 0.2 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
}
