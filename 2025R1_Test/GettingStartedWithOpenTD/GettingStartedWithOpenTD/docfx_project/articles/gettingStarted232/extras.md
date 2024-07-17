
# Extras

## Control how OpenTD Connects to Thermal Desktop

In this guide, we mostly call ThermalDesktop.Connect() with default options, which means it starts a new instance of TD with the latest version of AutoCAD available, then creates a new, blank drawing. To change this behavior, set the ThermalDesktop.*ConnectConfig* member before calling Connect(), as shown in the following program, which hides the AutoCAD window while it’s running:

```c#
using OpenTDv232;

namespace OpenTDv232GettingStarted

{

    class ControlHowOpenTDConnects

    {

        public static void Main(string[] args)

        {

            var td = new ThermalDesktop();

            td.ConnectConfig.AcadVisible = false;

            td.Connect();

            // useful code goes here...

            td.Quit();

        }

    }

}
```

This program also demonstrates the ThermalDesktop.*Quit()* method, which tells AutoCAD to close, regardless of whether there are unsaved changes. (To save a dwg, use ThermalDesktop.*SaveAs*.) To *really* force AutoCAD to quit – by killing the acad.exe process – use ThermalDesktop.Quit(true). This should be considered a last resort. It may leave lock files in the dwg directory and/or have other unintended consequences.

Here are some useful members of ConnectConfig:

- **AcadExePathname**: By default, Connect() starts the latest version of AutoCAD found on your machine. Set AcadExePathname to the full path of any acad.exe to use it instead.

- **AcadVisible**: Set to false to hide the AutoCAD window. This only works when starting new TD instances, not attaching to already-running instances.

- **DwgPathname**: If this is set, Connect() will try to attach to or start a TD instance with this dwg. It will throw an exception if the dwg does not exist. Instead of editing ConnectConfig, this can also be set using an overloaded ThermalDesktop constructor:

```c#
var td = new ThermalDesktop(@”path\\to\\dwg”);
```

- **PipeEndpointName**: Use this after issuing one of the TD commands for starting servers (see Section 9.2) to connect to an already-running instance of TD.

- **Type**: This determines whether Connect() will try to attach to an already-running instance of TD or start a new one. The default is AUTO, which means it will try both – first it will try to attach, but if that fails, it will start a new instance.

A complete list of ConnectConfig members (along with all OpenTD types) can be found in the “OpenTD Class Reference” document. (See Section 10.)

## Control OpenTD Servers from AutoCAD

A client program communicates with TD via an OpenTD server launched within the acad.exe process, identified with a string called a *Pipe Endpoint Name*. When you load a dwg containing TD entities, an OpenTD server is started using the dwg pathname to generate the pipe endpoint name. That’s how the Connect() method finds the correct acad process when DwgPathname is set (see Section 9.1). An OpenTD server is also automatically started when you start a new instance of TD via OpenTD.

There are commands you can use at the AutoCAD command line to query and start OpenTD servers:

- **RCOPENTDV232**: This command will ask you for a pipe endpoint name and start a server with that name.

- **RCOPENTDV232RANDOM**: This command will start a server with a random name.

- **RCOPENTDV232DWG**: This command will start a server with a name based on the dwg pathname. It is included for completeness, but there should never be a reason to call it, since it is called automatically by TD.

- **RCOPENTDV232LISTSERVERS**: This command will list the pipe endpoint names of the active OpenTD 2023 R2 servers.

To connect a client program to a server based on endpoint name, set ThermalDesktop.ConnectConfig.PipeEndpointName before calling Connect() – see Section 9.1.

## Execute AutoCAD Commands

When an OpenTD method is not available to perform a task, you might be able to use the ThermalDesktop.*SendCommand* method to send an AutoCAD command to TD. SendCommand has the following signature:

```c#
void SendCommand(string command, bool echo = true, int delay = 1000)
```

In addition to the string containing the command, there are two optional parameters: *echo* and *delay*. Echo determines whether your command will be echoed to the AutoCAD command line and defaults to true. Delay is the time in milliseconds that your program will wait after issuing the command before continuing. SendCommand executes asynchronously, and currently there is no way for OpenTD to check when it is done. The workaround is to wait a fixed amount of time before continuing. The default delay is 1000 ms. You may wish to experiment with shorter delays to speed up execution.

The following program demonstrates using SendCommand:

```c#
using OpenTDv232;

namespace OpenTDv232GettingStarted

{

    class ExecuteAutocadCommands

    {

        public static void Main(string[] args)

        {

            var td = new ThermalDesktop();

            td.Connect();

            // draw an AutoCAD rectangle:

            td.SendCommand("rectang 3,3 4,5 ");

            // draw AutoCAD text: (Using a dash in front

            // of the command to make it command-line only.

            // This works for some AutoCAD commands.)

            td.SendCommand("-text 3,2.6 0.25 0 A Door\\n");

            // zoom extents using OpenTD method:

            td.ZoomExtents();

            // zoom view to scale factor 1.5: (using

            // abbreviated command names)

            td.SendCommand("z s 1.5 ");

        }

    }

}
```

## Execute TD COM Commands

Before OpenTD, there was a Windows Component Object Model (COM) interface to TD. It could be used to perform a subset of OpenTD functions. To use it, commands were entered as text strings and parsed by the TD COM server.

In OpenTD, the ThermalDesktop.*SendLegacyComCommand* method emulates the TD COM parser without actually using a COM connection.

Most TD COM functionality can be accomplished using native OpenTD methods. The SendLegacyComCommand method is included for completeness, and to ease the process of migrating an existing TD COM application to OpenTD. SendLegacyComCommand is not recommended to be used by new OpenTD applications.

Since the underlying RadCAD functions used by the COM server report success/failure via the AutoCAD console and not via a return value, SendLegacyComCommand may appear to succeed when it did not. It will only throw exceptions if it doesn't recognize a command or if the command crashes AutoCAD, and not if the command fails in some non-catastrophic way.

SendLegacyComCommand usually returns an empty string. The only exception to this is the "get" command, which attempts to return a string representing the value of a symbol.

The following commands are supported:

- **acadcommand "command" ["optional parameter" "optional parameter" ...]**  
    Executes an AutoCAD console command. The command and any parameters are individually enclosed in double quotes. New applications should use ThermalDesktop.SendCommand instead. Examples:

  - SendLegacyComCommand("acadcommand \\"zoom\\" \\"extents\\"")
  - SendLegacyComCommand("acadcommand \\"line\\" \\"1,1\\" \\"2,2\\" \\"\\"")

- **case [optional parameters]**
Calculates radiation and Cond/Cap data for the current case set. New applications should use OpenTD CaseSetManager and/or CaseSet instead. Examples:
  - SendLegacyComCommand("case") // Calculates all radiation and cond/cap data.
  - SendLegacyComCommand("case rad0 rad3 cc") // Calculates 1st and 4th radation tasks and cond/cap data.

- **caseset parameters**
Provides access to the Case Set Manager. New applications should use OpenTD CaseSetManager and/or CaseSet instead.

- **copyradkfiles fromFilename toFilename** 
Copies radk files.

- **createmapset**
Undocumented interactive command.

- **disableuserbreaks**  
Disables the ability to press ESC to end tasks.

- **displaycurrentdataset**
    Displays the current post-processing dataset. New applications should use OpenTD.PostProcessing instead.

- **dumpppmap outputFilename**
Undocumented post-processing command. New applications should use OpenTD.Results instead.

- **exitautocad** 
Attempts to exit Thermal Desktop without saving the dwg. New applications should use ThermalDesktop.Quit instead.

- **exportnodeinfo**  
Calls the RcExportNodeInfo command. New applications should use ThermalDesktop.ExportNodeInfo instead.

- **get symbolName**  
Returns a string representing the evaluated value of a symbol. New applications should use ThermalDesktop.GetSymbolValue instead.

- **importcomet filename**  
Undocumented.

- **mapnastran inputFilename outputFilename [optional tolerance]**  
Maps the current post-processing data to the Nastran mesh defined in inputFilename, writing the results in Nastran format in outputFilename. New applications should use PostProcessing.*DataMapper* instead.

- **object**  
This command is used by Dynamic SINDA/FLUINT to display the value of OBJECT in the TD Dynamic SINDA/FLUINT status window.

- **opticalias alias opticalProp**  
Changes what optical property an alias refers to. The names cannot include spaces. New applications should use ThermalDesktop.OpticalPropAliasManager instead.

- **orbit parameters**  
Provides access to the Heating Rate Case Manager. New applications should use OpenTD Orbit instead.

- **output message**  
Writes message to the TD Dynamic SINDA/FLUINT status window.

- **postprocess filename [optional delay in ms]**  
Creates or updates a TEXT-type dataset from a file. New applications should use PostProcessing.DatasetManager instead.

- **ppnexttime**  
Steps forward to the next record in the current dataset. New applications should use PostProcessing.DatasetManager instead.

- **ppsavefile savOrCsrPathname**  
Creates or updates a SF-type dataset from a save file or CSR directory. New applications should use PostProcessing.DatasetManager instead.

- **ppsettime index**  
Sets the record for the current post-processing dataset. Uses 0-indexed record array index (0, 1, 2, etc) not record number. New applications should use PostProcessing.DatasetManager instead.

- **sendf4**  
Sends the F4 keycode. Useful for capturing the screen using hypersnap/cam.

- **set symbolName expressionIncludingSpaces**  
Updates an existing symbol's expression. New applications should use OpenTD Symbol instead.

- **setmapconstanttol toleranceInDwgUnits**  
Sets the constant tolerance to be used by the mapnastran command, in dwg units. New applications should use PostProcessing.DataMapper instead.

- **setmapcurrentorall parameter**  
If parameter is ALL, the mapnastran command will perform the mapping for all records in the dataset. If parameter is any other value, it will perform the mapping at the current record. New applications should use PostProcessing.DataMapper instead.

- **setmapset mapsetName**  
Instructs the mapnastran command to only use the specified object mapset.

- **setmapvariabletol TolerancesSeperatedBySpaces**  
Sets the progressive tolerance to be used by the mapnastran command, in dwg units.

- **startcase [optional name]**  
Runs the current case set, or the one specified by the optional name. New applications should use OpenTD CaseSetManager and/or CaseSet instead.

- **tdmapallmappers appendToFilename**  
Executes all mappers. Inserts the appendToFilename string at the end of each output file, before any extension. New applications should use PostProcessing.DataMapper instead.

- **thermoalias alias thermoProp**  
Changes what thermophysical property an alias refers to. The names cannot include spaces. New applications should use ThermalDesktop.ThermoPropAliasManager instead.

- **update**  
Updates all entity values based on symbol expressions.

## The Magic of Implicit Casting

In Section 2.2, we created a conductor with the following code:

```c#
var c = td.CreateConductor(n1, n2);
```

where n1 and n2 were existing Node objects. CreateConductor has several overloads. The one we used is:

```c#
Conductor CreateConductor(Connection from, Connection to)
```

We took advantage of the fact that OpenTD will implicitly cast a *DbObject* (like a Node) to a new Connection. Explicitly, the C\# compiler constructed Connections from our Nodes like this:

```c#
var c = td.CreateConductor(new Connection(n1, 1), new Connection(n2, 1));
```

OpenTD uses implicit casting in many places. For example, to cast StandardDataSubtypes to DataSubtypes. (See Section 7.1.5.) Some languages do not support .NET implicit casting. If you’re using one of those languages to interface with OpenTD, you can always explicitly cast to the required type. (See Sections 12 and 13.)

## A Note on OpenTD Versioning

OpenTD 2023 R2 is included with TD as the OpenTDv232.dll, OpenTDv232.CoSolver.dll, and OpenTDv232.Results.dll assemblies installed in the Global Assembly Cache (GAC). All OpenTD 2023 R2 types are contained within the “OpenTDv232” namespace. Any changes we make to this interface will be additive. That is, we will not remove classes or methods. Therefore, you can write software referencing OpenTD 2023 R2 knowing that it will not be broken by updates or new releases of TD.

Each subsequent release of OpenTD will be contained in its own family of dll’s (OpenTDv64.dll, OpenTDv64.Results.dll, etc.) and use its own namespace. When we develop each subsequent release, we will start with a complete copy of the previous release, then make changes only as required. Most commands should remain unchanged from release to release, and you should be able to take advantage of new features in new versions of OpenTD with a minimum of changes to your old programs.