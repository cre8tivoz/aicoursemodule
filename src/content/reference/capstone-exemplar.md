---
title: "Capstone exemplar — filled evidence pack"
description: "Fictional Riverside Community Garden capstone — see what specific proof looks like before you submit."
---

# Capstone exemplar — filled evidence pack

This is a **fictional learner submission** for calibration and study. Your topic, host, and scores will differ — copy the **level of specificity**, not the garden theme.

**Templates:** [Capstone guide](/assessments/capstone/) · [Evidence pack PDF](/downloads/capstone-evidence-pack.pdf) · [Assessor rubric](/reference/capstone-assessor-rubric)

## The artefact (what they shipped)

**Topic:** neighbourhood community garden — volunteer info and seasonal tips.  
**Pages:** two HTML files, one shared stylesheet, two original photos.

```text
riverside-garden/
  index.html
  seasons.html
  styles.css
  images/
    plot-spring.jpg
    volunteers.jpg
```

**Live URL (fictional):** `https://riverside-garden-demo.netlify.app`

| Page | Purpose |
| ---- | ------- |
| `index.html` | Welcome, why the garden exists, link to seasons |
| `seasons.html` | Spring vs autumn tasks — short bullets, one photo each |

**Not in scope (from brief):** shop, login, newsletter, blog.

## Part A — Artefact (filled)

| Field | Example entry |
| ----- | ------------- |
| **Live URL** | `https://riverside-garden-demo.netlify.app` |
| **Lighthouse Accessibility score** | 92% |
| **Date tested** | 2026-06-28 |
| **Chrome version** | 131.0.6778.85 |
| **Lighthouse mode** | Mobile |

Screenshot attached in provider LMS: `lighthouse-mobile-2026-06-28.png`.

## Part B — Row evidence (filled)

| Marking row | Where assessors can verify |
| ----------- | ------------------------ |
| **Structure / UX** | `/` and `/seasons.html` — `<nav>` links Home ↔ Seasons; one `<h1>` per page; contact email in footer on both pages |
| **Accessibility** | Lighthouse 92% mobile on URL above; Tab order: skip link → logo → nav → main → footer; focus ring on all nav links |
| **Visual design** | `styles.css` lines 12–18 — body `#1a2a4a` on `#f5f5f0`; accent `#2d6a4f` on `.btn` and nav hover |
| **Deployment** | Netlify drag-and-drop from `riverside-garden/` folder; URL loads without login; tested 2026-06-28 in Chrome incognito |
| **Content** | Original copy about Riverside plot; photos `plot-spring.jpg` and `volunteers.jpg` mine; Royal Horticultural Society linked in footer with descriptive text |

### Strong vs vague Part B lines

| Row | **S — specific** | **NS — too vague** |
| --- | ---------------- | ------------------ |
| Structure / UX | “`/seasons.html` — `<h1>` Seasons; nav back to `/` works” | “Looks good” / “Nice layout” |
| Accessibility | “92% Lighthouse mobile; Tab reaches footer email link” | “I think it’s accessible” |
| Visual design | “`#1a2a4a` text on `#f5f5f0`; green accent on buttons only” | “Blue theme” |
| Deployment | “Netlify — incognito load OK 2026-06-28” | “It’s online” |
| Content | “Two original photos; RHS credit in footer” | “Garden site” |

## Part C — Brief (attached)

**Goal:** Help neighbours understand what our community garden offers and when to visit or volunteer — no sales.

**Audience:** Local adults and families; many on phones after work; low patience for long essays.

**Pages:**

- **Home (`index.html`):** welcome, one photo, link to seasons, footer contact.
- **Seasons (`seasons.html`):** spring vs autumn bullet lists, one photo each.

**Tone:** Warm, practical, not preachy. Australian English. Not corporate brochure.

**Must-haves:** Garden name in header; working nav; my email in footer; two original photos; mobile-readable layout.

**Non-goals:** Shop, login, newsletter signup, events calendar in v1.

**Accessibility intent:** Semantic landmarks; one `h1` per page; keyboard nav; Lighthouse ≥ 90% on deployed URL before submit.

## Part D — Work claims (filled)

| Field | Example entry |
| ----- | ----------- |
| **Hosting** | Netlify |
| **Why this host** | Free tier, HTTPS by default, drag-and-drop fits static HTML/CSS |
| **AI used?** | Yes |
| **Verified by hand** | Cursor drafted initial CSS; I fixed heading order, alt text on both photos, footer link contrast, and re-tested all nav on live URL |

## What assessors would check (five minutes)

1. Open URL — two pages, nav works both ways.
2. Tab through — focus visible, no keyboard trap.
3. Compare Part B lines to live site — paths and colours match.
4. Brief says max two pages + no shop — site matches.
5. Lighthouse re-run if screenshot looks old — expect ≥ 90%.

**Overall:** **S** — all rows met at Diploma standard. Not designer-perfect; **competent and verifiable**.

## What this exemplar is not

- A required topic — pick your own hobby, business teaser, or cause.
- A Lighthouse 100% flex — 92% with real fixes documented is fine.
- A framework demo — plain HTML/CSS only.
- An essay — zero long reflection; tables and proof lines only.

## Your turn

1. Draft your pack using the [PDF](/downloads/capstone-evidence-pack.pdf) or [online form](/downloads/capstone-evidence-pack).
2. Work the [Module 07 build workbook](/lessons/module-07/01) stages in order.
3. Before submit, ask: **Could an assessor verify every Part B line in under five minutes?** If not, add a path, element, or filename.
