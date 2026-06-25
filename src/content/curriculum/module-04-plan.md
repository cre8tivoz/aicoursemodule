---
title: "Module 04 Plan"
description: ""
---

# Module 04 — Local AI and open-weight models

**Course outcomes:** CO-04, CO-05

## Module objectives (AQF 5)

1. Describe motivations for **local** or **open-weight** models (privacy, offline, cost).
2. Name representative families (e.g. Qwen, DeepSeek, MiniMax-class) at a **non-vendor-lock-in** level and what “local” typically requires.
3. Evaluate when local tooling is proportionate for a static site project.

## Prerequisites

- Module 03: cloud AI roles and review habits.

## Lessons (4)

### Lesson 01 — Why go local? Privacy, cost, offline

| Phase | Content |
| ----- | ------- |
| **Concept** | **Local** inference keeps prompts and files on your machine (when configured correctly). **Cost** can be predictable vs per-token cloud. **Offline** work possible with caveats. |
| **Example** | Compare two personas: traveller with poor Wi-Fi vs employee under strict data rules. |
| **Practice** | List two reasons you might prefer local for a **practice** static site. |
| **Summary** | Fit-for-purpose—not ideology. |

**File:** [`lessons/module-04/lesson-01.md`](../lessons/module-04/lesson-01.md)

---

### Lesson 02 — Open-weight families: Qwen, DeepSeek, MiniMax-class (high level)

| Phase | Content |
| ----- | ------- |
| **Concept** | The **market** moves quickly; names illustrate **categories**: multilingual open models, strong reasoning-oriented stacks, vendor “mini” stacks. Learners follow **current docs** for install. |
| **Example** | Non-prescriptive: “You might see Qwen / DeepSeek weights run via Ollama, LM Studio, or similar—your IT policy governs installs.” |
| **Practice** | Find one **current** official doc page for any one stack (bookmark); write one sentence on licence/privacy. |
| **Summary** | Orientation, not a lab manual—hardware and drivers vary. |
| **Deep dive** (in lesson) | Browser exploration (**DeepSeek**, **MiniMax 2.5** / current MiniMax web, **Qwen**, Hugging Face); optional **Ollama** / **LM Studio** on-device; safe prompts only; “free” tiers verified at source. |

**File:** [`lessons/module-04/lesson-02.md`](../lessons/module-04/lesson-02.md)

---

### Lesson 03 — Hardware, time, and proportionality

| Phase | Content |
| ----- | ------- |
| **Concept** | Local models need **RAM/VRAM**; bigger models need more hardware. For a **small static site**, a modest model may suffice. |
| **Example** | Rule of thumb: start small, measure latency, upgrade only if needed. |
| **Practice** | For “one landing page + contact,” argue **S/NS** whether a huge model is proportionate (short paragraph). |
| **Summary** | CO-05: justify tool choice for the job. |

**File:** [`lessons/module-04/lesson-03.md`](../lessons/module-04/lesson-03.md)

---

### Lesson 04 — Responsible use and organisational boundaries

| Phase | Content |
| ----- | ------- |
| **Concept** | Licensing, model cards, and **no** exfiltration of employer data into personal cloud; local does not erase **policy** (e.g. malware risk from random weights). |
| **Example** | Checklist: trusted sources, hashes where provided, IT approval. |
| **Practice** | List three questions to ask IT before installing local inference at work. |
| **Summary** | Bridges to capstone (you justify hosting/tooling in plain language). |

**File:** [`lessons/module-04/lesson-04.md`](../lessons/module-04/lesson-04.md)

## Dependencies between lessons

- Sequential **01 → 04** recommended.

## Module boundary

- **Next module (M05):** foundational HTML/CSS/JS reading skills—feeds directly into CO-03.
