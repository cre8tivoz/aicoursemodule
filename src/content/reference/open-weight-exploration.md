---
title: "Open-weight exploration (optional)"
description: "Optional deep dive — browser and on-device exploration of open-weight model families."
---

# Open-weight exploration (optional)

This page supports [Module 04, Lesson 02](/lessons/module-04/02). The lesson covers orientation and habits; this page is for learners who want to **try** families safely.

> **Safety first**  
> Use **only** non-sensitive text (hobby copy, public tutorial snippets, fake “Acme Corp” examples). **Never** paste employer, client, or personal identity data into any chat or local tool without approval.

## Browser vs on device

| Path | What you learn | Trade-off |
| ---- | ---------------- | --------- |
| **Browser chat** | Fast taste-test of a vendor’s model UX; no GPU setup | Traffic usually goes to their servers — check terms and privacy policy |
| **On device** (later) | True local inference when configured correctly | Needs RAM/VRAM, time, and sometimes IT approval |

## Browser starting points

Products rename pages often. If a link fails, search the **official** vendor name plus “chat” or “console.”

- [DeepSeek](https://www.deepseek.com/) — web chat when available in your region.
- [MiniMax](https://www.minimax.io/) — check current model pages and terms.
- **Qwen** — Alibaba Cloud / Qwen official pages and linked playgrounds or Hugging Face model cards.
- [Hugging Face](https://huggingface.co/) — model cards, Spaces demos, comparison without installing.

**Suggested prompts (same three for each tool):**

1. “Explain this HTML: `<nav><a href='/'>Home</a></nav>` in plain language.”
2. Rewrite a short paragraph in plain language.
3. Suggest a minimal accessible nav structure for a two-page static site.

**Do this (20 minutes):** Open **two** browser experiences. Run the same three prompts. Note differences in tone, length, hallucination risk, and whether the model cites uncertainty.

## On device (when IT and hardware allow)

**Runners** load weights you choose:

- [Ollama](https://ollama.com/) — `ollama pull <model>` then run locally if your machine can handle the tag.
- [LM Studio](https://lmstudio.ai/) — desktop UI to search, download, and chat locally.
- **vLLM**, **llama.cpp** — advanced; skip until you need them.

**Optional (30+ minutes):** Install **one** runner from the official site only. Pull **one small** CPU-friendly model tag (read the runner’s docs). Ask it to summarise a practice `index.html` after you open the project folder in the tool’s allowed scope.

## Pricing and versions

Pricing (including free tiers) and model version numbers change — read current terms at the source. This course does not endorse a single vendor.
