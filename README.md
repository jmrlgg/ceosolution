# Your CEO Solution — Astro site

An Astro rebuild of [yourceosolution.com](https://www.yourceosolution.com/), which was on GoHighLevel. It keeps the same copy, imagery, colors (Lato font; deep green, teal, sage and cream) and booking calendars.

## Commands

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies (Node 22.12+)            |
| `npm run dev`     | Dev server at http://localhost:4321           |
| `npm run build`   | Production build into `dist/`                 |
| `npm run preview` | Serve the production build locally            |

## Structure

```
src/
  data/site.ts          ← contact details, nav, testimonials, FAQ, calendar IDs (edit here first)
  styles/global.css     ← design tokens (colors, font, spacing) + shared utilities
  layouts/              ← Layout (top bar, header, footer) and LegalLayout
  components/           ← Header, Footer, Button, HeroSplit, TestimonialCarousel,
                           BookingCalendar, VideoPlayer, RealLifeCard, Faq, Icon
  content/legal/*.md    ← Privacy, Terms, Cookie policy text
  pages/                ← / , /about, /work-with-us, /contact, legal pages
  assets/images/        ← all site images (optimized to WebP at build time)
public/
  videos/               ← welcome + coaching testimonial videos (720p)
  docs/case-report.pdf  ← case report linked from Work With Us
```

## Notes

- **Old URLs redirect** to the new ones (`/about-516730` → `/about`, `/services-new` → `/work-with-us`, `/book-a-consultation` → `/contact`, `/home-179197` → `/`). The redirects are set in `astro.config.mjs`.
- **Booking** uses the existing LeadConnector calendars, embedded by ID (`site.calendars` in `src/data/site.ts`). The home and about pages use the 30-min Discovery Call. The contact page uses the 60-min Coaching Call, the same as the live site.
- **Videos** are the 720p versions (10 MB and 25 MB). The originals were 128 MB and 358 MB.
- The live site's GHL chat widget is **not** included. To add it, paste its embed script into `src/layouts/Layout.astro`.
