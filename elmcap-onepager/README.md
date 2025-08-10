# Elm Capital One‑Pager (Static)

This is a zero-build static site designed for Vercel. Just push and it deploys instantly.

## Files
- `index.html` — the single-page site
- `vercel.json` — optional headers/clean URLs
- `assets/logo.svg` — placeholder logo (replace with your real one)
- `assets/og-image.png` — Open Graph social image (replace if desired)
- `assets/favicon.ico` — favicon placeholder

## Customize
- Replace `/assets/logo.svg` with your logo (same filename) or update the `<img>` path in `index.html`.
- Update the email link in `index.html` if needed.
- Update OG tags in `<head>` for better social sharing.

## Deploy
1. Push this folder to your GitHub repo (e.g., `elmcapwebsite`).
2. Connect the repo in Vercel (or keep your current project).
3. Vercel will detect static output and deploy immediately (no build step).

## Domain (Google Domains/Workspace)
- In Vercel → **Project → Settings → Domains** add `elmcap.xyz`.
- Copy DNS records to your DNS host (Google Domains).
- Set `www` CNAME to `cname.vercel-dns.com` and apex per Vercel guidance.
