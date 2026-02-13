<a id="Readme_8txt"></a>
# File Readme.txt

![][Markdown]

**Location**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/Examples/Readme.txt`





## Source


```markdown
How to Use the Examples
-----------------------

<pre>
The Examples folder contains some example files that demonstrate how to use DPF.

The DPF API is written using an Hour Glass Pattern. HGP removes the requirement
of linking DPF libraries into user code.

The included example code compiles on both Windows and Linux. It demonstrates
how to use many of the functions within the DPF API.

There is a simple example, CompleteRST.cpp, for loading a Mechanical RST file.
The code demonstrates how to read the mesh and the results.

The ModelTest.cpp file shows how to read more detailed information from RST
files.

The ResultTest.cpp file shows how to read result-related data from RST files.

Each of these files contains several self-contained examples. In each example,
information is read from a file and compared to expected values. When compiled and run, the example
code produces output similar to the following:

Running Example:                                    ResultsreadSEQV    Success
Running Example:                         ResultsreadSEQVAtGivenNode    Success
Running Example:                        ResultsreadSEQVAtGivenNodes    Success
Running Example:                            ResultsreadTemperatures    Success
Running Example:                 ResultsreadSXAtGivenNamedSelection    Success
Running Example:            ResultsreadSXAtGivenStepIndexAndSubStep    Success
Running Example:                ResultsreadSEQVAmplitudeAtGivenTime    Success
Running Example:           ResultsreadSEQVAmplitudeAtGivenTimeIndex    Success
Running Example:      ResultsreadSEQVAmplitudeAtGivenStepAndSubStep    Success
Running Example:                ResultsreadSEQVWithPhaseAtGivenTime    Success
Running Example:           ResultsreadSEQVWithPhaseAtGivenTimeIndex    Success
Running Example: ResultsreadSEQVWithPhaseAtGivenStepIndexAndSubStep    Success
Running Example:                                  ModelreadMetaData    Success
Running Example:                                ModelreadResultInfo    Success
Running Example:                         ModelaccessTimeFreqSupport    Success
Running Example:                           ModelreadNamedSelections    Success
Running Example:       ModelCreateResultEvaluationWorkflowInclusive    Success
Running Example:                                        CompleteRST    Success

On Windows, the console window will generally disappear if no error occurs.

If an error occurs, the output could look like:

Running Example:                                    ResultsreadSEQV    Success
Running Example:                         ResultsreadSEQVAtGivenNode    Success
Running Example:                        ResultsreadSEQVAtGivenNodes    Success
Running Example:                            ResultsreadTemperatures    Success
Running Example:                 ResultsreadSXAtGivenNamedSelection    Success
Running Example:            ResultsreadSXAtGivenStepIndexAndSubStep    Success
Running Example:                ResultsreadSEQVAmplitudeAtGivenTime    Success
Running Example:           ResultsreadSEQVAmplitudeAtGivenTimeIndex    Success
Running Example:      ResultsreadSEQVAmplitudeAtGivenStepAndSubStep    Success
Running Example:                ResultsreadSEQVWithPhaseAtGivenTime    Success
Running Example:           ResultsreadSEQVWithPhaseAtGivenTimeIndex    Success
Running Example: ResultsreadSEQVWithPhaseAtGivenStepIndexAndSubStep    Success
Running Example:                                  ModelreadMetaData    Success
Running Example:                                ModelreadResultInfo    Success
Running Example:                         ModelaccessTimeFreqSupport    Success
Running Example:                           ModelreadNamedSelections    Success
Running Example:       ModelCreateResultEvaluationWorkflowInclusive    Success
Running Example:                                        CompleteRST    Fail - File: CompleteRST.cpp Line: 126 Condition: elementTypesData.size() == 4
Press enter to continue

The console will pause, waiting for input.

To build the example code, a vcxproj file is included for Windows and a
Makefile is included for Linux.

Windows
-------

1. Change to the Examples folder.
2. Load the Example.vcxproj file into Visual Studio.
3. Build the solution. DPF_Examples.exe is created.
4. Press F5 in Visual Studio to run the code. If an error occurs, the program
   will pause after running and show the results of running the examples.

If DPF was installed as part of a normal Ansys Software installation, the
required .dll files are available for running the DPF example code.  The vcxproj
file sets the working folder to the build folder and adds appropriate folders
to the PATH before running the code (location of DataProcessingCore.dll must be 
known by the system PATH).

Linux
-----

1. Change to the Examples folder.
2. Run the command "make".  This builds the DPF_Examples executable.
3. Run the command "make run". This runs the DPF_Examples executable.
4. Run the command "Make clean", to clean up.

If DPF was installed as part of a normal Ansys Software installation, the
required .so files are available for running the example code. The Makefile sets
the working folder to the build folder and configures LD_LIBRARY_PATH and
LD_PRELOAD before running the code.

Notes regarding LD_LIBRARY_PATH and LD_PRELOAD: 
1. LD_LIBRARY_PATH must be set to target the location of libDataProcessingCore.so.
2. LD_PRELOAD must be set to target the libstdc++.so.6, libiomp5.so, libmkl_core.so and libmkl_intel_thread.so locations.

Facing issues when running the LD_PRELOAD related command, edit the Makefile. In the run command, replace the following line:
    export LD_LIBRARY_PATH=$(ANSYSDIR)/dpf/bin/linx64:$(LD_LIBRARY_PATH)
    export LD_PRELOAD=$(ANSYSDIR)/dpf/bin/linx64/libiomp5.so:$(ANSYSDIR)/dpf/bin/linx64/libmkl_core.so:$(ANSYSDIR)/dpf/bin/linx64/libmkl_intel_thread.so:$(ANSYSDIR)/tp/stdc++/libstdc++.so.6:$(LD_PRELOAD)
These lines must be replaced with the following content:
    export LD_LIBRARY_PATH=$(ANSYSDIR)/aisol/dll/linx64:$(LD_LIBRARY_PATH)
    export LD_PRELOAD=$(ANSYSDIR)/tp/IntelCompiler/2023.1.0/linx64/lib/intel64/libiomp5.so:$(ANSYSDIR)/tp/IntelMKL/2024.2.0/linx64/lib/intel64/libmkl_core.so:$(ANSYSDIR)/tp/IntelMKL/2024.2.0/linx64/lib/intel64/libmkl_intel_thread.so:$(ANSYSDIR)/tp/stdc++/libstdc++.so.6:$(LD_PRELOAD)

Note
----

The example code looks for data files relative to the build folder. You must be
in the build folder before running the example executable.

The data files are in the "testfiles" folder at the DPF root.

The example code requires many common files from Ansys to run, so DPF must be
installed with Ansys software.
```


[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)