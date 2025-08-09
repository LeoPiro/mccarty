export type Project = {
  slug: string;
  name: string;
  category: "Healthcare" | "Higher Ed" | "Commercial" | "Industrial" | "Other";
  coverImage: string;
  gallery?: string[];
  excerpt: string;
  specs: {
    location?: string;
    sizeSqFt?: number;
    delivery?: string;
    completion?: string;
    valueUSD?: number;
  };
  body: string;
  video?: { src: string; poster?: string };
};

// Stock images placed in public/media/projects (filenames as downloaded)
const stockImages = [
  "/media/projects/pexels-life-of-pix-8092.jpg",
  "/media/projects/pexels-pixabay-159358.jpg",
  "/media/projects/pexels-pixabay-268362.jpg",
  "/media/projects/pexels-pixabay-53176.jpg",
  "/media/projects/pexels-pixabay-7931.jpg",
  "/media/projects/pexels-rezwan-1216544.jpg",
  "/media/projects/pexels-rezwan-1216589.jpg",
  "/media/projects/pexels-rquiros-2219024.jpg",
];

// Simple deterministic hash so the mapping looks random but is stable per slug
function imageIndexFor(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) % 2147483647;
  }
  return h % stockImages.length;
}

// Base project data without binding to specific images
const baseProjects: Omit<Project, "coverImage" | "gallery">[] = [
  {
    slug: "central-health-center",
    name: "Central Health Center",
    category: "Healthcare",
    excerpt: "Modern outpatient facility delivering patient‑centric spaces.",
    specs: { location: "Boston, MA", sizeSqFt: 72000, delivery: "CM at Risk", completion: "2024" },
    body: "Scope included preconstruction, ground‑up construction, and commissioning of critical care areas.",
  },
  {
    slug: "state-university-lab",
    name: "State University Lab Expansion",
    category: "Higher Ed",
    excerpt: "STEM lab addition enabling advanced research collaborations.",
    specs: { location: "Amherst, MA", sizeSqFt: 54000, delivery: "Design-Build", completion: "2023" },
    body: "Collaborative spaces, wet/dry labs, and flexible learning environments delivered on a fast‑track schedule.",
  },
  {
    slug: "commerce-hq",
    name: "Commerce HQ Renovation",
    category: "Commercial",
    excerpt: "Adaptive reuse of a warehouse into a collaborative HQ.",
    specs: { location: "Worcester, MA", sizeSqFt: 88000, delivery: "CM at Risk", completion: "2025" },
    body: "Open office neighborhoods, enhanced daylighting, and structural retrofit to support new mezzanine.",
  },
  {
    slug: "logistics-hub",
    name: "Regional Logistics Hub",
    category: "Industrial",
    excerpt: "High‑bay distribution center with optimized throughput.",
    specs: { location: "Springfield, MA", sizeSqFt: 250000, delivery: "Design-Bid-Build", completion: "2024" },
    body: "Tilt‑wall construction, early procurement strategy, and integration of automation infrastructure.",
  },
  {
    slug: "innovation-hub",
    name: "Innovation Hub",
    category: "Commercial",
    excerpt: "Flexible multi‑tenant innovation and maker space.",
    specs: { location: "Cambridge, MA", sizeSqFt: 132000, delivery: "CM at Risk", completion: "2025" },
    body: "Hybrid steel and CLT framing, advanced MEP coordination, and high‑performance envelope.",
  },
  {
    slug: "community-center",
    name: "Community Engagement Center",
    category: "Other",
    excerpt: "Multi‑use civic facility supporting education and outreach.",
    specs: { location: "Lowell, MA", sizeSqFt: 56000, delivery: "Design-Build", completion: "2024" },
    body: "Program includes auditorium, classrooms, and flexible event spaces with robust AV integration.",
  },
];

export const projects: Project[] = baseProjects.map(p => {
  const i = imageIndexFor(p.slug);
  const coverImage = stockImages[i];
  // Build a small gallery of three sequential images (wrap around) for lightbox variety
  const gallery = [0,1,2].map(off => stockImages[(i + off) % stockImages.length]);
  return { ...p, coverImage, gallery };
});
