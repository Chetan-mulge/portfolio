# Chetan Mulge — Interactive Portfolio

A personalized portfolio built on Next.js, React, TypeScript, and GSAP. It keeps the reference project’s two-part experience: a polished portfolio page plus an interactive desktop-style canvas.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before publishing

1. Update `content/data/profile.json` with your real email, GitHub URL, LinkedIn URL, and portrait if desired.
2. Update `content/data/projects.json` with screenshots, repositories, demos, and only verified project details.
3. Update `content/data/experience.json` as your internship responsibilities and outcomes become confirmed.
4. Add your résumé PDF under `public/` and set `resumePdf` in `content/data/profile.json`.
5. Replace `https://example.com` in `lib/site.ts` with your actual deployed domain.
6. If you enable the `/edit` GitHub integration, configure it for your own repository in `lib/edit/config.ts` and your own environment variables. Do not reuse another person's GitHub App credentials.

The GitHub and LinkedIn links and email in the profile are intentionally placeholders until you replace them. The portfolio copy is based on the information currently available and should be reviewed before publishing.
