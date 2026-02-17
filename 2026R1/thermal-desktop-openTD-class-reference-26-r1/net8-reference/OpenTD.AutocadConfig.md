# <a id="OpenTD_AutocadConfig"></a> Class AutocadConfig

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Controls how AutoCAD will be launched.

```csharp
public class AutocadConfig
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AutocadConfig](OpenTD.AutocadConfig.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_AutocadConfig__ctor"></a> AutocadConfig\(\)

```csharp
public AutocadConfig()
```

### <a id="OpenTD_AutocadConfig__ctor_OpenTD_TdConnectConfig_"></a> AutocadConfig\(TdConnectConfig\)

```csharp
public AutocadConfig(TdConnectConfig config)
```

#### Parameters

`config` [TdConnectConfig](OpenTD.TdConnectConfig.md)

## Properties

### <a id="OpenTD_AutocadConfig_AdditionalCommandline"></a> AdditionalCommandline

A string containing commandline switches to be addded to the acad.exe command.

```csharp
public string AdditionalCommandline { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_AutocadConfig_DwgPathname"></a> DwgPathname

Path to a dwg file to attempt to open when AutoCAD launches.

```csharp
public RootedPathname DwgPathname { get; set; }
```

#### Property Value

 [RootedPathname](OpenTD.Utility.RootedPathname.md)

### <a id="OpenTD_AutocadConfig_ExePathForStart"></a> ExePathForStart

Path to acad.exe. Leave blank to use the default.

```csharp
public string ExePathForStart { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_AutocadConfig_ShowSplashScreen"></a> ShowSplashScreen

Controls whether the AutoCAD splash screen will be displayed during startup.

```csharp
public bool ShowSplashScreen { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_AutocadConfig_StartDirectory"></a> StartDirectory

Path to the initial working directory.

```csharp
public string StartDirectory { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_AutocadConfig_Visible"></a> Visible

Controls whether the AutoCAD window will be visible.

```csharp
public bool Visible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

