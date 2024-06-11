# Class PropertyMotorEMForce.UNVFile

Namespace: [VM.Managed.DAFUL.GearTrain.Force](VM.Managed.DAFUL.GearTrain.Force.md)  
Assembly: VMDGearTrain.dll  

This class is to represent the unv file.

```csharp
public class PropertyMotorEMForce.UNVFile
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PropertyMotorEMForce.UNVFile](VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.UNVFile.md)

#### Derived

[PropertyMotorEMForce.UNVFileWithRPM](VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.UNVFileWithRPM.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### UNVFile\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.UNVFile" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UNVFile()
```

### UNVFile\(string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.UNVFile" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UNVFile(string strStatorPath, string strRotorPath)
```

#### Parameters

`strStatorPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stator path.

`strRotorPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rotor path.

## Properties

### RotorPath

Gets or sets the rotor path.

```csharp
public string RotorPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### StatorPath

Gets or sets the stator path.

```csharp
public string StatorPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)


