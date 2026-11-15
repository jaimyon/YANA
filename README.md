# YANA — You Are Not Alone

## Project Overview
- **Name**: YANA (You Are Not Alone)
- **Goal**: A warm, bright, inviting church-ministry website that merges two earlier design concepts ("hearth" + "sunlit") into one cohesive site people want to return to.
- **Features**:
  - Home, About, Ministries, and Prayer Wall pages sharing one nav + one footer contact form
  - Single shared "Let's connect" form on every page with a reason-pill selector (question / volunteer / give / prayer / updates) that changes its own label, placeholder and fine print via JS
  - Prayer requests submitted through either the Prayer Garden page or the shared contact form (when reason = prayer and "share on wall" is checked) are stored in Cloudflare D1 and shown publicly
  - Scrolling "Names of God" marquee, "Sundays at YANA" schedule, text-over-image sections (Unapologetically-Faithful-style), and a Shannon-Dvorak-style personal About page with fun facts and family photos
  - Services page (Daily Email Message, Monthly Messages Booklet, Annual Ladies Retreat, Event Speaker) with a 4-up card grid linking down to matching detail sections on the same page
  - Resources page (A Right Relationship $15, Praying with God $5, Praise Be to God $5, plus an Other Suggestions list of general study tools) with the same 4-up card grid + detail-section pattern as Services
  - Dedicated Annual Ladies Retreat page (`/ladies-retreat`) with a photo gallery, guest testimonials, and its own sign-up form (stored in Cloudflare D1); the Services page's retreat "More Information" button links directly to it
  - "Sign Up For Newsletter" panel inside the shared footer contact form on every page — checkboxes for the weekly email newsletter and the monthly booklet, with a mailing address field that only appears (and becomes required) once the booklet checkbox is checked; signups are stored in Cloudflare D1
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
| GET | `/prayer-garden` | Prayer Garden page (submission form + full public wall) |
| GET | `/services` | Services page (Daily Email Message, Monthly Messages Booklet, Annual Ladies Retreat, Event Speaker) |
| GET | `/resources` | Resources page (A Right Relationship, Praying with God, Praise Be to God, Other Suggestions) |
| GET | `/ladies-retreat` | Dedicated Annual Ladies Retreat page (intro, picture gallery, testimonials, sign-up form) |
| POST | `/api/prayer-requests` | Body: `{ name?, message, is_public? }` → inserts into `prayer_requests` |
| POST | `/api/contact` | Body: `{ name?, email?, reason, message?, share_on_wall? }` → inserts into `contact_messages`; if `reason === 'prayer'` and `share_on_wall` is true, also inserts into `prayer_requests` |
| POST | `/api/newsletter` | Body: `{ name, email, wants_newsletter?, wants_booklet?, mailing_address? }` → inserts into `newsletter_signups`. Requires `name` and `email`; requires `mailing_address` when `wants_booklet` is true (enforced both client- and server-side) |
| POST | `/api/retreat-signup` | Body: `{ name, email, phone?, guests?, message? }` → inserts into `retreat_signups`. Requires `name` and `email` |

## Data Architecture
- **Storage**: Cloudflare D1 (SQLite), binding name `DB`, database name `webapp-production`
- **Tables**:
  - `prayer_requests(id, name, message, is_public, status, created_at)`
  - `contact_messages(id, name, email, reason, message, created_at)`
  - `newsletter_signups(id, name, email, wants_newsletter, wants_booklet, mailing_address, created_at)`
  - `retreat_signups(id, name, email, phone, guests, message, created_at)`
- **Migrations**: `migrations/0001_initial.sql`, `0002_add_status.sql`, `0003_add_newsletter_signups.sql`, `0004_add_retreat_signups.sql` (applied locally via `wrangler d1 migrations apply webapp-production --local`)
- **Seed data**: `seed.sql` (8 sample prayer requests for local demo)

## User Guide
- Browse Home / About / Prayer Garden / Services from the top nav (mobile: hamburger menu).
- Scroll to the bottom of any page, or click "Contact Us" in the header/footer, to reach the shared contact form.
- Pick a reason pill (question, volunteer, give, prayer, updates) — the form adapts its label and fine print.
- If the reason is "prayer request," you can optionally check a box to also share it (anonymously if you like) on the public Prayer Garden.
- Below the contact form, click "Sign Up For Newsletter" to open the newsletter panel: check the weekly email newsletter and/or the monthly booklet, enter your name and email, and — if you checked the booklet — your mailing address (the field appears and becomes required automatically).
- The Prayer Garden page itself has its own quick-add form plus the full list of shared requests.
- The Services page's four cards jump down to their own detail sections on the same page (Daily Email Message, Monthly Messages Booklet, Annual Ladies Retreat, Event Speaker).
- The Resources page's four cards do the same for A Right Relationship ($15), Praying with God ($5), Praise Be to God ($5), and Other Suggestions — a list of general study tools (concordance, study Bible, Bible dictionary, devotional journal). Ordering any book goes through the shared contact form.
- On the Services page, the Annual Ladies Retreat section's "More Information" button goes straight to `/ladies-retreat` — a dedicated page with a photo gallery, guest testimonials, and its own sign-up form for September 10–12, 2027 at Camp Allen.

## Deployment
- **Platform**: Cloudflare Pages (not yet deployed)
- **Status**: ❌ Not yet deployed — built and verified locally only
- **Tech Stack**: Hono + TypeScript (JSX) + Cloudflare D1 + vanilla CSS/JS, Vite build, Wrangler
- **Before deploying**: the real Cloudflare D1 `database_id` must replace the placeholder `"local-dev-placeholder"` in `wrangler.jsonc`, and the user must choose a deploy path (their own Cloudflare account vs. Genspark-hosted) before any deploy is attempted.
- **Last Updated**: 2026-11-15 (Resources page added; nav/page renamed from "Outside Resources" to "Resources")

## Known Follow-ups
- Mobile hamburger nav was added (`.navtoggle` button) — verify on-device once deployed.
- The About-page portrait currently reuses a generic "woman with coffee" stock photo as a placeholder; swap for a real staff/leader photo when available.
- Two originally-sourced stock image links had expired; they were replaced with freshly vetted `image_search` results (sunrise image for About page, youth-group and men's-ministry images for Ministries page).
