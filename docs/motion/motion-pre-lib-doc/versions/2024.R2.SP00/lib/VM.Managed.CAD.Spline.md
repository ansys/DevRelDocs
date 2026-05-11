# Class Spline

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This class is to represent the spline.

```csharp
public class Spline
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Spline](VM.Managed.CAD.Spline.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Spline\(\)

```csharp
public Spline()
```

## Methods

### Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Dispose\(\)

```csharp
public override sealed void Dispose()
```

### \~Spline\(\)

```csharp
protected ~Spline()
```

### MakeSplineAndGetPoint\(Document3D, uint, Vector\[\]\)

```csharp
public Vector[] MakeSplineAndGetPoint(Document3D doc, uint nCount, Vector[] vecInputPt)
```

#### Parameters

`doc` [Document3D](VM.Managed.Document3D.md)

`nCount` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`vecInputPt` [Vector](VM.Managed.Vector.md)\[\]

#### Returns

 [Vector](VM.Managed.Vector.md)\[\]


