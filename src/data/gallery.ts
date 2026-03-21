// src/data/gallery.ts

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: "Drywall" | "Painting" | "Flooring" | "Carpentry" | "Renovations";
}

export const gallery: GalleryItem[] = [
  { 
    id: 1, 
    src: "/images/01.webp",
    alt: "New drywall panels installed in residential room",                    
    category: "Drywall" 
  },
  { 
    id: 2, 
    src: "/images/02.webp",
    alt: "Custom wood trim and molding detail in living area",                  
    category: "Carpentry" 
  },
  { 
    id: 3, 
    src: "/images/03.webp",
    alt: "Fresh interior paint — warm neutral tones in living room",           
    category: "Painting" 
  },
  { 
    id: 4, 
    src: "/images/04.webp",
    alt: "Full kitchen and living area renovation completed",                   
    category: "Renovations" 
  },
  { 
    id: 5, 
    src: "/images/05.webp",
    alt: "Accent wall painted in deep color — bedroom project",                 
    category: "Painting" 
  },
  { 
    id: 6, 
    src: "/images/06.webp",
    alt: "Bathroom gut renovation with new fixtures and tile",                  
    category: "Renovations" 
  },
  { 
    id: 7, 
    src: "/images/07.webp",
    alt: "Luxury vinyl plank flooring installed in open living space",          
    category: "Flooring" 
  },
  { 
    id: 8, 
    src: "/images/08.webp",
    alt: "Large-format porcelain tile laid in modern kitchen",                  
    category: "Flooring" 
  },
  { 
    id: 9, 
    src: "/images/09.webp",
    alt: "Built-in cabinetry and shelving unit in home office",                 
    category: "Carpentry" 
  },
  { 
    id: 10,
    src: "/images/10.webp",
    alt: "Hardwood flooring refinished and reinstalled in hallway",             
    category: "Flooring" 
  },
  { 
    id: 11,
    src: "/images/11.webp",
    alt: "Wide-plank engineered wood flooring in master bedroom",               
    category: "Flooring" 
  },
  { 
    id: 12,
    src: "/images/12.webp",
    alt: "Floating shelves and custom closet built-ins installed",              
    category: "Carpentry" 
  },
  { 
    id: 13,
    src: "/images/13.webp",
    alt: "Two-tone exterior paint — house refresh in NC neighborhood",          
    category: "Painting" 
  },
  { 
    id: 14,
    src: "/images/14.webp",
    alt: "Open-concept renovation — walls removed and space opened up",         
    category: "Renovations" 
  },
  { 
    id: 15,
    src: "/images/15.webp",
    alt: "Staircase railing and newel post carpentry detail",                   
    category: "Carpentry" 
  },
  { 
    id: 16,
    src: "/images/16.webp",
    alt: "Master bath renovation with freestanding tub and tile surround",      
    category: "Renovations" 
  },
  { 
    id: 17,
    src: "/images/17.webp",
    alt: "Laundry room remodel with new cabinetry and flooring",                
    category: "Renovations" 
  },
  { 
    id: 18,
    src: "/images/18.webp",
    alt: "Herringbone tile pattern in entryway floor",                          
    category: "Flooring" 
  },
  { 
    id: 19,
    src: "/images/19.webp",
    alt: "Complete home renovation — before and after main living area",        
    category: "Renovations" 
  },
  { 
    id: 20,
    src: "/images/20.webp",
    alt: "Smooth Level 5 drywall finish in new construction home",              
    category: "Drywall" 
  },
  { 
    id: 21,
    src: "/images/21.webp",
    alt: "Commercial space renovation — office buildout in Charlotte",          
    category: "Renovations" 
  },
  { 
    id: 22,
    src: "/images/22.webp",
    alt: "Bedroom addition renovation with new windows and drywall",            
    category: "Renovations" 
  },
  { 
    id: 23,
    src: "/images/23.webp",
    alt: "Crisp white paint refresh — trim and walls in family room",           
    category: "Painting" 
  },
  { 
    id: 24,
    src: "/images/24.webp",
    alt: "Crown molding installation in formal dining room",                    
    category: "Carpentry" 
  },
  { 
    id: 25,
    src: "/images/25.webp",
    alt: "Drywall patched and finished after plumbing repair",                  
    category: "Drywall" 
  },
  { 
    id: 26,
    src: "/images/26.webp",
    alt: "Exterior trim painted and refreshed on colonial-style home",          
    category: "Painting" 
  },
  { 
    id: 27,
    src: "/images/27.webp",
    alt: "Kids room painted with custom color and accent detail",               
    category: "Painting" 
  },
  { 
    id: 28,
    src: "/images/28.webp",
    alt: "Ceiling drywall installed and textured in basement conversion",       
    category: "Drywall" 
  },
  { 
    id: 29,
    src: "/images/29.webp",
    alt: "Kitchen cabinet doors and drawer fronts replaced and refinished",     
    category: "Carpentry" 
  },
  { 
    id: 30,
    src: "/images/30.webp",
    alt: "Garage interior painted floor to ceiling — clean bright finish",      
    category: "Painting" 
  },
  { 
    id: 31,
    src: "/images/31.webp",
    alt: "Wainscoting panels and chair rail installed in dining area",          
    category: "Carpentry" 
  },
  { 
    id: 32,
    src: "/images/32.webp",
    alt: "Corner bead and joint compound applied for clean drywall seams",      
    category: "Drywall" 
  },
  { 
    id: 33,
    src: "/images/33.webp",
    alt: "Stairwell and foyer painted with contrasting trim color",             
    category: "Painting" 
  },
  { 
    id: 34,
    src: "/images/34.webp",
    alt: "Stone look tile installed in bathroom floor and shower",              
    category: "Flooring" 
  },
  { 
    id: 35,
    src: "/images/35.webp",
    alt: "Drywall hung and taped in new home addition",                         
    category: "Drywall" 
  },
  { 
    id: 36,
    src: "/images/36.webp",
    alt: "Outdoor patio tile installation — slip-resistant surface",            
    category: "Flooring" 
  },
  { 
    id: 37,
    src: "/images/37.webp",
    alt: "Arched drywall opening finished smooth between living spaces",        
    category: "Drywall" 
  },
  { 
    id: 38,
    src: "/images/38.webp",
    alt: "Drywall repair after water damage — seamless finish achieved",        
    category: "Drywall" 
  },
  { 
    id: 39,
    src: "/images/39.webp",
    alt: "Mosaic tile detail in shower niche and floor",                        
    category: "Flooring" 
  },
  { 
    id: 40,
    src: "/images/40.webp",
    alt: "Custom mudroom built-ins with bench, hooks and storage cubbies",      
    category: "Carpentry" 
  },
];