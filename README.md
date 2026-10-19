# YANA — You Are Not Alone

## Project Overview
- **Name**: YANA (You Are Not Alone)
- **Goal**: A warm, bright, inviting church-ministry website that merges two earlier design concepts ("hearth" + "sunlit") into one cohesive site people want to return to.
- **Features**:
  - Home, About, Ministries, and Prayer Wall pages sharing one nav + one footer contact form
  - Single shared "Let's connect" form on every page with a reason-pill selector (question / volunteer / give / prayer / updates) that changes its own label, placeholder and fine print via JS
  - Prayer requests submitted through either the Prayer Wall page or the shared contact form (when reason = prayer and "share on wall" is checked) are stored in Cloudflare D1 and shown publicly
  - Scrolling "Names of God" marquee, "Sundays at YANA" schedule, text-over-image sections (Unapologetically-Faithful-style), and a Shannon-Dvorak-style personal About page with fun facts and family photos
  - Licensed, vetted photography throughout (sourced via `image_search`, screened with `understand_images` to exclude AI/cartoon-looking results)

## URLs
- **Local/dev preview**: served via PM2 + `wrangler pages dev` on port 3000 inside the sandbox (use `GetServiceUrl` for a temporary public link)
- **Production**: not yet deployed — see "Deployment" below

## Routes / API
| Method | Path | Description |
|---|---|---|
| GET | `/` | Home page (hero, names marquee, 3-step onboarding, prayer-wall preview, ministries preview, message/prayer panes) |
| GET | `/about` | About page (portrait, pull quote, family photos, fun facts) |
| GET | `/ministries` | Ministries page (4-card grid, women's/men's ministry splits, serve CTA) |
| GET | `/prayer-wall` | Prayer Wall page (submission form + full public wall) |
| POST | `/api/prayer-requests` | Body: `{ name?, message, is_public? }` → inserts into `prayer_requests` |
| POST | `/api/contact` | Body: `{ name?, email?, reason, message?, share_on_wall? }` → inserts into `contact_messages`; if `reason === 'prayer'` and `share_on_wall` is true, also inserts into `prayer_requests` |

## Data Architecture
- **Storage**: Cloudflare D1 (SQLite), binding name `DB`, database name `webapp-production`
- **Tables**:
  - `prayer_requests(id, name, message, is_public, created_at)`
  - `contact_messages(id, name, email, reason, message, created_at)`
- **Migrations**: `migrations/0001_initial.sql` (applied locally via `wrangler d1 migrations apply webapp-production --local`)
- **Seed data**: `seed.sql` (8 sample prayer requests for local demo)

## User Guide
- Browse Home / About / Ministries / Prayer Wall from the top nav (mobile: hamburger menu).
- Scroll to the bottom of any page (or click "Plan a visit" / any "share a prayer" link) to reach the shared contact form.
- Pick a reason pill (question, volunteer, give, prayer, updates) — the form adapts its label and fine print.
- If the reason is "prayer request," you can optionally check a box to also share it (anonymously if you like) on the public Prayer Wall.
- The Prayer Wall page itself has its own quick-add form plus the full list of shared requests.

## Deployment
- **Platform**: Cloudflare Pages (not yet deployed)
- **Status**: ❌ Not yet deployed — built and verified locally only
- **Tech Stack**: Hono + TypeScript (JSX) + Cloudflare D1 + vanilla CSS/JS, Vite build, Wrangler
- **Before deploying**: the real Cloudflare D1 `database_id` must replace the placeholder `"local-dev-placeholder"` in `wrangler.jsonc`, and the user must choose a deploy path (their own Cloudflare account vs. Genspark-hosted) before any deploy is attempted.
- **Last Updated**: 2026-10-19

## Known Follow-ups
- Mobile hamburger nav was added (`.navtoggle` button) — verify on-device once deployed.
- The About-page portrait currently reuses a generic "woman with coffee" stock photo as a placeholder; swap for a real staff/leader photo when available.
- Two originally-sourced stock image links had expired; they were replaced with freshly vetted `image_search` results (sunrise image for About page, youth-group and men's-ministry images for Ministries page).
