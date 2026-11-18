# Documentation Environment Setup Guide



<a id="md_setup__doc__pipeline__env_1autotoc_md0"></a>






This guide describes how to install and configure the documentation toolchain, including **Doxygen 1.14.0**, **Seaborg**, and **DocFX**.





## Pipeline setup

<code>BuildScripts/continuous-windows-doc.yml</code> provisions the documentation toolchain before generating documentation. It installs missing Node.js, .NET 8, and Doxygen through Chocolatey, then installs Seaborg, DocFX, and PyYAML for the build-agent user.





The Windows build VM needs Chocolatey configured with an organization-approved package source, and the pipeline agent must have permission to install machine-level Chocolatey packages. No manual installation of Doxygen, Node.js, Seaborg, DocFX, or PyYAML is needed after that prerequisite is met.





---




## Install Doxygen 1.14.0


* **Notes:**
* Seaborg supports Doxygen **1.14.0**.

* The previous documentation pipeline used Doxygen **1.9.0**.







### Steps


1. Download and install Doxygen **1.14.0** from the [official Doxygen website](https://www.doxygen.nl/download.html).




## Install nmp using chocolatey


* **Commands**



```
  choco install nodejs
- **check npm version**
```
 powershell node -v npm -v




## Install seaborg


* **Commands**



```
  npm install -g @seaborg/cli

## Install docfx

- install donet if it is not installed yet
  - [Download .NET 8.0 SDK (v8.0.415) - Windows x64 Installer](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-8.0.415-windows-x64-installer)
- **Command**
```
 powershell dotnet tool update -g docfx &ndashversion 2.60.0

* **docfx references**
* [Static site generator - Docfx | Closed source developer documentation guide](https://doc-guidelines.dev.ansysapis.com/docs/common-practices/docfx-static-site-gen/)

* [Quick Start | docfx](https://dotnet.github.io/docfx/index.html)




## Install pyyaml using WINDOWS_PYTHON


* ```cmd WINDOWS_PYTHON% -m pip install pyyaml




## Run the SCP library documentation script

<code>generate_doxygen_output.bat</code> builds the published PartLib API reference (C++, C, Fortran) plus the user guide, and packages it all into a DocFX site. Roughly, it:






1. Extracts the PartLib package into <code>PartLib</code>, unless <code>--nodownload</code> is set or it's already there.

2. For each language (C++, C, Fortran), preprocesses the headers (<code>preprocessHeaderFiles.py</code>), runs Doxygen (<code>doxygen_cpp_config</code>, <code>doxygen_c_config</code>, <code>doxygen_fortran_config</code>), and clears out the intermediate input files (<code>clearInputFiles.py</code>).

3. Fixes up the language badge in the generated C XML (<code>replace-language-badge.py</code>) — Doxygen tags it wrong otherwise.

4. Sets up the DocFX project (<code>initDocFx.py</code>) and converts the user guide content to markdown (<code>processUserGuideFiles.py</code>).

5. Runs Seaborg on each language's Doxygen XML to produce DocFX markdown under <code>articles/{c,cpp,fortran}-reference/</code>.

6. Builds the TOC files (<code>generateApisTocFile.py</code>, <code>generateTocFile.py</code>) and the <code>docfx.json</code> content (<code>generateDescriptiveDocfxJsonFile.py</code>, <code>updateDocFxJson.py</code>).

7. Tidies up the generated markdown (<code>cleanHTMLId.py</code>, <code>cleanEmptyRow.py</code>).




## Run the SystemCoupling Commands documentation script

<code>generate_syc_commands_docfx.bat</code> builds a second, separate DocFX site for the SystemCoupling Commands reference. It doesn't touch Doxygen or Seaborg at all — the <code>SycCommands</code> package already contains ready-made <code>SyCCommands.md</code>/<code>index.md</code> markdown, so this script just has to drop that content into a DocFX project and build the TOC/<code>docfx.json</code> around it:






1. Extracts the <code>SycCommands</code> package into <code>SycCommands</code>, unless <code>--nodownload</code> is set or it already exists.

2. Sets up the DocFX project under <code>published_content/syc_commands</code> (<code>initDocFx.py</code>).

3. Copies <code>SyCCommands.md</code> and <code>index.md</code> from the <code>SycCommands</code> package into the DocFX <code>articles</code> folder (<code>processSyCCommandsFiles.py</code>).

4. Builds the commands TOC (<code>generateSyCCmdsTocFile.py</code>) and the <code>docfx.json</code> content (<code>generateSyCCmdsDocfxJsonFile.py</code>, <code>updateDocFxJson.py</code>).

5. Tidies up the generated markdown (<code>cleanHTMLId.py</code>, <code>cleanEmptyRow.py</code>).







### Generating the SyCCommands.md source file

<code>SyCCommandsFile.bat</code> generates <code>SyCCommands.md</code>, and it needs to run before <code>generate_syc_commands_docfx.bat</code> (or before the <code>SycCommands</code> package is built). It just launches System Coupling itself — <code>bin\systemcoupling.bat -R generateSyCCommandsMDFile.py</code> — so the command docs are always generated straight from the live command registry instead of being hand maintained. Under the hood, <code>generateSyCCommandsMDFile.py</code> uses <code>kernel.commands.CommandDocParser</code> to walk every registered CLI/Command-Console command and write out its description, essential/optional arguments, and examples.

<!--
**TODO**:

* `location  {"type":"element","name":"location","attributes":{"file":"setup_doc_pipeline_env.md"},"children":[]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)