# Class TdConnectConfig

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Controls how ThermalDesktop object connects to its actual TD instance
when ThermalDesktop.Connect() is called.

```csharp
public class TdConnectConfig
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TdConnectConfig](OpenTD.TdConnectConfig.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### TdConnectConfig\(\)

```csharp
public TdConnectConfig()
```

## Properties

### AcadExePathname

Normally ThermalDesktop.Connect() uses the latest version of AutoCAD
it finds on your machine. Set AcadExePathname to the location of another
acad.exe to force it to use that version of AutoCAD. Caution: some older
versions of AutoCAD may not work with OpenTD.

```csharp
public RootedPathname AcadExePathname { get; set; }
```

#### Property Value

 [RootedPathname](OpenTD.Utility.RootedPathname.md)

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[Connect](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_Connect)\(\)

### AcadVisible

Controls whether a newly-started instance of TD will be visible.

```csharp
public bool AcadVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[Connect](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_Connect)\(\)

### AdditionalAcadCommandline

Additional arguments to use when starting acad.exe.

```csharp
public string AdditionalAcadCommandline { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[Connect](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_Connect)\(\)

### DwgPathname

Path to dwg file to open or attach to if already opened.
If left blank and TdConnectConfig.Type allows it,
ThermalDesktop.Connect() will start a new, blank drawing.
Do not use this member to find the current dwg name. Instead,
use ThermalDesktop.GetCurrentDwgPathname().

```csharp
public RootedPathname DwgPathname { get; set; }
```

#### Property Value

 [RootedPathname](OpenTD.Utility.RootedPathname.md)

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[Connect](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_Connect)\(\), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[GetCurrentDwgPathname](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_GetCurrentDwgPathname)\(\)

### PipeBaseAddress

```csharp
public static string PipeBaseAddress { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### PipeEndpointName

Advanced. If not blank, specifies the name of the communications
channel used by OpenTD to communicate with this instance of TD.
If starting a new TD instance, OpenTD will attempt to create a channel with
this name. If attaching, OpenTD will attempt to connect to a channel
with this name. Leave blank for automatic channel-naming.
To open a named channel in TD, use the 'RcOpenTD' AutoCAD command.

```csharp
public string PipeEndpointName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[Connect](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_Connect)\(\)

### PipeEndpointNameUsed

Gets the communication channel name actually used. Set when
ThermalDesktop.Connect() is called successfully.

```csharp
public string PipeEndpointNameUsed { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[Connect](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_Connect)\(\)

### ShowAcadSplashScreen

Controls whether the AutoCAD splash screen is displayed during startup.

```csharp
public bool ShowAcadSplashScreen { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[Connect](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_Connect)\(\)

### StartDirectory

The starting directory for the acad.exe process. For the current working
directory, see ThermalDesktop.GetCurrentWorkingDirectory().

```csharp
public string StartDirectory { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[Connect](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_Connect)\(\), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[GetCurrentWorkingDirectory](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_GetCurrentWorkingDirectory)\(\)

### StartTimeout

Controls how long OpenTD will try to connect to TD before timing out.

```csharp
public TdConnectConfig.TimeoutProperties StartTimeout { get; set; }
```

#### Property Value

 [TdConnectConfig](OpenTD.TdConnectConfig.md).[TimeoutProperties](OpenTD.TdConnectConfig.TimeoutProperties.md)

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[Connect](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_Connect)\(\)

### Type

```csharp
public TdConnectConfig.Types Type { get; set; }
```

#### Property Value

 [TdConnectConfig](OpenTD.TdConnectConfig.md).[Types](OpenTD.TdConnectConfig.Types.md)

## Methods

### GetRepeatableNameFromPath\(string, bool\)

```csharp
public static string GetRepeatableNameFromPath(string pathname, bool calledFromServer = false)
```

#### Parameters

`pathname` [string](https://learn.microsoft.com/dotnet/api/system.string)

`calledFromServer` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Validate\(\)

Validates this instance of TdConnectConfig. Is called automatically
by ThermalDesktop.Connect().

```csharp
public void Validate()
```

#### Exceptions

 [OpenTDException](OpenTD.OpenTDException.md)

Type ATTACH_TO_TD requires either a valid PipeEndpointName or DwgPathname.
or
Could not find DwgPathname: " + DwgPathname

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[Connect](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_Connect)\(\)

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[Connect](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_Connect)\(\)


