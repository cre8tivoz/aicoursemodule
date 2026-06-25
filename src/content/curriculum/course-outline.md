---
title: "Course outline"
description: "Course-level outcomes, modules, and assessment mapping (AQF Level 5)."
---

# Course outline

**Topic 1 — Why use AI to build a static HTML site (instead of only “learning code by hand”)?**

This course positions learners as **creative directors**: they combine **IDEs**, **cloud and local AI tools**, and **foundational code literacy** (so they can read, check, and steer output). It contrasts full hand-coding with modern AI-assisted workflows and explains **why basic HTML/CSS/JS knowledge remains valuable**—including pointing learners to free resources such as [freeCodeCamp](https://www.freecodecamp.org/) for structured basics.

## Course-level outcomes (AQF 5)

Outcomes use Diploma-level verbs: **apply**, **analyse**, **evaluate**, and exercise **judgement** in workplace-relevant situations. Align final wording with the official Level 5 descriptor in the [AQF Level 5 reference](/reference/aqf-level-5-descriptor/).


| ID        | Outcome                                                                                                                                                                                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **CO-01** | **Analyse** trade-offs between AI-assisted and hand-authored approaches for small static sites (speed, quality, maintainability, ethics) in a stated professional or personal branding context.                                                                              |
| **CO-02** | **Apply** a modern IDE workflow (files, preview, extensions, basic terminal optional) to create, organise, and iterate on static HTML/CSS.                                                                                                                                   |
| **CO-03** | **Evaluate** AI-generated markup and styles for semantic structure, accessibility basics, and clarity using foundational HTML/CSS knowledge.                                                                                                                                 |
| **CO-04** | **Apply** effective prompting and creative direction (constraints, audience, acceptance criteria) across cloud AI tools (e.g. Cursor, Claude, Gemini, ChatGPT-with-limits) and, where appropriate, **local/open-weight** models (e.g. Qwen, DeepSeek, MiniMax-class stacks). |
| **CO-05** | **Justify** tool choices (cloud vs local, editor vs chat-only) for privacy, cost, and fit-for-purpose static delivery—including publishing to static hosting.                                                                                                                |


## Modules (7) + summative capstone


| Module  | Title                                                             | Summary                                                                                                                                                                                                                                    | Contributes to outcomes |
| ------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| **M01** | Purpose and posture: static HTML, AI, and the “creative director” | Why this course exists; what “static” means; AI as accelerator, not a substitute for judgement; outline of hand-coding vs AI-assisted paths.                                                                                               | CO-01, CO-04            |
| **M02** | IDEs and a sane project workflow                                  | Ease of use of integrated editors: files, folders, live preview, search/replace, extensions; reducing friction so learners ship pages.                                                                                                     | CO-02                   |
| **M03** | Cloud AI coding assistants                                        | Cursor; Claude; Gemini; ChatGPT **to a point** (limits: context, hallucination, privacy, policy); when to use chat vs editor-integrated tools.                                                                                             | CO-03, CO-04            |
| **M04** | Local AI and open-weight models                                   | Emerging **local** options and open models (e.g. **MiniMax**-family, **Qwen**, **DeepSeek**): cost, privacy, hardware, setup at a high level; responsible use.                                                                             | CO-04, CO-05            |
| **M05** | Why basic code literacy still matters                             | How HTML/CSS/JS structure thinking; reading diffs; spotting broken semantics; using [freeCodeCamp](https://www.freecodecamp.org/) (and similar) for **responsive web design** / basic JS—**supplemental**, not a formal prerequisite gate. | CO-01, CO-03            |
| **M06** | Prompting as design: briefs, constraints, review loops            | Turning intent into prompts; acceptance criteria; iterating; combining human taste with AI speed; professional tone and honesty about AI use.                                                                                              | CO-04, CO-05            |
| **M07** | Capstone build: ship your static mini-site                        | Guided lesson: staged brief-to-deploy workflow, Lighthouse on live URL, submission mindset—pairs with `[assessments/capstone.md](/assessments/capstone/)`.                                                                                 | CO-03, CO-04, CO-05     |


## Module learning objectives (2–4 each)

### M01 — Purpose and posture

1. Explain in plain language why teams and individuals use **AI plus static HTML** for fast, portable sites.
2. Contrast **creative direction** (goals, audience, constraints) with **mechanical typing** of code.
3. Identify situations where learning fundamentals still changes outcomes (quality, accessibility, maintenance).

### M02 — IDEs and workflow

1. Set up a minimal project folder and open it in an IDE with confidence.
2. Use core IDE affordances that speed static site work (navigation, multi-file edit, formatting, optional Git).
3. Describe how IDE integration lowers the cost of trying ideas compared to notepad-style editing.

### M03 — Cloud AI assistants

1. Map common tools (Cursor, Claude, Gemini, ChatGPT) to **roles** in a build loop (plan, generate, refactor, explain).
2. State **limitations** (accuracy, policy, context windows, privacy) and mitigations (verification, small steps).
3. Apply a short checklist to review AI-generated HTML/CSS before publishing.

### M04 — Local and open-weight AI

1. Describe motivations for **local** or **open-weight** models (privacy, offline, cost).
2. Name representative families (e.g. Qwen, DeepSeek, MiniMax-class) at a **non-vendor-lock-in** level and what “local” typically requires.
3. Evaluate when local tooling is proportionate for a static site project.

### M05 — Basic code knowledge

1. Explain why **reading** HTML/CSS matters even when AI writes the first draft.
2. Use [freeCodeCamp](https://www.freecodecamp.org/) (or equivalent) as a **self-paced** path for HTML/CSS/JS foundations—link to certification-style courses only as optional depth.
3. Relate semantic tags and heading order to accessibility and SEO at a basic level.

### M06 — Prompting as creative direction

1. Write a project **brief** (audience, pages, tone, must-haves) usable by a human or AI collaborator.
2. Convert the brief into **prompts** with constraints and examples of “done.”
3. Run an **iteration loop**: generate → review against CO-03 criteria → refine.

## Outcome → module → assessment mapping


| Outcome | Module(s)          | Assessment evidence                                                                                   |
| ------- | ------------------ | ----------------------------------------------------------------------------------------------------- |
| CO-01   | M01, M05, M06      | M01 quiz (scenario analysis); M05 quiz (why literacy / optional depth); M06 short applied reflection. |
| CO-02   | M02                | M02 quiz (workflow checklist; practical mini-task description).                                       |
| CO-03   | M03, M05           | M03 quiz (review checklist); M05 quiz (interpret snippet / find issue).                               |
| CO-04   | M01, M03, M04, M06 | M03–M04 quizzes; M06 prompt-and-review task; **capstone** (integrated).                               |
| CO-05   | M04, M06           | M04 quiz; **capstone** (justify hosting/tooling in 1–2 sentences in submission).                      |


**Capstone** (`[assessments/capstone.md](/assessments/capstone/)`): Learners deploy a **1–3 page** static HTML mini-site (topic of choice). Summative evidence primarily supports **CO-03**, **CO-04**, and **CO-05** (structure, accessibility, intentional design, live deployment). Mapped explicitly as summative for **≥1** outcome—here **CO-04** and **CO-03** at minimum.

## Pedagogical rules (aligned to global course rules)

- **Plain language**: Target roughly **8th-grade reading level** unless a technical term is introduced and defined.
- **No hurdles**: Modules are **sequenced** for clarity only; no “must pass M03 to open M04” requirement in design.
- **S/NS**: Module assessments use **Satisfactory / Not Satisfactory** judgement; see each module check-in on the course site.

Keep references to third-party tools **descriptive**, not endorsement; remind learners of organisational IT and data policies.

