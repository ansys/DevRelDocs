#  Class Convel

Namespace: [VM.Managed.Symmetric.Constraints](VM.Managed.Symmetric.Constraints.md)  
Assembly: VMSymCP.dll  

```csharp
public class Convel : Constraint<Convel, PropertyConvel>, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<Convel\> ← 
Connector<Convel, PropertyConvel\> ← 
Constraint<Convel, PropertyConvel\> ← 
[Convel](VM.Managed.Symmetric.Constraints.Convel.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

Constraint<Convel, PropertyConvel\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Connector<Convel, PropertyConvel\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Convel\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Convel\>.Initialize\(ISymmetricManager\), 
Named<Convel\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<Convel\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Constraints_Convel__ctor"></a> Convel\(\)

```csharp
public Convel()
```

## Methods

### <a id="VM_Managed_Symmetric_Constraints_Convel_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

