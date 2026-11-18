# File setup\_doc\_pipeline\_env.md

![][Markdown]

**Location**: `setup\_doc\_pipeline\_env.md`





## Source


```markdown

# Documentation Environment Setup Guide

This guide describes how to install and configure the documentation toolchain, including **Doxygen 1.14.0**, **Seaborg**, and **DocFX**.

## Pipeline setup

`BuildScripts/continuous-windows-doc.yml` provisions the documentation toolchain before generating documentation. It installs missing Node.js, .NET 8, and Doxygen through Chocolatey, then installs Seaborg, DocFX, and PyYAML for the build-agent user.

The Windows build VM needs Chocolatey configured with an organization-approved package source, and the pipeline agent must have permission to install machine-level Chocolatey packages. No manual installation of Doxygen, Node.js, Seaborg, DocFX, or PyYAML is needed after that prerequisite is met.

---

## Install Doxygen 1.14.0

- **Notes:**
  - Seaborg supports Doxygen **1.14.0**.
  - The previous documentation pipeline used Doxygen **1.9.0**.

### Steps

1. Download and install Doxygen **1.14.0** from the [official Doxygen website](https://www.doxygen.nl/download.html).

## Install nmp using chocolatey

- **Commands**

   ```powershell
  choco install nodejs
- **check npm version**

  ```powershell
  node -v
  npm -v

## Install seaborg

- **Commands**

  ```powershell
  npm install -g @seaborg/cli

## Install docfx

- install donet if it is not installed yet
  - [Download .NET 8.0 SDK (v8.0.415) - Windows x64 Installer](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-8.0.415-windows-x64-installer)
- **Command**

  ```powershell
  dotnet tool update -g docfx --version 2.60.0
- **docfx references**

  - [Static site generator - Docfx | Closed source developer documentation guide](https://doc-guidelines.dev.ansysapis.com/docs/common-practices/docfx-static-site-gen/)
  - [Quick Start | docfx](https://dotnet.github.io/docfx/index.html)

## Install pyyaml using WINDOWS_PYTHON

- ```cmd
  %WINDOWS_PYTHON% -m pip install pyyaml

## Run the SCP library documentation script

`generate_doxygen_output.bat` builds the published PartLib API reference (C++, C, Fortran)
plus the user guide, and packages it all into a DocFX site. Roughly, it:

1. Extracts the PartLib package into `PartLib`, unless `--nodownload` is set or it's already there.
2. For each language (C++, C, Fortran), preprocesses the headers (`preprocessHeaderFiles.py`), runs Doxygen (`doxygen_cpp_config`, `doxygen_c_config`, `doxygen_fortran_config`), and clears out the intermediate input files (`clearInputFiles.py`).
3. Fixes up the language badge in the generated C XML (`replace-language-badge.py`) — Doxygen tags it wrong otherwise.
4. Sets up the DocFX project (`initDocFx.py`) and converts the user guide content to markdown (`processUserGuideFiles.py`).
5. Runs Seaborg on each language's Doxygen XML to produce DocFX markdown under `articles/{c,cpp,fortran}-reference/`.
6. Builds the TOC files (`generateApisTocFile.py`, `generateTocFile.py`) and the `docfx.json` content (`generateDescriptiveDocfxJsonFile.py`, `updateDocFxJson.py`).
7. Tidies up the generated markdown (`cleanHTMLId.py`, `cleanEmptyRow.py`).

## Run the SystemCoupling Commands documentation script

`generate_syc_commands_docfx.bat` builds a second, separate DocFX site for the
SystemCoupling Commands reference. It doesn't touch Doxygen or Seaborg at all —
the `SycCommands` package already contains ready-made `SyCCommands.md`/`index.md`
markdown, so this script just has to drop that content into a DocFX project and
build the TOC/`docfx.json` around it:

1. Extracts the `SycCommands` package into `SycCommands`, unless `--nodownload` is set or it already exists.
2. Sets up the DocFX project under `published_content/syc_commands` (`initDocFx.py`).
3. Copies `SyCCommands.md` and `index.md` from the `SycCommands` package into the DocFX `articles` folder (`processSyCCommandsFiles.py`).
4. Builds the commands TOC (`generateSyCCmdsTocFile.py`) and the `docfx.json` content (`generateSyCCmdsDocfxJsonFile.py`, `updateDocFxJson.py`).
5. Tidies up the generated markdown (`cleanHTMLId.py`, `cleanEmptyRow.py`).

### Generating the SyCCommands.md source file

`SyCCommandsFile.bat` generates `SyCCommands.md`, and it needs to run before
`generate_syc_commands_docfx.bat` (or before the `SycCommands` package is built).
It just launches System Coupling itself — `bin\systemcoupling.bat -R generateSyCCommandsMDFile.py`
— so the command docs are always generated straight from the live command registry
instead of being hand maintained. Under the hood, `generateSyCCommandsMDFile.py` uses
`kernel.commands.CommandDocParser` to walk every registered CLI/Command-Console
command and write out its description, essential/optional arguments, and examples.
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)