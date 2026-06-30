---
title: "Module 05 assessment"
module: "05"
type: checkin
aqfOutcomeRefs:
  - "CO-01"
  - "CO-03"
---

# Module 05 — Assessment

**Purpose:** Summative evidence for **CO-03** (evaluate markup/structure) and **CO-01** (analyse why literacy matters). **Judgement:** **S** / **NS** only.

**Time guide:** 40–50 minutes.

## Assessment tasks

### Task 1 — Why read code? (CO-01)

In **6–10 sentences**, explain why **reading** HTML and CSS still matters when AI writes the **first draft**. Reference **at least two** audiences or situations (e.g. maintainability, accessibility, debugging, prompting).

### Task 2 — Optional depth plan (CO-01)

Name **one** supplemental resource you might use for fundamentals (e.g. [freeCodeCamp](https://www.freecodecamp.org/), MDN Learning Area, or another **named** resource). In **3–5 sentences**, state **what** you would study first and **how** you would keep it **optional** (time box) so it does not block your capstone.

### Task 3 — Find the issues (CO-03)

**Snippet:**

```html
<header>
  <h1>Club news</h1>
</header>
<main>
  <h3>Latest update</h3>
  <p>We meet Tuesdays.</p>
  <h2>Past events</h2>
  <p>Photos below.</p>
  <img src="group.jpg" alt="">
</main>
```

List **at least four** separate **issues or risks** (heading order, semantics, accessibility, or SEO). **Number your list.** For **one** item, say **how** you would **fix** it (tag level or brief instruction).

## Marking guide (Satisfactory / Not Satisfactory)

| Criterion | Satisfactory (S) | Not Satisfactory (NS) |
| --------- | ---------------- | ----------------------- |
| **Task 1 — Reading code** | Clear argument; **≥2** distinct situations/audiences; coherent prose. | Generic (“AI is bad”) without analysis, or fewer than six sentences with no depth. |
| **Task 2 — Resource plan** | Named resource; concrete first topic; **optional** framing (e.g. 30 min/week). | No resource name, or plan is “learn everything,” or implies mandatory certification. |
| **Task 3 — Snippet review** | **≥4** valid, **numbered** issues; **one** fix is **specific**; at least one issue addresses **heading outline** (`h1`→`h3` before `h2`). | Fewer than four issues, or mostly false positives, or missing heading-order problem, or no fix. |

**Overall module judgement:** **S** only if **all** rows are **S**. Otherwise **NS**.

## Exemplar responses (for assessors)

**Task 3:** Core issue: **skipped heading level** (`h1` then `h3` before any `h2`). Other acceptable points: empty `alt` if image is informative (learners may argue decorative—accept if justified); possible missing `nav`/`footer` if strict; “Latest update” might be `h2` after fix. **Decorative alt** alone is **not** automatically wrong—look for **reasoning**.

**Task 2:** Do not require freeCodeCamp specifically if another credible resource is named.
