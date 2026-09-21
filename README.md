# Fintech Landing Page (Next.js)

A Next.js 14 (App Router) + Tailwind CSS rebuild of the ledger/passbook-themed
announcement page — problem, approach, and a placeholder team section.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/layout.tsx` — loads the three Google Fonts (Fraunces, IBM Plex Sans,
  IBM Plex Mono) via `next/font/google` and sets page metadata.
- `app/page.tsx` — the page content (hero, problem stats, solution flow,
  team placeholders, footer). Copy and stat sources live in the `problemStats`
  and `flowSteps` arrays near the top of the file — edit there rather than
  hunting through JSX.
- `app/WaitlistForm.tsx` — the email input, as a client component. It
  currently only shows a local confirmation message — **no email is actually
  sent or stored**. Wire the `handleSubmit` function up to a real API route
  or an email service (Mailchimp, Resend, a Google Form endpoint, etc.)
  before relying on it to collect signups.
- `tailwind.config.ts` — the color tokens (ink, paper, brass, green, stamp,
  rule colors) and font family mappings.

## What's still a placeholder

- The app name in the top-left nav badge (`[APP NAME] — DRAFT`).
- The four team cards (dashed blanks for name/role, no photos).

## Deploying

This is a standard Next.js app — it deploys as-is to Vercel, Netlify, or any
Node hosting. `npm run build && npm run start` for a production build.
