# Changelog

<a id="group__dvs__changelog"></a>

The changelog for each DVS release.

---







---

 <a id="group__dvs__changelog_1Whats-new-in-2026R1"></a>
 ## What's new in 2026 R1







* Added new API for options for the client. dvs_client_set_option and Client::set_option, Client::set_options. This will be used in the future for custom options needed.

* Added new option for the Client. DVS_CLIENT_TIMEOUT_S. This allows a user to specify in seconds how long before timing out on begin_init and begin_update calls when BLOCK_FOR_SERVER calls are made. This is to reduce problems with infinite hangs if for some reason the backend server isn't correctly started.

* Fixed issue which caused a significant performance degradation on slow disks and network drives







---

 <a id="group__dvs__changelog_1Whats-new-in-2025R2"></a>
 ## What's new in 2025 R2







* Switched to xxHash instead of MD5sum for hashing algorithm. This change improves hashing performance to the point where it should always be turned on. Saw around 5-10x or greater improvements in speed.







---

 <a id="group__dvs__changelog_1Whats-new-in-2025R1"></a>
 ## What's new in 2025 R1







* Fixed issue affecting DVS with remote shared disk. Now using a local store of hashes for reduced latency . Will see an increase in memory usage for drastically improved performance in these cases. This will improve performance in certain cases such as when using NFS shares.

* Fixed potential crash when using client API with deduplication turned off.







---

 <a id="group__dvs__changelog_1Whats-new-in-2024R2"></a>
 ## What's new in 2024 R2







* Cache store infrastructure changes - Single Writer/Multiple Reader support
* The cache store, for both the supported HDF5 and Flatfile caches, has been upgraded so that the data are split per update number. This introduces the support for the Single Writer, Multiple Reader case where data can be accessed while the DVS servers are still writing data. Furthermore, it is possible to delete corrupted updates without losing the whole DVS data stored. Old datasets get a database migration in case of appending new data, if the cache is HDF5. Reading only does not trigger a database migration but backward compatibility loading is fully supported. The flatfile cache infrastructure has been changed to allow in the future support of new compression algorithms.



* Memory management improvements
* A memory data pool has been introduced to significantly improve the memory management, avoiding data duplication. This applies to both the cache and in-situ scenarios. Currently this is limited only to the larger objects like coordinates and connectivity data. For the next release it is planned to be extended to all the objects available.



* Rigid Body Motion support
* A Python/C/C API has been introduced to send and store rigid body motion data that can be used when loading in EnSight to pre-apply rigid body motion to the geometry. Future work is planned to apply the rigid body motion directly in the library so to take advantage of the feature even outside of EnSight.



* Reader API support for the in-situ case
* The C and Python reader API now fully support the in-situ case. Specifically, each DVS Server can now create DVS Query objects to retrieve data and optionally apply filters.



* Port allocation improvements The support for the random ports allocation, to be used for the transport connection between the DVS Server and Client objects, has been improved. A C/C/Python API has been introduced on the DVS Server objects to retrieve the port number after the allocation. This is particularly significant in EnSight where also a Python API has been introduced to pre-allocate the ports and to retrieve them afterawrds without the need of loading a DVS file.







---

 <a id="group__dvs__changelog_1Whats-new-in-2024R1"></a>
 ## What's new in 2024 R1







* 64-bit Integer support
* It is now possible to send and read 64-bit integers through the DVS interfaces. It is so now possible, for instance, to send 64-bit Element and Node IDs, but the support is extended to any other entity, like variables for example. The 64-bit Integer support is also available for the DVS Reader API and the Merge Utility.



* Python Reader API
* The existing C Reader API is now available in Python through a wrapper API. The API is available using importing the dynamic_visualization_store module, with specific interfaces to create DVS Query objects, similarly to what is done using the C APIs (See [DVS Reader](group__dvs__reader.md#group__dvs__reader)).



* (Beta) C/C/Python API for copying data from a previous timestep
* A new API is available to copy data from a previous timestep. It is so possible to avoid resending large data like mesh/connectivity if already available. The APIs can be called at any time during the begin_update/end_update sequences, since it is actually executed only when the timestep is being completed by the DynamicDataReader instance.







---

 <a id="group__dvs__changelog_1Whats-new-in-2023R2"></a>
 ## What's new in 2023 R2







* (Beta) 64-bit Integer support
* Initial support to store and load 64-bit integers in DVS is now available. The user can now send 64-bit integers values for entities like variables, node/element IDs and others. The support for the DVS reader API and the Merge utility is in progress.



* Notable robustness updates and bug fixes
* The gRPC libraries have been upgraded to version 1.46.5.1, commonly used by other Ansys products.

* The use of std::regex has been replaced with fnmatch for better compatibility with other Ansys products.

* It is now possible to send empty variable updates, if needed.

* The delete_item API was reporting errors in the InSitu case. This has been fixed.







---

 <a id="group__dvs__changelog_1Whats-new-in-2023R1"></a>
 ## What's new in 2023 R1







* Static libraries
* There are now static libraries built and located in the static/{arch} directories for Windows and Linux



* Dataset metadata API
* New [dvs\_add\_metadata()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ac5c67fdc3806bf89eebbe49e6daea5c2) (C and Python) and [DVS::IClient::add\_metadata()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1ab4144e59bfdcf9c095c6510c4298d160) (C) API added to allow the setting of key/value pairs on the dataset object



* EnSight DVS Reader Element Filtering
* See [EnSight DVS Element Filtering](#group__group__dvs__metadata_1dvs_element_filtering)



* Manual server control
* Some users had a need for more explicit server control so they could handle shutdown more cleanly and better handle threading for their applications. Previously there was one call to [DVS::IServer::startup()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a6699cf48b29583ab3391b9b8397e611c) which would start a server in a thread and run it until [DVS::IServer::shutdown()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a7ce6bb49a2d383b0821267415a93802d) was invoked. Now there are new methods exposed [DVS::IServer::startup\_unthreaded()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1ac61ce2698eec1adb521bbbf60cb78756), [DVS::IServer::update()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1add6fcb530763dc217f5b3c17b25093c0), and [DVS::IServer::terminating()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a6cb1f69ad4b9213dde48d4cd5b3f2111) to allow for more manual control. For an example of the usage of these methods please see [test\_dvs\_server.cpp](test__dvs__server_8cpp.md#test__dvs__server_8cpp).



* Merged Reader API and Client API libraries into one library named libdvsapi
* The old libraries for libdvsclient and libdvsreader are now removed



* Merge Utility
* The dvs_utility app now can merge a dataset from one cache into another. The main use for this is to merge data from a restart run into the original dataset. Because of this it right now finds the earliest timestep in the dataset it is merging from and removes all timesteps >= to it from the dataset it is merging to. This is available via dvs_utility.exe -merge {from Cache URI} {to Cache URI}.



* Delete Item API change
* Delete item calls now take an update number similar to the begin_update calls. This is to have delete item calls act more like a timestep update so they are asynchronous and happen in lock step with completed timesteps. The update number should be in the same "update timeline" as the begin_update calls (eg begin_update (update 0), begin_update (update 1), delete_item (update 2), begin_update (update 3))

* See [dvs\_delete\_item()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a5237ada583b0cb7817d12d1135f9349e), [DVS::IClient::delete\_item()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a5e8f192f5c683a8265dd94020506a0aa)



* Ability to modify existing timesteps
* It is now possible to modify existing timesteps in a DVS cache. Previously this was only available when running in situ. To do this a begin_update call is made (with a monotonically increasing update number) and a time value that matches a previously sent time. When the update has completed across all ranks it will be merged into the current timestep. It is important to note that the update is merged in and does not overwrite the previously sent data. So only changes are needed to be sent. So if a part mesh has been completely removed an empty update_nodes call must be made. Changes to the coordinates will automatically remove all nodal/element variables for that part. Changes to the connectivity will automatically remove all elemental variables for that part.



* Reader API fully released
* The Reader API (See [DVS Reader](group__dvs__reader.md#group__dvs__reader)) has gone through much more extensive usage and testing.



* UTF8 Support Fixed
* The DVS library was improperly handling UTF8 strings. The initial intent was that all strings sent to DVS were UTF8. However with a lack of testing in that area that did not work correctly. As of version 1.2 UTF8 support should be working.







---

 <a id="group__dvs__changelog_1Whats-new-in-2022R2"></a>
 ## What's new in 2022 R2







* DVS Reader API
* There is now a full external C Reader API available (See [DVS Reader](group__dvs__reader.md#group__dvs__reader))



* New logger example
* Added a LoggerVerbose class in [logger\_verbose.h](logger__verbose_8h.md#logger__verbose_8h) as an example of logging based on verbosity instead of flags. The flag method wasn't really working well so we will be moving to using verbosity on the client and server in future versions to make logging more consistent.



* Logging
* Added a lot more logging into the server to diagnose potential problems with a DVS Server. Set the server option "VERBOSE" to 0-3 (0 being none or 3 being max).



* Notable Bug fixes
* Server logging verbosity was broken in 2022 R1, this has been fixed so setting server verbosity should start outputting more information.







---

 <a id="group__dvs__changelog_1Whats-new-in-2022R1"></a>
 ## What's new in 2022 R1







* Versioning
* There is now a [dynamic\_visualization\_store\_version.h](dynamic__visualization__store__version_8h.md#dynamic__visualization__store__version_8h) file which has a DVS_CURRENT_API_VERSION defined in it. It follows the normal semantic versioning convention of X.Y.Z where any changes to Z are deemed compatible with the previous version but a change in X or Y is not.

* This same versioning is built into the gRPC API as well and an error of DVS_VERSION_MISMATCH or DVS_VERSION_UNKNOWN will be returned if there is an issue.

* To find the version the library was built with a user can call [dvs\_get\_version()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ab8e85aad9b7ec78976db76017803a6b6) or [DVS::IClient::get\_version()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1aa5d98105d78c61e4e0c4043e28174fe1). The python version is available via the "version" attribute on the module.



* Code Restructuring
* A lot of code refactoring is ongoing to support the DVS Reader API, the code is beginning to be split into include and src directories. This work will be finished next release so that all headers needed to be included for use of the libraries will be within the include directory.



* DVS Reader API
* An alpha version of the DVS Reader API has been implemented. This can be access via the [include/dvs\_query\_interface.h](dvs__query__interface_8h.md#dvs__query__interface_8h) header file. Example usage of the API can be seen in the [test\_dvs\_reader.cpp](test__dvs__reader_8cpp.md#test__dvs__reader_8cpp). Full documentation will be added when the API is complete in 2022R2. Currently you can only open a dataset and read all of the part/plot/variable definitions and some basic information. Actual access to data will be exposed in the full release.



* Deletion Item API
* A user can now call the delete item API to remove a single or collection of timesteps from the dataset after initialization. See dvs_delete_item_api for more information.



* DVS File Location Server Options
* A user can now specify a different location for the .dvs files to be created for datasets that is separate from the cache location. See [Server Options](#group__group__dvs__server_1dvs_server_options) for more information.







---







<a id="group__dvs__changelog_1Whats-new-in-2021R1"></a>
 ## What's new in 2021 R1







* Structured Meshes
* New APIs for parallelepiped and curvilinear structured meshes, see [dvs\_update\_nodes\_parallelepiped()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a0d0312c5143eb8de2e08a903c929d8c3), [dvs\_update\_nodes\_curvilinear()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1af69daaa5a2ac63f7ce31a2e8e3d66332), [DVS::IClient::update\_nodes\_structured()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a1588c437020e0ba5702ec48460a792a9) for more information. See [test\_dvs\_client.c](test__dvs__client_8c.md#test__dvs__client_8c) and [test\_dvs\_client\_cxx.cpp](test__dvs__client__cxx_8cpp.md#test__dvs__client__cxx_8cpp) for example usage.
* Sending iblanking information is done through calls to [dvs\_update\_var\_node\_scalar()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1aea17a7bbdc6ac8c2cdd4e6c35c1a8578), [DVS::IClient::update\_var\_node()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1ae67a2884dd8f68f4757d8d7fac3828d3) using [DVS\_STRUCTURED\_IBLANKED\_NODES](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1aa405c87964a066405de5426a3089702b) (see [dynamic\_visualization\_store\_enums.h](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h)) as the variable id. Variable type for C API is [SCALAR](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0a7efbb6cac96595e63e8fa171bde1eb68). See [test\_dvs\_client.c](test__dvs__client_8c.md#test__dvs__client_8c) for examples.
* Valid iblanking values are [DVS\_IBLANK\_EXTERIOR](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1a0e0ee6900f90f933e57cae688b6d9af3), [DVS\_IBLANK\_INTERIOR](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1ac8f987404e3eba989ee90e4a1ffb955b), [DVS\_IBLANK\_BOUNDARY](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1a72b07503916fc120112f00b07a2a5ed1), [DVS\_IBLANK\_INTERNAL\_BOUNDARY](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1aacf7a4e385cf72ee26356af937b3c609), [DVS\_IBLANK\_SYMMETRY](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1abab4ad5aaffe16664aaacb0850994cf7)



* Sending ghost element information is done through calls to [dvs\_update\_var\_element\_scalar()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1aae3c0a5237c193d05266fba6e6798a4c), [DVS::IClient::update\_var\_element()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1aec8ed14b290237049976f68cb81b200f) using [DVS\_STRUCTURED\_GHOST\_ELEMENTS](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1a5f85a0e808c3bad9b9b616e62f5724c0) (see [dynamic\_visualization\_store\_enums.h](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h)) as the variable id. Variable type for C API is [SCALAR](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af6aa6351345da4151507012681b3aff0a7efbb6cac96595e63e8fa171bde1eb68). See [test\_dvs\_client.c](test__dvs__client_8c.md#test__dvs__client_8c) for examples.



* Dynamically add new part/variable/plot definitions between updates (doesn't remove definitions since they may be used by previously sent timesteps)
* After any update has finished you may call the [dvs\_begin\_init()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a3744408f15cd4a36d19880d24d442a0d) / [dvs\_end\_init()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ac4d82529053c964b76bd42916c51835e) or [DVS::IClient::begin\_init()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1aff782ecd341fddd87a22a15107efeb3b) / [DVS::IClient::end\_init()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1aaf1641a1afbf8bb6257940be28dd94b2) sequence to add new parts/variables/plots.

* **Note:** This does not allow you to change the dataset name or the unit system.



* Overwrite in-situ timesteps
* You may now send a new update for a previously sent timestep to completely overwrite which data is there. If EnSight is currently reading the data may require a reload_data python call to view the newly received timestep information (please contact Postprocessing team on how to do this).

* **Note:** Trying to overwrite a previously sent timestep while saving data to a cache will return an error. This is not yet allowed.



* Added Client API to retrieve already sent definitions, see [dvs\_get\_num\_part\_info()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a5a6cd68f61a53bce6780d3ef95038277), [dvs\_get\_part\_info()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a5b5a64e37bd6830f518947e7a0f7985e), [DVS::IClient::get\_num\_parts()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1af609f80df51a124a137c6476b7d3c958), [DVS::IClient::get\_part\_info()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a9a1e02d1e1764788a58db0f0ccce4cd4), [dvs\_get\_num\_var\_info()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ad75625cedecbcd365c868c9893c6c2d8), [dvs\_get\_var\_info()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a8992f4a5e6c36c5e4da67968b170313c), [DVS::IClient::get\_num\_vars()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a85adbf75ade9d0ffc6d258c34dae1eb3), [DVS::IClient::get\_var\_info()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1afb50715fd6d0ed4aa2df49b8cd9d93bb), [dvs\_get\_num\_plot\_info()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1aa44dcb6596c7833d2b9fe2a0435bb4c4), [dvs\_get\_plot\_info()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ac3fca7087e8b4366686cef98a95f241f), [DVS::IClient::get\_num\_plots()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a80325aaa83f2d2f27f1aa8e5f167c4c6), [DVS::IClient::get\_plot\_info()](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client_1a7753d7dfb238856722825403a5cb6d32)

* Added Server API calls to retrieve the number of pending / complete timesteps to allow a user created server to know when all timesteps were flushed to disk so it could shutdown without losing data. See [dvs\_server\_timestep\_count()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1adeb64f5db63b08a79f2a59a85c5d9683), [DVS::IServer::get\_timestep\_count()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a8a5339f222bcd46b06c2fa9a474b2c37).

* Improved read performance of cache

* Improved performance of reading large numbers of parts/variables/plots when using multiple servers in EnSight

* Improved memory usage







---

 <a id="group__dvs__changelog_1Whats-new-in-2020R2"></a>
 ## What's new in 2020 R2







* Major API Overhaul
* In getting ready for releasing the API for other teams to use we have gone ahead and redone much of the API to facilitate future changes. Please refer to documentation for new usage.



* Official API Name
* We made an official name for the API of Dynamic Visualization Store (DVS) as we are starting to officially roll this out to external applications. This affects both the C/C and Python APIs as we renamed the namespaces to match the new name, renamed headers, libraries and classes. The details of which are described below.

* **Note:** All files in the EnSight install now located in CEI/ensightXXX/src/readers/dvs where XXX is version 211 or greater.



* Major Client/Server connection API paradigm changed. Now you need to always create at least a shell server for the client to connect to. This change is to make API calls the same no matter what type of communication you are using, whether it be grpc or direct method calls (null protocol) currently or MPI etc. in the future.
* C API: Call the new [dvs\_server\_create()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a06196ff56fe7f270172239c1be4ce0cd) (see docs) with a uri, which returns the created server_id as a param, calling [dvs\_server\_start()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1aa5722a5316ee73bdd998c9a327e8cb3d) if running the server locally, then use [dvs\_connect()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ab96812d4412a9af10e7e7924c572a7c9) passing in that server_id to connect to it.
* If the server is being locally started you can call [dvs\_server\_start()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1aa5722a5316ee73bdd998c9a327e8cb3d) with the server_id, server_number and local_ranks count to start it running in a separate thread. Otherwise it will just act as an interface for the dvs client to communicate with.

* **Note:** If a server is started it MUST be started before connecting with a client.



* C API: Create a server instance [DVS::CREATE\_SERVER\_INSTANCE()](namespace_d_v_s.md#dvs__server__interface_8h_1a852580b9a49ac305e4ae26ca637bcc75) (see docs) with a uri. If running the server locally call [DVS::IServer::startup()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a6699cf48b29583ab3391b9b8397e611c) on the instance. Then pass that server instance into the [DVS::CREATE\_CLIENT\_INSTANCE()](namespace_d_v_s.md#dvs__client__interface_8h_1a2475075c9ab4c2e57a8f0b4ab5bc5df4) call to connect to that server.
* If the server is being locally started you can call [DVS::IServer::startup()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a6699cf48b29583ab3391b9b8397e611c) on the server to begin running it in a separate thread.

* **Note:** If a server is started it MUST be started before connecting with a client.



* C API Changes
* Renamed ensight_dynamic_data_api.h to [dynamic\_visualization\_store\_api.h](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h)
* Renamed all prefixed methods and strucs from edd_ to dvs_ (i.e. edd_connect() to [dvs\_connect()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ab96812d4412a9af10e7e7924c572a7c9))



* Renamed ensight_dynamic_data_enums.h to [dynamic\_visualization\_store\_enums.h](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h)
* Renamed all prefixes of enums from edd_ to dvs_ (i.e. edd_var_location to [dvs\_var\_location](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h_1af4f0eba512eff253854b44d7ce078491))



* Shared library renamed from libdynamicdataclient to libdvsclient (extension varies depending on platform)

* A server must always be created now for the client to connect to. This is done via [dvs\_server\_create()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a06196ff56fe7f270172239c1be4ce0cd) which as a param returns a server_id. This server_id is then used for other dvs_server_* methods and more importantly in the [dvs\_connect()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ab96812d4412a9af10e7e7924c572a7c9) call.
* Starting a server is done via [dvs\_server\_start()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1aa5722a5316ee73bdd998c9a327e8cb3d) which takes the server_id as a param. Only need to start a server if running locally.

* **Note:** A locally run server must be started via [dvs\_server\_start()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1aa5722a5316ee73bdd998c9a327e8cb3d) before calling [dvs\_connect()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ab96812d4412a9af10e7e7924c572a7c9).



* [dvs\_connect()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ab96812d4412a9af10e7e7924c572a7c9) now takes a server_id (which is created from [dvs\_server\_create()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a06196ff56fe7f270172239c1be4ce0cd)) and returns a session_id as a param. This session_id is used as the first param in all other client calls, [dvs\_begin\_init()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a3744408f15cd4a36d19880d24d442a0d), [dvs\_add\_part\_info()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a4e8a904ae19fd7f2b0c300543bc42576), etc.
* **Note:** A locally run server must be started before calling [dvs\_connect()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ab96812d4412a9af10e7e7924c572a7c9).



* All client calls ([dvs\_begin\_init()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a3744408f15cd4a36d19880d24d442a0d), [dvs\_add\_part\_info()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a4e8a904ae19fd7f2b0c300543bc42576), etc.) now take a session_id (which is created from [dvs\_connect()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ab96812d4412a9af10e7e7924c572a7c9))



* C API Changes
* Renamed namespaces of classes from EDD to DVS. (i.e. EDD::CREATE_CLIENT_INSTANCE() to [DVS::CREATE\_CLIENT\_INSTANCE()](namespace_d_v_s.md#dvs__client__interface_8h_1a2475075c9ab4c2e57a8f0b4ab5bc5df4))

* Renamed dynamic_data_client_interface.h to [dvs\_client\_interface.h](dvs__client__interface_8h.md#dvs__client__interface_8h)
* Interface class now [DVS::IClient](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client) instead of EDD::IDynamicDataClient



* Created [dvs\_server\_interface.h](dvs__server__interface_8h.md#dvs__server__interface_8h) header for C Server API
* Access with [DVS::IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server)* [DVS::CREATE\_SERVER\_INSTANCE()](namespace_d_v_s.md#dvs__server__interface_8h_1a852580b9a49ac305e4ae26ca637bcc75) and [DVS::DESTROY\_SERVER\_INSTANCE()](namespace_d_v_s.md#dvs__server__interface_8h_1adcdcbab1954ec53631a7136af7fc49b8) methods



* Shared library renamed from libdynamicdataclient to libdvsclient (extension varies depending on platform)



* Python API Changes
* Package now named dynamic_visualization_store (file dynamic_visualization_store.pyd)

* Example usage in [test\_dvs\_client\_simple.py](test__dvs__client__simple_8py.md#test__dvs__client__simple_8py)



* C/C Clients
* Renamed client binaries from test_edd_client* to test_dvs_client*
* See [test\_dvs\_client.c](test__dvs__client_8c.md#test__dvs__client_8c) for updated example using new API



* Added C client example using C API, see [test\_dvs\_client\_cxx.cpp](test__dvs__client__cxx_8cpp.md#test__dvs__client__cxx_8cpp)



* New protocol available for use. It uses what we are calling the NULL transport. Meaning it doesn't use the network to transport data the data goes directly over method calls within this process. Previously all dvs servers used network communication via grpc, now it is possible to go directly to a dvs server without needing a network connection, letting you directly write into the DVS cache if needed.

* DVS File Changes
* Files read by EnSight now use the .dvs extension instead of .edd

* Keyword option GRPC_SERVER_PORT_BASE renamed to SERVER_PORT_BASE

* Keyword option GRPC_SERVER_PORT_MULT renamed to SERVER_PORT_MULT



* Cache Changes
* When using a cache a .dvs file will be auto created in the root cache folder named based on the dataset name which can be loaded by EnSight

* Multiple datasets can now be stored and loaded from the same cache

* Basic queries are enabled for .dvs files to allow the selection of specific datasets, parts, plots, and variables. See the [Cache URIs](#group__group__dvs__uri_1dvs_cache_uri) section for more info.

* Disk caches now use sqlite databases for metadata for both hdf5:// disk:// caches.

* Case and part constants now stored in cache

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C]: https://img.shields.io/badge/language-C-blue (C)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)