
# Installation with pip (recommended)

<a id="installation-with-pip-recommended"></a>

<a id="server-software-requirements"></a>

## Server software requirements

To use MI Scripting Toolkit 4.2, your Granta MI server must be running 2023 R1 or later, which includes Service Layer
Interface 22/04.

<a id="client-software-requirements"></a>

## Client software requirements

MI Scripting Toolkit for pip is supported on the following platforms:

| Platform                                                | Python 3.10                       | Python 3.11   | Python 3.12   | Python 3.13   |
|---------------------------------------------------------|-----------------------------------|---------------|---------------|---------------|
| Windows <sup>[1](#id7)</sup>                            | Certified                         | Certified     | Certified     | Certified     |
| Linux                                                   | Ubuntu 22.04 <sup>[2](#id8)</sup> | Certified     | Certified     | Certified     |
| Ubuntu 24.04 <sup>[3](#id9)</sup>                       | Supported                         | Supported     | Certified     | Supported     |
| SUSE Linux Enterprise<br/>15 SP4+ <sup>[4](#id10)</sup> | Supported                         | Supported     | Certified     | Supported     |
| RHEL 8.8+, 9.3+ <sup>[5](#id11)</sup>                   | Supported                         | Supported     | Certified     | Supported     |
| Rocky Linux<br/>8.9+, 9.3+ <sup>[6](#id12)</sup>        | Supported                         | Supported     | Certified     | Supported     |
* <a id='id7'>**[1]**</a> Automated testing performed on Windows Server 2022. Manual testing performed on Windows Server 2019 and Windows 11.
* <a id='id8'>**[2]**</a> Automated testing performed on Ubuntu 22.04 development release. Manual testing performed on Ubuntu 22.04.4.
* <a id='id9'>**[3]**</a> Automated testing performed on Ubuntu 24.04 development release. Manual testing performed on Ubuntu 24.04.2.
* <a id='id10'>**[4]**</a> Automated testing performed on SLES 15 SP4. Manual testing performed on SLES 15 SP5.
* <a id='id11'>**[5]**</a> Automated testing performed on RHEL 8.8 and 9.3. Manual testing performed on RHEL 8.10.
* <a id='id12'>**[6]**</a> Automated testing performed on Rocky Linux 8.9 and 9.3. Manual testing performed on Rocky Linux 9.4.

<a id="linux-requirements"></a>

### Linux requirements

The wheel provided for installation via pip on Linux is a ‘manylinux’ wheel and is compatible with any
manylinux 2.28-compliant Linux platform. This typically means that the platform must be based on `glibc>=2.28`.

#### NOTE
The use of MI Scripting Toolkit on other Linux platforms that meet this threshold is not supported or tested, but it is
anticipated that it will function as expected.

For Linux platforms that do not meet this requirement, it is recommended to either use a compatible docker container or
to install via [conda](conda.md). Whilst the use of conda packages in other platforms is not tested, it is
anticipated that they will function as expected.

MI Scripting Toolkit on Linux requires additional shared libraries beyond the glibc runtime. The required shared library names are
listed in the left-hand column; these usually represent symbolic links to shared libraries. The full name of the shared
library on our build environment is listed in the right-hand column.

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

<a id="required-third-party-packages"></a>

### Required third-party packages

MI Scripting Toolkit depends on the following third-party packages:

- filetype (>=1.2.0,<2.0.0)
- packaging (>=24.0,<25.0)
- python-dateutil (>=2.9.0,<3.0.0)

#### NOTE
The list above include only the direct dependencies of the MI Scripting Toolkit package. The transitive dependencies
(dependencies of dependencies) are not given here, since in general they depend on the specific version of the
dependency that is selected, and as a result will change over time.

The recommended way to determine the full requirements at a particular point in time is to install the Scripting
[https://docs.python.org/3/library/venv.html](https://docs.python.org/3/library/venv.html)), and then use `pip list` or `pip freeze` to display the installed
packages.

<a id="installing-and-upgrading-project"></a>

## Installing and upgrading MI Scripting Toolkit

MI Scripting Toolkit is provided as a zip file, and is available from the Downloads page on the Ansys Customer Portal. This section
assumes that the zip file has been downloaded and the contents have been unzipped to the location
`/home/user/scripting_toolkit` on Linux, or `C:\Users\user\scripting_toolkit` on Windows.

It is recommended to install MI Scripting Toolkit in a virtual environment. If you are installing MI Scripting Toolkit in an activated virtual
environment, enter the following (on Windows, replace the file path with `C:\Users\user\scripting_toolkit\pip`):

```default
$ pip install --upgrade granta_miscriptingtoolkit --find-links=/home/user/scripting_toolkit/pip
```

If you are installing MI Scripting Toolkit in a Python environment which is not available on the path, enter the following:

```default
$ path/to/python -m pip install --upgrade granta_miscriptingtoolkit --find-links=/home/user/scripting_toolkit/pip
```

When installation is complete, the MI Scripting Toolkit files are installed into the Python site-packages location.

<a id="pip-extras"></a>

<a id="id13"></a>

### pip extras

MI Scripting Toolkit defines additional optional dependencies in the form of extras:

* `[notebooks]`: Required to execute the [Example notebooks](../notebooks/index.md).
* `[oidc]`: Required to use OpenID Connect (OIDC) authentication.

To install an extra, include the extra name after the package name when installing MI Scripting Toolkit. For example, to install
MI Scripting Toolkit with the additional notebook dependencies:

```default
$ pip install --upgrade granta_miscriptingtoolkit[notebooks] --find-links=/home/user/scripting_toolkit/pip
```

Or to install both the notebook and OIDC dependencies:

```default
$ pip install --upgrade granta_miscriptingtoolkit[notebooks,oidc] --find-links=/home/user/scripting_toolkit/pip
```

The `[notebooks]` extra includes the following additional dependencies:

- Linux and Windows platforms:
  : - jupyterlab (>=4.0.0,<5.0.0)
    - matplotlib (>=3.6.0,<4.0.0)
    - numpy (>=2.0.0,<3.0.0)
    - pandas (>=2.1,<3.0)
    - python-docx (>=1.1.0,<2.0.0)
    - python-pptx (>=1.0.0,<2.0.0)
    - scipy (>=1.11.0,<2.0.0)
    - seaborn (>=0.13,<0.14)
- Windows only:
  : - docx2pdf (>=0.1.8,<0.2.0)
    - tqdm[notebook] (>=4.0,<5.0)

The `[oidc]` extra includes the following additional dependencies:

- keyring (>23,<26)

If you encounter dependency errors when installing the `[notebooks]` extra, you may need to first upgrade `pip`:

```default
python -m pip install --upgrade pip
```

<a id="upgrading-from-project-v3-0-or-earlier"></a>

## Upgrading from MI Scripting Toolkit v3.0 or earlier

#### WARNING
The MI Scripting Toolkit package name changed with v3.1 from `miscriptingtoolkit` to `GRANTA_MIScriptingToolkit`. If you
are upgrading from MI Scripting Toolkit v3.0 or earlier, you **must** follow the instructions in this section or `pip install`
may fail with dependency conflicts.

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
