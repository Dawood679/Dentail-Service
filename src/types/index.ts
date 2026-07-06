import type { LucideIcon } from "lucide-react";

export type AccentColor = "teal" | "sky" | "mist";

export type SocialPlatform = "facebook" | "linkedin" | "twitter" | "instagram";

export interface SocialLink {
  platform: SocialPlatform;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
  imageSeed: string;
  localImage?: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  initials: string;
  accent: AccentColor;
  photoId: number;
  localImage?: string;
  yearsExperience: number;
  social: SocialLink[];
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  initials: string;
  accent: AccentColor;
  photoId: number;
}

export interface ClinicHours {
  day: string;
  time: string;
}

export interface ClinicInfo {
  name: string;
  tagline: string;
  shortTagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  hours: ClinicHours[];
  social: SocialLink[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface GalleryImage {
  id: string;
  seed: string;
  alt: string;
  width: number;
  height: number;
  localImage?: string;
}

export interface BeforeAfterPair {
  id: string;
  treatment: string;
  beforeSeed: string;
  afterSeed: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  coverSeed: string;
  localImage?: string;
  date: string;
  category: string;
  author: string;
}
