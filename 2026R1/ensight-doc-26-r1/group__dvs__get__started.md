# Getting started

<a id="group__dvs__get__started"></a>

Instructions and examples to get started with DVS





<a id="group__dvs__get__started_1Starting-the-dynamic-visualization-store-reader-with-EnSight"></a>
.

## Starting the Dynamic Visualization Store (DVS) reader with EnSight






EnSight readers are loaded when loading a file specific for that reader via the file open dialog or from command language. The EnSight Dynamic Visualization Store (DVS) reader's file type is .dvs.





The below text can be put into a .dvs file and loaded via the file->open dialog in EnSight. You can also go through the [Running a simple demo](#group__dvs__get__started_1Running-a-simple-demo) section which will run an EnSight command file that auto loads the simple_demo.dvs file provided in dvs/demo_files/simple_demo.dvs





**Note:** By default EnSight will not recognize .dvs files. You must first enable the DVS reader in EnSight by going to Edit->Preferences. Then click on Data. Then in the bottom pane scroll down till you see the DVS reader and check it on.






> #!DVS_CASE 1.0
>  SERVER_PORT_BASE=50055
>  SERVER_PORT_MULT=1
>  #CACHE_URI=hdf5://localhost//home/jcheuvro/demo/data
>  #CACHE_URI=hdf5://localhost/D:/temp/ahmed_body_no_compression






The '#'symbol is used to comment lines out of the file. <br/>






**SERVER_PORT_BASE**: This specifies the starting port number for servers to use. If running EnSight in SoS mode with 3 servers these servers would use ports 50055, 50056, and 50057 <br/>






**SERVER_PORT_MULT**: This tells the EnSight servers how to scale the port numbers. If this was set to 2, and the port base was the same as the above example ports used would be 50055, 50057, 50059, etc. <br/>






**CACHE_URI**: This defines what kind of a cache to use and the location. The above examples both say to use hdf5 files on the localhost in different locations. If the path isn't fully qualified (doesn't start with '/' on Linux/Mac or a drive letter on windows) then it will be assumed to be relative to the location of the .dvs file. <br/>
 ---

 ## Starting a Dynamic Visualization Store (DVS) server without EnSight Running






<a id="group__dvs__get__started_1Starting-a-dynamic-visualization-store-server-without-EnSight-running"></a>






### Using the C API (for C see section below)






For a working C example please refer to the dvs/test_dvs_client.c file. The Running a demo without EnSight running section goes through which command line options to use to trigger a DVS server to be ran without EnSight running.





Currently the C API allows for the startup DVS servers without running EnSight by using 5 methods, <code>[dvs\_server\_create()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a06196ff56fe7f270172239c1be4ce0cd)</code>, <code>[dvs\_server\_set\_option()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ae8abdb8455cea44bbd9f509c1a063516)</code>, <code>dvs_server_clear_options()</code>, <code>[dvs\_server\_start()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1aa5722a5316ee73bdd998c9a327e8cb3d)</code>, <code>[dvs\_server\_started()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a996a1d0e1696ad7f991e44357d78a422)</code>, <code>[dvs\_server\_shutdown()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ad16ba277108c7187b0a11f461b1477ca)</code>, and <code>[dvs\_server\_shutdown\_all()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ac16a3c06bb1968ddba06d83f5e2a1f56)</code>.






1. Create a server using <code>[dvs\_server\_create()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a06196ff56fe7f270172239c1be4ce0cd)</code>. This method takes a <code>uri</code>, a <code>server_number</code> and <code>local_ranks</code>.
1. <code>URI</code>: The URI param specifies the protocol, machine, and port of the server. The URI is of the form <code>protcol://hostname:port</code>.
1. <code>protocol</code>: Valid protocol value are <code>[EnSight gRPC Interface](group__grpc.md#group__grpc)</code> (which uses grpc communication) or <code>null</code> which uses direct method calls and no network communications. Examples: grpc://localhost:50055, grpc://person.ansys.com:56789, null://



2. <code>server_id</code>: A return value of a dynamically created handle to the server that was created. -1 if it failed to create.



2. Server Options: The <code>dvs_server_set_options()</code> and <code>dvs_server_clear_options()</code> calls allow you to set specific server key/value pairs before calling <code>[dvs\_server\_start](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1aa5722a5316ee73bdd998c9a327e8cb3d)</code>. The current options are:
1. <code>VERBOSE</code> : Sets the verbosity of the server, set to 3 for decent debug info.

2. <code>CACHE_URI</code> : Set this to specify the cache type, machine, and location of the cache. An example uri would be : <code>hdf5://localhost/D:/temp/testing_no_ensight</code> This tells the cache to use hdf5 files, the cache is on the localhost, and on windows the location of the cache is D:/temp/testing_no_ensight. An example on a linux filesystem would be: <code>hdf5://localhost//home/user/demo/my_dataset</code>. The data for this dataset will be stored in that folder under DVS server created folders.



3. Starting the server: The method <code>[dvs\_ret](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h_1a1d7466ae72e89fe36cbf2408b4f7d9c1) [dvs\_server\_start(int32\_t server\_id, uint32\_t server\_num, uint32\_t local\_ranks)](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1aa5722a5316ee73bdd998c9a327e8cb3d)</code> will start a DVS server in a separate thread. The details of the parameters can be found in [dynamic\_visualization\_store\_api.h](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h). <code>server_num</code> is a monotonically increasing number 0 for first, 1 second, 2 third etc. <code>local_ranks</code> specifies how many ranks/ solver nodes will be connecting to this server. Each server is started in its own thread so it can be ran in a separate process from the server node or within the same process.
1. <code>server_id</code>: The id of the server, dynamically created from the [dvs\_server\_create()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a06196ff56fe7f270172239c1be4ce0cd) call.

2. <code>server_number</code>: A unique (zero based) number for the server. Each server's server number should be monotonically increasing. Only needed to be set if starting this server locally. Otherwise can be zero.

3. <code>local_ranks</code>: Tells the server how many local ranks this server will be expecting. If using a null tranport protocol this number will probably be 1 unless multi-threading. Only needed to be set if starting the server locally. Otherwise can be zero.



4. Shutting down the server: The methods <code>[dvs\_server\_shutdown(int32\_t server\_id)](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ad16ba277108c7187b0a11f461b1477ca)</code> and <code>[dvs\_server\_shutdown\_all()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ac16a3c06bb1968ddba06d83f5e2a1f56)</code> are used to shutdown specific servers or all servers started by the current process respectively. This should be called before the process shuts down.







The overall order of calls is to call <code>dvs_server_set_options()</code> for each server you want to start, then call <code>[dvs\_server\_start()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1aa5722a5316ee73bdd998c9a327e8cb3d)</code> for each server you'd like to start. After that all calls are as normal detailed in "Using the C API" section. Before shutting down the process you should call <code>[dvs\_server\_shutdown()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ad16ba277108c7187b0a11f461b1477ca)</code> on specific servers or <code>[dvs\_server\_shutdown\_all()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ac16a3c06bb1968ddba06d83f5e2a1f56)</code> to cleanup the servers properly. <code>[dvs\_shutdown()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1a815bb1d2251e35e3bfd3c44a4a338052)</code> will also shutdown all of the servers.





**Note:** Shutting down a server directly after sending an update might cause a loss in data if the data hasn't been written to the cache. Currently giving a few seconds delay should be sufficient. In a future update a call will be available to ask if it is safe to shutdown or not.





### Using the C API






Currently the C API allows for creating a [DVS::IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server) instance which then runs in a separate thread accepting incoming server connections. For a working C example please refer to the dvs/test_dvs_client_cxx.cpp file.





Server Usage:
1. Instantiate [DVS::IServer](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server) using [DVS::CREATE\_SERVER\_INSTANCE()](namespace_d_v_s.md#dvs__server__interface_8h_1a852580b9a49ac305e4ae26ca637bcc75) method <br/>

1. <code>uri</code>: The URI param specifies the protocol, machine, and port of the server. The URI is of the form <code>protcol://hostname:port</code>.
1. <code>protocol</code>: Valid protocol value are <code>[EnSight gRPC Interface](group__grpc.md#group__grpc)</code> (which uses grpc communication) or <code>null</code> which uses direct method calls and no network communications. Examples: grpc://localhost:50055, grpc://person.ansys.com:56789, null://



2. Set options using [DVS::IServer::set\_options()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a964b0420773ec5f47dbcea04334ba0d3) or [DVS::IServer::set\_option()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a1edb4dec67086f10bc0329b6adf9084c), current options are: <br/>

1. <code>VERBOSE</code> : Sets the verbosity of the server, set to 3 for decent debug info.

2. <code>CACHE_URI</code> : Set this to specify the cache type, machine, and location of the cache. An example uri would be : <code>hdf5://localhost/D:/temp/testing_no_ensight</code> This tells the cache to use hdf5 files, the cache is on the localhost, and on windows the location of the cache is D:/temp/testing_no_ensight. An example on a linux filesystem would be: <code>hdf5://localhost//home/user/demo/my_dataset</code>. The data for this dataset will be stored in that folder under DVS server created folders.



3. Startup server using [DVS::IServer::startup()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a6699cf48b29583ab3391b9b8397e611c). A locally run server must be started before creating a client to connect to it. A non local server should not be started. <br/>

1. <code>server_number</code>: A unique (zero based) number for the server. Each server's server number should be monotonically increasing. Only needed to be set if starting this server locally. Otherwise can be zero.

2. <code>local_ranks</code>: Tells the server how many local ranks this server will be expecting. If using a null tranport protocol this number will probably be 1 unless multi-threading. Only needed to be set if starting the server locally. Otherwise can be zero.



4. If needed see if it's running via [DVS::IServer::running()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a5fdee3f663dbe7b7dab11621f76737e2) <br/>


5. Create a client instance using [DVS::CREATE\_CLIENT\_INSTANCE()](namespace_d_v_s.md#dvs__client__interface_8h_1a2475075c9ab4c2e57a8f0b4ab5bc5df4)

6. Use [DVS::IClient](class_d_v_s_1_1_i_client.md#class_d_v_s_1_1_i_client) instance to send data to dvs server.

7. Destroy any client instances using [DVS::DESTROY\_CLIENT\_INSTANCE()](namespace_d_v_s.md#dvs__client__interface_8h_1a3f13d009a9a07278cbca3449113d78fc) before destroying the server.

8. Shutdown server using [DVS::IServer::shutdown()](class_d_v_s_1_1_i_server.md#class_d_v_s_1_1_i_server_1a7ce6bb49a2d383b0821267415a93802d) <br/>


9. Destroy instance using [DVS::DESTROY\_SERVER\_INSTANCE()](namespace_d_v_s.md#dvs__server__interface_8h_1adcdcbab1954ec53631a7136af7fc49b8) (this will also shutdown the server)<br/>







**Note:** Shutting down a server directly after sending an update might cause a loss in data if the data hasn't been written to the cache. Currently giving a few seconds delay should be sufficient. In a future update a call will be available to ask if it is safe to shutdown or not.





---

 <a id="group__dvs__get__started_1Running-a-simple-demo"></a>
 ## Running a simple demo






For this example we will be working out of the folder: [InstallDir]/vXXX/CEI/ensightXXX/src/readers/dvs (XXX refers to the version number, i.e. 211, 212 etc.). Inside of the dvs directory there is a folder called demo_files. These will be used for this demo.





**Note:** Directories/scripts with 212 in their name will change to 212 etc. in newer versions.






1. From a command/cygwin prompt go into the dvs/demo_files directory.

2. Run ensight <code>[ANSYS_INSTALL_DIR]/vXXX/CEI/bin/ensight -p simple_demo.enc</code> (XXX refers to the version number, i.e. 211, 212 etc.)
1. You should see a command prompt open from EnSight that has a line similar to: <code>gRPC Server: APXJCHEUVRO2.win.ansys.com(0.0.0.0):50055</code>, this means the EnSight server is waiting for a DVS server connection.



3. In a second command/cygwin prompt cd into the dvs/{arch} directory, where {arch} will be linux_2.6_64 or win64 depending on your OS

4. Run the <code>test_dvs_client</code> (or <code>test_dvs_client.exe</code> on Windows). It should connect and after sending a few timesteps EnSight should display a large cube and now be interactable.
1. Use the command line option <code>-h</code> for a list of options to use with the test client.







---

 <a id="group__dvs__get__started_1Simple-demo-with-multi-server"></a>
 ## Running a simple demo (multiple EnSight Servers, multiple test clients)







1. Using the same directories as the simple demo example above start EnSight but this time with the command line <code>[ANSYS_INSTALL_DIR]/vXXX/CEI/bin/ensight -p simple_demo.enc -sos -res sos_3.res</code> (XXX refers to the version number, i.e. 211, 212 etc.)
1. This will run EnSight with 3 servers. You'll see multiple command prompts pop up showing similar grpc Server lines, with the ports varying from 50055-50057.



2. Now run the shell script <code>run_6_solver_demo.sh</code>. This will spawn 6 test_dvs_client processes sending data to the different EnSight servers.
1. For a list of command line options run <code>./test_dvs_client -h</code>. These can used on the run_6_solver_demo.sh script as well.



3. After a few timesteps are sent EnSight should be interactable and look the same as when 1 server was used.
1. If you click on the Variable tab on the bottom of the lower left pane you should see a list of Variables/Scalars/Vectors etc.

2. Expand the Scalars list, and drag the ServerNumber variable into the 3D window and release.

3. You should now see the geometry colored by which EnSight server handled the geometry

4. If you drag the elem_scalar_rank variable into the 3D scene the geometry will be colored by which client/rank sent the data.







---

 <a id="group__dvs__get__started_1Simple-demo-without-EnSight-running"></a>
 ## Running a demo without EnSight running






For this example we will be working out of the folder: [InstallDir]/vXXX/CEI/ensightXXX/src/readers/dvs (XXX refers to the version number, i.e. 211, 212 etc.)





**Note:** Directories/scripts with 211 in their name will change to 221 etc. in newer versions.






1. From a command/cygwin into the dvs/{arch} directory, where {arch} will be linux_2.6_64 or win64 depending on your OS

2. Run the test_dvs_client using <code>test_dvs_client.exe -start 0 -t 2 -server 0 1 3 -cache_uri hdf5://localhost/D:/temp/testing_no_ensight</code> replacing the D:/temp/testing_no_ensight in the -server_uri option with the location of the dataset you want to save
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



5. Now run the test_dvs_client using <code>test_dvs_client.exe -start 2 -t 4 -server 0 1 3 -cache_uri hdf5://localhost/D:/temp/testing_no_ensight</code>, again replacing the D:/temp/testing_no_ensight in the -server_uri option with the location of the dataset you saved. This will append 2 additional timesteps to the dataset.

6. Re-run step 4 'Run EnSight' above and you should now see 4 timesteps loaded.







---

 <a id="group__dvs__get__started_1Using-secret-keys"></a>
 ## Using secret keys






To protect access to Dynamic Visualization Store (DVS) servers we provide the use of a secret keys.





When starting EnSight there are 2 ways to accomplish this:
1. Set an environment variable <code>ENSIGHT_SECURITY_TOKEN=my-super-secret-key</code> (set to any string you'd like)

2. (Not recommended) Run ensight with -s command line option i.e. <code>[ANSYS_INSTALL_DIR]/vXXX/CEI/bin/ensight -s 101</code> (XXX refers to the version number, i.e. 211, 212 etc.)
1. This method only accepts a number as input







**This security token will be used for the C&C interface as well as the DVS interfaces to allow connections**





Now applications using the DVS interface will need to specify the key given to EnSight within the <code>[dvs\_connect()](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h_1ab96812d4412a9af10e7e7924c572a7c9)</code> call or in the <code>[DVS::CREATE\_CLIENT\_INSTANCE()](namespace_d_v_s.md#dvs__client__interface_8h_1a2475075c9ab4c2e57a8f0b4ab5bc5df4)</code> factory method. See <code>[dynamic\_visualization\_store\_api.h](dynamic__visualization__store__api_8h.md#dynamic__visualization__store__api_8h)</code> or <code>[dvs\_client\_interface.h](dvs__client__interface_8h.md#dvs__client__interface_8h)</code> for details.

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C]: https://img.shields.io/badge/language-C-blue (C)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)