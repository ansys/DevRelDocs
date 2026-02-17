# <a id="OpenTD_DimensionlessVector3d"></a> Class DimensionlessVector3d

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

A dimensionless 3D vector.

```csharp
public class DimensionlessVector3d
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_DimensionlessVector3d__ctor"></a> DimensionlessVector3d\(\)

Initializes a new instance of the <xref href="OpenTD.DimensionlessVector3d" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DimensionlessVector3d()
```

### <a id="OpenTD_DimensionlessVector3d__ctor_System_Double_System_Double_System_Double_"></a> DimensionlessVector3d\(double, double, double\)

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

### <a id="OpenTD_DimensionlessVector3d__ctor_OpenTD_DimensionlessVector3d_"></a> DimensionlessVector3d\(DimensionlessVector3d\)

Initializes a new instance of the <xref href="OpenTD.DimensionlessVector3d" data-throw-if-not-resolved="false"></xref> class.
Copy constructor.

```csharp
public DimensionlessVector3d(DimensionlessVector3d v)
```

#### Parameters

`v` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### <a id="OpenTD_DimensionlessVector3d__ctor_OpenTD_Vector3d_"></a> DimensionlessVector3d\(Vector3d\)

```csharp
public DimensionlessVector3d(Vector3d v)
```

#### Parameters

`v` [Vector3d](OpenTD.Vector3d.md)

## Properties

### <a id="OpenTD_DimensionlessVector3d_X"></a> X

```csharp
public double X { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_DimensionlessVector3d_Y"></a> Y

```csharp
public double Y { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_DimensionlessVector3d_Z"></a> Z

```csharp
public double Z { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="OpenTD_DimensionlessVector3d_CrossProduct_OpenTD_DimensionlessVector3d_"></a> CrossProduct\(DimensionlessVector3d\)

```csharp
public DimensionlessVector3d CrossProduct(DimensionlessVector3d vv)
```

#### Parameters

`vv` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### <a id="OpenTD_DimensionlessVector3d_DotProduct_OpenTD_DimensionlessVector3d_"></a> DotProduct\(DimensionlessVector3d\)

```csharp
public double DotProduct(DimensionlessVector3d v)
```

#### Parameters

`v` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_DimensionlessVector3d_Equals_System_Object_"></a> Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object to compare with the current object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the specified object  is equal to the current object; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="OpenTD_DimensionlessVector3d_GetHashCode"></a> GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### <a id="OpenTD_DimensionlessVector3d_Length"></a> Length\(\)

```csharp
public double Length()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_DimensionlessVector3d_LengthSqrd"></a> LengthSqrd\(\)

```csharp
public double LengthSqrd()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_DimensionlessVector3d_Mag"></a> Mag\(\)

```csharp
public double Mag()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_DimensionlessVector3d_Normal"></a> Normal\(\)

```csharp
public DimensionlessVector3d Normal()
```

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### <a id="OpenTD_DimensionlessVector3d_Normalize"></a> Normalize\(\)

```csharp
public void Normalize()
```

### <a id="OpenTD_DimensionlessVector3d_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

### <a id="OpenTD_DimensionlessVector3d_set_System_Double_System_Double_System_Double_"></a> set\(double, double, double\)

```csharp
public void set(double v1, double v2, double v3)
```

#### Parameters

`v1` [double](https://learn.microsoft.com/dotnet/api/system.double)

`v2` [double](https://learn.microsoft.com/dotnet/api/system.double)

`v3` [double](https://learn.microsoft.com/dotnet/api/system.double)

## Operators

### <a id="OpenTD_DimensionlessVector3d_op_Addition_OpenTD_DimensionlessVector3d_OpenTD_DimensionlessVector3d_"></a> operator \+\(DimensionlessVector3d, DimensionlessVector3d\)

```csharp
public static DimensionlessVector3d operator +(DimensionlessVector3d a, DimensionlessVector3d b)
```

#### Parameters

`a` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

`b` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### <a id="OpenTD_DimensionlessVector3d_op_Division_OpenTD_DimensionlessVector3d_System_Double_"></a> operator /\(DimensionlessVector3d, double\)

```csharp
public static DimensionlessVector3d operator /(DimensionlessVector3d v, double s)
```

#### Parameters

`v` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

`s` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### <a id="OpenTD_DimensionlessVector3d_op_Equality_OpenTD_DimensionlessVector3d_OpenTD_DimensionlessVector3d_"></a> operator ==\(DimensionlessVector3d, DimensionlessVector3d\)

```csharp
public static bool operator ==(DimensionlessVector3d first, DimensionlessVector3d second)
```

#### Parameters

`first` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

`second` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_DimensionlessVector3d_op_Inequality_OpenTD_DimensionlessVector3d_OpenTD_DimensionlessVector3d_"></a> operator \!=\(DimensionlessVector3d, DimensionlessVector3d\)

```csharp
public static bool operator !=(DimensionlessVector3d first, DimensionlessVector3d second)
```

#### Parameters

`first` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

`second` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_DimensionlessVector3d_op_Modulus_OpenTD_DimensionlessVector3d_OpenTD_DimensionlessVector3d_"></a> operator %\(DimensionlessVector3d, DimensionlessVector3d\)

```csharp
public static DimensionlessVector3d operator %(DimensionlessVector3d u, DimensionlessVector3d v)
```

#### Parameters

`u` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

`v` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### <a id="OpenTD_DimensionlessVector3d_op_Multiply_OpenTD_DimensionlessVector3d_OpenTD_DimensionlessVector3d_"></a> operator \*\(DimensionlessVector3d, DimensionlessVector3d\)

```csharp
public static double operator *(DimensionlessVector3d a, DimensionlessVector3d b)
```

#### Parameters

`a` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

`b` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_DimensionlessVector3d_op_Multiply_System_Double_OpenTD_DimensionlessVector3d_"></a> operator \*\(double, DimensionlessVector3d\)

```csharp
public static DimensionlessVector3d operator *(double s, DimensionlessVector3d v)
```

#### Parameters

`s` [double](https://learn.microsoft.com/dotnet/api/system.double)

`v` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### <a id="OpenTD_DimensionlessVector3d_op_Multiply_OpenTD_DimensionlessVector3d_System_Double_"></a> operator \*\(DimensionlessVector3d, double\)

```csharp
public static DimensionlessVector3d operator *(DimensionlessVector3d v, double s)
```

#### Parameters

`v` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

`s` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### <a id="OpenTD_DimensionlessVector3d_op_Subtraction_OpenTD_DimensionlessVector3d_OpenTD_DimensionlessVector3d_"></a> operator \-\(DimensionlessVector3d, DimensionlessVector3d\)

```csharp
public static DimensionlessVector3d operator -(DimensionlessVector3d a, DimensionlessVector3d b)
```

#### Parameters

`a` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

`b` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

### <a id="OpenTD_DimensionlessVector3d_op_UnaryNegation_OpenTD_DimensionlessVector3d_"></a> operator \-\(DimensionlessVector3d\)

```csharp
public static DimensionlessVector3d operator -(DimensionlessVector3d a)
```

#### Parameters

`a` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

#### Returns

 [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

