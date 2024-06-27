<a id="saf-getting-started-prerequisites"></a>

<a id="prerequisites"></a>

# Prerequisites

> ##### Summary
> 
> Prepare for solution development by acquiring [required knowledge](#dev-env-prereq-knowledge) and installing the tools needed for your [canonical development environment](#canonical-development-environment).

<a id="dev-env-prereq-knowledge"></a>

<a id="required-knowledge"></a>

## Required knowledge

Prepare for solution development by getting familiar with the following topics: [object-oriented programing](#topic-oop), [frontend stacks](#topic-frontend-stack), and [virtual environments](#topic-venv).

<a id="topic-oop"></a>

<a id="object-oriented-programming"></a>

### Object-oriented programming

*Object-Oriented Programming (OOP)* is an important concept in software development—a programming approach that:

* Provides the ability to create and manipulate entities (objects)
* Imposes a solid and unambiguous structure
* Allows objects to interact with each other

These features result in code that is more reliable and easier to understand and maintain.

Ansys Solutions recommends that you become familiar with object-oriented programming (if you are not already). You can access educational materials online, including any of the many courses that are available on other e-learning platforms.

<a id="topic-frontend-stack"></a>

<a id="frontend-stacks"></a>

### Frontend stacks

To develop a solution, you need to be able to create a web user interface with a frontend framework such as `Angular`, `React`, `JavaScript`, or `Dash`. Ansys Solutions recognizes that getting started with frontend development can be difficult and time consuming, but strongly recommends that you learn how to work with at least one of these stacks.

Because Dash is widely recognized as the web framework that is most accessible, Ansys Solutions recommends it as a starting point for people who are new to frontend development.

#### SEE ALSO
* Official [Plotly/Dash](https://dash.plotly.com/) documentation
* [Dash Bootstrap Components](http://dash-bootstrap-components.opensource.faculty.ai/) documentation

<a id="topic-venv"></a>

<a id="virtual-environments"></a>

### Virtual environments

When you are working in multiple Python projects with different requirements, Ansys Solutions recommends that you use *Python virtual environments* to create an isolated environment for each project. This isolation helps to manage dependencies, avoid conflicts between packages, and maintain project-specfic configurations.

You do not need create virtual environments manually. For solutions that are created and set up using the [recommended procedure](#canonical-development-environment), the virtual environment is installed by the `setup_environment.py` script. You should, however, have some familiarity with virtual environments and how to interact with them.

#### SEE ALSO
* Official Python documentation on the [venv module](https://docs.python.org/3/library/venv.html)

<a id="canonical-development-environment"></a>

<a id="set-up-your-development-environment"></a>

## Set up your development environment

Before beginning to develop a solution, make sure you have all the parts of your canonical development environment in place.

Install each of the following required development tools as described in the following sections. Review each part carefully and be sure to validate each step upon completion.

<a id="git"></a>

<a id="install-git"></a>

### Install Git

Solution projects are managed using  **Git**, a local version control system (VCS). Git allows developers to save the change history of their projects, facilitating collaboration by providing access to older project versions.

To install Git on your computer:

1. Download the installer for your operating system from the [Git official website](https://git-scm.com/downloads).
2. Double-click the installer.
3. Follow the installation steps provided.

<a id="python"></a>

<a id="install-python"></a>

### Install Python 🐍

Solutions are developed using the Python programming language because it enables you to work quickly and integrate systems effectively. It is intuitive and has a simple syntax that can be learned quickly.

To install Python on your computer:

1. Find the release version you want on the [Python official website](https://www.python.org/downloads/). (Be sure to install a version supported by SAF.)
2. Click Download.
3. Double-click on the downloaded installer.
4. Follow the installation steps provided.

If you have several versions of Python installed on your machine, make sure that your environment takes into account only the version you want:

1. Go to your environment variables.
2. Double-click the `Path` variable.
3. Add the installation path of the Python version you want in first position.

<a id="ide"></a>

<a id="install-visual-studio-code"></a>

### Install Visual Studio Code

There are a variety of integrated development environments (IDEs) available for Python developers, including Pycharm, Eclipse with PyDev, Atom, and others. However, we recommend that you use *Visual Studio Code (VS Code)* for the sake of consistency, ease of collaboration, and compatibility with the [GLOW debugger](https://saf.docs.solutions.ansys.com/version/stable/user_guide/debug.html).

VS Code is a streamlined yet powerful tool that offers debugging support, syntax highlighting, smart code completion, snippets, code refactoring operations, and Git integration. You can modify your theme, keyboard shortcuts, and preferences, and can also install extensions for additional functionality.

To install VS Code on your computer:

1. Download the **System Installer** from the [VS Code official website](https://code.visualstudio.com/Download).
2. Double-click the installer.
3. Follow the installation steps provided.

<a id="ansys-templates"></a>

<a id="install-the-ansys-templates-tool"></a>

### Install the Ansys templates tool

When you create a solution, the first step is to generate a new solution project using the `ansys-templates` tool.

The `ansys-templates` tool is a command-line interface available in the Ansys GitHub organization. It provides a collection of templates. It includes a `solution` template that generates SAF-solution project that is compliant with Solution Applications guidelines.

To install the latest stable version of this tool, see [Getting started](https://templates.ansys.com/version/stable/getting_started/index.html) in the Ansys templates documentation.

For instructions on using this tool to generate a solutions project, see [Generate a solution](../develop/dev_prepare/create_solution.md#create-solution).

#### SEE ALSO
| Repository:    | [https://github.com/ansys/ansys-templates](https://github.com/ansys/ansys-templates)   |
|----------------|----------------------------------------------------------------------------------------|
| Documentation: | [https://templates.ansys.com](https://templates.ansys.com)                             |

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
