# Class PickedPoint

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public class PickedPoint : PickedResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PickedResult](VM.Managed.DAFUL.Builder.PickedResult.md) ← 
[PickedPoint](VM.Managed.DAFUL.Builder.PickedPoint.md)

#### Inherited Members

[PickedResult.Type](VM.Managed.DAFUL.Builder.PickedResult.md\#VM\_Managed\_DAFUL\_Builder\_PickedResult\_Type)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### PickedPoint\(\)

```csharp
public PickedPoint()
```

### PickedPoint\(PointBase\)

```csharp
public PickedPoint(PointBase pointBase)
```

#### Parameters

`pointBase` PointBase

## Properties

### Point

```csharp
public PointBase Point { get; set; }
```

#### Property Value

 PointBase

### Type

```csharp
public override PickedResult.PickedType Type { get; }
```

#### Property Value

 [PickedResult](VM.Managed.DAFUL.Builder.PickedResult.md).[PickedType](VM.Managed.DAFUL.Builder.PickedResult.PickedType.md)


