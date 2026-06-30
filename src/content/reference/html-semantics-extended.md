---
title: "HTML semantics — extended notes"
description: "Optional depth on ARIA, forms, lists, buttons, and stakeholder communication."
---

# HTML semantics — extended notes

This page supports [Module 05, Lesson 02](/lessons/module-05/02). Read it when you want depth beyond landmarks and div soup — not required for the capstone minimum.

## ARIA (use native HTML first)

Sometimes you see `role="…"` or `aria-label="…"` in HTML. Those are **ARIA** attributes for accessibility when native HTML cannot carry enough information.

This course stays mostly with **native** elements first (`button` for buttons, real links for navigation). If AI dumps complex ARIA, **pause** and verify against [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) before you ship — wrong ARIA can **harm** more than help.

## Lists and buttons

Use real **`<button>`** for actions that do not navigate away, and **`<a href="…">`** for navigation. AI sometimes styles a `<div>` with a click handler — avoid that for basic static sites; it hurts keyboard and assistive access.

Use **`<ul>` / `<li>`** for real lists of links or items when order matters — screen readers announce list length, which helps users.

## Forms and labels

Even in static sites you will meet **forms**: contact fields, newsletter sign-ups, or simple controls.

The pair that matters first is **`<label>`** tied to an **`id`** on the input (`for` on the label matches `id` on the field). Screen reader users hear the label when focus lands in the field; sighted users get a bigger click target when the label wraps or associates correctly.

AI sometimes outputs placeholders instead of labels — **placeholders are not substitutes** for accessible names. If you see a bare `<input>` with only `placeholder="Email"`, flag it in review and add a real label.

## Talking to stakeholders

Non-technical stakeholders may only care that the page “looks right.” Translate semantics into **risk** and **cost**:

- Unclear structure means slower edits and more AI mistakes to fix.
- Weak landmarks raise the chance of accessibility complaints or SEO confusion.

You are not asking for extra work for its own sake — you are asking for **structure that pays rent** every time someone opens the file or runs an automated check.

**Sample message:**

> “The page looks fine in preview, but the HTML uses generic divs instead of a main landmark. That makes screen-reader navigation harder and every future edit slower. I’d like 20 minutes to fix structure before we publish.”
