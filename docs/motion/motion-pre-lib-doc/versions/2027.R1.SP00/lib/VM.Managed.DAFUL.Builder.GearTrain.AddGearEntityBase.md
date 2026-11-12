# Class AddGearEntityBase
<a id="VM_Managed_DAFUL_Builder_GearTrain_AddGearEntityBase"></a>

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public abstract class AddGearEntityBase : AddEntityBase, IBuilder
```

#### Inheritance

object ← 
[AddEntityBase](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md) ← 
[AddGearEntityBase](VM.Managed.DAFUL.Builder.GearTrain.AddGearEntityBase.md)

#### Derived

[AddGearToRBEInMeshBase](VM.Managed.DAFUL.Builder.GearTrain.AddGearToRBEInMeshBase.md), 
[AddGearToShaft](VM.Managed.DAFUL.Builder.GearTrain.AddGearToShaft.md)

#### Implements

IBuilder

#### Inherited Members

[AddEntityBase.m\_bSuccess](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_m\_bSuccess), 
[AddEntityBase.Validate\(IList<string\>\)](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_Validate\_System\_Collections\_Generic\_IList\_System\_String\_\_), 
[AddEntityBase.Build\(Document\)](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_Build\_VM\_Managed\_Document\_), 
[AddEntityBase.Success\(\)](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_Success), 
[AddEntityBase.CheckSection\(HiddenShaftSetDocument, string\)](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_CheckSection\_VM\_Managed\_DAFUL\_GearTrain\_HiddenShaftSetDocument\_System\_String\_), 
[AddEntityBase.GetGearInfo\(GearTrainDocument, ref GearGeometryInfo, ref IGearSet, ref WebPropertyValue\)](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_GetGearInfo\_VM\_Managed\_DAFUL\_GearTrain\_GearTrainDocument\_VM\_Managed\_DAFUL\_GearTrain\_GearGeometryInfo\_\_VM\_Managed\_DAFUL\_GearTrain\_IGearSet\_\_VM\_Managed\_DAFUL\_GearTrain\_WebPropertyValue\_\_), 
[AddEntityBase.GetRollingBearingInfo\(GearTrainDocument, ref RacewayGeometryInfo, ref Bearing\)](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_GetRollingBearingInfo\_VM\_Managed\_DAFUL\_GearTrain\_GearTrainDocument\_VM\_Managed\_DAFUL\_GearTrain\_RacewayGeometryInfo\_\_VM\_Managed\_DAFUL\_GearTrain\_Bearing\_\_), 
[AddEntityBase.GetSlidingBearingInfo\(GearTrainDocument, ref SBGeometryInfo, ref SlidingBearing, ref enSBContactType\)](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_GetSlidingBearingInfo\_VM\_Managed\_DAFUL\_GearTrain\_GearTrainDocument\_VM\_Managed\_DAFUL\_GearTrain\_SBGeometryInfo\_\_VM\_Managed\_DAFUL\_GearTrain\_SlidingBearing\_\_VM\_Managed\_DAFUL\_GearTrain\_enSBContactType\_\_), 
[AddEntityBase.CheckMissShaft\(string, double, double, double, string, string, ref double, ref ReferencePointType\)](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_CheckMissShaft\_System\_String\_System\_Double\_System\_Double\_System\_Double\_System\_String\_System\_String\_System\_Double\_\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_ReferencePointType\_\_), 
[AddEntityBase.CheckOverlap\(List<double\[\]\>, double, double, string, string\)](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_CheckOverlap\_System\_Collections\_Generic\_List\_System\_Double\_\_\_\_System\_Double\_System\_Double\_System\_String\_System\_String\_), 
[AddEntityBase.MatchGear\(IGearSet, List<IGearBuilder\>\)](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_MatchGear\_VM\_Managed\_DAFUL\_GearTrain\_IGearSet\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_\_), 
[AddEntityBase.SetClearance\(ClearanceInfo\)](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_SetClearance\_VM\_Managed\_DAFUL\_GearTrain\_ClearanceInfo\_), 
[AddEntityBase.SetColor\(BuilderColor, BuilderColorGeom, AddedWebBuilder\)](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_SetColor\_VM\_Managed\_CAD\_BuilderColor\_VM\_Managed\_CAD\_BuilderColorGeom\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_AddedWebBuilder\_), 
[AddEntityBase.CheckNodesetWithTreatRBE\(HiddenDocument, string\)](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_CheckNodesetWithTreatRBE\_VM\_Managed\_DAFUL\_HiddenDocument\_System\_String\_), 
[AddEntityBase.AddNewReference\(ObjectBase\)](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_AddNewReference\_VM\_Managed\_ObjectBase\_), 
[AddEntityBase.InputArray](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_InputArray), 
[AddEntityBase.Parameters](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_Parameters), 
[AddEntityBase.AllowCheckError](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_AllowCheckError), 
[AddEntityBase.BuildObject](VM.Managed.DAFUL.Builder.GearTrain.AddEntityBase.md\#VM\_Managed\_DAFUL\_Builder\_GearTrain\_AddEntityBase\_BuildObject)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddGearEntityBase__ctor"></a> AddGearEntityBase\(\)

```csharp
protected AddGearEntityBase()
```

## Methods

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddGearEntityBase_AddPairGeneralGear_System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder__VM_Managed_DAFUL_GearTrain_IGearSet_VM_Managed_CAD_Body_VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder_"></a> AddPairGeneralGear\(List<IGearBuilder\>, IGearSet, Body, IGearBuilder\)

```csharp
protected void AddPairGeneralGear(List<IGearBuilder> lstRes, IGearSet gearSet, Body addedBody, IGearBuilder gearsetBuilder)
```

#### Parameters

`lstRes` List<IGearBuilder\>

`gearSet` IGearSet

`addedBody` Body

`gearsetBuilder` IGearBuilder

### <a id="VM_Managed_DAFUL_Builder_GearTrain_AddGearEntityBase_AddPairPlanertaryGear_VM_Managed_DAFUL_GearTrain_IGearSet_VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder_"></a> AddPairPlanertaryGear\(IGearSet, IGearBuilder\)

```csharp
protected void AddPairPlanertaryGear(IGearSet gearSet, IGearBuilder gearsetBuilder)
```

#### Parameters

`gearSet` IGearSet

`gearsetBuilder` IGearBuilder

