# Class AddEntityBase

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public class AddEntityBase : IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AddEntityBase](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md)

#### Derived

[AddBearingToRBEInMeshBase](VM.Managed.DAFUL.Builder.GearTrain.AddBearingToRBEInMeshBase.md), 
[AddDesignerToShaftBase](VM.Managed.DAFUL.Builder.GearTrain.AddDesignerToShaftBase.md), 
[AddGearEntityBase](VM.Managed.DAFUL.Builder.GearTrain.AddGearEntityBase.md), 
[AddSlidingBearingToRBEInMeshBase](VM.Managed.DAFUL.Builder.GearTrain.AddSlidingBearingToRBEInMeshBase.md)

#### Implements

IBuilder

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### AddEntityBase\(\)

```csharp
public AddEntityBase()
```

## Fields

### m\_bSuccess

```csharp
protected bool m_bSuccess
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### AllowCheckError

```csharp
public static bool AllowCheckError { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BuildObject

```csharp
public ObjectBase BuildObject { get; }
```

#### Property Value

 ObjectBase

### InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### Parameters

```csharp
public PickedResult[] Parameters { get; set; }
```

#### Property Value

 PickedResult\[\]

## Methods

### AddNewReference\(ObjectBase\)

```csharp
protected void AddNewReference(ObjectBase objectBase)
```

#### Parameters

`objectBase` ObjectBase

### Build\(Document\)

```csharp
public virtual void Build(Document docToAdd)
```

#### Parameters

`docToAdd` Document

### CheckMissShaft\(string, double, double, double, string, string, ref double, ref ReferencePointType\)

```csharp
protected bool CheckMissShaft(string strRP, double dOffset, double dDepth, double shaftLength, string strError, string strCaption, ref double dTotalOffset, ref ReferencePointType typeRP)
```

#### Parameters

`strRP` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dOffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dDepth` [double](https://learn.microsoft.com/dotnet/api/system.double)

`shaftLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

`strError` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strCaption` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dTotalOffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

`typeRP` ReferencePointType

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CheckNodesetWithTreatRBE\(HiddenDocument, string\)

```csharp
protected bool CheckNodesetWithTreatRBE(HiddenDocument hiddenDoc, string strRBE)
```

#### Parameters

`hiddenDoc` HiddenDocument

`strRBE` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CheckOverlap\(List<double\[\]\>, double, double, string, string\)

```csharp
protected bool CheckOverlap(List<double[]> lstOverlap, double dTotalOffset, double dDepth, string strError, string strCaption)
```

#### Parameters

`lstOverlap` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

`dTotalOffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dDepth` [double](https://learn.microsoft.com/dotnet/api/system.double)

`strError` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strCaption` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CheckSection\(HiddenShaftSetDocument, string\)

```csharp
protected bool CheckSection(HiddenShaftSetDocument hiddenDoc, string strCaption)
```

#### Parameters

`hiddenDoc` HiddenShaftSetDocument

`strCaption` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetGearInfo\(GearTrainDocument, ref GearGeometryInfo, ref IGearSet, ref WebPropertyValue\)

```csharp
protected void GetGearInfo(GearTrainDocument docGT, ref GearGeometryInfo ggInfo, ref IGearSet gearSet, ref WebPropertyValue webValue)
```

#### Parameters

`docGT` GearTrainDocument

`ggInfo` GearGeometryInfo

`gearSet` IGearSet

`webValue` WebPropertyValue

### GetRollingBearingInfo\(GearTrainDocument, ref RacewayGeometryInfo, ref Bearing\)

```csharp
protected void GetRollingBearingInfo(GearTrainDocument docGT, ref RacewayGeometryInfo geom_info, ref Bearing bearing)
```

#### Parameters

`docGT` GearTrainDocument

`geom_info` RacewayGeometryInfo

`bearing` Bearing

### GetSlidingBearingInfo\(GearTrainDocument, ref SBGeometryInfo, ref SlidingBearing, ref enSBContactType\)

```csharp
protected void GetSlidingBearingInfo(GearTrainDocument docGT, ref SBGeometryInfo geom_info, ref SlidingBearing bearing, ref enSBContactType enCType)
```

#### Parameters

`docGT` GearTrainDocument

`geom_info` SBGeometryInfo

`bearing` SlidingBearing

`enCType` enSBContactType

### MatchGear\(IGearSet, List<IGearBuilder\>\)

```csharp
protected void MatchGear(IGearSet gearSet, List<IGearBuilder> lstRes)
```

#### Parameters

`gearSet` IGearSet

`lstRes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<IGearBuilder\>

### SetClearance\(ClearanceInfo\)

```csharp
protected void SetClearance(ClearanceInfo cInfo)
```

#### Parameters

`cInfo` ClearanceInfo

### SetColor\(BuilderColor, BuilderColorGeom, AddedWebBuilder\)

```csharp
protected void SetColor(BuilderColor color, BuilderColorGeom gearsetBuilder, AddedWebBuilder webBuilder)
```

#### Parameters

`color` BuilderColor

`gearsetBuilder` BuilderColorGeom

`webBuilder` AddedWebBuilder

### Success\(\)

```csharp
public bool Success()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Validate\(IList<string\>\)

```csharp
public virtual bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


