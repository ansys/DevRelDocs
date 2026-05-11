# Class ForceCar<T, TProp\>

Namespace: [VM.Managed.Symmetric.Car.Force](VM.Managed.Symmetric.Car.Force.md)  
Assembly: VMSymCar.dll  

```csharp
public class ForceCar<T, TProp> : Named<T>, ISymmetricUpdater where T : ForceCar<TProp>, new() where TProp : PropertyCarForce, new()
```

#### Type Parameters

`T` 

`TProp` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<T\> ← 
[ForceCar<T, TProp\>](VM.Managed.Symmetric.Car.Force.ForceCar\-2.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

Named<T\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<T\>.Initialize\(ISymmetricManager\), 
Named<T\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<T\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ForceCar\(\)

```csharp
public ForceCar()
```

## Methods

### Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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


