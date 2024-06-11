# Interface IBearing

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The gearset interface

```csharp
public interface IBearing
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### BearingBodies

Gets or sets the bearing bodies.

```csharp
GeometryBase[] BearingBodies { get; set; }
```

#### Property Value

 [GeometryBase](VM.Managed.DAFUL.GearTrain.CAD.GeometryBase.md)\[\]

### PICandidates

Gets the array of performance index candidate.

```csharp
PerformanceIndexInformation[] PICandidates { get; }
```

#### Property Value

 [PerformanceIndexInformation](VM.Managed.DAFUL.GearTrain.PerformanceIndexInformation.md)\[\]

## Methods

### FillBearingData\(Document, string, string, string, string\[\]\)

Fill bearing data

```csharp
bool FillBearingData(Document doc, string InnerColor, string OuterColor, string strPropertyFilePath, string[] InputArray)
```

#### Parameters

`doc` Document

The document

`InnerColor` [string](https://learn.microsoft.com/dotnet/api/system.string)

The inner color

`OuterColor` [string](https://learn.microsoft.com/dotnet/api/system.string)

The outer color

`strPropertyFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The property file path

`InputArray` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The input array

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveBuilder\(Builder\)

Removes the builder.

```csharp
void RemoveBuilder(Builder bui)
```

#### Parameters

`bui` Builder

The bui.


