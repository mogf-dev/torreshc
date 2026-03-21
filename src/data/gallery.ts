// Different image heights (h=800 vs h=420) create the natural masonry variation.
// Replace with your Cloudinary URLs:
//   https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_600,h_800,c_fill/photo.jpg

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export const gallery: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=800&q=80",
    alt: "Modern home exterior",
    category: "Residential",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&h=420&q=80",
    alt: "Contemporary kitchen design",
    category: "Interiors",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&h=400&q=80",
    alt: "Modern commercial building",
    category: "Commercial",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&h=750&q=80",
    alt: "Minimalist living room",
    category: "Interiors",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=600&h=380&q=80",
    alt: "Contemporary architectural facade",
    category: "Commercial",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=600&h=460&q=80",
    alt: "Luxury bathroom renovation",
    category: "Remodeling",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=700&q=80",
    alt: "Interior paint finish",
    category: "Finishes",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&h=400&q=80",
    alt: "Modern corporate office",
    category: "Commercial",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=600&h=460&q=80",
    alt: "Designer bedroom suite",
    category: "Interiors",
  },
];