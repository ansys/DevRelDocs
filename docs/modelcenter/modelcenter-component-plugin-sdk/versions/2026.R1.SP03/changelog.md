# Changelog

## 2026 R1 SP03

Documentation review aligned with SDK drop **26.1.1** / **PACZComponentPlugInSDK-26.1.1c** (internal doc ticket 1498519).

### Changed

- Reordered getting started steps: configure NuGet package source globally before creating a project (#1498577)
- Corrected SDK zip layout documentation (removed legacy `artifacts` / `CAMPluginSDK` paths) (#1498584)
- Updated Visual Studio 2022 VSIX support statement; template name **Pacz Plug-In Template** (#1498577)
- Clarified TestUI deployment (copy build output contents, arbitrary `Plug-Ins` subfolder name) (#1498586)
- Documented plug-in deployment locations including per-user `%APPDATA%` path (#1498586)
- Updated ModelCenter testing guidance for 2026 R1 installs
- Recommended .NET Framework 4.7.2; removed Java from prerequisites until supported
- Fixed FAQ typo (`VariableType`); added MockPlugIn and downloadable-sample guidance (#1498537)

### Added

- SDK zip contents table in getting started
- Optional `nuget.config` snippet for local NuGet source
- Build step and `WritePlugInManifest` note before testing
- Getting started screenshots (#1498565) — 27 `graphics/gs-*.png` wired in `started.md` from Taurik walkthrough (2026-08-18); Leslie may still crop/replace from `screenshots-raw/`
- Bundled **BasicPaczPlugin** sample under `examples/basic/` (#1498537 doc side)
- Downloadable sample zip `examples/BasicPaczPlugin-sample-26.1.1.zip` (#1498537)
- Added `Ansys.Util.AbstractDisposable` 0.1.1 package reference to the BasicPaczPlugin sample so it compiles against SDK 26.1.1 (#1504190)
- **A working example** section in getting started; **Useful classes** moved after debugging (Taurik walkthrough merge)

### Pending

- Offline API class diagram (#1498565 / API-01) — stub in `apis.md`; asset still missing under `apidocs/images/`

## 2026 R1

Released 2025-11-01.

### Added

- Added doc to developer page
- Added threading guide (previously part of common issues)
- Added glossary of terms
- Added examples page with BasicPaczPlugin and FMUv2Import source code
- Added full .NET API reference documentation (converted from DocFX HTML to markdown)
- Added APIs page with .NET API reference link
- Added API links throughout documentation

### Changed

- Consolidated getting started, new project overview, testing, and customizing into a single getting started guide
- Improved code samples (corrected language tags from java to C#)
