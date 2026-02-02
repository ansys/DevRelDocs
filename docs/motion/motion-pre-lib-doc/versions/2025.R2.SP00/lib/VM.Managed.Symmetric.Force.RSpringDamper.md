#  Class RSpringDamper

Namespace: [VM.Managed.Symmetric.Force](VM.Managed.Symmetric.Force.md)  
Assembly: VMSymFB.dll  

```csharp
public class RSpringDamper : Force<RSpringDamper, PropertyRSpringDamper>, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<RSpringDamper\> ← 
Connector<RSpringDamper, PropertyRSpringDamper\> ← 
[Force<RSpringDamper, PropertyRSpringDamper\>](VM.Managed.Symmetric.Force.Force\-2.md) ← 
[RSpringDamper](VM.Managed.Symmetric.Force.RSpringDamper.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

[Force<RSpringDamper, PropertyRSpringDamper\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.Force.Force\-2.md\#VM\_Managed\_Symmetric\_Force\_Force\_2\_Update\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_), 
Connector<RSpringDamper, PropertyRSpringDamper\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<RSpringDamper\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<RSpringDamper\>.Initialize\(ISymmetricManager\), 
Named<RSpringDamper\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<RSpringDamper\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Force_RSpringDamper__ctor"></a> RSpringDamper\(\)

```csharp
public RSpringDamper()
```

## Methods

### <a id="VM_Managed_Symmetric_Force_RSpringDamper_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

