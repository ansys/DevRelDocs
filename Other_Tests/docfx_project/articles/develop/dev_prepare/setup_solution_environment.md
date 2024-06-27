<a id="setup-dev-environment"></a>

<a id="set-up-the-solution-environment"></a>

# Set up the solution environment

> ##### Summary
> 
> Create the Python ecosystem required for solution development.
<br/>

Setting up the solution development environment entails the following steps:

1. [Install packaging requirements](#install-packaging).
2. [Run the environment setup script](#install-dev-setup).
3. [Activate the virtual environment](#activate-venv).
4. [Add and update dependencies](#add-update-dependencies).
5. [Automate your project](#automate-environ-tox).

<a id="install-packaging"></a>

<a id="install-packaging-requirements"></a>

## Install packaging requirements

1. Navigate to the solution root directory:
   ```bash
   cd <project-name>
   ```
2. Install `toml` and `packaging`:
   ```bash
   pip install toml packaging
   ```

<a id="install-dev-setup"></a>

<a id="run-the-environment-setup-script"></a>

## Run the environment setup script

When you generate a solution using the [Ansys templates](https://templates.ansys.com/) tool, it creates a `setup_environment.py` script in the project’s root directory. This script automates the installation of the Python ecosystem needed to develop a solution. For more information, see [Setup script actions](#setup-script-actions) and [Setup script customizations](#setup-script-custom).

Run the `setup_environment.py` script as shown here, specifying the SAF packages location and using the combination of dependency installation options needed to create your preferred environment.

You need to run this script only once, when you first start working in the project.

### Full

To install the full environment with all dependencies:

```python
python setup_environment.py -d all -lw <saf_wheels_directory>
```

### Minimal

To install a minimal environment with only mandatory dependencies:

```python
python setup_environment.py -d run <saf_wheels_directory>
```

### Combination

To install a environment with only specified dependencies:

```python
python setup_environment.py -d run tests build <saf_wheels_directory>
```

#### NOTE
The `run` option is always required so that the script installs SAF’s GLOW and Portal packages. However, with the `all` option, it is implicit and does not need to be explicitly specified.

<a id="setup-script-actions"></a>

<a id="id1"></a>

### Setup script actions

Behind the scenes, the environment setup script uses [Poetry](https://python-poetry.org/docs/) as a dependency management tool and [pip](https://pypi.org/project/pip/) to install optional dependencies. When you run the `setup_environment.py` script, it:

* Creates a Python virtual environment.
* Installs `poetry`.
* Installs mandatory dependencies.
* Installs optional dependencies, as configured.

<a id="setup-script-custom"></a>

<a id="setup-script-customizations"></a>

### Setup script customizations

For details on how you can customize the environment setup script, expand the following dropdowns:

### Install dependencies

Project dependencies are declared in the `pyproject.toml` file at the project root.
Run the script with the `-d` argument and options to specify which dependencies `setup_environment.py` installs.

| Option     | Installs                    | Type                                                                                  |
|------------|-----------------------------|---------------------------------------------------------------------------------------|
| `-d all`   | All dependencies.           | Optional. Recommended setup method.                                                   |
| `-d run`   | Production dependencies.    | Required (except when `-all` is used).<br/>Installs the SAF GLOW and Portal packages. |
| `-d style` | Code styling dependencies.  | Optional.                                                                             |
| `-d tests` | Testing dependencies.       | Optional.                                                                             |
| `-d build` | Build dependencies.         | Optional.                                                                             |
| `-d doc`   | Documentation dependencies. | Optional.                                                                             |

### Set the poetry version

Run the script with the `-s` argument to specify the build system version of of `poetry` to be used.

```python
python setup_environment.py -s 1.7.1
```

### Reset your workspace

To do a fresh clean install of your development environment, run the script with the `-f` argument. This cleans up the workspace and deletes any existing `.venv` or `poetry.lock` files.

```python
python setup_environment.py -f -d all
```

<a id="activate-venv"></a>

<a id="activate-the-virtual-environment"></a>

## Activate the virtual environment

Activate the virtual environment created by the setup script:

```bash
.venv\Scripts\Activate.ps1
```

```bash
.venv\Scripts\activate.bat
```

```bash
source .venv/bin/activate
```

From now on, you must execute all commands within the virtual environment.

<a id="add-update-dependencies"></a>

<a id="add-and-update-dependencies"></a>

## Add and update dependencies

Use the `poetry add` and `poetry update` commands to add a new dependency or update the version of an existing dependency.

To add or update packages collected from a public PyPI:

```bash
poetry add <name-of-package>
```

```bash
poetry update <name-of-package>
```

<!-- For packages collected from a *Solutions* private PyPI: -->
<!-- .. tabs: -->
<!-- .. code-tab:: bash -->
<!-- :caption: Add a dependency -->
<!-- poetry add <name-of-package> --source solutions-private-pypi -->
<!-- .. code-tab:: bash -->
<!-- :caption: Update a dependency -->
<!-- poetry update <name-of-package> --source solutions-private-pypi -->
<!-- For packages collected from a *PyAnsys* private PyPI: -->
<!-- .. tabs: -->
<!-- .. code-tab:: bash -->
<!-- :caption: Add a dependency -->
<!-- poetry add <name-of-package> --source pyansys-private-pypi -->
<!-- .. code-tab:: bash -->
<!-- :caption: Update a dependency -->
<!-- poetry update <name-of-package> --source pyansys-private-pypi -->

To add packages collected from a local path (useful for testing local changes to a given package):

```bash
poetry add /path/to/your/local/package
```

To request a specific version of a package:

```bash
poetry add <name-of-package>==<version>
```

```bash
poetry update <name-of-package>==<version>
```

#### SEE ALSO
* [Commands](https://python-poetry.org/docs/cli/) in the Poetry documentation

<a id="automate-environ-tox"></a>

<a id="automate-your-project"></a>

## Automate your project

Consider using [tox](https://tox.wiki/en/latest/) to automate any or all of the previous commands, from code styling to testing and builds. The `tox` tool creates its own virtual environment, isolating anything being tested to protect the integrity of the project.

You can use the following `tox` environment commands:

| `tox -e style`       | Checks for coding style quality.           |
|----------------------|--------------------------------------------|
| `tox -e py`          | Checks for unit tests.                     |
| `tox -e py-coverage` | Checks for unit testing and code coverage. |
| `tox -e doc`         | Checks the documentation build process.    |
| `tox -e build`       | Checks the source code build process.      |

#### SEE ALSO
* [The tox tool](https://dev.docs.pyansys.com/coding-style/formatting-tools.html#tox)
  in the *PyAnsys Developer’s Guide*
* [Basic example](https://tox.wiki/en/latest/user_guide.html#basic-example)
  in the `tox` documentation

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
