# Diploy Landing Page - Updated UI Setup Guide

## Project Overview
This is the updated Diploy landing page with modern UI design matching your reference images. All animations and functionality have been preserved.

## Installation & Running

### 1. Install Dependencies
```bash
cd recreate-codebase-with-ui
pnpm install
# or
npm install
# or
yarn install
```

### 2. Start Development Server
```bash
pnpm dev
# The site will be available at http://localhost:3000
```

### 3. Build for Production
```bash
pnpm build
pnpm start
```

## Updated UI Features

### Color Scheme
- **Primary Orange**: Used for CTAs, highlights, and accent elements
- **Emerald Green**: Used for badges, checkmarks, trust elements, and accents
- **Light/Dark Backgrounds**: Semantic color tokens for theme support

### Key Section Updates

#### 1. **Hero Section**
- Emerald green badge with checkmark ("✓ No-code AI Voice Engine")
- Orange text for the typing animation ("AI Voice Agents")
- Updated trust badges with emerald accents
- Maintained particle animation effects

#### 2. **Testimonials Section**
- Changed from infinite scroll carousel to a 3-column grid layout
- 5-star rating display above each testimonial
- Card-based design with hover effects
- Maintained smooth animations with Framer Motion
- Orange avatar fallbacks

#### 3. **CTA Section**
- Emerald-to-orange gradient background
- White semi-transparent buttons with backdrop blur
- "Get Started" and "Talk to Sales" buttons
- Preserved particle animation effects

#### 4. **Contact Section**
- Emerald green badge and trust element icons
- Updated form styling with semantic colors
- Maintained all form validation and functionality

#### 5. **Pricing Section**
- Updated headline to use theme colors
- Billing toggle with updated styling
- Orange currency selector buttons
- Emerald checkmarks for features
- Orange gradient borders on highlighted pricing card

## Project Structure
```
.
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main page
│   ├── globals.css         # Global styles
│   └── [routes]/           # Other routes
├── src/
│   ├── components/
│   │   ├── Landing/        # Landing page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   └── ...
│   │   ├── BrandingProvider.tsx
│   │   ├── I18nProvider.tsx
│   │   ├── QueryProvider.tsx
│   │   └── ui/             # Shadcn UI components
│   ├── app/                # Next.js app structure
│   └── lib/
├── public/                 # Static assets
├── package.json
└── tsconfig.json
```

## Technologies Used

- **Framework**: Next.js 16 (App Router)
- **UI Framework**: shadcn/ui
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **State Management**: React Query (SWR)
- **Internationalization**: react-i18next
- **HTTP Client**: Axios

## Environment Variables

Create a `.env.local` file with:
```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_APP_NAME=Diploy
# Add other environment variables as needed
```

## Customization

### Colors
Edit the CSS variables in `app/globals.css`:
- Primary: `--primary` / `--primary-foreground`
- Secondary: `--secondary` / `--secondary-foreground`
- Accent: `--accent` / `--accent-foreground`
- Backgrounds: `--background`, `--card`, `--muted`

### Branding
Update branding in the BrandingProvider context or create a branding config file.

### Translations
Translations are managed through i18next. Update translation files in the `locales` directory.

## Features Preserved

✓ Smooth animations with Framer Motion
✓ Particle effects in hero and CTA sections
✓ Responsive design (mobile-first)
✓ Dark/Light theme support
✓ Testimonial carousels (converted to grid)
✓ Contact form with validation
✓ Pricing tier comparison
✓ SEO optimized metadata
✓ Accessibility (ARIA labels, semantic HTML)
✓ Performance optimized

## Deployment

### Deploy to Vercel
```bash
vercel deploy
```

### Deploy to Other Platforms
Build the project and deploy the `.next` folder:
```bash
pnpm build
# Deploy contents of .next folder
```

## Troubleshooting

### Port Already in Use
If port 3000 is in use:
```bash
pnpm dev -- -p 3001
# or specify a different port
```

### Build Errors
Clear cache and rebuild:
```bash
rm -rf .next node_modules
pnpm install
pnpm build
```

### Missing Dependencies
If you see module not found errors:
```bash
pnpm install
pnpm dev
```

## Support

For issues or questions, refer to the component files or check the official documentation:
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com
- Framer Motion: https://www.framer.com/motion

---

**Version**: 1.0.0
**Last Updated**: June 2024
