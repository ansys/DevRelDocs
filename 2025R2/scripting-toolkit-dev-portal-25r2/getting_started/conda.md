<a id="installation-with-conda"></a>

# Installation with conda

<a id="server-software-requirements"></a>

## Server software requirements

To use MI Scripting Toolkit 4.2, your Granta MI server must be running 2023 R1 or later, which includes Service Layer
Interface 22/04.

<a id="client-software-requirements"></a>

## Client software requirements

MI Scripting Toolkit 4.2 for conda requires conda 4.12.0 or later.

#### NOTE
MI Scripting Toolkit is only supported when used with the miniforge-provided version of the conda package manager. The use of
other conda editions (for example miniconda or Anaconda) may work, but their use is unsupported. At a minimum, you
must enable the `conda-forge` package source with the following command before following the installationinstructions on this page:

```default
conda config --add channels conda-forge
conda config --set channel_priority strict
```

MI Scripting Toolkit is supported on the following platforms:

| Platform                                               | Python 3.10   | Python 3.11   | Python 3.12   | Python 3.13   |
|--------------------------------------------------------|---------------|---------------|---------------|---------------|
| Ubuntu 22.04 <sup>[1](#id6)</sup>                      | Certified     | Certified     | Certified     | Certified     |
| Ubuntu 24.04 <sup>[2](#id7)</sup>                      | Supported     | Supported     | Supported     | Supported     |
| SUSE Linux Enterprise<br/>15 SP4+ <sup>[3](#id8)</sup> | Supported     | Supported     | Supported     | Supported     |
| RHEL 8.8+, 9.3+ <sup>[4](#id9)</sup>                   | Supported     | Supported     | Supported     | Supported     |
| Rocky Linux<br/>8.9+, 9.3+ <sup>[5](#id10)</sup>       | Supported     | Supported     | Supported     | Supported     |
* <a id='id6'>**[1]**</a> Automated testing performed on Ubuntu 22.04 development release. Manual testing performed on Ubuntu 22.04.4.
* <a id='id7'>**[2]**</a> Manual testing performed on Ubuntu 24.04.2.
* <a id='id8'>**[3]**</a> Manual testing performed on SLES 15 SP5.
* <a id='id9'>**[4]**</a> Manual testing performed on RHEL 8.10.
* <a id='id10'>**[5]**</a> Manual testing performed on Rocky Linux 9.4.

<a id="required-third-party-packages"></a>

### Required third-party packages

MI Scripting Toolkit depends on the following third-party packages:

- filetype (>=1.2.0,<2.0.0)
- packaging (>=24.0,<25.0)
- python-dateutil (>=2.9.0,<3.0.0)

#### NOTE
The list above include only the direct dependencies of the Scripting Toolkit package. The transitive dependencies
(dependencies of dependencies) are not given here, since in general they depend on the specific version of the
dependency that is selected, and as a result will change over time.

The recommended way to determine the full requirements at a particular point in time is to install the Scripting
Toolkit into a new Conda virtual environment, and then use `conda list` to display the installed packages.

<a id="installing-project"></a>

## Installing MI Scripting Toolkit

MI Scripting Toolkit is provided as a zip file, and is available from the Downloads page on the Ansys Customer Portal. This section
assumes that the zip file has been downloaded and the contents have been unzipped to the location
`/home/user/scripting_toolkit`.

To install MI Scripting Toolkit, enter the following into the Linux command line:

```default
$ conda install -c file:///home/user/scripting_toolkit/conda granta_miscriptingtoolkit
```

Once installation is complete, the MI Scripting Toolkit files and all required dependencies are installed into the conda virtual
environment.

<a id="conda-extras"></a>

<a id="additional-conda-dependencies"></a>

### Additional conda dependencies

MI Scripting Toolkit defines optional dependencies as additional packages:

* `granta_miscriptingtoolkit.notebooks`: Required to execute the [Example notebooks](../notebooks/index.md).
* `granta_miscriptingtoolkit.oidc`: Required to use OpenID Connect (OIDC) authentication.

These packages can be installed instead of the base `granta_miscriptingtoolkit` package to provide additional
functionality. For example, to install the dependencies required to run the notebooks:

```default
$ conda install -c file:///home/user/scripting_toolkit/conda granta_miscriptingtoolkit.notebooks
```

Or to install both the notebook and OIDC dependencies:

```default
$ conda install -c file:///home/user/scripting_toolkit/conda granta_miscriptingtoolkit.notebooks granta_miscriptingtoolkit.oidc
```

The `[notebooks]` extra includes the following additional dependencies:

- jupyterlab (>=4.0.0,<5.0.0)
- matplotlib (>=3.6.0,<4.0.0)
- numpy (>=2.0.0,<3.0.0)
- pandas (>=2.1,<3.0)
- python-docx (>=1.1.0,<2.0.0)
- python-pptx (>=1.0.0,<2.0.0)
- scipy (>=1.11.0,<2.0.0)
- seaborn (>=0.13,<0.14)

The `[oidc]` extra includes the following additional dependencies:

- keyring (>23,<26)
