# Available APIs

<a id="group__dvs__apis"></a>

A list of all the APIs available in DVS





<a id="group__dvs__apis_1Available-APIs"></a>
.

## Available APIs






<a id="group__dvs__apis_1Using-the-C-Writer-API"></a>
 ### Using the C Writer API






The main header for the C Client Writer API is in [dynamic\_visualization\_store\_api.h](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h). At the top of the API header is a brief overview of the order to make the calls in. The methods are all documented here as well. <br/>
<br/>
 A full example of using the API can be found in [test\_dvs\_client.c](test__dvs__client_8c.md#test__dvs__client_8c). See the "Simple Demo" section for running this application. A pre-built binary for the test_dvs_client can be found in the linux_2.6_64 or win64 sub folders of the dvs directory. <br/>
<br/>
 A pre-built library (libdvsapi.*) to link against for windows and linux can be found under: [InstallDir]/vXXX/CEI/ensightXXX/src/readers/dvs/[ARCH] where arch will be win64 or linux_2.6_64 based on your current os (XXX refers to the version number, i.e. 211, 212 etc.). Just include the [dynamic\_visualization\_store\_api.h](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h) header and link to the library and away you go.





<a id="group__dvs__apis_1Using-the-Cplusplus-Writer-API"></a>
 ### Using the C++ Writer API






The main header for the C++ Client Writer API is in the [dvs\_client\_interface.h](dvs__client__interface_8h.md#dvs__client__interface_8h). To create an instance of the [DVS::IClient](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client) class use the factory method [DVS::CREATE\_CLIENT\_INSTANCE()](namespace_d_v_s.md#dvs__client__interface_8h_1a2475075c9ab4c2e57a8f0b4ab5bc5df4). This instance should be destroyed via [DVS::DESTROY\_CLIENT\_INSTANCE()](namespace_d_v_s.md#dvs__client__interface_8h_1a3f13d009a9a07278cbca3449113d78fc). An example using this API is in [test\_dvs\_client\_cxx.cpp](test__dvs__client__cxx_8cpp.md#test__dvs__client__cxx_8cpp). <br/>
<br/>
 The C++ server API is in [dvs\_server\_interface.h](dvs__server__interface_8h.md#dvs__server__interface_8h). To create an instance of the [DVS::IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server) class use the factory method [DVS::CREATE\_SERVER\_INSTANCE()](namespace_d_v_s.md#dvs__server__interface_8h_1a852580b9a49ac305e4ae26ca637bcc75). This instance should be destroyed using [DVS::DESTROY\_SERVER\_INSTANCE()](namespace_d_v_s.md#dvs__server__interface_8h_1adcdcbab1954ec53631a7136af7fc49b8).An example using this API is in [test\_dvs\_client\_cxx.cpp](test__dvs__client__cxx_8cpp.md#test__dvs__client__cxx_8cpp). <br/>
<br/>
 A pre-built library (libdvsapi.*) to link against for windows and linux can be found under: [InstallDir]/vXXX/CEI/ensightXXX/src/readers/dvs/[ARCH] where arch will be win64 or linux_2.6_64 based on your current os (XXX refers to the version number, i.e. 211, 212 etc.). Just include the appropriate headers and link to the library and away you go.





<a id="group__dvs__apis_1Using-the-Python-Writer-API"></a>
 ### Using the Python Writer API






A prebuilt library for Python3 exists for Windows ([InstallDir]/vXXX/CEI/apexXXX/machines/win64/Python-3.7.4/DLLs/dynamic_visualization_store.pyd) and Linux ([InstallDir]/vXXX/CEI/apexXXX/machines/linux_2.6_64/Python-3.7.4/lib/python3.7/dynamic_visualization_store.so). You will also need the libdvsapi library along side it (located [InstallDir]/vXXX/CEI/ensightXXX/src/readers/dvs/[ARCH]/libdvsapi.*). XXX refers to the version number, i.e. 211, 212 etc.





A simple example in python using this module is in the source code for [test\_dvs\_client\_simple.py](test__dvs__client__simple_8py.md#test__dvs__client__simple_8py).





<a id="group__dvs__apis_1Using-the-Cplusplus-Reader-API"></a>
 ### Using the C++ Reader API






The main header for the C++ Reader API is the [dvs\_query\_interface.h](dvs__query__interface_8h.md#dvs__query__interface_8h). To create an instance of the [DVS::IQuery](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query) class use the factory method [DVS::CREATE\_QUERY\_INSTANCE()](namespace_d_v_s.md#dvs__query__interface_8h_1ac614cf475eca0727cdb5b42faabcca7d). An example using this API is in [test\_dvs\_reader.cpp](test__dvs__reader_8cpp.md#test__dvs__reader_8cpp).





A pre-built library (libdvsapi.*) to link against for windows and linux can be found under: [InstallDir]/vXXX/CEI/ensightXXX/src/readers/dvs/[ARCH] where arch will be win64 or linux_2.6_64 based on your current os (XXX refers to the version number, i.e. 211, 212 etc.). Just include the appropriate headers and link to the library and away you go.





<a id="group__dvs__apis_1Using-the-Python-Reader-API"></a>
 ### Using the Python Reader API






A prebuilt library for Python3 exists for Windows ([InstallDir]/vXXX/CEI/apexXXX/machines/win64/Python-3.7.4/DLLs/dynamic_visualization_store.pyd) and Linux ([InstallDir]/vXXX/CEI/apexXXX/machines/linux_2.6_64/Python-3.7.4/lib/python3.7/dynamic_visualization_store.so). You will also need the libdvsapi library along side it (located [InstallDir]/vXXX/CEI/ensightXXX/src/readers/dvs/[ARCH]/libdvsapi.*). XXX refers to the version number, i.e. 211, 212 etc.





A simple example in python using this module is in the source code for [test\_dvs\_python\_reader\_api.py](test__dvs__python__reader__api_8py.md#test__dvs__python__reader__api_8py).





<a id="group__dvs__apis_1Using-the-proto-file"></a>
 ### Using the .proto file






If you have need for use of the API in a language other than C++/C/Python the dynamic_visualization_store.proto file is included so you can auto gen code to talk to the EnSight server's via GRPC. For now it isn't recommended since the it's not yet well documented and there are a lot of free benefits for using the already developed clients such as automatic logging, data-deduplication and auto-reconnect if the postprocessor is such down or restarted for any reason.





If you have need to use GRPC in another language please contact the EnSight team and we can provide more guidance on the .proto GRPC calls. ---

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)