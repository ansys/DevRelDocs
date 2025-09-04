# Getting started

In this section, you will find the following topics to help you get started
using Sherlock's API features:

## Becoming Acquainted with gRPC

To use Sherlock's APIs, you will need programming experience (gRPC supports
over a dozen computer languages) and a familiarity with gRPC as well. If you
are new to gRPC, [the official website](https://grpc.io/docs/what-is-grpc/introduction/) provides a wealth of information to get you started: an
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

Windows: `C:/Program Files/ANSYS Inc/v252/sherlock/grpc`

Linux: `/ansys_inc/v252/sherlock/grpc`

The instructions from [the gRPC website](https://grpc.io/docs/what-is-grpc/introduction/) explain how to implement the `.proto`
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

  For Windows users, open your computer's command-line interface and enter the command below (you can copy and paste the text) and press Enter. This will change the active directory to the location of your Sherlock installation. If you installed your Ansys software in a non-default location, modify the command-line accordingly.

          cd "C:\Program Files\ANSYS Inc\252\sherlock"

  For Linux users, make sure you have updated all users' login startup files as described in the [Post-Installation Procedures](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v252/en/installation/unix_post_mech.html#linux_postinst_sherlock_01) for Sherlock in Ansys' **Linux Installation Guide**, *5.1.7. Post-Installation Procedures for Ansys Sherlock.*

 Once you have changed directory (Windows), enter the command below. (In the examples shown, port 9090 is selected, but you may specify any of your computer's available communications ports.)

Windows:

```console
SherlockClient.exe -grpcPort=9090
```

Linux:

```console
runSherlock -grpcPort=9090
```

**Tip**

You can run API's in Sherlock without launching Sherlock's user interface. See the section below **Running API's without the Sherlock User Interface**.

If successful, Sherlock will launch and the Sherlock Client Console appears (Windows), confirming the gRPC server is running on port 9090 or whichever port you selected. For Linux users, the gRPC status appears in the terminal window.

![](./../graphics/gRPC/sherlock_ug_gRPC_3.png)

Closing Sherlock or the Sherlock Client Console terminates the connection to
the gRPC server. You will need to repeat the above procedure to reconnect.

**Note**
A project must exist in the Sherlock client for the APIs to operate on the
project.

## Running API's without the Sherlock User Interface

Sherlock allows you to run API's without launching the Sherlock user
interface. With this option enabled, Sherlock displays no splash screens,
progress dialogs, nor console output. Only error dialogs are displayed. This
option can be helpful if you wish, for example, to run a batch of analyses
quickly.

To suppress Sherlock's user interface, simply add **`-noGUI`** to the command
line when launching Sherlock as described earlier in the previous section. For example:

Windows:

    SherlockClient.exe -grpcPort=9090 -noGUI

Linux:

    runSherlock -grpcPort=9090 -noGUI

Although the console will not be displayed, Sherlock continues to write
console logs to `AppData/Roaming/Sherlock/logs` (Windows) or the
`.sherlock/logs` folder of the home directory (Linux). To exit Sherlock, use
the [ExitRequest](sherlock-reference.md#sherlockcommonserviceproto "ExitRequest") API.

## Pre-Generated Python Scripts

Starting with Sherlock 22.2, Python client-side scripts have been generated
and included with the Sherlock installation. To begin using the scripts, do
the following:

 1. Verify the following software is installed on your computer:

    **Python:** Ansys recommends Python version 3.6 or later. If you need to upgrade, download the latest version from [python.org/downloads](https://www.python.org/downloads/) and install according to the instructions on the website. 

    **grpcio** and **grpcio-tools** (versions 1.39.0 or later) and **protobuf** (3.17.3 or later). Install them using the pip command in Python. In the Windows command prompt, enter the following:

    ```console
    pip install grpcio-tools
    ```
    If you have them installed already, you can upgrade grpcio-tools and its dependencies using the following command in Python:

        pip install --upgrade --upgrade-strategy eager grpcio-tools

  2. In Windows Environment Variables, add the file path to the Python scripts to the Path System variable. If your Ansys software is installed in the default location, the path to the scripts looks like this:

      `C:\Program Files\ANSYS Inc\v252\sherlock\grpc\python`

[The API Index](index-to-sherlock-api.md "Index to the Sherlock APIs") gives an
overview of all the functions available to you. For each API, you can find an example of its implementation in the section [Examples](Examples.md). 

## Installing and Setting Up BloomRPC (Optional)

The BloomRPC application is an open source GUI client. It is not required for
running Sherlock's APIs, but it does provide a simple way for you to enter an
API request and see the response. (See the screenshot below.) [This link will take you to the GitHub website](https://github.com/uw-labs/bloomrpc/releases)
where you can download the latest setup file. Once you have installed
BloomRPC, follow the configuration instructions below.

![](./../graphics/gRPC/sherlock_ug_gRPC_10.png)
---

Configuring BloomRPC:

  1. Open the BloomRPC application.

  2. Load the `.proto` files into BloomRPC by clicking on the ![](./../graphics/gRPC/sherlock_ug_gRPC_1.png) icon in the Protos panel. This will open a file explorer interface. Navigate to your Sherlock installation and select all the Sherlock `.proto` files. (See the section above **Where to Find the Sherlock .proto Files**.)

  3. When successfully loaded into BloomRPC, the files will appear in the Protos panel (see A in image below).

  4. Connect to the server by entering the server address. In the example below (B), **0.0.0.0:9090** is shown, but use whatever port number you chose in the section above, **Connecting to the Sherlock gRPC Server**.

![](./../graphics/gRPC/sherlock_ug_gRPC_2.png)
