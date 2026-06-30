import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync, mkdtempSync, statSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(root, "capstone-evidence-pack-print.html");
const outDir = path.join(root, "..", "public", "downloads");
const outPdf = path.join(outDir, "capstone-evidence-pack.pdf");

const chromeCandidates = [
  process.env.CHROME_PATH,
  "/usr/local/bin/google-chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const chrome = chromeCandidates.find((p) => existsSync(p));

function pdfLooksValid() {
  return existsSync(outPdf) && statSync(outPdf).size > 1000;
}

if (!chrome) {
  if (pdfLooksValid()) {
    console.warn("generateCapstonePdf: Chrome not found — keeping existing PDF.");
    process.exit(0);
  }
  console.warn("generateCapstonePdf: Chrome/Chromium not found — skipping PDF generation.");
  process.exit(0);
}

if (!existsSync(htmlPath)) {
  console.error(`generateCapstonePdf: missing ${htmlPath}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

const userDataDir = mkdtempSync(path.join(os.tmpdir(), "capstone-pdf-"));
const chromeArgs = [
  `--user-data-dir=${userDataDir}`,
  "--headless=new",
  "--disable-gpu",
  "--no-sandbox",
  "--disable-dev-shm-usage",
  "--no-pdf-header-footer",
  `--print-to-pdf=${outPdf}`,
  `file://${htmlPath}`,
];

try {
  // Chrome often keeps running after --print-to-pdf; timeout once the file exists.
  const result = spawnSync(chrome, chromeArgs, {
    stdio: "inherit",
    timeout: 20_000,
    killSignal: "SIGKILL",
  });

  if (!pdfLooksValid()) {
    if (result.error) throw result.error;
    if (result.status !== 0) {
      throw new Error(`Chrome exited with status ${result.status ?? "unknown"}`);
    }
    throw new Error("PDF was not created");
  }

  console.log(`Wrote ${outPdf} (${statSync(outPdf).size} bytes)`);
} catch (error) {
  if (pdfLooksValid()) {
    console.warn("generateCapstonePdf: Chrome failed but valid PDF kept.", error);
    process.exit(0);
  }
  throw error;
} finally {
  rmSync(userDataDir, { recursive: true, force: true });
}
