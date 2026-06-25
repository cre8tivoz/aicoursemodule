---
title: "Module 03 Plan"
description: ""
---

# Module 03 — Cloud AI coding assistants

**Course outcomes:** CO-03, CO-04

## Module objectives (AQF 5)

1. Map common tools (Cursor, Claude, Gemini, ChatGPT) to **roles** in a build loop (plan, generate, refactor, explain).
2. State **limitations** (accuracy, policy, context windows, privacy) and mitigations (verification, small steps).
3. Apply a short checklist to review AI-generated HTML/CSS before publishing.

## Prerequisites

- Modules 01–02: brief mindset + local folder/IDE comfort.

## Lessons (5)

### Lesson 01 — Roles in the loop: plan, generate, explain, refactor

| Phase | Content |
| ----- | ------- |
| **Concept** | Different tools suit different jobs: **chat** for explanation; **editor-integrated** AI for in-file edits; compare for review. |
| **Example** | Same small task in three modes: “explain `<nav>`”, “generate nav markup”, “refactor for BEM-style classes” (illustrative). |
| **Practice** | Match tool types (Cursor / Claude / Gemini / ChatGPT) to **one** role each for your workflow—your answers may vary. |
| **Summary** | Tooling is plural; workflow beats any single brand. |

**File:** [`lessons/module-03/lesson-01.md`](../lessons/module-03/lesson-01.md)

---

### Lesson 02 — Cursor, Claude, Gemini, ChatGPT — strengths and boundaries

| Phase | Content |
| ----- | ------- |
| **Concept** | **Cursor**: codebase-aware edits in the IDE. **Claude / Gemini / ChatGPT**: strong for drafting and reasoning in chat; policy and limits differ by product and account. |
| **Example** | When to paste HTML into chat vs edit in place (pros/cons). |
| **Practice** | Write four bullet **limitations** (e.g. hallucination, outdated docs, org policy). |
| **Summary** | “To a point” means verify; never ship unchecked. |

**File:** [`lessons/module-03/lesson-02.md`](../lessons/module-03/lesson-02.md) (IDE extensions + Gemini CLI)

---

### Lesson 03 — Privacy, policy, and workplace reality

| Phase | Content |
| ----- | ------- |
| **Concept** | Customer data, unreleased strategy, or PII may be **disallowed** in cloud tools—check employer policy. |
| **Example** | Safe: generic layout practice. Unsafe: pasting confidential client copy. |
| **Practice** | One scenario: what would you **not** paste into a cloud chat? |
| **Summary** | Professional judgement (CO-01/CO-05) applies before clicking Send. |

**File:** [`lessons/module-03/lesson-03.md`](../lessons/module-03/lesson-03.md)

---

### Lesson 04 — Review checklist for generated HTML/CSS

| Phase | Content |
| ----- | ------- |
| **Concept** | **Evaluate** (CO-03): one `<h1>` per page intent; heading order; landmarks; link text; obvious focus styles. |
| **Example** | Printable checklist (8–10 items) aligned to Lighthouse-friendly basics. |
| **Practice** | Run checklist on a short AI-generated snippet (provided in lesson). |
| **Summary** | Checklists make “evaluate” repeatable, not subjective guesswork. |

**File:** [`lessons/module-03/lesson-04.md`](../lessons/module-03/lesson-04.md)

---

### Lesson 05 — From draft to shipped static files

| Phase | Content |
| ----- | ------- |
| **Concept** | Save outputs into the M02 folder structure; rename; deduplicate; manual test in browser. |
| **Example** | Flowchart: generate → save → open in browser → fix → repeat. |
| **Practice** | Describe your own loop in five steps. |
| **Summary** | Prepares for M04 (local models) and capstone deployment. |

**File:** [`lessons/module-03/lesson-05.md`](../lessons/module-03/lesson-05.md)

## Dependencies between lessons

- **01 → 02 → 03** builds context; **04–05** apply skills.

## Module boundary

- **Next module (M04):** local and open-weight models—when cloud is not the right fit.
