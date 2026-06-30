---
title: "Capstone — static HTML mini-site"
module: "07"
type: capstone
aqfOutcomeRefs:
  - "CO-03"
  - "CO-04"
  - "CO-05"
---

# Capstone — work-integrated assessment

You built skills across seven modules — the capstone is where you **show them** on the web. This is **not** an essay task. You submit **proof of work**: a deployed static site and a short **evidence pack**.

**Download:** [Evidence pack (PDF)](/downloads/capstone-evidence-pack.pdf) · [Fill online](/downloads/capstone-evidence-pack)  
**Build guide:** [Module 07 workbook](/lessons/module-07/01)  
**Pre-flight:** [Module 06, Lesson 04](/lessons/module-06/04)  
**For assessors:** [Assessor rubric](/reference/capstone-assessor-rubric)

Completing other modules is **not** blocked by this submission. **Not Satisfactory (NS)** means **not yet** — your provider will guide you on what to fix and resubmit.

## The work you must ship

Build and deploy a **static HTML mini-site**:

- **1–3 linked HTML pages** on a topic you choose (hobby, side business, cause, portfolio teaser).
- **Hand-authored HTML and CSS** — no framework required.
- **Semantic structure**, keyboard-usable navigation, readable contrast.
- **Live public URL** (Netlify, Vercel, similar static host, or your own server with HTTPS preferred).
- **Lighthouse Accessibility ≥ 90%** on the **deployed** URL (not `file://` only).

Your Module 06 **brief** is part of the submission — it shows creative direction (CO-04). The **live site** is the main artefact.

## What you submit (evidence pack)

**[Download the PDF template](/downloads/capstone-evidence-pack.pdf)** or use the [online form](/downloads/capstone-evidence-pack). Copy into your provider’s submission format. **Fill the tables.** No long essays.

### Part A — Artefact (required)

| Field | Your entry |
| ----- | ---------- |
| **Live URL** | |
| **Lighthouse Accessibility score** | e.g. 94% |
| **Date tested** | |
| **Chrome version** (or browser used) | |
| **Lighthouse mode** | Mobile / Desktop |

Attach a **screenshot** of the Lighthouse result if your provider requires it.

### Part B — Row evidence (required)

One line per row — point assessors to **proof on the live site** (page path, element, or screenshot filename).

| Marking row | Where assessors can verify (be specific) |
| ----------- | ---------------------------------------- |
| **Structure / UX** | e.g. “Home `/` — nav links to About and Contact; one `h1` per page” |
| **Accessibility** | e.g. “Lighthouse 94% on URL above; Tab order: logo → nav → main → footer” |
| **Visual design** | e.g. “`styles.css` — navy `#1a2a4a` text on `#f5f5f0` background; accent on buttons” |
| **Deployment** | e.g. “Netlify — URL loads without login; tested 2026-06-30” |
| **Content** | e.g. “Original copy about [topic]; photos mine / credited in footer” |

### Part C — Brief (required)

Attach or paste your **Module 06 one-page brief** (Goal, Audience, Pages, Tone, Must-haves, Non-goals, Accessibility intent).

### Part D — Work claims (required — short fields only)

| Field | Your entry |
| ----- | ---------- |
| **Hosting** | e.g. Netlify / Vercel / own server |
| **Why this host** (one line) | e.g. “Free tier, HTTPS, fits static files” |
| **AI used?** | Yes / No |
| **If yes — what you verified by hand** (one line) | e.g. “Cursor drafted CSS; I fixed heading order and alt text” |

If your provider asks for a cover note, **≤100 words** pointing to the URL and evidence pack — not a reflective essay.

## Submission checklist

- [ ] Part A — live URL loads; Lighthouse ≥ 90% recorded
- [ ] Part B — all five rows have specific proof lines
- [ ] Part C — brief attached
- [ ] Part D — hosting + AI fields complete
- [ ] Optional: source link (repo or zip)

## Marking guide (S / NS)

Assessors judge the **artefact** and **evidence pack**, not prose quality.

| Area | Satisfactory (S) | Not Satisfactory (NS) |
| ---- | ---------------- | --------------------- |
| **Structure / UX** | Clear purpose, navigation, hierarchy, readable layout on mobile and desktop. | Confusing structure, broken links, or unreadable layout. |
| **Accessibility** | Semantic HTML, keyboard/focus, contrast; Lighthouse **≥ 90%** on deployed URL; no major manual barriers. | Below threshold or major barriers (no focus, wrong heading order). |
| **Visual design** | Coherent palette; intentional accent vs neutral. | Random colours or unreadable contrast. |
| **Deployment** | URL works; site loads as intended. | URL missing or unreachable. |
| **Content** | Original, appropriate, on-topic for 1–3 pages. | Missing, copied without attribution, or off-brief. |

**Overall:** **S** when you demonstrate competence on **all** rows. **NS** means one or more rows are **not yet** at standard — fix the specific gap and resubmit per your provider’s process.

## What good looks like (filled evidence pack — example)

**Part A**

| Field | Example entry |
| ----- | ------------- |
| Live URL | `https://riverside-garden-demo.netlify.app` |
| Lighthouse Accessibility score | 92% |
| Date tested | 2026-06-28 |
| Chrome version | 131.0.6778.85 |
| Lighthouse mode | Mobile |

**Part B (extract)**

| Row | Example proof line |
| --- | ------------------ |
| Structure / UX | `/` and `/about.html` — nav in `<nav>`, one `h1` each, contact in footer |
| Accessibility | 92% Lighthouse mobile; Tab reaches all nav links with visible focus |
| Deployment | Netlify drag-and-drop; redeployed after contrast fix on 2026-06-27 |

**Part D**

| Field | Example |
| ----- | ------- |
| Hosting | Netlify |
| Why this host | Free tier, HTTPS, no backend needed |
| AI used? | Yes |
| Verified by hand | Structure, alt text, contrast, all links on live URL |

Your site topic and scores will differ — match the **specificity**, not the topic.

## Mapping

Summative evidence for **CO-03** (evaluate structure/accessibility), **CO-04** (brief + creative direction), and **CO-05** (hosting choice). See [course outline](/curriculum/course-outline/).
