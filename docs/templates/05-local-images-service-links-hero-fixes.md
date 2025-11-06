# Task: Local Images, Service Links, Hero Fixes, and Layout Reorganization

## Objective
Enhance the McCarty Companies website by replacing external images with local ones, updating the main page's services slideshow to link to specific division pages, fixing an intermittent hero text loading issue on division pages, removing images from Project Management and Construction Management sections, reorganizing content into 2x2 grids, and swapping CTA content between division pages.

## Key Features Implemented

### 1. Local Image Integration (8 Images Total)

**McCarty Associates Page (`/associates`)**
- **Site Inspections**:
  - Original: `https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=800&h=600&fit=crop`
  - Local: `/media/construction-site-inspection.jpg` (Source: [1streporting.com](https://1streporting.com/wp-content/uploads/2022/04/construction-site-insepction_edited.jpg))
  - *Note: This image was downloaded manually due to automated download blocks.*

- **Site Clearing, Demolition, Recycling and Disposal**:
  - Original: `https://images.unsplash.com/photo-1590849066058-77c2e1f4e06f?w=800&h=600&fit=crop`
  - Local: `/media/Demolition-of-building-Everything-you-need-to-know-about-it.jpg` (Source: [housing.com](https://housing.com/news/wp-content/uploads/2022/11/Demolition-of-building-Everything-you-need-to-know-about-it.jpg))
  - *Note: This image was downloaded manually due to automated download blocks.*

- **Excavation, Grading and Earthwork**:
  - Original: `https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop`
  - Local: `/media/bulldozer-excavation.png` (Source: [earthmoverschool.com](https://earthmoverschool.com/wp-content/uploads/2023/12/bulldozer-course-7.png))

- **Stormwater Drainage, Erosion Control and Retention Ponds**:
  - Original: `https://images.unsplash.com/photo-1625248179005-ca91ab6e32e6?w=800&h=600&fit=crop`
  - Local: `/media/industrial-drainage-channel.jpg` (Source: [hauraton.com](https://www.hauraton.com/wp-content/uploads/2020/11/industrial-drainage-channel.jpg?width=1400))

- **Roadbed Preparation, Construction and Utility Infrastructure**:
  - Original: `https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop`
  - Local: `/media/roadbed-preparation.jpg` (Source: [faulksbrothers.com](https://faulksbrothers.com/wp-content/uploads/2025/03/roadbed-preperation-003.jpg))

- **General Contracting and Construction Management**:
  - Original: `https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop`
  - Local: `/media/construction-manager-group.png` (Source: [arch.tamu.edu](https://www.arch.tamu.edu/app/uploads/2025/03/construction-manager-with-group.png))

**McCarty Engineering Page (`/engineering`)**
- **Commercial, Industrial and Residential Development Plans**:
  - Original: `https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop`
  - Local: `/media/development-plans.jpg` (Source: [biplanning.wordpress.com](https://biplanning.wordpress.com/wp-content/uploads/2014/02/picture1.jpg))

- **Utility Design**:
  - Original: `https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop`
  - Local: `/media/utility-design.jpg` (Source: [blackandmcdonald.com](https://blackandmcdonald.com/wp-content/uploads/Hero_en_OurServices_USR_CivilWorks.jpg))

### 2. Main Page Services Slideshow Links

- **Objective**: Update the "Our approach" button in the `ServicesOverlay` component on the main page (`/`) to link to the relevant division page (`/associates` or `/engineering`) and display appropriate button text.
- **Implementation**:
  - Modified `capabilityData` in `app/page.tsx` to include `link` and `buttonText` properties for each service.
  - Updated `ServiceData` interface in `app/(site)/components/services-overlay.tsx` to include `link?: string;` and `buttonText?: string;`.
  - Modified `app/(site)/components/services-overlay.tsx` to conditionally render a `Link` component using `currentService.link` and `currentService.buttonText`.
- **Mapping**:
  - **McCarty Associates**: Site inspections, Project management, Landscape architecture, Site development, Construction management.
  - **McCarty Engineering**: Civil engineering design, Commercial, industrial and residential development plans, Utility design, Construction monitoring.

### 3. Hero Text Animation Fix on Division Pages

- **Problem**: Intermittent issue where hero text on `/associates` and `/engineering` pages would not load on initial page view, only appearing after scrolling down and back up.
- **Root Cause**: Framer Motion's `whileInView` animation with `viewport={{ once: true, amount: 0.4 }}` was causing the animation to not trigger if the element wasn't sufficiently in view on initial render.
- **Solution**:
  - Changed `whileInView` to `animate` in `app/(site)/associates/page.tsx` and `app/(site)/engineering/page.tsx` for the main hero text `motion.div`.
  - Added a `delay: 0.2` to the `transition` property to allow the video to load first.

### 4. Project Management Section - Image Removal

- **Objective**: Remove all images from the "Project management" section on the Associates page.
- **Implementation**:
  - Modified `app/(site)/associates/page.tsx` to remove the `Image` components and their surrounding `div` wrappers from the "Owner and investor representation", "Building owner and bank representation", and "Project remediation" subsections.
  - The subsections now display as text-only blocks.

### 5. Site Development Section - Image Rework

- **Objective**: Place the `excavator_mccarty.png` image to the left of the "Site Development" header and remove all other images from the subsections within this div, ensuring the main image matches the styling of other images on the page.
- **Implementation**:
  - Modified `app/(site)/associates/page.tsx`:
    - Moved the `excavator_mccarty.png` image to a new `div` that is part of a `grid md:grid-cols-2` layout with the "Site development" header and intro paragraph.
    - Applied `h-[400px] rounded-lg overflow-hidden shadow-lg object-cover` to the `Image` component to match the styling of other images on the page.
    - Removed the `Image` components and their surrounding `div` wrappers from the "Site clearing", "Excavation", "Stormwater", and "Roadbed" subsections.

### 6. Associates Page Layout Reorganization

**Objective**: Restructure the Associates page content sections into 2x2 grid layouts, remove images from Project Management and Construction Management sections, and create a custom vertical-centered layout for the Project Management section.

**Construction Management Images Removed:**
- Modified `app/(site)/associates/page.tsx`
- All images removed from the Construction Management section
- Subsections converted to text-only blocks: Estimating and scheduling, Value engineering, Design/build contracting, General contracting and construction management
- Organized into `grid md:grid-cols-2 gap-12` layout

**Site Development 2x2 Grid:**
- Modified `app/(site)/associates/page.tsx`
- Reorganized into `grid md:grid-cols-2 gap-12`
- Top Left: Site clearing, demolition, recycling and disposal
- Top Right: Excavation, grading and earthwork
- Bottom Left: Stormwater drainage, erosion control and retention ponds
- Bottom Right: Roadbed preparation, construction and utility infrastructure
- Centered closing paragraph below the grid

**Construction Management 2x2 Grid:**
- Modified `app/(site)/associates/page.tsx`
- Reorganized into `grid md:grid-cols-2 gap-12`
- Top Left: Estimating and scheduling
- Top Right: Value engineering
- Bottom Left: Design/build contracting
- Bottom Right: General contracting and construction management

**Project Management Custom Grid Layout:**
- Modified `app/(site)/associates/page.tsx`
- Grid Configuration:
  - Grid columns: `md:grid-cols-[1fr_1.2fr]` (left column narrower than right)
  - Gap: `gap-x-16 gap-y-8` (wider horizontal gap, tighter vertical)
  - Container: `max-w-5xl mx-auto` (centered, constrained width)
- Layout:
  - Left column (top): Owner and investor representation
    - Styling: `flex items-center justify-end` (right-aligned)
  - Right column (center): Building owner and bank representation, contract fulfillment and funds dispersal
    - Styling: `md:row-span-2 flex items-center` (spans 2 rows, vertically centered)
  - Left column (bottom): Project remediation and recovery consultation
    - Styling: `flex items-center justify-end` (right-aligned)
- Result: Right column content is vertically centered between the two left column items, creating an asymmetric but balanced layout

### 7. CTA Section Content Swap Between Pages

**Objective**: Swap the CTA (Call-to-Action) content and links between the Associates and Engineering pages so each page promotes the other division, creating cross-referencing between the two divisions.

**Associates Page CTA** (`app/(site)/associates/page.tsx`):
- **Headline**: "Built on engineering precision"
- **Body**: "A trusted leader in civil and site design, McCarty Engineering serves developers, owners, and contractors across New England. Guided by technical precision and practical experience, our team delivers comprehensive design, permitting and construction support services for commercial, industrial and residential projects. Each plan is thoughtfully engineered for performance, longevity and lasting value."
- **Button**: "Explore the McCarty Engineering difference →" 
- **Link**: `/engineering`
- **Background**: `/media/mccartyengineering.jpg` with `animate-pan` class for movement

**Engineering Page CTA** (`app/(site)/engineering/page.tsx`):
- **Headline**: "From plans to performance"
- **Body**: "McCarty Associates transforms our engineering designs into finished spaces through integrated construction management and site development expertise"
- **Button**: "Explore our construction management capabilities with McCarty Associates →"
- **Link**: `/associates`
- **Background**: Changed from static image to video
  - Video: `/media/Tree_clearing.mp4`
  - Properties: `autoPlay muted loop playsInline`
  - Positioning: `object-cover object-bottom` (focuses on bottom portion of video)

**Result:**
- Associates page now promotes Engineering division
- Engineering page now promotes Associates division
- Each page cross-links to the other, creating better navigation flow
- Engineering page features dynamic video background for enhanced visual appeal

## Success Criteria
- [x] 8 external images replaced with local files on Associates and Engineering pages
- [x] All service slideshow items on main page link to appropriate division pages
- [x] Service slideshow buttons display correct division names
- [x] Hero text animation fixed on division pages (no longer intermittent)
- [x] All images removed from Project Management section on Associates page
- [x] All images removed from Construction Management section on Associates page
- [x] Site Development section on Associates page restructured with excavator image and subsection images removed
- [x] Excavator image properly styled and positioned on Associates page
- [x] Site Development section reorganized into 2x2 grid layout
- [x] Construction Management section reorganized into 2x2 grid layout
- [x] Project Management section reorganized with custom grid and vertical centering
- [x] CTA content swapped between Associates and Engineering pages
- [x] CTA links updated to cross-reference between division pages
- [x] Associates page CTA background updated to mccartyengineering.jpg
- [x] Engineering page CTA background changed to Tree_clearing.mp4 video
- [x] Video positioning optimized with object-bottom
- [x] No external image dependencies remain
- [x] Local image files successfully downloaded and integrated
- [x] All links and navigation function correctly

## Notes & Dependencies
- **Image Sourcing**: All images were sourced from external URLs and downloaded locally to the `public/media/` directory.
- **Manual Downloads**: Some images (`construction-site-inspection.jpg` and `Demolition-of-building-Everything-you-need-to-know-about-it.jpg`) required manual download due to website security measures blocking automated downloads.
- **Next.js Image Configuration**: The `images.remotePatterns` in `next.config.ts` was temporarily updated to allow external image domains during development, then cleaned up by removing those entries after images were saved locally.
- **Animation**: The `animate-pan` keyframes are defined in `app/globals.css` and applied to CTA background images.
- **Hero Animation Fix**: Changed from `whileInView` to `animate` with delay to ensure text loads consistently on initial page view.
- **Service Links**: Main page services now link to division pages instead of just having placeholder buttons.
- **Grid Layouts**: All major content sections on Associates page now use consistent 2x2 grid layouts for better visual organization and readability.
- **Video Background**: Engineering page CTA section uses HTML5 video element with `object-bottom` positioning to focus on lower portion of video content.
- **Cross-Referencing**: CTA sections on both division pages now promote the other division, creating a cohesive navigation flow between Engineering and Associates.

## Related Documentation
- [Task 01: Change Logo](./01-change-logo.md)
- [Task 02: Reorder Services and Proof Counters](./02-reorder-services-proof-counters.md)
- [Task 03: Here's How Section and Services Overlay](./03-here-how-section-services-overlay.md)
- [Task 04: Division Pages and CTA Sections](./04-division-pages-cta-sections.md)
