# Class SolidBodyTriPlateSimple
<a id="VM_Managed_Symmetric_CAD_SolidBodyTriPlateSimple"></a>

Namespace: [VM.Managed.Symmetric.CAD](VM.Managed.Symmetric.CAD.md)  
Assembly: VMSymBase.dll  

```csharp
public class SolidBodyTriPlateSimple : SolidBodyGeometry, ISymmetricUpdater, ISymmetricMultiBuilder
```

#### Inheritance

object ← 
[SolidBodyGeometry](VM.Managed.Symmetric.CAD.SolidBodyGeometry.md) ← 
[SolidBodyTriPlateSimple](VM.Managed.Symmetric.CAD.SolidBodyTriPlateSimple.md)

#### Implements

ISymmetricUpdater, 
ISymmetricMultiBuilder

#### Inherited Members

[SolidBodyGeometry.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.CAD.SolidBodyGeometry.md\#VM\_Managed\_Symmetric\_CAD\_SolidBodyGeometry\_Update\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_), 
[SolidBodyGeometry.Initialize\(ISymmetricManager\)](VM.Managed.Symmetric.CAD.SolidBodyGeometry.md\#VM\_Managed\_Symmetric\_CAD\_SolidBodyGeometry\_Initialize\_VM\_Managed\_Symmetric\_ISymmetricManager\_), 
[SolidBodyGeometry.UpdateBuild\(Builder, Builder, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.CAD.SolidBodyGeometry.md\#VM\_Managed\_Symmetric\_CAD\_SolidBodyGeometry\_UpdateBuild\_VM\_Managed\_CAD\_Builder\_VM\_Managed\_CAD\_Builder\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_CAD_SolidBodyTriPlateSimple__ctor"></a> SolidBodyTriPlateSimple\(\)

```csharp
public SolidBodyTriPlateSimple()
```

## Methods

### <a id="VM_Managed_Symmetric_CAD_SolidBodyTriPlateSimple_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

Updates the symmetric objects.

```csharp
public override bool Update(ObjectBase tool, ObjectBase target, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`tool` ObjectBase

The reference object.

`target` ObjectBase

The target object.

`sym_type` SymmetricType

Specifies type of symmetric.

`sym_plane` Plane

Plane of symmetric.

`doc` Document

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Symmetric_CAD_SolidBodyTriPlateSimple_UpdateBuild_VM_Managed_CAD_Builder_VM_Managed_CAD_Builder_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> UpdateBuild\(Builder, Builder, SymmetricType, Plane, Document\)

Updates the symmetric objects.

```csharp
public override bool UpdateBuild(Builder tool, Builder target, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`tool` Builder

The reference object.

`target` Builder

The target object.

`sym_type` SymmetricType

Specifies type of symmetric.

`sym_plane` Plane

Plane of symmetric.

`doc` Document

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

