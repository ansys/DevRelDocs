# Documentation compliance report

- **Package path**: `docs/speos/speos-labs-automation-apis/versions/2024.R2.SP00`
- **Review date**: 2026-04-24
- **Reviewer**: Codex
- **Overall assessment**: **Needs major revisions**

## Package classification (section 0)

### Applicable type(s)
- **Library/SDK**

### Evidence
- Package contains Markdown topics documenting callable automation methods and properties (for example `lab_api_home.md`, `virtual_photometric_lab/...`, `virtual_reality_lab/...`) rather than an OpenAPI/Swagger endpoint contract.
- No OpenAPI/Swagger spec was detected in the package.
- `docfx.json` uses Markdown metadata fields (`title`, `version`, `summary`, `physics`) and does not indicate a REST API split metadata model.

### Rubric scope applied
- **Applied**: section 1, section 2.1 (Markdown metadata), section 4, section 5.1/5.2, section 6, section 8.
- **Not applied**: REST API-specific checks (section 3.4 and section 5.4), gRPC/proto checks (section 3.5), and non-wire API checks not relevant to this package type.

## Summary

### Strengths
- Large API reference surface is present and organized into domain sections via TOC.
- Root `docfx.json` exists and includes key taxonomy fields (`product`, `physics`, and programming language metadata).
- TOC links in the primary `toc.yml` resolve to existing files.

### Open issues by severity
- **Must fix**: 3
- **Should fix**: 0
- **Nice to fix**: 0

## Detailed findings

### Metadata configuration - failed

1. **Must fix (Policy)** — Required metadata `summary` is empty.
   - **Location**: `docfx.json`
   - **Current state**: `build.globalMetadata.summary` is set to an empty string.
   - **Required action**: Add a concise package-level summary describing what this documentation package provides.
   - **Reference**: `.github/AGENTS.md` section 2.1 (Markdown required metadata).

### File structure requirements - failed

1. **Must fix (Policy)** — Missing required root landing file.
   - **Location**: package root `docs/speos/speos-labs-automation-apis/versions/2024.R2.SP00`
   - **Current state**: No root `index.md` file exists.
   - **Required action**: Add `index.md` at package root and ensure it is the package entry point.
   - **Reference**: `.github/AGENTS.md` section 4.1 (Library/SDK required files).

2. **Must fix (Policy)** — Missing required root changelog file.
   - **Location**: package root `docs/speos/speos-labs-automation-apis/versions/2024.R2.SP00`
   - **Current state**: No root `changelog.md` file exists.
   - **Required action**: Add `changelog.md` with release entries in the expected format.
   - **Reference**: `.github/AGENTS.md` sections 4.1 and 4.6 (Library/SDK changelog requirement).

### TOC governance - failed

1. **Must fix (Policy)** — More than one TOC file exists in the package.
   - **Location**: `toc.yml`, `virtual_3d_energy_density_lab_notused/TOC.yml`
   - **Current state**: The package contains two TOC files.
   - **Required action**: Keep exactly one TOC file for the package and remove or consolidate the additional TOC file.
   - **Reference**: `.github/AGENTS.md` Part 1 TOC rule 1 and section 5.2.

## Action items

1. **Must fix** — Populate `build.globalMetadata.summary` in `docfx.json` with a package-level summary. | Owner: package maintainers | Effort: S
2. **Must fix** — Add root `index.md` for the package landing page and align navigation entry points. | Owner: package maintainers | Effort: M
3. **Must fix** — Add root `changelog.md` with latest version first and dated categorized entries. | Owner: package maintainers | Effort: M
4. **Must fix** — Consolidate TOC files to a single package-level `toc.yml`. | Owner: package maintainers | Effort: S

## Sign-off

- **Approval status**: **Not approved**
- **Rationale**: Open Must fix policy issues remain (required metadata and required package structure/TOC constraints).
