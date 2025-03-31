# Class Constraint<T, TProp\>

Namespace: [VM.Managed.Symmetric.Constraints](VM.Managed.Symmetric.Constraints.md)  
Assembly: VMSymCB.dll  

```csharp
public class Constraint<T, TProp> : Connector<T, TProp>, ISymmetricUpdater where T : Connector<TProp>, new() where TProp : PropertyConstraint, new()
```

#### Type Parameters

`T` 

`TProp` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<T\> ← 
Connector<T, TProp\> ← 
[Constraint<T, TProp\>](VM.Managed.Symmetric.Constraints.Constraint\-2.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

Connector<T, TProp\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<T\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<T\>.Initialize\(ISymmetricManager\), 
Named<T\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<T\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Constraint\(\)

```csharp
public Constraint()
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


