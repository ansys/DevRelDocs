# <a id="VM_Models_Post_VisualizationImpl_Component_Mat4D"></a> Class Mat4D

Namespace: [VM.Models.Post.VisualizationImpl.Component](VM.Models.Post.VisualizationImpl.Component.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
[DependencyResolve(typeof(ITransformMatrix))]
public class Mat4D : Mat4d, ITransformMatrix
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Mat4d ← 
[Mat4D](VM.Models.Post.VisualizationImpl.Component.Mat4D.md)

#### Implements

ITransformMatrix

#### Inherited Members

Mat4d.swigCMemOwn, 
Mat4d.getCPtr\(Mat4d\), 
Mat4d.Dispose\(\), 
Mat4d.ToString\(\), 
Mat4d.Equals\(object\), 
Mat4d.Equals\(Mat4d\), 
Mat4d.GetHashCode\(\), 
Mat4d.setIdentity\(\), 
Mat4d.setZero\(\), 
Mat4d.invert\(\), 
Mat4d.rowCol\(int, int\), 
Mat4d.setRowCol\(int, int, double\), 
Mat4d.fromTranslation\(Vec3d\), 
Mat4d.fromScaling\(Vec3d\), 
Mat4d.fromRotation\(Vec3d, double\), 
Mat4d.multiply\(Mat4d\), 
Mat4d.IsIdentity, 
Mat4d.IsZero

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Component_Mat4D__ctor"></a> Mat4D\(\)

```csharp
public Mat4D()
```

### <a id="VM_Models_Post_VisualizationImpl_Component_Mat4D__ctor_Ceetron_CeetronDesktopComponents_Mat4d_"></a> Mat4D\(Mat4d\)

```csharp
public Mat4D(Mat4d m)
```

#### Parameters

`m` Mat4d

## Properties

### <a id="VM_Models_Post_VisualizationImpl_Component_Mat4D_Orientation"></a> Orientation

```csharp
public OMatrix Orientation { get; set; }
```

#### Property Value

 OMatrix

### <a id="VM_Models_Post_VisualizationImpl_Component_Mat4D_Position"></a> Position

```csharp
public Vector Position { get; set; }
```

#### Property Value

 Vector

### <a id="VM_Models_Post_VisualizationImpl_Component_Mat4D_PositionAndOrientation"></a> PositionAndOrientation

```csharp
public TMatrix PositionAndOrientation { get; set; }
```

#### Property Value

 TMatrix

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Component_Mat4D_Equals_VM_Models_Post_ITransformMatrix_"></a> Equals\(ITransformMatrix\)

```csharp
public bool Equals(ITransformMatrix m)
```

#### Parameters

`m` ITransformMatrix

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Component_Mat4D_GetRotationQuadAndTranslation_System_Double____System_Double____"></a> GetRotationQuadAndTranslation\(ref double\[\], ref double\[\]\)

```csharp
public void GetRotationQuadAndTranslation(ref double[] rotationQuad, ref double[] translation)
```

#### Parameters

`rotationQuad` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`translation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Component_Mat4D_GetTransformMatrix_VM_Models_Post_ITransformMatrix_"></a> GetTransformMatrix\(ITransformMatrix\)

```csharp
public ITransformMatrix GetTransformMatrix(ITransformMatrix transformMatrix)
```

#### Parameters

`transformMatrix` ITransformMatrix

#### Returns

 ITransformMatrix

### <a id="VM_Models_Post_VisualizationImpl_Component_Mat4D_RowCol_System_Int32_System_Int32_"></a> RowCol\(int, int\)

```csharp
public double RowCol(int row, int col)
```

#### Parameters

`row` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`col` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_VisualizationImpl_Component_Mat4D_SetIdentity"></a> SetIdentity\(\)

```csharp
public void SetIdentity()
```

