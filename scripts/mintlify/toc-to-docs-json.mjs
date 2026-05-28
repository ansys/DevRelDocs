#!/usr/bin/env node
/**
 * Convert a DocFX toc.yml into Mintlify navigation (groups/pages).
 *
 * Usage:
 *   node toc-to-docs-json.mjs <package-dir> [--out <file.json>]
 *
 * Example:
 *   node toc-to-docs-json.mjs ../../docs/dpf/dpf-framework/versions/2027.R1.SP01 \
 *     --out ../../navigation/dpf-framework-2027-r1-sp01-groups.json
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "../..");

const COLLAPSED_GROUPS = new Set([
  "Operator specifications",
  "averaging",
  "compression",
  "mapping",
  "mesh",
  "min_max",
  "result",
  "serialization",
  "utility",
]);

function parseArgs(argv) {
  const args = { packageDir: null, out: null };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === "--out" && argv[i + 1]) {
      args.out = argv[++i];
      continue;
    }
    if (!argv[i].startsWith("-")) {
      args.packageDir = argv[i];
    }
  }
  return args;
}

/** Repo-relative Mintlify page path (no extension). */
function hrefToPage(href, contentPrefix) {
  const slug = href.replace(/\.mdx?$/i, "");
  return `${contentPrefix}/${slug}`.replace(/\/+/g, "/");
}

function shouldCollapse(name) {
  return COLLAPSED_GROUPS.has(name);
}

function convertItems(items, contentPrefix) {
  const pages = [];
  for (const item of items) {
    const converted = convertNode(item, contentPrefix);
    if (converted !== null) {
      pages.push(converted);
    }
  }
  return pages;
}

function convertNode(item, contentPrefix) {
  const { name, href, items } = item;

  if (items?.length) {
    const childPages = convertItems(items, contentPrefix);
    const group = {
      group: name,
      pages: childPages,
    };
    if (href) {
      group.root = hrefToPage(href, contentPrefix);
    }
    if (shouldCollapse(name)) {
      group.expanded = false;
    }
    return group;
  }

  if (href) {
    return hrefToPage(href, contentPrefix);
  }

  return null;
}

function tocToGroups(toc, contentPrefix) {
  return convertItems(toc, contentPrefix);
}

function packageDirToContentPrefix(packageDirAbs) {
  const rel = packageDirAbs
    .replace(/\\/g, "/")
    .replace(`${REPO_ROOT}/`.replace(/\\/g, "/"), "");
  return rel;
}

function main() {
  const { packageDir, out } = parseArgs(process.argv);
  if (!packageDir) {
    console.error(
      "Usage: node toc-to-docs-json.mjs <package-dir> [--out <groups.json>]"
    );
    process.exit(1);
  }

  const packageDirAbs = resolve(REPO_ROOT, packageDir);
  const tocPath = join(packageDirAbs, "toc.yml");
  const toc = parseYaml(readFileSync(tocPath, "utf8"));
  const contentPrefix = packageDirToContentPrefix(packageDirAbs);
  const groups = tocToGroups(toc, contentPrefix);

  const outPath = out
    ? resolve(REPO_ROOT, out)
    : join(packageDirAbs, "mintlify-groups.json");

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, `${JSON.stringify(groups, null, 2)}\n`, "utf8");

  const pageCount = JSON.stringify(groups).split('"group"').length - 1;
  console.log(`Wrote ${groups.length} top-level nav entries to ${outPath}`);
  console.log(`Content prefix: ${contentPrefix}`);
  console.log(`(includes ${pageCount}+ nested groups)`);
}

main();
