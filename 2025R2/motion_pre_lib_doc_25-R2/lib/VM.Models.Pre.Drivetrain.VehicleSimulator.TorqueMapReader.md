# Class TorqueMapReader

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public static class TorqueMapReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TorqueMapReader](VM.Models.Pre.Drivetrain.VehicleSimulator.TorqueMapReader.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Fields

### ConfigExtension

```csharp
public const string ConfigExtension = ".config"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### MCMExtension

```csharp
public const string MCMExtension = ".mcm"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### PWRExtension

```csharp
public const string PWRExtension = ".pwr"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### Read\(string, bool\)

```csharp
public static TorqueMap Read(string path, bool isPowerSplitMap = false)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`isPowerSplitMap` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [TorqueMap](VM.Models.Pre.Drivetrain.VehicleSimulator.TorqueMap.md)


