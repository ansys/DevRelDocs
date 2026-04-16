# Documentation compliance report — Explore Service API (AVX Architecture V2)

**Rubric:** `2026R1/AVX_Autonomy_REST_API-26-r1/AVX_Explore_Service_API_V1_ArchV2/AGENTS.md` (Part 2; same rule set as `2026R1/adr-26-r1/AGENTS.md` when present in the repo)  
**Package path:** `2026R1/AVX_Autonomy_REST_API-26-r1/AVX_Explore_Service_API_V1_ArchV2`  
**Review date:** 2026-04-16  
**Reviewer:** Automated compliance pass  

---

## Package classification

**REST API** — OpenAPI **3.1** spec: `explore.aws-pre-prod-api-v1.json` (`openapi` root, `info.title` / `info.version` / `info.description` present).

**Library/SDK** (supplementary) — `intro_archv2_explore.md` documents Python packages (`ansys-api-avxcelerate-autonomy`, `ansys-avxcelerate-autonomy`), install, and a usage sample. Not a standalone library reference package; review focuses on that chapter only.

**Evidence:** Spec path above; prose intro and changelog; Python helper and code example in intro.

---

## Checklist — REST API

| Topic | Status | Notes |
|-------|--------|--------|
| §2.1 REST metadata split | **Fail** | No **`docfx.json`** in package. Cannot verify `doc_type: rest_api`, `product`, `summary`, `physics` in `build.globalMetadata` or alignment with `info.*` in the spec. |
| §3.1 Landing + changelog files | **Fail** | No **`index.md`** or **`changelog.md`** at package root. Files present: `intro_archv2_explore.md`, `changelog_explore_service.md` — rename or wire via `toc.yml` / build to match Dev portal conventions. |
| §3.2 Intro / protocol / testing | **Warning** | Intro states REST and features; **no** explicit Dev portal try-it note, **no** curl/Postman section; base URLs appear in Python example only. |
| §3.2 Auth | **Partial** | Spec uses **`HTTPBearer`**. Intro uses `TokenProvider` / `AuthClientSession` in Python; raw bearer usage for REST clients not fully spelled out in prose. |
| §3.3 Changelog | **Warning** | `changelog_explore_service.md` is feature-oriented; **no** Added/Changed/Deprecated/Removed/Fixed buckets; version narrative mixes **2025 R2** with API **v0.1.0**. |
| §3.4 OpenAPI — `info` | **Pass** | `title`, `version`, `description` populated. |
| §3.4 — Global `tags` | **Warning** | Operations use tag names (**`health`**, **`jobs`**, etc.) but there is **no** top-level **`tags`** array with **descriptions** per tag (rubric §3.4.2). |
| §3.4 — Descriptions | **Warning** | Many **`description`** fields embed **`:param` / `:return:`** style text (Python docstring leakage); better as OpenAPI-native prose. |
| §3.4 — Examples | **Warning** | Spot-check: responses/schemas present; **request/response examples** are not consistently **realistic** (often schema-only); strengthen per guidelines. |
| §5.1 / §5.2 structure | **Fail** | No **`toc.yml`**. Package `AGENTS.md` expects **exactly one** `toc.yml` for Markdown navigation when used as a doc package. |
| §5.4 OpenAPI artifact | **Partial** | File is well-formed JSON and structured; **schema validation** (CLI validator) not run in this pass. |

---

## Checklist — Library/SDK (Python helper only)

| Topic | Status | Notes |
|-------|--------|--------|
| §4.3 / §4.5 — Install & example | **Partial** | Prerequisites and `pip install` steps present; **registry URL** / `--extra-index-url` example should be verified (link form and path). |
| §4 — Code quality | **Warning** | Python sample in `intro_archv2_explore.md` is **not valid Python** as written (body of `main()` not indented; angle brackets around URL string). |
| §1.1 Style | **Warning** | Typo **“Regsitry”**; heading stack starts at `##` without a single `#` title line. |

---

## Cross-cutting — §1 General requirements

| Area | Status | Notes |
|------|--------|--------|
| 1.1 Style | Partial | See typos and docstring-style API descriptions above. |
| 1.2 QA | Partial | Markdown link syntax on pip line mixes bracket URL with markdown link; run Markdownlint/Vale/Docfx when wired. |

---

## Executive summary

| Item | Result |
|------|--------|
| **Overall assessment** | **Needs major revisions** for Dev portal packaging (**`docfx.json`**, **`index.md`**, **`changelog.md`**, **`toc.yml`**) plus OpenAPI and intro polish. |
| **Strengths** | Solid **OpenAPI 3.1** coverage with security scheme, paths, components, validation error responses on sampled operations. Intro explains product features and provides a Python integration path. |
| **Estimated fix effort** | ~2–5 days to add portal metadata/navigation, normalize filenames, add global tag docs, curl/Postman/auth prose, fix Python sample, and run OpenAPI + Docfx validation. |

---

## Detailed findings (selected)

1. **High — Missing portal scaffold** — Add **`docfx.json`** with `doc_type: rest_api`, `product`, `summary`, `physics` per taxonomy; add **`toc.yml`** (single file, no duplicate `href`, quote `name` if needed); standardize **`index.md`** and **`changelog.md`** or document why alternate names are required and how the build maps them.

2. **Medium — OpenAPI tag documentation** — Add root-level **`tags`** with **`name`** and **`description`** for **`health`**, **`jobs`**, and any other operation tags.

3. **Medium — Description cleanup** — Replace **`:param` / `:return:`** fragments in **`description`** fields with concise OpenAPI-oriented text.

4. **Medium — Intro** — Add **curl** (or equivalent) for **`/health`** or **`GET /jobs`** with bearer token; clarify **test/production** URLs and whether the API is exercisable from the Dev portal.

5. **Medium — Python example** — Fix indentation and string literals in **`intro_archv2_explore.md`** so the sample is copy-paste runnable.

6. **Low — Changelog** — Add release date and categorized bullets; align **product release** vs **`info.version`** messaging.

---

## Action items (priority)

1. **[P1]** Add **`docfx.json`**, **`toc.yml`**, **`index.md`**, **`changelog.md`** (or approved equivalents documented in build).  
2. **[P1]** Validate **`physics`** / **`product`** against `Markdown/taxonomies`.  
3. **[P2]** OpenAPI: global **`tags`**; scrub **`:param`** style descriptions; add examples where useful.  
4. **[P2]** Intro: REST auth for raw HTTP clients; curl/Postman; fix Python sample and typos.  
5. **[P3]** Run OpenAPI validator, Docfx, link check; align changelog structure.  

---

## Sign-off

- **Approval status:** **Not approved** — packaging and metadata gaps must be closed before publication.  
- **SME review:** Required for URL bases, auth flow, and pip/registry accuracy.  

---

*Non-applicable classification for this package: **API** (OpenAPI is the reference). That checklist is omitted per package `AGENTS.md`.*
