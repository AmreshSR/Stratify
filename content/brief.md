# Stratify: Design Brief

Design rules source: tasteskill v2 (experimental).

## Brief

- **Page kind:** Marketing (single-page consulting firm site, EN + NL)
- **Product:** Stratify N.V.: a Suriname consulting firm for strategy, governance, risk & compliance, information security, privacy, AI governance, and organizational development. Tagline: "From Complexity to Clarity."
- **Audience:** Executives, board members, and compliance or IT leads at public and private sector organizations in Suriname and the region. Busy, risk-averse, credential-checking, bilingual (Dutch and English).
- **Vibe words:** editorial, restrained, assured, grounded
- **References:**
  - Brand assets in `brand/` (logo and banner): the primary anchor for color and mark
  - Stripe Press (press.stripe.com): typographic restraint
  - Pentagram (pentagram.com): editorial grid and confident whitespace
  - Monocle (monocle.com): warm, grown-up tone
- **Avoid:**
  - SaaS gradients, glassmorphism, neon "AI brain" or circuit-board imagery
  - Stock padlock, shield, and handshake photography
  - Dotted world maps and icon rows lifted from the banner (the banner is a social/header asset; the site should not repeat it)
  - Three identical icon cards in a row
  - Centered text over a full-bleed stock photo
  - "Unlock / Empower / Elevate" verbs
  - Invented statistics, testimonials, or client logos
  - Em-dashes and en-dashes anywhere

## Brand assets

| File | What it is | Notes |
|---|---|---|
| `brand/logo.jpg` | Primary logo: "S" mark with rising bars, STRATIFY NV wordmark, tagline | 400×400 JPG on white. Request an SVG or transparent PNG for web and print. |
| `brand/banner.jpg` | Wide banner: logo left, green panel with five pillars | 1817×307. Fits LinkedIn or email headers. |

### Colors (sampled from the logo and banner)

| Name | Hex | Use |
|---|---|---|
| Forest | `#004428` | Primary brand green, dark surfaces |
| Emerald | `#066b49` | Accent, links, rules |
| Leaf | `#23a464` | Highlight only (small doses) |
| Ink | `#0b1320` | Wordmark and body text |
| White | `#ffffff` | Page background |

### Brand pillars (from the banner)

Strategy · Governance · Quality · Risk · People Transformation

## Step 1: Design read

**Read:** A light, editorial page on white with deep forest green as its one accent, earning trust through typography, whitespace, and plain statements, closer to a respected advisor's annual report than a tech startup.

| Dial | Value | Reasoning |
|---|---|---|
| DESIGN_VARIANCE | 5 | Asymmetric editorial splits give character; structure stays predictable for a cautious governance audience. |
| MOTION_INTENSITY | 3 | Subtle reveal-on-scroll and hover states only; motion must never compete with credibility. |
| VISUAL_DENSITY | 4 | Rich content (nine services, six standards, founder story) carried in disciplined lists, not crowded grids. |

**Theme lock:** Light. White background, ink text, forest green accent (leaf green only as a small highlight).

**Imagery:** Generated architectural, material, and natural-light images, with a Picsum-seed fallback. No generated likeness of Sheetal: the founder section uses a marked placeholder until a real portrait is supplied.
