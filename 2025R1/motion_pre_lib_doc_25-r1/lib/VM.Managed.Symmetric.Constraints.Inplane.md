#  Class Inplane

Namespace: [VM.Managed.Symmetric.Constraints](VM.Managed.Symmetric.Constraints.md)  
Assembly: VMSymCP.dll  

```csharp
public class Inplane : Constraint<Inplane, PropertyInplane>, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<Inplane\> ← 
Connector<Inplane, PropertyInplane\> ← 
Constraint<Inplane, PropertyInplane\> ← 
[Inplane](VM.Managed.Symmetric.Constraints.Inplane.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

Constraint<Inplane, PropertyInplane\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Connector<Inplane, PropertyInplane\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Inplane\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Inplane\>.Initialize\(ISymmetricManager\), 
Named<Inplane\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<Inplane\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Constraints_Inplane__ctor"></a> Inplane\(\)

```csharp
public Inplane()
```

## Methods

### <a id="VM_Managed_Symmetric_Constraints_Inplane_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

