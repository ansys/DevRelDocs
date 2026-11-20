# Third-party and system dependencies

<a id="third-party-dependencies"></a>

<a id="third-party-and-system-dependencies"></a>

<a id="third-party-python-packages-pip"></a>

<a id="required-and-optional-python-dependencies"></a>

## Required and optional Python dependencies

MI Scripting Toolkit has two types of third-party dependencies:

* **Required** dependencies are needed for the basic MI Scripting Toolkit functionality. These are installed by default.
* **Optional** dependencies can be installed to enable additional MI Scripting Toolkit functionality. These are provided as
  *extras* in the pip package, and as separate packages for conda.

No third-party packages are shipped as a part of MI Scripting Toolkit. Follow the installation instructions in [Installation](../getting_started/index.md#installation)
to download and install compatible versions of these packages alongside MI Scripting Toolkit.

<a id="required-dependencies"></a>

### Required dependencies

MI Scripting Toolkit depends on the following third-party packages:

- filetype>=1.2.0
- packaging>=24.0

<a id="optional-oidc-dependencies"></a>

### Optional OIDC dependencies

The `[oidc]` extra (or `ansys-grantami-core.oidc` conda package) includes the following additional dependencies:

- keyring>=23

<a id="optional-notebook-dependencies"></a>

### Optional notebook dependencies

The `[notebooks]` extra (or `ansys-grantami-core.notebooks` conda package) includes the following additional
dependencies:

- All platforms:
  : - jupyterlab>=4.0.0
    - matplotlib<3.11.0,>=3.7.0
    - numpy>=1.23.5
    - pandas>=2.1
    - python-docx>=1.1.0
    - python-pptx>=1.0.0
    - scipy>=1.11.0
    - seaborn>=0.13
- Windows only:
  : - docx2pdf>=0.1.8
    - tqdm[notebook]>=4.59.0

<a id="direct-vs-transitive-dependencies"></a>

### Direct vs transitive dependencies

The lists on this page include only the direct dependencies of the MI Scripting Toolkit package. The transitive dependencies
(dependencies of dependencies) are not given here, since in general they depend on the specific version of the
dependency that is selected, and as a result will change over time.

To determine the full requirements for a particular set of dependencies, install the Scripting Toolkit into an empty
virtual environment and then list the installed packages. For example, if using pip, create a new virtual environment
using the built-in venv module (see [https://docs.python.org/3/library/venv.html](https://docs.python.org/3/library/venv.html) for details), and then use `pip list`
or `pip freeze` to display the installed packages. If using conda, create a virtual environment using
`conda create`, and then use `conda list` to display the installed packages.

<a id="dependency-compatibility"></a>

### Dependency compatibility

MI Scripting Toolkit defines ranges of compatible versions for each of its dependencies. This is to maximize the likelihood that
MI Scripting Toolkit can be installed alongside other packages with a single consistent set of shared dependencies across all
libraries in the same virtual environment.

The lower bound of each version range is the minimum version of the dependency that provides the functionality required
by MI Scripting Toolkit.

The upper bound of each version range is generally not defined. This ensures that MI Scripting Toolkit can be installed with the
latest versions of each dependency, including fixes to vulnerabilities in third-party packages identified after release.

MI Scripting Toolkit is validated against the earliest and latest supported versions of each dependency at the point of release.
However, since the upper bound of each version range is generally not defined, newer versions of dependencies will be
released after the release of MI Scripting Toolkit which have not been validated. These versions are expected to work in most
cases, but if an update to a third-party dependency includes breaking changes, compatibility issues may arise.

If MI Scripting Toolkit fails due to issues with third-party dependencies, install the versions of these dependencies used to
validate MI Scripting Toolkit before release. These validated dependencies are included in a *constraints* file in the `extras`
folder. See [Installing with validated third-party dependencies](../getting_started/pip.md#pip-install-validated-dependencies) for instructions on how to install these validated dependencies
using pip.

<a id="linux-system-dependencies"></a>

## Linux system dependencies

MI Scripting Toolkit on Linux requires additional shared libraries beyond the glibc runtime. The required shared library names are
listed in the left-hand column; these usually represent symbolic links to shared libraries. The full name of the shared
library on our build environment is listed in the right-hand column. Full names of shared libraries on test environments
are included in the `extras` directory in the installation package.

#### Table 1: Required shared libraries for MI Scripting Toolkit on Linux

| Required shared library name   | Full library path on the ManyLinux 2.28 build image   |
|--------------------------------|-------------------------------------------------------|
| `libc.so.6`                    | `/lib64/libc.so.6`                                    |
| `libdl.so.2`                   | `/lib64/libdl.so.2`                                   |
| `libgcc_s.so.1`                | `/lib64/libgcc_s.so.1`                                |
| `libm.so.6`                    | `/lib64/libm.so.6`                                    |
| `libpthread.so.0`              | `/lib64/libpthread.so.0`                              |
| `librt.so.1`                   | `/lib64/librt.so.1`                                   |
| `libstdc++.so.6`               | `/lib64/libstdc++.so.6`                               |
| `libuuid.so.1`                 | `/lib64/libuuid.so.1`                                 |
| `libz.so.1`                    | `/lib64/libz.so.1`                                    |

<a id="macos-system-dependencies"></a>

## macOS system dependencies

MI Scripting Toolkit on macOS requires additional shared libraries beyond the libc runtime. The required shared library names are
listed in the left-hand column; these usually represent symbolic links to shared libraries. The full name of the shared
library on our build environment is listed in the right-hand column.

#### Table 2: Required shared libraries for MI Scripting Toolkit on macOS

| Required shared library name   | Full library path on macOS   |
|--------------------------------|------------------------------|
| `libSystem.B.dylib`            | `/usr/lib/libSystem.B.dylib` |
| `libc++.1.dylib`               | `/usr/lib/libc++.1.dylib`    |
| `libz.1.dylib`                 | `/usr/lib/libz.1.dylib`      |
