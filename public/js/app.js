/**
 * Course site client-side interactivity
 * — Theme switcher (localStorage + system pref)
 * — Keyboard shortcuts (N/P/T/? / Esc)
 * — Help dialog
 * — Syllabus cookie persistence
 * — Lesson progress tracking
 * — Header scroll visual
 */
(function () {
  "use strict";

  const storageKey = "preferred-theme";
  const syllabusOpenKey = "syllabus-open-modules";

  // ── Theme ───────────────────────────────────────
  function getStoredTheme() {
    try { return localStorage.getItem(storageKey); } catch { return null; }
  }

  function setStoredTheme(theme) {
    try { localStorage.setItem(storageKey, theme); } catch {}
  }

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "mono";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    updateThemeButtons(theme);
  }

  function updateThemeButtons(theme) {
    document.querySelectorAll("[data-theme-value]").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.themeValue === theme ? "true" : "false");
    });
  }

  function initTheme() {
    const stored = getStoredTheme();
    const initial = stored || getSystemTheme();
    applyTheme(initial);

    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-theme-value]");
      if (!btn) return;
      const theme = btn.dataset.themeValue;
      setStoredTheme(theme);
      applyTheme(theme);
    });

    // Listen for system theme changes
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
      if (!getStoredTheme()) {
        applyTheme(e.matches ? "light" : "mono");
      }
    });
  }

  // ── Syllabus persistence ───────────────────────
  function persistSyllabus() {
    const openModules = Array.from(document.querySelectorAll(".syllabus-module[open]"))
      .map((el) => el.id);
    try { localStorage.setItem(syllabusOpenKey, JSON.stringify(openModules)); } catch {}
  }

  function restoreSyllabus() {
    try {
      const stored = JSON.parse(localStorage.getItem(syllabusOpenKey) || "[]");
      document.querySelectorAll(".syllabus-module").forEach((el) => {
        if (stored.includes(el.id)) {
          el.setAttribute("open", "");
        } else if (!el.id?.endsWith("-01")) {
          el.removeAttribute("open");
        }
      });
    } catch {}
  }

  // ── Keyboard navigation ───────────────────────
  let nextLink, prevLink;

  function getNavLinks() {
    nextLink = document.querySelector('[data-action="next"]');
    prevLink = document.querySelector('[data-action="prev"]');
  }

  function navigateTo(href) {
    if (href) window.location.href = href;
  }

  function initKeyboard() {
    getNavLinks();

    document.addEventListener("keydown", (e) => {
      // Don't intercept when typing in inputs/form fields
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;

      switch (e.key) {
        case "n":
        case "N":
        case "ArrowRight":
          e.preventDefault();
          navigateTo(nextLink?.href);
          break;
        case "p":
        case "P":
        case "ArrowLeft":
          e.preventDefault();
          navigateTo(prevLink?.href);
          break;
        case "t":
        case "T":
          e.preventDefault();
          const themeBtn = document.querySelector('[data-theme-value="light"], [data-theme-value="mono"]');
          if (themeBtn) themeBtn.click();
          break;
        case "?":
          e.preventDefault();
          showHelp();
          break;
        case "Escape":
          e.preventDefault();
          hideHelp();
          dismissThemePopover();
          break;
      }
    });
  }

  // ── Help dialog ───────────────────────────────
  function showHelp() {
    const dialog = document.getElementById("keyboard-help");
    if (!dialog) return;
    dialog.hidden = false;
    const closeBtn = dialog.querySelector("[data-action='close-keyboard-help']");
    if (closeBtn) closeBtn.focus();
  }

  function hideHelp() {
    const dialog = document.getElementById("keyboard-help");
    if (!dialog) return;
    dialog.hidden = true;
    document.querySelector("body")?.focus();
  }

  function initHelpDialog() {
    document.addEventListener("click", (e) => {
      const closeBtn = e.target.closest("[data-action='close-keyboard-help']");
      if (closeBtn) {
        e.preventDefault();
        hideHelp();
      }
      // Click outside panel to close
      if (e.target.id === "keyboard-help") {
        hideHelp();
      }
    });
  }

  // ── Theme popover ─────────────────────────────
  function dismissThemePopover() {
    // No popover switcher in this version; kept for future expansion
    document.querySelectorAll("[data-theme-popover]").forEach((p) => p.hidden = true);
  }

  // ── Header scroll visual ──────────────────────
  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    function onScroll() {
      header.classList.toggle("site-header--scrolled", window.scrollY > 0);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ── Lesson progress tracking ───────────────────
  function initProgress() {
    // Mark current lesson as visited
    const currentPath = window.location.pathname;
    try {
      const visited = JSON.parse(localStorage.getItem("visited-lessons") || "[]");
      if (!visited.includes(currentPath)) {
        visited.push(currentPath);
        localStorage.setItem("visited-lessons", JSON.stringify(visited));
      }
    } catch {}

    // Update progress dots on home page
    const progressDots = document.querySelectorAll(".syllabus-lesson__dot");
    const visited = (() => {
      try { return JSON.parse(localStorage.getItem("visited-lessons") || "[]"); } catch { return []; }
    })();

    progressDots.forEach((dot) => {
      const link = dot.closest(".syllabus-lesson");
      if (!link) return;
      const href = link.getAttribute("href");
      if (href && visited.includes(href)) {
        dot.classList.add("syllabus-lesson__dot--done");
      }
    });

    // Update per-module progress dots
    document.querySelectorAll(".per-module-progress__dot").forEach((dot) => {
      const href = dot.getAttribute("data-href");
      if (href && visited.includes(href)) {
        dot.classList.add("per-module-progress__dot--done");
      }
    });
  }

  // ── Init ──────────────────────────────────────
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    restoreSyllabus();
    initKeyboard();
    initHelpDialog();
    initHeaderScroll();
    initProgress();

    // Persist syllabus state when toggles change
    document.querySelectorAll(".syllabus-module").forEach((mod) => {
      mod.addEventListener("toggle", persistSyllabus);
    });
  });
})();
