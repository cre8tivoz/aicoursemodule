---
title: "Module 05 Plan"
description: ""
---

# Module 05 — Why basic code literacy still matters

**Course outcomes:** CO-01, CO-03

## Module objectives (AQF 5)

1. Explain why **reading** HTML/CSS matters even when AI writes the first draft.
2. Use [freeCodeCamp](https://www.freecodecamp.org/) (or equivalent) as a **self-paced** path for HTML/CSS/JS foundations—optional depth, not a gate.
3. Relate semantic tags and heading order to accessibility and SEO at a basic level.

## Prerequisites

- Modules 01–04 (conceptual); can be taken in parallel with early M06 if needed—**no hurdle**.

## Lessons (5)

### Lesson 01 — Reading code is a professional skill

| Phase | Content |
| ----- | ------- |
| **Concept** | You **direct** AI with prompts; you **verify** with reading. Syntax errors, wrong tags, and missing alt text show up in code view. |
| **Example** | AI outputs broken `</div>` nesting—only visible when you read structure. |
| **Practice** | Find one deliberate error in a provided snippet (missing closing tag). |
| **Summary** | Literacy = faster debugging and better prompts. |

**File:** [Module 05 Lesson 01](/lessons/module-05/01)

---

### Lesson 02 — HTML semantics in plain English

| Phase | Content |
| ----- | ------- |
| **Concept** | `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>` carry meaning; `<div>` soup is harder for assistive tech. |
| **Example** | Same layout: div-only vs semantic—Lighthouse/screen reader perspective (conceptual). |
| **Practice** | Label five lines of markup as “semantic” or “generic” with one-line rationale each. |
| **Summary** | Supports CO-03 and capstone accessibility expectations. |

**File:** [Module 05 Lesson 02](/lessons/module-05/02)

---

### Lesson 03 — Heading order and one main idea per level

| Phase | Content |
| ----- | ------- |
| **Concept** | One logical `<h1>` per page; `<h2>`–`<h3>` nest without skipping levels where possible. |
| **Example** | Fix a deliberately wrong outline (h1 then h4). |
| **Practice** | Rewrite headings for a short outline using correct levels. |
| **Summary** | Directly ties to Lighthouse accessibility and readability. |

**File:** [Module 05 Lesson 03](/lessons/module-05/03)

---

### Lesson 04 — CSS: what to skim first

| Phase | Content |
| ----- | ------- |
| **Concept** | Check **selectors**, **contrast** (text vs background), **font-size**, **spacing** before micro-optimising. |
| **Example** | Identify one low-contrast pair in a sample CSS block. |
| **Practice** | Three-item skim list you will use on every AI stylesheet. |
| **Summary** | Creative direction includes visual hierarchy, not only HTML. |

**File:** [Module 05 Lesson 04](/lessons/module-05/04)

---

### Lesson 05 — freeCodeCamp and other free foundations (optional depth)

| Phase | Content |
| ----- | ------- |
| **Concept** | [freeCodeCamp](https://www.freecodecamp.org/) offers structured **Responsive Web Design** and **JavaScript** tracks—learners choose depth; course does not require certification. |
| **Example** | Suggested first modules to pair with this course (high level). |
| **Practice** | Set a personal 30-minute trial goal (which section to open first). |
| **Summary** | Reinforces CO-01 (investing in fundamentals) without mandatory hurdle. |

**File:** [Module 05 Lesson 05](/lessons/module-05/05)

## Dependencies between lessons

- **01 → 03** strongly sequential for semantics; **04–05** can follow flexibly.

## Module boundary

- **Next module (M06):** turns briefs into prompts and iteration loops for the capstone.
