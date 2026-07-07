"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Users, ShieldCheck, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeUp, fadeIn } from "@/lib/motion-variants";

const statCards = [
  { icon: Star, label: "Google Rating", value: "4.9" },
  { icon: Users, label: "Happy Patients", value: "5000+" },
  { icon: ShieldCheck, label: "Years Experience", value: "15+" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-b-3xl">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/herooo.jpeg"
          alt="Dentist caring for a smiling patient"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/90 via-ink-900/70 to-brand-600/40" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-20 sm:pt-28 lg:grid-cols-5 lg:items-center lg:pb-24">
        <div className="lg:col-span-3">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
          >
            Your Smile, Our Passion
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.1}
            className="mt-6 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            Creating Beautiful{" "}
            <span className="text-brand-400">Smiles</span> That Last A
            Lifetime
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
            className="mt-6 max-w-xl text-base text-white/80 sm:text-lg"
          >
            Experience world-class dental care with advanced technology in a
            comfortable, modern studio. Your perfect smile is our top
            priority.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.3}
            className="mt-8 flex flex-col items-start gap-4 sm:flex-row"
          >
            <Button href="/contact" size="lg">
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/services" variant="outline-light" size="lg">
              <Play className="h-4 w-4" />
              Explore Services
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0.4}
          className="flex flex-row gap-4 overflow-x-auto lg:col-span-2 lg:flex-col lg:overflow-visible"
        >
          {statCards.map((stat) => (
            <div
              key={stat.label}
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-brand-400">
                <stat.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-white/70">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
