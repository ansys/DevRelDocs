# Interacting with end users

## Control the view

There are several techniques you can use to control how the model is displayed in the main Thermal Desktop window:

- Use the ThermalDesktop.VisibilityManager to get and set item and item label visibility.

- Use an object’s *Layer* member to change what layer it is on, perhaps moving it to or from a frozen layer.

- Use ThermalDesktop.*GetLayers* or .*GetLayer* to get an existing layer, then change its color, frozen status, and so on.

- Use an object’s *ColorIndex* member to directly change its color.

- Use ThermalDesktop.*RestoreIsoView* to set the view to one of the standard isometric views.

- Use ThermalDesktop.*RestoreOrthoView* to set the view to one of the standard orthographic views.

- Use ThermalDesktop.*RestoreView* to set the view to a pre-defined, custom named view. These can also contain layer settings. Create named views in the GUI using the AutoCAD “view” command.

- Use ThermalDesktop.*SetView* and either an *IsoViews* enum, an *OrthoViews* enum, or a string representing a named view to set the view.

- Use ThermalDesktop.*SetVisualStyle* to select wireframe, hidden, shaded, and more.

- Use ThermalDesktop.*ResetGraphics* to redraw everything in the main window.

- Display contour plots using the ThermalDesktop.*DatasetManager*. See the [Reading result](reading-results.md#create-contour-plots) section.

## Capture graphics area

Once you have set up the main TD view using the techniques discussed above, you may wish to capture the graphics area as a bitmap for use elsewhere. To do this, use the ThermalDesktop.*CaptureGraphicsArea* method, with the following signature:

System.Drawing.Bitmap ThermalDesktop.CaptureGraphicsArea()

The Bitmap object it returns can be saved to a file, or further processed within your program.

Known issue: if AutoCAD is in fast-shaded mode then this command will return an all-black image if the visual style is set to SHADED, SHADED_W_EDGES, or WIRE.

## Working with the selection set

OpenTD allows you to ask the end user to select entities on screen, just like a TD command. It also allows you to do the opposite: set the selection set programmatically. These two operations are performed with the ThermalDesktop.*GetSelection* and *SetSelection* methods, respectively. There is also a *ClearSelection* method.

GetSelection returns a list of *EntityDescriptors*, each containing a Connection for a selected entity and a string called *RawType* from AutoCAD describing what it is. For example, if the user selected a node, the RawType would be “RcNode”.

EntityDescriptors are also returned by the ThermalDesktop.*GetEntityType* and *GetEntityTypes* methods, which can be used to determine entity types from handles.

The following program demonstrates working with selection sets. It also uses the LINQ *query syntax* (for example: ‘from node in td.GetNodes() where node.Submodel == “MAIN”…’), which is a declarative syntax that can be easier to read than the *method syntax* we have used previously.

```c#
using System;
using System.Linq;
using OpenTD;

namespace OpenTDGettingStarted
{
    class Selections
    {
        public static void Main(string[] args)
        {
            var td = new ThermalDesktop();
            td.Connect();

            // Create some randomly-placed nodes and lumps:
            var rand = new Random();
            const int numberOfItems = 200;
            for (int i = 0; i < numberOfItems / 2; ++i)
            {
                td.CreateNode(new Point3d(
                rand.NextDouble(), rand.NextDouble(), rand.NextDouble()));
                var lump = td.CreateLump();
                lump.Origin = new Point3d(
                rand.NextDouble(), rand.NextDouble(), rand.NextDouble());
                lump.Update();
            }
            td.SetView(IsoViews.SE);

            Console.WriteLine("Using SetSelection to select entities for which" +
            " X < 0.5, Y < 0.5, and Z > 0.5");
            var NodeHandles = from node in td.GetNodes()
                              where node.Origin.X < 0.5
                              && node.Origin.Y < 0.5
                              && node.Origin.Z > 0.5
                              select node.Handle;
            var LumpHandles = from lump in td.GetLumps()
                              where lump.Origin.X < 0.5
                              && lump.Origin.Y < 0.5
                              && lump.Origin.Z > 0.5
                              select lump.Handle;
            var Region1Handles = NodeHandles.Concat(LumpHandles);
            td.SetSelection(Region1Handles);
            Console.WriteLine($"Selected {NodeHandles.Count()} nodes" +
            $" and {LumpHandles.Count()} lumps. You may" +
            $" have to move your mouse into the AutoCAD window" +
            $" to see the selection.");
            Console.WriteLine("Press [ENTER] to continue...");
            Console.ReadLine();

            Console.WriteLine("Now asking user to select entites.");
            td.ClearSelection();
            var selectedEntities = td.GetSelection();
            var selectedNodeHandles = from entity in selectedEntities
                                      where entity.RawType == "RcNode"
                                      select entity.Connection.Handle;
            var selectedLumpHandles = from entity in selectedEntities
                                      where entity.RawType == "RcLump"
                                      select entity.Connection.Handle;
            Console.WriteLine($"User selected {selectedNodeHandles.Count()}" +
            $" nodes and {selectedLumpHandles.Count()} lumps.");
        }
    }
}
```

## Using loggers

Using log files to record program operations and errors can be a helpful technique, especially when debugging problems. OpenTD offers access to a powerful logging framework, the same one used by us within TD.

To use the logging framework, you will create an OpenTD.*Logging.Logger* object, then call various methods on it to send messages to log files. The messages have one of the following levels assigned to them, from most to least important: Error, Warning, Information, and Verbose.

Loggers are created using the *LoggerFactory* class, usually as a static member of a class. For example, here is the one we use internally for the ThermalDesktop class:

```c#
private static readonly Logger log =
    LoggerFactory.GetLogger(typeof(ThermalDesktop).ToString());
```

The LoggerFactory.*GetLogger* method accepts a string representing the name of the logger. This name will be used to route messages from the logger to files. Conventionally, this is the full name of the class that it is defined in, to make it obvious where messages originated. In the above line, we used “typeof(ThermalDesktop).ToString()” instead of the literal string “OpenTD.ThermalDesktop” to ensure that the name is correct with no typos. Did you notice the typo in that literal string?

After calling GetLogger, your log is ready to use. Interestingly, you don’t define a log file location within your program. Instead, this is controlled at runtime using the configuration file located at %localappdata%\\ThermalDesktop\\OpenTDLogConfig.xml. This makes logging more flexible. During debugging on an end-user’s computer, you can adjust this configuration file to concentrate on the problem areas in your program.

This is a recent configuration file installed with TD:

```lua
<?xml version="1.0" encoding="utf-8"?>
<CRLogging>
    <!-- Use this file to configure where OpenTD will send logging messages.
        To make OpenTD use it, copy it to %localappdata%\\ThermalDesktop
        and restart OpenTD. -->
    <Loggers>
        <!-- Loggers dispatch messages to their listeners. Logger names correspond to names used
            within OpenTD to categorize messages. Use the RootLogger (below) to configure all loggers
            not listed in this Logger section. Loggers only dispatch messages at and above a
            specified level. -->
        <!-- Levels: Error, Warning, Information, Verbose -->
        <Logger name="OpenTDv61" level="Information" listeners="Log, ErrorLog"/>
        <Logger name="OpenTDv62" level="Information" listeners="Log, ErrorLog"/>
        <Logger name="OpenTDv232" level="Information" listeners="Log, ErrorLog"/>
        <Logger name="OpenTDv232Demos" level="Verbose" listeners="OpenTDv232Demos"/>
        <Logger name="OpenTDMixedInterface" level="Information" listeners="Log, ErrorLog"/>
    </Loggers>
    <!-- The root logger configures all loggers not listed by name in the Loggers section. -->
    <!-- Levels: Error, Warning, Information, Verbose -->
    <RootLogger name="Root" level="Information" listeners="Log, ErrorLog"/>
    <Listeners>
        <!-- Listeners listen for messages from loggers and direct them to a destination,
            typically a file. They only listen for messages at and above a specified level. -->
        <!-- Levels: Error, Warning, Information, Verbose -->
        <!-- Note regarding filenames: the directories above the filename must already exist when
            OpenTD starts, otherwise, the listener will not be used. -->
        <Listener name="Log" type="File" level="Verbose"
            filename="%localappdata%\\ThermalDesktop\\log\\OpenTD.Client.log"/>
        <Listener name="ErrorLog" type="File" level="Error"
            filename="%localappdata%\\ThermalDesktop\\log\\OpenTD.Client.Error.log"/>
        <Listener name="OpenTDv232Demos" type="File" level="Verbose"
            filename="%localappdata%\\ThermalDesktop\\log\\OpenTDv232Demos.log"/>
    </Listeners>
</CRLogging>
```
**Note**: Subject to change. You may find this file in the TD installation directory. If you’d like to use it, copy it to the `%localappdata%\ThermalDesktop` directory.

Two types of objects are defined in the configuration file: loggers and listeners. Loggers emit messages, while listeners route them to destinations. In each case, they only act on messages that are at or above the level they are defined at.

You’ll note that in the default configuration file, we have defined several loggers for various versions of OpenTD. For example:

```lua
<Logger name="OpenTD" level="Information" listeners="Log, ErrorLog"/>
```

This means that any logger in an OpenTD client program whose name starts with OpenTD will activate this logger, as long as it is sending a message at the Information level or above. It will send its messages to the listeners called *Log* and *ErrorLog*.

There is also a *RootLogger* defined. This is activated by any loggers whose names do not match the named loggers defined in the <Loggers> block.

There are three listeners defined, corresponding to three output files. Listener Log will write any-level messages to `%localappdata%\ThermalDesktop\log\OpenTD.Client.log`, while listener ErrorLog will only write Error-level messages to `OpenTD.Client.Error.log`. And the OpenTDDemos listener will write any-level messages to `OpenTDDemos.log`.

Using the default configuration file, let’s look at some examples of how messages are routed to files.

### Example 1

The Logger called “OpenTD.ThermalDesktop” sends an Error-level message:

```
log.LogError(“Component A is not working”);
```

Logger “OpenTD” defined in the configuration file recognizes this logger because its name starts with “OpenTD”, and it routes messages at Information-level and above, so it routes this message to listeners Log and ErrorLog.

Listener Log writes messages at any level, so it writes this message to file OpenTD.Client.log.

Listener ErrorLog writes messages at Error-level, so it writes this message to OpenTD.Client.Error.log.

### Example 2

The Logger called “OpenTD.ThermalDesktop” sends a Verbose-level message:

```
log.LogVerbose(“Component A is starting”);
```

Logger “OpenTD” defined in the configuration file recognizes this logger because its name starts with “OpenTD”, but it only routes messages at Information-level and above, so it does not route this message.

### Example 3

A logger in a client program is defined with the name “SatelliteBuilder.BusBuilder”:

```c#
private static readonly Logger log3 =
    LoggerFactory.GetLogger(“SatelliteBuilder.BusBuilder”);
```

It sends an Information-level message:

```
log3.LogInfo(“Applied all optical properties to bus”);
```

No named loggers in the configuration file recognize this logger name, so the RootLogger takes it. Since the RootLogger routes Information-level messages and above, it routes this message to listeners Log and ErrorLog.

Listener Log writes messages at any level, so it writes this message to file OpenTD.Client.log.

Listener ErrorLog writes messages at Error-level only, so it does not write this message.

## Miscellaneous end-user interaction techniques

- ThermalDesktop.*ProgressBar* can be used to show a progress bar and message in the TD window during long calculations.
- ThermalDesktop.*Print* prints a message to the AutoCAD console.
- The User Coordinate System (UCS) can be queried or set using the ThermalDesktop.*UCS* property.
- Model Browser visibility can be controlled using the ThermalDesktop.*ShowModelBrowser* and *HideModelBrowser* methods.
- Get a System.Windows.Forms.NativeWindow representing the main AutoCAD window using the ThermalDesktop.*GetMainWindow()* method. NativeWindow implements the IWin32Window interface, so this object can be used anywhere your application requires an IWin32Window that represents the main AutoCAD window.

