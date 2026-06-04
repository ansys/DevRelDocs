# Documentation compliance report — DPF Onboarding 2026 R1 SP00

| Field | Value |
|-------|--------|
| **Package path** | `docs/dpf/dpf-onboarding/versions/2026.R1.SP00` |
| **Review date** | 2026-06-04 |
| **Reviewer** | Agent (`.github/AGENTS.md`) |

## Summary

**Needs Major Revisions**

The package is a well-structured **Library/SDK**-style onboarding guide (Markdown + `toc.yml`, no OpenAPI). Content is strong: clear chapter flow, hands-on Python exercises, licensing and installation coverage, and a single valid `toc.yml`. Several **portal and build blockers** remain: missing changelog, empty `summary` metadata, broken image paths (including missing screenshot assets), and metadata that lists **C++** while the body is overwhelmingly **Python**.

| Severity | Count (open) |
|----------|----------------|
| Must fix | 6 |
| Should fix | 5 |
| Nice to fix | 4 |

**Estimated effort:** 4–8 hours (metadata + changelog + image path/asset fixes dominate).

---

## Package classification (§0)

| Type | Applies | Evidence |
|------|---------|----------|
| **REST API** | No | No OpenAPI/Swagger spec; `doc_type` not `rest_api`. |
| **API** (prose wire API) | No | No protocol/message reference package; links out to DPF Framework docs. |
| **Library/SDK** | Yes | `docfx.json`, root `index.md`, `toc.yml`, getting-started-style chapters (`setting-up-dpf/`), narrative user guide and embedded Python exercises. |

**Sections applied:** §1 (general), §2 (metadata), §4 (library structure/content), §5.1–5.2 (structure, Markdown/TOC). §3 and §5.4 omitted (not REST/API reference).

---

## 1. General requirements

### 1.1 Style and writing — Warnings

**Strengths:**
- Clear, learner-oriented prose; active voice and present tense used consistently in most pages.
- Headings are generally sentence case and scannable.

**Issues:**

1. **Should fix (Quality)** — Workflow example uses an unlabeled fenced code block.
   - **Location:** `dpf-overview/what-is-dpf.md` (lines 36–42)
   - **Current state:** ` ``` ` without a language tag.
   - **Required action:** Use ` ```text ` or ` ```plaintext ` (or describe as a diagram/list).
   - **Reference:** [AGENTS.md §1.2](https://github.com/ansys/DevRelDocs/blob/main/.github/AGENTS.md)

2. **Nice to fix (Quality)** — Inconsistent step labeling (`Step1` vs `Step 1`).
   - **Location:** Multiple exercise sections (e.g. `dpf-data-fundamentals/how-to-interact-with-data.md`, `where-does-the-data-come-from.md`)
   - **Required action:** Standardize to `Step 1` for Google style consistency.

### 1.2 Quality assurance — Failed

**Strengths:**
- Each Markdown topic file has exactly one H1 as the first heading.
- Root `index.md` uses `# Introduction` as required for library packages.
- Code samples predominantly use ` ```python ` / ` ```bash ` / ` ```cmd `.

**Issues:**

1. **Must fix (Correctness)** — Broken relative image paths in `dpf-data-fundamentals/how-to-interact-with-data.md`.
   - **Location:** Lines 19, 51, 55, 59, 242, 250 (`../../images/...`)
   - **Current state:** From `dpf-data-fundamentals/`, `../../images` resolves above the package root (to `versions/`), not to `images/` in this package.
   - **Required action:** Change to `../images/...` for all six references.

2. **Must fix (Correctness)** — Referenced screenshot files are missing from the package.
   - **Location:** `how-to-interact-with-data.md` — `global_keyword_search.png`, `operator_doc_browse.png`, `operator_page.png`
   - **Current state:** Not present under `images/` (only `.drawio.svg` assets exist).
   - **Required action:** Add images to `images/` or remove/replace references.

3. **Must fix (Correctness)** — Root landing page stylesheet path is wrong.
   - **Location:** `index.md` line 30 — `href="../styles/nav-buttons.css"`
   - **Current state:** From package root, `../styles` points outside the version folder; should be `styles/nav-buttons.css`.
   - **Required action:** Fix href (other pages correctly use `../styles/` from subfolders).

4. **Should fix (Quality)** — Non-descriptive image alt text.
   - **Location:** `dpf-overview/how-dpf-works.md` (`alt text`), `dpf-overview/what-is-dpf.md` (`diagrama`)
   - **Required action:** Replace with meaningful descriptions (e.g. “DPF client-server architecture diagram”).

5. **Nice to fix (Quality)** — Several SVG assets under `images/` are unused (e.g. `field-display.drawio.svg`, `model-display.drawio.svg`, `exercise-operators.drawio.svg`).
   - **Required action:** Reference them in content or remove to avoid drift.

### 1.3 GitHub and version control — Passed

**Strengths:**
- Package lives in public `ansys/DevRelDocs` under standard `docs/.../versions/...` layout.

---

## 2. Metadata configuration — Failed

**Strengths:**
- `title`, `version`, `product`, and `physics` are populated; `product: DPF` and `physics: Multiphysics, Structures, Fluids` match `config/portal-metadata` term lists.
- Title avoids redundant “documentation” / “guide” wording.

**Issues:**

1. **Must fix (Policy)** — `summary` is empty.
   - **Location:** `docfx.json` → `build.globalMetadata.summary`
   - **Current state:** `""`
   - **Required action:** Add a brief package description for Dev portal landing/search (e.g. guided onboarding for DPF concepts, installation, and data fundamentals using PyDPF-Core).

2. **Must fix (Correctness)** — `programming language` metadata does not match package content.
   - **Location:** `docfx.json` — `"programming language": "C++"`
   - **Current state:** Installation, verification, and exercises use **Python** / PyDPF-Core; C++ is only mentioned as an alternate client link.
   - **Required action:** Set to `Python` per `config/portal-metadata/programming_language.yml` (or document a true multi-language package with balanced C++ content).

3. **Should fix (Policy)** — Metadata key uses spaced label `programming language`.
   - **Location:** `docfx.json`
   - **Required action:** Confirm against [metadata configuration](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/migrate-dev-portal/migrate-package/metadata.md) for the exact key name expected by migration (align with other DPF packages in this repo if they use a canonical form).

---

## 4. Library and SDK documentation — Warnings

### 4.1 File structure — Failed

**Strengths:**
- Root `index.md` and `toc.yml` present; logical chapter folders (`dpf-overview/`, `setting-up-dpf/`, `dpf-data-fundamentals/`).
- Each chapter folder has `index.md`.
- Dedicated `images/` directory with lowercase `.svg` extensions.
- File names use lowercase and hyphens.

**Issues:**

1. **Must fix (Policy)** — No changelog file.
   - **Location:** Package root (expected `changelog.md` or `changelog/changelog.md`)
   - **Current state:** No changelog in package or parent `dpf-onboarding` tree.
   - **Required action:** Add `changelog.md` with version **2026 R1** at top, dated entry, and Added/Changed sections per §3.3 / §4.6.

### 4.2 Index and introduction — Passed

**Strengths:**
- Root H1 is `# Introduction`.
- Landing page explains audience, time commitment, and three-chapter structure.
- Links to Dev portal and PyDPF external docs where appropriate.

**Issues:** None.

### 4.2.2 Platform overview — Warnings

**Strengths:**
- Client-server architecture explained in `dpf-overview/how-dpf-works.md` with diagram.

**Issues:**

1. **Should fix (Quality)** — Root introduction has no architecture diagram (diagram only in chapter 1).
   - **Location:** `index.md`
   - **Required action:** Optional: add a high-level diagram or link to `how-dpf-works.md#dpf-architecture-server-and-client` for §4.2.2 platform overview expectations.

### 4.3 Getting started — Passed

**Strengths:**
- `setting-up-dpf/` covers prerequisites, Python/venv, PyDPF install, server setup, licensing, and verification with runnable snippets.

**Issues:** None.

### 4.4 User guide — Passed

**Strengths:**
- Chapters progress from concepts → setup → data model → operators/workflows; exercises with expected outputs.

### 4.5 Usage examples — Passed

**Strengths:**
- Extensive inline Python exercises across `dpf-data-fundamentals/` (not a separate `examples/` tree, which is acceptable for onboarding).

### 4.6 Changelog — Failed

See §4.1 (missing file).

### 4.7 Reference documentation — Not applicable

Onboarding narrative; no generated API reference in this package. No action unless API surface is added later.

---

## 5. File structure and format

### 5.1 Directory organization — Passed

**Strengths:**
- Coherent onboarding layout; images centralized under `images/`.

### 5.2 Markdown packages (TOC) — Passed

**Strengths:**
- Exactly one `toc.yml` in the package.
- No duplicate `href` values in `toc.yml`.
- TOC order matches learning path (Introduction → overview → setup → data fundamentals).

**Issues:** None.

---

## 6–7. Pre-submission and post-migration

Not executed in this review. Recommend local Docfx build, Markdownlint, and Vale before migration PR.

---

## Action items

1. **Must fix** — Add `changelog.md` (or `changelog/changelog.md`) with 2026 R1 release notes.
2. **Must fix** — Populate `summary` in `docfx.json`.
3. **Must fix** — Correct `programming language` to `Python` (or substantiate multi-language scope).
4. **Must fix** — Fix `../../images/` → `../images/` in `how-to-interact-with-data.md`.
5. **Must fix** — Add missing PNG screenshots or remove broken image references.
6. **Must fix** — Fix `index.md` stylesheet path to `styles/nav-buttons.css`.
7. **Should fix** — Improve alt text on architecture/overview diagrams.
8. **Should fix** — Add language tag to workflow code fence in `what-is-dpf.md`.
9. **Should fix** — Confirm metadata key naming for programming language with portal guidelines.
10. **Should fix** — Consider architecture overview link/diagram on root `index.md`.
11. **Nice to fix** — Standardize `Step 1` labeling in exercises.
12. **Nice to fix** — Remove or use unused SVG assets in `images/`.
13. **Nice to fix** — Run Vale/Markdownlint/Docfx locally and resolve warnings before submit.

---

## Sign-off

| Field | Value |
|-------|--------|
| **Reviewer** | Agent |
| **Review date** | 2026-06-04 |
| **Approval status** | **Not Approved** (open Must fix items) |
| **Next review** | After Must fix items are addressed |
