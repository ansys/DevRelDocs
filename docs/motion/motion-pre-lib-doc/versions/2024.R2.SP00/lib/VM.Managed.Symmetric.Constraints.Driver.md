# Class Driver

Namespace: [VM.Managed.Symmetric.Constraints](VM.Managed.Symmetric.Constraints.md)  
Assembly: VMSymCB.dll  

```csharp
public class Driver : ISymmetricBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Driver](VM.Managed.Symmetric.Constraints.Driver.md)

#### Derived

[DriverFunction](VM.Managed.Symmetric.Constraints.DriverFunction.md), 
[DriverInitialCondition](VM.Managed.Symmetric.Constraints.DriverInitialCondition.md), 
[DriverUserSubroutine](VM.Managed.Symmetric.Constraints.DriverUserSubroutine.md)

#### Implements

ISymmetricBuilder

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Driver\(\)

```csharp
public Driver()
```

## Methods

### Build\(object, SymmetricType, Plane, Document\)

Build the symmetric objects.

```csharp
public virtual object Build(object tool, SymmetricType sym_type, Plane sym_plane, Document docOwner)
```

#### Parameters

`tool` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

`sym_type` SymmetricType

Specifies type of symmetric.

`sym_plane` Plane

Plane of symmetric.

`docOwner` Document

update document.

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

The new object of symmetric.

### MakeObject\(object\)

```csharp
public object MakeObject(object tool)
```

#### Parameters

`tool` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)


