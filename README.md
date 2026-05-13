# CraftCabin Co. — Website

A production-ready Next.js 14 website for a custom cabinetry, woodwork, and furniture assembly business based in Burlington, Ontario.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules** (scoped, no Tailwind dependency)
- **Google Fonts** via `next/font` (Playfair Display + Lato)
- Zero third-party UI libraries — fully hand-crafted

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deployment

### Vercel (recommended — free tier available)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site will be live in ~2 minutes.

### Netlify

```bash
npm run build
# Upload the `.next` folder to Netlify, or connect your GitHub repo
```

### Self-hosted / VPS

```bash
npm run build
npm start
```

---

## Customisation Checklist

### 🔴 Required before going live

| What | Where |
|------|-------|
| Your real phone number | `components/Contact.tsx` · `components/Footer.tsx` |
| Your real email address | `components/Contact.tsx` · `components/Footer.tsx` |
| Your business name (if different) | `app/layout.tsx` (metadata) · `components/Navbar.tsx` · `components/Footer.tsx` |
| Your service area | `components/Hero.tsx` · `components/About.tsx` · `components/Footer.tsx` |

### 📸 Add your photos

**Owner photo** — `components/About.tsx`  
Replace the `.photoPlaceholder` div with:
```tsx
import Image from "next/image";
<Image src="/owner.jpg" alt="[Your name], CraftCabin Co." fill style={{ objectFit: "cover" }} />
```
Place `owner.jpg` in `/public/`.

**Project photos** — `components/Work.tsx`  
Replace `.imgPlaceholder` divs with real `<Image />` tags.
Recommended size: 1200×800px, WebP format.

### 📬 Connect the contact form

The form in `components/Contact.tsx` logs to console by default.  
Choose one of:

**Option A — Resend (easiest)**
```bash
npm install resend
```
Create `app/api/contact/route.ts` and POST to Resend's API.

**Option B — Formspree (no backend needed)**
Replace the `handleSubmit` function with a `fetch` to your Formspree endpoint.

**Option C — Nodemailer**
Set up an API route with Nodemailer and your SMTP credentials.

### 🎨 Update content

- **Services** descriptions → `components/Services.tsx`
- **Portfolio projects** → `components/Work.tsx`
- **Reviews** → `components/Reviews.tsx` (replace with real Google/HomeStars reviews)
- **About section** text → `components/About.tsx`
- **Business hours** → `components/Footer.tsx`

### 🌐 SEO & metadata

Edit `app/layout.tsx` — update:
- `title`
- `description`
- `keywords`
- `openGraph` fields

Add a `favicon.ico` to `/public/`.

---

## Project Structure

```
craftcabin/
├── app/
│   ├── globals.css       ← Design tokens, animations, base styles
│   ├── layout.tsx        ← Root layout, fonts, metadata
│   └── page.tsx          ← Home page (assembles all sections)
├── components/
│   ├── Navbar.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── Services.tsx / .module.css
│   ├── Work.tsx / .module.css
│   ├── About.tsx / .module.css
│   ├── Reviews.tsx / .module.css
│   ├── Contact.tsx / .module.css
│   └── Footer.tsx / .module.css
├── public/               ← Add photos here (owner.jpg, project photos, favicon)
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Adding More Pages (optional)

To add a dedicated page (e.g. `/services`):
```
app/
  services/
    page.tsx
```

Next.js App Router handles routing automatically.

---

## License

Built for CraftCabin Co. — all rights reserved.
