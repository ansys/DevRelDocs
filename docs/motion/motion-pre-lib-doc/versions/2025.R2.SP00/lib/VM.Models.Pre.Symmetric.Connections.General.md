#  Class General

Namespace: [VM.Models.Pre.Symmetric.Connections](VM.Models.Pre.Symmetric.Connections.md)  
Assembly: VM.Models.Pre.Symmetric.Connections.dll  

```csharp
public class General : Constraint<General, PropertyGeneral>, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<General\> ← 
Connector<General, PropertyGeneral\> ← 
Constraint<General, PropertyGeneral\> ← 
[General](VM.Models.Pre.Symmetric.Connections.General.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

Constraint<General, PropertyGeneral\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Connector<General, PropertyGeneral\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<General\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<General\>.Initialize\(ISymmetricManager\), 
Named<General\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<General\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_Symmetric_Connections_General__ctor"></a> General\(\)

```csharp
public General()
```

## Methods

### <a id="VM_Models_Pre_Symmetric_Connections_General_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

