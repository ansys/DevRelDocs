#  Interface IGearSet

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

### <a id="VM_Managed_DAFUL_GearTrain_IGearSet_AddToShaft"></a> AddToShaft

Gets the flag whether this instance add to shaft or not.

```csharp
bool AddToShaft { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_IGearSet_GearBodies"></a> GearBodies

Gets or sets the gear bodies.

```csharp
Body[] GearBodies { get; set; }
```

#### Property Value

 Body\[\]

### <a id="VM_Managed_DAFUL_GearTrain_IGearSet_GearBodiesExceptWeb"></a> GearBodiesExceptWeb

Gets the gear bodies except web.

```csharp
Body[] GearBodiesExceptWeb { get; }
```

#### Property Value

 Body\[\]

### <a id="VM_Managed_DAFUL_GearTrain_IGearSet_PICandidates"></a> PICandidates

Gets the array of performance index candidate.

```csharp
PerformanceIndexInformation[] PICandidates { get; }
```

#### Property Value

 [PerformanceIndexInformation](VM.Managed.DAFUL.GearTrain.PerformanceIndexInformation.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_IGearSet_PairInfos"></a> PairInfos

Gets the gear pair information.

```csharp
GearPairInfoForSubsystem[] PairInfos { get; }
```

#### Property Value

 [GearPairInfoForSubsystem](VM.Managed.DAFUL.GearTrain.GearPairInfoForSubsystem.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_IGearSet_PropertyOfGearSet"></a> PropertyOfGearSet

Gets the property of gear set.

```csharp
PropertyGearSetBase PropertyOfGearSet { get; }
```

#### Property Value

 [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md)

### <a id="VM_Managed_DAFUL_GearTrain_IGearSet_UseMeshing"></a> UseMeshing

Gets the flag whether this instance is meshing or not.

```csharp
bool UseMeshing { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_IGearSet_AddBuilder_VM_Managed_CAD_Builder_"></a> AddBuilder\(Builder\)

Adds the builder.

```csharp
Body AddBuilder(Builder bui)
```

#### Parameters

`bui` Builder

The bui.

#### Returns

 Body

### <a id="VM_Managed_DAFUL_GearTrain_IGearSet_AddPairInfo_VM_Managed_CAD_Body_VM_Managed_CAD_Body_"></a> AddPairInfo\(Body, Body\)

Adds the pair information.

```csharp
void AddPairInfo(Body target, Body tool)
```

#### Parameters

`target` Body

The target.

`tool` Body

The tool.

### <a id="VM_Managed_DAFUL_GearTrain_IGearSet_FillGearData_VM_Managed_Document_System_Int32_System_String_System_String___System_String___System_String___System_String___System_Boolean_System_Boolean_System_String_System_String___"></a> FillGearData\(Document, int, string, string\[\], string\[\], string\[\], string\[\], bool, bool, string, string\[\]\)

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

### <a id="VM_Managed_DAFUL_GearTrain_IGearSet_GetBodyFromGeometryInfo_VM_Managed_DAFUL_GearTrain_GeometryInfoBase_"></a> GetBodyFromGeometryInfo\(GeometryInfoBase\)

Get body from geometry information.

```csharp
Body GetBodyFromGeometryInfo(GeometryInfoBase gInfo)
```

#### Parameters

`gInfo` [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

The geometry information.

#### Returns

 Body

### <a id="VM_Managed_DAFUL_GearTrain_IGearSet_Meshing_System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder__"></a> Meshing\(List<IGearBuilder\>\)

Meshing the gears.

```csharp
bool Meshing(List<IGearBuilder> lstGB)
```

#### Parameters

`lstGB` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md)\>

The gear builder list.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_IGearSet_RemoveBuilder_VM_Managed_CAD_Builder_"></a> RemoveBuilder\(Builder\)

Removes the builder.

```csharp
void RemoveBuilder(Builder bui)
```

#### Parameters

`bui` Builder

The bui.

