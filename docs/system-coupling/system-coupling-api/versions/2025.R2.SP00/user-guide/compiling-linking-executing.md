# Compiling, linking, and executing applications that use the participant library

The instructions for linking and compiling the participant library
depend on the target platform, the target language, the MPI distribution, and
the compiler.

## Supported languages

System Coupling interfaces are provided for the following target languages:

| Language      | Standard                                                |
| ------------- | ------------------------------------------------------- |
| C++           | C++11 or later                                          |
| C             | C89 or later                                            |
| Fortran       | 2003 or later (both fixed form and free form)           |
| Python        | 3.10*                                                    |

\* Only some Python interpreters are supported.
The CPython interpreter located in `<ANSYSInstallationPath>/commonfiles/CPython` is supported on Windows and on Linux,
and it is the recommended interpreter. Other Python interpreters have not been tested.

## System Coupling participant library resources

Resources are available at the following locations:

### Public header files

- `<ANSYSInstallationPath>/SystemCoupling/runTime/<platform>/include/SystemCouplingParticipant`

  All public header files for the C++, C, and Fortran interfaces are
  located in the above directory. Both fixed and free form headers are available
  for Fortran codes.

#### C++

Only `SystemCoupling.hpp` header file should be included into the source code.

#### C

Only `syscSystemCoupling.h` header file should be included into the source code.

#### Fortran

Only `syscPartLib.fi` header file should be included into the source code.

#### Python

There are two approaches to use the participant library in Python:
by using the wheel file (recommended), or by manually importing the
library with the required Python module.

##### Using the wheel file (recommended)

The wheel file for SCP library is located in the following directory:
`<ANSYSInstallationPath>/SystemCoupling/wheels/partlib/dist`

It can be pip-installed and as any other Python package. For example:
`pip install ansys_systemcoupling_partlib-25.2.0-cp310-abi3-win_amd64.whl`

Once pip-installed, it can be imported and used inside the Python script. For example:

```python
import ansys.systemcoupling.partlib as scp
sc = scp.SystemCoupling()
```

##### Manually importing the library with the Python module

`pyExt.SystemCouplingParticipant` module should be imported in Python.
However, first the following directoies must be included in `PYTHONPATH` environment variable:
- `<ANSYSInstallationPath>/SystemCoupling/runTime/<platform>/bin`
- `<ANSYSInstallationPath>/SystemCoupling/runTime/<platform>/bin/compiler`
- `<ANSYSInstallationPath>/SystemCoupling/runTime/<platform>/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/<platform>/stub`

In addition, due to a change in the behavior of python 3.8 and above on Windows
platforms, appropriate DLL directories must be added via `os.add_dll_directory` call.
For example:

```python
import os
import sys
if sys.platform == "win32":
    os.add_dll_directory("<ANSYSInstallationPath>/SystemCoupling/runTime/<platform>/bin")
    os.add_dll_directory("<ANSYSInstallationPath>/SystemCoupling/runTime/<platform>/bin/compiler"))
    os.add_dll_directory("<ANSYSInstallationPath>/SystemCoupling/runTime/<platform>/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/<platform>/stub")

import pyExt.SystemCouplingParticipant as scp
sc = scp.SystemCoupling()
```

### Link-time dependencies

- Windows
  - `<ANSYSInstallationPath>/SystemCoupling/runTime/<platform>/lib`
    - `SysC.SystemCouplingParticipant.lib`
    - `SysC.SystemCouplingParticipant.Fortran.lib` (only if using Fortran APIs)
  - `<ANSYSInstallationPath>/SystemCoupling/runTime/<platform>/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/<platform>/<mpi>`
    - `mpi_wrapper.lib`
- Linux
  - `<ANSYSInstallationPath>/SystemCoupling/runTime/<platform>/bin`
    - `SysC.SystemCouplingParticipant.so`
    - `SysC.SystemCouplingParticipant.Fortran.so` (only if using Fortran APIs)
  - `<ANSYSInstallationPath>/SystemCoupling/runTime/<platform>/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/<platform>/<mpi>`
    - `libmpi_wrapper.so`

### Run-time dependencies

- `<ANSYSInstallationPath>/SystemCoupling/runTime/<platform>/bin`
  - `SysC.SystemCouplingParticipant.dll` (Windows)
  - `SysC.SystemCouplingParticipant.Fortran.dll` (Windows, only if using Fortran APIs)
  - `SysC.SystemCouplingParticipant.Python.dll` (Windows, only if using Python APIs)
  - `libSysC.SystemCouplingParticipant.so` (Linux)
  - `libSysC.SystemCouplingParticipant.Fortran.so` (Linux, only if using Fortran APIs)
  - `libSysC.SystemCouplingParticipant.Python.so` (Linux, only if using Python APIs)
  - `pyExt/_SystemCouplingParticipant.pyd` (Windows, only if using Python APIs)
  - `pyExt/_SystemCouplingParticipant.so` (Linux, only if using Python APIs)
  - `pyExt/SystemCouplingParticipant.pyc` (only if using Python APIs)  
- `<ANSYSInstallationPath>/SystemCoupling/runTime/<platform>/bin/compiler`
- `<ANSYSInstallationPath>/SystemCoupling/runTime/<platform>/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/<platform>/<mpi>`
  - If not using a supported MPI distribution (this includes not using MPI at all), stub MPI wrapper should be used (replace `<mpi>` with "stub" above).

The above directories need to be included in the **`PATH`** environment
variable (on Windows) or **`LD_LIBRARY_PATH`** environment variable
(on Linux) at run-time.

### Ansys CPython interpreter (for Python only)

- `<ANSYSInstallationPath>/commonfiles/CPython/<version>/release/python`

## Dynamically loadable System Coupling Participant library resources

System Coupling Participant Library provides a dynamic way to load the library only when required. This uses the dlopen function on Linux and LoadLibraryA function on Windows. This way, the run-time dependency on the library is not required for the workflows when the library is not used.

The participant library and MPI wrapper library paths are passed in explicitly when the library needs to be loaded.

- `int syscLoadLibrary(const char* syscPartLibPath, const char* mpiWrapperPath)`, from `SystemCouplingParticipant/Proxy/ParticipantLibrary.h`.
- `SystemCouplingParticipant/FortranFixedForm/participantLibrary.fi` and `SystemCouplingParticipant/FortranFixedForm/participantLibrary.fi` provides corresponding Fortran interface.

Note that on Linux, please pass `NULL` to mpiWrapperPath and add MPI wrapper library path to `LD_LIBRARY_PATH` environment variable. This functionality is available for C and Fortran interface.

### C/C++

`syscSystemCoupling.h` and `ParticipantLibrary.h` header file should be included into the source code.

### Fortran

`syscPartLib.fi` and `ParticipantLibraryF.fi` header file should be included into the source code.

In addition, Fortran source files are provided under `SystemCouplingParticipant/Fortran` to compile their own fortran application without linking to `SysC.SystemCouplingParticipant.Fortran.dll` or `libSysC.SystemCouplingParticipant.Fortran.so` run time dependency.

### System coupling participant proxy static library

A static library  is provided to link when using system coupling participant proxy APIs .

- `<ANSYSInstallationPath>/SystemCoupling/runTime/<platform>/lib/static`
  - `SysC.SystemCouplingParticipant.Proxy.lib` (Windows)
  - `libSysC.SystemCouplingParticipant.Proxy.a` (Linux)

## Examples

In the following examples, mock solver applications from Heat Transfer in Square Channel Air Flow
tutorial are built with different configurations.
These examples can be used as a reference when building more complex applications.
The actual build steps
depend on your system configuration, compilers, and other details.
The source code for these applications is provided with the participant library
tutorial package.

In the following examples, replace

- `<ANSYSInstallationPath>` with the correct Ansys installation path.
- `<MultiportVersion>` with the correct version of the Fluent Multiport library.
- `<IntelMPIPath>` with the correct path to the Intel MPI library.

The following compiler and MPI versions were used:

- Linux
  - g++, gcc, and gfortran 8.2.0
  - Intel(R) Fortran Compiler, Version 19.0.5.281
  - Intel(R) MPI Library for Linux OS, Version 2017 Update 4
- Windows
  - Microsoft (R) C/C++ Optimizing Compiler Version 19.10.25027 for x64
  - Intel(R) Visual Fortran Intel(R) 64 Compiler Version 19.0.4.245
  - Intel(R) MPI Library for Windows OS, Version 2018 Update 3

### Linux

#### C++

```bash
g++ -std=c++11 -I<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/bin -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/lnamd64/stub -o ChannelFlowMockSolver ChannelFlowMockSolver.cpp -lSysC.SystemCouplingParticipant -lmpi_wrapper 
```

Note that the participant library was updated to use ABI=1 in version 2025 R2.
The previously required compiler flag, `-D_GLIBCXX_USE_CXX11_ABI=0`, is no longer
needed. Either update the build command to use `-D_GLIBCXX_USE_CXX11_ABI=1` (the default value) or remove
the flag entirely. If the executable can not be compiled with ABI=1, then we recommend using the C APIs.

#### C

```bash
gcc -std=c11 -I<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/bin -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/lnamd64/stub -o ChannelFlowMockSolver ChannelFlowMockSolver.c -lSysC.SystemCouplingParticipant -lmpi_wrapper
```

#### Fortran

GNU Fortran Compiler

```bash
gfortran -I<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include/SystemCouplingParticipant/FortranFixedForm -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/bin -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/lnamd64/stub -o ChannelFlowMockSolver ChannelFlowMockSolver.f -lSysC.SystemCouplingParticipant.Fortran -lmpi_wrapper
```

Intel Fortran Compiler

```bash
ifort -I<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include/SystemCouplingParticipant/FortranFixedForm -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/bin -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/lnamd64/stub -o ChannelFlowMockSolver ChannelFlowMockSolver.f -lSysC.SystemCouplingParticipant.Fortran -lmpi_wrapper -lgfortran
```

#### C++ parallel version using Intel MPI

```bash
g++ -std=c++11 -I<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include -I<IntelMPIPath>/intel64/include -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/bin  -L<IntelMPIPath>/intel64/lib/release -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/bin -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/lnamd64/stub -o ChannelFlowMockSolverMPI ChannelFlowMockSolverMPI.cpp -lSysC.SystemCouplingParticipant -lmpi -lmpi_wrapper
```

#### C parallel version using Intel MPI

```bash
gcc -std=c11 -I<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include -I<IntelMPIPath>/intel64/include -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/bin  -L<IntelMPIPath>/intel64/lib/release -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/bin -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/lnamd64/stub -o ChannelFlowMockSolverMPI ChannelFlowMockSolverMPI.c -lSysC.SystemCouplingParticipant -lmpi -lmpi_wrapper
```

#### Fortran parallel version using Intel MPI

GNU Fortran Compiler

```bash
gfortran -I<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include/SystemCouplingParticipant/FortranFixedForm -I<IntelMPIPath>/intel64/include -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/bin  -L<IntelMPIPath>/intel64/lib -L<IntelMPIPath>/intel64/lib/release -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/lnamd64/stub -o ChannelFlowMockSolverMPI ChannelFlowMockSolverMPI.f -lSysC.SystemCouplingParticipant.Fortran -lmpifort -lmpi -lmpi_wrapper
```

Intel Fortran Compiler

```bash
ifort -I<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include/SystemCouplingParticipant/FortranFixedForm -I<IntelMPIPath>/intel64/include -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/bin -L<IntelMPIPath>/intel64/lib -L<IntelMPIPath>/intel64/lib/release -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/lnamd64/stub -o ChannelFlowMockSolverMPI ChannelFlowMockSolverMPI.f -lSysC.SystemCouplingParticipant.Fortran -lmpifort -lmpi -lmpi_wrapper -lgfortran
```

#### C++ parallel version using Fluent MPI Wrapper

```bash
g++ -std=c++11 -I<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include -I<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/include -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/bin -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/lnamd64/stub -o ChannelFlowMockSolverMPI ChannelFlowMockSolverMPI.cpp -lSysC.SystemCouplingParticipant -lmpi_wrapper
```

#### Fortran parallel version using Fluent MPI Wrapper

Note that to link the MPI Wrapper, `include 'mpif.h'` statement in the application
must be replaced with the following C preprocessor directive:

```fortran
#include "mpif.h"
```

C preprocessor must be used. GNU Fortran compiler option for this is `-cpp`.

```bash
gfortran -cpp -I<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include/SystemCouplingParticipant/FortranFixedForm -I<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/include -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/bin -L<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/lnamd64/stub -o ChannelFlowMockSolverMPI ChannelFlowMockSolverMPI.f -lSysC.SystemCouplingParticipant.Fortran -lmpi_wrapper
```

#### Executing in standalone mode

Add the following locations to the `LD_LIBRARY_PATH` environment variable:

`<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/bin`
`<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/bin/compiler`
`<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/lnamd64/stub`

Now, if complied (C++, C, or Fortran) execute the program in standalone mode:

`./ChannelFlowMockSolver --scname="test"`

If using Python, also add the following location to the `PYTHONPATH` environment variable:

`<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/bin`

Now, execute the Python script in standalone mode:

`python ChannelFlowMockSolver.py --scname="test"`

#### Executing parallel version in standalone mode using Intel MPI

Add the following locations to the `LD_LIBRARY_PATH` environment variable:

`<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/bin`
`<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/bin/compiler`
`<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/cnlauncher/fluent/fluent<MultiportVersion>/multiport/mpi_wrapper/lnamd64/intel`

Now, execute the program in standalone mode locally using two processes:

`mpirun -n 2 ./ChannelFlowMockSolverMPI --scname="test"`

#### Proxy C++

```bash
g++ -std=c++11 -I<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include  -o ProxyTester <ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include/SystemCouplingParticipant/Proxy/ProxyTester.cpp <ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include/SystemCouplingParticipant/Proxy/DynamicLibrary.cpp <ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include/SystemCouplingParticipant/Proxy/ParticipantLibrary.cpp -ldl
```

#### Proxy Fortran

```bash
gfortran -I<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include -I<ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include/SystemCouplingParticipant/FortranFreeForm -o ProxyTesterFortranFreeForm  <ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include/SystemCouplingParticipant/Fortran/syscPartLibFortranC.f90 <ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include/SystemCouplingParticipant/Proxy/Fortran/ParticipantLibraryFortranC.f90  <ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include/SystemCouplingParticipant/Fortran/\*[!C].f90 <ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include/SystemCouplingParticipant/Proxy/Fortran/\*[!C].f90 <ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include/SystemCouplingParticipant/Proxy/ProxyTesterFortranFreeForm.f90 <ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include/SystemCouplingParticipant/Proxy/DynamicLibrary.cpp <ANSYSInstallationPath>/SystemCoupling/runTime/linx64/include/SystemCouplingParticipant/Proxy/ParticipantLibrary.cpp -ldl -lstdc++
```

### Windows

#### C++

```bat
cl /EHsc /I"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\include" ChannelFlowMockSolver.cpp /FeChannelFlowMockSolver.exe /link /subsystem:console /LIBPATH:"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\lib" SysC.SystemCouplingParticipant.lib
```

To compile in debug mode using `/ZI` flag (`/JMC` and `/RTC1` flags are added optionally):

```bat
cl /EHsc /ZI /JMC /RTC1 /I"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\include" ChannelFlowMockSolver.cpp /FeChannelFlowMockSolver.exe /link /subsystem:console /LIBPATH:"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\lib" SysC.SystemCouplingParticipant.lib
```

Note that the participant library is compiled with the `/MT` flag on Windows. You must compile C++ code that
links against the participant library with `/MT` or `/MD` flags. The debug run-times, `/MTd` and `/MDd` are
not compatible with the participant library. If you cannot change the compiler flags, then it is recommended
that you use the C APIs instead.

#### C

```bat
cl /EHsc /I"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\include" ChannelFlowMockSolver.c /FeChannelFlowMockSolver.exe /link /subsystem:console /LIBPATH:"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\lib" SysC.SystemCouplingParticipant.lib
```

#### Fortran

```bat
ifort -I"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\include\SystemCouplingParticipant\FortranFixedForm" /FeChannelFlowMockSolver.exe ChannelFlowMockSolver.f /link /subsystem:console /LIBPATH:"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\lib" SysC.SystemCouplingParticipant.Fortran.lib
```

#### C++ parallel version using Intel MPI

```bat
cl /EHsc /I"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\include" /I"<IntelMPIPath>\intel64\include" ChannelFlowMockSolverMPI.cpp /FeChannelFlowMockSolverMPI.exe /link /subsystem:console /LIBPATH:"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\lib" SysC.SystemCouplingParticipant.lib /LIBPATH:"<IntelMPIPath>\intel64\lib" impi.lib
```

#### C parallel version using Intel MPI

```bat
cl /EHsc /I"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\include" /I"<IntelMPIPath>\intel64\include" ChannelFlowMockSolverMPI.c /FeChannelFlowMockSolverMPI.exe /link /subsystem:console /LIBPATH:"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\lib" SysC.SystemCouplingParticipant.lib /LIBPATH:"<IntelMPIPath>\intel64\lib" impi.lib
```

#### Fortran parallel version using Intel MPI

```bat
ifort -I"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\include\SystemCouplingParticipant\FortranFixedForm" -I"<IntelMPIPath>\intel64\include" /FeChannelFlowMockSolverMPI.exe ChannelFlowMockSolverMPI.f /link /subsystem:console /LIBPATH:"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\lib" SysC.SystemCouplingParticipant.Fortran.lib /LIBPATH:"<IntelMPIPath>\intel64\lib" impi.lib
```

#### C++ parallel version using Fluent MPI Wrapper

```bat
cl /EHsc /I"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\include" /I"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\cnlauncher\fluent\fluent<MultiportVersion>\multiport\mpi_wrapper\include" ChannelFlowMockSolverMPI.cpp /FeChannelFlowMockSolverMPI.exe /link /subsystem:console /LIBPATH:"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\lib" SysC.SystemCouplingParticipant.lib /LIBPATH:"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\cnlauncher\fluent\fluent<MultiportVersion>\multiport\mpi_wrapper\win64\stub" mpi_wrapper.lib
```

#### Fortran parallel version using Fluent MPI Wrapper

Note that to link the MPI Wrapper, `include 'mpif.h'` statement in the application
must be replaced with the following C preprocessor directive:

```fortran
#include "mpif.h"
```

C preprocessor must be used. Intel Fortran compiler option for this is `-fpp`.

```bat
ifort -fpp -I"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\include\SystemCouplingParticipant\FortranFixedForm" -I"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\cnlauncher\fluent\fluent<MultiportVersion>\multiport\mpi_wrapper\include" /FeChannelFlowMockSolverMPI.exe ChannelFlowMockSolverMPI.f /link /subsystem:console /LIBPATH:"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\lib" SysC.SystemCouplingParticipant.Fortran.lib /LIBPATH:"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\cnlauncher\fluent\fluent<MultiportVersion>\multiport\mpi_wrapper\win64\stub" mpi_wrapper.lib
```

#### Proxy C++

```bat
cl /EHsc /MD /I"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\include" <ANSYSInstallationPath>\SystemCoupling\runTime\winx64include\SystemCouplingParticipant\Proxy\ProxyTester.cpp <ANSYSInstallationPath>\SystemCoupling\runTime\winx64include\SystemCouplingParticipant\Proxy\DynamicLibrary.cpp <ANSYSInstallationPath>\SystemCoupling\runTime\winx64include\SystemCouplingParticipant\Proxy\ParticipantLibrary.cpp user32.lib /FeProxyTester.exe /link /subsystem:console
```

#### Proxy Fortran

First generate `DynamicLibrary.staticrt.obj` and `ParticipantLibrary.staticrt.obj` using following command.

```bat
cl /EHsc /MT /FoDynamicLibrary.staticrt.obj /c /I"%SYSC_ROOT%\runTime\winx64\include" /I. <ANSYSInstallationPath>\SystemCoupling\runTime\winx64include\SystemCouplingParticipant\ProxyDynamicLibrary.cpp  /std:c++17
cl /EHsc /MT /FoParticipantLibrary.staticrt.obj /c /I"%SYSC_ROOT%\runTime\winx64\include" /I. <ANSYSInstallationPath>\SystemCoupling\runTime\winx64include\SystemCouplingParticipant\ParticipantLibrary.cpp  /std:c++17
```

Then pass these two objects file to ifort together with other fortran source files and then compile.

```bat
ifort -I"<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\include\SystemCouplingParticipant\FortranFreeForm" /FeProxyTesterFortranFreeForm.exe "<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\include\SystemCouplingParticipant\Fortran\syscPartLibFortranC.f90" "<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\include\SystemCouplingParticipant\Proxy\Fortran\ParticipantLibraryFortranC.f90" "<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\include\SystemCouplingParticipant\Fortran\*F.f90" "<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\include\SystemCouplingParticipant\Fortran\*Fortran.f90" "<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\include\SystemCouplingParticipant\Proxy\Fortran\*Fortran.f90" "<ANSYSInstallationPath>\SystemCoupling\runTime\winx64include\SystemCouplingParticipant\Proxy\ProxyTesterFortranFreeForm.f90" DynamicLibrary.staticrt.obj" ParticipantLibrary.staticrt.obj"  /link /subsystem:console user32.lib
```

#### Executing in standalone mode

Add the following locations to the `PATH` environment variable:

- `<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\bin`
- `<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\compiler`
- `<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\cnlauncher\fluent\fluent<MultiportVersion>\multiport\mpi_wrapper\win64\stub`

Now, if complied (C++, C, or Fortran) execute the program in standalone mode:

`ChannelFlowMockSolver.exe --scname="test"`

If using Python, also add the following location to the `PYTHONPATH` environment variable:

`<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\bin`

Now, execute the Python script in standalone mode:

`python.exe ChannelFlowMockSolver.py --scname="test"`

#### Executing parallel version in standalone mode using Intel MPI

Add the following locations to the `PATH` environment variable:

- `<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\bin`
- `<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\bin\compiler`
- `<ANSYSInstallationPath>\SystemCoupling\runTime\winx64\cnlauncher\fluent\fluent<MultiportVersion>\multiport\mpi_wrapper\win64\intel`

Now, execute the program in standalone mode locally using two processes:

`mpiexec -localonly -noprompt -n 2 ChannelFlowMockSolverMPI.exe --scname="test"`
