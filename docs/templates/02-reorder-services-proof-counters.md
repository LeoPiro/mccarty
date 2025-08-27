# Task: Reorder Services and Proof Counters Layout

## Objective
Reposition the animated proof counters section (25 years in business, sq ft delivered, recordable incidents) to display alongside the services content in a side-by-side layout, rather than as separate stacked sections.

## Current Layout
```
Hero Video
Services Section (3-column grid of service cards)
About Us Section
Proof Counters (animated statistics)
Featured Projects
Client Feedback
Call-to-Action
```

## Target Layout
```
Hero Video
Services + Proof Counters (side-by-side)
Featured Projects
Client Feedback
About Us Section
Call-to-Action
```

## Technical Requirements

### Layout Changes
- **Services Section**: Maintain 3-column grid but reduce to 2 columns to make room for proof counters
- **Proof Counters**: Move from standalone section to right side of services section
- **Container**: Create a flexbox layout with services on left (2/3 width) and proof counters on right (1/3 width)
- **Responsive**: Stack vertically on mobile devices

### Component Modifications
- **Main Page** (`app/page.tsx`): Restructure the services section layout
- **Proof Counters** (`app/(site)/components/proof-counters.tsx`): Ensure component works in constrained width
- **Service Cards**: Adjust grid from 3 columns to 2 columns

### Styling Updates
- **Grid Layout**: Change services from `md:grid-cols-3` to `md:grid-cols-2`
- **Container**: Add flexbox container with `md:flex-row` for side-by-side layout
- **Spacing**: Adjust margins and padding for balanced visual hierarchy
- **Box Styling**: Add container styling around proof counters for visual separation

## Implementation Steps

1. **Update Main Page Layout**
   - Modify services section to use flexbox container
   - Change service cards grid from 3 to 2 columns
   - Position proof counters component to the right

2. **Adjust Proof Counters Component**
   - Ensure responsive behavior in constrained width
   - Add container styling for visual separation
   - Maintain animation timing and performance

3. **Responsive Design**
   - Mobile: Stack services and proof counters vertically
   - Desktop: Side-by-side layout with services (2/3) and proof counters (1/3)

4. **Visual Polish**
   - Add subtle borders or background to proof counters container
   - Ensure proper spacing between services and proof counters
   - Maintain consistent section padding and margins

## Success Criteria
- [x] Proof counters display to the right of services content
- [x] Services grid reduced to 2 columns for better side-by-side balance
- [x] Responsive design works on all screen sizes
- [x] Animations load together as user scrolls
- [x] Visual hierarchy maintains professional appearance
- [x] No layout shifts or visual glitches

## Notes & Dependencies
- **Previous Task**: Services section renamed from Capabilities, About Us section added
- **Design Goal**: Better space utilization and visual balance
- **Performance**: Maintain smooth animations and scroll performance
- **Accessibility**: Ensure proper reading order and screen reader navigation
- **Testing**: Verify on multiple screen sizes and devices
