// Cloudinary example: https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_800,h_480,c_fill/photo.jpg
export interface Service {
  id: number;
  title: string;
  description: string;
  highlights: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Residential Construction",
    description:
      "We build custom homes and multi-family units to the highest standards — from foundation to final finishes, every detail is handled with care.",
    highlights: ["Custom floor plans", "Certified materials", "On-time delivery"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=480&q=80",
  },
  {
    id: 2,
    title: "Remodeling & Renovation",
    description:
      "We transform living spaces with additions and makeovers that breathe new life into your home without losing its character.",
    highlights: ["3D design preview", "Minimal disruption", "Fixed-price quotes"],
    image:
      "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=800&h=480&q=80",
  },
  {
    id: 3,
    title: "Finishes & Painting",
    description:
      "Premium flooring, tiling, wallpaper, and paint. The right finishes make every room feel intentional and polished.",
    highlights: ["Wide material catalog", "Expert craftsmanship", "Custom color matching"],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=480&q=80",
  },
  {
    id: 4,
    title: "Electrical & Plumbing",
    description:
      "Safe, code-compliant electrical, plumbing, and water systems. Our licensed technicians handle every installation with precision.",
    highlights: ["Licensed electricians", "Installation warranty", "Preventive maintenance"],
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&h=480&q=80",
  },
  {
    id: 5,
    title: "Interior Design",
    description:
      "Functional, beautiful spaces designed around your lifestyle. We craft environments that reflect your personality and taste.",
    highlights: ["Photorealistic renders", "Furniture consultation", "Lighting design"],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&h=480&q=80",
  },
  {
    id: 6,
    title: "Commercial Builds",
    description:
      "Retail spaces, offices, and corporate buildings built for productivity and aligned to your brand identity.",
    highlights: ["Technical permitting", "Brand-aligned design", "Executive timelines"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=480&q=80",
  },
];