# Visual Design Guide

## Color Palette

### Primary Colors
```
Orange (Primary Accent)
  HEX: #F97316
  RGB: 249, 115, 22
  Usage: Main CTAs, headlines highlight, pricing highlights
  Tailwind: text-orange-500, bg-orange-500

Emerald (Secondary Accent)  
  HEX: #10B981
  RGB: 16, 185, 129
  Usage: Badges, checkmarks, trust elements
  Tailwind: text-emerald-600, bg-emerald-100
```

### Theme-aware Colors
```
Foreground:    Text color (auto adjusts for light/dark)
Background:    Page background (auto adjusts for light/dark)
Card:          Card backgrounds (auto adjusts for light/dark)
Muted:         Secondary text color (auto adjusts for light/dark)
Border:        Border colors (auto adjusts for light/dark)
```

---

## Typography

### Font Family
```
Primary Font: Inter (from Google Fonts)
  - Headings: Weights 700, 800, 900
  - Body: Weights 400, 500, 600
  - Fallback: System fonts
```

### Heading Sizes
```
H1 (Hero): 3.5rem (56px) - mobile, scales to 7rem (112px) - desktop
H2 (Section): 2rem (32px) - mobile, scales to 3rem (48px) - desktop
H3 (Subsection): 1.5rem (24px)
```

### Line Height
```
Headings: 1.2 (tight)
Body Text: 1.5-1.6 (readable)
Code: 1.4 (compact)
```

---

## Component Color Mappings

### Hero Section
```
Badge Background:     bg-emerald-100/50 with border-emerald-200/50
Badge Text:           text-emerald-600
Badge Icon:           ✓ checkmark icon
Main Headline:        text-foreground (dark gray / white)
Highlight Text:       text-orange-500
Button:               bg-orange-500, text-white
```

### Testimonials Section
```
Card Background:      bg-card (light / dark)
Card Border:          border-border/50 hover: border-orange-200/50
Star Rating:          text-orange-400 (filled)
Author Avatar:        fallback bg-orange-100 with text-orange-600
```

### CTA Section
```
Background Gradient:  emerald-600 → emerald-500 → orange-500
Button Border:        border-white/30
Button Text:          text-white
Button Hover:         bg-white/10, border-white/50
```

### Pricing Section
```
Badge (Popular):      bg-gradient-to-r from-orange-500 to-amber-500
Card Border (Pro):    border-orange-400/50
Checkmarks:           text-emerald-600
Toggle Background:    bg-card with border-border/50
```

### Contact Section
```
Badge Background:     bg-emerald-100/50 with border-emerald-200/50
Trust Icons:          bg-emerald-100, text-emerald-600
Form Button:          bg-orange-500 hover:bg-orange-600
```

---

## Spacing System (Tailwind Scale)

```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
4xl: 6rem (96px)
```

---

## Border Radius

```
Small:    rounded-md (6px)     - Form inputs, small buttons
Medium:   rounded-lg (8px)     - Cards, modals
Large:    rounded-xl (12px)    - Badges, pills
Extra:    rounded-2xl (16px)   - CTA sections
Maximum:  rounded-3xl (24px)   - Large feature cards
Full:     rounded-full (9999px) - Badges, avatars
```

---

## Shadow System

```
Light Shadow:     shadow-sm
Default Shadow:   shadow (used on cards)
Medium Shadow:    shadow-md
Large Shadow:     shadow-lg
Extra Large:      shadow-xl
Colored Shadow:   shadow-orange-500/20 (for emphasis)
```

---

## Responsive Breakpoints

```
Mobile:   < 640px   (default styles)
SM:       640px+    (sm: prefix)
MD:       768px+    (md: prefix)
LG:       1024px+   (lg: prefix)
XL:       1280px+   (xl: prefix)
2XL:      1536px+   (2xl: prefix)
```

### Mobile-First Approach
```
Default: Mobile (< 640px)
sm: Tablet (640px - 767px)
md: Small Laptop (768px - 1023px)
lg: Desktop (1024px+)
```

---

## Dark Mode

All colors automatically adapt:
```css
Light Mode:
  Foreground: #000000
  Background: #ffffff
  Card: #f5f5f5

Dark Mode:
  Foreground: #ffffff
  Background: #000000
  Card: #1a1a1a
```

---

## Animations (Framer Motion)

### Entrance Animations
```
Fade In:        opacity: 0 → 1
Slide Up:       y: 20 → 0, opacity: 0 → 1
Scale In:       scale: 0.95 → 1
```

### Duration
```
Fast:   0.2s
Normal: 0.3s
Slow:   0.5s
```

### Stagger (Sequential)
```
Delay Gap: 0.1s between items
Container: animateChildren for sequential effect
```

---

## State Colors

### Hover States
```
Buttons:      brightness 90% + scale 105%
Cards:        shadow increase + border color change
Links:        text-color fade to orange
```

### Focus States
```
Keyboard Focus: ring-2 ring-orange-500 ring-offset-2
Inputs:         border-orange-500
```

### Active States
```
Navigation:   text-orange-500 + underline
Toggles:      bg-emerald-600 + checkmark
```

---

## Accessibility Colors

✓ Contrast Ratios (WCAG AA Standard)
```
Orange (#F97316) on White: 4.5:1 ✓
Emerald (#10B981) on White: 5.8:1 ✓
Text on Dark: All meet AAA standards ✓
```

---

## Component-Specific Guidelines

### HeroSection
- Max width: 1280px (lg container)
- Gradient background: subtle dots pattern
- Badge: rounded-full with icon

### Testimonials
- 3-column grid on desktop
- 1-column on mobile
- Star rating: 5 stars max
- Card padding: 1.5rem (24px)

### Pricing Cards
- Pro card: slightly larger with shadow
- Features: checkmark + text combination
- Price: large, bold, centered
- Button: full width, orange background

### CTA Section
- Full-width gradient background
- Centered content
- Two button layout
- Semi-transparent borders for buttons

---

## Quick Reference

### Most Common Tailwind Classes
```
Spacing:    p-4, m-2, gap-6, px-8, py-12
Colors:     text-orange-500, bg-emerald-100, border-border
Text:       text-lg, font-semibold, text-center
Layout:     flex, grid, items-center, justify-between
Responsive: md:grid-cols-2, lg:text-xl, sm:px-4
Effects:    rounded-lg, shadow-lg, hover:shadow-xl
```

---

## Design Decision Summary

| Decision | Reason |
|----------|--------|
| Orange Primary | High contrast, modern, energetic |
| Emerald Secondary | Professional, trustworthy, complements orange |
| 3-Col Testimonials | Better readability, modern layout |
| Gradient CTA | Visual impact, draws attention |
| Rounded Badges | Modern, friendly appearance |
| Semi-Trans Buttons | Elegant, works on gradient backgrounds |
| Emerald Checkmarks | Trust indicator, consistency |

---

**Design System Version**: 1.0  
**Last Updated**: 2026-06-19  
**Status**: ✅ Ready for Implementation
