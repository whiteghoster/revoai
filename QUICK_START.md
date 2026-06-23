# Quick Start Guide

## What You Have
A fully functional landing page for Diploy with modern UI design matching your reference images:
- Hero section with animated text
- Testimonials grid (3 columns)
- Pricing section with tiers
- Contact form
- Call-to-action sections
- All with smooth animations and dark mode support

## Installation (< 2 minutes)

### Step 1: Extract the Archive
```bash
tar -xzf diploy-landing-updated.tar.gz
cd recreate-codebase-with-ui
```

### Step 2: Install Dependencies
```bash
pnpm install
# If you don't have pnpm: npm install -g pnpm
# Then: pnpm install
```

### Step 3: Run Development Server
```bash
pnpm dev
```

Visit `http://localhost:3000` in your browser.

## Building for Production

```bash
# Build
pnpm build

# Test production build
pnpm start

# Deploy to Vercel
npm install -g vercel
vercel deploy
```

## Key Features

✓ **Responsive Design** - Works on all devices (mobile, tablet, desktop)
✓ **Dark Mode** - Full dark mode support with system preference detection
✓ **Animations** - Smooth Framer Motion animations throughout
✓ **Optimized** - Fast load times with Next.js optimization
✓ **SEO Ready** - Metadata, structured data, and semantic HTML
✓ **Accessible** - WCAG compliant with proper ARIA labels
✓ **Type Safe** - Full TypeScript support
✓ **Customizable** - Easy to modify colors, text, and content

## File Structure

```
.
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles & CSS variables
├── src/components/
│   ├── Landing/           # Landing page sections
│   │   ├── HeroSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── CTASection.tsx
│   │   └── ContactSection.tsx
│   ├── BrandingProvider.tsx
│   ├── I18nProvider.tsx
│   └── ui/                # Shadcn UI components
└── public/                # Static files
```

## Customization

### Change Colors
Edit `app/globals.css`:
```css
@theme inline {
  --color-primary: #your-color;
  --color-accent: #your-color;
}
```

### Change Content
Edit component files in `src/components/Landing/`:
- Update text in TSX files
- Modify images in `public/`
- Change links and URLs

### Add New Sections
1. Create new component in `src/components/Landing/`
2. Import in `src/app/page.tsx`
3. Add to the page layout

## Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://your-api.com
NEXT_PUBLIC_APP_NAME=Diploy
```

## Deployment Options

### Vercel (Recommended)
```bash
vercel deploy
```

### Netlify
```bash
netlify deploy --prod --dir=.next
```

### Docker
```bash
docker build -t diploy-landing .
docker run -p 3000:3000 diploy-landing
```

### Traditional Hosting
```bash
pnpm build
# Upload .next folder to your server
# Run `pnpm start` on server
```

## Troubleshooting

**Q: Port 3000 already in use**
```bash
pnpm dev -- -p 3001
```

**Q: Build errors**
```bash
rm -rf .next node_modules
pnpm install
pnpm build
```

**Q: Changes not reflecting**
```bash
# Clear Next.js cache
rm -rf .next
pnpm dev
```

**Q: Module not found**
```bash
# Reinstall dependencies
pnpm install --force
```

## Performance Tips

- Images are optimized with Next.js Image component
- CSS is minified automatically
- JavaScript is code-split automatically
- Use `pnpm build` to see bundle analysis

## Support

Refer to documentation for:
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com
- shadcn/ui: https://ui.shadcn.com
- Framer Motion: https://www.framer.com/motion

## What's New in This Version

### UI Updates
- Orange accent color (#ff6b35)
- Emerald green badges and accents (#10b981)
- Gradient CTA section (emerald → orange)
- 3-column testimonial grid
- Updated button styles with semi-transparent backdrop

### Code Updates
- All animations preserved with Framer Motion
- Dark mode support throughout
- Responsive design maintained
- Performance optimized
- TypeScript fully typed

---

**Ready to go!** Your landing page is production-ready and fully customizable.

For detailed information, see:
- `SETUP_GUIDE.md` - Complete setup instructions
- `UI_CHANGES.md` - Detailed design changes
