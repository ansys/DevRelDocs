# <a id="OpenTD_Vector3d"></a> Class Vector3d

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

A 3D vector. Note that coordinates are dimensional and reflect the current
OpenTD WorkingUnits ModelLength.

```csharp
[DataContract]
public class Vector3d
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Vector3d](OpenTD.Vector3d.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_Vector3d__ctor"></a> Vector3d\(\)

Initializes a new instance of the <xref href="OpenTD.Vector3d" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Vector3d()
```

### <a id="OpenTD_Vector3d__ctor_System_Double_System_Double_System_Double_"></a> Vector3d\(double, double, double\)

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

### <a id="OpenTD_Vector3d__ctor_OpenTD_Vector3d_"></a> Vector3d\(Vector3d\)

Initializes a new instance of the <xref href="OpenTD.Vector3d" data-throw-if-not-resolved="false"></xref> class.
Copy constructor.

```csharp
public Vector3d(Vector3d v)
```

#### Parameters

`v` [Vector3d](OpenTD.Vector3d.md)

### <a id="OpenTD_Vector3d__ctor_OpenTD_DimensionlessVector3d_"></a> Vector3d\(DimensionlessVector3d\)

```csharp
public Vector3d(DimensionlessVector3d v)
```

#### Parameters

`v` [DimensionlessVector3d](OpenTD.DimensionlessVector3d.md)

## Properties

### <a id="OpenTD_Vector3d_X"></a> X

```csharp
[DataMember]
public Dimensional<ModelLength> X { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_Vector3d_Y"></a> Y

```csharp
[DataMember]
public Dimensional<ModelLength> Y { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_Vector3d_Z"></a> Z

```csharp
[DataMember]
public Dimensional<ModelLength> Z { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

## Methods

### <a id="OpenTD_Vector3d_CrossProduct_OpenTD_Vector3d_"></a> CrossProduct\(Vector3d\)

```csharp
public Vector3d CrossProduct(Vector3d vv)
```

#### Parameters

`vv` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### <a id="OpenTD_Vector3d_DotProduct_OpenTD_Vector3d_"></a> DotProduct\(Vector3d\)

```csharp
public double DotProduct(Vector3d v)
```

#### Parameters

`v` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Vector3d_Equals_System_Object_"></a> Equals\(object\)

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

### <a id="OpenTD_Vector3d_GetHashCode"></a> GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### <a id="OpenTD_Vector3d_Length"></a> Length\(\)

```csharp
public double Length()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Vector3d_LengthSqrd"></a> LengthSqrd\(\)

```csharp
public double LengthSqrd()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Vector3d_Mag"></a> Mag\(\)

```csharp
public double Mag()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Vector3d_Normal"></a> Normal\(\)

```csharp
public Vector3d Normal()
```

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### <a id="OpenTD_Vector3d_Normalize"></a> Normalize\(\)

```csharp
public void Normalize()
```

### <a id="OpenTD_Vector3d_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

### <a id="OpenTD_Vector3d_set_System_Double_System_Double_System_Double_"></a> set\(double, double, double\)

```csharp
public void set(double v1, double v2, double v3)
```

#### Parameters

`v1` [double](https://learn.microsoft.com/dotnet/api/system.double)

`v2` [double](https://learn.microsoft.com/dotnet/api/system.double)

`v3` [double](https://learn.microsoft.com/dotnet/api/system.double)

## Operators

### <a id="OpenTD_Vector3d_op_Addition_OpenTD_Vector3d_OpenTD_Vector3d_"></a> operator \+\(Vector3d, Vector3d\)

```csharp
public static Vector3d operator +(Vector3d a, Vector3d b)
```

#### Parameters

`a` [Vector3d](OpenTD.Vector3d.md)

`b` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### <a id="OpenTD_Vector3d_op_Division_OpenTD_Vector3d_System_Double_"></a> operator /\(Vector3d, double\)

```csharp
public static Vector3d operator /(Vector3d v, double s)
```

#### Parameters

`v` [Vector3d](OpenTD.Vector3d.md)

`s` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### <a id="OpenTD_Vector3d_op_Equality_OpenTD_Vector3d_OpenTD_Vector3d_"></a> operator ==\(Vector3d, Vector3d\)

```csharp
public static bool operator ==(Vector3d first, Vector3d second)
```

#### Parameters

`first` [Vector3d](OpenTD.Vector3d.md)

`second` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Vector3d_op_Inequality_OpenTD_Vector3d_OpenTD_Vector3d_"></a> operator \!=\(Vector3d, Vector3d\)

```csharp
public static bool operator !=(Vector3d first, Vector3d second)
```

#### Parameters

`first` [Vector3d](OpenTD.Vector3d.md)

`second` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Vector3d_op_Modulus_OpenTD_Vector3d_OpenTD_Vector3d_"></a> operator %\(Vector3d, Vector3d\)

```csharp
public static Vector3d operator %(Vector3d u, Vector3d v)
```

#### Parameters

`u` [Vector3d](OpenTD.Vector3d.md)

`v` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### <a id="OpenTD_Vector3d_op_Multiply_OpenTD_Vector3d_OpenTD_Vector3d_"></a> operator \*\(Vector3d, Vector3d\)

```csharp
public static double operator *(Vector3d a, Vector3d b)
```

#### Parameters

`a` [Vector3d](OpenTD.Vector3d.md)

`b` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Vector3d_op_Multiply_System_Double_OpenTD_Vector3d_"></a> operator \*\(double, Vector3d\)

```csharp
public static Vector3d operator *(double s, Vector3d v)
```

#### Parameters

`s` [double](https://learn.microsoft.com/dotnet/api/system.double)

`v` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### <a id="OpenTD_Vector3d_op_Multiply_OpenTD_Vector3d_System_Double_"></a> operator \*\(Vector3d, double\)

```csharp
public static Vector3d operator *(Vector3d v, double s)
```

#### Parameters

`v` [Vector3d](OpenTD.Vector3d.md)

`s` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### <a id="OpenTD_Vector3d_op_Subtraction_OpenTD_Vector3d_OpenTD_Vector3d_"></a> operator \-\(Vector3d, Vector3d\)

```csharp
public static Vector3d operator -(Vector3d a, Vector3d b)
```

#### Parameters

`a` [Vector3d](OpenTD.Vector3d.md)

`b` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

### <a id="OpenTD_Vector3d_op_UnaryNegation_OpenTD_Vector3d_"></a> operator \-\(Vector3d\)

```csharp
public static Vector3d operator -(Vector3d a)
```

#### Parameters

`a` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

