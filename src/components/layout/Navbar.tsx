"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { clinic, navLinks } from "@/data/clinic";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-cloud-200 bg-cloud-50/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full overflow-hidden">
            <Image
              src="/teeth.png"
              alt="Willowbrook Dental Studio"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-ink-900">
              {clinic.name}
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-brand-600">
              {clinic.shortTagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-ink-700 transition-all",
                pathname === link.href
                  ? "bg-cloud-100 text-brand-600 shadow-card-sm"
                  : "hover:bg-cloud-100/60",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Book Appointment
          </Button>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-cloud-100 shadow-card-sm active:shadow-card-sm lg:hidden"
        >
          <Menu className="h-5 w-5 text-ink-900" />
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
