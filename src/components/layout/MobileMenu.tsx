"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { navLinks } from "@/data/clinic";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col bg-cloud-50/98 backdrop-blur-md lg:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-xl font-semibold text-ink-900">
              Menu
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-cloud-100 shadow-card-sm active:shadow-card-sm"
            >
              <X className="h-5 w-5 text-ink-900" />
            </button>
          </div>
          <motion.nav
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-1 flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "font-display text-3xl font-medium text-ink-700 transition-colors",
                    pathname === link.href && "text-brand-600",
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemVariants} className="mt-4">
              <Button href="/contact" onClick={onClose}>
                Book Appointment
              </Button>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
