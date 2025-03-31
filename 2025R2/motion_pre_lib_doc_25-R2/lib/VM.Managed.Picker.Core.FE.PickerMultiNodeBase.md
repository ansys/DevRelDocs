# Class PickerMultiNodeBase

Namespace: [VM.Managed.Picker.Core.FE](VM.Managed.Picker.Core.FE.md)  
Assembly: VMFE.dll  

This class is to represent the multi picker of nodes.

```csharp
public abstract class PickerMultiNodeBase : PickerMulti
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
PickerBase ← 
PickerMulti ← 
[PickerMultiNodeBase](VM.Managed.Picker.Core.FE.PickerMultiNodeBase.md)

#### Derived

[PickerMultiNode](VM.Managed.Picker.Core.FE.PickerMultiNode.md), 
[PickerMultiPatch](VM.Managed.Picker.Core.FE.PickerMultiPatch.md)

#### Inherited Members

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

### PickerMultiNodeBase\(\)

```csharp
public PickerMultiNodeBase()
```

## Fields

### m\_pOwnerMesh

```csharp
protected Mesh m_pOwnerMesh
```

#### Field Value

 [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

## Properties

### ActiveMeshDocument

```csharp
public MeshDocument ActiveMeshDocument { get; }
```

#### Property Value

 [MeshDocument](VM.Managed.DAFUL.FE.MeshDocument.md)

## Methods

### GetMesh\(\)

Gets the mesh.

```csharp
protected IMesh* GetMesh()
```

#### Returns

 [IMesh](VM.DAFUL.FE.IMesh.md)\*

The mesh.

### GetNodeID\(uint\)

Gets the node ID.

```csharp
public uint GetNodeID(uint nNodeIndex)
```

#### Parameters

`nNodeIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The node index.

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The node ID.

### SetOwnerMesh\(UIntPtr\)

Sets the mesh proxy for highlight

```csharp
public void SetOwnerMesh(UIntPtr keyMesh)
```

#### Parameters

`keyMesh` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The mesh proxy.


