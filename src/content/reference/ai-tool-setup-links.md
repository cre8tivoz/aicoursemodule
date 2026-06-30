---
title: "AI tool setup — official links"
description: "Outbound links to publisher docs for IDE assistants and CLIs. Verify before installing."
---

# AI tool setup — official links

Product names, UIs, and install steps change. Use this page as a **starting bookmark list** — always read the **current** docs and your **IT/security policy** before installing anything at work.

## IDE-integrated assistants

| Tool | Official starting point |
| ---- | ----------------------- |
| **Cursor** | [cursor.com/docs](https://cursor.com/docs) — built-in AI; sign in and privacy settings in the app |
| **VS Code + GitHub Copilot** | [code.visualstudio.com/docs/copilot](https://code.visualstudio.com/docs/copilot) |
| **Anthropic Claude (extensions)** | [anthropic.com/claude](https://www.anthropic.com/claude) — search the marketplace for **Anthropic**-published extensions |
| **Google Gemini (extensions)** | [codeassist.google](https://codeassist.google/) or Google’s current Gemini developer docs |

**Generic VS Code flow:** Extensions view → install from **recognised publisher** → command palette → **Sign in** → open your project folder → smoke-test on a real file.

## Terminal CLIs

| Tool | Official starting point |
| ---- | ----------------------- |
| **Gemini CLI** | [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) |
| **Node.js** (prerequisite for many CLIs) | [nodejs.org](https://nodejs.org/) |

Run the CLI **beside** your IDE — same `my-static-site` folder, files on disk.

## Browser chat (supplemental)

| Tool | Official starting point |
| ---- | ----------------------- |
| **ChatGPT** | [chat.openai.com](https://chat.openai.com/) |
| **Claude** | [claude.ai](https://claude.ai/) |
| **Gemini** | [gemini.google.com](https://gemini.google.com/) |

Browser chat is fine for drafts and explanations. **Save** any markup you want to keep into your project folder — chat is not the ship.

## When something fails

- Extension installed but idle → look for **Sign in** in the command palette.
- `npm` / `npx` not found → install **Node.js LTS**, restart the terminal.
- OAuth fails at work → ask IT; do not paste confidential data into personal accounts to “work around” policy.
