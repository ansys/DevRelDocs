# <a id="VM_Managed_Picker_Core_PickerFaceset"></a> Class PickerFaceset

Namespace: [VM.Managed.Picker.Core](VM.Managed.Picker.Core.md)  
Assembly: VMAppCore.dll  

This class is to represent the faceset picker.

```csharp
public class PickerFaceset : PickerFace
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PickerBase](VM.Managed.Picker.Core.PickerBase.md) ← 
[PickerTopol](VM.Managed.Picker.Core.PickerTopol.md) ← 
[PickerFace](VM.Managed.Picker.Core.PickerFace.md) ← 
[PickerFaceset](VM.Managed.Picker.Core.PickerFaceset.md)

#### Derived

[PickerFacesetSphere](VM.Managed.Picker.Core.PickerFacesetSphere.md)

#### Inherited Members

[PickerFace.GetPickerInfo\(\)](VM.Managed.Picker.Core.PickerFace.md\#VM\_Managed\_Picker\_Core\_PickerFace\_GetPickerInfo), 
[PickerFace.Filtering\(UIntPtr\)](VM.Managed.Picker.Core.PickerFace.md\#VM\_Managed\_Picker\_Core\_PickerFace\_Filtering\_System\_UIntPtr\_), 
[PickerFace.FilteringAnother\(UIntPtr\)](VM.Managed.Picker.Core.PickerFace.md\#VM\_Managed\_Picker\_Core\_PickerFace\_FilteringAnother\_System\_UIntPtr\_), 
[PickerFace.SetResultImpl\(ref string, bool\)](VM.Managed.Picker.Core.PickerFace.md\#VM\_Managed\_Picker\_Core\_PickerFace\_SetResultImpl\_System\_String\_\_System\_Boolean\_), 
[PickerTopol.m\_pParentObject](VM.Managed.Picker.Core.PickerTopol.md\#VM\_Managed\_Picker\_Core\_PickerTopol\_m\_pParentObject), 
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

### <a id="VM_Managed_Picker_Core_PickerFaceset__ctor"></a> PickerFaceset\(\)

Initializes a new instance of the <xref href="VM.Managed.Picker.Core.PickerFaceset" data-throw-if-not-resolved="false"></xref> class

```csharp
public PickerFaceset()
```

## Methods

### <a id="VM_Managed_Picker_Core_PickerFaceset_Filtering_System_UIntPtr_"></a> Filtering\(UIntPtr\)

Filtering to not proper object.

```csharp
public override bool Filtering(UIntPtr pTarget)
```

#### Parameters

`pTarget` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Filtering target.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Picker_Core_PickerFaceset_FilteringAnother_System_UIntPtr_"></a> FilteringAnother\(UIntPtr\)

Filtering to not proper object about special target.

```csharp
public override bool FilteringAnother(UIntPtr pTarget)
```

#### Parameters

`pTarget` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Filtering target.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Picker_Core_PickerFaceset_FilteringReference_System_UIntPtr_System_UIntPtr_"></a> FilteringReference\(UIntPtr, UIntPtr\)

Filtering to not proper object about special target into owner.

```csharp
public override bool FilteringReference(UIntPtr pOwner, UIntPtr pTarget)
```

#### Parameters

`pOwner` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Filtering owner of target.

`pTarget` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Filtering target.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Picker_Core_PickerFaceset_GetPickerInfo"></a> GetPickerInfo\(\)

Gets information of picking type.

```csharp
public override string GetPickerInfo()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Picker_Core_PickerFaceset_GetResultXmlFromKey_System_UIntPtr_"></a> GetResultXmlFromKey\(UIntPtr\)

Get valid result xml according to picker key of core.

```csharp
public override string GetResultXmlFromKey(UIntPtr key)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Picking destination key.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The valid result xml.

### <a id="VM_Managed_Picker_Core_PickerFaceset_Highlight_System_Boolean_"></a> Highlight\(bool\)

Picking highlight to filtered target.

```csharp
public override void Highlight(bool bHighlight)
```

#### Parameters

`bHighlight` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If set to <code>ture</code> is highlight; otherwise, <code>false</code> isn't highlight.

### <a id="VM_Managed_Picker_Core_PickerFaceset_SetResultImpl_System_String__System_Boolean_"></a> SetResultImpl\(ref string, bool\)

Sets the result for picking.

```csharp
protected override bool SetResultImpl(ref string strXml, bool bXmlOnly)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The picked data.

`bXmlOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If it is true, skip the result setting.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

