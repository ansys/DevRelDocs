# Interface ITransformable

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the transformable object.

```csharp
public interface ITransformable
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### CanBeTransformed\(QueryTransform\)

Determines whether this instance [can be transformed] the specified query.

```csharp
void CanBeTransformed(QueryTransform query)
```

#### Parameters

`query` [QueryTransform](VM.Managed.QueryTransform.md)

The trnasform query.

### Transform\(TMatrix\)

Transforms the geometry through specified matrix.

```csharp
void Transform(TMatrix matT)
```

#### Parameters

`matT` [TMatrix](VM.Managed.TMatrix.md)

The matrix.


