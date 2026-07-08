# Class PickedResult

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public abstract class PickedResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PickedResult](VM.Managed.DAFUL.Builder.PickedResult.md)

#### Derived

[PickedDirection](VM.Managed.DAFUL.Builder.PickedDirection.md), 
[PickedObject](VM.Managed.DAFUL.Builder.PickedObject.md), 
[PickedOrientation](VM.Managed.DAFUL.Builder.PickedOrientation.md), 
[PickedPoint](VM.Managed.DAFUL.Builder.PickedPoint.md), 
[PickedTransform](VM.Managed.DAFUL.Builder.PickedTransform.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### PickedResult\(\)

```csharp
protected PickedResult()
```

## Properties

### Type

```csharp
public abstract PickedResult.PickedType Type { get; }
```

#### Property Value

 [PickedResult](VM.Managed.DAFUL.Builder.PickedResult.md).[PickedType](VM.Managed.DAFUL.Builder.PickedResult.PickedType.md)

## Operators

### implicit operator PointBase\(PickedResult\)

```csharp
public static implicit operator PointBase(PickedResult obj)
```

#### Parameters

`obj` [PickedResult](VM.Managed.DAFUL.Builder.PickedResult.md)

#### Returns

 PointBase

### implicit operator DirectionBase\(PickedResult\)

```csharp
public static implicit operator DirectionBase(PickedResult obj)
```

#### Parameters

`obj` [PickedResult](VM.Managed.DAFUL.Builder.PickedResult.md)

#### Returns

 DirectionBase

### implicit operator TransformBase\(PickedResult\)

```csharp
public static implicit operator TransformBase(PickedResult obj)
```

#### Parameters

`obj` [PickedResult](VM.Managed.DAFUL.Builder.PickedResult.md)

#### Returns

 TransformBase


