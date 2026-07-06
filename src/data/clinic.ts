import type { ClinicInfo, NavLink, Stat } from "@/types";

export const clinic: ClinicInfo = {
  name: "Willowbrook Dental Studio",
  tagline: "Gentle care, modern smiles.",
  shortTagline: "MODERN FAMILY DENTISTRY",
  description:
    "Willowbrook Dental Studio has been caring for families in the community for over 15 years, blending modern dental technology with a warm, calming environment so every visit feels easy.",
  phone: "(555) 214-7788",
  email: "hello@willowbrookdental.com",
  address: "482 Maple Grove Lane, Willowbrook, CA 90210",
  hours: [
    { day: "Monday – Thursday", time: "8:00 AM – 6:00 PM" },
    { day: "Friday", time: "8:00 AM – 4:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: [
    { platform: "facebook", href: "https://facebook.com" },
    { platform: "instagram", href: "https://instagram.com" },
    { platform: "twitter", href: "https://twitter.com" },
    { platform: "linkedin", href: "https://linkedin.com" },
  ],
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const homeStats: Stat[] = [
  { label: "Happy Patients", value: 12000, suffix: "+" },
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "Procedures Completed", value: 28000, suffix: "+" },
  { label: "Average Rating", value: 4.9 },
];

export const aboutStats: Stat[] = [
  { label: "Years Serving Willowbrook", value: 15, suffix: "+" },
  { label: "Dedicated Team Members", value: 22 },
  { label: "5-Star Reviews", value: 640, suffix: "+" },
  { label: "Community Partners", value: 30, suffix: "+" },
];

export const aboutPreviewStats: Stat[] = [
  { label: "Years Experience", value: 25, suffix: "+" },
  { label: "Expert Doctors", value: 15 },
  { label: "Happy Patients", value: 5000, suffix: "+" },
  { label: "Success Rate", value: 98, suffix: "%" },
];
