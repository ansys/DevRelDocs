# Get DVS

<a id="group__dvs__get"></a>

How to get the DVS libraries.

---

 <a id="group__dvs__get_1Download-Latest-Install"></a>
 ## Download Latest Install






Download and install the latest [ANSYS](namespace_a_n_s_y_s.md#namespace_a_n_s_y_s) suite (21.1 or greater). EnSight (or CEI) products are installed by default.





Most files needed are located within :[InstallDir]/vXXX/CEI/ensightXXX/src/readers/dvs (XXX refers to the version number, i.e. 211, 212 etc.)





**Note:** This document will refer to directories and scripts with numbers in them, these values change with versions. In 21.1 the directories/scripts will use 211. For newer versions such as 21.2 replace 211 with 212 etc.





---







<a id="_1Getting started"></a>
 ## What is Available






The dvs directory includes all of the code needed to build a C/C library to use within another code base as well as some pre-built binaries for C/Python for use on Windows and Linux. Files of Interest: <br/>

* [test\_dvs\_client.c](test__dvs__client_8c.md#test__dvs__client_8c): An example of how to use the C API. It's used as our test client.

* [test\_dvs\_client\_cxx.cpp](test__dvs__client__cxx_8cpp.md#test__dvs__client__cxx_8cpp): An example of how to use the C API. Used in testing.

* [test\_dvs\_client\_simple.py](test__dvs__client__simple_8py.md#test__dvs__client__simple_8py): An example of how to use the Python API

* [dynamic\_visualization\_store\_api.h](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h): This is our exposed C-API

* [dynamic\_visualization\_store\_enums.h](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h): Enums used in the API

* [dynamic\_visualization\_store\_error\_codes.h](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h): Error codes returned from API calls

* [dvs\_client\_interface.h](dvs__client__interface_8h.md#dvs__client__interface_8h): This is our exposed C Client API

* [dvs\_server\_interface.h](dvs__server__interface_8h.md#dvs__server__interface_8h): This is our exposed C Server API







Pre-built Code: If you wish to take advantage of the pre-built C API or C API, the built libraries (libdvsapi) are included in the dvs/linux_2.6_63 or dvs/win64 directories depending on the platform. For C and C you should be able to link against the libdvsapi library and use it directly.





For more information on building the code if you need to please reach out to the Postprocessing team.





More information on the usage of [C/C/Python APIs](#group__dvs__apis_1Available-APIs)





---

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C]: https://img.shields.io/badge/language-C-blue (C)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)