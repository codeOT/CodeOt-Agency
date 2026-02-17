# CodeOT — Premium Web Development Agency

A luxury, premium agency website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 📁 Project Structure

```
codeot-agency/
├── app/
│   ├── globals.css          # Global styles + Tailwind directives
│   ├── layout.tsx           # Root layout + metadata (SEO)
│   └── page.tsx             # Home page entry point
├── components/
│   └── CodeOTLanding.tsx    # Main landing page component
├── next.config.mjs          # Next.js config
├── tailwind.config.ts       # Tailwind config with custom tokens
├── tsconfig.json            # TypeScript config
├── postcss.config.mjs       # PostCSS config
└── package.json
```

## 🎨 Customisation Guide

### 1. Update Agency Info
In `components/CodeOTLanding.tsx`, edit the data arrays at the top:

- **`SERVICES`** — Your service offerings
- **`PROJECTS`** — Portfolio items
- **`STATS`** — Key numbers (projects, retention, etc.)
- **`PROCESS`** — Your workflow steps

### 2. Update Contact Info
Search for `hello@codeot.studio` and replace with your email.

### 3. Update Metadata (SEO)
Edit `app/layout.tsx` — change title, description, and keywords.

### 4. Brand Colors
The gold color system is defined in `tailwind.config.ts` and as CSS variables in `app/globals.css`:
```css
--gold: #c9a84c;
--gold-light: #e8c97a;
--cream: #e8e0d0;
--deep: #0a0906;
```

### 5. Fonts
Using **Cormorant Garamond** (headings) + **Jost** (body) from Google Fonts, loaded via `@import` in the component's inline `<style>` block.

## 🌍 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Or via GitHub
1. Push to GitHub
2. Connect repo at [vercel.com](https://vercel.com)
3. Deploy automatically

## 🧩 Sections

| Section | Description |
|---|---|
| Navbar | Sticky, blur-on-scroll, mobile responsive |
| Hero | Animated headline, shimmer text, stats counter |
| Services | 4-service grid with hover effects |
| Work | Project list with hover colour transitions |
| Process | 4-step workflow breakdown |
| About | Philosophy quote + tech stack badges |
| Contact | Enquiry form with budget selector |
| Footer | Minimal brand footer |

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Cormorant Garamond + Jost)
- **Animations**: CSS transitions + IntersectionObserver
- **Deployment**: Vercel-ready
