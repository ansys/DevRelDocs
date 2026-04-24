# Ansys developer documentation — agent instructions

Use this file to drive an AI assistant that helps authors meet **Ansys developer documentation** requirements for the Dev portal. **Part 2** is the full compliance rubric (style, structure, API reference, metadata, and review output format).

## Part 1 — Agent behavior

### Reviews

1. **Classify the package first** using **§0 Package classification** in Part 2. There are **three primary documentation types**: **REST API** (OpenAPI/Swagger spec as reference), **API** (protocol and messages documented without that spec as the source of truth — often Markdown or equivalent prose), and **Library/SDK** (language-specific surface: classes, structs, functions, samples). Pick the type(s) that apply; see **§0** for detection rules and the rubric map.
2. Apply **Part 2** in order, but **only the sections that apply** to that classification (see **§0.5**). For example, **do not** apply **§3.4** or the REST **§2.1** metadata split unless the package is classified as **REST API**. **Do not** require full **§4** for **REST API** or **API** unless the package also documents a **Library/SDK**.
3. Be specific: cite paths, quote short excerpts where helpful, and recommend concrete edits.
4. **Tag every finding** with exactly one **severity** from **§0.7** (**Must fix**, **Should fix**, or **Nice to fix**). Optionally add a **category** (**Policy**, **Correctness**, **Quality**) when it clarifies why the issue matters.

### Finding severity

Compliance reviews, narrative feedback, and **`documentation-compliance-report.md`** must apply **§0.7** consistently: each **issue** and each **action item** gets one severity; optional **category** labels supplement but do not replace severity.

### Compliance report

When the user asks for a compliance check, self-review, or pre-PR verification, create or update **`documentation-compliance-report.md`** in the **root of the documentation package** under review (the folder that contains **`docfx.json`** and, for **API** / **Library/SDK** packages, usually **`index.md`** as well).

- **Do not** add that file to **`toc.yml`** or the product landing page unless the team wants it on the portal.
- **Include:** title; metadata (package path relative to the repo root, ISO date); summary (Approved / needs minor or major revisions) **aligned with §0.7**; **package classification per §0** (which of **REST API**, **API**, and **Library/SDK** **apply**, with evidence); **checklists and findings only for applicable types** — omit sections and table rows for types that do not apply (do not fill the report with “N/A” for irrelevant categories); scope; numbered action items **each prefixed with Must fix, Should fix, or Nice to fix**. For narrative structure, follow **section 8 — Review output format** in Part 2.

### Extra reading (optional)

- [Documentation compliance checklist](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/common-practices/documentation-checklist.md) (short human-oriented list; Part 2 remains authoritative for the agent).

Section **9. Additional resources** in Part 2 links to Markdown, style, linters, Docfx, metadata, and terminology topics.

### Metadata and taxonomies

Check titles, versions, **physics**, and **programming language** against the taxonomy YAML shipped with the documentation repo (typically under **`Markdown/taxonomies`** on the branch in use).

### Linters and builds

Encourage Vale, Markdownlint, OpenAPI validation, link checks, and local Docfx where they apply. This agent **complements** those checks; it does not replace them.

### Table of contents (`toc.yml`)

**REST API-only** packages (§0) **do not** require **`toc.yml`** or a root-level **`index.md`**. For REST API-only layout expectations, require **`description/index.md`** and **`changelog/changelog.md`** instead (with **`docfx.json`** and the OpenAPI/Swagger spec at package root). Apply the checks below only when the package **includes** a **`toc.yml`** (typical for **API** and **Library/SDK** Markdown layouts, and for **hybrid** packages that ship a library TOC).

When the package uses **`toc.yml`**, verify the following (see also **§5.2**):

1. **Single file** — Search the **entire documentation package** directory tree (the folder that contains **`docfx.json`**). There must be **exactly one** `toc.yml`. More than one `toc.yml` is an **error** unless the repository’s build explicitly documents an exception; flag duplicates with paths.
2. **No duplicate targets** — Collect every **`href`** in the TOC (including **nested** entries under `items` or equivalent structure). The same **`href`** must **not** appear more than once. Duplicate links are an **error** (they confuse navigation and can break ordering expectations).
3. **Quoting `name` values** — If a **`name`** string contains characters that are special in YAML or hard to read unquoted, wrap it in **double quotes**. Examples that should be quoted: colons used as part of the title (e.g. `Topic: overview`), **double colons (`::`)**, hash **`#`**, braces, brackets, leading/trailing spaces, or embedded quotes. Prefer plain titles without exotic punctuation when possible; if you keep them, **quote** the `name` value.

### Where to store this file

Put it where your tool loads repo-wide agent rules—commonly **`.github/AGENTS.md`** next to the documentation you are editing.

---

## Part 2 — Technical review rubric

### Purpose

This agent performs systematic technical reviews of API, library, and SDK documentation packages to ensure compliance with Ansys developer documentation guidelines before publication to the Dev portal.

### Scope

Documentation packages fall into **three API / developer-doc types** (see **§0** for how to tell them apart):

1. **REST API** — HTTP REST surface documented with a **machine-readable OpenAPI (or Swagger) JSON/YAML** file and portal metadata rules for `rest_api`.
2. **API** — **No OpenAPI file** as the authoritative reference (or OpenAPI is not how the portal builds this package’s reference). The **protocol**, **messages** (fields, types, required/optional), **formats**, and behavior are documented — **typically in Markdown** (and optional diagrams). Examples: narrative REST, custom binary/text protocols, gRPC/Protobuf **described in prose** (or generated from `.proto` into Markdown), OSC, etc. Use **§3.6** for non-HTTP/non-gRPC-native layouts; **§3.5** when review targets **`.proto`** as reference.
3. **Library/SDK** — **Language-dependent** developer surface: **classes**, **structs**, **functions**, modules, and usage samples; reference is often generated (Doxygen, docfx API, etc.) or hand-written. An **SDK** is typically broader than a single library (multiple components + examples).

**Hybrid packages** (e.g. OpenAPI **and** a client library) combine types; apply every checklist that matches a delivered surface.

### Review instructions

When reviewing documentation, systematically evaluate each section below. Provide specific feedback with:
- Clear identification of issues found, each labeled with **one severity** (**Must fix**, **Should fix**, **Nice to fix**) per **§0.7**, and optionally a **category** (**Policy**, **Correctness**, **Quality**)
- References to specific files and line numbers where applicable
- Actionable recommendations for fixes
- Recognition of areas that meet or exceed guidelines

**Important:** Complete **§0 Package classification** before scoring §2–§5 so **REST API** rules are not applied to **API** or **Library/SDK** packages (and vice versa).

---

## 0. Package classification (mandatory first step)

Determine the **documentation package classification(s)** before applying the rest of Part 2. The three categories are **REST API**, **API**, and **Library/SDK**; use the decision flow below, then **§0.5** for which rubric sections apply.

### 0.1 REST API

**Definition:** HTTP REST (or REST-like) API where the **authoritative reference** is a **machine-readable OpenAPI or Swagger** file (JSON or YAML).

**How to detect:**

- Search the package tree for **`.json`** / **`.yaml`** / **`.yml`** whose root has **`openapi`** (3.x) or **`swagger`** (2.x). Common names: `openapi.json`, `swagger.json`, paths under `api/`, `spec/`, `openapi/`, etc.
- Check **`docfx.json`** (and build config) for references to that file.
- **`doc_type: rest_api`** in `docfx.json` strongly implies **REST API**; if set **without** a spec, flag the mismatch.

**Checklist focus:** §2.1 REST metadata split (`docfx.json` + **`info`** in spec), **full §3** including **§3.4** and **§3.1 REST API file layout** (no root `index.md` / `toc.yml` requirement; require `description/index.md` and `changelog/changelog.md`), **§5.4** OpenAPI validation.

### 0.2 API

**Definition:** The integration surface is an **API** (HTTP, WebSocket, custom wire format, files, etc.), but the **authoritative reference is not OpenAPI** for this package. Documentation covers **protocol**, **message** layouts (fields, types, required vs optional), **serialization**, **errors**, and **examples** — **usually in Markdown** (or equivalent prose/diagrams).

**Examples:** `rest-api.md`-style narrative REST; EnSight-style tool APIs; proprietary request/response schemas; **gRPC** concepts in prose while **§3.5** applies when **`.proto`** files are the reviewed artifact.

**How to detect:** No OpenAPI root file in package (or not used); substantive API prose in `.md`; optional `.proto` or schema files **without** classifying the package as **REST API**.

**Checklist focus:** §2.1 **Markdown** metadata (not the REST/OpenAPI split unless **REST API** also applies). **§3.1–§3.3**, **§3.2** where relevant (e.g. HTTP auth, examples). **§3.6** for non-HTTP / “other” protocols. **§3.5** for **Protobuf/gRPC** reference review when protos are in scope. **Do not** apply **§3.4** (OpenAPI field-by-field) or **§5.4** unless an OpenAPI file is actually part of the deliverable.

**Quality bar:** Messages and fields should be as **complete** as practical—similar intent to OpenAPI, but in prose/tables/diagrams rather than a spec file.

### 0.3 Library/SDK

**Definition:** Developers consume a **programming-language API**: **classes**, **structs**, **functions**, namespaces, modules, **build/install**, **samples**. Reference may be generated (e.g. Doxygen, API doc) or written by hand.

**How to detect:** `getting-started/`, `api-reference/`, language-specific examples; generated XML/Markdown API converted for migration; primary value is “how to call code,” not “how to call HTTP endpoints” (unless hybrid).

**Checklist focus:** **§4** (structure, getting started, user guide, examples, reference for types/members). **§2.1** Markdown metadata (including content converted from Doxygen) and **§5.3** conversion checks where applicable. **§3** only if the same package documents a **separate** wire API (hybrid).

### 0.4 Additional signals and hybrids

- **Doxygen:** content is converted to Markdown and reviewed as a Markdown package; use §5.3 conversion checks where applicable.
- **gRPC:** If review is **proto source** → **§3.5**. If only Markdown narrative → **API** + §3.6-style completeness for messages.
- **Hybrid:** **REST API** **+** client library → **REST API** **+** **Library/SDK** (both §3.4 and §4 where relevant). **API** (prose) **+** small utility library → **API** + applicable §4 sections.

### 0.5 Which sections of Part 2 apply (summary)

| Classification | §2 Metadata | §3 | §4 | §5.4 OpenAPI |
|----------------|-------------|-----|-----|----------------|
| **REST API** | REST split (`docfx.json` + spec `info`) | Full, incl. **§3.4** | Only if **Library/SDK** also documented | **Yes** |
| **API** | Markdown (§2.1) | §3.1–§3.3, §3.2 as fits; **§3.5** or **§3.6** as fits; **not §3.4** | Only if **Library/SDK** also documented | **No** |
| **Library/SDK** | Markdown (including Doxygen-converted content) | Only if a wire API is also documented (narrative subsets) | **Full §4** | Only if OpenAPI bundled |

When in doubt, state **ambiguous** classification in **`documentation-compliance-report.md`** and list evidence.

### 0.6 Rules for the agent

1. In **`documentation-compliance-report.md`**, record **only the documentation type(s) that apply** (**REST API**, **API**, **Library/SDK**), with **evidence** (OpenAPI path, API topic paths, primary language, and relevant metadata fields). **Do not** add sections, table rows, or “N/A” blocks for types that do not apply.
2. **Never** require **§3.4** for **API** or **Library/SDK** unless **REST API** also applies (OpenAPI present and in scope).
3. **Always** require **§3.4** and the **§2.1 REST/OpenAPI metadata split** when **REST API** applies.
4. For **API**, treat **message and protocol completeness** in documentation as the core review—comparable thoroughness to OpenAPI, without requiring OpenAPI files.

### 0.7 Finding severity and categories (mandatory tagging)

Assign **exactly one severity** per issue and per action item. Do not mix severities for a single bullet (split into separate items if needed).

**Severities**

| Severity | Use when | Effect on overall summary |
|----------|----------|---------------------------|
| **Must fix** | Violates an explicit rubric or portal requirement; breaks build, metadata, or taxonomy contracts; invalid or missing OpenAPI where required; or would **materially mislead** developers (wrong auth, wrong endpoints, contradictory versions, unsafe guidance). | **Not Approved** / **Needs Major Revisions** while any **Must fix** remains open. |
| **Should fix** | Misses rubric expectations or clearly hurts completeness, accuracy, or usability; authors should resolve before release when practical. | Drives **Needs Major Revisions** if widespread or blocking key flows; otherwise **Needs Minor Revisions**. |
| **Nice to fix** | Polish, consistency, or optional improvements; does not block policy or correctness. | Cited under **Needs Minor Revisions** or recommendations; does not block **Approved** by itself. |

**Default mapping to summary line**

- **Approved** — no open **Must fix**; no **Should fix** that the reviewer treats as release-blocking (state explicitly if any **Should fix** is deferred).
- **Needs Minor Revisions** — no **Must fix**; one or more **Should fix** and/or **Nice to fix**.
- **Needs Major Revisions** — one or more **Must fix**, *or* enough **Should fix** items that the package is not ready as a whole.

**Optional category** (append when it helps triage; does not replace severity)

- **Policy** — metadata, taxonomy, `doc_type`, **`toc.yml`** rules, classification, repository or visibility expectations.
- **Correctness** — technical accuracy, API behavior, examples and schemas, links, OpenAPI vs prose alignment.
- **Quality** — style, structure, diagrams, narrative clarity, consistency.

**Example labels:** `Must fix (Policy):`, `Should fix (Correctness):`, `Nice to fix (Quality):`.

---

## 1. General Requirements

### 1.1 Style and Writing

**Review Criteria:**
- [ ] Documentation follows [Google developer documentation style guide](https://developers.google.com/style/)
- [ ] All headings and titles use sentence case
- [ ] Content uses active voice consistently (not passive)
- [ ] Content uses present tense (not future or past)
- [ ] Sentences are short and clear (aim for 15-20 words max)
- [ ] Technical terms are used consistently throughout all files
- [ ] Avoid using "we," "our," or "you" excessively
- [ ] Content is clear for the target audience level

**Review Actions:**
- Scan all Markdown files for passive voice constructions
- Check all headings for proper sentence case (first word capitalized, rest lowercase except proper nouns)
- Identify inconsistent terminology and suggest standardization
- Flag overly complex sentences that should be simplified

### 1.2 Quality Assurance

**Review Criteria:**
- [ ] Markdown files pass [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) validation
- [ ] Documentation passes [Vale](http://vale.sh/) linting with Google style guide rules
- [ ] All hyperlinks are functional (no 404 errors or broken internal links)
- [ ] Images display correctly with lowercase file extensions (`.png`, `.jpg`, NOT `.PNG`, `.JPG`)
- [ ] All images have descriptive alt text
- [ ] Code blocks specify language for proper syntax highlighting
- [ ] Documentation has been tested locally using Docfx

**Review Actions:**
- Run Markdownlint on all `.md` files and report violations
- Run Vale linting and report style violations
- Test all external links for accessibility
- Verify all internal links point to existing files/anchors
- Check image file extensions and naming conventions
- Verify code blocks have language identifiers (```python, ```json, etc.)

### 1.3 GitHub and Version Control

**Review Criteria:**
- [ ] Documentation is hosted on GitHub
- [ ] Repository is in the appropriate organization:
  - [ansys/DevRelDocs](https://github.com/ansys/DevRelDocs) for public documentation
  - [ansys-internal/DevRelDocs_internal](https://github.com/ansys-internal/DevRelDocs_internal) for internal documentation
- [ ] Pull request follows GitHub best practices (descriptive title, detailed description)
- [ ] Branch naming follows conventions

**Review Actions:**
- Verify repository location matches documentation visibility requirements
- Review PR description for clarity and completeness
- Check for appropriate reviewers assigned

---

## 2. Metadata Configuration

**Classification:** Use **§0** to decide which block below applies. Apply the **REST API** metadata split in §2.1 only when an OpenAPI/Swagger spec file is part of the package; otherwise use the **Markdown** metadata block (including content converted from Doxygen).

### 2.1 Required Metadata

**For Markdown documentation packages** (`docfx.json`, `build.globalMetadata`):
- [ ] **Title**: Clear package title with version number (e.g., "DPF C++ client library 2026 R1")
- [ ] **Title wording**: Avoid redundant words such as "documentation" or "guide" because the Dev portal context already provides this information
- [ ] **Version**: Package version string (e.g., "2026 R1")
- [ ] **Summary**: Brief description of this **documentation package** (not the commercial product description)
- [ ] **Physics**: Product collection term from [physics.yml](https://github.com/ansys/DevRelDocs/tree/main/Markdown/taxonomies)

**For Library/SDK content converted from Doxygen**:
- [ ] Apply the same Markdown metadata requirements above

**For HTTP / REST API packages**, metadata is **split** between **`docfx.json`** and the **REST API specification file** (JSON or YAML), per [metadata configuration](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/migrate-dev-portal/migrate-package/metadata.md):

**In `docfx.json`** (under `build.globalMetadata`):
- [ ] **doc_type**: Must be `rest_api`
- [ ] **product**: Product name (e.g. the offering or API product name); use valid terms from [product.yml](https://github.com/ansys/DevRelDocs/tree/main/Markdown/taxonomies) where applicable
- [ ] **summary**: Brief description of this **documentation package** (not the commercial product description); used on Dev portal landing pages
- [ ] **physics**: Product collection category from [physics.yml](https://github.com/ansys/DevRelDocs/tree/main/Markdown/taxonomies)

**In the REST API specification file** (OpenAPI `info` object):
- [ ] **title**: API name (with version as appropriate). For REST packages, the **documentation package title** is taken from **`info.title`**, not from `docfx.json`
- [ ] **version**: API / package version string. For REST packages, the **documentation package version** is taken from **`info.version`**, not from `docfx.json`
- [ ] **description**: Brief API description in **`info.description`** (OpenAPI)

### 2.2 Recommended Metadata

- [ ] **Programming language**: Language term from [programming_language.yml](https://github.com/ansys/DevRelDocs/tree/main/Markdown/taxonomies)
- [ ] **Optional fields** (**status**, **access control**, **author**, **date**, and so on) when the package uses them — see [metadata configuration](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/migrate-dev-portal/migrate-package/metadata.md)

**Review Actions:**
- Use **§0** to choose metadata rules before executing the bullets below.
- Verify metadata completeness in the correct files (`docfx.json` vs OpenAPI/YAML spec **only for REST API**)
- **For Markdown packages (including Doxygen-converted content):** Confirm required `globalMetadata` fields in §2.1, including **`summary`**
- **For REST API packages only:** Confirm `docfx.json` includes `doc_type`, `product`, `summary`, and `physics` in `build.globalMetadata`, and that `info.title`, `info.version`, and `info.description` are populated in the spec with no contradictory version or naming between files
- Check version numbering consistency across files
- Validate taxonomy terms (`physics`, `product`, `programming language`, and any optional fields in use) against the official YAML lists
- Ensure title formatting is consistent with conventions
- Ensure titles avoid redundant words such as "documentation" and "guide"

---

## 3. API Documentation Review

**Classification:** This section applies to packages that document a **wire API** under **REST API** or **API** (§0). For **Library/SDK**-only packages, skip most of §3 unless §0 identified a **hybrid** wire API; for **REST API**, include **§3.4**; for **API**, **omit §3.4** (see **§0.5**).

### 3.1 File Structure Requirements

**Classification:** Apply **only** the subsection below that matches **§0**.

#### 3.1.1 REST API packages

**Required deliverables:**
- [ ] **`docfx.json`** at the package root
- [ ] **OpenAPI or Swagger** spec file(s) at the package root that are the authoritative HTTP reference (see **§3.4**)
- [ ] **`description/index.md`** for REST API descriptive content (introduction, how to call the API, examples, and related guidance)
- [ ] **`changelog/changelog.md`** for release history

**Not required** for **REST API-only** packages: **`toc.yml`**, a root-level **`index.md`**, and an **`index.md`** in every subdirectory. Do not treat their absence as a defect unless **§0** also classifies the package as **API** (prose-only) or **Library/SDK** where those files apply.

**Review Actions:**
- Confirm `docfx.json` and OpenAPI/Swagger spec file are present at package root
- Confirm `description/index.md` exists and covers §3.2 expectations
- Confirm `changelog/changelog.md` exists
- Confirm the OpenAPI/Swagger file is present and referenced by the build if applicable
- Verify sensible naming (lowercase with hyphens preferred for new files)

#### 3.1.2 API packages (prose wire API, not OpenAPI-authoritative)

**Required files:**
- [ ] `index.md` exists at package root (landing page)
- [ ] Changelog file exists (`changelog.md` at root or `changelog/changelog.md`)

**Review Actions:**
- Verify both required files exist
- Check that `index.md` serves as effective entry point
- Verify file naming uses lowercase with hyphens

### 3.2 Descriptive Markdown content review

**Scope:** For **REST API**, apply §3.2 to **`description/index.md`** identified in **§3.1.1**. For **API** (§3.1.2), the primary target is typically **`index.md`**. Section headings below still name “Introduction,” “Platform overview,” and so on—regardless of the source file name.

#### 3.2.1 Introduction Section

**Required elements:**
- [ ] **Capabilities and features**: Clear description of what developers can do with the API
- [ ] **Protocol definition**: Explicitly states the protocol (REST, gRPC, HTTP, OSC, etc.)
- [ ] **Testing environment**: 
  - [ ] States if testable on Dev portal
  - [ ] Provides alternative testing options if not testable
  - [ ] Includes production environment information
  - [ ] Provides relevant URLs

**Review Actions:**
- Verify introduction clearly explains API purpose and value proposition
- Check that protocol is explicitly stated and accurately described
- Confirm testing information is complete and actionable

#### 3.2.2 Platform Overview Section

**Required elements:**
- [ ] **Explanatory diagram**: Visual showing API relationships with applications and services
- [ ] **Application development**: Description of applications developers can create
- [ ] **Communication flow**: Explicit explanation of communication pathways between applications and API/services

**Review Actions:**
- Verify diagram exists and clearly illustrates architecture
- Check that diagram uses consistent terminology with text
- Ensure application development section provides concrete examples
- Verify communication flow describes data exchange patterns

#### 3.2.3 Resources Section (REST APIs only)

**Scope:** Applies when the package documents an HTTP REST surface as **REST API** or **API**. For **REST API**, expectations should align with the OpenAPI spec. For **API** (narrative REST, etc.), treat as prose quality guidance (no requirement to mirror OpenAPI `tags`).

**Required elements:**
- [ ] Definition of all resources handled by API endpoints
- [ ] Clear explanation of resource relationships

**Review Actions:**
- Verify all endpoints reference defined resources
- Check resource definitions are clear and complete

#### 3.2.4 Authenticate Section

**Required elements:**
- [ ] **Authentication methods**: Specifies if API key, token, or bearer token required
- [ ] **Key/token retrieval**: Explicit step-by-step instructions for obtaining credentials
- [ ] Security best practices mentioned

**Review Actions:**
- Verify authentication method is clearly stated
- Check retrieval instructions are actionable and complete
- Ensure security considerations are addressed

#### 3.2.5 Send API Requests Section

**Required elements:**
- [ ] **curl examples**: Working examples with explanations
- [ ] **Postman examples**: Instructions and examples for Postman usage

**Review Actions:**
- Test curl examples for syntax correctness
- Verify examples use realistic data (not placeholder values)
- Check that Postman instructions are clear and complete
- Ensure examples cover common use cases

#### 3.2.6 Responses Section

**Required elements:**
- [ ] **Response table**: Table with response types, values, strings, and descriptions
- [ ] **Response format**: Explicitly states format (JSON, XML, etc.)
- [ ] **Pagination information**: If applicable, explains offset, limit, total parameters
- [ ] Error response examples

**Review Actions:**
- Verify response table includes all possible response codes
- Check that response format examples are accurate
- Verify pagination explanation is complete (if applicable)
- Ensure error responses are documented with examples

### 3.3 Changelog.md Content Review

**Required structure:**
- [ ] Latest version listed at the top
- [ ] Release dates included for each version
- [ ] Changes properly categorized:
  - [ ] **Added**: New features or functionality
  - [ ] **Changed**: Modifications to existing features
  - [ ] **Deprecated**: Features to be removed in future releases
  - [ ] **Removed**: Features that have been removed
  - [ ] **Fixed**: Bug fixes

**Review Actions:**
- Verify chronological ordering (newest first)
- Check that all versions have dates
- Ensure changes are categorized appropriately
- Verify entries are clear and specific (not vague)

### 3.4 REST API Reference Review

**Applies only to:** **REST API** (package includes an OpenAPI/Swagger spec). If the package is **API** only, skip this subsection entirely and review endpoints and messages in Markdown (§3.2, §3.6).

**JSON/YAML file requirements:**
- [ ] File follows [OpenAPI Specification](https://www.openapis.org/)
- [ ] File validates against OpenAPI schema
- [ ] Metadata properly configured in `info` object

#### 3.4.1 API Brief Description

- [ ] One-sentence summary in `description` field of `info` object
- [ ] Description is concise and clearly explains API purpose

**Review Actions:**
- Verify description field exists and is populated
- Check that description accurately summarizes API

#### 3.4.2 Endpoint Groups (Tags)

- [ ] Endpoints grouped logically by category using `tags` object
- [ ] Each tag has `name` and `description` fields populated
- [ ] Tag descriptions are clear and helpful

**Review Actions:**
- Verify logical grouping of related endpoints
- Check tag descriptions are meaningful
- Ensure all endpoints are tagged appropriately

#### 3.4.3 Endpoint Documentation

**For each endpoint:**
- [ ] **Summary**: 
  - [ ] Short but concise name
  - [ ] Uses sentence case
  - [ ] No period at end
  - [ ] Clearly conveys endpoint purpose
- [ ] **Description**: 
  - [ ] Detailed explanation of what endpoint does
  - [ ] Mandatory field is populated
- [ ] **Parameters**:
  - [ ] All parameters defined in `parameters` object
  - [ ] Each parameter has clear `description` field
  - [ ] Required vs. optional status is correct
  - [ ] Data types are accurate
  - [ ] Constraints are documented (min/max values, allowed values, etc.)
- [ ] **Responses**:
  - [ ] All possible HTTP response codes documented
  - [ ] Each response has descriptive content
  - [ ] Response schemas are accurate
- [ ] **Examples**:
  - [ ] Authentic request examples (not generic placeholders)
  - [ ] Authentic response examples (not generic placeholders)
  - [ ] Examples use realistic data demonstrating practical scenarios

**Review Actions:**
- Check every endpoint for complete documentation
- Verify parameter descriptions are clear and accurate
- Test that response schemas match example responses
- Flag generic examples like "string", "additionalProp1", etc.
- Verify examples demonstrate realistic use cases

**Example of good vs. bad response examples:**

**NOT RECOMMENDED:**
```json
{
  "id": "string",
  "name": "string",
  "additionalProp1": "string"
}
```

**RECOMMENDED:**
```json
{
  "id": "f52b570d-be6f-4fa8-92c4-9146047904da",
  "name": "Radar Sensor Configuration",
  "frequency": 77.5
}
```

### 3.5 gRPC API Reference Review

**Proto file requirements:**
- [ ] Documentation generated from [Protocol Buffers](https://protobuf.dev/)
- [ ] [protoc-gen-doc plugin](https://github.com/pseudomuto/protoc-gen-doc) used for Markdown generation
- [ ] Comments in Proto files are comprehensive
- [ ] All message fields documented in consistent manner

#### 3.5.1 File-Level Documentation

- [ ] File-level description comment at top of each `.proto` file
- [ ] Description explains file purpose and content

**Example:**
```proto
/**
 * Defines the user API for managing accounts and profiles.
 * Includes services for CRUD operations and user-related messages.
 */
```

#### 3.5.2 General Best Practices

- [ ] Related definitions grouped together logically
- [ ] Sections separated with descriptive comments
- [ ] Comments use `//` or `/** */` syntax (compatible with protoc-gen-doc)
- [ ] Markdown syntax used in comments where appropriate (bold, italic, lists, code)
- [ ] Mathematical formulas formatted correctly if used

#### 3.5.3 Message Documentation

**For each message:**
- [ ] Leading comment describes message purpose and usage
- [ ] Each field has clear description
- [ ] Field descriptions include:
  - [ ] Purpose of the field
  - [ ] Data type constraints
  - [ ] Default values (if applicable)
  - [ ] Required format (e.g., "must be valid email address")
  - [ ] Relationships to other messages (if applicable)

**Example:**
```proto
// A message that represents a user's profile.
message UserProfile {
    // The unique identifier for the user. Must be a positive integer.
    int32 id = 1;

    // The user's full name.
    string name = 2;

    // The user's email address. Must be in valid email format.
    string email = 3;
}
```

**Review Actions:**
- Verify all messages have descriptions
- Check all fields are documented
- Ensure comments follow consistent format
- Verify field constraints are clearly stated

#### 3.5.4 Enum Documentation

**For each enum:**
- [ ] Leading comment explains enum purpose and usage
- [ ] Each value has trailing or leading comment
- [ ] Zero value has suffix `UNSPECIFIED`
- [ ] Value names prefixed with enum name (for top-level enums)
- [ ] Values use semicolons (not commas)
- [ ] Naming uses UPPER_SNAKE_CASE

**Example:**
```proto
// Represents the user's account status.
enum AccountStatus {
    // Default value, used when no specific state is set.
    ACCOUNT_STATUS_UNSPECIFIED = 0;

    // The account is active and fully functional.
    ACCOUNT_STATUS_ACTIVE = 1;

    // The account is suspended due to violations.
    ACCOUNT_STATUS_SUSPENDED = 2;
}
```

**Review Actions:**
- Verify enum values follow naming conventions
- Check that zero value has _UNSPECIFIED suffix
- Ensure all values are documented
- Verify values end with semicolons

#### 3.5.5 Service Documentation

**For each service:**
- [ ] Service-level comment explains service role and workflow
- [ ] Each RPC method has description
- [ ] Method descriptions explain:
  - [ ] Method purpose
  - [ ] Expected request message
  - [ ] Returned response message
  - [ ] Any side effects or special behavior

**Example:**
```proto
// Provides operations for managing user accounts.
service UserService {
    // Creates a new user account.
    rpc CreateUser (CreateUserRequest) returns (CreateUserResponse);

    // Retrieves user information by ID.
    rpc GetUser (GetUserRequest) returns (GetUserResponse);
}
```

**Review Actions:**
- Verify all services have purpose descriptions
- Check all RPC methods are documented
- Ensure method documentation is clear and complete

#### 3.5.6 Naming Conventions

- [ ] Messages, enums, services use PascalCase
- [ ] Field names use lower_snake_case
- [ ] Oneof field names use lower_snake_case
- [ ] Extension names use lower_snake_case
- [ ] File names are descriptive and use snake_case (e.g., `user_service.proto`)
- [ ] Package names avoid collisions and use clear hierarchy (e.g., `com.example.user`)

**Review Actions:**
- Check all naming against conventions
- Flag any inconsistencies
- Verify file and package naming

#### 3.5.7 Comment Exclusions

- [ ] Internal comments that should not appear in docs use `@exclude` prefix

**Example:**
```proto
/**
 * @exclude
 * This comment won't be rendered in documentation.
 */
```

### 3.6 Other APIs Review

**For non-HTTP, non-gRPC APIs:**
- [ ] Protocol clearly defined and explained
- [ ] Data formats explicitly stated
- [ ] Markdown files describe all messages for API communication
- [ ] Each message field documented with:
  - [ ] Description
  - [ ] Type
  - [ ] Mandatory/optional status
- [ ] Protocol-specific details explained
- [ ] Communication patterns documented

**Review Actions:**
- Verify protocol explanation is clear and complete
- Check all messages are documented
- Ensure field documentation includes type and requirement status
- Verify examples demonstrate protocol usage

---

## 4. Library and SDK Documentation Review

**Classification:** Use **§0**. Full §4 applies to **Library/SDK** packages. For **REST API**-only deliveries, §4 is usually **not** required unless client libraries are documented. Hybrid packages (**REST API** + **Library/SDK**) require both §3 (with §3.4) and §4 where relevant.

### 4.1 File Structure Requirements

**Required files:**
- [ ] `index.md` exists at root level (landing page with introduction)
- [ ] Changelog file exists (`changelog.md` at root or `changelog/changelog.md`)

**Recommended structure:**
```
Documentation-package/
|-- index.md
|-- changelog.md
|-- getting-started/
|   |-- index.md
|   |-- prerequisites.md
|   |-- installation.md
|   `-- licensing.md
|-- user-guide/
|   |-- index.md
|   |-- basic-usage.md
|   |-- advanced-features.md
|   `-- troubleshooting.md
|-- examples/
|   |-- index.md
|   |-- example-1.md
|   `-- example-2.md
|-- api-reference/
|   `-- (generated documentation)
|-- images/
|   `-- (image files)
|-- toc.yml
`-- docfx.json
```

**Review Actions:**
- Verify required files exist
- Check directory structure is logical and organized
- Ensure each subdirectory has `index.md`
- Verify file names use lowercase with hyphens

### 4.2 Index.md Content Review

#### 4.2.1 Introduction Section

**Required elements:**
- [ ] High-level explanation of library or SDK purpose
- [ ] Main features described clearly
- [ ] Target audience identified
- [ ] Language and OS support clearly stated
- [ ] Library role explained (client, server, or both)

**Review Actions:**
- Verify introduction provides clear value proposition
- Check that supported languages/OS are explicitly listed
- Ensure installation requirements are mentioned

#### 4.2.2 Platform Overview

**Required elements:**
- [ ] Context and relationship with other services
- [ ] Explanatory diagram showing architecture
- [ ] Application development description (what can be built)
- [ ] Integration explanation (how library fits in ecosystem)

**Review Actions:**
- Verify diagram exists and is clear
- Check architecture explanation is complete
- Ensure integration guidance is provided

### 4.3 Getting Started Section

**Required elements:**
- [ ] **Dependencies and system requirements**:
  - [ ] Operating system requirements
  - [ ] Runtime dependencies
  - [ ] Compiler versions (if applicable)
  - [ ] Hardware requirements (if applicable)
- [ ] **Installation instructions**:
  - [ ] Step-by-step installation process
  - [ ] Installation verification steps
  - [ ] Multiple installation methods (if applicable): package manager, build from source
- [ ] **Development environment configuration**:
  - [ ] IDE setup guidance
  - [ ] Environment variables
  - [ ] Configuration file setup
- [ ] **Licensing considerations**:
  - [ ] License type
  - [ ] How to obtain license
  - [ ] License activation instructions

**Review Actions:**
- Test installation instructions for completeness
- Verify system requirements are accurate
- Check that configuration steps are clear
- Ensure licensing information is complete

### 4.4 User Guide Section

**Required elements:**
- [ ] Explains how to use the library or SDK
- [ ] Covers main concepts and workflows
- [ ] Includes best practices
- [ ] Addresses common scenarios
- [ ] Provides troubleshooting guidance

**Review Actions:**
- Verify user guide covers primary use cases
- Check that concepts are explained clearly
- Ensure workflow descriptions are step-by-step
- Verify troubleshooting section exists and is helpful

### 4.5 Usage Examples Section

**Required elements:**
- [ ] Comprehensive code examples
- [ ] Examples demonstrate various functions and classes
- [ ] Examples cover different scenarios
- [ ] Common use cases showcased
- [ ] Examples are working and tested
- [ ] Examples include expected output
- [ ] Code is well-commented

**Review Actions:**
- Verify examples are complete and runnable
- Check that examples cover diverse use cases
- Ensure code is properly formatted with syntax highlighting
- Verify examples follow coding best practices
- Test example code if possible

### 4.6 Changelog

Same requirements as API changelog (see section 3.3)

### 4.7 Reference Documentation Review

#### 4.7.1 Function Documentation

**For each function:**
- [ ] Purpose description
- [ ] Parameters documented with:
  - [ ] Name
  - [ ] Type
  - [ ] Description
  - [ ] Default value (if applicable)
  - [ ] Constraints
- [ ] Return value documented with:
  - [ ] Type
  - [ ] Description
  - [ ] Possible values
- [ ] Exceptions documented with:
  - [ ] Exception types
  - [ ] Conditions that trigger exceptions
- [ ] Usage example (if complex)

**Review Actions:**
- Check all public functions are documented
- Verify parameter documentation is complete
- Ensure return values are clearly described
- Verify exception handling is documented

#### 4.7.2 Class Documentation

**For each class:**
- [ ] Purpose description
- [ ] Inheritance relationships documented
- [ ] Constructor documented
- [ ] All public methods documented (see function documentation requirements)
- [ ] All public properties documented with:
  - [ ] Type
  - [ ] Description
  - [ ] Read/write access
- [ ] Class usage example

**Review Actions:**
- Check all public classes are documented
- Verify inheritance hierarchies are clear
- Ensure constructors are documented
- Verify all public members are documented

#### 4.7.3 Data Structures

- [ ] Each data structure documented
- [ ] All fields/members documented with:
  - [ ] Type
  - [ ] Description
  - [ ] Constraints
- [ ] Usage examples for complex structures

**Review Actions:**
- Verify all public data structures are documented
- Check field documentation is complete

#### 4.7.4 Consistency

- [ ] Naming conventions used consistently throughout
- [ ] Documentation format is consistent
- [ ] Terminology is consistent
- [ ] Code examples follow consistent style

**Review Actions:**
- Check for naming inconsistencies
- Verify consistent documentation structure
- Flag terminology variations

#### 4.7.5 Organizational Elements

- [ ] Class hierarchies documented (if applicable)
- [ ] Namespace information provided (if applicable)
- [ ] Module organization explained
- [ ] Component relationships described

**Review Actions:**
- Verify hierarchies are documented and visualized
- Check namespace documentation is complete
- Ensure module structure is clear

---

## 5. File Structure and Format Review

### 5.1 Directory Organization

**Classification:** Use **§0**. For **REST API-only** packages, follow **§3.1.1** (root **`docfx.json`** + OpenAPI spec, **`description/index.md`**, **`changelog/changelog.md`**); **do not** require **`toc.yml`**, a root **`index.md`**, or an **`index.md` in every subdirectory**.

**Review criteria (API, Library/SDK, and hybrid packages):**
- [ ] `index.md` at root level (required for **API** / **Library/SDK**; for **REST API-only**, use `description/index.md` per §3.1.1)
- [ ] Changelog file exists (required for **API** / **Library/SDK** at `changelog.md` root or `changelog/changelog.md`; for **REST API-only**, use `changelog/changelog.md` per §3.1.1)
- [ ] Related content in logical subdirectories
- [ ] Each subdirectory has `index.md` (expectation for **Library/SDK**-style trees; not for **REST API-only**)
- [ ] Images in dedicated `images/` directory
- [ ] File names use lowercase with hyphens (e.g., `getting-started.md`)

**Review Actions:**
- Map out directory structure
- Verify logical organization
- Check file naming conventions
- Ensure images are properly organized

### 5.2 Markdown Packages (API and Library/SDK)

**Does not apply to REST API-only packages** — those have no **`toc.yml`** requirement; use **§3.1.1** and **§5.4** instead.

- [ ] Files in logical directory structure
- [ ] `toc.yml` exists and is correct
- [ ] **Exactly one** `toc.yml` in the whole documentation package (see Part 1 — **Table of contents (`toc.yml`)**)
- [ ] No **duplicate** `href` values anywhere in `toc.yml` (including nested items)
- [ ] Every `name` that contains YAML-sensitive characters (e.g. `::`, `: ` patterns, `#`, `{}`, `[]`, quotes) is **double-quoted**
- [ ] `docfx.json` exists with proper metadata
- [ ] All Markdown files use proper formatting
- [ ] Code blocks specify language for syntax highlighting
- [ ] Tables are properly formatted
- [ ] Lists use consistent formatting

**Review Actions:**
- Verify `toc.yml` matches actual file structure
- Confirm a single `toc.yml`; list all paths if more than one exists (**error**)
- Flatten the TOC (including nested `items`) and flag any **`href`** that appears more than once (**error**)
- Scan `name` fields; require YAML double quotes for special characters (Part 1 — **Table of contents (`toc.yml`)**)
- Check `docfx.json` configuration
- Test Markdown rendering locally
- Verify all code blocks have language identifiers

### 5.3 Doxygen Packages

- [ ] Files in logical directory structure
- [ ] Submitted as ZIP file
- [ ] XHTML files properly formatted
- [ ] **For 2026 R1+**: XHTML converted to Markdown

**Review Actions:**
- Verify package format
- Check XHTML formatting
- Confirm Markdown conversion for 2026 R1+

### 5.4 REST API / OpenAPI packages

**Applies only when:** **§0** classifies the package as **REST API** (OpenAPI/Swagger spec file exists). Skip for **API**-only or **Library/SDK**-only packages (unless they bundle OpenAPI).

- [ ] JSON or YAML file properly formatted
- [ ] File validates against OpenAPI Specification
- [ ] Indentation is consistent
- [ ] No syntax errors
- [ ] Package layout matches **§3.1.1** (root **`docfx.json`** + OpenAPI/Swagger spec, **`description/index.md`**, **`changelog/changelog.md`**)

**Review Actions:**
- Run OpenAPI validator
- Check file formatting
- Verify syntax correctness
- Confirm **§3.1.1** file expectations; do not require **`toc.yml`** or **`index.md`** for **REST API-only** deliveries

---

## 6. Pre-Submission Review

### 6.1 Local Testing

- [ ] Documentation reviewed locally using Docfx
- [ ] All warnings about broken links resolved
- [ ] Navigation tested (all links work)
- [ ] Images display correctly
- [ ] Code syntax highlighting works
- [ ] Search functionality tested (if applicable)

**Review Actions:**
- Run Docfx build locally
- Document any warnings or errors
- Test all navigation paths
- Verify image rendering

### 6.2 Peer Review

- [ ] Documentation peer reviewed by technical expert
- [ ] Feedback incorporated
- [ ] Technical accuracy verified
- [ ] Code examples tested by peer reviewer

**Review Actions:**
- Confirm peer review completed
- Verify feedback addressed
- Check technical accuracy validation

### 6.3 Timing and Submission

- [ ] Documentation uploaded 10 days before release date
- [ ] Pull request created in appropriate repository:
  - [ ] [ansys/DevRelDocs](https://github.com/ansys/DevRelDocs) for public
  - [ ] [ansys-internal/DevRelDocs_internal](https://github.com/ansys-internal/DevRelDocs_internal) for internal
- [ ] PR has descriptive title and detailed description
- [ ] Appropriate reviewers assigned

**Review Actions:**
- Verify submission timeline
- Check PR completeness
- Ensure correct repository

---

## 7. Post-Migration Verification

### 7.1 Sandbox Environment Testing

- [ ] Documentation displays correctly
- [ ] Navigation works as expected
- [ ] Search functionality works
- [ ] All links work correctly
- [ ] Images render properly
- [ ] Code examples display with correct syntax highlighting
- [ ] Metadata displays correctly in search result filters
- [ ] Responsive design works on different screen sizes

**Review Actions:**
- Test all functionality in sandbox
- Document any display issues
- Verify search and filter functionality
- Test on multiple devices/browsers

### 7.2 Issue Resolution

- [ ] Issues reported to Dev portal team (if any)
- [ ] Issues tracked and resolved
- [ ] Final approval given for production migration

**Review Actions:**
- Document all issues found
- Verify issue resolution
- Obtain final approval

---

## 8. Review Output Format

When completing a review, provide feedback in this format:

### Summary
- Overall assessment (Approved / Needs Minor Revisions / Needs Major Revisions), **justified using §0.7**
- Key strengths
- Open **Must fix** and **Should fix** items (if any), grouped or counted
- Estimated effort for fixes

### Detailed Findings

For each section reviewed, provide:

#### [Section Name] - [Status: Passed / Warnings / Failed]

**Strengths:**
- List positive aspects

**Issues:**
1. **[Must fix | Should fix | Nice to fix]** [(optional) Policy | Correctness | Quality] — [Issue description]
   - **Location**: [File name and line number or section]
   - **Current state**: [What exists now]
   - **Required action**: [What needs to be done]
   - **Reference**: [Link to guideline]

**Recommendations:**
- Additional suggestions for improvement (tag with **Nice to fix** or **Should fix** when they are actionable)

### Action Items

Order by severity (**Must fix** first, then **Should fix**, then **Nice to fix**):

1. **[Must fix | Should fix | Nice to fix]** — [Action description] | [Owner] | [Estimated effort]

### Sign-off

- Reviewer: [Name]
- Review Date: [Date]
- Next Review Date: [Date] (if applicable)
- Approval Status: [Approved / Conditional Approval / Not Approved]

---

## 9. Additional Resources

Reference these resources during review:

- [Google developer documentation style guide](https://developers.google.com/style/)
- [Markdown guide](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/common-practices/markdown-guide.md)
- [Style guide](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/common-practices/styleguide.md)
- [Linters guide](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/common-practices/linters.md)
- [Docfx guide](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/common-practices/docfx-static-site-gen.md)
- [Metadata configuration](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/migrate-dev-portal/migrate-package/metadata.md)
- [API and library terminology](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/common-practices/api-lib.md)
- [OpenAPI Specification](https://www.openapis.org/)
- [Protocol Buffers](https://protobuf.dev/)
- [Protocol Buffers Style Guide](https://protobuf.dev/programming-guides/style/)
- [protoc-gen-doc plugin](https://github.com/pseudomuto/protoc-gen-doc)

---

## 10. Review Checklist Summary

Use this quick checklist for review completion tracking:

- [ ] **Package classified per §0**; compliance report lists **only applicable** type(s) and checklists (no N/A filler for other types)
- [ ] General requirements reviewed (style, quality, GitHub)
- [ ] Metadata configuration verified **for that classification** (REST API OpenAPI split vs **API** / **Library/SDK** Markdown, including Doxygen-converted content)
- [ ] File structure validated per **§3.1** / **§5.1** (REST API vs **API** / **Library/SDK**)
- [ ] **`toc.yml`:** when present, exactly one in package; no duplicate `href`; `name` quoting rules (Part 1 / §5.2). **Not required** for **REST API-only** packages.
- [ ] Wire API documentation reviewed **if §0 says REST API or API applies**
  - [ ] Descriptive content: **REST API** = **`description/index.md`** + **`changelog/changelog.md`** with root **`docfx.json`** + OpenAPI spec per §3.1.1; **API (prose)** = **`index.md`** + changelog at **`changelog.md`** (root) or **`changelog/changelog.md`** per §3.1.2
  - [ ] API reference: **§3.4 only for REST API**; **§3.5** if `.proto` review; **§3.6** for other protocols; **API** = completeness for protocol/messages in docs
- [ ] Library/SDK documentation reviewed **if §0 says library/SDK applies**
  - [ ] Descriptive content (introduction, getting started, user guide, examples, changelog)
  - [ ] Reference documentation (functions, classes, data structures)
- [ ] Pre-submission checks completed
- [ ] Local testing performed
- [ ] Feedback documented and communicated; **every issue and action item tagged per §0.7**
- [ ] Final approval status determined

---

*End of technical review rubric (Part 2)*
