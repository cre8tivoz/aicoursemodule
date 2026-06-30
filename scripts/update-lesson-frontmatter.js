import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function listLessonFiles() {
  const files = [];
  for (const mod of readdirSync("src/content/lessons")) {
    if (!mod.startsWith("module-")) continue;
    for (const lesson of readdirSync(join("src/content/lessons", mod))) {
      if (lesson.endsWith(".md")) files.push(join("src/content/lessons", mod, lesson));
    }
  }
  return files;
}

/** @type {Record<string, { objectives: string[]; aqfOutcomeRefs: string[] }>} */
const LESSON_META = {
  "module-01/01": {
    objectives: [
      "Explain what a static site is and when it fits real projects",
      "Compare local preview with public hosting at a high level",
      "Describe a work or hobby scenario where static HTML is sufficient",
    ],
    aqfOutcomeRefs: ["CO-01"],
  },
  "module-01/02": {
    objectives: [
      "Distinguish AI drafting from professional judgement before publishing",
      "Name categories of risk when shipping AI-generated pages",
      "List three things to always verify before publish",
    ],
    aqfOutcomeRefs: ["CO-01", "CO-04"],
  },
  "module-01/03": {
    objectives: [
      "Contrast creative direction with mechanical typing",
      "Recognise the minimum sections a useful brief must cover",
      "Draft a five-bullet brief sketch for a fictional micro-site",
    ],
    aqfOutcomeRefs: ["CO-04"],
  },
  "module-01/04": {
    objectives: [
      "Compare hand-coding, AI-first, and hybrid approaches",
      "Analyse trade-offs for a stated scenario",
      "Recommend a path with plain-language justification",
    ],
    aqfOutcomeRefs: ["CO-01"],
  },
  "module-01/05": {
    objectives: [
      "Explain why fundamentals still change outcomes with AI drafts",
      "Spot basic semantic structure risks in generated markup",
      "Identify one risk of publishing without reading HTML",
    ],
    aqfOutcomeRefs: ["CO-01", "CO-03"],
  },
  "module-02/01": {
    objectives: [
      "Create a minimal static-site folder structure",
      "Use relative paths to link HTML, CSS, and images",
      "Open and test pages locally in a browser",
    ],
    aqfOutcomeRefs: ["CO-02"],
  },
  "module-02/02": {
    objectives: [
      "Open a project folder as an IDE workspace",
      "Navigate and save files in the editor",
      "Complete a first-workspace setup checklist",
    ],
    aqfOutcomeRefs: ["CO-02"],
  },
  "module-02/03": {
    objectives: [
      "Use preview, search, and formatting tools in the IDE",
      "Name three IDE actions that beat a basic text editor",
      "Iterate on HTML and CSS with lower friction",
    ],
    aqfOutcomeRefs: ["CO-02"],
  },
  "module-02/04": {
    objectives: [
      "Describe when version control helps versus folder backups",
      "Explain commits as saved checkpoints in plain language",
    ],
    aqfOutcomeRefs: ["CO-02"],
  },
  "module-03/01": {
    objectives: [
      "Map AI tools to roles in a static-site build loop",
      "Explain why the course centres on IDE plus project folder",
      "Match tools to workflow roles for your own setup",
    ],
    aqfOutcomeRefs: ["CO-03", "CO-04"],
  },
  "module-03/02": {
    objectives: [
      "Connect at least one IDE-integrated AI tool or document blockers",
      "Sign in and confirm the tool sees your workspace",
      "List four limitations of cloud assistants in your own words",
    ],
    aqfOutcomeRefs: ["CO-03", "CO-04"],
  },
  "module-03/03": {
    objectives: [
      "Identify data you should not paste into cloud AI tools",
      "Apply workplace privacy policy before using assistants",
      "Draft a safe message when unsure about IT rules",
    ],
    aqfOutcomeRefs: ["CO-04", "CO-05"],
  },
  "module-03/04": {
    objectives: [
      "Run a review checklist on AI-generated HTML and CSS",
      "Name structure and accessibility issues in a snippet",
      "Make evaluation repeatable with observable checks",
    ],
    aqfOutcomeRefs: ["CO-03"],
  },
  "module-03/05": {
    objectives: [
      "Save AI outputs into your project folder structure",
      "Describe a five-step generate-to-ship loop",
    ],
    aqfOutcomeRefs: ["CO-03", "CO-04"],
  },
  "module-04/01": {
    objectives: [
      "List reasons to explore local or open-weight AI",
      "Compare local and cloud fit using simple personas",
      "Explain local inference in two sentences without jargon",
    ],
    aqfOutcomeRefs: ["CO-04", "CO-05"],
  },
  "module-04/02": {
    objectives: [
      "Bookmark one official doc page for an open-weight stack",
      "Compare two browser chat experiences with the same prompts",
      "Distinguish open-weight models from runner tools",
    ],
    aqfOutcomeRefs: ["CO-04", "CO-05"],
  },
  "module-04/03": {
    objectives: [
      "Judge whether a large local model is proportionate for a small site",
      "Relate hardware constraints to tool choice",
    ],
    aqfOutcomeRefs: ["CO-05"],
  },
  "module-04/04": {
    objectives: [
      "List questions to ask IT before installing local inference",
      "Recognise licensing and policy boundaries for open models",
    ],
    aqfOutcomeRefs: ["CO-05"],
  },
  "module-05/01": {
    objectives: [
      "Explain why reading HTML and CSS matters when AI drafts first",
      "Spot common structural errors in a provided snippet",
      "Use code view to verify what actually shipped",
    ],
    aqfOutcomeRefs: ["CO-01", "CO-03"],
  },
  "module-05/02": {
    objectives: [
      "Label markup as semantic or generic with a one-line rationale",
      "Rewrite div-heavy structure toward landmarks and real headings",
      "Relate semantics to accessibility and maintenance",
    ],
    aqfOutcomeRefs: ["CO-03"],
  },
  "module-05/03": {
    objectives: [
      "Apply one logical h1 per page and sensible heading order",
      "Fix a deliberately wrong heading outline",
      "Rewrite headings for a short outline using correct levels",
    ],
    aqfOutcomeRefs: ["CO-03"],
  },
  "module-05/04": {
    objectives: [
      "Skim AI-generated CSS for contrast, type, and spacing",
      "Identify low-contrast pairs in a sample stylesheet",
      "Use a three-item skim list on every AI stylesheet",
    ],
    aqfOutcomeRefs: ["CO-03"],
  },
  "module-05/05": {
    objectives: [
      "Set a personal trial goal on freeCodeCamp or equivalent",
      "Explain why optional depth in fundamentals is a strategic choice",
    ],
    aqfOutcomeRefs: ["CO-01"],
  },
  "module-06/01": {
    objectives: [
      "Complete a one-page brief with goal, audience, pages, tone, and scope",
      "List must-haves, non-goals, and accessibility intent for your capstone",
      "Pass a swap test so another builder could execute from your brief alone",
    ],
    aqfOutcomeRefs: ["CO-04", "CO-05"],
  },
  "module-06/02": {
    objectives: [
      "Rewrite a weak prompt using constraints and acceptance criteria",
      "Include examples of done in prompts for static HTML tasks",
      "Apply creative direction so output matches your brief",
    ],
    aqfOutcomeRefs: ["CO-04"],
  },
  "module-06/03": {
    objectives: [
      "Run a generate-check-refine loop using prior module checklists",
      "Write a personal review loop as a numbered checklist",
      "Document what you asked and what you changed by hand",
    ],
    aqfOutcomeRefs: ["CO-03", "CO-04"],
  },
  "module-06/04": {
    objectives: [
      "Map brief sections to capstone deliverables and evidence",
      "Draft a submission evidence pack against S/NS rows",
      "Justify hosting and tooling choices in one or two sentences",
    ],
    aqfOutcomeRefs: ["CO-03", "CO-04", "CO-05"],
  },
  "module-07/01": {
    objectives: [
      "Execute staged steps from brief lock through deploy and Lighthouse",
      "Self-check all capstone marking rows before submission",
      "Justify hosting choice and document honesty about AI assistance",
    ],
    aqfOutcomeRefs: ["CO-03", "CO-04", "CO-05"],
  },
};

/** @type {Record<string, string[]>} */
const ASSESSMENT_META = {
  "module-01-quiz": ["CO-01", "CO-04"],
  "module-02-quiz": ["CO-02"],
  "module-03-quiz": ["CO-03", "CO-04"],
  "module-04-quiz": ["CO-04", "CO-05"],
  "module-05-quiz": ["CO-01", "CO-03"],
  "module-06-quiz": ["CO-01", "CO-03", "CO-04", "CO-05"],
  capstone: ["CO-03", "CO-04", "CO-05"],
};

function formatYamlList(items) {
  if (items.length === 0) return "[]";
  return `\n${items.map((item) => `  - "${item.replace(/"/g, '\\"')}"`).join("\n")}`;
}

function updateFrontmatter(content, objectives, aqfOutcomeRefs) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error("No frontmatter found");

  let fm = match[1];
  fm = fm.replace(/^objectives:\n(?:  - .*\n)*/m, `objectives:${formatYamlList(objectives)}\n`);
  fm = fm.replace(/^aqfOutcomeRefs:\n(?:  - .*\n)*/m, `aqfOutcomeRefs:${formatYamlList(aqfOutcomeRefs)}\n`);

  return content.replace(/^---\n[\s\S]*?\n---/, `---\n${fm.trimEnd()}\n---`);
}

for (const file of listLessonFiles()) {
  const key = file.replace("src/content/lessons/", "").replace(".md", "");
  const meta = LESSON_META[key];
  if (!meta) {
    console.warn(`No metadata for ${key}`);
    continue;
  }
  const updated = updateFrontmatter(readFileSync(file, "utf8"), meta.objectives, meta.aqfOutcomeRefs);
  writeFileSync(file, updated);
  console.log(`Updated ${file}`);
}

for (const file of readdirSync("src/content/assessments").filter((f) => f.endsWith(".md")).map((f) => join("src/content/assessments", f))) {
  const key = file.replace("src/content/assessments/", "").replace(".md", "");
  const refs = ASSESSMENT_META[key];
  if (!refs) {
    console.warn(`No assessment metadata for ${key}`);
    continue;
  }
  const content = readFileSync(file, "utf8");
  const updated = updateFrontmatter(content, [], refs);
  writeFileSync(file, updated);
  console.log(`Updated ${file}`);
}
