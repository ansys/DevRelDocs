# Interface IGearSet

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The gearset interface

```csharp
public interface IGearSet
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### AddToShaft

Gets the flag whether this instance add to shaft or not.

```csharp
bool AddToShaft { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GearBodies

Gets or sets the gear bodies.

```csharp
Body[] GearBodies { get; set; }
```

#### Property Value

 Body\[\]

### GearBodiesExceptWeb

Gets the gear bodies except web.

```csharp
Body[] GearBodiesExceptWeb { get; }
```

#### Property Value

 Body\[\]

### PICandidates

Gets the array of performance index candidate.

```csharp
PerformanceIndexInformation[] PICandidates { get; }
```

#### Property Value

 [PerformanceIndexInformation](VM.Managed.DAFUL.GearTrain.PerformanceIndexInformation.md)\[\]

### PairInfos

Gets the gear pair information.

```csharp
GearPairInfoForSubsystem[] PairInfos { get; }
```

#### Property Value

 [GearPairInfoForSubsystem](VM.Managed.DAFUL.GearTrain.GearPairInfoForSubsystem.md)\[\]

### PropertyOfGearSet

Gets the property of gear set.

```csharp
PropertyGearSetBase PropertyOfGearSet { get; }
```

#### Property Value

 [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md)

### UseMeshing

Gets the flag whether this instance is meshing or not.

```csharp
bool UseMeshing { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### AddBuilder\(Builder\)

Adds the builder.

```csharp
Body AddBuilder(Builder bui)
```

#### Parameters

`bui` Builder

The bui.

#### Returns

 Body

### AddPairInfo\(Body, Body\)

Adds the pair information.

```csharp
void AddPairInfo(Body target, Body tool)
```

#### Parameters

`target` Body

The target.

`tool` Body

The tool.

### FillGearData\(Document, int, string, string\[\], string\[\], string\[\], string\[\], bool, bool, string, string\[\]\)

Fill gear data

```csharp
bool FillGearData(Document doc, int nNGear, string strName, string[] CenterDistance, string[] NumberOfTeeth, string[] ProfileShift, string[] FaceWidth, bool bUseKissSoftInterface, bool bUseAdvanced, string Color, string[] InputArray)
```

#### Parameters

`doc` Document

The document

`nNGear` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The No. of gear

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The gear name

`CenterDistance` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The gear center distance

`NumberOfTeeth` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The No. of teeth

`ProfileShift` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The profile shift

`FaceWidth` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The face width

`bUseKissSoftInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The kiss soft interface flag

`bUseAdvanced` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The advanced flag

`Color` [string](https://learn.microsoft.com/dotnet/api/system.string)

The color

`InputArray` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The input array for create

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetBodyFromGeometryInfo\(GeometryInfoBase\)

Get body from geometry information.

```csharp
Body GetBodyFromGeometryInfo(GeometryInfoBase gInfo)
```

#### Parameters

`gInfo` [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

The geometry information.

#### Returns

 Body

### Meshing\(List<IGearBuilder\>\)

Meshing the gears.

```csharp
bool Meshing(List<IGearBuilder> lstGB)
```

#### Parameters

`lstGB` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md)\>

The gear builder list.

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


