# Task: Local Images, Service Links, and Hero Animation Fixes

## Objective
Download and implement local images for division pages, add links to service slideshow buttons, and fix hero text animation loading issues.

## Date
November 6, 2025

## Changes Made

### 1. Local Images Downloaded and Implemented

#### Associates Page (`/associates`)
Downloaded and integrated 6 local images:

1. **Site Inspections**
   - File: `public/media/construction-site-inspection.jpg`
   - Source: [1st Reporting](https://1streporting.com/wp-content/uploads/2022/04/construction-site-insepction_edited.jpg)
   - Section: Site inspections

2. **Site Clearing**
   - File: `public/media/Demolition-of-building-Everything-you-need-to-know-about-it.jpg`
   - Source: [Housing.com](https://housing.com/news/wp-content/uploads/2022/11/Demolition-of-building-Everything-you-need-to-know-about-it.jpg)
   - Section: Site clearing, demolition, recycling and disposal

3. **Excavation**
   - File: `public/media/bulldozer-excavation.png`
   - Source: [Earthmover School](https://earthmoverschool.com/wp-content/uploads/2023/12/bulldozer-course-7.png)
   - Section: Excavation, grading and earthwork

4. **Stormwater Drainage**
   - File: `public/media/industrial-drainage-channel.jpg`
   - Source: [Hauraton](https://www.hauraton.com/wp-content/uploads/2020/11/industrial-drainage-channel.jpg?width=1400)
   - Section: Stormwater drainage, erosion control and retention ponds

5. **Roadbed Preparation**
   - File: `public/media/roadbed-preparation.jpg`
   - Source: [Faulks Brothers](https://faulksbrothers.com/wp-content/uploads/2025/03/roadbed-preperation-003.jpg)
   - Section: Roadbed preparation, construction and utility infrastructure

6. **Construction Management**
   - File: `public/media/construction-manager-group.png`
   - Source: [Texas A&M Architecture](https://www.arch.tamu.edu/app/uploads/2025/03/construction-manager-with-group.png)
   - Section: General contracting and construction management

#### Engineering Page (`/engineering`)
Downloaded and integrated 2 local images:

1. **Development Plans**
   - File: `public/media/development-plans.jpg`
   - Source: [BI Planning](https://biplanning.wordpress.com/wp-content/uploads/2014/02/picture1.jpg)
   - Section: Commercial, industrial and residential development plans

2. **Utility Design**
   - File: `public/media/utility-design.jpg`
   - Source: [Black & McDonald](https://blackandmcdonald.com/wp-content/uploads/Hero_en_OurServices_USR_CivilWorks.jpg)
   - Section: Utility design

### 2. Service Slideshow Links Added

Updated `app/page.tsx` and `app/(site)/components/services-overlay.tsx` to add division-specific links and button text to each service in the main page carousel.

#### Link Mapping

**McCarty Associates Services (5):**
- Site inspections → `/associates`
- Project management → `/associates`
- Landscape architecture → `/associates`
- Site development → `/associates`
- Construction management → `/associates`

**McCarty Engineering Services (4):**
- Civil engineering design → `/engineering`
- Commercial, industrial and residential development plans → `/engineering`
- Utility design → `/engineering`
- Construction monitoring → `/engineering`

#### Technical Implementation

**Updated `app/page.tsx`:**
```typescript
const capabilityData = [
  { 
    title: "Site inspections", 
    body: "...",
    backgroundImage: "...",
    link: "/associates",
    buttonText: "McCarty Associates"
  },
  // ... other services
];
```

**Updated `app/(site)/components/services-overlay.tsx`:**
- Added `link` and `buttonText` optional properties to `ServiceData` interface
- Added `import Link from "next/link"`
- Changed button from `<button>` to `<Link>` component with conditional rendering:
```typescript
{currentService.link && currentService.buttonText && (
  <Link href={currentService.link} className="...">
    {currentService.buttonText}
  </Link>
)}
```

### 3. Hero Text Animation Loading Fix

#### Problem
Hero text on `/associates` and `/engineering` pages sometimes didn't appear on initial page load. Text would only show after scrolling down and back up.

#### Root Cause
Pages were using `whileInView` with `viewport={{ once: true, amount: 0.4 }}`, which required 40% of the element to be visible in the viewport before triggering. On initial load, the viewport detection sometimes failed.

#### Solution
Changed hero text animations from `whileInView` to `animate` on both pages:

**Associates Page (`app/(site)/associates/page.tsx`):**
```typescript
// BEFORE
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>

// AFTER
<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
>
```

**Engineering Page (`app/(site)/engineering/page.tsx`):**
Applied the same fix with `animate` instead of `whileInView` and added a 0.2s delay.

## Files Modified

### Core Files
1. `app/page.tsx` - Added link and buttonText properties to capabilityData
2. `app/(site)/components/services-overlay.tsx` - Updated to support links and dynamic button text
3. `app/(site)/associates/page.tsx` - Updated 6 images to local files, fixed hero animation
4. `app/(site)/engineering/page.tsx` - Updated 2 images to local files, fixed hero animation

### New Media Files
- `public/media/construction-site-inspection.jpg`
- `public/media/Demolition-of-building-Everything-you-need-to-know-about-it.jpg`
- `public/media/bulldozer-excavation.png`
- `public/media/industrial-drainage-channel.jpg`
- `public/media/roadbed-preparation.jpg`
- `public/media/construction-manager-group.png`
- `public/media/development-plans.jpg`
- `public/media/utility-design.jpg`

## Configuration Changes

### Next.js Image Configuration
Initially added `www.hauraton.com` to `next.config.ts` `images.remotePatterns` but later removed it after downloading the image locally.

Final configuration remains:
```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

## Testing & Validation

### Before Changes
- [ ] Some division page images were placeholder Unsplash photos
- [ ] Service slideshow buttons labeled "Our approach" with no functionality
- [ ] Hero text intermittently failed to load on division pages

### After Changes
- [x] All division page images are locally hosted and content-appropriate
- [x] Service slideshow buttons link to correct division pages with proper labels
- [x] Hero text loads consistently on every page load
- [x] All images optimized through Next.js Image component
- [x] No external image dependencies (except Unsplash for team/project photos)

## Troubleshooting Notes

### Server Crashes During Image Changes
During implementation, the dev server crashed when adding local images. Resolution:
1. Cleared `.next` cache: `Remove-Item -Recurse -Force .next`
2. Killed lingering Node processes
3. Restarted dev server fresh

### Image Download Failures
Some websites (Housing.com) blocked automated downloads via curl. These required manual download through browser.

## Benefits

1. **Performance**: Local images load faster and don't depend on external servers
2. **Reliability**: Images won't break if external sources remove/change them
3. **User Experience**: Service buttons now provide clear navigation to division pages
4. **Consistency**: Hero text now reliably appears on every page load
5. **Content Quality**: Images are specific to their sections rather than generic stock photos

## Success Criteria
- [x] 8 local images downloaded and integrated across division pages
- [x] All service slideshow buttons link to appropriate division pages
- [x] Button text clearly identifies which McCarty division provides each service
- [x] Hero text animations work consistently on all page loads
- [x] No external image hosting dependencies for division page content images
- [x] All images render correctly with Next.js Image optimization
- [x] Dev server stable after changes
- [x] Documentation updated

## Future Considerations

### Potential Improvements
1. Add section-specific anchor links (e.g., `/associates#site-inspections`) for direct navigation
2. Consider adding more local images to replace remaining Unsplash placeholders
3. Implement image lazy loading optimization for performance
4. Add alt text improvements for better accessibility
5. Consider WebP conversion for additional file size optimization

### Maintenance Notes
- Local images are stored in `public/media/`
- Image sources documented above for reference
- All images should be reviewed periodically for licensing compliance
- Consider creating a backup of all local images

## Related Documentation
- [Task 01: Change Logo](./01-change-logo.md)
- [Task 02: Reorder Services and Proof Counters](./02-reorder-services-proof-counters.md)
- [Task 03: Here's How Section and Services Overlay](./03-here-how-section-services-overlay.md)
- [Task 04: Division Pages and CTA Sections](./04-division-pages-cta-sections.md)

