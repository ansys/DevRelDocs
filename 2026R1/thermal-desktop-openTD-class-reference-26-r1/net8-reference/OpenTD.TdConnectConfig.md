# <a id="OpenTD_TdConnectConfig"></a> Class TdConnectConfig

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Controls how ThermalDesktop object connects to its actual TD instance
when ThermalDesktop.Connect() is called.

```csharp
public class TdConnectConfig
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TdConnectConfig](OpenTD.TdConnectConfig.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_TdConnectConfig__ctor"></a> TdConnectConfig\(\)

```csharp
public TdConnectConfig()
```

## Properties

### <a id="OpenTD_TdConnectConfig_AcadExePathname"></a> AcadExePathname

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

### <a id="OpenTD_TdConnectConfig_AcadVisible"></a> AcadVisible

Controls whether a newly-started instance of TD will be visible.

```csharp
public bool AcadVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[Connect](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_Connect)\(\)

### <a id="OpenTD_TdConnectConfig_AdditionalAcadCommandline"></a> AdditionalAcadCommandline

Additional arguments to use when starting acad.exe.

```csharp
public string AdditionalAcadCommandline { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[Connect](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_Connect)\(\)

### <a id="OpenTD_TdConnectConfig_Address"></a> Address

```csharp
public string Address { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_TdConnectConfig_AddressUsed"></a> AddressUsed

```csharp
public string AddressUsed { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_TdConnectConfig_DefaultAddress"></a> DefaultAddress

```csharp
public static string DefaultAddress { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_TdConnectConfig_DwgPathname"></a> DwgPathname

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

### <a id="OpenTD_TdConnectConfig_PortUsed"></a> PortUsed

```csharp
public int PortUsed { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_TdConnectConfig_ShowAcadSplashScreen"></a> ShowAcadSplashScreen

Controls whether the AutoCAD splash screen is displayed during startup.

```csharp
public bool ShowAcadSplashScreen { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[Connect](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_Connect)\(\)

### <a id="OpenTD_TdConnectConfig_StartDirectory"></a> StartDirectory

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

### <a id="OpenTD_TdConnectConfig_StartTimeout"></a> StartTimeout

Controls how long OpenTD will try to connect to TD before timing out.

```csharp
public TimeoutProperties StartTimeout { get; set; }
```

#### Property Value

 [TimeoutProperties](OpenTD.TimeoutProperties.md)

#### See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[Connect](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_Connect)\(\)

### <a id="OpenTD_TdConnectConfig_Type"></a> Type

```csharp
public TdConnectConfig.Types Type { get; set; }
```

#### Property Value

 [TdConnectConfig](OpenTD.TdConnectConfig.md).[Types](OpenTD.TdConnectConfig.Types.md)

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md), 
[ThermalDesktop](OpenTD.ThermalDesktop.md).[Connect](OpenTD.ThermalDesktop.md\#OpenTD\_ThermalDesktop\_Connect)\(\)

