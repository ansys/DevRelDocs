# Class AutocadLauncher

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Use to launch an instance of AutoCAD and run a series of commands.
Defaults to the latest version of AutoCAD installed, but this can be
controlled via the LaunchConfig property.

```csharp
public class AutocadLauncher
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AutocadLauncher](OpenTD.AutocadLauncher.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### AutocadLauncher\(AutocadConfig\)

```csharp
public AutocadLauncher(AutocadConfig config)
```

#### Parameters

`config` [AutocadConfig](OpenTD.AutocadConfig.md)

## Properties

### Command

A command string to execute once AutoCAD launches.

```csharp
public string Command { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### LaunchConfig

Controls how AutoCAD will be launched.

```csharp
public AutocadConfig LaunchConfig { get; set; }
```

#### Property Value

 [AutocadConfig](OpenTD.AutocadConfig.md)

## Methods

### Launch\(\)

Tries to start an instance of AutoCAD, based on the settings within LaunchConfig,
and run the command string within Command.

```csharp
public Process Launch()
```

#### Returns

 [Process](https://learn.microsoft.com/dotnet/api/system.diagnostics.process)

### acadLocation\(\)

```csharp
protected string acadLocation()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)


