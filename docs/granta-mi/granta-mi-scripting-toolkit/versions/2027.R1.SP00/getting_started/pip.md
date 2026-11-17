# Installation with pip (recommended)

<a id="installation-with-pip-recommended"></a>

<a id="server-software-requirements"></a>

## Server software requirements

To use MI Scripting Toolkit 5.1, your Granta MI server must be running 2024 R2 or later, which includes Service Layer
Interface 23/10.

<a id="supported-client-platforms"></a>

## Supported client platforms

MI Scripting Toolkit for pip is supported on the following platforms:

<a id="pip-platform-support"></a>

#### Table 1: Supported platforms for MI Scripting Toolkit with pip

| Platform                                                         | Python 3.12                        | Python 3.13   | Python 3.14   |
|------------------------------------------------------------------|------------------------------------|---------------|---------------|
| Windows <sup>[1](#id8)</sup>                                     | Recommended                        | Recommended   | Recommended   |
| macOS <sup>[2](#id9)</sup>                                       | Recommended                        | Recommended   | Recommended   |
| Linux                                                            | Ubuntu 22.04 <sup>[3](#id10)</sup> | Recommended   | Recommended   |
| Ubuntu 24.04 <sup>[4](#id11)</sup>                               | Supported                          | Recommended   | Supported     |
| SUSE Linux Enterprise<br/>15 SP5+, 16 SP0  <sup>[5](#id12)</sup> | Supported                          | Recommended   | Supported     |
| RHEL 8.10, 9.6, 9.8<br/>10.2 <sup>[6](#id13)</sup>               | Supported                          | Recommended   | Supported     |
| Rocky Linux 8.10<br/>9.6, 9.8, 10.2 <sup>[7](#id14)</sup>        | Supported                          | Recommended   | Supported     |

MI Scripting Toolkit is only supported when used with the CPython Python implementation. Alternative implementations of the Python
programming language, for example pypy, are not supported.

Test platform details:

* <a id='id8'>**[1]**</a> Automated testing performed on Windows Server 2022. Manual testing performed on Windows Server 2025 and Windows 11.
* <a id='id9'>**[2]**</a> Automated testing performed on macOS Tahoe 26.2.
* <a id='id10'>**[3]**</a> Automated testing performed on Ubuntu 22.04 development release. Manual testing performed on Ubuntu 22.04.5.
* <a id='id11'>**[4]**</a> Automated testing performed on Ubuntu 24.04 development release. Manual testing performed on Ubuntu 24.04.2.
* <a id='id12'>**[5]**</a> Automated testing performed on SLES 15 SP5 and 16 SP0. Manual testing performed on SLES 15 SP6.
* <a id='id13'>**[6]**</a> Automated testing performed on RHEL 8.10 and 9.8. Manual testing performed on RHEL 8.10.
* <a id='id14'>**[7]**</a> Automated testing performed on Rocky Linux 9.6 and 10.2. Manual testing performed on Rocky Linux 9.6.

See [Detailed client requirements](#detailed-client-requirements) for more detailed information on client requirements for the Linux and macOS
platforms.

<a id="installation"></a>

## Installation

<a id="preparation"></a>

### Preparation

MI Scripting Toolkit is provided as a zip file, and is available from the Downloads page on the Ansys Customer Portal. All
instructions on this page assume a Windows environment, and that the zip file has been downloaded and unzipped to the
location `C:\Users\user\scripting_toolkit`. Replace this path as required for your environment.

To install MI Scripting Toolkit in a Linux or macOS environment, replace the example Windows path with the appropriate Linux or
macOS path. For example, the path `C:\Users\user\scripting_toolkit\pip` in Windows would be equivalent to
`/home/user/scripting_toolkit/pip` on Linux, or `/Users/scripting_toolkit/pip` on macOS.

<a id="installing-and-upgrading-pip"></a>

<a id="standard-installation-and-upgrade"></a>

### Standard installation and upgrade

Install MI Scripting Toolkit in a virtual environment, alongside a minimal set of compatible third-party dependencies downloaded
from [PyPI](https://pypi.org/).

For the third-party dependencies that will be installed, see [Third-party and system dependencies](../user_guide/third_party_dependencies.md#third-party-dependencies).

To install MI Scripting Toolkit without direct access to PyPI, see [Offline installation](#offline-installation-pip).

#### Versionchanged
Changed in version 5.0: MI Scripting Toolkit is now provided as a package called `ansys-grantami-core`. `GRANTA_MIScriptingToolkit` is provided
for compatibility purposes only, and will be removed in a future release.

When `GRANTA_MIScriptingToolkit` is installed, imports from the `GRANTA_MIScriptingToolkit` and
`granta_miscriptingtoolkit.granta` modules succeed and a
[`APIDeprecationWarning`](../streamlined_api/exceptions.md#ansys.grantami.core.mi_meta_classes.APIDeprecationWarning) is emitted.

If you are installing MI Scripting Toolkit in an activated virtual environment, enter the following:

```default
$ pip install --upgrade ansys-grantami-core --find-links="C:\Users\user\scripting_toolkit\pip"
```

If you are installing MI Scripting Toolkit in a Python environment which is not available on the path, enter the following:

```default
$ path/to/python -m pip install --upgrade ansys-grantami-core --find-links="C:\Users\user\scripting_toolkit\pip"
```

When installation is complete, the MI Scripting Toolkit files are installed into the Python site-packages location.

#### WARNING
Do not manually install the `ansys-grantami-core` wheel file. There are additional dependencies included in the
`pip` folder which must be installed for MI Scripting Toolkit to function correctly.

<a id="pip-extras"></a>

<a id="id15"></a>

### pip extras

MI Scripting Toolkit defines optional third-party dependencies in the form of extras:

* `[notebooks]`: Required to execute the [Example notebooks](../examples/index.md).
* `[oidc]`: Required to use OpenID Connect (OIDC) authentication.

For a list of additional dependencies included in each extra, see [Third-party and system dependencies](../user_guide/third_party_dependencies.md#third-party-dependencies).

To install an extra, include the extra name after the package name when installing MI Scripting Toolkit. For example, to install
MI Scripting Toolkit with the additional notebook dependencies:

```default
$ pip install --upgrade ansys-grantami-core[notebooks] --find-links="C:\Users\user\scripting_toolkit\pip"
```

Note that macOS uses the zsh shell by default, which requires square brackets to be escaped with a `\` character. For
example, `[notebooks]` is replaced with `\[notebooks\]`.

To install both the notebook and OIDC dependencies:

```default
$ pip install --upgrade ansys-grantami-core[notebooks,oidc] --find-links="C:\Users\user\scripting_toolkit\pip"
```

If you encounter dependency errors when installing the `[notebooks]` extra, you may need to first upgrade `pip`:

```default
python -m pip install --upgrade pip
```

<a id="pip-install-validated-dependencies"></a>

<a id="installing-with-validated-third-party-dependencies"></a>

### Installing with validated third-party dependencies

By default, `pip` automatically resolves and installs the latest compatible versions of third-party dependencies. This
is generally preferred to make sure recent bug fixes and security patches are installed. In some cases though, it is
useful to install a validated set of third-party dependencies. These validated dependencies are specified in an
additional *constraints* file, provided in the `extras` folder of the zip file.

To install MI Scripting Toolkit with validated dependencies, enter the following:

```default
$ pip install --upgrade ansys-grantami-core --find-links="C:\Users\user\scripting_toolkit\pip" --constraint="C:\Users\user\scripting_toolkit\extras\constraints.txt"
```

This will install the exact package versions in the `constraints.txt` file.

The `constraints.txt` file can be combined with extras as well. For example, to install the `[notebooks]` extra with
validated dependencies:

```default
$ pip install --upgrade ansys-grantami-core[notebooks] --find-links="C:\Users\user\scripting_toolkit\pip" --constraint="C:\Users\user\scripting_toolkit\extras\constraints.txt"
```

<a id="offline-installation-pip"></a>

<a id="offline-installation"></a>

### Offline installation

To install MI Scripting Toolkit without access to PyPI, first download the required third-party dependencies using a Python
environment with PyPI access. Enter the following into the command line to download the wheels into the
`C:\Users\user\all_wheels` directory:

```default
$ pip download ansys-grantami-core --find-links="C:\Users\user\scripting_toolkit\pip" --dest="C:\Users\user\all_wheels"
```

This command is also compatible with the `--constraint` option. To download the validated set of wheels to the
`all_wheels` directory, enter the following:

```default
$ pip download ansys-grantami-core --find-links="C:\Users\user\scripting_toolkit\pip" --dest="C:\Users\user\all_wheels" --constraint="C:\Users\user\scripting_toolkit\extras\constraints.txt"
```

Copy the `all_wheels` directory to the machine without access to PyPI, and enter the following into the command line
to install MI Scripting Toolkit using the packages in the `all_wheels` directory:

```default
$ pip install ansys-grantami-core --find-links="C:\Users\user\all_wheels" --no-index
```

These instructions describe how to download the required packages for the current platform only. To download packages
for a different platform, for example to download Linux wheels in a Windows environment, see the
[pip download](https://pip.pypa.io/en/stable/cli/pip_download/) documentation.

<a id="upgrading-from-project-v3-0-or-earlier"></a>

### Upgrading from MI Scripting Toolkit v3.0 or earlier

#### WARNING
The MI Scripting Toolkit package name changed with v3.1 from `miscriptingtoolkit` to `GRANTA_MIScriptingToolkit`, and has
since changed to `ansys-grantami-core`. If you are upgrading from MI Scripting Toolkit v3.0 or earlier, you **must** follow
the instructions in this section or `pip install` may fail with dependency conflicts.

If you are using a virtual environment, you should delete your virtual environment and create a new one.

If you are not using a virtual environment, you should uninstall older version of MI Scripting Toolkit by entering the following
into the command line:

```default
$ pip uninstall miscriptingtoolkit
```

Or if you are using a Python environment which is not available on the path:

```default
$ path/to/python -m pip uninstall miscriptingtoolkit
```

<a id="detailed-client-requirements"></a>

<a id="id16"></a>

## Detailed client requirements

<a id="linux"></a>

### Linux

The wheel provided for installation via pip on Linux is a [manylinux_2_28_x86_64](https://packaging.python.org/en/latest/specifications/platform-compatibility-tags/#manylinux) wheel and is compatible with any
manylinux 2.28-compliant x86-64 Linux platform. This typically means that the platform must be based on `glibc>=2.28`.

#### NOTE
The use of MI Scripting Toolkit on Linux platforms that meet this threshold but are not listed in
[Table 1](#pip-platform-support) is not supported or tested, but it is anticipated that it will function as
expected.

For Linux platforms that do not meet this requirement, it is recommended to either use a compatible docker container or
to install via [conda](conda.md). Whilst the use of conda packages in other platforms is not tested, it is
anticipated that they will function as expected.

<a id="macos"></a>

### macOS

The wheel provided for installation via pip on macOS is a [macosx_11_0_arm64](https://packaging.python.org/en/latest/specifications/platform-compatibility-tags/#macos) wheel. It is compatible with macOS 11 or
later running on a Mac with an ARM64 processor (also known as Apple silicon).
