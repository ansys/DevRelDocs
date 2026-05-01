# Documentation compliance report — Sensor Layouts (2026 R1 SP00)

**Package path (repo root):** `docs/avxcelerate/sensors/sensor-layouts/versions/2026.R1.SP00`  
**Review date:** 2026-04-17 (revised per **§3.1.1 REST API** file layout in AGENTS.md)  
**Reviewer:** Agent (AGENTS.md rubric)

## Package classification (§0)

| Type | Applies | Evidence |
|------|---------|----------|
| **REST API** | Yes | `SensorLayout_v3_261.json` root `openapi: 3.0.4`; `docfx.json` `doc_type: rest_api` |
| **API** | No | OpenAPI is the authoritative reference for this delivery |
| **Library/SDK** | No | No language SDK surface in this folder |

**OpenAPI validation (§5.4):** `SensorLayout_v3_261.json` validates with `@apidevtools/swagger-cli` (structurally valid OpenAPI 3.x).

**REST API file layout note:** Per **§3.1.1**, **REST API-only** packages **do not** require **`index.md`** or **`toc.yml`**. This package correctly omits them.

---

## Summary

- **Overall assessment:** **Needs major revisions** (§0.7: multiple **Must fix** items remain).
- **Strengths:** Descriptive Markdown present under `description/` with any filename; clear REST introduction; concrete curl/Postman examples with realistic UUIDs and layout JSON; OpenAPI schemas are detailed for core layout types; changelog content documents breaking changes; Dev portal testability called out; physics taxonomy term matches repo YAML.
- **Open Must fix / Should fix:** See Detailed findings and action items below.
- **Estimated effort:** ~1–2 days to resolve **Must fix** items (metadata, auth, POST vs spec, root `changelog.md`); additional time for **Should fix** OpenAPI completeness.

---

## Detailed findings

### §2 Metadata — Status: Warnings

**Strengths:**

- `docfx.json` includes `doc_type`, `product`, `summary`, and `physics` under `build.globalMetadata`.
- OpenAPI `info.title`, `info.description`, and `info.version` are populated.

**Issues:**

1. **Must fix (Policy)** — `docfx.json` **`description`** text describes the wrong API (“AVxcelerate Asset Preparation API” / AVX assets and tracks) instead of Sensor Layouts.
   - **Location:** `docfx.json` → `build.globalMetadata.description`
   - **Current state:** Copy-paste mismatch with Sensor Layouts scope.
   - **Required action:** Replace with a summary that matches Sensor Layouts only (aligned with `summary` / OpenAPI `info.description`).
   - **Reference:** Part 2 §2.1 (REST metadata; package must not contradict itself).

2. **Should fix (Policy)** — **`product`** value `AVxcelerate Sensors` does not appear verbatim in `Markdown/taxonomies/product.yml` on this branch (closest listed term is `AVxcelerate Sensors Simulator API 2023 R2`).
   - **Location:** `docfx.json` → `product`
   - **Required action:** Confirm with portal taxonomy owners; use an allowed term or extend `product.yml` per process.

### §3.1.1 REST API file structure — Status: Warnings

**Strengths:**

- **OpenAPI** reference file is present: `SensorLayout_v3_261.json`.
- **Descriptive Markdown** (any title allowed): `description/AVX_REST_APIs_desc_content_sensor_layouts.md` covers introduction, resources, requests, and responses.
- **`index.md`** and **`toc.yml`** are absent; for **REST API-only** this is **expected**, not a defect (**§3.1.1**).

**Issues:**

1. **Must fix (Policy)** — **`changelog.md`** must exist at the **package root** (**§3.1.1**). The package only has `changelog/Sensor_Layouts_API_Changelog_v3_261.md`.
   - **Location:** package root vs `changelog/`
   - **Required action:** Add root **`changelog.md`** (migrate, symlink, or duplicate content per repo convention) so the layout matches **§3.1.1**.

### §3.2 Descriptive Markdown (`description/AVX_REST_APIs_desc_content_sensor_layouts.md`) — Status: Warnings

**Strengths:**

- Introduction, protocol (REST), ports, local server script, resources, platform overview, request examples, and response overview are present.
- Curl examples use plausible hosts, ports, UUIDs, and non-placeholder JSON (§3.2.5 / §3.4.3 intent).

**Issues:**

1. **Must fix (Correctness)** — **§3.2.4 Authenticate:** No section on authentication, credentials, or security expectations (API key, token, local-only trust boundary, etc.).
   - **Location:** `description/AVX_REST_APIs_desc_content_sensor_layouts.md`
   - **Required action:** Add an **Authenticate** (or equivalent) subsection: whether auth exists, how to obtain credentials if any, and safe-use notes for local TCP services.

2. **Must fix (Correctness)** — **POST** create-empty-layout example sends JSON `{"name": "..."}` in the body, but **`SensorLayout_v3_261.json`** defines **POST `/avx-sensorlabs/v3/sensorlayouts`** with **query** parameters `copyOf` and **`layoutName`** only and **no `requestBody`**.
   - **Location:** Markdown “POST request” vs `SensorLayout_v3_261.json` paths → `/avx-sensorlabs/v3/sensorlayouts` → `post`
   - **Required action:** Align Markdown and OpenAPI (either document `layoutName` as query in examples, or add `requestBody` to the spec if the server accepts JSON). Until aligned, developers copying the curl may get **400** or unexpected behavior.

3. **Should fix (Correctness)** — Platform overview image path **`images/Sensor_Layouts_API.png`** has **no `images/` directory** in this package.
   - **Location:** `description/AVX_REST_APIs_desc_content_sensor_layouts.md` (Platform overview)
   - **Required action:** Add the image under `images/` (lowercase extension per §1.2) or fix the path to the canonical asset location.

4. **Should fix (Quality)** — **Responses** table: `400` and `404` rows have empty descriptions; §3.2.6 expects meaningful entries or pointers to Problem Details.
   - **Location:** same Markdown file, Responses section

### §3.3 Changelog content — Status: Warnings

**Strengths:** Breaking changes and backward-compatibility notes are specific and useful.

**Issues:**

1. **Should fix (Quality)** — Opening line says **“Sensors API v3”** while the file is **Sensor Layouts**; typo **“contaning”** → “containing”.
   - **Location:** `changelog/Sensor_Layouts_API_Changelog_v3_261.md` (content to merge into root **`changelog.md`** per §3.1.1)
2. **Should fix (Quality)** — Rubric §3.3 expects dated versions and categorized entries (**Added** / **Changed** / …). This file is narrative-only.
   - **Required action:** When creating root **`changelog.md`**, add release date(s) and headings that match §3.3, or structure the merged document accordingly.

### §3.4 OpenAPI reference — Status: Warnings

**Strengths:** Endpoints have summaries; parameters and schemas are mostly documented; ProblemDetails referenced for several errors.

**Issues:**

1. **Should fix (Correctness)** — **Root-level `tags`** with **`name` + `description`** for each tag (§3.4.2) is missing; operations only reference `"SensorLayouts"` inline.
   - **Location:** `SensorLayout_v3_261.json` (no top-level `tags` array)

2. **Should fix (Quality)** — **Examples:** No **`example` / `examples`** on operations or schemas; §3.4.3 encourages authentic request/response samples (not generic `"string"` placeholders). Adding examples would improve portal UX.

3. **Should fix (Correctness)** — Some operations have **incomplete response coverage** (e.g. **POST `/sensorlayouts/packed`** documents `200` only; **GET** download `200` has no `content` type for the file payload). Expand per real API behavior.

4. **Nice to fix (Quality)** — Summary typo: **“List all sensors layouts”** → **“sensor layouts”**.
   - **Location:** `SensorLayout_v3_261.json` → `get` `/avx-sensorlabs/v3/sensorlayouts` → `summary`

---

## Action items

1. **Must fix** — Rewrite `docfx.json` `globalMetadata.description` for Sensor Layouts only (remove Asset Preparation wording). | Author | Low
2. **Must fix** — Add **`changelog.md`** at the package root per **§3.1.1** (incorporate or point to existing changelog content). | Author | Low
3. **Must fix** — Resolve **POST /sensorlayouts** body vs **layoutName** query mismatch between Markdown and OpenAPI; update spec and/or examples. | Author | Medium
4. **Must fix** — Add **authentication / security** guidance to narrative doc (or explicit “no auth” for local stack with caveats). | Author | Medium
5. **Should fix** — Validate **`product`** against `Markdown/taxonomies/product.yml` and adjust per taxonomy process. | Author | Low
6. **Should fix** — Add **`images/Sensor_Layouts_API.png`** (or correct path); flesh out response table; add OpenAPI **tags** descriptions, **examples**, and fuller error/content types where needed; tidy changelog title/typo/structure. | Author | Medium

---

## Sign-off

- **Reviewer:** Agent (automated rubric pass)
- **Review date:** 2026-04-17
- **Approval status:** **Not approved** (pending **Must fix** items above)
