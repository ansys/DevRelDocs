# Class SolidBodyTireSimple
<a id="VM_Managed_Symmetric_CAD_Tire_SolidBodyTireSimple"></a>

Namespace: [VM.Managed.Symmetric.CAD.Tire](VM.Managed.Symmetric.CAD.Tire.md)  
Assembly: VMSymTire.dll  

```csharp
public class SolidBodyTireSimple : SolidBodyGeometry, ISymmetricUpdater, ISymmetricMultiBuilder, ISymmetricUpdaterAfterAddDoc
```

#### Inheritance

object ← 
[SolidBodyGeometry](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/SolidBodyGeometry.cs) ← 
[SolidBodyTireSimple](VM.Managed.Symmetric.CAD.Tire.SolidBodyTireSimple.md)

#### Implements

ISymmetricUpdater, 
ISymmetricMultiBuilder, 
ISymmetricUpdaterAfterAddDoc

#### Inherited Members

[SolidBodyGeometry.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/SolidBodyGeometry.cs), 
[SolidBodyGeometry.Initialize\(ISymmetricManager\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/SolidBodyGeometry.cs), 
[SolidBodyGeometry.UpdateBuild\(Builder, Builder, SymmetricType, Plane, Document\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Symmetric/VMSymBase/SolidBodyGeometry.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_CAD_Tire_SolidBodyTireSimple__ctor"></a> SolidBodyTireSimple\(\)

```csharp
public SolidBodyTireSimple()
```

## Methods

### <a id="VM_Managed_Symmetric_CAD_Tire_SolidBodyTireSimple_Initialize_VM_Managed_Symmetric_ISymmetricManager_"></a> Initialize\(ISymmetricManager\)

Initialize the symmetric objects.

```csharp
public override bool Initialize(ISymmetricManager Manager)
```

#### Parameters

`Manager` ISymmetricManager

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Symmetric_CAD_Tire_SolidBodyTireSimple_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

### <a id="VM_Managed_Symmetric_CAD_Tire_SolidBodyTireSimple_UpdateBuild_VM_Managed_CAD_Builder_VM_Managed_CAD_Builder_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> UpdateBuild\(Builder, Builder, SymmetricType, Plane, Document\)

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

