import {
  Stethoscope,
  Sparkles,
  Syringe,
  Braces,
  Puzzle,
  Baby,
  Smile,
  Siren,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription: "Permanent, natural-looking replacements for missing teeth.",
    description:
      "Titanium implants fused with lifelike crowns restore full chewing strength and a seamless smile that lasts for decades.",
    icon: Puzzle,
    highlights: ["Single-tooth implants", "Full-arch restoration", "Lifelike crowns"],
    imageSeed: "dentalux-implants",
    localImage: "/dental-implants-render.jpg",
  },
  {
    slug: "smile-makeover",
    title: "Smile Makeover",
    shortDescription: "Veneers, bonding, and complete smile transformations.",
    description:
      "Porcelain veneers, bonding, and full smile makeovers crafted to enhance your natural features and boost your confidence.",
    icon: Smile,
    highlights: ["Porcelain veneers", "Composite bonding", "Full smile design"],
    imageSeed: "hero-image",
    localImage: "/hero.jpeg",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortDescription: "Brighten your smile several shades in a single visit.",
    description:
      "Our in-studio and take-home whitening systems lift years of stains safely, giving you a noticeably brighter smile without sensitivity.",
    icon: Sparkles,
    highlights: ["In-studio treatment", "Take-home kits", "Low-sensitivity formula"],
    imageSeed: "dentalux-whitening",
    localImage: "/teeth-whitening.jpg",
  },
  {
    slug: "braces-aligners",
    title: "Braces & Aligners",
    shortDescription: "Traditional braces and clear aligners for every age.",
    description:
      "From classic braces to clear aligners, we design a straightening plan around your lifestyle and timeline for a confidently aligned smile.",
    icon: Braces,
    highlights: ["Clear aligners", "Traditional braces", "Custom treatment plans"],
    imageSeed: "dentalux-braces",
    localImage: "/braces-closeup.jpg",
  },
  {
    slug: "root-canal",
    title: "Root Canal",
    shortDescription: "Pain-free treatment to save infected or damaged teeth.",
    description:
      "Modern techniques and gentle sedation options make root canal therapy comfortable, relieving pain while saving your natural tooth.",
    icon: Syringe,
    highlights: ["Comfort-first approach", "Same-day relief", "Natural tooth preservation"],
    imageSeed: "dentalux-rootcanal",
    localImage: "/root-canal-infographic.jpg",
  },
  {
    slug: "general-checkup",
    title: "General Checkup",
    shortDescription: "Comprehensive exams and cleanings to keep your smile healthy.",
    description:
      "Routine exams, professional cleaning, and digital X-rays to catch issues early and keep your teeth and gums in great shape year-round.",
    icon: Stethoscope,
    highlights: ["Digital X-rays", "Deep cleaning", "Oral cancer screening"],
    imageSeed: "dentalux-checkup",
    localImage: "/general-checkup.jpg",
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    shortDescription: "Friendly, gentle dental care designed for kids.",
    description:
      "A playful, judgment-free environment helps children build healthy habits early, with gentle exams tailored to little smiles.",
    icon: Baby,
    highlights: ["Kid-friendly studio", "Fluoride treatments", "Sealants"],
    imageSeed: "dentalux-pediatric",
    localImage: "/pediatric-dentistry.jpg",
  },
  {
    slug: "emergency-care",
    title: "Emergency Care",
    shortDescription: "Fast relief when dental pain can't wait.",
    description:
      "Chipped a tooth or in sudden pain? We reserve same-day emergency slots to get you seen and out of discomfort quickly.",
    icon: Siren,
    highlights: ["Same-day appointments", "Pain management", "After-hours line"],
    imageSeed: "dentalux-emergency",
    localImage: "/emergency-care.jpg",
  },
];
