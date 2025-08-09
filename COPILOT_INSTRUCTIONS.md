Project goal
Build a modern, “flashy” marketing site for McCarty inspired by:

Gilbane: full‑bleed hero video with text overlay; smooth scroll/fade reveals.

Walter P Moore (SoFi Stadium page): project showcase with images + spec callouts.

BuildWitt: review carousel, animated “proof point” counters, video with overlay.

The site should be production‑ready on Vercel with preview deploys for every branch.

Tech stack
Framework: Next.js (App Router), TypeScript

Styling: Tailwind CSS

Animation: framer‑motion

UI Primitives: shadcn/ui (Radix under the hood)

Icons: lucide-react

Hosting: Vercel (Production + Preview URLs)

Forms (no backend): Formspree (or Netlify Forms) – choose one

What to build (MVP pages & sections)
1) Home (/)
Hero (full‑bleed video)

Autoplay, muted, looped hero.mp4 with poster="hero-poster.jpg".

Text overlay (headline, subhead, CTA button).

Fallback image for reduced‑motion users.

Add a subtle top‑to‑bottom gradient overlay to improve text contrast.

Capabilities (3–6 cards)

Grid of cards touting services (e.g., “Preconstruction”, “Project Management”, etc.).

Each card: icon, title, short paragraph. Fade‑in on scroll.

Proof points (animated counters)

3–4 key metrics (e.g., “Years in Business”, “Sq Ft Built”, “On‑time Delivery”, “Safety Incidents”).

Count up when in viewport.

Featured Projects (teaser)

3 project cards pulled from a local data array.

Each card shows hero image, project name, category, quick spec badges.

Clicking opens a lightbox gallery OR links to a /projects/[slug] page.

Reviews (rotating)

Simple auto‑rotating carousel with 3–5 testimonials.

Each: quote, client name, optional logo. Pause on hover; manual next/prev.

CTA band

Bold “Let’s talk” with a button to /contact.

2) Projects index (/projects)
Responsive cards for all projects with filtering chips (e.g., “Healthcare”, “Higher Ed”, “Commercial”).

Cards identical to the home teaser, but full list.

3) Project detail (/projects/[slug])
Large banner image or muted background video (optional).

Two‑column section: left is narrative (“Scope”, “What we did”), right is spec callouts (location, size, schedule, GC/CM, delivery method, etc.).

Inline gallery (lightbox on click).

4) Contact (/contact)
Simple form: name, email, company, message.

Use Formspree (or Netlify Forms). Show success/fail states.

Add a secondary block with address, phone, email.

Accessibility & SEO
Respect prefers-reduced-motion: disable autoplay video / heavy animations when true.

All images have alt.

Semantic headings (H1 once per page).

Reasonable color contrast.

Add metadata in app/layout.tsx: <title>, <meta name="description">, OpenGraph image.

Performance
Optimize hero.mp4 to ~1080p H.264, ~6–10 Mbps; include hero-poster.jpg.

Use modern formats for images (WebP/JPEG), max ~1920px width.

Lazy‑load below‑the‑fold images.

Avoid layout shift (set width/height or sizes where relevant).

File structure (target)
bash
Copy
Edit
mccarty-site/
  app/
    (site)/
      components/
        header.tsx
        footer.tsx
        hero-video.tsx
        capability-card.tsx
        proof-counters.tsx
        project-card.tsx
        project-gallery.tsx
        review-carousel.tsx
        section.tsx
      page.tsx                # Home
      projects/
        page.tsx              # /projects
        [slug]/
          page.tsx            # /projects/[slug]
      contact/
        page.tsx              # /contact
    layout.tsx
    globals.css
  lib/
    projects.ts               # data array of project objects
    reviews.ts                # data array of reviews
  public/
    media/
      hero.mp4
      hero-poster.jpg
      projects/
        example-1.jpg
        example-1b.jpg
        example-2.jpg
        ...
    logo.svg
  components/ui/              # shadcn generated components (button, card, badge, dialog)
  tailwind.config.ts
  postcss.config.js
  tsconfig.json
  package.json
  README.md
  COPILOT_INSTRUCTIONS.md
Required dependencies (ask Copilot to install)
bash
Copy
Edit
npx create-next-app mccarty-site --ts --tailwind --eslint
cd mccarty-site
npm i framer-motion lucide-react
npx shadcn@latest init
npx shadcn@latest add button card badge dialog
Commands
bash
Copy
Edit
npm run dev     # local dev (localhost:3000)
npm run build   # production build
npm run start   # run production locally
Data contracts
Project shape
ts
Copy
Edit
type Project = {
  slug: string;
  name: string;
  category: "Healthcare" | "Higher Ed" | "Commercial" | "Industrial" | "Other";
  coverImage: string;      // e.g., "/media/projects/example-1.jpg"
  gallery?: string[];      // additional images
  excerpt: string;
  specs: {
    location?: string;
    sizeSqFt?: number;
    delivery?: string;     // e.g., "CM at Risk"
    completion?: string;   // e.g., "2023"
    valueUSD?: number;
  };
  body: string;            // rich text; for now simple paragraphs
  video?: { src: string; poster?: string };
};
Review shape
ts
Copy
Edit
type Review = {
  quote: string;
  author: string;
  roleOrCompany?: string;
  logo?: string;           // optional path to client logo
};
Put initial sample data in lib/projects.ts and lib/reviews.ts.

Animation spec (framer‑motion)
All major sections slide/fade in when ~20% visible.

Counters start when visible and stop when leaving the viewport.

Hero overlay text should have a slight upward reveal (y: 20 → 0, opacity 0 → 1).

Reduce motion if prefers-reduced-motion: reduce (no parallax; static poster instead of video).

Styling / look & feel
Base theme: dark header/footer on white/neutral page OR dark overall if it suits video. Keep it clean, generous whitespace, strong typographic scale.

Typography: Tailwind defaults, bump text-balance in headlines.

Buttons: shadcn button with variant="default" for primary CTA, variant="outline" for secondary.

Acceptance criteria checklist
 Home hero shows autoplaying muted looped video with text overlay and CTA; poster shows before playback.

 Sections animate on scroll; animation respects reduced‑motion.

 Counters animate from 0 to target on first view.

 Projects index shows filters and responsive cards.

 Project detail shows a spec callout pane and a gallery (lightbox).

 Reviews carousel rotates automatically and can be controlled manually.

 Contact form posts to Formspree (or Netlify Forms) and shows success/error messages.

 SEO tags + OpenGraph image exist.

 Deployed on Vercel with preview URLs per branch.

Minimal code scaffolds (use as starting point)
app/layout.tsx
tsx
Copy
Edit
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "McCarty | Building & Development",
  description: "Modern construction and development portfolio.",
  openGraph: {
    title: "McCarty",
    description: "Modern construction and development portfolio.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen antialiased bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
app/(site)/components/hero-video.tsx
tsx
Copy
Edit
"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroVideo() {
  const reduce = useReducedMotion();
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    if (reduce) setCanPlay(false);
    else setCanPlay(true);
  }, [reduce]);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {canPlay ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero-poster.jpg"
          src="/media/hero.mp4"
        />
      ) : (
        <img
          src="/media/hero-poster.jpg"
          alt="McCarty project"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-16 text-white"
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold text-balance">
            Building spaces that move people.
          </h1>
          <p className="mt-4 max-w-2xl text-lg opacity-90">
            Construction, development, and project delivery—on time and on budget.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block rounded-md bg-white text-neutral-900 px-6 py-3 font-medium"
          >
            Start Your Project
          </a>
        </div>
      </motion.div>
    </section>
  );
}
app/(site)/components/proof-counters.tsx
tsx
Copy
Edit
"use client";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useCountTo(target: number, startWhenVisible: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!startWhenVisible) return;
    const duration = 1200;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, startWhenVisible]);
  return val;
}

export default function ProofCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const a = useCountTo(25, inView);
  const b = useCountTo(1800000, inView); // sq ft
  const c = useCountTo(98, inView); // on-time %
  const d = useCountTo(0, inView); // safety incidents

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Years in Business", value: a },
          { label: "Sq Ft Delivered", value: b.toLocaleString() },
          { label: "On‑time Delivery", value: `${c}%` },
          { label: "Recordable Incidents", value: d },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-semibold">{item.value}</div>
            <div className="mt-2 text-sm opacity-70">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
Build capability-card.tsx, project-card.tsx, review-carousel.tsx, and pages similarly—Copilot can follow these patterns.

Deployment (Vercel)
Push repo to GitHub:

bash
Copy
Edit
git init
git add -A
git commit -m "Initial McCarty site"
git branch -M main
git remote add origin https://github.com/<USER>/mccarty-site.git
git push -u origin main
In Vercel → New Project → Import GitHub repo → Deploy.

Every branch/PR gets its own Preview URL. Share those with the client.

Copilot tasks (ask one by one)
Initialize UI kit
“Add shadcn/ui and generate button, card, badge, dialog components.”

Build header/footer
“Create header.tsx with a simple logo on the left and nav items (Projects, Capabilities, Contact). Mobile menu collapses into a dialog/sheet.”

Implement hero video
“Create hero-video.tsx using the spec above with reduced‑motion support and gradient overlay.”

Create capability cards
“Make capability-card.tsx and a Capabilities section with 4–6 cards and framer‑motion fade‑in.”

Animated proof counters
“Implement proof-counters.tsx that counts up when in view; reuse the hook pattern provided.”

Project data + cards
“Add lib/projects.ts with 6 sample projects and build project-card.tsx + project-gallery.tsx with a lightbox.”

Projects pages
“Create /projects (grid + filter chips) and /projects/[slug] detail with spec callouts.”

Review carousel
“Build review-carousel.tsx with auto‑rotation, manual prev/next, pause on hover.”

Contact page
“Create /contact with Formspree form and success/error states. Validate required fields.”

SEO & accessibility
“Add metadata to layout.tsx, ensure alt text, and respect prefers-reduced-motion.”

Polish
“Tighten spacing, responsive behavior, and Tailwind classes. Ensure Lighthouse scores are solid.”

Brand TODOs (you will replace)
/public/logo.svg

/public/media/hero.mp4 + hero-poster.jpg

Project images in /public/media/projects/...

Update copy tone to McCarty’s voice (conservative, professional)

Known follow‑ups (Post‑MVP, optional)
Migrate projects to MDX or a headless CMS (Contentlayer/Sanity) for non‑dev editing.

Add case‑study PDFs and a resource library.

Add a sticky “Request a Quote” button.

End of spec
