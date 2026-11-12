# Class PickerMultiPatch
<a id="VM_Managed_Picker_Core_FE_PickerMultiPatch"></a>

Namespace: [VM.Managed.Picker.Core.FE](VM.Managed.Picker.Core.FE.md)  
Assembly: VMFE.dll  

This class is to represent the multi picker of patches.

```csharp
public class PickerMultiPatch : PickerMultiNodeBase
```

#### Inheritance

object ← 
PickerBase ← 
PickerMulti ← 
[PickerMultiNodeBase](VM.Managed.Picker.Core.FE.PickerMultiNodeBase.md) ← 
[PickerMultiPatch](VM.Managed.Picker.Core.FE.PickerMultiPatch.md)

#### Inherited Members

[PickerMultiNodeBase.m\_pOwnerMesh](VM.Managed.Picker.Core.FE.PickerMultiNodeBase.md\#VM\_Managed\_Picker\_Core\_FE\_PickerMultiNodeBase\_m\_pOwnerMesh), 
[PickerMultiNodeBase.SetOwnerMesh\(UIntPtr\)](VM.Managed.Picker.Core.FE.PickerMultiNodeBase.md\#VM\_Managed\_Picker\_Core\_FE\_PickerMultiNodeBase\_SetOwnerMesh\_System\_UIntPtr\_), 
[PickerMultiNodeBase.GetNodeID\(uint\)](VM.Managed.Picker.Core.FE.PickerMultiNodeBase.md\#VM\_Managed\_Picker\_Core\_FE\_PickerMultiNodeBase\_GetNodeID\_System\_UInt32\_), 
[PickerMultiNodeBase.GetMesh\(\)](VM.Managed.Picker.Core.FE.PickerMultiNodeBase.md\#VM\_Managed\_Picker\_Core\_FE\_PickerMultiNodeBase\_GetMesh), 
[PickerMultiNodeBase.ActiveMeshDocument](VM.Managed.Picker.Core.FE.PickerMultiNodeBase.md\#VM\_Managed\_Picker\_Core\_FE\_PickerMultiNodeBase\_ActiveMeshDocument), 
PickerMulti.SetHighlight\(List<UIntPtr\>, bool, bool\), 
PickerMulti.GetResultXmlFromKey\(UIntPtr\[\]\), 
PickerBase.raise\_CustomFilterEvent\(object, FilterArgs\), 
PickerBase.Pick\(bool\), 
PickerBase.PickWithStartSignal\(bool, ManualResetEvent\), 
PickerBase.Abort\(\), 
PickerBase.GetPickerInfo\(\), 
PickerBase.GetValidResultXml\(string\), 
PickerBase.GetResultXmlFromKey\(UIntPtr\), 
PickerBase.GetChangeNoneParametricXml\(string\), 
PickerBase.Filtering\(UIntPtr\), 
PickerBase.FilteringVMPID\(\_VM\_ID\), 
PickerBase.FilteringAnother\(UIntPtr\), 
PickerBase.FilteringReference\(UIntPtr, UIntPtr\), 
PickerBase.Highlight\(bool\), 
PickerBase.GetAdjacentPatch\(double, List<int\>\), 
PickerBase.UseEntityFiltering\(\), 
PickerBase.SetResultImpl\(ref string, bool\), 
PickerBase.UpdateDisplay\(\), 
PickerBase.ActiveDocument, 
PickerBase.IsOnlyResultXml, 
PickerBase.IsReference, 
PickerBase.SymmetricType, 
PickerBase.ResultXml, 
PickerBase.Result, 
PickerBase.CustomFilterEvent

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Picker_Core_FE_PickerMultiPatch__ctor"></a> PickerMultiPatch\(\)

```csharp
public PickerMultiPatch()
```

## Fields

### <a id="VM_Managed_Picker_Core_FE_PickerMultiPatch_m_Patch"></a> m\_Patch

```csharp
protected Patch m_Patch
```

#### Field Value

 [Patch](VM.Managed.DAFUL.FE.Patch.md)

### <a id="VM_Managed_Picker_Core_FE_PickerMultiPatch_m_nPatchNodeIndex"></a> m\_nPatchNodeIndex

```csharp
protected int m_nPatchNodeIndex
```

#### Field Value

 int

## Methods

### <a id="VM_Managed_Picker_Core_FE_PickerMultiPatch_GetAdjacentPatch_System_Double_System_Collections_Generic_List_System_Int32__"></a> GetAdjacentPatch\(double, List<int\>\)

```csharp
public override void GetAdjacentPatch(double dAngle, List<int> lstNode)
```

#### Parameters

`dAngle` double

`lstNode` List<int\>

### <a id="VM_Managed_Picker_Core_FE_PickerMultiPatch_GetPickerInfo"></a> GetPickerInfo\(\)

Gets the picker information.

```csharp
public override string GetPickerInfo()
```

#### Returns

 string

The picker information.

### <a id="VM_Managed_Picker_Core_FE_PickerMultiPatch_GetResultXmlFromKey_System_UIntPtr___"></a> GetResultXmlFromKey\(UIntPtr\[\]\)

Get valid result xml according to picker keys of core.

```csharp
public override string GetResultXmlFromKey(UIntPtr[] arKey)
```

#### Parameters

`arKey` UIntPtr\[\]

Picking destination keys.

#### Returns

 string

The valid result xml.

### <a id="VM_Managed_Picker_Core_FE_PickerMultiPatch_GetResultXmlFromKey_System_UIntPtr_"></a> GetResultXmlFromKey\(UIntPtr\)

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

### <a id="VM_Managed_Picker_Core_FE_PickerMultiPatch_SetHighlight_System_Collections_Generic_List_System_UIntPtr__System_Boolean_System_Boolean_"></a> SetHighlight\(List<UIntPtr\>, bool, bool\)

```csharp
public override void SetHighlight(List<UIntPtr> lstPatch, bool bHighlight, bool bUpdate)
```

#### Parameters

`lstPatch` List<UIntPtr\>

`bHighlight` bool

`bUpdate` bool

### <a id="VM_Managed_Picker_Core_FE_PickerMultiPatch_SetResultImpl_System_String__System_Boolean_"></a> SetResultImpl\(ref string, bool\)

Sets the result for picking.

```csharp
protected override bool SetResultImpl(ref string strXml, bool bXmlOnly)
```

#### Parameters

`strXml` string

The picked data.

`bXmlOnly` bool

Whether only xml or not.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

