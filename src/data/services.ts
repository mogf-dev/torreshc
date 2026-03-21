// src/data/services.ts
// Replace Unsplash placeholders with your real images.
// Cloudinary: https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_800,h_480,c_fill/photo.jpg

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
    title: "Drywall",
    description:
      "Professional drywall installation and finishing for new builds and renovations. Smooth, durable walls ready for any finish.",
    highlights: ["New construction", "Repairs & patching", "Texture matching"],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&h=480&q=80",
  },
  {
    id: 2,
    title: "Painting",
    description:
      "Interior and exterior painting with premium materials. Clean lines, lasting color, and a finish that makes every room feel brand new.",
    highlights: ["Interior & exterior", "Custom color matching", "Prep & priming included"],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=480&q=80",
  },
  {
    id: 3,
    title: "Flooring",
    description:
      "Hardwood, LVP, tile, and more — installed with precision. We handle subfloor prep through final polish so every step feels right.",
    highlights: ["Hardwood & LVP", "Tile & stone", "Subfloor preparation"],
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&h=480&q=80",
  },
  {
    id: 4,
    title: "Carpentry",
    description:
      "Custom trim, built-ins, cabinetry, and structural framing. Expert craftsmanship that adds detail, function, and character to any space.",
    highlights: ["Trim & molding", "Custom built-ins", "Structural framing"],
    image:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800&h=480&q=80",
  },
  {
    id: 5,
    title: "Renovations",
    description:
      "Full-scope home and commercial renovations managed from start to finish. One team, one point of contact, zero headaches.",
    highlights: ["Kitchen & bath remodels", "Whole-home renovation", "Commercial fit-outs"],
    image:
      "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=800&h=480&q=80",
  },
];