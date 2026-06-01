const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");
const indexHtml = fs.readFileSync(indexPath, "utf8");
const footerMatch = indexHtml.match(/         <footer>[\s\S]*?         <\/footer>/);

if (!footerMatch) {
  throw new Error("Could not find canonical footer in index.html");
}

const footer = footerMatch[0];
const htmlFiles = fs.readdirSync(root).filter(file => file.endsWith(".html"));
let changed = 0;

for (const file of htmlFiles) {
  const fullPath = path.join(root, file);
  const html = fs.readFileSync(fullPath, "utf8");
  const updated = html.replace(/         <footer>[\s\S]*?         <\/footer>/, footer);
  if (updated !== html) {
    fs.writeFileSync(fullPath, updated);
    changed += 1;
  }
}

console.log(`Synced footer into ${changed} HTML files.`);
