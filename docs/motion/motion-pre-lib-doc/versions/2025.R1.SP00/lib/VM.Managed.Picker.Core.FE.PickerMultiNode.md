#  Class PickerMultiNode

Namespace: [VM.Managed.Picker.Core.FE](VM.Managed.Picker.Core.FE.md)  
Assembly: VMFE.dll  

This class is to represent the multi picker of nodes.

```csharp
public class PickerMultiNode : PickerMultiNodeBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
PickerBase ← 
PickerMulti ← 
[PickerMultiNodeBase](VM.Managed.Picker.Core.FE.PickerMultiNodeBase.md) ← 
[PickerMultiNode](VM.Managed.Picker.Core.FE.PickerMultiNode.md)

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

### <a id="VM_Managed_Picker_Core_FE_PickerMultiNode__ctor_System_UInt32___"></a> PickerMultiNode\(uint\[\]\)

Initializes a new instance of the <xref href="VM.Managed.Picker.Core.FE.PickerMultiNode" data-throw-if-not-resolved="false"></xref> class

```csharp
public PickerMultiNode(uint[] arUsedNodes)
```

#### Parameters

`arUsedNodes` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

unselectable node indexes.

### <a id="VM_Managed_Picker_Core_FE_PickerMultiNode__ctor"></a> PickerMultiNode\(\)

Initializes a new instance of the <xref href="VM.Managed.Picker.Core.FE.PickerMultiNode" data-throw-if-not-resolved="false"></xref> class

```csharp
public PickerMultiNode()
```

## Fields

### <a id="VM_Managed_Picker_Core_FE_PickerMultiNode_m_lstRejectNode"></a> m\_lstRejectNode

```csharp
protected List<uint> m_lstRejectNode
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

### <a id="VM_Managed_Picker_Core_FE_PickerMultiNode_m_lstSelectedNode"></a> m\_lstSelectedNode

```csharp
protected List<uint> m_lstSelectedNode
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

## Methods

### <a id="VM_Managed_Picker_Core_FE_PickerMultiNode_GetPickerInfo"></a> GetPickerInfo\(\)

Gets the picker information.

```csharp
public override string GetPickerInfo()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The picker information.

### <a id="VM_Managed_Picker_Core_FE_PickerMultiNode_GetResultXmlFromKey_System_UIntPtr___"></a> GetResultXmlFromKey\(UIntPtr\[\]\)

Get valid result xml according to picker keys of core.

```csharp
public override string GetResultXmlFromKey(UIntPtr[] arKey)
```

#### Parameters

`arKey` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\[\]

Picking destination keys.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The valid result xml.

### <a id="VM_Managed_Picker_Core_FE_PickerMultiNode_GetResultXmlFromKey_System_UIntPtr_"></a> GetResultXmlFromKey\(UIntPtr\)

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

### <a id="VM_Managed_Picker_Core_FE_PickerMultiNode_SetHighlight_System_Collections_Generic_List_System_UIntPtr__System_Boolean_System_Boolean_"></a> SetHighlight\(List<UIntPtr\>, bool, bool\)

```csharp
public override void SetHighlight(List<UIntPtr> lstNode, bool bHighlight, bool bUpdate)
```

#### Parameters

`lstNode` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\>

`bHighlight` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`bUpdate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Picker_Core_FE_PickerMultiNode_SetResultImpl_System_String__System_Boolean_"></a> SetResultImpl\(ref string, bool\)

Sets the result for picking.

```csharp
protected override bool SetResultImpl(ref string strXml, bool bXmlOnly)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The picked data.

`bXmlOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether only xml or not.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

