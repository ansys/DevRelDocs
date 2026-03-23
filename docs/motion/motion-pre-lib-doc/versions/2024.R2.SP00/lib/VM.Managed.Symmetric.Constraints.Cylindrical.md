# Class Cylindrical

Namespace: [VM.Managed.Symmetric.Constraints](VM.Managed.Symmetric.Constraints.md)  
Assembly: VMSymCB.dll  

```csharp
public class Cylindrical : Constraint<Cylindrical, PropertyCylindrical>, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<Cylindrical\> ← 
Connector<Cylindrical, PropertyCylindrical\> ← 
[Constraint<Cylindrical, PropertyCylindrical\>](VM.Managed.Symmetric.Constraints.Constraint\-2.md) ← 
[Cylindrical](VM.Managed.Symmetric.Constraints.Cylindrical.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

[Constraint<Cylindrical, PropertyCylindrical\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.Constraints.Constraint\-2.md\#VM\_Managed\_Symmetric\_Constraints\_Constraint\_2\_Update\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_), 
Connector<Cylindrical, PropertyCylindrical\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Cylindrical\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Cylindrical\>.Initialize\(ISymmetricManager\), 
Named<Cylindrical\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<Cylindrical\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Cylindrical\(\)

```csharp
public Cylindrical()
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

### UpdateProperty\(PropertyCylindrical, PropertyCylindrical, SymmetricType, Plane, Document\)

```csharp
public static void UpdateProperty(PropertyCylindrical toolProperty, PropertyCylindrical targetProperty, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`toolProperty` PropertyCylindrical

`targetProperty` PropertyCylindrical

`sym_type` SymmetricType

`sym_plane` Plane

`doc` Document


