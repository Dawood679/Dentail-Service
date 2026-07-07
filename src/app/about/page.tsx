"use client";

import { ArrowRight, Heart, Users } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ClinicStory } from "@/components/sections/ClinicStory";
import { MissionValues } from "@/components/sections/MissionValues";
import { StatsBand } from "@/components/sections/StatsBand";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { aboutStats } from "@/data/clinic";
import { fadeUp } from "@/lib/motion-variants";

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden rounded-b-3xl">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/group.png"
            alt="Willowbrook Dental Studio clinic"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/80 to-brand-600/50" />
        </div>

        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:py-40">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <Heart className="h-4 w-4 text-brand-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Our Story
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              A studio built on{" "}
              <span className="text-brand-400">trust and care</span>
            </h1>

            <p className="max-w-2xl text-lg text-white/80 sm:text-xl">
              For over 15 years, Willowbrook Dental Studio has combined modern dentistry with a genuinely warm, patient-first experience. We're committed to creating beautiful, healthy smiles while building lasting relationships.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 pt-4">
              <Button href="/doctors" size="lg">
                Meet Our Team
                <Users className="h-4 w-4" />
              </Button>
              <Button href="/services" variant="outline-light" size="lg">
                Our Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3"
          >
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <p className="font-display text-3xl font-bold text-white">15+</p>
              <p className="text-sm text-white/70">Years Experience</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <p className="font-display text-3xl font-bold text-white">5k+</p>
              <p className="text-sm text-white/70">Happy Patients</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <p className="font-display text-3xl font-bold text-white">4.9★</p>
              <p className="text-sm text-white/70">Google Rating</p>
            </div>
          </motion.div>
        </div>
      </section>

      <ClinicStory />
      <MissionValues />
      <StatsBand stats={aboutStats} />

      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-3xl bg-cloud-100 px-6 py-12 text-center shadow-card-sm sm:px-12">
          <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
            Meet the team behind your care
          </h2>
          <p className="max-w-xl text-sm text-ink-500 sm:text-base">
            Get to know the dentists and specialists who make Willowbrook
            Dental Studio feel like home.
          </p>
          <Button href="/doctors" variant="secondary">
            Meet Our Doctors
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
