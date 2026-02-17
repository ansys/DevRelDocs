# <a id="OpenTD_Matrix3d"></a> Class Matrix3d

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

A 4x4 matrix.

```csharp
[DataContract]
public class Matrix3d
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Matrix3d](OpenTD.Matrix3d.md)

#### Derived

[UCS](OpenTD.UCS.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_Matrix3d__ctor"></a> Matrix3d\(\)

```csharp
public Matrix3d()
```

### <a id="OpenTD_Matrix3d__ctor_OpenTD_Matrix3d_"></a> Matrix3d\(Matrix3d\)

```csharp
public Matrix3d(Matrix3d x)
```

#### Parameters

`x` [Matrix3d](OpenTD.Matrix3d.md)

## Properties

### <a id="OpenTD_Matrix3d_entry"></a> entry

```csharp
[DataMember]
public double[][] entry { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\[\]

## Methods

### <a id="OpenTD_Matrix3d_GetCoordSystem_OpenTD_Point3d_OpenTD_Vector3d_OpenTD_Vector3d_OpenTD_Vector3d_"></a> GetCoordSystem\(Point3d, Vector3d, Vector3d, Vector3d\)

```csharp
public void GetCoordSystem(Point3d origin, Vector3d x, Vector3d y, Vector3d z)
```

#### Parameters

`origin` [Point3d](OpenTD.Point3d.md)

`x` [Vector3d](OpenTD.Vector3d.md)

`y` [Vector3d](OpenTD.Vector3d.md)

`z` [Vector3d](OpenTD.Vector3d.md)

### <a id="OpenTD_Matrix3d_GetOrigin"></a> GetOrigin\(\)

```csharp
public Point3d GetOrigin()
```

#### Returns

 [Point3d](OpenTD.Point3d.md)

### <a id="OpenTD_Matrix3d_Inverse"></a> Inverse\(\)

```csharp
public Matrix3d Inverse()
```

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### <a id="OpenTD_Matrix3d_Invert"></a> Invert\(\)

```csharp
public Matrix3d Invert()
```

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### <a id="OpenTD_Matrix3d_PostMultBy_OpenTD_Matrix3d_"></a> PostMultBy\(Matrix3d\)

```csharp
public Matrix3d PostMultBy(Matrix3d m)
```

#### Parameters

`m` [Matrix3d](OpenTD.Matrix3d.md)

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### <a id="OpenTD_Matrix3d_SetCoordSystem_OpenTD_Point3d_OpenTD_Vector3d_OpenTD_Vector3d_OpenTD_Vector3d_"></a> SetCoordSystem\(Point3d, Vector3d, Vector3d, Vector3d\)

```csharp
public Matrix3d SetCoordSystem(Point3d origin, Vector3d x, Vector3d y, Vector3d z)
```

#### Parameters

`origin` [Point3d](OpenTD.Point3d.md)

`x` [Vector3d](OpenTD.Vector3d.md)

`y` [Vector3d](OpenTD.Vector3d.md)

`z` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### <a id="OpenTD_Matrix3d_SetFrom_OpenTD_Matrix3d_"></a> SetFrom\(Matrix3d\)

```csharp
public Matrix3d SetFrom(Matrix3d m)
```

#### Parameters

`m` [Matrix3d](OpenTD.Matrix3d.md)

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### <a id="OpenTD_Matrix3d_SetOrigin_OpenTD_Point3d_"></a> SetOrigin\(Point3d\)

```csharp
public Matrix3d SetOrigin(Point3d value)
```

#### Parameters

`value` [Point3d](OpenTD.Point3d.md)

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### <a id="OpenTD_Matrix3d_SetToIdentity_System_Boolean_"></a> SetToIdentity\(bool\)

```csharp
public Matrix3d SetToIdentity(bool noCheck = false)
```

#### Parameters

`noCheck` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### <a id="OpenTD_Matrix3d_SetToRotX_OpenTD_Dimension_Dimensional_OpenTD_Dimension_Angle__"></a> SetToRotX\(Dimensional<Angle\>\)

```csharp
public Matrix3d SetToRotX(Dimensional<Angle> ang)
```

#### Parameters

`ang` [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### <a id="OpenTD_Matrix3d_SetToRotY_OpenTD_Dimension_Dimensional_OpenTD_Dimension_Angle__"></a> SetToRotY\(Dimensional<Angle\>\)

```csharp
public Matrix3d SetToRotY(Dimensional<Angle> ang)
```

#### Parameters

`ang` [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### <a id="OpenTD_Matrix3d_SetToRotZ_OpenTD_Dimension_Dimensional_OpenTD_Dimension_Angle__"></a> SetToRotZ\(Dimensional<Angle\>\)

```csharp
public Matrix3d SetToRotZ(Dimensional<Angle> ang)
```

#### Parameters

`ang` [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### <a id="OpenTD_Matrix3d_SetToRotation_OpenTD_Dimension_Dimensional_OpenTD_Dimension_Angle__OpenTD_Vector3d_OpenTD_Point3d_"></a> SetToRotation\(Dimensional<Angle\>, Vector3d, Point3d\)

```csharp
public Matrix3d SetToRotation(Dimensional<Angle> ang, Vector3d _axis, Point3d center)
```

#### Parameters

`ang` [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

`_axis` [Vector3d](OpenTD.Vector3d.md)

`center` [Point3d](OpenTD.Point3d.md)

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### <a id="OpenTD_Matrix3d_SetToZero_System_Boolean_"></a> SetToZero\(bool\)

```csharp
public Matrix3d SetToZero(bool noCheck = false)
```

#### Parameters

`noCheck` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### <a id="OpenTD_Matrix3d_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### <a id="OpenTD_Matrix3d_op_Multiply_OpenTD_Matrix3d_OpenTD_Vector3d_"></a> operator \*\(Matrix3d, Vector3d\)

```csharp
public static Vector3d operator *(Matrix3d m, Vector3d v)
```

#### Parameters

`m` [Matrix3d](OpenTD.Matrix3d.md)

`v` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### <a id="OpenTD_Matrix3d_op_Multiply_OpenTD_Matrix3d_OpenTD_Point3d_"></a> operator \*\(Matrix3d, Point3d\)

```csharp
public static Point3d operator *(Matrix3d m, Point3d p)
```

#### Parameters

`m` [Matrix3d](OpenTD.Matrix3d.md)

`p` [Point3d](OpenTD.Point3d.md)

#### Returns

 [Point3d](OpenTD.Point3d.md)

### <a id="OpenTD_Matrix3d_op_Multiply_OpenTD_Matrix3d_OpenTD_Matrix3d_"></a> operator \*\(Matrix3d, Matrix3d\)

```csharp
public static Matrix3d operator *(Matrix3d a, Matrix3d b)
```

#### Parameters

`a` [Matrix3d](OpenTD.Matrix3d.md)

`b` [Matrix3d](OpenTD.Matrix3d.md)

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

