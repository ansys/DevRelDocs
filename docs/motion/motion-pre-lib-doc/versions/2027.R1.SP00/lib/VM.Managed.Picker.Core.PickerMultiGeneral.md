# Class PickerMultiGeneral
<a id="VM_Managed_Picker_Core_PickerMultiGeneral"></a>

Namespace: [VM.Managed.Picker.Core](VM.Managed.Picker.Core.md)  
Assembly: VMAppCore.dll  

This class is to represent the general multi entity picker.

```csharp
public abstract class PickerMultiGeneral : PickerMulti
```

#### Inheritance

object ← 
[PickerBase](VM.Managed.Picker.Core.PickerBase.md) ← 
[PickerMulti](VM.Managed.Picker.Core.PickerMulti.md) ← 
[PickerMultiGeneral](VM.Managed.Picker.Core.PickerMultiGeneral.md)

#### Inherited Members

[PickerMulti.SetHighlight\(List<UIntPtr\>, bool, bool\)](VM.Managed.Picker.Core.PickerMulti.md\#VM\_Managed\_Picker\_Core\_PickerMulti\_SetHighlight\_System\_Collections\_Generic\_List\_System\_UIntPtr\_\_System\_Boolean\_System\_Boolean\_), 
[PickerMulti.GetResultXmlFromKey\(UIntPtr\[\]\)](VM.Managed.Picker.Core.PickerMulti.md\#VM\_Managed\_Picker\_Core\_PickerMulti\_GetResultXmlFromKey\_System\_UIntPtr\_\_\_), 
[PickerBase.raise\_CustomFilterEvent\(object, FilterArgs\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_raise\_CustomFilterEvent\_System\_Object\_VM\_Managed\_Picker\_Core\_FilterArgs\_), 
[PickerBase.Pick\(bool\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_Pick\_System\_Boolean\_), 
[PickerBase.PickWithStartSignal\(bool, ManualResetEvent\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_PickWithStartSignal\_System\_Boolean\_System\_Threading\_ManualResetEvent\_), 
[PickerBase.Abort\(\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_Abort), 
[PickerBase.GetPickerInfo\(\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_GetPickerInfo), 
[PickerBase.GetValidResultXml\(string\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_GetValidResultXml\_System\_String\_), 
[PickerBase.GetResultXmlFromKey\(UIntPtr\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_GetResultXmlFromKey\_System\_UIntPtr\_), 
[PickerBase.GetChangeNoneParametricXml\(string\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_GetChangeNoneParametricXml\_System\_String\_), 
[PickerBase.Filtering\(UIntPtr\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_Filtering\_System\_UIntPtr\_), 
[PickerBase.FilteringVMPID\(\_VM\_ID\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_FilteringVMPID\_\_VM\_ID\_), 
[PickerBase.FilteringAnother\(UIntPtr\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_FilteringAnother\_System\_UIntPtr\_), 
[PickerBase.FilteringReference\(UIntPtr, UIntPtr\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_FilteringReference\_System\_UIntPtr\_System\_UIntPtr\_), 
[PickerBase.Highlight\(bool\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_Highlight\_System\_Boolean\_), 
[PickerBase.GetAdjacentPatch\(double, List<int\>\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_GetAdjacentPatch\_System\_Double\_System\_Collections\_Generic\_List\_System\_Int32\_\_), 
[PickerBase.UseEntityFiltering\(\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_UseEntityFiltering), 
[PickerBase.SetResultImpl\(ref string, bool\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_SetResultImpl\_System\_String\_\_System\_Boolean\_), 
[PickerBase.UpdateDisplay\(\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_UpdateDisplay), 
[PickerBase.ActiveDocument](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_ActiveDocument), 
[PickerBase.IsOnlyResultXml](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_IsOnlyResultXml), 
[PickerBase.IsReference](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_IsReference), 
[PickerBase.SymmetricType](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_SymmetricType), 
[PickerBase.ResultXml](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_ResultXml), 
[PickerBase.Result](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_Result), 
[PickerBase.CustomFilterEvent](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_CustomFilterEvent)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral__ctor_System_Type___"></a> PickerMultiGeneral\(Type\[\]\)

```csharp
public PickerMultiGeneral(Type[] arTypes)
```

#### Parameters

`arTypes` Type\[\]

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral__ctor_System_Type_System_Boolean_"></a> PickerMultiGeneral\(Type, bool\)

```csharp
public PickerMultiGeneral(Type type, bool bIsInterface)
```

#### Parameters

`type` Type

`bIsInterface` bool

## Properties

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_AllowChildSubsystem"></a> AllowChildSubsystem

Get the flag of picking the reference objects.

```csharp
public bool AllowChildSubsystem { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_PickableTypes"></a> PickableTypes

Get array of pickable type.

```csharp
public Type[] PickableTypes { get; }
```

#### Property Value

 Type\[\]

## Methods

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_ConvertKeyToInstanceContainerImpl_VM_Managed_ObjectBase_"></a> ConvertKeyToInstanceContainerImpl\(ObjectBase\)

```csharp
protected abstract UIntPtr ConvertKeyToInstanceContainerImpl(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

#### Returns

 UIntPtr

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_Filtering_System_UIntPtr_"></a> Filtering\(UIntPtr\)

Filtering to not proper object.

```csharp
public override bool Filtering(UIntPtr pTarget)
```

#### Parameters

`pTarget` UIntPtr

Filtering target.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_FilteringReference_System_UIntPtr_System_UIntPtr_"></a> FilteringReference\(UIntPtr, UIntPtr\)

Filtering to not proper object about special target into owner.

```csharp
public override bool FilteringReference(UIntPtr pOwner, UIntPtr pTarget)
```

#### Parameters

`pOwner` UIntPtr

Filtering owner of target.

`pTarget` UIntPtr

Filtering target.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_GetBodyImpl_System_UIntPtr_System_Boolean_"></a> GetBodyImpl\(UIntPtr, bool\)

```csharp
protected abstract ObjectBase GetBodyImpl(UIntPtr pKey, bool bIgnoreMarker)
```

#### Parameters

`pKey` UIntPtr

`bIgnoreMarker` bool

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_GetPickerInfo"></a> GetPickerInfo\(\)

Gets information of picking type.

```csharp
public override string GetPickerInfo()
```

#### Returns

 string

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_GetResultXmlFromKey_VM_Managed_ObjectBase___"></a> GetResultXmlFromKey\(ObjectBase\[\]\)

```csharp
public string GetResultXmlFromKey(ObjectBase[] arResults)
```

#### Parameters

`arResults` [ObjectBase](VM.Managed.ObjectBase.md)\[\]

#### Returns

 string

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_GetResultXmlFromKey_System_UIntPtr___"></a> GetResultXmlFromKey\(UIntPtr\[\]\)

Get valid result xml according to picker keys of core.

```csharp
public override string GetResultXmlFromKey(UIntPtr[] arKey)
```

#### Parameters

`arKey` UIntPtr\[\]

#### Returns

 string

The valid result xml.

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_GetResultXmlFromKey_System_UIntPtr_"></a> GetResultXmlFromKey\(UIntPtr\)

Get valid result xml according to picker key of core.

```csharp
public override string GetResultXmlFromKey(UIntPtr key)
```

#### Parameters

`key` UIntPtr

Picking destination key.

#### Returns

 string

The valid result xml.

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_HighlightCurveset_VM_Managed_ObjectBase_System_Boolean_"></a> HighlightCurveset\(ObjectBase, bool\)

```csharp
protected void HighlightCurveset(ObjectBase obj, bool bHighlight)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`bHighlight` bool

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_HighlightFaceset_VM_Managed_ObjectBase_System_Boolean_"></a> HighlightFaceset\(ObjectBase, bool\)

```csharp
protected void HighlightFaceset(ObjectBase obj, bool bHighlight)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`bHighlight` bool

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_HighlightGeometry_VM_Managed_ObjectBase_System_Boolean_"></a> HighlightGeometry\(ObjectBase, bool\)

```csharp
protected void HighlightGeometry(ObjectBase obj, bool bHighlight)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`bHighlight` bool

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_HighlightImpl_VM_Managed_ObjectBase_System_Boolean_"></a> HighlightImpl\(ObjectBase, bool\)

```csharp
protected abstract bool HighlightImpl(ObjectBase obj, bool bHighlight)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`bHighlight` bool

#### Returns

 bool

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_HighlightInstanceContainer_VM_Managed_ObjectBase_System_Boolean_"></a> HighlightInstanceContainer\(ObjectBase, bool\)

```csharp
protected void HighlightInstanceContainer(ObjectBase obj, bool bHighlight)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`bHighlight` bool

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_HighlightReferenceConnectable_VM_Managed_ObjectBase_System_Boolean_"></a> HighlightReferenceConnectable\(ObjectBase, bool\)

```csharp
protected void HighlightReferenceConnectable(ObjectBase obj, bool bHighlight)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`bHighlight` bool

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_HighlightReferenceFaceset_VM_Managed_ObjectBase_System_Boolean_System_Boolean_"></a> HighlightReferenceFaceset\(ObjectBase, bool, bool\)

```csharp
protected void HighlightReferenceFaceset(ObjectBase obj, bool bHighlight, bool bUpdate)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`bHighlight` bool

`bUpdate` bool

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_HighlightReferenceMultiBuilder_VM_Managed_ObjectBase_System_Boolean_"></a> HighlightReferenceMultiBuilder\(ObjectBase, bool\)

```csharp
protected void HighlightReferenceMultiBuilder(ObjectBase obj, bool bHighlight)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`bHighlight` bool

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_HighlightReferenceNodalBody_VM_Managed_ObjectBase_System_Boolean_"></a> HighlightReferenceNodalBody\(ObjectBase, bool\)

```csharp
protected void HighlightReferenceNodalBody(ObjectBase obj, bool bHighlight)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`bHighlight` bool

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_HighlightSubsystem_VM_Managed_ObjectBase_System_Boolean_"></a> HighlightSubsystem\(ObjectBase, bool\)

```csharp
protected void HighlightSubsystem(ObjectBase obj, bool bHighlight)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`bHighlight` bool

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_SetHighlight_System_Collections_Generic_List_System_UIntPtr__System_Boolean_System_Boolean_"></a> SetHighlight\(List<UIntPtr\>, bool, bool\)

```csharp
public override void SetHighlight(List<UIntPtr> lstSelectedObject, bool bHighlight, bool bUpdate)
```

#### Parameters

`lstSelectedObject` List<UIntPtr\>

`bHighlight` bool

`bUpdate` bool

### <a id="VM_Managed_Picker_Core_PickerMultiGeneral_SetResultImpl_System_String__System_Boolean_"></a> SetResultImpl\(ref string, bool\)

Sets the result for picking.

```csharp
protected override bool SetResultImpl(ref string strXml, bool bXmlOnly)
```

#### Parameters

`strXml` string

The picked data.

`bXmlOnly` bool

If it is true, skip the result setting.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

