---
title: "Capstone assessor rubric"
description: "Competency-based marking guide for the work-integrated capstone — verify evidence, support resubmission."
---

# Capstone assessor rubric

This rubric supports **work-integrated** marking: learners submit a **live site** plus an [evidence pack](/downloads/capstone-evidence-pack). Your job is to **verify competence**, not to find reasons to fail.

**Learner template:** [Capstone assessment](/assessments/capstone/) · [PDF evidence pack](/downloads/capstone-evidence-pack.pdf) · [Filled exemplar](/reference/capstone-exemplar)

## Marking philosophy

- **S (Satisfactory)** means the learner can demonstrate the competency at Diploma level — not perfection.
- **NS (Not Satisfactory)** means a mandatory requirement is **not yet met**. It is a **not yet**, not a character judgement. Point to the **specific gap** and what evidence would close it.
- Judge the **artefact** and **evidence pack**, not essay prose.
- If Part B proof lines are vague, ask the learner to **clarify** before marking NS — they may simply need coaching on specificity.

## Five-minute verification path

1. Open **Part A** URL in a fresh browser session (incognito is fine).
2. Confirm **1–3 pages**, working nav, readable on mobile width.
3. **Tab** through interactive elements — focus visible?
4. Cross-check **Part B** lines against what you see (headings, nav, contrast at a glance).
5. Compare **Part C** brief to the site — scope match, not identical wording.
6. Record **S/NS per row**. Overall **S** only if **all** rows are **S**.

Lighthouse ≥ 90% on the **deployed** URL is required for Accessibility **S**. Re-run Lighthouse yourself if the screenshot looks stale or the site changed after the claim.

## Row-by-row guide

### Structure / UX

**Look for:** Clear purpose on first scroll; consistent nav across pages; one main topic per page (`h1`); layout readable on phone and desktop.

| S | NS |
| - | -- |
| Nav works on live site; hierarchy makes sense; purpose obvious | Broken links, confusing structure, or unreadable layout |

**Part B examples**

| Verdict | Example proof line |
| ------- | ------------------ |
| **S** | “`/` and `/about.html` — `<nav>` links work; one `h1` per page; contact in footer” |
| **NS** | “Looks good” / “Nice site” / empty field |

### Accessibility

**Look for:** Semantic landmarks; logical headings; keyboard path; contrast that does not obviously fail; Lighthouse ≥ 90% on deployed URL.

| S | NS |
| - | -- |
| Meets threshold + no major manual barriers | Below 90%, no focus, wrong heading order, or major barriers |

**Part B examples**

| Verdict | Example proof line |
| ------- | ------------------ |
| **S** | “Lighthouse 92% mobile on URL; Tab order: logo → nav → main → footer; focus ring on links” |
| **NS** | “I think it’s accessible” / Lighthouse 78% with no fix noted |

**Do not** penalise alone for: minor Lighthouse items the learner is actively fixing if your provider allows resubmission and the site is otherwise strong — follow provider policy.

### Visual design

**Look for:** Intentional palette (not random hex); readable body text; links distinguishable.

| S | NS |
| - | -- |
| Coherent colours; accent used with purpose | Random colours or unreadable contrast |

**Part B examples**

| Verdict | Example proof line |
| ------- | ------------------ |
| **S** | “`styles.css` — dark navy `#1a2a4a` on off-white `#f5f5f0`; accent `#2d6a4f` on buttons” |
| **NS** | “Blue theme” with grey-on-grey body text |

### Deployment

**Look for:** URL loads without login; matches what the learner described.

| S | NS |
| - | -- |
| Site reachable and stable at submitted URL | Missing URL, 404, or placeholder host |

### Content

**Look for:** Original, appropriate copy for 1–3 pages; images credited or clearly theirs; aligns with brief.

| S | NS |
| - | -- |
| On-topic, professional tone, not empty lorem | Copied without attribution, off-brief, or placeholder-only |

## Part C — Brief check

Quick alignment only:

- Page count in brief ≤ 3?
- Must-haves visible on live site (or reasonably attempted)?
- Non-goals respected (no half-built shop/login)?

Mismatch between brief and site is **coaching** first unless the gap is substantial.

## Part D — Work claims

| Field | Accept if |
| ----- | --------- |
| Hosting | Named plausibly (Netlify, Vercel, own server, etc.) |
| Why this host | One line tied to static files, cost, HTTPS, or policy |
| AI used? | Honest yes/no |
| Verified by hand | If yes to AI: names concrete checks (structure, alt, links, contrast) |

Do not require a specific tool brand.

## Overall judgement

| Result | When |
| ------ | ---- |
| **S** | All five rows **S** at acceptable Diploma standard |
| **NS** | Any mandatory row **NS** |

**Feedback for NS (supportive):** Name **one row**, **one observable gap**, **one action** — e.g. “Accessibility — Lighthouse 84% on live URL; fix contrast on footer links and re-run; resubmit Part A + B.”

## Outcomes mapping (for records)

| Outcome | Primary evidence |
| ------- | ---------------- |
| **CO-03** | Live site structure + a11y + Part B accessibility line |
| **CO-04** | Part C brief + site matches intent |
| **CO-05** | Part D hosting choice |

## What we are not testing

- Framework choice (plain HTML/CSS is the requirement)
- Designer-level visual polish
- Long reflective essays
- Specific AI vendor loyalty
- Perfect Lighthouse 100%

The capstone celebrates **shipping real work** learners can show colleagues.
