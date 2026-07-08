#  Class TireBase<T\>

Namespace: [VM.Managed.Symmetric.Tire](VM.Managed.Symmetric.Tire.md)  
Assembly: VMSymTire.dll  

```csharp
public abstract class TireBase<T> : Force<T, PropertyTire>, ISymmetricUpdater, ISymmetricUpdaterAfterAddDoc where T : Force<PropertyTire>, new()
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<T\> ← 
Connector<T, PropertyTire\> ← 
Force<T, PropertyTire\> ← 
[TireBase<T\>](VM.Managed.Symmetric.Tire.TireBase\-1.md)

#### Implements

ISymmetricUpdater, 
ISymmetricUpdaterAfterAddDoc

#### Inherited Members

Force<T, PropertyTire\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Connector<T, PropertyTire\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<T\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<T\>.Initialize\(ISymmetricManager\), 
Named<T\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<T\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Tire_TireBase_1__ctor"></a> TireBase\(\)

```csharp
public TireBase()
```

## Methods

### <a id="VM_Managed_Symmetric_Tire_TireBase_1_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

