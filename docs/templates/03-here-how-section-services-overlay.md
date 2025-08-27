# Task: Add "Here's How" Section and Services Overlay Redesign

## Objective
Transform the services section into a full-width image background with overlaid service cards and navigation arrows, while adding a new "Here's How" section above it that combines descriptive text with proof counters.

## Current Layout
```
Hero Video
Services + Proof Counters (side-by-side)
Featured Projects
Client Feedback
About Us Section
Call-to-Action
```

## Target Layout
```
Hero Video
Here's How Section (text + proof counters side-by-side)
Services Overlay Section (full-width image with overlaid service cards + navigation)
Featured Projects
Client Feedback
About Us Section
Call-to-Action
```

## Technical Requirements

### New "Here's How" Section
- **Left Side**: Descriptive text about applying scientific and engineering principles
- **Right Side**: Proof counters (1,800,000 sq ft, 98% on-time, etc.)
- **Layout**: Side-by-side with responsive stacking on mobile
- **Styling**: Professional, clean design matching existing aesthetic

### Services Overlay Section
- **Background**: Full-width high-quality civil engineering/construction image
- **Service Cards**: Overlay on the image with semi-transparent backgrounds
- **Navigation**: Left/right arrow navigation to cycle through services
- **Layout**: Single service card displayed at a time with smooth transitions
- **Responsive**: Mobile-friendly with touch/swipe support

### Component Modifications
- **Main Page** (`app/page.tsx`): Add "Here's How" section, restructure services
- **Service Card** (`app/(site)/components/service-card.tsx`): Adapt for overlay display
- **New Component**: Create services overlay component with navigation
- **Proof Counters**: Move from services section to "Here's How" section

### Styling Updates
- **"Here's How"**: Clean typography with balanced left/right layout
- **Services Overlay**: Full-width image with proper overlay styling
- **Navigation Arrows**: Prominent, accessible navigation controls
- **Service Cards**: Semi-transparent backgrounds for readability over image
- **Responsive**: Mobile-first design with proper touch interactions

## Implementation Steps

1. **Create "Here's How" Section**
   - Add descriptive text about scientific and engineering principles
   - Position proof counters to the right
   - Implement responsive side-by-side layout

2. **Redesign Services Section**
   - Source high-quality civil engineering/construction background image
   - Create services overlay component with navigation
   - Implement left/right arrow navigation
   - Add smooth transitions between services

3. **Update Service Cards**
   - Adapt styling for overlay display
   - Ensure readability over background image
   - Maintain consistent design language

4. **Responsive Design**
   - Mobile: Stack "Here's How" content vertically
   - Mobile: Touch-friendly service navigation
   - Desktop: Side-by-side layouts with full-width services

5. **Visual Polish**
   - High-quality background image selection
   - Proper overlay contrast and readability
   - Smooth animations and transitions
   - Professional navigation controls

## Success Criteria
- [x] "Here's How" section displays descriptive text with proof counters
- [x] Services section uses full-width background image
- [x] Service cards overlay on image with proper readability
- [x] Left/right navigation arrows function properly
- [x] Smooth transitions between services
- [x] Responsive design works on all screen sizes
- [x] Professional appearance maintained throughout
- [x] No layout shifts or visual glitches
- [x] Dynamic background images change with each service
- [x] High-quality construction/civil engineering imagery used

## Notes & Dependencies
- **Previous Task**: Services and proof counters reordered successfully
- **Design Goal**: More engaging, visual services presentation
- **Performance**: Smooth image loading and navigation transitions
- **Accessibility**: Proper contrast, keyboard navigation, screen reader support
- **Testing**: Verify on multiple screen sizes and devices
- **Image Selection**: High-quality, relevant civil engineering/construction imagery

## Additional Features Implemented
- **Dynamic Background Images**: Each service now has its own high-quality background image
- **Smooth Image Transitions**: 700ms ease-in-out transitions between background images
- **Full-Width Coverage**: Background images cover the entire width with proper scaling
- **Service-Specific Imagery**: Each service paired with relevant construction/civil engineering photos
- **Enhanced Navigation**: Visual indicators and smooth transitions between services
