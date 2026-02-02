# Class PickerMultiEntityVM
<a id="VM_Managed_Picker_Core_PickerMultiEntityVM"></a>

Namespace: [VM.Managed.Picker.Core](VM.Managed.Picker.Core.md)  
Assembly: VMAppCore.dll  

This class is to represent the multi picker of entity.

```csharp
public class PickerMultiEntityVM : PickerMulti
```

#### Inheritance

object ← 
[PickerBase](VM.Managed.Picker.Core.PickerBase.md) ← 
[PickerMulti](VM.Managed.Picker.Core.PickerMulti.md) ← 
[PickerMultiEntityVM](VM.Managed.Picker.Core.PickerMultiEntityVM.md)

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

### <a id="VM_Managed_Picker_Core_PickerMultiEntityVM__ctor_System_Type_System_Boolean_System_Boolean_"></a> PickerMultiEntityVM\(Type, bool, bool\)

```csharp
public PickerMultiEntityVM(Type type, bool bIsInterface, bool bIsReference)
```

#### Parameters

`type` Type

`bIsInterface` bool

`bIsReference` bool

### <a id="VM_Managed_Picker_Core_PickerMultiEntityVM__ctor_System_Type___"></a> PickerMultiEntityVM\(Type\[\]\)

```csharp
public PickerMultiEntityVM(Type[] arTypes)
```

#### Parameters

`arTypes` Type\[\]

### <a id="VM_Managed_Picker_Core_PickerMultiEntityVM__ctor_System_Type_System_Boolean_"></a> PickerMultiEntityVM\(Type, bool\)

```csharp
public PickerMultiEntityVM(Type type, bool bIsInterface)
```

#### Parameters

`type` Type

`bIsInterface` bool

## Properties

### <a id="VM_Managed_Picker_Core_PickerMultiEntityVM_EntityTypes"></a> EntityTypes

```csharp
public Type[] EntityTypes { get; }
```

#### Property Value

 Type\[\]

## Methods

### <a id="VM_Managed_Picker_Core_PickerMultiEntityVM_Filtering_System_UIntPtr_"></a> Filtering\(UIntPtr\)

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

### <a id="VM_Managed_Picker_Core_PickerMultiEntityVM_FilteringReference_System_UIntPtr_System_UIntPtr_"></a> FilteringReference\(UIntPtr, UIntPtr\)

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

### <a id="VM_Managed_Picker_Core_PickerMultiEntityVM_GetPickerInfo"></a> GetPickerInfo\(\)

Gets information of picking type.

```csharp
public override string GetPickerInfo()
```

#### Returns

 string

### <a id="VM_Managed_Picker_Core_PickerMultiEntityVM_GetResultXmlFromKey_System_UIntPtr___"></a> GetResultXmlFromKey\(UIntPtr\[\]\)

Get valid result xml according to picker keys of core.

```csharp
public override string GetResultXmlFromKey(UIntPtr[] arKey)
```

#### Parameters

`arKey` UIntPtr\[\]

#### Returns

 string

The valid result xml.

### <a id="VM_Managed_Picker_Core_PickerMultiEntityVM_GetResultXmlFromKey_System_UIntPtr_"></a> GetResultXmlFromKey\(UIntPtr\)

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

### <a id="VM_Managed_Picker_Core_PickerMultiEntityVM_SetHighlight_System_Collections_Generic_List_System_UIntPtr__System_Boolean_System_Boolean_"></a> SetHighlight\(List<UIntPtr\>, bool, bool\)

```csharp
public override void SetHighlight(List<UIntPtr> lstEntity, bool bHighlight, bool bUpdate)
```

#### Parameters

`lstEntity` List<UIntPtr\>

`bHighlight` bool

`bUpdate` bool

### <a id="VM_Managed_Picker_Core_PickerMultiEntityVM_SetResultImpl_System_String__System_Boolean_"></a> SetResultImpl\(ref string, bool\)

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

### <a id="VM_Managed_Picker_Core_PickerMultiEntityVM_UseEntityFiltering"></a> UseEntityFiltering\(\)

```csharp
public override bool UseEntityFiltering()
```

#### Returns

 bool

