---
title: "Module 02 assessment"
module: "02"
type: checkin
aqfOutcomeRefs:
  - "CO-02"
---

# Module 02 — Assessment

**Purpose:** Summative evidence for **CO-02** (IDE workflow for static HTML/CSS). **Judgement:** **S** / **NS** only.

**Time guide:** 30–45 minutes.

## Assessment tasks

### Task 1 — Project folder plan (practical description)

Describe a **minimal folder layout** for a static mini-site with:

- `index.html`  
- `styles.css`  
- `images/` (with at least one referenced image filename)

Use **bullet points** or a **simple tree**. State **one** reason you would keep CSS in a **separate file** instead of only inline styles.

### Task 2 — IDE workflow checklist (apply)

Write a **numbered checklist** of **at least five** IDE actions or habits you would use when building that site (e.g. open folder, live preview, multi-file edit, search, format). **One line per item.** At least **three** items must be **specific** (name a real action, not only “edit code”).

### Task 3 — IDE vs basic editor (short rationale)

In **5–8 sentences**, explain how using an **integrated** editor (with preview and project view) **lowers the cost** of trying ideas compared to a **single-file notepad-style** workflow. Refer to **at least one** concrete workflow step from your checklist.

## Marking guide (Satisfactory / Not Satisfactory)

| Criterion | Satisfactory (S) | Not Satisfactory (NS) |
| --------- | ---------------- | ----------------------- |
| **Task 1 — Layout** | Lists the three elements above (or equivalent); filenames sensible; **one** clear reason for external CSS. | Missing a folder or file, or no rationale for separate CSS. |
| **Task 2 — Checklist** | **≥5** numbered items; **≥3** are specific IDE affordances; items are plausible for static HTML/CSS work. | Fewer than five items, or mostly vague (“use the computer”). |
| **Task 3 — Rationale** | Clear comparison; links to **own** checklist; understandable prose. | No comparison, or irrelevant to IDE workflow, or fewer than five sentences with little substance. |

**Overall module judgement:** **S** only if **all** rows are **S**. Otherwise **NS**.

## What good looks like (examples)

**Task 1 (tree):**

```text
hobby-site/
  index.html
  styles.css
  images/logo.png
```

> Separate CSS keeps presentation in one file I can skim when AI adds rules — I do not hunt through every `<style>` block in HTML.

**Task 2 (checklist extract):**

1. Open project folder as workspace.  
2. Edit `index.html` and `styles.css` side by side.  
3. Live preview after each heading change.  
4. Find all `class="btn"` across files.  
5. Format document before commit/save.

**Task 3 (extract):**

> In Notepad I only see one file at a time — I forget whether `about.html` still links to the old CSS path. In VS Code I open the folder, click between files, and preview in two keystrokes. Step 3 on my checklist (live preview) means I catch broken nav before I upload.

## Exemplar responses (for assessors)

**Task 1:** Accept minor naming variants (`css/style.css`) if consistent and explained.

**Task 2:** Accept Cursor, VS Code, WebStorm, etc.—neutrality on brand; look for preview, go-to-definition optional, terminal optional.

**Task 3:** Look for faster feedback loop, seeing multiple files, less path confusion.
