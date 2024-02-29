# <a id="VM_Models_Post_ITransformMatrix"></a> Interface ITransformMatrix

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface ITransformMatrix
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_ITransformMatrix_Orientation"></a> Orientation

```csharp
OMatrix Orientation { get; set; }
```

#### Property Value

 OMatrix

### <a id="VM_Models_Post_ITransformMatrix_Position"></a> Position

```csharp
Vector Position { get; set; }
```

#### Property Value

 Vector

### <a id="VM_Models_Post_ITransformMatrix_PositionAndOrientation"></a> PositionAndOrientation

```csharp
TMatrix PositionAndOrientation { get; }
```

#### Property Value

 TMatrix

## Methods

### <a id="VM_Models_Post_ITransformMatrix_GetRotationQuadAndTranslation_System_Double____System_Double____"></a> GetRotationQuadAndTranslation\(ref double\[\], ref double\[\]\)

```csharp
void GetRotationQuadAndTranslation(ref double[] rotationQuad, ref double[] translation)
```

#### Parameters

`rotationQuad` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`translation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_ITransformMatrix_GetTransformMatrix_VM_Models_Post_ITransformMatrix_"></a> GetTransformMatrix\(ITransformMatrix\)

```csharp
ITransformMatrix GetTransformMatrix(ITransformMatrix transformMatrix)
```

#### Parameters

`transformMatrix` [ITransformMatrix](VM.Models.Post.ITransformMatrix.md)

#### Returns

 [ITransformMatrix](VM.Models.Post.ITransformMatrix.md)

### <a id="VM_Models_Post_ITransformMatrix_RowCol_System_Int32_System_Int32_"></a> RowCol\(int, int\)

```csharp
double RowCol(int row, int col)
```

#### Parameters

`row` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`col` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

