# Class Distance

Namespace: [VM.Managed.Symmetric.Constraints](VM.Managed.Symmetric.Constraints.md)  
Assembly: VMSymCP.dll  

```csharp
public class Distance : Constraint<Distance, PropertyDistance>, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<Distance\> ← 
Connector<Distance, PropertyDistance\> ← 
Constraint<Distance, PropertyDistance\> ← 
[Distance](VM.Managed.Symmetric.Constraints.Distance.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

Constraint<Distance, PropertyDistance\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Connector<Distance, PropertyDistance\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Distance\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<Distance\>.Initialize\(ISymmetricManager\), 
Named<Distance\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<Distance\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Distance\(\)

```csharp
public Distance()
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

### UpdateProperty\(PropertyDistance, PropertyDistance, SymmetricType, Plane, Document\)

```csharp
public static bool UpdateProperty(PropertyDistance toolProperty, PropertyDistance targetProperty, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`toolProperty` PropertyDistance

`targetProperty` PropertyDistance

`sym_type` SymmetricType

`sym_plane` Plane

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


