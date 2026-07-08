#  Interface ITransformable

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

This interface is to represent the transformable object.

```csharp
public interface ITransformable
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Pre_ITransformable_CanBeTransformed_VM_Models_Pre_QueryTransform_"></a> CanBeTransformed\(QueryTransform\)

Determines whether this instance [can be transformed] the specified query.

```csharp
void CanBeTransformed(QueryTransform queryTransform)
```

#### Parameters

`queryTransform` [QueryTransform](VM.Models.Pre.QueryTransform.md)

The trnasform query.

### <a id="VM_Models_Pre_ITransformable_Transform_VM_TMatrix_"></a> Transform\(TMatrix\)

Transforms the geometry through specified matrix.

```csharp
void Transform(TMatrix matrix)
```

#### Parameters

`matrix` TMatrix

The matrix.

