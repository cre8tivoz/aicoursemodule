---
title: "Module 03 assessment"
module: "03"
type: checkin
aqfOutcomeRefs:
  - "CO-03"
  - "CO-04"
---

# Module 03 — Assessment

**Purpose:** Summative evidence for **CO-03** (evaluate AI-generated HTML/CSS) and **CO-04** (tool roles and prompting context). **Judgement:** **S** / **NS** only.

**Time guide:** 45–60 minutes.

## Assessment tasks

### Task 1 — Tools in the build loop (CO-04)

Complete the table: for **each** tool, give **one** primary **role** in a static-site build loop (e.g. plan, generate, refactor, explain). Use **your own words**; tool names are examples—substitute only if your provider allows.

| Tool | One primary role in *your* workflow |
| ---- | ------------------------------------- |
| Cursor (or IDE-integrated assistant) | |
| Claude (or similar chat assistant) | |
| Gemini (or second chat assistant) | |
| ChatGPT (or similar) | |

### Task 2 — Limitations and mitigations (CO-03 / CO-04)

List **four** important **limitations** of cloud AI assistants for coding (e.g. accuracy, context, privacy). For **each**, give **one** practical **mitigation** you would use. Format: bullet pairs or a two-column list.

### Task 3 — Checklist application (CO-03)

**Snippet for review** (do not change the snippet—review it as given):

```html
<body>
  <div class="header">My Cafe</div>
  <div>
    <div class="big-title">Welcome</div>
    <p>We are open daily.</p>
    <img src="cake.jpg">
  </div>
  <div class="footer">Contact: call us</div>
</body>
```

Write **6–10 sentences** that:

1. Name **at least three** issues or risks (structure, accessibility, or semantics).  
2. For **one** issue, state what you would **ask AI** to change in a **follow-up prompt** (be specific).

## Marking guide (Satisfactory / Not Satisfactory)

| Criterion | Satisfactory (S) | Not Satisfactory (NS) |
| --------- | ---------------- | ----------------------- |
| **Task 1 — Roles** | All **four** rows filled; roles are **distinct** enough and plausible; not copy-paste of product marketing. | Empty rows, or identical vague roles for every tool. |
| **Task 2 — Limits/mitigations** | **Four** limitation/mitigation pairs; mitigations are **actionable** (e.g. verify, smaller prompts), not “be careful” only. | Fewer than four pairs, or mitigations missing or generic. |
| **Task 3 — Review** | **≥3** valid issues (e.g. no landmarks, heading as div, missing alt, weak footer semantics); follow-up prompt is **specific**. | Fewer than three issues, or issues invented that ignore the snippet, or no concrete prompt. |

**Overall module judgement:** **S** only if **all** rows are **S**. Otherwise **NS**.

## Exemplar responses (for assessors)

**Task 3 issues may include:** no `header`/`nav`/`main`/`footer`; “Welcome” not an `h1`; missing `alt` on image; “Contact” not a link; document structure. Accept reasonable alternatives if justified.

**Reminder:** Tools are **descriptive**; do not penalise learners for using different but equivalent assistants if the table is completed thoughtfully.
