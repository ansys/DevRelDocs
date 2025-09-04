#  Class Reboundstop

Namespace: [VM.Managed.Symmetric.Car.Force](VM.Managed.Symmetric.Car.Force.md)  
Assembly: VMSymCar.dll  

```csharp
public class Reboundstop : ForceCar<Reboundstop, PropertyReboundstop>, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<Reboundstop\> ← 
[ForceCar<Reboundstop, PropertyReboundstop\>](VM.Managed.Symmetric.Car.Force.ForceCar\-2.md) ← 
[Reboundstop](VM.Managed.Symmetric.Car.Force.Reboundstop.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

[ForceCar<Reboundstop, PropertyReboundstop\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.Car.Force.ForceCar\-2.md\#VM\_Managed\_Symmetric\_Car\_Force\_ForceCar\_2\_Update\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_), 
Named<Reboundstop\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Reboundstop\>.Initialize\(ISymmetricManager\), 
Named<Reboundstop\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<Reboundstop\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Car_Force_Reboundstop__ctor"></a> Reboundstop\(\)

```csharp
public Reboundstop()
```

## Methods

### <a id="VM_Managed_Symmetric_Car_Force_Reboundstop_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

