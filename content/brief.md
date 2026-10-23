# Stratify: Design Brief

Design rules source: tasteskill v2 (`design-taste-frontend`, installed in `.agents/skills/`).

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

**Read:** A light, calm page on white where the name STRATIFY is the architecture: split into two halves pinned to opposite corners, with the firm's layers of work (strategy, governance, risk, people) passing between them, and forest green used only on the one action.

**Direction dealt** (tasteskill v2 `draw.mjs`, sector `agency`, `--keep palette`, seed 1682847198): *The name as a monument*, chosen from three dealt options (name-as-monument, loud-flat-poster, dense-tiles). Loud-flat-poster fights a risk-averse governance audience; dense-tiles reads as busy. The monument carries the name's own meaning (strata, layers).

**Idea:** On this page, the name Stratify (strata: layers) becomes the frame the page passes through, its two halves pinned to opposite corners while each layer of the work scrolls between them.

**Live thing:** "Where do you stand?" A visitor picks their situation (handling personal data, adopting AI, preparing for certification, recovering from disruption) and sees the matching service and standard.

| Dial | Value | Reasoning |
|---|---|---|
| DESIGN_VARIANCE | 6 | The split-name hero and stepped sections are unusual; content below stays in a calm, predictable two-column grid. |
| MOTION_INTENSITY | 4 | One signature move (the pinned name) plus staggered section entrances; nothing that delays reading. |
| VISUAL_DENSITY | 4 | Full content (nine services, six standards, founder) in quiet lists and tables, never crowded grids. |

Note: tasteskill v2 has no dials or numbered Pre-Flight section. The dials are kept for this brief; its gate is `lint.mjs` + `inspect.mjs` (0 FAIL at 1440, 768, 390) + the house rules + the `critique.md` §4 write-up.

**Theme lock:** Light. White ground, ink `#0b1320` text, forest `#004428` on the single action. Contact and footer use the inverse (forest field, white text), as the direction requires.

**Type:** Schibsted Grotesk only (800 display, 400/600 text).

**Imagery:** Generated architecture and material images first, then the dealt Picsum "Architecture" set. No generated likeness of Sheetal; the founder section uses a marked placeholder until a real portrait is supplied.

**Sections (8):** Hero (name split to corners) · Intro (right-half paragraph, lone photo) · Approach (lines that step across) · Services (statement, table pushed right) · Standards (names as one sentence) · Founder (side facts, wide paragraph) · Contact (email as display type) · Footer (name first, places under it)
