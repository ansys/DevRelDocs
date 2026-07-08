# Class Matrix3d

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

A 4x4 matrix.

```csharp
[DataContract]
public class Matrix3d
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Matrix3d](OpenTD.Matrix3d.md)

#### Derived

[UCS](OpenTD.UCS.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### Matrix3d\(\)

```csharp
public Matrix3d()
```

### Matrix3d\(Matrix3d\)

```csharp
public Matrix3d(Matrix3d x)
```

#### Parameters

`x` [Matrix3d](OpenTD.Matrix3d.md)

## Properties

### entry

```csharp
[DataMember]
public double[][] entry { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\[\]

## Methods

### GetCoordSystem\(Point3d, Vector3d, Vector3d, Vector3d\)

```csharp
public void GetCoordSystem(Point3d origin, Vector3d x, Vector3d y, Vector3d z)
```

#### Parameters

`origin` [Point3d](OpenTD.Point3d.md)

`x` [Vector3d](OpenTD.Vector3d.md)

`y` [Vector3d](OpenTD.Vector3d.md)

`z` [Vector3d](OpenTD.Vector3d.md)

### GetOrigin\(\)

```csharp
public Point3d GetOrigin()
```

#### Returns

 [Point3d](OpenTD.Point3d.md)

### Inverse\(\)

```csharp
public Matrix3d Inverse()
```

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### Invert\(\)

```csharp
public Matrix3d Invert()
```

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### PostMultBy\(Matrix3d\)

```csharp
public Matrix3d PostMultBy(Matrix3d m)
```

#### Parameters

`m` [Matrix3d](OpenTD.Matrix3d.md)

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### SetCoordSystem\(Point3d, Vector3d, Vector3d, Vector3d\)

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

### SetFrom\(Matrix3d\)

```csharp
public Matrix3d SetFrom(Matrix3d m)
```

#### Parameters

`m` [Matrix3d](OpenTD.Matrix3d.md)

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### SetOrigin\(Point3d\)

```csharp
public Matrix3d SetOrigin(Point3d value)
```

#### Parameters

`value` [Point3d](OpenTD.Point3d.md)

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### SetToIdentity\(bool\)

```csharp
public Matrix3d SetToIdentity(bool noCheck = false)
```

#### Parameters

`noCheck` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### SetToRotX\(Dimensional<Angle\>\)

```csharp
public Matrix3d SetToRotX(Dimensional<Angle> ang)
```

#### Parameters

`ang` [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### SetToRotY\(Dimensional<Angle\>\)

```csharp
public Matrix3d SetToRotY(Dimensional<Angle> ang)
```

#### Parameters

`ang` [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### SetToRotZ\(Dimensional<Angle\>\)

```csharp
public Matrix3d SetToRotZ(Dimensional<Angle> ang)
```

#### Parameters

`ang` [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### SetToRotation\(Dimensional<Angle\>, Vector3d, Point3d\)

```csharp
public Matrix3d SetToRotation(Dimensional<Angle> ang, Vector3d _axis, Point3d center)
```

#### Parameters

`ang` [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

`_axis` [Vector3d](OpenTD.Vector3d.md)

`center` [Point3d](OpenTD.Point3d.md)

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### SetToZero\(bool\)

```csharp
public Matrix3d SetToZero(bool noCheck = false)
```

#### Parameters

`noCheck` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### operator \*\(Matrix3d, Vector3d\)

```csharp
public static Vector3d operator *(Matrix3d m, Vector3d v)
```

#### Parameters

`m` [Matrix3d](OpenTD.Matrix3d.md)

`v` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### operator \*\(Matrix3d, Point3d\)

```csharp
public static Point3d operator *(Matrix3d m, Point3d p)
```

#### Parameters

`m` [Matrix3d](OpenTD.Matrix3d.md)

`p` [Point3d](OpenTD.Point3d.md)

#### Returns

 [Point3d](OpenTD.Point3d.md)

### operator \*\(Matrix3d, Matrix3d\)

```csharp
public static Matrix3d operator *(Matrix3d a, Matrix3d b)
```

#### Parameters

`a` [Matrix3d](OpenTD.Matrix3d.md)

`b` [Matrix3d](OpenTD.Matrix3d.md)

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)


