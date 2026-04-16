# Documentation compliance report — ADR Websocket Server 2026 R1

**Rubric:** [`.github/AGENTS.md`](https://github.com/ansys/DevRelDocs/blob/main/.github/AGENTS.md) (Part 2)  
**Package path:** `2026R1/adr-26-r1`  
**Review date:** 2026-04-16  
**Reviewer:** Automated compliance pass  

---

## Package classification

**Applicable type:** **API** (protocol, messages, and behavior documented without an OpenAPI spec as the authoritative reference — here, mainly in Markdown topics such as `rest-api.md`).

**Evidence:** No OpenAPI/Swagger JSON or YAML in the package; `doc_type: rest_api` absent; primary API prose in `rest-api.md` and related topics.

---

## Checklist — API

| Topic | Status | Notes |
|-------|--------|--------|
| §2.1 `docfx.json` (Markdown metadata) | Partial | **Summary** empty (**fail**); **physics** / **product** need taxonomy confirmation. |
| §3.1 `index.md` / `changelog.md` | Partial | Present; both thin. |
| §3.2 Narrative API / intro | **Warning** | `index.md` short; `rest-api.md` needs try-it examples, response detail, errors. |
| §3.3 Changelog structure | **Warning** | No release date; no Added/Changed/Fixed buckets. |
| §3.6 Other protocols (as relevant) | Partial | WebSocket/tool behavior spread across topics; REST narrative is the main API surface. |

---

## Cross-cutting checklist

### §1 General requirements

| Area | Status | Notes |
|------|--------|--------|
| 1.1 Style | Partial | Long sentences; `Websocketserver` / `websocketserver` inconsistency. |
| 1.2 QA | Partial | Bare code fences in several topics; linters/Docfx not run in this pass. |

### §5 File structure and Markdown

| Area | Status | Notes |
|------|--------|--------|
| 5.1 Layout | Pass | Lowercase hyphenated Markdown names. |
| 5.2 `toc.yml` | **Warning** | Single `toc.yml`. **`name: Basic::operation`** should be **`Basic operation`** or a quoted `name`. |

---

## Executive summary

| Item | Result |
|------|--------|
| **Overall assessment** | **Needs minor revisions** (metadata, API prose, changelog, TOC label). |
| **Highest-priority issues** | Empty `docfx.json` **summary**; thin landing and REST narrative; **`toc.yml`** label `Basic::operation`. |
| **Estimated fix effort** | ~0.5–2 days including metadata, landing page, changelog, and REST examples. |

---

## Detailed findings

### Table of contents (`toc.yml`)

1. **[Severity: Medium] — `name` uses `::` and likely typo**
   - **Location:** `toc.yml` line 5: `name: Basic::operation`
   - **Required action:** Use `Basic operation` (match `basic-operation.md`) or `name: "…"` if `::` is intentional.
   - **Reference:** Package `AGENTS.md` (TOC `name` quoting).

### Metadata

- **`docfx.json`** line 5: **`summary`** empty.
- **`physics`:** `Shared Components` vs `Markdown/taxonomies/physics.yml` (e.g. `Shared Technology Components`).
- **`product`:** confirm `ADR Websocket Server` in `product.yml`.

### API content

- **`index.md`** minimal for a landing page.
- **`rest-api.md`** — security token documented; add curl/examples and response/error documentation where stable.
- **`http-server.md`** line 8 — **`\ref webcomponentviewer_api`** (Doxygen artifact).
- Bare **```** fences; copy nits in `external-services.md`, `internal-services.md`, `basic-operation.md`.

---

## Action items (priority)

1. **[P1]** **`docfx.json`:** fill **`summary`**; validate **`physics`** / **`product`**.  
2. **[P1]** **`toc.yml`:** fix **`Basic::operation`** label.  
3. **[P2]** Expand **`index.md`**, **`changelog.md`** (date + categories), **`rest-api.md`** (examples + responses).  
4. **[P3]** Fix **`\ref`**, code-fence languages, copy-edit; run Markdownlint, Vale, Docfx, link check.  

---

## Sign-off

- **Approval status:** **Not approved** until P1 and main API doc gaps are addressed.  
- **SME review:** Recommended for ports, security token, and EnSight integration.  

---

*Follows §8 output shape in `.github/AGENTS.md`. Non-applicable classifications (**REST API**, **Library/SDK**) are omitted per package `AGENTS.md`.*
