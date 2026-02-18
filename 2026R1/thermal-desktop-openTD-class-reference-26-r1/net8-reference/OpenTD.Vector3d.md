# Class Vector3d

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

A 3D vector. Note that coordinates are dimensional and reflect the current
OpenTD WorkingUnits ModelLength.

```csharp
[MessagePackObject(true)]
public class Vector3d
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Vector3d](OpenTD.Vector3d.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Vector3d\(\)

Initializes a new instance of the <xref href="OpenTD.Vector3d" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Vector3d()
```

### Vector3d\(double, double, double\)

Initializes a new instance of the <xref href="OpenTD.Vector3d" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Vector3d(double x, double y, double z)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

The x coordinate.

`y` [double](https://learn.microsoft.com/dotnet/api/system.double)

The y coordinate.

`z` [double](https://learn.microsoft.com/dotnet/api/system.double)

The z coordinate.

### Vector3d\(Vector3d\)

Initializes a new instance of the <xref href="OpenTD.Vector3d" data-throw-if-not-resolved="false"></xref> class.
Copy constructor.

```csharp
public Vector3d(Vector3d v)
```

#### Parameters

`v` [Vector3d](OpenTD.Vector3d.md)

### Vector3d\(DimensionlessVector3d\)

```csharp
public Vector3d(DimensionlessVector3d v)
```

#### Parameters

`v` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

## Properties

### X

```csharp
public Dimensional<ModelLength> X { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### Y

```csharp
public Dimensional<ModelLength> Y { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### Z

```csharp
public Dimensional<ModelLength> Z { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

## Methods

### CrossProduct\(Vector3d\)

```csharp
public Vector3d CrossProduct(Vector3d vv)
```

#### Parameters

`vv` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### DotProduct\(Vector3d\)

```csharp
public double DotProduct(Vector3d v)
```

#### Parameters

`v` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object to compare with the current object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

[true](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool) if the specified object  is equal to the current object; otherwise, [false](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool).

### GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### Length\(\)

```csharp
public double Length()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LengthSqrd\(\)

```csharp
public double LengthSqrd()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Mag\(\)

```csharp
public double Mag()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Normal\(\)

```csharp
public Vector3d Normal()
```

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### Normalize\(\)

```csharp
public void Normalize()
```

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

### set\(double, double, double\)

```csharp
public void set(double v1, double v2, double v3)
```

#### Parameters

`v1` [double](https://learn.microsoft.com/dotnet/api/system.double)

`v2` [double](https://learn.microsoft.com/dotnet/api/system.double)

`v3` [double](https://learn.microsoft.com/dotnet/api/system.double)

## Operators

### operator \+\(Vector3d, Vector3d\)

```csharp
public static Vector3d operator +(Vector3d a, Vector3d b)
```

#### Parameters

`a` [Vector3d](OpenTD.Vector3d.md)

`b` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### operator /\(Vector3d, double\)

```csharp
public static Vector3d operator /(Vector3d v, double s)
```

#### Parameters

`v` [Vector3d](OpenTD.Vector3d.md)

`s` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### operator ==\(Vector3d, Vector3d\)

```csharp
public static bool operator ==(Vector3d first, Vector3d second)
```

#### Parameters

`first` [Vector3d](OpenTD.Vector3d.md)

`second` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \!=\(Vector3d, Vector3d\)

```csharp
public static bool operator !=(Vector3d first, Vector3d second)
```

#### Parameters

`first` [Vector3d](OpenTD.Vector3d.md)

`second` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator %\(Vector3d, Vector3d\)

```csharp
public static Vector3d operator %(Vector3d u, Vector3d v)
```

#### Parameters

`u` [Vector3d](OpenTD.Vector3d.md)

`v` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### operator \*\(Vector3d, Vector3d\)

```csharp
public static double operator *(Vector3d a, Vector3d b)
```

#### Parameters

`a` [Vector3d](OpenTD.Vector3d.md)

`b` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### operator \*\(double, Vector3d\)

```csharp
public static Vector3d operator *(double s, Vector3d v)
```

#### Parameters

`s` [double](https://learn.microsoft.com/dotnet/api/system.double)

`v` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### operator \*\(Vector3d, double\)

```csharp
public static Vector3d operator *(Vector3d v, double s)
```

#### Parameters

`v` [Vector3d](OpenTD.Vector3d.md)

`s` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### operator \-\(Vector3d, Vector3d\)

```csharp
public static Vector3d operator -(Vector3d a, Vector3d b)
```

#### Parameters

`a` [Vector3d](OpenTD.Vector3d.md)

`b` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### operator \-\(Vector3d\)

```csharp
public static Vector3d operator -(Vector3d a)
```

#### Parameters

`a` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)


