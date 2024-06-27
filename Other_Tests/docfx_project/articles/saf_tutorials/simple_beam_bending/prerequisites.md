<a id="prerequisites-index"></a>

<a id="prerequisites"></a>

# Prerequisites

Navigate through each tab and make sure your development environment satisfies all the requirements.

### 🔑 Variables

Action

The following variables are not always required and can be set anytime on your system:

#### Environment variables

| Name                              | Value                                                                                                                   | Description                                                                     |
|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| `SAF_DESKTOP_DEBUG`               | 1                                                                                                                       | Activate debug mode.                                                            |
| `GLOW_METHOD_EXECUTION_DIRECTORY` | Path to the directory where you want to create the temporary directories.<br/><br/><br/>Example: `D:\SAF_TMP`<br/><br/> | Customize the location of the GLOW temporary directories for better visibility. |

### 🖥️ VS Code

Action

Install VS Code on your computer.
: For the best development experience, Visual Studio Code (VS Code) is strongly recommended. In addition to the integrated environment this IDE provides, debugging of solution applications is eased using a specific configuration. Such debugging capabilities are not supported by other tools such as PyCharm.
  <br/>
  Install from the [VS Code official website](https://code.visualstudio.com/Download).

Action

Install VS Code extensions.
: VS Code provides extensions to ease the working experience with any kind of programming language. When it comes to solution applications, the following extensions are recommended:
  <br/>
  #### VS Code extensions
  <br/>
  | Extension                                                                                  | Description                                                         |
  |--------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
  | [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)             | Ease Python programming.                                            |
  | [TOML Language Support](https://marketplace.visualstudio.com/items?itemName=be5invis.toml) | Ease TOML files readibility.                                        |
  | [RST Preview](https://marketplace.visualstudio.com/items?itemName=tht13.rst-vscode)        | Preview restructured text/markdown and provide syntax highlighting. |

### 🐍 Python

You need a Python interpreter in the range **>=3.9, <=3.11**. If your current setup does not satisfy this requirement, visit [Python official website](https://www.python.org/downloads/) and install any version within the above range.

Action

Install Python in the range >=3.9, <=3.11.
: The `toml` and `packaging` Python packages are required for the solution setup.

Action

Install `toml` and `packaging` on your system Python interpreter.

> ```bash
> pip install toml packaging
> ```

### ⚙️ ansys-templates

Action

Install `ansys-templates`.
: `ansys-templates` is a public tool developed and maintained by Ansys to provide templates for Python projects. One of these templates is specifically designed for solution application development:
  <br/>
  ```bash
  python -m pip install ansys-templates
  ```

Action

Upgrade `ansys-templates`.
: If you already have `ansys-templates` installed, you are recommended to upgrade to the latest version:
  <br/>
  ```bash
  python -m pip install --upgrade ansys-templates
  ```

### ⚙️ Software

For this tutorial, no software is required.

<!-- Definitions of interpreted text roles (classes) for S5/HTML data. -->
<!-- This data file has been placed in the public domain. -->
<!-- Colours
======= -->
<!-- Text Sizes
========== -->
<!-- Display in Slides (Presentation Mode) Only
========================================== -->
<!-- Display in Outline Mode Only
============================ -->
<!-- Display in Print Only
===================== -->
<!-- Display in Handout Mode Only
============================ -->
<!-- Incremental Display
=================== -->
