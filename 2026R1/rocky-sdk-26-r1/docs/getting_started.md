# Getting started

<p id="getting_started"></p>

The Rocky Solver SDK is supported for the following operating systems:

- Windows 10 64-bit

- Rocky Linux 8 Linux 64-bit

This manual assumes that your system is one of the above and Rocky can
perform a simulation successfully in this system.

*Note: Refer to the [Rocky User Manual](https://ansyshelp.ansys.com/account/secured?returnurl=/Views/Secured/prod_page.html?pn=Rocky&pid=rockydem&lang=en) or search on the Rocky support channels if you were unable to run Rocky.*

The Rocky Solver SDK package for both supported operating systems can be
downloaded from Ansys Customer Portal.

It is assumed that users of the Rocky Solver SDK have basic knowledge of the
C++ and Python programming languages.

## Prerequisites for Linux

Unzip the Rocky Solver SDK for Linux in a folder of your choice. Set the
environment variable `RockySDK_DIR` with the location of the unzipped
`sdk` subdirectory.

The version of the Rocky Solver SDK is identified in the name of its zip file.
It is paramount that you install a Rocky Solver SDK of the same version as the
Rocky application upon which your module is designed to run.

*Note: The version of Rocky can be discovered by choosing Help → About in the application menus.*

Install the [CUDA](glossary.md#cuda) toolkit 12.8.0 for x86\_64 Rocky Linux 8. Set
the environment variable `CUDA_PATH_V12_8` with the location of the
installed CUDA toolkit. Example: `CUDA_PATH_V12_8=/usr/local/cuda-12.8/`.

## Build tools - Linux

<p id="build-tools-linux"></p>

Install Miniforge 3 for Linux 64-bit, then, activate a conda
prompt and install the following packages:

-  make

-  cmake

- "gxx_linux-64>=13,<14"

The conda prompt now contains a minimum set of tools required to build
Rocky modules.

## Prerequisites for Windows 10

Unzip the Rocky SDK for Windows in a folder of your choice. Set the
environment variable `RockySDK_DIR` with the location of the unzipped
`sdk` subdirectory.

The version of the Rocky SDK is identified in the name of its zip file.
It is paramount that you install a Rocky SDK of the same version as the
Rocky application upon which your module is designed to run.

*Note: The version of Rocky can be discovered by choosing Help → About in the application menus.*

Install [CUDA](glossary.md#cuda) toolkit 12.8.0 for Windows 10. Set the
environment variable `CUDA_PATH_V12_8` with the location of the CUDA
toolkit. Example: `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.8`. Ensure that the Visual
Studio Integration is enabled during the installation of the CUDA Toolkit.

After installing the CUDA Toolkit, copy the contents of the `MSBuildExtensions` directory from the
CUDA Toolkit installation to the `BuildCustomizations` directory in your Microsoft Visual Studio
installation. This can be done by opening a PowerShell window and running the following command:
```
cp "C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.8\extras\visual_studio_integration\MSBuildExtensions\*" "C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\MSBuild\Microsoft\VC\v170\BuildCustomizations" -r -force
```

## Build tools - Windows

Install Visual Studio Build Tools 2022, version 17.6.17.

You can obtain the URL for this specific version by clicking the "Build Tools" link in the
corresponding row of the **Fixed Version Bootstrappers** table at the following link:

https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-history#fixed-version-bootstrappers

Be sure to install the `Desktop development with C++` workload with at least the following
components:

- VC++ 2022 version latest tools
- Windows 10 SDK
- Visual C++ tools for CMake
