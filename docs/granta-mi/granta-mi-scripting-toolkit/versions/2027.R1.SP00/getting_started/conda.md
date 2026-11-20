# Installation with conda

<a id="installation-with-conda"></a>

<a id="server-software-requirements"></a>

## Server software requirements

To use MI Scripting Toolkit 5.1, your Granta MI server must be running 2024 R2 or later, which includes Service Layer
Interface 23/10.

<a id="supported-client-platforms"></a>

## Supported client platforms

MI Scripting Toolkit 5.1 for conda requires conda 4.12.0 or later.

#### NOTE
MI Scripting Toolkit is only supported when used with the miniforge-provided version of the conda package manager. The use of
other conda editions (for example miniconda or Anaconda) may work, but their use is unsupported. At a minimum, you
must enable the `conda-forge` package source with the following command before following the installation
instructions on this page:

```default
conda config --add channels conda-forge
conda config --set channel_priority strict
```

MI Scripting Toolkit is supported on the following platforms:

#### Table 1: Supported platforms for MI Scripting Toolkit with conda

| Platform                                                        | Python 3.12   | Python 3.13   | Python 3.14   |
|-----------------------------------------------------------------|---------------|---------------|---------------|
| Ubuntu 22.04 <sup>[1](#id6)</sup>                               | Recommended   | Recommended   | Recommended   |
| Ubuntu 24.04 <sup>[2](#id7)</sup>                               | Supported     | Supported     | Supported     |
| SUSE Linux Enterprise<br/>15 SP5+, 16 SP0  <sup>[3](#id8)</sup> | Supported     | Supported     | Supported     |
| RHEL 8.10, 9.6, 9.8<br/>10.2 <sup>[4](#id9)</sup>               | Supported     | Supported     | Supported     |
| Rocky Linux 8.10<br/>9.6, 9.8, 10.2 <sup>[5](#id10)</sup>       | Supported     | Supported     | Supported     |
* <a id='id6'>**[1]**</a> Automated testing performed on Ubuntu 22.04 development release. Manual testing performed on Ubuntu 22.04.5.
* <a id='id7'>**[2]**</a> Manual testing performed on Ubuntu 24.04.2.
* <a id='id8'>**[3]**</a> Manual testing performed on SLES 15 SP6.
* <a id='id9'>**[4]**</a> Manual testing performed on RHEL 8.10.
* <a id='id10'>**[5]**</a> Manual testing performed on Rocky Linux 9.6.

<a id="installation"></a>

## Installation

<a id="preparation"></a>

### Preparation

MI Scripting Toolkit is provided as a zip file, and is available from the Downloads page on the Ansys Customer Portal. This section
assumes that the zip file has been downloaded and the contents have been unzipped to the location
`/home/user/scripting_toolkit`. Replace this path as required for your environment.

<a id="installing-and-upgrading-conda"></a>

<a id="standard-installation-and-upgrade"></a>

### Standard installation and upgrade

This section describes how to install MI Scripting Toolkit in a virtual environment, alongside a minimal set of compatible
third-party dependencies. For a list of required dependencies, see [Third-party and system dependencies](../user_guide/third_party_dependencies.md#third-party-dependencies).

#### Versionchanged
Changed in version 5.0: MI Scripting Toolkit is now provided as a package called `ansys-grantami-core`. `granta_miscriptingtoolkit` is provided
for compatibility purposes only, and will be removed in a future release.

When `granta_miscriptingtoolkit` is installed, imports from the `granta_miscriptingtoolkit` and
`granta_miscriptingtoolkit.granta` modules succeed and a
[`APIDeprecationWarning`](../streamlined_api/exceptions.md#ansys.grantami.core.mi_meta_classes.APIDeprecationWarning) is emitted.

To install MI Scripting Toolkit, enter the following into the Linux command line:

```default
$ conda install -c file:///home/user/scripting_toolkit/conda ansys-grantami-core
```

Once installation is complete, the MI Scripting Toolkit files and all required dependencies are installed into the conda virtual
environment.

#### WARNING
Do not manually install the `ansys-grantami-core` conda package file. There are additional dependencies included in
the `conda` folder which must be installed for MI Scripting Toolkit to function correctly.

<a id="conda-extras"></a>

<a id="additional-conda-dependencies"></a>

### Additional conda dependencies

MI Scripting Toolkit defines optional dependencies as additional packages:

* `ansys-grantami-core.notebooks`: Required to execute the [Example notebooks](../examples/index.md).
* `ansys-grantami-core.oidc`: Required to use OpenID Connect (OIDC) authentication.

For a list of additional dependencies included in each extra, see [Third-party and system dependencies](../user_guide/third_party_dependencies.md#third-party-dependencies).

These packages can be installed instead of the base `ansys-grantami-core` package to provide additional functionality.
For example, to install the dependencies required to run the notebooks:

```default
$ conda install -c file:///home/user/scripting_toolkit/conda ansys-grantami-core.notebooks
```

Or to install both the notebook and OIDC dependencies:

```default
$ conda install -c file:///home/user/scripting_toolkit/conda ansys-grantami-core.notebooks ansys-grantami-core.oidc
```
