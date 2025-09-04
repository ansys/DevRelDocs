#  Class Parallel

Namespace: [VM.Managed.Symmetric.Constraints](VM.Managed.Symmetric.Constraints.md)  
Assembly: VMSymCP.dll  

```csharp
public class Parallel : Constraint<Parallel, PropertyParallel>, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<Parallel\> ← 
Connector<Parallel, PropertyParallel\> ← 
Constraint<Parallel, PropertyParallel\> ← 
[Parallel](VM.Managed.Symmetric.Constraints.Parallel.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

Constraint<Parallel, PropertyParallel\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Connector<Parallel, PropertyParallel\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Parallel\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Parallel\>.Initialize\(ISymmetricManager\), 
Named<Parallel\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<Parallel\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Constraints_Parallel__ctor"></a> Parallel\(\)

```csharp
public Parallel()
```

## Methods

### <a id="VM_Managed_Symmetric_Constraints_Parallel_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

