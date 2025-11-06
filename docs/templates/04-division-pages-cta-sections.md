# Task: Create Division Pages and Add CTA Sections with Moving Backgrounds

## Objective
Create two new division pages (McCarty Engineering and McCarty Associates) with hero videos and detailed content sections, and add visually engaging CTA sections with animated background images to both division pages.

## Pages Created

### 1. McCarty Engineering (`/engineering`)
- **Hero Video**: Flyover of cars video with overlay navigation buttons
- **Intro Paragraph**: Overview of McCarty Engineering services
- **Content Sections**:
  - Civil engineering design
  - Commercial, industrial and residential development plans
  - Utility design
  - Construction monitoring
- **CTA Section**: Animated background image with dark overlay box (right side)

### 2. McCarty Associates (`/associates`)
- **Hero Video**: Excavation video with overlay navigation buttons
- **Intro Paragraph**: Overview of McCarty Associates services
- **Content Sections**:
  - Site inspections
  - Project management (with H3 subsections)
  - Site development (with H3 subsections)
  - Construction management (with H3 subsections)
- **CTA Section**: Animated background image with dark overlay box (right side)

## Technical Implementation

### Navigation Integration
- **Header Component** (`app/(site)/components/header.tsx`):
  - Added "Divisions" dropdown menu (click-based, not hover)
  - Links to both McCarty Engineering and McCarty Associates pages
  - Positioned to the left of other navigation items
  - Mobile-responsive with collapsible menu

### Page Structure
Both pages follow the same pattern:
```
Header
Hero Video Section (with overlay navigation buttons)
Intro Paragraph (light grey background)
Content Sections (alternating white/light grey backgrounds)
CTA Section (full-width animated background with overlay box)
Footer
```

### CTA Sections with Animated Backgrounds

#### Design Pattern
- **Full-width background image** (600px height)
- **Panning animation**: Subtle left-right movement (20s loop)
- **Dark overlay box** (`#3d3d3d`) positioned on the right side
- **Content**: 
  - Large uppercase heading
  - Body text with reduced opacity (`text-white/90`)
  - Red call-to-action button with arrow (`bg-red-600`)
- **Responsive**: Box adjusts width on mobile, maintains readability

#### Animation Details
- **Keyframe**: `@keyframes pan` in `globals.css`
- **Scale**: 1.15x (15% zoom to allow panning without edge gaps)
- **Translation**: -5% horizontal movement
- **Duration**: 20 seconds
- **Easing**: ease-in-out infinite loop

### Files Modified

#### New Files Created
- `app/(site)/engineering/page.tsx` - McCarty Engineering division page
- `app/(site)/associates/page.tsx` - McCarty Associates division page

#### Modified Files
- `app/(site)/components/header.tsx` - Added divisions dropdown menu
- `app/globals.css` - Added panning animation keyframes
- `app/(site)/components/hero-video.tsx` - Removed poster fallback image

### Video Assets Used
- **Engineering Page**: `/media/Flyoverofcars.mp4`
- **Associates Page**: `/media/Excavation.mp4`
- **Main Page Hero**: `/media/Werfern_interior.mp4`

### Background Images Used
- **Engineering CTA**: `/media/mccartyengineering.jpg`
- **Associates CTA**: Construction site image (stock photo)
- **Main Services Carousel**: Individual service-specific images

## Content Strategy

### McCarty Engineering
**Focus**: Technical precision and civil design expertise
**Key Services**:
- Complete civil design and permitting
- Development plans for all project types
- Utility system design
- Construction monitoring and oversight

**CTA Message**: "Built on engineering precision" - emphasizes technical expertise

### McCarty Associates
**Focus**: Comprehensive construction management and site development
**Key Services**:
- Specialized site inspections for financial institutions
- Full project management and owner representation
- Complete site development from clearing to paving
- General contracting and construction management

**CTA Message**: "From plans to performance" - emphasizes execution and results

## Styling Updates

### Typography
- **Headings**: Sentence case throughout (per brand guidelines)
- **H1**: 5xl-7xl, bold, uppercase on CTA sections
- **H2**: 4xl-5xl, bold
- **H3**: Subsection headings in content areas
- **Body**: Base to lg sizing, comfortable line-height

### Color Palette
- **Backgrounds**: White and light grey (`#e0e0e0`) alternating
- **Text**: Dark grey (`#2e2e2e`) and medium grey (`#6e6e6e`)
- **CTA Box**: Dark grey (`#3d3d3d`)
- **Buttons**: Red (`#dc2626`) with hover state

### Spacing
- **Section Padding**: `py-16` for content sections
- **Container**: `max-w-6xl mx-auto` for readable content width
- **Responsive**: Adjusted padding on mobile (`px-6`)

## Navigation Enhancements

### Divisions Dropdown
- **Trigger**: Click to open/close (not hover-based)
- **Blur Handling**: Closes when clicking outside
- **Links**: 
  - McCarty Engineering → `/engineering`
  - McCarty Associates → `/associates`
- **Mobile**: Expands in mobile menu with subsection styling
- **Animation**: Chevron rotates when open

### Hero Video Navigation Buttons
- **Purpose**: Jump to specific content sections on the page
- **Appearance**: White buttons with dark text, hover effects
- **Animation**: Fade in with staggered delay
- **Functionality**: Smooth scroll to section IDs
- **Mobile**: Responsive wrapping for smaller screens

## Animation & Interactivity

### Panning Background Animation
```css
@keyframes pan {
  0% { transform: scale(1.15) translateX(0); }
  50% { transform: scale(1.15) translateX(-5%); }
  100% { transform: scale(1.15) translateX(0); }
}
```
- Applied to all CTA section backgrounds
- Creates subtle motion without being distracting
- Enhances visual interest and professionalism

### Video Loading
- **Hero Videos**: Autoplay, muted, loop, playsInline
- **Fallback**: Dark grey background during load
- **No Poster**: Removed poster images for cleaner loading

## Responsive Design

### Desktop (md and up)
- Side-by-side layouts for content
- CTA box positioned on right side
- Full navigation menu in header
- Wider content containers

### Mobile (below md)
- Stacked content layouts
- Full-width CTA boxes
- Hamburger menu for navigation
- Adjusted typography sizing

## Success Criteria
- [x] McCarty Engineering page created with complete content
- [x] McCarty Associates page created with complete content
- [x] Divisions dropdown added to main navigation
- [x] Hero videos loading and playing correctly
- [x] CTA sections with animated backgrounds implemented
- [x] Red buttons linking to contact page
- [x] Responsive design working on all screen sizes
- [x] Content sections with proper H2/H3 hierarchy
- [x] Smooth scroll navigation from hero buttons
- [x] Panning animation on all CTA backgrounds
- [x] Sentence case applied throughout
- [x] Footer and header present on all pages

## Performance Considerations

### Video Optimization
- Videos set to autoplay, muted, loop for best UX
- PlaysInline attribute for mobile compatibility
- Dark background fallback during load
- No poster images to reduce initial load time

### Animation Performance
- CSS transforms (translate, scale) for hardware acceleration
- Smooth 20-second duration to avoid janky motion
- Single animation instance shared across all sections

### Image Loading
- Background images loaded via CSS
- Proper aspect ratio maintained
- Scale applied to prevent edge gaps during pan

## Future Enhancements
- [ ] Add video loading progress indicators
- [ ] Implement lazy loading for below-fold content
- [ ] Add more interactive elements to hero sections
- [ ] Consider adding project galleries to division pages
- [ ] Add structured data for SEO
- [ ] Implement page transitions
- [ ] Add sharing/social meta tags

## Notes & Dependencies
- **Previous Tasks**: Services overlay, "Here's How" section, color scheme updates
- **Design Consistency**: All CTA sections follow the same pattern
- **Brand Guidelines**: Sentence case, McCarty color palette, typography
- **Browser Compatibility**: Tested on modern browsers with video support
- **Accessibility**: Semantic HTML, proper heading hierarchy, keyboard navigation

## Related Components
- Header with divisions dropdown
- Footer with contact information and social links
- Hero video component (simplified, no poster)
- Services overlay carousel with panning backgrounds
- CTA sections with consistent design pattern

