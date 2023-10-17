Chapter 1. API Services

Chapter 1. API Services

 

 

 [Next](ch01s02.xhtml)

* * *

Chapter 1. API Services
-----------------------

**Table of Contents**

[Setting Up Your Computer to Run Sherlock's APIs](index.xhtml#sherlock_ug_Setting_Up_Your_PC_for_APIs)

[Becoming Acquainted with gRPC](index.xhtml#sherlock_ug_becoming_acquainted_grpc)

[Where to Find the Sherlock .proto Files](index.xhtml#sherlock_ug_where_to_find_proto_files)

[Connecting to the Sherlock gRPC Server](index.xhtml#sherlock_ug_connecting_to_grpc_server)

[Pre-Generated Python Scripts](index.xhtml#sherlock_ug_API_pre-generated_scripts)

[Installing and Setting Up BloomRPC (Optional)](index.xhtml#d0e181)

[Index to the Sherlock APIs](ch01s02.xhtml)

[Sherlock Analysis Service- SherlockAnalysisService.proto](ch01s03.xhtml)

[Get Natural Frequency Input Fields](ch01s03.xhtml#d0e541)

[Get PCB Modeling Input Fields](ch01s03.xhtml#d0e594)

[Get Random Vibe Input Fields](ch01s03.xhtml#d0e647)

[Run Analysis](ch01s03.xhtml#d0e733)

[Run Strain Map Analysis](ch01s03.xhtml#d0e943)

[Update Natural Frequency Properties](ch01s03.xhtml#d0e1132)

[Update PCB Modeling Properties](ch01s03.xhtml#d0e1272)

[Update Random Vibe Properties](ch01s03.xhtml#d0e1501)

[Update Thermal Mech Properties](ch01s03.xhtml#d0e1700)

[ElementOrder](ch01s03.xhtml#sherlock_ug_api_elementorder)

[ModelSource](ch01s03.xhtml#sherlock_ug_api_modelsource)

[RunAnalysisRequest.Analysis.AnalysisType](ch01s03.xhtml#sherlock_ug_RunAnalysisRequest.Analysis.AnalysisType)

[RunStrainMapAnalysisRequest.StrainMapAnalysis.AnalysisType](ch01s03.xhtml#sherlock_ug_RunStrainMapAnalysisRequest.StrainMapAnalysis.AnalysisType)

[UpdatePcbModelingPropsRequest.Analysis.AnalysisType](ch01s03.xhtml#sherlock_ug_UpdatePcbModelingPropsRequest.Analysis.AnalysisType)

[UpdatePcbModelingPropsRequest.Analysis.PcbMaterialModel](ch01s03.xhtml#sherlock_ug_UpdatePcbModelingPropsRequest.Analysis.PcbMaterialModel)

[UpdatePcbModelingPropsRequest.Analysis.PcbModelType](ch01s03.xhtml#sherlock_ug_UpdatePcbModelingPropsRequest.Analysis.PcbModelType)

[Sherlock Common Service- SherlockCommonService.proto](ch01s04.xhtml)

[Exit Request](ch01s04.xhtml#d0e2295)

[IsSherlockClientLoadingRequest](ch01s04.xhtml#sherlock_ug_IsSherlockClientLoadingRequest)

[List Units](ch01s04.xhtml#d0e2354)

[Return Code](ch01s04.xhtml#sherlock_ug_ReturnCode)

[Health Check](ch01s04.xhtml#d0e2708)

[Sherlock Layer Service-SherlockLayerService.proto](ch01s05.xhtml)

[Delete All ICT Fixtures](ch01s05.xhtml#sherlock_ug_DeleteAllICTFixtures)

[Delete All Mount Points](ch01s05.xhtml#d0e3138)

[Delete All Test Points](ch01s05.xhtml#sherlock_ug_DeleteAllTestPoints)

[Export All ICT Fixtures](ch01s05.xhtml#sherlock_ug_ExportAllICTFixtures)

[Export All Mount Points](ch01s05.xhtml#d0e3341)

[Export All Test Points](ch01s05.xhtml#sherlock_ug_ExportAllTestPoints)

[Get Mount Point Boundaries](ch01s05.xhtml#d0e3526)

[Get Mount Point Chassis Materials](ch01s05.xhtml#d0e3594)

[Get Mount Point Shape Types](ch01s05.xhtml#d0e3662)

[Get Mount Point Sides](ch01s05.xhtml#d0e3761)

[Get Mount Point Types](ch01s05.xhtml#d0e3829)

[Get Mount Point Units](ch01s05.xhtml#d0e3897)

[Get Mount Points Properties](ch01s05.xhtml#sherlock_ug_GetMountPointsProperties)

[Update ICT Fixtures By File](ch01s05.xhtml#sherlock_ug_UpdateICTFixturesByFile)

[Update Mount Points](ch01s05.xhtml#d0e4424)

[Update Mount Points By File](ch01s05.xhtml#d0e4542)

[Update Test Points By File](ch01s05.xhtml#sherlock_ug_UpdateTestPoints)

[Sherlock Life Cycle Service- SherlockLifeCycleService.proto](ch01s06.xhtml)

[Add Harmonic Event](ch01s06.xhtml#d0e5168)

[Add Harmonic Profile](ch01s06.xhtml#d0e5392)

[Add Harmonic Vibe Profiles](ch01s06.xhtml#d0e5604)

[Add Shock Event](ch01s06.xhtml#d0e5854)

[Add Shock Profile](ch01s06.xhtml#d0e6065)

[Add Shock Profiles](ch01s06.xhtml#d0e6340)

[Add Random Vibe Event](ch01s06.xhtml#d0e6636)

[Add Random Vibe Profiles](ch01s06.xhtml#d0e6835)

[Add Random Vibe Profile](ch01s06.xhtml#d0e7076)

[Add Thermal Event](ch01s06.xhtml#d0e7282)

[Add Thermal Profile](ch01s06.xhtml#d0e7443)

[Add Thermal Profiles](ch01s06.xhtml#d0e7675)

[Create Life Phase](ch01s06.xhtml#d0e7934)

[Delete Event](ch01s06.xhtml#d0e8095)

[Delete Life Phase](ch01s06.xhtml#d0e8163)

[Events](ch01s06.xhtml#sherlock_ug_api_events)

[List Amplitude Units](ch01s06.xhtml#d0e8307)

[List Duration Units](ch01s06.xhtml#d0e8370)

[List Frequency Units](ch01s06.xhtml#d0e8439)

[List Harmonic Events](ch01s06.xhtml#d0e8508)

[List Harmonic Profile Types](ch01s06.xhtml#d0e8609)

[List Life Cyle Events](ch01s06.xhtml#d0e8678)

[List Life Cycle States](ch01s06.xhtml#d0e8898)

[List Life Cycle Types](ch01s06.xhtml#d0e8965)

[List Random Vibe Profile Types](ch01s06.xhtml#d0e9034)

[List Random Vibe Event](ch01s06.xhtml#d0e9103)

[List Shock Events](ch01s06.xhtml#d0e9204)

[List Shock Load Units](ch01s06.xhtml#d0e9305)

[List Shock Pulses](ch01s06.xhtml#d0e9374)

[List Temperature Units](ch01s06.xhtml#d0e9443)

[Load Harmonic Profile](ch01s06.xhtml#d0e9512)

[Load Random Vibe Profile](ch01s06.xhtml#d0e9770)

[Load Shock Profile Dataset](ch01s06.xhtml#d0e10016)

[Load Shock Profile Pulses](ch01s06.xhtml#d0e10270)

[Load Thermal Profile](ch01s06.xhtml#d0e10584)

[Methods with deprecated option](ch01s06.xhtml#d0e10865)

[Sherlock Model Services- SherlockModelServices.proto](ch01s07.xhtml)

[Export FEA Model](ch01s07.xhtml#d0e10974)

[Export Trace Reinforcement Model](ch01s07.xhtml#d0e11524)

[GenerateTraceModelRequest](ch01s07.xhtml#sherlock_ug_GenerateTraceModelRequest)

[Sherlock Parts Service- SherlockPartsService.proto](ch01s08.xhtml)

[Export/Import Parts List](ch01s08.xhtml#d0e12234)

[Import Parts List](ch01s08.xhtml#d0e12308)

[Get Boards Sides](ch01s08.xhtml#d0e12391)

[Get Part Location](ch01s08.xhtml#d0e12460)

[Get Part Location Units](ch01s08.xhtml#d0e12672)

[List Parts Libraries](ch01s08.xhtml#d0e12741)

[List Parts Not Updated](ch01s08.xhtml#d0e12810)

[Update Lead Modeling](ch01s08.xhtml#d0e13013)

[Update Parts List](ch01s08.xhtml#d0e13077)

[Update Parts Locations by File Request](ch01s08.xhtml#d0e13301)

[UpdatePartsLocationsRequest](ch01s08.xhtml#d0e13429)

[Sherlock Project Service- SherlockProjectService.proto](ch01s09.xhtml)

[Add Strain Map](ch01s09.xhtml#d0e13760)

[DeleteProjectRequest](ch01s09.xhtml#sherlock_ug_DeleteProjectRequest)

[Generate CCA Report](ch01s09.xhtml#d0e13991)

[Request a Project Report](ch01s09.xhtml#d0e14132)

[Import IPC2581](ch01s09.xhtml#sherlock_ug_import_IPC2581_Req)

[Import ODB](ch01s09.xhtml#sherlock_ug_import_ODB_Request)

[List CCAs](ch01s09.xhtml#d0e14469)

[List Strain Maps](ch01s09.xhtml#d0e14572)

[Sherlock Stackup Service- SherlockStackupService.proto](ch01s10.xhtml)

[Generate Stackup](ch01s10.xhtml#d0e14948)

[Get Layer Count](ch01s10.xhtml#d0e15140)

[Get Stackup Properties](ch01s10.xhtml#d0e15251)

[Get Conductor Thickness](ch01s10.xhtml#d0e15432)

[List Conductor Layers](ch01s10.xhtml#d0e15553)

[List CCA Conductor Layer Properties](ch01s10.xhtml#d0e15656)

[List Conductor Materials](ch01s10.xhtml#d0e15872)

[List Construction Styles](ch01s10.xhtml#d0e15941)

[List Fiber Materials](ch01s10.xhtml#d0e16010)

[List Laminate Materials Manufacturers](ch01s10.xhtml#d0e16079)

[List Laminate Materials](ch01s10.xhtml#d0e16148)

[List Laminate Thickness Units](ch01s10.xhtml#d0e16358)

[List Laminates](ch01s10.xhtml#d0e16427)

[Update Conductor Layer](ch01s10.xhtml#d0e16838)

[Update Laminate](ch01s10.xhtml#d0e16976)

[gRPC Scalar Value Types](ch01s11.xhtml)

Sherlock utilizes gRPC- a high performance, open-source, universal RPC (Remote Procedure Call) framework. This allows users with programming experience to access some of Sherlock’s internal functions, making it easier, for example, to integrate Sherlock's capabilities with other applications.

The gRPC framework makes these APIs accessible to a broad range of users. When Sherlock developers create a new API, they only need to define the service once in a Sherlock `.proto` file. The gRPC framework automatically generates the clients and servers required to support over a dozen computer languages.

This chapter includes all the information you need to set up and start using the APIs. Previous experience using gRPC is not required, but the information in this chapter assumes you have some programming experience in one of the following languages: Android Java, C#/.NET, C++, Dart, Go, Java, Kotlin/JVM, Node, Objective-C, PHP, Python, Ruby, or Web.

![[Note]](file:/D:/AnsysDev/documentation/docu_tools/oxygen_frameworks/docbook/css/img/note.png)

Note

Starting with Sherlock 22.2, Python client-side scripts have been generated and are included with your Sherlock installation. To use them, see the section below, [the section called “Pre-Generated Python Scripts”](index.xhtml#sherlock_ug_API_pre-generated_scripts "Pre-Generated Python Scripts").

The topics in this chapter include:

Setting Up Your Computer to Run Sherlock's APIs
-----------------------------------------------

In this section, you will find the following topics to help you get started using Sherlock's API features:

### Becoming Acquainted with gRPC

To use Sherlock's APIs, you will need programming experience (gRPC supports over a dozen computer languages) and a familiarity with gRPC as well. If you are new to gRPC, [the official website](https://grpc.io/docs/what-is-grpc/introduction/) provides a wealth of information to get you started: an overview of gRPC, a quick-start option, tutorials, downloads, and complete instructions for each supported computer language.

If you want to begin with an overview of basic concepts, visit the [Introduction to gRPC](https://grpc.io/docs/what-is-grpc/introduction/) page. If you would rather dive in quickly and learn by doing, visit their [Supported Languages and Platform](https://grpc.io/docs/languages/) page and click the programming language you prefer. This directs you to a quick-start guide and tutorials tailored for that language.

As of this printing, gRPC supports the following languages: Android Java, C#/.NET, C++, Dart, Go, Java, Kotlin/JVM, Node, Objective-C, PHP, Python, Ruby, and Web.

### Where to Find the Sherlock .proto Files

All the Sherlock `.proto` files you need to run the APIs were placed on your hard drive when you installed the Ansys software (version 211 and later). You will find the files in the following location (the file path may vary if you installed your Ansys software in a nondefault location):

`C:\Program Files\ANSYS Inc\v241\sherlock\grpc\`

The instructions from the gRPC website (see [the section called “Becoming Acquainted with gRPC”](index.xhtml#sherlock_ug_becoming_acquainted_grpc "Becoming Acquainted with gRPC")) explains how to implement the `.proto` files. Currently, the `.proto` files included with Sherlock are:

*   SherlockAnalysisService.proto
    
*   SherlockCommonService.proto
    
*   SherlockLayerService.proto
    
*   SherlockLifeCycleService.proto
    
*   SherlockModelServices.proto
    
*   SherlockPartsService.proto
    
*   SherlockProjectService.proto
    
*   SherlockStackupService.proto
    

### Connecting to the Sherlock gRPC Server

To use Sherlock's API's, you must connect to the gRPC server. To connect to the gRPC server, do the following:

1.  Open your computer's command-line interface and enter the command below (you can copy and paste the text) and press Enter. This will change the active directory to the location of your Sherlock installation. If you installed your Ansys software in a non-default location, modify the command-line accordingly.
    
    cd "C:\\Program Files\\ANSYS Inc\\v241\\sherlock"
    
2.  Once you have changed directory, enter the command below. (In the example shown, port 9090 is selected, but you may specify any of your computer's available communications ports.)
    
    SherlockClient.exe -grpcPort=9090
    
3.  If successful, Sherlock will launch and the Sherlock Client Console will appear, confirming the gRPC server is running on port 9090 or whichever port you selected.
    
    ![](../../graphics/gRPC/sherlock_ug_gRPC_3.png)
    

Closing Sherlock or the Sherlock Client Console terminates the connection to the gRPC server. You will need to repeat the above procedure to reconnect.

![[Note]](file:/D:/AnsysDev/documentation/docu_tools/oxygen_frameworks/docbook/css/img/note.png)

Note

A project must exist in the Sherlock client for the APIs to operate on the project.

### Pre-Generated Python Scripts

Starting with Sherlock 22.2, Python client-side scripts have been generated and included with the Sherlock installation. To begin using the scripts, do the following:

1.  Verify the following software is installed on your computer:
    
    1.  **Python:** Ansys recommends Python version 3.6 or later. If you need to upgrade, download the latest version from [python.org/downloads](https://www.python.org/downloads/) and install according to the instructions on the website.
        
    2.  **grpcio** and **grpcio-tools** (versions 1.39.0 or later) and **protobuf** (3.17.3 or later). Install them using the pip command in Python. In the Windows command prompt, enter the following:
        
        pip install grpcio-tools
        
        If you have them installed already, you can upgrade grpcio-tools and its dependencies using the following command in Python:
        
        pip install --upgrade --upgrade-strategy eager grpcio-tools
        
    
2.  In Windows Environment Variables, add the file path to the Python scripts to the Path System variable. If your Ansys software is installed in the default location, the path to the scripts looks like this:
    
    `C:\Program Files\ANSYS Inc\v241\sherlock\grpc\python`
    

Each API documented in this chapter provides an example of its implementation in Python. [The API Index](ch01s02.xhtml "Index to the Sherlock APIs") gives an overview of all the functions available to you.

### Installing and Setting Up BloomRPC (Optional)

The BloomRPC application is an open source GUI client. It is not required for running Sherlock's APIs, but it does provide a simple way for you to enter an API request and see the response. (See the screenshot below.) [This link will take you to the GitHub website](https://github.com/uw-labs/bloomrpc/releases) where you can download the latest setup file. Once you have installed BloomRPC, follow the configuration instructions below.

![](../../graphics/gRPC/sherlock_ug_gRPC_10.png)

Configuring BloomRPC:

1.  Open the BloomRPC application.
    
2.  Load the `.proto` files into BloomRPC by clicking on the ![](../../graphics/gRPC/sherlock_ug_gRPC_1.png) icon in the Protos panel. This will open a file explorer interface. Navigate to your Sherlock installation and select all the Sherlock `.proto` files. (See [the section called “Where to Find the Sherlock .proto Files”](index.xhtml#sherlock_ug_where_to_find_proto_files "Where to Find the Sherlock .proto Files").)
    
3.  When successfully loaded into BloomRPC, the files will appear in the Protos panel.
    
    ![](../../graphics/gRPC/sherlock_ug_gRPC_2.png)
    
4.  Connect to the server by entering the server address. In this example, **0.0.0.0:9090** is shown, but use whatever port number you chose in the section above, [the section called “Connecting to the Sherlock gRPC Server”](index.xhtml#sherlock_ug_connecting_to_grpc_server "Connecting to the Sherlock gRPC Server") (step 2).
    
    ![](../../graphics/gRPC/sherlock_ug_gRPC_4.png)
    

* * *

 

 

 [Next](ch01s02.xhtml)

 

 

 Index to the Sherlock APIs