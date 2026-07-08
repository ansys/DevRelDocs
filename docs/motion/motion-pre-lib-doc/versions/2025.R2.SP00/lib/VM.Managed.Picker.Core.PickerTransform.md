#  Class PickerTransform

Namespace: [VM.Managed.Picker.Core](VM.Managed.Picker.Core.md)  
Assembly: VMAppCore.dll  

This class is to represent the transform picker.

```csharp
public class PickerTransform : PickerBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PickerBase](VM.Managed.Picker.Core.PickerBase.md) ← 
[PickerTransform](VM.Managed.Picker.Core.PickerTransform.md)

#### Inherited Members

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

### <a id="VM_Managed_Picker_Core_PickerTransform__ctor"></a> PickerTransform\(\)

Initializes a new instance of the <xref href="VM.Managed.Picker.Core.PickerTransform" data-throw-if-not-resolved="false"></xref> class

```csharp
public PickerTransform()
```

## Properties

### <a id="VM_Managed_Picker_Core_PickerTransform_Result"></a> Result

Gets or sets the object of picking result.

```csharp
public override object Result { get; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### <a id="VM_Managed_Picker_Core_PickerTransform_Filtering_System_UIntPtr_"></a> Filtering\(UIntPtr\)

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

### <a id="VM_Managed_Picker_Core_PickerTransform_FilteringReference_System_UIntPtr_System_UIntPtr_"></a> FilteringReference\(UIntPtr, UIntPtr\)

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

### <a id="VM_Managed_Picker_Core_PickerTransform_GetChangeNoneParametricXml_System_String_"></a> GetChangeNoneParametricXml\(string\)

Change to the result of parametric to the result of none parametric.

```csharp
public override string GetChangeNoneParametricXml(string strXml)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

Result of parametric.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The result xml of none parametric.

### <a id="VM_Managed_Picker_Core_PickerTransform_GetPickerInfo"></a> GetPickerInfo\(\)

Gets information of picking type.

```csharp
public override string GetPickerInfo()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Picker_Core_PickerTransform_GetResultXmlFromKey_System_UIntPtr_"></a> GetResultXmlFromKey\(UIntPtr\)

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

### <a id="VM_Managed_Picker_Core_PickerTransform_GetVaildAcisXml_System_String_"></a> GetVaildAcisXml\(string\)

Get valid result xml of transform data for acis datas.

```csharp
public string GetVaildAcisXml(string strDesireXml)
```

#### Parameters

`strDesireXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

Invalid result xml.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The valid result xml.

### <a id="VM_Managed_Picker_Core_PickerTransform_GetVaildOnNodeXml_System_String_VM_Managed_VectorBase_"></a> GetVaildOnNodeXml\(string, VectorBase\)

Get valid result xml of transform data for node of mesh.
OnNode filter picking - PointAndOrientation type

```csharp
public string GetVaildOnNodeXml(string strDesireXml, VectorBase vecPosition)
```

#### Parameters

`strDesireXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

Invalid result xml.

`vecPosition` [VectorBase](VM.Managed.VectorBase.md)

The position of node.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The valid result xml.

### <a id="VM_Managed_Picker_Core_PickerTransform_GetVaildPointAndOrientationXml_System_String_System_String_"></a> GetVaildPointAndOrientationXml\(string, string\)

Get valid result xml of transform data for point and orientation.

```csharp
public string GetVaildPointAndOrientationXml(string pointXml, string orientationXml)
```

#### Parameters

`pointXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The result of sub picker of point.

`orientationXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The result of sub picker of orientation.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The valid result xml.

### <a id="VM_Managed_Picker_Core_PickerTransform_GetValidLinkXml_System_String_"></a> GetValidLinkXml\(string\)

Get valid result xml of link.
If result have value of delta, the Link is changed LinkDelta.
If result have not value of delta, the LinkDelta is changed Link.

```csharp
public string GetValidLinkXml(string strDesireXml)
```

#### Parameters

`strDesireXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

Invalid result xml of link.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The result xml of link.

### <a id="VM_Managed_Picker_Core_PickerTransform_GetValidResultXml_System_String_"></a> GetValidResultXml\(string\)

Get valid result xml according to picker type of core.

```csharp
public override string GetValidResultXml(string strDesireXml)
```

#### Parameters

`strDesireXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

Invalid result xml.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The valid result xml.

### <a id="VM_Managed_Picker_Core_PickerTransform_GetValidThreePointsXml_System_String_"></a> GetValidThreePointsXml\(string\)

Get valid result xml of transform data for three points.

```csharp
public string GetValidThreePointsXml(string strDesireXml)
```

#### Parameters

`strDesireXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

Invalid result xml.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The valid result xml.

### <a id="VM_Managed_Picker_Core_PickerTransform_Highlight_System_Boolean_"></a> Highlight\(bool\)

Picking highlight to filtered target.

```csharp
public override void Highlight(bool bHighlight)
```

#### Parameters

`bHighlight` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If set to <code>ture</code> is highlight; otherwise, <code>false</code> isn't highlight.

### <a id="VM_Managed_Picker_Core_PickerTransform_ResultDeserialize_System_String_"></a> ResultDeserialize\(string\)

```csharp
public object ResultDeserialize(string strXml)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="VM_Managed_Picker_Core_PickerTransform_SetResultImpl_System_String__System_Boolean_"></a> SetResultImpl\(ref string, bool\)

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

