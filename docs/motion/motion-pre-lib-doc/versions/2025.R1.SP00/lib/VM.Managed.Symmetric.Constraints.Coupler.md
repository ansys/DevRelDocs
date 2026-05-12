#  Class Coupler

Namespace: [VM.Managed.Symmetric.Constraints](VM.Managed.Symmetric.Constraints.md)  
Assembly: VMSymCP.dll  

```csharp
public class Coupler : CouplerBase<Coupler, PropertyCoupler>, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<Coupler\> ← 
[CouplerBase<Coupler, PropertyCoupler\>](VM.Managed.Symmetric.Constraints.CouplerBase\-2.md) ← 
[Coupler](VM.Managed.Symmetric.Constraints.Coupler.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

[CouplerBase<Coupler, PropertyCoupler\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.Constraints.CouplerBase\-2.md\#VM\_Managed\_Symmetric\_Constraints\_CouplerBase\_2\_Update\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_), 
Named<Coupler\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Coupler\>.Initialize\(ISymmetricManager\), 
Named<Coupler\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<Coupler\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Constraints_Coupler__ctor"></a> Coupler\(\)

```csharp
public Coupler()
```

## Methods

### <a id="VM_Managed_Symmetric_Constraints_Coupler_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

