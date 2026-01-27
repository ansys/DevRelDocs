# Installation with conda

<a id="installation-with-conda"></a>

<a id="server-software-requirements"></a>

## Server software requirements

To use MI Scripting Toolkit 5.0, your Granta MI server must be running 2024 R2 or later, which includes Service Layer
Interface 23/10.

<a id="client-software-requirements"></a>

## Client software requirements

MI Scripting Toolkit 5.0 for conda requires conda 4.12.0 or later.

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

| Platform                                                        | Python 3.11   | Python 3.12   | Python 3.13   | Python 3.14   |
|-----------------------------------------------------------------|---------------|---------------|---------------|---------------|
| Ubuntu 22.04 <sup>[1](#id6)</sup>                               | Recommended   | Recommended   | Recommended   | Recommended   |
| Ubuntu 24.04 <sup>[2](#id7)</sup>                               | Supported     | Supported     | Supported     | Supported     |
| SUSE Linux Enterprise<br/>15 SP5+, 16 SP0  <sup>[3](#id8)</sup> | Supported     | Supported     | Supported     | Supported     |
| RHEL 8.8, 8.10, 9.4,<br/>9.6 <sup>[4](#id9)</sup>               | Supported     | Supported     | Supported     | Supported     |
| Rocky Linux<br/>8.10, 9.4, 9.6 <sup>[5](#id10)</sup>            | Supported     | Supported     | Supported     | Supported     |
* <a id='id6'>**[1]**</a> Automated testing performed on Ubuntu 22.04 development release. Manual testing performed on Ubuntu 22.04.5.
* <a id='id7'>**[2]**</a> Manual testing performed on Ubuntu 24.04.2.
* <a id='id8'>**[3]**</a> Manual testing performed on SLES 15 SP6.
* <a id='id9'>**[4]**</a> Manual testing performed on RHEL 8.10.
* <a id='id10'>**[5]**</a> Manual testing performed on Rocky Linux 9.6.

<a id="required-third-party-packages"></a>

### Required third-party packages

MI Scripting Toolkit depends on the following third-party packages:

- filetype>=1.2.0
- packaging>=24.0

#### NOTE
The list above include only the direct dependencies of the Scripting Toolkit package. The transitive dependencies
(dependencies of dependencies) are not given here, since in general they depend on the specific version of the
dependency that is selected, and as a result will change over time.

The recommended way to determine the full requirements at a particular point in time is to install the Scripting
Toolkit into a new Conda virtual environment, and then use `conda list` to display the installed packages.

<a id="installing-project"></a>

## Installing MI Scripting Toolkit

#### Versionchanged
Changed in version 5.0: MI Scripting Toolkit is now provided as a package called `ansys-grantami-core`. `granta_miscriptingtoolkit` is provided
for compatibility purposes only, and will be removed in a future release.

When `granta_miscriptingtoolkit` is installed, imports from the `granta_miscriptingtoolkit` and
`granta_miscriptingtoolkit.granta` modules succeed and a
[`APIDeprecationWarning`](../streamlined_api/exceptions.md#ansys.grantami.core.mi_meta_classes.APIDeprecationWarning) is emitted.

MI Scripting Toolkit is provided as a zip file, and is available from the Downloads page on the Ansys Customer Portal. This section
assumes that the zip file has been downloaded and the contents have been unzipped to the location
`/home/user/scripting_toolkit`.

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

These packages can be installed instead of the base `ansys-grantami-core` package to provide additional
functionality. For example, to install the dependencies required to run the notebooks:

```default
$ conda install -c file:///home/user/scripting_toolkit/conda ansys-grantami-core.notebooks
```

Or to install both the notebook and OIDC dependencies:

```default
$ conda install -c file:///home/user/scripting_toolkit/conda ansys-grantami-core.notebooks ansys-grantami-core.oidc
```

The `[notebooks]` extra includes the following additional dependencies:

- jupyterlab>=4.0.0
- matplotlib>=3.6.0
- numpy>=1.23.5
- pandas>=2.1
- python-docx>=1.1.0
- python-pptx>=1.0.0
- scipy>=1.11.0
- seaborn>=0.13

The `[oidc]` extra includes the following additional dependencies:

- keyring<26,>23
