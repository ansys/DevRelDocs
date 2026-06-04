# External Metamodel Solver Interfaces

In applications within the virtual prototyping process, you cannot always reduce the complexity of the physical models and obtain numerical models which can be solved quickly. Usually, each numerical simulation takes hours or even days, and it is not possible to explore various model configurations. Due to the inherent complexity of many engineering problems, you can approximate the problem and to solve other design configurations in a smooth sub-domain by applying a surrogate model.

Starting from a reduced number of simulations, a surrogate model of the original physical problem can be used to perform various possible design configurations without computing any further analyses. These well-distributed results are used to create the metamodels. The metamodel with highest Coefficient of Prognosis (CoP) is taken to be optimal. The Metamodel of Optimal Prognosis (MOP) results are stored in a monitoring database file (`*.omdb`) and can be used for the MOP Solver standalone tools to replace the original solver process.

## Using the MOP Solver Standalone Interface

Complete the following procedure to use the MOP Solver standalone interface.

1. Initialize the monitoring database and create input and output files by running the following command.

   - On a Windows system:
     ```
     [installation path]\tools\mopsolver\bin\mopsolver.exe [additional options]
     ```
   - On a Linux system:
     ```
     [installation path]/tools/mopsolver/bin/mopsolver [additional options]
     ```
   - Include all three additional options listed in the following table:

   | Program Option | Input | Description |
   |---------------|-------|-------------|
   | --init        | `*.omdb` file | Reference values of all parameters are extracted and used to calculate the reference response values. These values are used to create input and output files. For initialization of the MOP Solver this option is mandatory. |
   | --input, -i   | text file for inputs to be written | Extracted reference values from monitoring database file are written to this file. If this file does not exist, it will be created. This option is mandatory. |
   | --output, -o  | text file for outputs to be written | Extracted reference input values from monitoring database file and corresponding output values of the metamodel are written to this file. If this file does not exist, it will be created. This option is mandatory. |

   A file named `limits.txt` containing parameter and response bounds, as well as the CoP matrix is written to the current working directory. Log messages can be found in the `(p)mopsolver.log` file of the current working directory.

2. Solve the variation of parameter combinations.

   The input file with the current design is read and output values that are solved by the metamodel are written to the output file. By default, designs with parameter values outside their bounds cause an error. Such designs can be extrapolated in extended mode.

   - To complete this step, run the same command used in the previous step and include the additional options listed in the following table:

   | Program Option | Input | Description |
   |---------------|-------|-------------|
   | --input, -i   | text file for inputs to be read | This file contains the design to be solved. This option is mandatory. |
   | --output, -o  | text file for outputs to be written | The approximated design containing parameter and responses are written to this file. This option is mandatory. |
   | --extended    | -     | This mode allows input parameter to exceed MOP sampling bounds. In default mode input values are checked before approximation and the application ends with an error. This option will be ignored in init mode. |

   For more information, include the following options:
   - `--help, -h` - Show brief help
   - `--version, -v` - Show version information

## Using the MOP Solver Programming Interface

In addition to the [standalone interface](#using-the-mop-solver-programming-interface), you can also use a programming interface to the MOP Solver. This C based API allows the MOP Solver to be embedded in various programming environments.

To get started with the MOP Solver C API, usage examples and reference documentation are provided under the [optiSLang MOPSolver API documentation](https://developer.ansys.com/docs/optislang-mopsolver-api-2023-r2/index.xhtml).

The MOP Solver installation and its API is located within the base installation directory (`[installation path]`) and includes the following subfolders and files:

| Directory | File | Description |
|-----------|------|-------------|
| `[installation path]/tools/mopsolver/bin/` | mopsolver.exe | MOP Solver executable with its dependencies. This install package contains the dynamic libraries which are necessary to use the MOPSolver API. |
| `[installation path]/tools/mopsolver/bin/` | mopsolver.dll / mopsolver.so | Shared library to access mop solver functionality including support for python based meta-models. |
| `[installation path]/tools/mopsolver/bin/` | mopsolver_no_ctm.dll / mopsolver_no_ctm.so | Shared library to access mop solver functionality without support for python based meta-models. |
| `[installation path]/tools/mopsolver/lib` | mopsolver.lib, mopsolver_no_ctm.lib | Respective static libraries with and without support for python based meta-models. |
| `[installation path]/tools/mopsolver/include` | hopsolver_api.h | The MOP Solver header file. |
| `[installation path]/tools/mopsolver/examples` | mop_tenbar.omdb | Example monitoring database file. |
| `[installation path]/tools/mopsolver/examples` | msapi_sample01_cpp.cpp | Code example to show the use of the mopsolver interface with C++ programming language. |
| `[installation path]/tools/mopsolver/examples` | msapi_sample01_c.c | Code example to show the use of the mopsolver interface with C programming language. |
