# Chapter 1. API Services

**Table of Contents**

[Setting Up Your Computer to Run Sherlock's APIs](index.md#sherlock_ug_Setting_Up_Your_PC_for_APIs)



[Becoming Acquainted with gRPC](index.md#sherlock_ug_becoming_acquainted_grpc)

[Where to Find the Sherlock .proto Files](index.md#sherlock_ug_where_to_find_proto_files)

[Connecting to the Sherlock gRPC Server](index.md#sherlock_ug_connecting_to_grpc_server)

[Running API's without the Sherlock User Interface](index.md#sherlock_ug_API_no_UI)

[Pre-Generated Python Scripts](index.md#sherlock_ug_API_pre-
generated_scripts)

[Installing and Setting Up BloomRPC (Optional)](index.md#d0e242)

[Index to the Sherlock APIs](ch01s02.md)

[Sherlock Analysis Service- SherlockAnalysisService.proto](ch01s03.md)



[Get PCB Modeling Input Fields](ch01s03.md#d0e699)

[Get Harmonic Vibe Input Fields](ch01s03s02.md)

[Get ICT Analysis Input Fields](ch01s03s03.md)

[Get Mechanical Shock Input Fields](ch01s03s04.md)

[Get Natural Frequency Input Fields ](ch01s03s05.md)

[Get Random Vibe Input Fields](ch01s03s06.md)

[Get Solder Fatigue Input Fields ](ch01s03s07.md)

[Run Analysis](ch01s03s08.md)

[Run Strain Map Analysis](ch01s03s09.md)

[Update Harmonic Vibe Props](ch01s03s10.md)

[Update ICT Analysis Props](ch01s03s11.md)

[Update Mechanical Shock Props](ch01s03s12.md)

[Update Natural Frequency Properties](ch01s03s13.md)

[Update Part Modeling](ch01s03s14.md)

[Update PCB Modeling Properties](ch01s03s15.md)

[Update Random Vibe Properties](ch01s03s16.md)

[Update Solder Fatigue Props](ch01s03s17.md)

[Update Thermal Mech Properties](ch01s03s18.md)

[ElementOrder](ch01s03s19.md)

[ModelSource](ch01s03s20.md)

[RunAnalysisRequest.Analysis.AnalysisType](ch01s03s21.md)

[RunStrainMapAnalysisRequest.StrainMapAnalysis.AnalysisType](ch01s03s22.md)

[UpdatePcbModelingPropsRequest.Analysis.AnalysisType](ch01s03s23.md)

[UpdatePcbModelingPropsRequest.Analysis.PcbMaterialModel](ch01s03s24.md)

[UpdatePcbModelingPropsRequest.Analysis.PcbModelType](ch01s03s25.md)

[Sherlock Common Service- SherlockCommonService.proto](ch01s04.md)



[Exit Request](ch01s04.md#d0e3697)

[IsSherlockClientLoadingRequest](ch01s04s02.md)

[List Units](ch01s04s03.md)

[Return Code](ch01s04s04.md)

[Get Solders](ch01s04s05.md)

[Health Check](ch01s04s06.md)

[Sherlock Layer Service-SherlockLayerService.proto](ch01s05.md)



[Add Potting Region](ch01s05.md#d0e4555)

[Delete All ICT Fixtures](ch01s05s02.md)

[Delete All Mount Points](ch01s05s03.md)

[Delete All Test Points](ch01s05s04.md)

[Export All ICT Fixtures](ch01s05s05.md)

[Export All Mount Points](ch01s05s06.md)

[Export All Test Points](ch01s05s07.md)

[Get Mount Point Boundaries](ch01s05s08.md)

[Get Mount Point Chassis Materials](ch01s05s09.md)

[Get Mount Point Shape Types](ch01s05s10.md)

[Get Mount Point Sides](ch01s05s11.md)

[Get Mount Point Types](ch01s05s12.md)

[Get Mount Point Units](ch01s05s13.md)

[Get Mount Points Properties](ch01s05s14.md)

[PCB Shape](ch01s05s15.md)

[Update ICT Fixtures By File](ch01s05s16.md)

[Update Mount Points](ch01s05s17.md)

[Update Mount Points By File](ch01s05s18.md)

[Update Test Points By File](ch01s05s19.md)

[Sherlock Life Cycle Service- SherlockLifeCycleService.proto](ch01s06.md)



[Add Harmonic Event](ch01s06.md#d0e7187)

[Add Harmonic Vibe Profiles](ch01s06s02.md)

[Add Shock Event](ch01s06s03.md)

[Add Shock Profiles](ch01s06s04.md)

[Add Random Vibe Event](ch01s06s05.md)

[Add Random Vibe Profiles](ch01s06s06.md)

[Add Thermal Event](ch01s06s07.md)

[Add Thermal Profiles](ch01s06s08.md)

[Create Life Phase](ch01s06s09.md)

[Delete Event](ch01s06s10.md)

[Delete Life Phase](ch01s06s11.md)

[Events](ch01s06s12.md)

[List Amplitude Units](ch01s06s13.md)

[List Duration Units](ch01s06s14.md)

[List Frequency Units](ch01s06s15.md)

[List Harmonic Events](ch01s06s16.md)

[List Harmonic Profile Types](ch01s06s17.md)

[List Life Cyle Events](ch01s06s18.md)

[List Life Cycle States](ch01s06s19.md)

[List Life Cycle Types](ch01s06s20.md)

[List Random Vibe Profile Types](ch01s06s21.md)

[List Random Vibe Event](ch01s06s22.md)

[List Shock Events](ch01s06s23.md)

[List Shock Load Units](ch01s06s24.md)

[List Shock Pulses](ch01s06s25.md)

[List Temperature Units](ch01s06s26.md)

[Load Harmonic Profile](ch01s06s27.md)

[Load Random Vibe Profile](ch01s06s28.md)

[Load Shock Profile Dataset](ch01s06s29.md)

[Load Shock Profile Pulses](ch01s06s30.md)

[Load Thermal Profile](ch01s06s31.md)

[Sherlock Model Services- SherlockModelServices.proto](ch01s07.md)



[Drill Hole Modeling](ch01s07.md#sherlock_ug_DrillHoleModeling)

[Export AEDB](ch01s07s02.md)

[Export FEA Model](ch01s07s03.md)

[Export Trace Model](ch01s07s04.md)

[Export Trace Reinforcement Model](ch01s07s05.md)

[Generate Trace Model](ch01s07s06.md)

[Trace Model Export Parameters](ch01s07s07.md)

[MeshType](ch01s07s08.md)

[TraceOutputType](ch01s07s09.md)

[Sherlock Parts Service- SherlockPartsService.proto](ch01s08.md)



[Export Net List](ch01s08.md#d0e13913)

[Export/Import Parts List](ch01s08s02.md)

[Get Boards Sides](ch01s08s03.md)

[Import Parts List](ch01s08s04.md)

[Get Part Location](ch01s08s05.md)

[Get Part Location Units](ch01s08s06.md)

[List Parts Libraries](ch01s08s07.md)

[List Parts Not Updated](ch01s08s08.md)

[Update Lead Modeling](ch01s08s09.md)

[Update Parts List](ch01s08s10.md)

[Update Parts List From AVL](ch01s08s11.md)

[Update Parts List Properties](ch01s08s12.md)

[Update Parts Locations by File Request](ch01s08s13.md)

[UpdatePartsLocationsRequest](ch01s08s14.md)

[AVLDescription](ch01s08s15.md)

[AVLPartNum](ch01s08s16.md)

[DuplicationMode](ch01s08s17.md)

[MatchingMode](ch01s08s18.md)

[Sherlock Project Service- SherlockProjectService.proto](ch01s09.md)



[Add CCA](ch01s09.md#d0e16179)

[Add Project](ch01s09s02.md)

[Add Strain Map](ch01s09s03.md)

[Add Thermal Map](ch01s09s04.md)

[CCA](ch01s09s05.md)

[DeleteProjectRequest](ch01s09s06.md)

[Generate CCA Report](ch01s09s07.md)

[Request a Project Report](ch01s09s08.md)

[Import IPC2581](ch01s09s09.md)

[Import ODB](ch01s09s10.md)

[Import Project Zip Archive](ch01s09s11.md)

[Import Project Zip- Single Mode](ch01s09s12.md)

[List CCAs](ch01s09s13.md)

[List Strain Maps](ch01s09s14.md)

[List Thermal Maps](ch01s09s15.md)

[Thermal Map File](ch01s09s16.md)

[Thermal Map File](ch01s09s17.md)

[Update Thermal Map](ch01s09s18.md)

[Sherlock Stackup Service- SherlockStackupService.proto](ch01s10.md)



[Generate Stackup](ch01s10.md#d0e19235)

[Get Layer Count](ch01s10s02.md)

[Get Stackup Properties](ch01s10s03.md)

[Get Conductor Thickness](ch01s10s04.md)

[List Conductor Layers](ch01s10s05.md)

[List CCA Conductor Layer Properties](ch01s10s06.md)

[List Conductor Materials](ch01s10s07.md)

[List Construction Styles](ch01s10s08.md)

[List Fiber Materials](ch01s10s09.md)

[List Laminate Materials Manufacturers](ch01s10s10.md)

[List Laminate Materials](ch01s10s11.md)

[List Laminate Thickness Units](ch01s10s12.md)

[List Laminates](ch01s10s13.md)

[Update Conductor Layer](ch01s10s14.md)

[Update Laminate](ch01s10s15.md)

[gRPC Scalar Value Types](ch01s11.md)

Sherlock utilizes gRPC- a high performance, open-source, universal RPC (Remote
Procedure Call) framework. This allows users with programming experience to
access some of Sherlock's internal functions, making it easier, for example,
to integrate Sherlock's capabilities with other applications.

The gRPC framework makes these APIs accessible to a broad range of users. When
Sherlock developers create a new API, they only need to define the service
once in a Sherlock `.proto` file. The gRPC framework automatically generates
the clients and servers required to support over a dozen computer languages.

This chapter includes all the information you need to set up and start using
the APIs. Previous experience using gRPC is not required, but the information
in this chapter assumes you have some programming experience in one of the
following languages: Android Java, C#/.NET, C++, Dart, Go, Java, Kotlin"/JVM,
Node, Objective-C, PHP, Python, Ruby, or Web.

![\[Note\]](file:/F:/AnsysDev/GitRepos/doc/tools/oxygen_frameworks/docbook/css/img/note.png)|
Note  
---|---  
Python client-side scripts have been generated and are included with your
Sherlock installation. To use them, see the section below, [the section called
"Pre-Generated Python Scripts"](index.md#sherlock_ug_API_pre-
generated_scripts "Pre-Generated Python Scripts").

![\[Note\]](file:/F:/AnsysDev/GitRepos/doc/tools/oxygen_frameworks/docbook/css/img/note.png)|
Note  
---|---  
In some cases, after a Sherlock API gRPC request is sent, a response is
received before other required operations are complete. This can cause
unexpected behavior when you are scripting multiple commands where one must
finish before the next one begins. The workaround is to add a delay after any
API call that must finish before the next API call is initiated.

The topics in this chapter include:

# Setting Up Your Computer to Run Sherlock's APIs

In this section, you will find the following topics to help you get started
using Sherlock's API features:

## Becoming Acquainted with gRPC

To use Sherlock's APIs, you will need programming experience (gRPC supports
over a dozen computer languages) and a familiarity with gRPC as well. If you
are new to gRPC, [the official website](https://grpc.io/docs/what-is-
grpc/introduction/) provides a wealth of information to get you started: an
overview of gRPC, a quick-start option, tutorials, downloads, and complete
instructions for each supported computer language.

If you want to begin with an overview of basic concepts, visit the
[Introduction to gRPC](https://grpc.io/docs/what-is-grpc/introduction/) page.
If you would rather dive in quickly and learn by doing, visit their [Supported Languages and Platform](https://grpc.io/docs/languages/) page and click the
programming language you prefer. This directs you to a quick-start guide and
tutorials tailored for that language.

As of this printing, gRPC supports the following languages: Android Java,
C#/.NET, C++, Dart, Go, Java, Kotlin"/JVM, Node, Objective-C, PHP, Python,
Ruby, and Web.

## Where to Find the Sherlock .proto Files

All the Sherlock `.proto` files you need to run the APIs were placed on your
hard drive when you installed the Ansys software (version 211 and later). You
will find the files in the following location (the file path may vary if you
installed your Ansys software in a nondefault location):

Windows: `C:/Program Files/ANSYS Inc/v242/sherlock/grpc`
---
Linux: `/ansys_inc/v242/sherlock/grpc`

The instructions from the gRPC website (see [the section called "Becoming Acquainted with gRPC"](index.md#sherlock_ug_becoming_acquainted_grpc "Becoming Acquainted with gRPC")) explains how to implement the `.proto`
files. Currently, the `.proto` files included with Sherlock are:

  * SherlockAnalysisService.proto

  * SherlockCommonService.proto

  * SherlockLayerService.proto

  * SherlockLifeCycleService.proto

  * SherlockModelServices.proto

  * SherlockPartsService.proto

  * SherlockProjectService.proto

  * SherlockStackupService.proto

## Connecting to the Sherlock gRPC Server

To use Sherlock's API's, you must connect to the gRPC server. To connect, do
the following:

  1. For Windows users, open your computer's command-line interface and enter the command below (you can copy and paste the text) and press Enter. This will change the active directory to the location of your Sherlock installation. If you installed your Ansys software in a non-default location, modify the command-line accordingly.

     cd "C:\Program Files\ANSYS Inc\v242\sherlock"

For Linux users, make sure you have updated all users' login startup files as
described in Post-Installation Procedures for Sherlock in Ansys' _Linux
Installation Guide_.

  2. Once you have changed directory (Windows), enter the command below. (In the examples shown, port 9090 is selected, but you may specify any of your computer's available communications ports.)

Windows:


        SherlockClient.exe -grpcPort=9090

Linux:


        runSherlock -grpcPort=9090

![\[Tip\]](file:/F:/AnsysDev/GitRepos/doc/tools/oxygen_frameworks/docbook/css/img/tip.png)|
Tip  
---|---  
You can run API's in Sherlock without launching Sherlock's user interface. See
the section below [the section called "Running API's without the Sherlock User Interface"](index.md#sherlock_ug_API_no_UI "Running API's without the
Sherlock User Interface").

  3. If successful, Sherlock will launch and the Sherlock Client Console appears (Windows), confirming the gRPC server is running on port 9090 or whichever port you selected. For Linux users, the gRPC status appears in the terminal window.

![](../../graphics/gRPC/sherlock_ug_gRPC_3.png)

Closing Sherlock or the Sherlock Client Console terminates the connection to
the gRPC server. You will need to repeat the above procedure to reconnect.

![\[Note\]](file:/F:/AnsysDev/GitRepos/doc/tools/oxygen_frameworks/docbook/css/img/note.png)|
Note  
---|---  
A project must exist in the Sherlock client for the APIs to operate on the
project.

## Running API's without the Sherlock User Interface

Sherlock allows you to run API's without launching the Sherlock user
interface. With this option enabled, Sherlock displays no splash screens,
progress dialogs, nor console output. Only error dialogs are displayed. This
option can be helpful if you wish, for example, to run a batch of analyses
quickly.

To suppress Sherlock's user interface, simply add **`-noGUI`** to the command
line when launching Sherlock as described in [ step 2 in the previous section](index.md#sherlock_ug_API_connect_step_2). For example:

Windows:



    SherlockClient.exe -grpcPort=9090 -noGUI

Linux:



    runSherlock -grpcPort=9090 -noGUI



Although the console will not be displayed, Sherlock continues to write
console logs to `AppData/Roaming/Sherlock/logs` (Windows) or the
`.sherlock/logs` folder of the home directory (Linux). To exit Sherlock, use
the [ExitRequest](ch01s04.md#sherlock_ug_ExitRequest "ExitRequest") API.

## Pre-Generated Python Scripts

Starting with Sherlock 22.2, Python client-side scripts have been generated
and included with the Sherlock installation. To begin using the scripts, do
the following:

  1. Verify the following software is installed on your computer:

    1. **Python:** Ansys recommends Python version 3.6 or later. If you need to upgrade, download the latest version from [python.org/downloads](https://www.python.org/downloads/) and install according to the instructions on the website. 

    2. **grpcio** and **grpcio-tools** (versions 1.39.0 or later) and **protobuf** (3.17.3 or later). Install them using the pip command in Python. In the Windows command prompt, enter the following:

                pip install grpcio-tools

If you have them installed already, you can upgrade grpcio-tools and its
dependencies using the following command in Python:


                pip install --upgrade --upgrade-strategy eager grpcio-tools

  2. In Windows Environment Variables, add the file path to the Python scripts to the Path System variable. If your Ansys software is installed in the default location, the path to the scripts looks like this:

`C:\Program Files\ANSYS Inc\v242\sherlock\grpc\python`
---

Each API documented in this chapter provides an example of its implementation
in Python. [The API Index](ch01s02.md "Index to the Sherlock APIs") gives an
overview of all the functions available to you.

## Installing and Setting Up BloomRPC (Optional)

The BloomRPC application is an open source GUI client. It is not required for
running Sherlock's APIs, but it does provide a simple way for you to enter an
API request and see the response. (See the screenshot below.) [This link will take you to the GitHub website](https://github.com/uw-labs/bloomrpc/releases)
where you can download the latest setup file. Once you have installed
BloomRPC, follow the configuration instructions below.

![](../../graphics/gRPC/sherlock_ug_gRPC_10.png)
---

Configuring BloomRPC:

  1. Open the BloomRPC application.

  2. Load the `.proto` files into BloomRPC by clicking on the ![](../../graphics/gRPC/sherlock_ug_gRPC_1.png) icon in the Protos panel. This will open a file explorer interface. Navigate to your Sherlock installation and select all the Sherlock `.proto` files. (See [the section called "Where to Find the Sherlock .proto Files"](index.md#sherlock_ug_where_to_find_proto_files "Where to Find the Sherlock .proto Files").)

  3. When successfully loaded into BloomRPC, the files will appear in the Protos panel.

![](../../graphics/gRPC/sherlock_ug_gRPC_2.png)

  4. Connect to the server by entering the server address. In this example, **0.0.0.0:9090** is shown, but use whatever port number you chose in the section above, [the section called "Connecting to the Sherlock gRPC Server"](index.md#sherlock_ug_connecting_to_grpc_server "Connecting to the Sherlock gRPC Server") (step 2).

![](../../graphics/gRPC/sherlock_ug_gRPC_4.png)

* * *

| /   / [Home](../../index.htm) | [Next](ch01s02.md) |     |
| ----------------------------- | ------------------ | --- |

