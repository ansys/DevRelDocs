# Class DimensionlessVector3d

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

A dimensionless 3D vector.

```csharp
[DataContract]
public class DimensionlessVector3d
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### DimensionlessVector3d\(\)

Initializes a new instance of the <xref href="OpenTD.DimensionlessVector3d" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DimensionlessVector3d()
```

### DimensionlessVector3d\(double, double, double\)

Initializes a new instance of the <xref href="OpenTD.DimensionlessVector3d" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DimensionlessVector3d(double x, double y, double z)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

The x coordinate.

`y` [double](https://learn.microsoft.com/dotnet/api/system.double)

The y coordinate.

`z` [double](https://learn.microsoft.com/dotnet/api/system.double)

The z coordinate.

### DimensionlessVector3d\(DimensionlessVector3d\)

Initializes a new instance of the <xref href="OpenTD.DimensionlessVector3d" data-throw-if-not-resolved="false"></xref> class.
Copy constructor.

```csharp
public DimensionlessVector3d(DimensionlessVector3d v)
```

#### Parameters

`v` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### DimensionlessVector3d\(Vector3d\)

```csharp
public DimensionlessVector3d(Vector3d v)
```

#### Parameters

`v` [Vector3d](OpenTD.Vector3d.md)

## Properties

### X

```csharp
[DataMember]
public double X { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Y

```csharp
[DataMember]
public double Y { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Z

```csharp
[DataMember]
public double Z { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### CrossProduct\(DimensionlessVector3d\)

```csharp
public DimensionlessVector3d CrossProduct(DimensionlessVector3d vv)
```

#### Parameters

`vv` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### DotProduct\(DimensionlessVector3d\)

```csharp
public double DotProduct(DimensionlessVector3d v)
```

#### Parameters

`v` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

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
public DimensionlessVector3d Normal()
```

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

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

### operator \+\(DimensionlessVector3d, DimensionlessVector3d\)

```csharp
public static DimensionlessVector3d operator +(DimensionlessVector3d a, DimensionlessVector3d b)
```

#### Parameters

`a` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

`b` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### operator /\(DimensionlessVector3d, double\)

```csharp
public static DimensionlessVector3d operator /(DimensionlessVector3d v, double s)
```

#### Parameters

`v` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

`s` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### operator ==\(DimensionlessVector3d, DimensionlessVector3d\)

```csharp
public static bool operator ==(DimensionlessVector3d first, DimensionlessVector3d second)
```

#### Parameters

`first` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

`second` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \!=\(DimensionlessVector3d, DimensionlessVector3d\)

```csharp
public static bool operator !=(DimensionlessVector3d first, DimensionlessVector3d second)
```

#### Parameters

`first` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

`second` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator %\(DimensionlessVector3d, DimensionlessVector3d\)

```csharp
public static DimensionlessVector3d operator %(DimensionlessVector3d u, DimensionlessVector3d v)
```

#### Parameters

`u` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

`v` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### operator \*\(DimensionlessVector3d, DimensionlessVector3d\)

```csharp
public static double operator *(DimensionlessVector3d a, DimensionlessVector3d b)
```

#### Parameters

`a` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

`b` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### operator \*\(double, DimensionlessVector3d\)

```csharp
public static DimensionlessVector3d operator *(double s, DimensionlessVector3d v)
```

#### Parameters

`s` [double](https://learn.microsoft.com/dotnet/api/system.double)

`v` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### operator \*\(DimensionlessVector3d, double\)

```csharp
public static DimensionlessVector3d operator *(DimensionlessVector3d v, double s)
```

#### Parameters

`v` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

`s` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### operator \-\(DimensionlessVector3d, DimensionlessVector3d\)

```csharp
public static DimensionlessVector3d operator -(DimensionlessVector3d a, DimensionlessVector3d b)
```

#### Parameters

`a` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

`b` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### operator \-\(DimensionlessVector3d\)

```csharp
public static DimensionlessVector3d operator -(DimensionlessVector3d a)
```

#### Parameters

`a` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)


