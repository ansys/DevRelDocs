# File setup\_doc\_pipeline\_env.md

![][Markdown]

**Location**: `setup\_doc\_pipeline\_env.md`





## Source


```markdown

# Documentation Environment Setup Guide

This guide describes how to install and configure the documentation toolchain, including **Doxygen 1.14.0**, **Seaborg**, and **DocFX**.

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
- At the end of some files, there is a "TODO" note. I’ve modified the Seaborg project on my end to remove these, but it would be helpful if we could fork the project to apply this change along with an update to the Doxygen version that Seaborg manages. To do so, I modified the index.js file, for me in: `C:\Users\licui\AppData\Roaming\npm\node_modules\@seaborg\cli\node_modules\@seaborg\markdown\lib\helpers`

  ```js
  line 52: exports.todo = (items) => '';/*(items) => exports.sectionList('TODO', items);*/


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
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)