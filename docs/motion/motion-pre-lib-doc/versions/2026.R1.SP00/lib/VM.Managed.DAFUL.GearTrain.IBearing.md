# Interface IBearing
<a id="VM_Managed_DAFUL_GearTrain_IBearing"></a>

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

### <a id="VM_Managed_DAFUL_GearTrain_IBearing_BearingBodies"></a> BearingBodies

Gets or sets the bearing bodies.

```csharp
GeometryBase[] BearingBodies { get; set; }
```

#### Property Value

 [GeometryBase](VM.Managed.DAFUL.GearTrain.CAD.GeometryBase.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_IBearing_PICandidates"></a> PICandidates

Gets the array of performance index candidate.

```csharp
PerformanceIndexInformation[] PICandidates { get; }
```

#### Property Value

 [PerformanceIndexInformation](VM.Managed.DAFUL.GearTrain.PerformanceIndexInformation.md)\[\]

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_IBearing_FillBearingData_VM_Managed_Document_System_String_System_String_System_String_System_String___"></a> FillBearingData\(Document, string, string, string, string\[\]\)

Fill bearing data

```csharp
bool FillBearingData(Document doc, string InnerColor, string OuterColor, string strPropertyFilePath, string[] InputArray)
```

#### Parameters

`doc` Document

The document

`InnerColor` string

The inner color

`OuterColor` string

The outer color

`strPropertyFilePath` string

The property file path

`InputArray` string\[\]

The input array

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_IBearing_RemoveBuilder_VM_Managed_CAD_Builder_"></a> RemoveBuilder\(Builder\)

Removes the builder.

```csharp
void RemoveBuilder(Builder bui)
```

#### Parameters

`bui` Builder

The bui.

