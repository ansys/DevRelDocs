# Class AutocadConfig

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Controls how AutoCAD will be launched.

```csharp
public class AutocadConfig
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AutocadConfig](OpenTD.AutocadConfig.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### AutocadConfig\(\)

```csharp
public AutocadConfig()
```

### AutocadConfig\(TdConnectConfig\)

```csharp
public AutocadConfig(TdConnectConfig config)
```

#### Parameters

`config` [TdConnectConfig](OpenTD.TdConnectConfig.md)

## Properties

### AdditionalCommandline

A string containing commandline switches to be addded to the acad.exe command.

```csharp
public string AdditionalCommandline { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### DwgPathname

Path to a dwg file to attempt to open when AutoCAD launches.

```csharp
public RootedPathname DwgPathname { get; set; }
```

#### Property Value

 [RootedPathname](OpenTD.Utility.RootedPathname.md)

### ExePathForStart

Path to acad.exe. Leave blank to use the default.

```csharp
public string ExePathForStart { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ShowSplashScreen

Controls whether the AutoCAD splash screen will be displayed during startup.

```csharp
public bool ShowSplashScreen { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartDirectory

Path to the initial working directory.

```csharp
public string StartDirectory { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Visible

Controls whether the AutoCAD window will be visible.

```csharp
public bool Visible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


