const fs = require("fs");
const path = require("path");

const requiredFiles = [
  "ransomware-readiness-check/index.html",
  "ransomware-readiness-check/styles.css",
  "ransomware-readiness-check/script.js"
];

for (const file of requiredFiles) {
  const fullPath = path.join(process.cwd(), file);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing required file: ${file}`);
  }
}

const html = fs.readFileSync(
  path.join(process.cwd(), "ransomware-readiness-check/index.html"),
  "utf8"
);

const requiredCopy = [
  "Could Your Business Recover From a Ransomware Attack?",
  "Start the Free Check",
  "Download your ransomware readiness report",
  "Download Report",
  "Request a Free Review"
];

for (const text of requiredCopy) {
  if (!html.includes(text)) {
    throw new Error(`Missing expected page copy: ${text}`);
  }
}

console.log("Build check passed: ransomware readiness page is present.");
