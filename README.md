# 美嘉装修 — Meijia Plumbing

Website for Zeno Yuan's plumbing business in Barrhaven, Ottawa.

**Live site**: [your-vercel-url.vercel.app]

## Stack

- Next.js 15, TypeScript, Tailwind CSS v4
- Hosted on Vercel (auto-deploys on push to main)
- Contact form via Formspree
- Vercel Analytics

## Pages

| Page | Path |
|------|------|
| Home | `/` |
| Services | `/services` |
| About | `/about` |
| Contact | `/contact` |

## Key Features

- Bilingual English / 中文 toggle (saved in localStorage)
- Mobile responsive with hamburger nav
- Click-to-call phone number throughout
- WeChat ID copy button
- Contact form with 10-word minimum and address required

## Development

```bash
npm install
npm run dev
```

## Updating Content

All text (English + Chinese) is in `app/translations.ts` — edit there, push, done.

## Adding Photos

Drop photos in `public/images/` and reference as `/images/filename.jpg`.

## Deployment

Connected to GitHub. Push to `main` → Vercel auto-deploys.