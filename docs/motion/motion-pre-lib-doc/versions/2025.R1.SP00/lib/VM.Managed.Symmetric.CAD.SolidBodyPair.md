#  Class SolidBodyPair

Namespace: [VM.Managed.Symmetric.CAD](VM.Managed.Symmetric.CAD.md)  
Assembly: VMSymBase.dll  

```csharp
public class SolidBodyPair : SolidBodyMulti, ISymmetricMultiBuilder, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SolidBodyMulti](VM.Managed.Symmetric.CAD.SolidBodyMulti.md) ← 
[SolidBodyPair](VM.Managed.Symmetric.CAD.SolidBodyPair.md)

#### Derived

[SolidBodyIntersect](VM.Managed.Symmetric.CAD.SolidBodyIntersect.md), 
[SolidBodySubtract](VM.Managed.Symmetric.CAD.SolidBodySubtract.md)

#### Implements

ISymmetricMultiBuilder, 
ISymmetricUpdater

#### Inherited Members

[SolidBodyMulti.UpdateBuild\(Builder, Builder, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.CAD.SolidBodyMulti.md\#VM\_Managed\_Symmetric\_CAD\_SolidBodyMulti\_UpdateBuild\_VM\_Managed\_CAD\_Builder\_VM\_Managed\_CAD\_Builder\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_CAD_SolidBodyPair__ctor"></a> SolidBodyPair\(\)

```csharp
public SolidBodyPair()
```

## Methods

### <a id="VM_Managed_Symmetric_CAD_SolidBodyPair_Initialize_VM_Managed_Symmetric_ISymmetricManager_"></a> Initialize\(ISymmetricManager\)

Initialize the symmetric objects.

```csharp
public bool Initialize(ISymmetricManager simManager)
```

#### Parameters

`simManager` ISymmetricManager

The Symmetric Manager.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Symmetric_CAD_SolidBodyPair_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

Updates the symmetric objects.

```csharp
public virtual bool Update(ObjectBase tool, ObjectBase target, SymmetricType sym_type, Plane sym_plane, Document docOwner)
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

`docOwner` Document

update document.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Symmetric_CAD_SolidBodyPair_UpdateBuild_VM_Managed_CAD_Builder_VM_Managed_CAD_Builder_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> UpdateBuild\(Builder, Builder, SymmetricType, Plane, Document\)

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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

