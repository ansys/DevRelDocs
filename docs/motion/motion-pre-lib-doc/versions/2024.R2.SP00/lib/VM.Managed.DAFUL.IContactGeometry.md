# Interface IContactGeometry

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This interface is to represent the contact geometry.

```csharp
public interface IContactGeometry
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### GeometryParentKey

Get the key of geometry parent

```csharp
ObjectBase.ConvertKey GeometryParentKey { get; }
```

#### Property Value

 ObjectBase.ConvertKey

### MaxPenetration

Gets or sets the maximum penetration.

```csharp
ExpressionValueVariable MaxPenetration { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ReferenceMarker

Gets the reference marker.

```csharp
InvisibleMarker ReferenceMarker { get; }
```

#### Property Value

 [InvisibleMarker](VM.Managed.DAFUL.InvisibleMarker.md)

### \_Geometry

Gets or sets the geometry.

```csharp
Linker<IContactable> _Geometry { get; set; }
```

#### Property Value

 Linker<[IContactable](VM.Managed.DAFUL.IContactable.md)\>

## Methods

### GetPointDirection\(ref VectorBase, ref VectorBase\)

Gets the point direction.

```csharp
bool GetPointDirection(ref VectorBase point, ref VectorBase direction)
```

#### Parameters

`point` VectorBase

The point.

`direction` VectorBase

The direction.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.


