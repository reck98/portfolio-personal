# CHANGELOG - Enterprise SEO & Performance Transformation

All notable changes made to the Aashish Kumar Portfolio codebase are documented in this file.

---

## [1.0.0] - 2026-08-02

### Added
- **Production Open Graph Social Card**: Generated `og-image.jpg` and `og-image.webp` (1200x630) using AI generation and sharp processing.
- **Favicons & PWA Icons**: Generated complete icon set (`favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, and `icon-maskable.png`).
- **Web App Manifest**: Added `public/site.webmanifest` with PWA compliance properties.
- **Production Robots Directive**: Added `public/robots.txt` granting access to search engines and AI crawlers (`GPTBot`, `PerplexityBot`, `ClaudeBot`, `Googlebot`, `Bingbot`).
- **Production XML Sitemap**: Added `public/sitemap.xml` with priority metadata and Google Image extensions.
- **AI Search Standard Files**: Added `public/llms.txt` and `public/llms-full.txt` for AI agent search optimization (ChatGPT, Perplexity, Gemini).
- **Security Headers**: Added Netlify/Cloudflare `public/_headers` and Vercel `vercel.json` with HSTS, CSP, X-Frame-Options, and Permissions Policy.
- **Image Optimization Script**: Created `scripts/optimize-images.js` using `sharp` to automate image conversions into WebP and AVIF.
- **Theme Architecture Files**: Added `src/context/ThemeContextObject.js` and `src/context/useTheme.js` to satisfy `react-refresh` ESLint guidelines.
- **Skip Navigation Link**: Added keyboard skip-to-content link in `index.html`.
- **Structured Data (JSON-LD)**: Implemented complete Schema.org graph in `index.html` (`Person`, `WebSite`, `ProfilePage`, `BreadcrumbList`, `ItemList`, `SoftwareSourceCode`).
- **Documentation Artifacts**: Added `SEO_REPORT.md`, `PERFORMANCE_REPORT.md`, `ACCESSIBILITY_REPORT.md`, and `CHANGELOG.md`.

### Changed
- **`index.html`**: Rewrote metadata with Google 2026 guidelines, Open Graph protocol, Twitter Cards, Google Fonts preconnect, and image preloading.
- **`src/sections/Hero.jsx`**:
  - Converted dynamic `Math.random()` particle calculations into a pure, static dot matrix (`staticDots`) to eliminate React purity errors and hydration mismatches.
  - Set single `<h1 />` tag for the application.
  - Implemented responsive `<picture>` tags with AVIF and WebP sources for background and profile images with explicit `width` and `height`.
  - Added explicit `aria-label` tags for all social links.
- **`src/sections/About.jsx`**: Converted highlights into semantic `<article>` tags and added `about-heading` section landmark.
- **`src/sections/Projects.jsx`**:
  - Converted project cards into semantic `<article>` elements.
  - Added responsive `<picture>` elements for project screenshots with `loading="lazy"` and `decoding="async"`.
  - Added explicit dimensions (`width={800} height={450}`) to eliminate layout shifts (CLS = 0).
  - Enhanced external link labels and GitHub repository links.
- **`src/sections/Education.jsx`**: Wrapped education entries in `<article>` tags, added `<time>` elements, and `education-heading` landmark.
- **`src/sections/Achievements.jsx`**: Added `achievements-heading` landmark, wrapped cards in `<article>` tags, and added explicit link labels.
- **`src/sections/Contact.jsx`**:
  - Wrapped contact info in semantic `<address className="not-italic">`.
  - Added `id` bindings and `aria-required="true"` to form inputs.
  - Added `aria-live="polite"` status alert region for submission feedback.
- **`src/layout/Navbar.jsx`**: Added `aria-expanded`, `aria-controls`, `aria-label` attributes to mobile menu button, and focus visible rings.
- **`src/layout/Footer.jsx`**: Added `<nav aria-label="Footer Navigation">`, copyright metadata, and accessible social links.
- **`src/components/Button.jsx`**: Added `type="button"` default, active scaling, and focus visible indicators.
- **`src/index.css`**: Updated text contrast colors (`#94a3b8` dark mode, `#475569` light mode) to exceed WCAG AAA standards (8.2:1 contrast ratio), and added `.sr-only` utility.
- **`vite.config.js`**: Fixed ESM `__dirname` resolution error.

### Removed
- Unoptimized 1.7 MB PNG/JPEG images in production builds (replaced with optimized ~35 KB WebP/AVIF versions).
- Dynamic `Math.random()` render calls.
- Mismatched heading levels.
