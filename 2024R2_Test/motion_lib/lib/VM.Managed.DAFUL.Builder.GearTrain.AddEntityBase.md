# <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase"></a> Class AddEntityBase

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

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase__ctor"></a> AddEntityBase\(\)

```csharp
public AddEntityBase()
```

## Fields

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_m_bSuccess"></a> m\_bSuccess

```csharp
protected bool m_bSuccess
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_AllowCheckError"></a> AllowCheckError

```csharp
public static bool AllowCheckError { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_BuildObject"></a> BuildObject

```csharp
public ObjectBase BuildObject { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_InputArray"></a> InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_Parameters"></a> Parameters

```csharp
public PickedResult[] Parameters { get; set; }
```

#### Property Value

 PickedResult\[\]

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_AddNewReference_VM_Managed_ObjectBase_"></a> AddNewReference\(ObjectBase\)

```csharp
protected void AddNewReference(ObjectBase objectBase)
```

#### Parameters

`objectBase` ObjectBase

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_Build_VM_Managed_Document_"></a> Build\(Document\)

```csharp
public virtual void Build(Document docToAdd)
```

#### Parameters

`docToAdd` Document

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_CheckMissShaft_System_String_System_Double_System_Double_System_String_System_String_System_Double__VM_Managed_DAFUL_GearTrain_CAD_ReferencePointType__"></a> CheckMissShaft\(string, double, double, string, string, ref double, ref ReferencePointType\)

```csharp
protected bool CheckMissShaft(string strRP, double dOffset, double dDepth, string strError, string strCaption, ref double dTotalOffset, ref ReferencePointType typeRP)
```

#### Parameters

`strRP` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dOffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dDepth` [double](https://learn.microsoft.com/dotnet/api/system.double)

`strError` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strCaption` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dTotalOffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

`typeRP` ReferencePointType

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_CheckNodesetWithTreatRBE_VM_Managed_DAFUL_HiddenDocument_System_String_"></a> CheckNodesetWithTreatRBE\(HiddenDocument, string\)

```csharp
protected bool CheckNodesetWithTreatRBE(HiddenDocument hiddenDoc, string strRBE)
```

#### Parameters

`hiddenDoc` HiddenDocument

`strRBE` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_CheckOverlap_System_Collections_Generic_List_System_Double____System_Double_System_Double_System_String_System_String_"></a> CheckOverlap\(List<double\[\]\>, double, double, string, string\)

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

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_CheckSection_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_String_"></a> CheckSection\(HiddenShaftSetDocument, string\)

```csharp
protected bool CheckSection(HiddenShaftSetDocument hiddenDoc, string strCaption)
```

#### Parameters

`hiddenDoc` HiddenShaftSetDocument

`strCaption` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_GetGearInfo_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_Managed_DAFUL_GearTrain_GearGeometryInfo__VM_Managed_DAFUL_GearTrain_IGearSet__VM_Managed_DAFUL_GearTrain_WebPropertyValue__"></a> GetGearInfo\(GearTrainDocument, ref GearGeometryInfo, ref IGearSet, ref WebPropertyValue\)

```csharp
protected void GetGearInfo(GearTrainDocument docGT, ref GearGeometryInfo ggInfo, ref IGearSet gearSet, ref WebPropertyValue webValue)
```

#### Parameters

`docGT` GearTrainDocument

`ggInfo` GearGeometryInfo

`gearSet` IGearSet

`webValue` WebPropertyValue

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_GetRollingBearingInfo_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo__VM_Managed_DAFUL_GearTrain_Bearing__"></a> GetRollingBearingInfo\(GearTrainDocument, ref RacewayGeometryInfo, ref Bearing\)

```csharp
protected void GetRollingBearingInfo(GearTrainDocument docGT, ref RacewayGeometryInfo geom_info, ref Bearing bearing)
```

#### Parameters

`docGT` GearTrainDocument

`geom_info` RacewayGeometryInfo

`bearing` Bearing

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_GetSlidingBearingInfo_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_Managed_DAFUL_GearTrain_SBGeometryInfo__VM_Managed_DAFUL_GearTrain_SlidingBearing__VM_Managed_DAFUL_GearTrain_enSBContactType__"></a> GetSlidingBearingInfo\(GearTrainDocument, ref SBGeometryInfo, ref SlidingBearing, ref enSBContactType\)

```csharp
protected void GetSlidingBearingInfo(GearTrainDocument docGT, ref SBGeometryInfo geom_info, ref SlidingBearing bearing, ref enSBContactType enCType)
```

#### Parameters

`docGT` GearTrainDocument

`geom_info` SBGeometryInfo

`bearing` SlidingBearing

`enCType` enSBContactType

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_MatchGear_VM_Managed_DAFUL_GearTrain_IGearSet_System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder__"></a> MatchGear\(IGearSet, List<IGearBuilder\>\)

```csharp
protected void MatchGear(IGearSet gearSet, List<IGearBuilder> lstRes)
```

#### Parameters

`gearSet` IGearSet

`lstRes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<IGearBuilder\>

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_SetClearance_VM_Managed_DAFUL_GearTrain_ClearanceInfo_"></a> SetClearance\(ClearanceInfo\)

```csharp
protected void SetClearance(ClearanceInfo cInfo)
```

#### Parameters

`cInfo` ClearanceInfo

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_SetColor_VM_Managed_CAD_BuilderColor_VM_Managed_CAD_BuilderColorGeom_VM_Managed_DAFUL_GearTrain_CAD_AddedWebBuilder_"></a> SetColor\(BuilderColor, BuilderColorGeom, AddedWebBuilder\)

```csharp
protected void SetColor(BuilderColor color, BuilderColorGeom gearsetBuilder, AddedWebBuilder webBuilder)
```

#### Parameters

`color` BuilderColor

`gearsetBuilder` BuilderColorGeom

`webBuilder` AddedWebBuilder

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_Success"></a> Success\(\)

```csharp
public bool Success()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddEntityBase_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public virtual bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

