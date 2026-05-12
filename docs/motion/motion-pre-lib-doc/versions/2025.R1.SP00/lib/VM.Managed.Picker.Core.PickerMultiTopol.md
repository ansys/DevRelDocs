#  Class PickerMultiTopol

Namespace: [VM.Managed.Picker.Core](VM.Managed.Picker.Core.md)  
Assembly: VMAppCore.dll  

This class is to represent the multi picker of topol.

```csharp
public abstract class PickerMultiTopol : PickerMulti
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PickerBase](VM.Managed.Picker.Core.PickerBase.md) ← 
[PickerMulti](VM.Managed.Picker.Core.PickerMulti.md) ← 
[PickerMultiTopol](VM.Managed.Picker.Core.PickerMultiTopol.md)

#### Derived

[PickerMultiEdge](VM.Managed.Picker.Core.PickerMultiEdge.md), 
[PickerMultiFace](VM.Managed.Picker.Core.PickerMultiFace.md)

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

### <a id="VM_Managed_Picker_Core_PickerMultiTopol__ctor_VM_Managed_ObjectBase_"></a> PickerMultiTopol\(ObjectBase\)

Initializes a new instance of the <xref href="VM.Managed.Picker.Core.PickerMultiTopol" data-throw-if-not-resolved="false"></xref> class

```csharp
public PickerMultiTopol(ObjectBase pParentObject)
```

#### Parameters

`pParentObject` [ObjectBase](VM.Managed.ObjectBase.md)

The parent of topol.

### <a id="VM_Managed_Picker_Core_PickerMultiTopol__ctor"></a> PickerMultiTopol\(\)

Initializes a new instance of the <xref href="VM.Managed.Picker.Core.PickerMultiTopol" data-throw-if-not-resolved="false"></xref> class

```csharp
public PickerMultiTopol()
```

## Fields

### <a id="VM_Managed_Picker_Core_PickerMultiTopol_m_bAllBeloinging"></a> m\_bAllBeloinging

```csharp
protected bool m_bAllBeloinging
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Picker_Core_PickerMultiTopol_m_bDecidedParent"></a> m\_bDecidedParent

```csharp
protected bool m_bDecidedParent
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Picker_Core_PickerMultiTopol_m_pParentObject"></a> m\_pParentObject

```csharp
protected ObjectBase m_pParentObject
```

#### Field Value

 [ObjectBase](VM.Managed.ObjectBase.md)

## Methods

### <a id="VM_Managed_Picker_Core_PickerMultiTopol_CheckResultWhenCreateTopology_VM_Managed_CAD_Topology_"></a> CheckResultWhenCreateTopology\(Topology\)

```csharp
protected bool CheckResultWhenCreateTopology(Topology topology)
```

#### Parameters

`topology` [Topology](VM.Managed.CAD.Topology.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Picker_Core_PickerMultiTopol_GetParentObject"></a> GetParentObject\(\)

```csharp
public ObjectBase GetParentObject()
```

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

### <a id="VM_Managed_Picker_Core_PickerMultiTopol_SetHighlight_System_Collections_Generic_List_System_UIntPtr__System_Boolean_System_Boolean_"></a> SetHighlight\(List<UIntPtr\>, bool, bool\)

```csharp
public override void SetHighlight(List<UIntPtr> lstTopologyProxy, bool bHighlight, bool bUpdate)
```

#### Parameters

`lstTopologyProxy` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\>

`bHighlight` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`bUpdate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Picker_Core_PickerMultiTopol_SetParentObject_VM_Managed_ObjectBase_"></a> SetParentObject\(ObjectBase\)

```csharp
public void SetParentObject(ObjectBase pParentObject)
```

#### Parameters

`pParentObject` [ObjectBase](VM.Managed.ObjectBase.md)

