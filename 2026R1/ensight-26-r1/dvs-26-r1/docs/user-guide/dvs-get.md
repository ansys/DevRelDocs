# Get DVS

<a id="dvs__get"></a>

How to get the DVS libraries.

 <a id="dvs__get_1Download-Latest-Install"></a>

## Download Latest Install

Download and install the latest ANSYS suite (21.1 or greater). EnSight (or CEI) products are installed by default.

Most files needed are located within: `[InstallDir]/vXXX/CEI/ensightXXX/src/readers/dvs` (XXX refers to the version number, i.e. `211`, `212` etc.)

**Note:** This document will refer to directories and scripts with numbers in them, these values change with versions. In 21.1 the directories/scripts will use `211`. For newer versions such as 21.2 replace `211` with `212` etc.


<a id="_1Getting started"></a>

## What is Available

The `dvs` directory includes all of the code needed to build a C/C++ library to use within another code base as well as some pre-built binaries for C/Python for use on Windows and Linux. Files of Interest: <br/>

* [test\_dvs\_client.c](../api/files/test__dvs__client_8c.md): An example of how to use the C API. It's used as our test client.

* [test\_dvs\_client\_cxx.cpp](../api/files/test__dvs__client__cxx_8cpp.md): An example of how to use the C API. Used in testing.

* [test\_dvs\_client\_simple.py](../api/files/test__dvs__client__simple_8py.md): An example of how to use the Python API

* [dynamic\_visualization\_store\_api.h](../api/files/dynamic__visualization__store__api_8h.md): This is our exposed C-API

* [dynamic\_visualization\_store\_enums.h](../api/files/dynamic__visualization__store__enums_8h.md): Enums used in the API

* [dynamic\_visualization\_store\_error\_codes.h](../api/files/dynamic__visualization__store__error__codes_8h.md): Error codes returned from API calls

* [dvs\_client\_interface.h](../api/files/dvs__client__interface_8h.md): This is our exposed C Client API

* [dvs\_server\_interface.h](../api/files/dvs__server__interface_8h.md): This is our exposed C Server API

Pre-built Code: If you wish to take advantage of the pre-built C API or C++ API, the built libraries (`libdvsapi`) are included in the `dvs/linux_2.6_63` or `dvs/win64` directories depending on the platform. For C and C++ you should be able to link against the `libdvsapi` library and use it directly.

For more information on building the code if you need to please reach out to the Postprocessing team.

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)