# <a id="VM_Managed_Symmetric_Constraints_Perpendicular"></a> Class Perpendicular

Namespace: [VM.Managed.Symmetric.Constraints](VM.Managed.Symmetric.Constraints.md)  
Assembly: VMSymCP.dll  

```csharp
public class Perpendicular : Constraint<Perpendicular, PropertyPerpendicular>, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<Perpendicular\> ← 
Connector<Perpendicular, PropertyPerpendicular\> ← 
Constraint<Perpendicular, PropertyPerpendicular\> ← 
[Perpendicular](VM.Managed.Symmetric.Constraints.Perpendicular.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

Constraint<Perpendicular, PropertyPerpendicular\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Connector<Perpendicular, PropertyPerpendicular\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Perpendicular\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Perpendicular\>.Initialize\(ISymmetricManager\), 
Named<Perpendicular\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<Perpendicular\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Constraints_Perpendicular__ctor"></a> Perpendicular\(\)

```csharp
public Perpendicular()
```

## Methods

### <a id="VM_Managed_Symmetric_Constraints_Perpendicular_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

