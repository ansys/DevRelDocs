# File dvs\_main.md

<a id="dvs__main_8md"></a>

![][Markdown]

## Source


```markdown
@defgroup dvs_main Dynamic Visualization Store
@brief API for high-performance postprocessing visualization
@ingroup dvs

The Dynamic Visualization Store (DVS) API is a parallel capable, high performance API for postprocessing data. This can be used to implement one API in a solver to send data to a postprocessor in parallel (in this case EnSight) while the solver is running<br>

High Level Features:

- In-situ investigation of data from solver while solver is running.
  - Auto reconnect if postprocessor is shutdown and restarted during simulation.
- Scalable design allows for distrubuted parallel solver <-> distributed parallel postprocessor if needed (not required).
- Data can be cached if needed. Adding sources behind the API so no change to solver code.
- Does not need postprocessor to be running to cache data
- Read API to interrogate caches.
- Out of the box C/C/Python APIs for Windows/Linux

@defgroup dvs_changelog Changelog
@brief The changelog for each DVS release
@ingroup dvs_main

***

***
<a name="Whats-new-in-2026R1"></a>
## What's new in 2026 R1
- Added new API for options for the client. dvs_client_set_option and Client::set_option, Client::set_options. This will be used in the future for
  custom options needed.
- Added new option for the Client. DVS_CLIENT_TIMEOUT_S. This allows a user to specify in seconds how long before timing out on begin_init and
  begin_update calls when BLOCK_FOR_SERVER calls are made. This is to reduce problems with infinite hangs if for some reason the backend server
  isn't correctly started.
- Fixed issue which caused a significant performance degradation on slow disks and network drives


***
<a name="Whats-new-in-2025R2"></a>
## What's new in 2025 R2
- Switched to xxHash instead of MD5sum for hashing algorithm. This change improves hashing performance to the point where it should always be turned on.
  Saw around 5-10x or greater improvements in speed.



***
<a name="Whats-new-in-2025R1"></a>
## What's new in 2025 R1
- Fixed issue affecting DVS with remote shared disk. Now using a local store of hashes for reduced latency . Will see an increase in memory usage for drastically improved performance in these cases. This will improve performance in certain cases such as when using NFS shares.
- Fixed potential crash when using client API with deduplication turned off.


***
<a name="Whats-new-in-2024R2"></a>
## What's new in 2024 R2
- Cache store infrastructure changes - Single Writer/Multiple Reader support
  - The cache store, for both the supported HDF5 and Flatfile caches, has been upgraded so that the data are split per update number. This introduces the support for the Single Writer, Multiple Reader case where data can be accessed while the DVS servers are still writing data.
  Furthermore, it is possible to delete corrupted updates without losing the whole DVS data stored.
  Old datasets get a database migration in case of appending new data, if the cache is HDF5. Reading only does not trigger a database migration but backward compatibility loading is fully supported.
  The flatfile cache infrastructure has been changed to allow in the future support of new compression algorithms.
- Memory management improvements
  - A memory data pool has been introduced to significantly improve the memory management, avoiding data duplication. This applies to both the cache and in-situ scenarios.
  Currently this is limited only to the larger objects like coordinates and connectivity data. For the next release it is planned to be extended to all the objects available.
- Rigid Body Motion support
  - A Python/C/C API has been introduced to send and store rigid body motion data that can be used when loading in EnSight to pre-apply rigid body motion to the geometry. Future work is planned to apply the rigid body motion directly in the library so to take advantage of the feature even outside of EnSight.
- Reader API support for the in-situ case
  - The C and Python reader API now fully support the in-situ case. Specifically, each DVS Server can now create DVS Query objects to retrieve data and optionally apply filters.
- Port allocation improvements
  The support for the random ports allocation, to be used for the transport connection between the DVS Server and Client objects, has been improved. A C/C/Python API has been introduced on the DVS Server objects to retrieve the port number after the allocation.
  This is particularly significant in EnSight where also a Python API has been introduced to pre-allocate the ports and to retrieve them afterawrds without the need of loading a DVS file.



***
<a name="Whats-new-in-2024R1"></a>
## What's new in 2024 R1
- 64-bit Integer support
  - It is now possible to send and read 64-bit integers through the DVS interfaces.
  It is so now possible, for instance, to send 64-bit Element and Node IDs, but the support is extended to any other entity, like variables for example. 
  The 64-bit Integer support is also available for the DVS Reader API and the Merge Utility.
- Python Reader API
  - The existing C Reader API is now available in Python through a wrapper API. 
  The API is available using importing the dynamic_visualization_store module, with
  specific interfaces to create DVS Query objects, similarly to what is done using the C APIs (See @ref dvs_reader).
- (Beta) C/C/Python API for copying data from a previous timestep
  - A new API is available to copy data from a previous timestep. It is so possible to avoid resending large data like mesh/connectivity if already available. 
  The APIs can be called at any time during the begin_update/end_update sequences, since it is actually executed only when the timestep is being completed by the DynamicDataReader instance. 

***
<a name="Whats-new-in-2023R2"></a>
## What's new in 2023 R2
- (Beta) 64-bit Integer support
  - Initial support to store and load 64-bit integers in DVS is now available. The user can now send 64-bit integers values for entities like variables, node/element IDs and others. The support for the DVS reader API and the Merge utility is in progress.
- Notable robustness updates and bug fixes
  - The gRPC libraries have been upgraded to version 1.46.5.1, commonly used by other Ansys products.
  - The use of std::regex has been replaced with fnmatch for better compatibility with other Ansys products.
  - It is now possible to send empty variable updates, if needed.
  - The delete_item API was reporting errors in the InSitu case. This has been fixed.

***
<a name="Whats-new-in-2023R1"></a>
## What's new in 2023 R1
- Static libraries
  - There are now static libraries built and located in the static/{arch} directories for Windows and Linux
- Dataset metadata API
  - New dvs_add_metadata() (C and Python) and DVS::IClient::add_metadata() (C) API added to allow the setting of key/value pairs on the dataset object
- EnSight DVS Reader Element Filtering
  - See @ref dvs_element_filtering
- Manual server control
  - Some users had a need for more explicit server control so they could handle shutdown more cleanly
    and better handle threading for their applications. Previously there was one call to DVS::IServer::startup()
    which would start a server in a thread and run it until DVS::IServer::shutdown() was invoked. Now there
    are new methods exposed DVS::IServer::startup_unthreaded(), DVS::IServer::update(), and DVS::IServer::terminating() to allow
    for more manual control. For an example of the usage of these methods please see test_dvs_server.cpp.
- Merged Reader API and Client API libraries into one library named libdvsapi
  - The old libraries for libdvsclient and libdvsreader are now removed
- Merge Utility
  - The dvs_utility app now can merge a dataset from one cache into another. The main use for this is to merge data from a restart run into the original dataset. Because of this it right now finds the earliest timestep in the dataset it is merging from and removes all timesteps >= to it from the dataset it is merging to. This is available via dvs_utility.exe -merge {from Cache URI} {to Cache URI}.
- Delete Item API change
  - Delete item calls now take an update number similar to the begin_update calls. This is to have delete item calls act more like a timestep update so they are asynchronous and happen in lock step with completed timesteps. The update number should be in the same "update timeline" as the begin_update calls (eg begin_update (update 0), begin_update (update 1), delete_item (update 2), begin_update (update 3))
  - See dvs_delete_item(), DVS::IClient::delete_item()
- Ability to modify existing timesteps
  - It is now possible to modify existing timesteps in a DVS cache. Previously this was only available when running in situ. To do this a begin_update call is made (with a monotonically increasing update number) and a time value that matches a previously sent time. When the update has completed across all ranks it will be merged into the current timestep. It is important to note that the update is merged in and does not overwrite the previously sent data. So only changes are needed to be sent. So if a part mesh has been completely removed an empty update_nodes call must be made. Changes to the coordinates will automatically remove all nodal/element variables for that part. Changes to the connectivity will automatically remove all elemental variables for that part.
- Reader API fully released
  - The Reader API (See @ref dvs_reader) has gone through much more extensive usage and testing.
- UTF8 Support Fixed
  - The DVS library was improperly handling UTF8 strings. The initial intent was that all strings sent to DVS were UTF8. However with a lack of testing in that area that did not work correctly. As of version 1.2 UTF8 support should be working.

***
<a name="Whats-new-in-2022R2"></a>
## What's new in 2022 R2
- DVS Reader API
  - There is now a full external C Reader API available (See @ref dvs_reader)
- New logger example
  - Added a LoggerVerbose class in logger_verbose.h as an example of logging based on verbosity instead of flags. The flag method wasn't really working well so we will
    be moving to using verbosity on the client and server in future versions to make logging more consistent.
- Logging
  - Added a lot more logging into the server to diagnose potential problems with a DVS Server. Set the server option "VERBOSE" to 0-3 (0 being none or 3 being max).
- Notable Bug fixes
  - Server logging verbosity was broken in 2022 R1, this has been fixed so setting
    server verbosity should start outputting more information.

***
<a name="Whats-new-in-2022R1"></a>
## What's new in 2022 R1
- Versioning
  - There is now a dynamic_visualization_store_version.h file which has a DVS_CURRENT_API_VERSION defined in it. It follows the normal semantic versioning convention
  of X.Y.Z where any changes to Z are deemed compatible with the previous version but a change in X or Y is not.
  - This same versioning is built into the gRPC API as well and an error of DVS_VERSION_MISMATCH or DVS_VERSION_UNKNOWN will be returned if there is an issue.
  - To find the version the library was built with a user can call dvs_get_version() or DVS::IClient::get_version(). The python version is available via the "version" attribute on the module.
- Code Restructuring
  - A lot of code refactoring is ongoing to support the DVS Reader API, the code is beginning to be split into include and src directories. This work will be finished next release so that all headers needed to be included for use of the libraries will be within the include directory.
- DVS Reader API
  - An alpha version of the DVS Reader API has been implemented. This can be access via the include/dvs_query_interface.h header file. Example usage of the API can be seen in the test_dvs_reader.cpp. Full documentation will be added when the API is complete in 2022R2. Currently you can only open a dataset and read all of the part/plot/variable definitions and some basic information. Actual access to data will be exposed in the full release.
- Deletion Item API
  - A user can now call the delete item API to remove a single or collection of timesteps from the dataset after initialization. See @ref dvs_delete_item_api for more information.
- DVS File Location Server Options
  - A user can now specify a different location for the .dvs files to be created for datasets that is separate from the cache location. See @ref dvs_server_options for more information.

***

<a name="Whats-new-in-2021R1"></a>
## What's new in 2021 R1
- Structured Meshes
  - New APIs for parallelepiped and curvilinear structured meshes, see dvs_update_nodes_parallelepiped(), dvs_update_nodes_curvilinear(), DVS::IClient::update_nodes_structured() for more information. See test_dvs_client.c and test_dvs_client_cxx.cpp for example usage.
    - Sending iblanking information is done through calls to dvs_update_var_node_scalar(), DVS::IClient::update_var_node() using #DVS_STRUCTURED_IBLANKED_NODES (see dynamic_visualization_store_enums.h) as the variable id. Variable type for C API is ::SCALAR. See test_dvs_client.c for examples.
      - Valid iblanking values are #DVS_IBLANK_EXTERIOR, #DVS_IBLANK_INTERIOR, #DVS_IBLANK_BOUNDARY, #DVS_IBLANK_INTERNAL_BOUNDARY, #DVS_IBLANK_SYMMETRY
    - Sending ghost element information is done through calls to dvs_update_var_element_scalar(), DVS::IClient::update_var_element() using #DVS_STRUCTURED_GHOST_ELEMENTS (see dynamic_visualization_store_enums.h) as the variable id. Variable type for C API is ::SCALAR. See test_dvs_client.c for examples.
- Dynamically add new part/variable/plot definitions between updates (doesn't remove definitions since they may be used by previously sent timesteps)
    - After any update has finished you may call the dvs_begin_init() / dvs_end_init() or DVS::IClient::begin_init() / DVS::IClient::end_init() sequence to add new parts/variables/plots.
    - **Note:** This does not allow you to change the dataset name or the unit system.
- Overwrite in-situ timesteps
  - You may now send a new update for a previously sent timestep to completely overwrite which data is there. If EnSight is currently reading the data may require a reload_data python call to view the newly received timestep information (please contact Postprocessing team on how to do this).
  - **Note:** Trying to overwrite a previously sent timestep while saving data to a cache will return an error. This is not yet allowed.
- Added Client API to retrieve already sent definitions, see dvs_get_num_part_info(), dvs_get_part_info(), DVS::IClient::get_num_parts(), DVS::IClient::get_part_info(), dvs_get_num_var_info(), dvs_get_var_info(), DVS::IClient::get_num_vars(), DVS::IClient::get_var_info(), dvs_get_num_plot_info(), dvs_get_plot_info(), DVS::IClient::get_num_plots(), DVS::IClient::get_plot_info()
- Added Server API calls to retrieve the number of pending / complete timesteps to allow a user created server to know when all timesteps were flushed to disk so it could shutdown without losing data. See dvs_server_timestep_count(), DVS::IServer::get_timestep_count().
- Improved read performance of cache
- Improved performance of reading large numbers of parts/variables/plots when using multiple servers in EnSight
- Improved memory usage

***
<a name="Whats-new-in-2020R2"></a>
## What's new in 2020 R2
- Major API Overhaul
  - In getting ready for releasing the API for other teams to use we have gone ahead and redone much of the API to facilitate future changes. Please refer to documentation for new usage.
- Official API Name
  - We made an official name for the API of Dynamic Visualization Store (DVS) as we are starting to officially roll this out to external applications. This affects both the C/C and Python APIs as we renamed the namespaces to match the new name, renamed headers, libraries and classes. The details of which are described below.
  - **Note:** All files in the EnSight install now located in CEI/ensightXXX/src/readers/dvs where XXX is version 211 or greater.
- Major Client/Server connection API paradigm changed. Now you need to always create at least a shell server for the client to connect to. This change is to make API calls the same no matter what type of communication you are using, whether it be grpc or direct method calls (null protocol) currently or MPI etc. in the future.
  - C API: Call the new dvs_server_create() (see docs) with a uri, which returns the created server_id as a param, calling dvs_server_start() if running the server locally, then use dvs_connect() passing in that server_id to connect to it.
    - If the server is being locally started you can call dvs_server_start() with the server_id, server_number and local_ranks count to start it running in a separate thread. Otherwise it will just act as an interface for the dvs client to communicate with.
    - **Note:** If a server is started it MUST be started before connecting with a client.
  - C API: Create a server instance DVS::CREATE_SERVER_INSTANCE() (see docs) with a uri. If running the server locally call DVS::IServer::startup() on the instance. Then pass that server instance into the DVS::CREATE_CLIENT_INSTANCE() call to connect to that server.
    - If the server is being locally started you can call DVS::IServer::startup() on the server to begin running it in a separate thread.
    - **Note:** If a server is started it MUST be started before connecting with a client.
- C API Changes
  - Renamed ensight_dynamic_data_api.h to dynamic_visualization_store_api.h
    - Renamed all prefixed methods and strucs from edd_ to dvs_ (i.e. edd_connect() to dvs_connect())
  - Renamed ensight_dynamic_data_enums.h to dynamic_visualization_store_enums.h
    - Renamed all prefixes of enums from edd_ to dvs_ (i.e. edd_var_location to dvs_var_location)
  - Shared library renamed from libdynamicdataclient to libdvsclient (extension varies depending on platform)
  - A server must always be created now for the client to connect to. This is done via dvs_server_create() which as a param returns a server_id. This server_id is then used for other dvs_server_* methods and more importantly in the dvs_connect() call.
    - Starting a server is done via dvs_server_start() which takes the server_id as a param. Only need to start a server if running locally.
    - **Note:** A locally run server must be started via dvs_server_start() before calling dvs_connect().
  - dvs_connect() now takes a server_id (which is created from dvs_server_create()) and returns a session_id as a param. This session_id is used as the first param in all other client calls, dvs_begin_init(), dvs_add_part_info(), etc.
    - **Note:** A locally run server must be started before calling dvs_connect().
  - All client calls (dvs_begin_init(), dvs_add_part_info(), etc.) now take a session_id (which is created from dvs_connect())
- C API Changes
  - Renamed namespaces of classes from EDD to DVS. (i.e. EDD::CREATE_CLIENT_INSTANCE() to DVS::CREATE_CLIENT_INSTANCE())
  - Renamed dynamic_data_client_interface.h to dvs_client_interface.h
    - Interface class now DVS::IClient instead of EDD::IDynamicDataClient
  - Created dvs_server_interface.h header for C Server API
    - Access with DVS::IServer* DVS::CREATE_SERVER_INSTANCE() and DVS::DESTROY_SERVER_INSTANCE() methods
  - Shared library renamed from libdynamicdataclient to libdvsclient (extension varies depending on platform)
- Python API Changes
  - Package now named dynamic_visualization_store (file dynamic_visualization_store.pyd)
  - Example usage in test_dvs_client_simple.py
- C/C Clients
  - Renamed client binaries from test_edd_client* to test_dvs_client*
    - See test_dvs_client.c for updated example using new API
  - Added C client example using C API, see test_dvs_client_cxx.cpp
- New protocol available for use. It uses what we are calling the NULL transport. Meaning it doesn't use the network to transport data the data goes directly over method calls within this process. Previously all dvs servers used network communication via grpc, now it is possible to go directly to a dvs server without needing a network connection, letting you directly write into the DVS cache if needed.
- DVS File Changes
  - Files read by EnSight now use the .dvs extension instead of .edd
  - Keyword option GRPC_SERVER_PORT_BASE renamed to SERVER_PORT_BASE
  - Keyword option GRPC_SERVER_PORT_MULT renamed to SERVER_PORT_MULT
- Cache Changes
  - When using a cache a .dvs file will be auto created in the root cache folder named based on the dataset name which can be loaded by EnSight
  - Multiple datasets can now be stored and loaded from the same cache
  - Basic queries are enabled for .dvs files to allow the selection of specific datasets, parts, plots, and variables. See the @ref dvs_cache_uri section for more info.
  - Disk caches now use sqlite databases for metadata for both hdf5:// disk:// caches.
  - Case and part constants now stored in cache

@defgroup dvs_limitations Current Limitations
@brief A list of limitations for each DVS release
@ingroup dvs_main
***

### Version 2022 R1
- Plots
  - If using plots and sending data in parallel all plot data needs to be sent to Server 0. This requirement will be removed in future iterations.
- Caches
  - The number of ranks being used needs to stay consistent and consistently connect to the same data servers when writing and appending data to a cache. I.E. You start writing a dataset in parallel with 5 nodes/ranks to 2 dynamic connections/servers. The first 3 nodes connect to server 0 and the second 2 nodes connect to server 1. You send 2 timesteps/updates to the API and then shut the DVS servers down. If you start them up again to write another timestep then you need to connect the same number of nodes/ranks to the servers in the same configuration to write another update. This requirement will be removed in future iterations and the number of nodes/ranks can change per timestep once calling a reinitialize method or restarting the DVS servers.

@defgroup dvs_get Get DVS
@brief How to get the DVS libraries
@ingroup dvs_main
***
<a name="Download-Latest-Install"></a>
## Download Latest Install

Download and install the latest ANSYS suite (21.1 or greater). EnSight (or CEI) products are installed by default.

Most files needed are located within :[InstallDir]/vXXX/CEI/ensightXXX/src/readers/dvs (XXX refers to the version number, i.e. 211, 212 etc.)

**Note:** This document will refer to directories and scripts with numbers in them, these values change with versions. In 21.1 the directories/scripts will use 211. For newer versions such as 21.2 replace 211 with 212 etc.

***

<a name="Getting started"></a>
## What is Available

The dvs directory includes all of the code needed to build a C/C library to use within another code base as well as some pre-built binaries for C/Python for use on Windows and Linux.
Files of Interest:  
- test_dvs_client.c: An example of how to use the C API. It's used as our test client.
- test_dvs_client_cxx.cpp: An example of how to use the C API. Used in testing.
- test_dvs_client_simple.py: An example of how to use the Python API
- dynamic_visualization_store_api.h: This is our exposed C-API
- dynamic_visualization_store_enums.h: Enums used in the API
- dynamic_visualization_store_error_codes.h: Error codes returned from API calls
- dvs_client_interface.h: This is our exposed C Client API
- dvs_server_interface.h: This is our exposed C Server API

Pre-built Code:
If you wish to take advantage of the pre-built C API or C API, the built libraries (libdvsapi) are included in the dvs/linux_2.6_63 or dvs/win64 directories depending on the platform. For C and C you should be able to link against the libdvsapi library and use it directly.

For more information on building the code if you need to please reach out to the Postprocessing team.

More information on the usage of [C/C/Python APIs](#Available-APIs)

***
@defgroup dvs_apis Available APIs
@brief A list of all the APIs available in DVS
@ingroup dvs_main
<a name="Available-APIs"></a>
## Available APIs

<a name="Using-the-C-Writer-API"></a>
### Using the C Writer API

The main header for the C Client Writer API is in dynamic_visualization_store_api.h. At the top
of the API header is a brief overview of the order to make the calls in. The methods are all
documented here as well.
<br><br>
A full example of using the API can be found in test_dvs_client.c. See the "Simple Demo" section for running this application. A pre-built binary for the test_dvs_client can be found in the linux_2.6_64 or win64 sub folders of the dvs directory.
<br><br>
A pre-built library (libdvsapi.*) to link against for windows and linux can be found under: [InstallDir]/vXXX/CEI/ensightXXX/src/readers/dvs/[ARCH] where arch will be win64 or linux_2.6_64 based on your current os (XXX refers to the version number, i.e. 211, 212 etc.). Just include the dynamic_visualization_store_api.h header and link to the library and away you go.


<a name="Using-the-Cplusplus-Writer-API"></a>
### Using the C Writer API

The main header for the C Client Writer API is in the dvs_client_interface.h. To create an instance of
the DVS::IClient class use the factory method DVS::CREATE_CLIENT_INSTANCE(). This instance should be
destroyed via DVS::DESTROY_CLIENT_INSTANCE(). An example using this API is in test_dvs_client_cxx.cpp.
<br><br>
The C server API is in dvs_server_interface.h. To create an instance of the DVS::IServer class use
the factory method DVS::CREATE_SERVER_INSTANCE(). This instance should be destroyed using
DVS::DESTROY_SERVER_INSTANCE().An example using this API is in test_dvs_client_cxx.cpp.
<br><br>
A pre-built library (libdvsapi.*) to link against for windows and linux can be found under: [InstallDir]/vXXX/CEI/ensightXXX/src/readers/dvs/[ARCH] where arch will be win64 or linux_2.6_64 based on your current os (XXX refers to the version number, i.e. 211, 212 etc.). Just include the appropriate headers and link to the library and away you go.

<a name="Using-the-Python-Writer-API"></a>
### Using the Python Writer API

A prebuilt library for Python3 exists for Windows ([InstallDir]/vXXX/CEI/apexXXX/machines/win64/Python-3.7.4/DLLs/dynamic_visualization_store.pyd) and Linux ([InstallDir]/vXXX/CEI/apexXXX/machines/linux_2.6_64/Python-3.7.4/lib/python3.7/dynamic_visualization_store.so). You will also need the libdvsapi library along side it (located [InstallDir]/vXXX/CEI/ensightXXX/src/readers/dvs/[ARCH]/libdvsapi.*). XXX refers to the version number, i.e. 211, 212 etc.

A simple example in python using this module is in the source code for test_dvs_client_simple.py.

<a name="Using-the-Cplusplus-Reader-API"></a>
### Using the C Reader API

The main header for the C Reader API is the dvs_query_interface.h. To create an instance of the DVS::IQuery class use the factory method DVS::CREATE_QUERY_INSTANCE(). An example using this API is in test_dvs_reader.cpp.

A pre-built library (libdvsapi.*) to link against for windows and linux can be found under: [InstallDir]/vXXX/CEI/ensightXXX/src/readers/dvs/[ARCH] where arch will be win64 or linux_2.6_64 based on your current os (XXX refers to the version number, i.e. 211, 212 etc.). Just include the appropriate headers and link to the library and away you go.

<a name="Using-the-Python-Reader-API"></a>
### Using the Python Reader API

A prebuilt library for Python3 exists for Windows ([InstallDir]/vXXX/CEI/apexXXX/machines/win64/Python-3.7.4/DLLs/dynamic_visualization_store.pyd) and Linux ([InstallDir]/vXXX/CEI/apexXXX/machines/linux_2.6_64/Python-3.7.4/lib/python3.7/dynamic_visualization_store.so). You will also need the libdvsapi library along side it (located [InstallDir]/vXXX/CEI/ensightXXX/src/readers/dvs/[ARCH]/libdvsapi.*). XXX refers to the version number, i.e. 211, 212 etc.

A simple example in python using this module is in the source code for test_dvs_python_reader_api.py.

<a name="Using-the-proto-file"></a>
### Using the .proto file
If you have need for use of the API in a language other than C/C/Python the dynamic_visualization_store.proto file is included so you can auto gen code to talk to the EnSight server's via GRPC. For now it isn't recommended since the it's not yet well documented and there are a lot of free benefits for using the already developed clients such as automatic logging, data-deduplication and auto-reconnect if the postprocessor is such down or restarted for any reason.

If you have need to use GRPC in another language please contact the EnSight team and we can provide more guidance on the .proto GRPC calls.
***

@defgroup dvs_get_started Getting started
@brief Instructions and examples to get started with DVS
@ingroup dvs_main
<a name="Starting-the-dynamic-visualization-store-reader-with-EnSight"></a>
## Starting the Dynamic Visualization Store (DVS) reader with EnSight

EnSight readers are loaded when loading a file specific for that reader via the file open dialog or from command language. The EnSight Dynamic Visualization Store (DVS) reader's file type is .dvs.

The below text can be put into a .dvs file and loaded via the file->open dialog in EnSight. You can also go through the [Running a simple demo](#Running-a-simple-demo) section which will run an EnSight command file that auto loads the simple_demo.dvs file provided in dvs/demo_files/simple_demo.dvs

**Note:** By default EnSight will not recognize .dvs files. You must first enable the DVS reader in EnSight by going to Edit->Preferences. Then click on Data. Then in the bottom pane scroll down till you see the DVS reader and check it on.

> \#!DVS_CASE 1.0<br>
> SERVER_PORT_BASE=50055<br>
> SERVER_PORT_MULT=1<br>
> \#CACHE_URI=hdf5://localhost//home/jcheuvro/demo/data<br>
> \#CACHE_URI=hdf5://localhost/D:/temp/ahmed_body_no_compression<br>

The '#'symbol is used to comment lines out of the file.  

**SERVER_PORT_BASE**: This specifies the starting port number for servers to use. If running EnSight in SoS mode with 3 servers these servers would use ports 50055, 50056, and 50057  

**SERVER_PORT_MULT**: This tells the EnSight servers how to scale the port numbers. If this was set to 2, and the port base was the same as the above example ports used would be 50055, 50057, 50059, etc.  

**CACHE_URI**: This defines what kind of a cache to use and the location. The above examples both say to use hdf5 files on the localhost in different locations. If the path isn't fully qualified (doesn't start with '/' on Linux/Mac or a drive letter on windows) then it will be assumed to be relative to the location of the .dvs file.  
***
## Starting a Dynamic Visualization Store (DVS) server without EnSight Running
<a name="Starting-a-dynamic-visualization-store-server-without-EnSight-running"></a>

### Using the C API (for C see section below)

For a working C example please refer to the dvs/test_dvs_client.c file. The Running a demo without EnSight running section goes through which command line options to use to trigger a DVS server to be ran without EnSight running.

Currently the C API allows for the startup DVS servers without running EnSight by using 5 methods, `dvs_server_create()`, `dvs_server_set_option()`, `dvs_server_clear_options()`, `dvs_server_start()`, `dvs_server_started()`, `dvs_server_shutdown()`, and `dvs_server_shutdown_all()`.

1. Create a server using `dvs_server_create()`. This method takes a `uri`, a `server_number` and `local_ranks`.
   1. `URI`: The URI param specifies the protocol, machine, and port of the server. The URI is of the form `protcol://hostname:port`.
      1. `protocol`: Valid protocol value are `grpc` (which uses grpc communication) or `null` which uses direct method calls and no network communications. Examples: grpc://localhost:50055, grpc://person.ansys.com:56789, null://
   2. `server_id`: A return value of a dynamically created handle to the server that was created. -1 if it failed to create.
2. Server Options: The `dvs_server_set_options()` and `dvs_server_clear_options()` calls allow you to set specific server key/value pairs before calling `dvs_server_start`. The current options are:
   1. `VERBOSE` : Sets the verbosity of the server, set to 3 for decent debug info.
   2. `CACHE_URI` : Set this to specify the cache type, machine, and location of the cache. An example uri would be : `hdf5://localhost/D:/temp/testing_no_ensight` This tells the cache to use hdf5 files, the cache is on the localhost, and on windows the location of the cache is D:/temp/testing_no_ensight. An example on a linux filesystem would be: `hdf5://localhost//home/user/demo/my_dataset`. The data for this dataset will be stored in that folder under DVS server created folders.
3. Starting the server: The method `dvs_ret dvs_server_start(int32_t server_id, uint32_t server_num, uint32_t local_ranks)` will start a DVS server in a separate thread. The details of the parameters can be found in dynamic_visualization_store_api.h. `server_num` is a monotonically increasing number 0 for first, 1 second, 2 third etc. `local_ranks` specifies how many ranks/ solver nodes will be connecting to this server. Each server is started in its own thread so it can be ran in a separate process from the server node or within the same process.
   1. `server_id`: The id of the server, dynamically created from the dvs_server_create() call.
   2. `server_number`: A unique (zero based) number for the server. Each server's server number should be monotonically increasing. Only needed to be set if starting this server locally. Otherwise can be zero.
   3. `local_ranks`: Tells the server how many local ranks this server will be expecting. If using a null tranport protocol this number will probably be 1 unless multi-threading. Only needed to be set if starting the server locally. Otherwise can be zero.
4. Shutting down the server: The methods `dvs_server_shutdown(int32_t server_id)` and `dvs_server_shutdown_all()` are used to shutdown specific servers or all servers started by the current process respectively. This should be called before the process shuts down.

The overall order of calls is to call `dvs_server_set_options()` for each server you want to start, then call `dvs_server_start()` for each server you'd like to start. After that all calls are as normal detailed in "Using the C API" section. Before shutting down the process you should call `dvs_server_shutdown()` on specific servers or `dvs_server_shutdown_all()` to cleanup the servers properly. `dvs_shutdown()` will also shutdown all of the servers.

**Note:** Shutting down a server directly after sending an update might cause a loss in data if the data hasn't been written to the cache. Currently giving a few seconds delay should be sufficient. In a future update a call will be available to ask if it is safe to shutdown or not.

### Using the C API

Currently the C API allows for creating a DVS::IServer instance which then runs in a separate thread accepting incoming server connections. For a working C example please refer to the dvs/test_dvs_client_cxx.cpp file.

Server Usage:
1. Instantiate DVS::IServer using DVS::CREATE_SERVER_INSTANCE() method \n
   1. `uri`: The URI param specifies the protocol, machine, and port of the server. The URI is of the form `protcol://hostname:port`.
      1. `protocol`: Valid protocol value are `grpc` (which uses grpc communication) or `null` which uses direct method calls and no network communications. Examples: grpc://localhost:50055, grpc://person.ansys.com:56789, null://
2. Set options using DVS::IServer::set_options() or DVS::IServer::set_option(), current options are: \n
   1. `VERBOSE` : Sets the verbosity of the server, set to 3 for decent debug info.
   2. `CACHE_URI` : Set this to specify the cache type, machine, and location of the cache. An example uri would be : `hdf5://localhost/D:/temp/testing_no_ensight` This tells the cache to use hdf5 files, the cache is on the localhost, and on windows the location of the cache is D:/temp/testing_no_ensight. An example on a linux filesystem would be: `hdf5://localhost//home/user/demo/my_dataset`. The data for this dataset will be stored in that folder under DVS server created folders.
3. Startup server using DVS::IServer::startup(). A locally run server must be started before creating a client to connect to it. A non local server should not be started. \n
   1. `server_number`: A unique (zero based) number for the server. Each server's server number should be monotonically increasing. Only needed to be set if starting this server locally. Otherwise can be zero.
   2. `local_ranks`: Tells the server how many local ranks this server will be expecting. If using a null tranport protocol this number will probably be 1 unless multi-threading. Only needed to be set if starting the server locally. Otherwise can be zero.
4. If needed see if it's running via DVS::IServer::running() \n
5. Create a client instance using DVS::CREATE_CLIENT_INSTANCE()
6. Use DVS::IClient instance to send data to dvs server.
7. Destroy any client instances using DVS::DESTROY_CLIENT_INSTANCE() before destroying the server.
8. Shutdown server using DVS::IServer::shutdown() \n
9. Destroy instance using DVS::DESTROY_SERVER_INSTANCE() (this will also shutdown the server)\n


**Note:** Shutting down a server directly after sending an update might cause a loss in data if the data hasn't been written to the cache. Currently giving a few seconds delay should be sufficient. In a future update a call will be available to ask if it is safe to shutdown or not.

***
<a name="Running-a-simple-demo"></a>
## Running a simple demo

For this example we will be working out of the folder: [InstallDir]/vXXX/CEI/ensightXXX/src/readers/dvs (XXX refers to the version number, i.e. 211, 212 etc.). Inside of the dvs directory there is a folder called demo_files. These will be used for this demo.

**Note:** Directories/scripts with 212 in their name will change to 212 etc. in newer versions.

1. From a command/cygwin prompt go into the dvs/demo_files directory.
2. Run ensight `[ANSYS_INSTALL_DIR]/vXXX/CEI/bin/ensight -p simple_demo.enc` (XXX refers to the version number, i.e. 211, 212 etc.)
   1. You should see a command prompt open from EnSight that has a line similar to: `gRPC Server: APXJCHEUVRO2.win.ansys.com(0.0.0.0):50055`, this means the EnSight server is waiting for a DVS server connection.
3. In a second command/cygwin prompt cd into the dvs/{arch} directory, where {arch} will be linux_2.6_64 or win64 depending on your OS
4. Run the `test_dvs_client` (or `test_dvs_client.exe` on Windows). It should connect and after sending a few timesteps EnSight should display a large cube and now be interactable.
   1. Use the command line option `-h` for a list of options to use with the test client.

***
<a name="Simple-demo-with-multi-server"></a>
## Running a simple demo (multiple EnSight Servers, multiple test clients)

1. Using the same directories as the simple demo example above start EnSight but this time with the command line `[ANSYS_INSTALL_DIR]/vXXX/CEI/bin/ensight -p simple_demo.enc -sos -res sos_3.res` (XXX refers to the version number, i.e. 211, 212 etc.)
   1. This will run EnSight with 3 servers. You'll see multiple command prompts pop up showing similar grpc Server lines, with the ports varying from 50055-50057.
2. Now run the shell script `run_6_solver_demo.sh`. This will spawn 6 test_dvs_client processes sending data to the different EnSight servers.
   1. For a list of command line options run `./test_dvs_client -h`. These can used on the run_6_solver_demo.sh script as well.
3. After a few timesteps are sent EnSight should be interactable and look the same as when 1 server was used.
   1. If you click on the Variable tab on the bottom of the lower left pane you should see a list of Variables/Scalars/Vectors etc.
   2. Expand the Scalars list, and drag the ServerNumber variable into the 3D window and release.
   3. You should now see the geometry colored by which EnSight server handled the geometry
   4. If you drag the elem_scalar_rank variable into the 3D scene the geometry will be colored by which client/rank sent the data.

***
<a name="Simple-demo-without-EnSight-running"></a>
## Running a demo without EnSight running
For this example we will be working out of the folder: [InstallDir]/vXXX/CEI/ensightXXX/src/readers/dvs (XXX refers to the version number, i.e. 211, 212 etc.)

**Note:** Directories/scripts with 211 in their name will change to 221 etc. in newer versions.

1. From a command/cygwin into the dvs/{arch} directory, where {arch} will be linux_2.6_64 or win64 depending on your OS
2. Run the test_dvs_client using `test_dvs_client.exe -start 0 -t 2 -server 0 1 3 -cache_uri hdf5://localhost/D:/temp/testing_no_ensight` replacing the D:/temp/testing_no_ensight in the -server_uri option with the location of the dataset you want to save
   1. **Note:** The directory structure needs to exist up to the last folder for now. (D:/temp/ must exist in the example, testing_no_ensight will be created if it doesn't exist). This will recursively create the directory structure in the future.
3. Now copy the dvs/demo_files/simple_demo.dvs file and edit it
   1. Uncomment one of the CACHE_URI lines (remove the # from the front) and modify the directory portion of the URI to point to the location of the dataset.
4. Run EnSight
   1. Cancel the Welcome dialogue
   2. If this is your first time running this version of EnSight you will need to turn on the DVS reader. Go to Edit->Preferences, Select Data, then in the bottom pane is a list of visible user defined readers. Scroll down till you see the DVS reader and check it on if it is not already. Then hit close.
   3. Now in the menu run File->Open and select the copy of the simple_demo.dvs file you modified.
   4. You should now see a large cube of spheres and 2 timesteps.
      1. In the Parts pane fully expand the groupings (these are set via metadata from the test_dvs_client for test purposes).
      2. Uncheck the "Show" column box for Part 2, Part3-TriQuad and inlet_1.
      3. In the Variables pane you should see a scalar variable called nodal_scalar. Drag and drop this variable onto the 3D window and you should see some interesting colors.
      4. Change timesteps to see the variable change values.
   5. Close EnSight
5. Now run the test_dvs_client using `test_dvs_client.exe -start 2 -t 4 -server 0 1 3 -cache_uri hdf5://localhost/D:/temp/testing_no_ensight`, again replacing the D:/temp/testing_no_ensight in the -server_uri option with the location of the dataset you saved. This will append 2 additional timesteps to the dataset.
6. Re-run step 4 'Run EnSight' above and you should now see 4 timesteps loaded.

***
<a name="Using-secret-keys"></a>
## Using secret keys

To protect access to Dynamic Visualization Store (DVS) servers we provide the use of a secret keys.

When starting EnSight there are 2 ways to accomplish this:
1. Set an environment variable `ENSIGHT_SECURITY_TOKEN=my-super-secret-key` (set to any string you'd like)
2. (Not recommended) Run ensight with -s command line option i.e. `[ANSYS_INSTALL_DIR]/vXXX/CEI/bin/ensight -s 101` (XXX refers to the version number, i.e. 211, 212 etc.)
   1. This method only accepts a number as input

**This security token will be used for the C&C interface as well as the DVS interfaces to allow connections**

Now applications using the DVS interface will need to specify the key given to EnSight within the `dvs_connect()` call or in the `DVS::CREATE_CLIENT_INSTANCE()` factory method. See `dynamic_visualization_store_api.h` or `dvs_client_interface.h` for details.

```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C]: https://img.shields.io/badge/language-C-blue (C)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)