# <a id="OpenTD_Quaternion"></a> Class Quaternion

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Describes a mathematical quaternion. Used, for example, to describe material
orientation in solid finite elements.

```csharp
public class Quaternion
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Quaternion](OpenTD.Quaternion.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Quaternion__ctor"></a> Quaternion\(\)

```csharp
public Quaternion()
```

### <a id="OpenTD_Quaternion__ctor_System_Double_"></a> Quaternion\(double\)

```csharp
public Quaternion(double _s)
```

#### Parameters

`_s` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Quaternion__ctor_System_Double_System_Double_System_Double_System_Double_"></a> Quaternion\(double, double, double, double\)

```csharp
public Quaternion(double _s, double x, double y, double z)
```

#### Parameters

`_s` [double](https://learn.microsoft.com/dotnet/api/system.double)

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

`y` [double](https://learn.microsoft.com/dotnet/api/system.double)

`z` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Quaternion__ctor_System_Double_OpenTD_Vector3d_"></a> Quaternion\(double, Vector3d\)

```csharp
public Quaternion(double _s, Vector3d _v)
```

#### Parameters

`_s` [double](https://learn.microsoft.com/dotnet/api/system.double)

`_v` [Vector3d](OpenTD.Vector3d.md)

### <a id="OpenTD_Quaternion__ctor_OpenTD_Quaternion_"></a> Quaternion\(Quaternion\)

```csharp
public Quaternion(Quaternion q)
```

#### Parameters

`q` [Quaternion](OpenTD.Quaternion.md)

### <a id="OpenTD_Quaternion__ctor_OpenTD_Matrix3d_"></a> Quaternion\(Matrix3d\)

```csharp
public Quaternion(Matrix3d m)
```

#### Parameters

`m` [Matrix3d](OpenTD.Matrix3d.md)

## Properties

### <a id="OpenTD_Quaternion_s"></a> s

```csharp
public Dimensional<ModelLength> s { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_Quaternion_v"></a> v

```csharp
public Vector3d v { get; set; }
```

#### Property Value

 [Vector3d](OpenTD.Vector3d.md)

## Methods

### <a id="OpenTD_Quaternion_Average_System_Collections_Generic_List_System_Double__System_Collections_Generic_List_OpenTD_Quaternion__"></a> Average\(List<double\>, List<Quaternion\>\)

```csharp
public static Quaternion Average(List<double> w, List<Quaternion> q)
```

#### Parameters

`w` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

`q` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Quaternion](OpenTD.Quaternion.md)\>

#### Returns

 [Quaternion](OpenTD.Quaternion.md)

### <a id="OpenTD_Quaternion_Conjugate"></a> Conjugate\(\)

```csharp
public Quaternion Conjugate()
```

#### Returns

 [Quaternion](OpenTD.Quaternion.md)

### <a id="OpenTD_Quaternion_DotProduct_OpenTD_Quaternion_"></a> DotProduct\(Quaternion\)

```csharp
public double DotProduct(Quaternion q)
```

#### Parameters

`q` [Quaternion](OpenTD.Quaternion.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Quaternion_Exp_OpenTD_Quaternion_"></a> Exp\(Quaternion\)

```csharp
public static Quaternion Exp(Quaternion q)
```

#### Parameters

`q` [Quaternion](OpenTD.Quaternion.md)

#### Returns

 [Quaternion](OpenTD.Quaternion.md)

### <a id="OpenTD_Quaternion_Inverse"></a> Inverse\(\)

```csharp
public Quaternion Inverse()
```

#### Returns

 [Quaternion](OpenTD.Quaternion.md)

### <a id="OpenTD_Quaternion_Ln_OpenTD_Quaternion_"></a> Ln\(Quaternion\)

```csharp
public static Quaternion Ln(Quaternion q)
```

#### Parameters

`q` [Quaternion](OpenTD.Quaternion.md)

#### Returns

 [Quaternion](OpenTD.Quaternion.md)

### <a id="OpenTD_Quaternion_Norm"></a> Norm\(\)

```csharp
public double Norm()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_Quaternion_Normalize"></a> Normalize\(\)

```csharp
public void Normalize()
```

### <a id="OpenTD_Quaternion_Pow_OpenTD_Quaternion_System_Double_"></a> Pow\(Quaternion, double\)

```csharp
public static Quaternion Pow(Quaternion b, double exponent)
```

#### Parameters

`b` [Quaternion](OpenTD.Quaternion.md)

`exponent` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [Quaternion](OpenTD.Quaternion.md)

### <a id="OpenTD_Quaternion_Slerp_OpenTD_Quaternion_OpenTD_Quaternion_System_Double_"></a> Slerp\(Quaternion, Quaternion, double\)

```csharp
public static Quaternion Slerp(Quaternion q0, Quaternion q1, double t)
```

#### Parameters

`q0` [Quaternion](OpenTD.Quaternion.md)

`q1` [Quaternion](OpenTD.Quaternion.md)

`t` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [Quaternion](OpenTD.Quaternion.md)

## Operators

### <a id="OpenTD_Quaternion_op_Addition_OpenTD_Quaternion_OpenTD_Quaternion_"></a> operator \+\(Quaternion, Quaternion\)

```csharp
public static Quaternion operator +(Quaternion p, Quaternion q)
```

#### Parameters

`p` [Quaternion](OpenTD.Quaternion.md)

`q` [Quaternion](OpenTD.Quaternion.md)

#### Returns

 [Quaternion](OpenTD.Quaternion.md)

### <a id="OpenTD_Quaternion_op_Division_OpenTD_Quaternion_System_Double_"></a> operator /\(Quaternion, double\)

```csharp
public static Quaternion operator /(Quaternion p, double r)
```

#### Parameters

`p` [Quaternion](OpenTD.Quaternion.md)

`r` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [Quaternion](OpenTD.Quaternion.md)

### <a id="OpenTD_Quaternion_op_Implicit_OpenTD_Quaternion__OpenTD_Matrix3d"></a> implicit operator Matrix3d\(Quaternion\)

```csharp
public static implicit operator Matrix3d(Quaternion q)
```

#### Parameters

`q` [Quaternion](OpenTD.Quaternion.md)

#### Returns

 [Matrix3d](OpenTD.Matrix3d.md)

### <a id="OpenTD_Quaternion_op_Multiply_OpenTD_Quaternion_OpenTD_Quaternion_"></a> operator \*\(Quaternion, Quaternion\)

```csharp
public static Quaternion operator *(Quaternion p, Quaternion q)
```

#### Parameters

`p` [Quaternion](OpenTD.Quaternion.md)

`q` [Quaternion](OpenTD.Quaternion.md)

#### Returns

 [Quaternion](OpenTD.Quaternion.md)

### <a id="OpenTD_Quaternion_op_Multiply_OpenTD_Quaternion_System_Double_"></a> operator \*\(Quaternion, double\)

```csharp
public static Quaternion operator *(Quaternion p, double r)
```

#### Parameters

`p` [Quaternion](OpenTD.Quaternion.md)

`r` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [Quaternion](OpenTD.Quaternion.md)

### <a id="OpenTD_Quaternion_op_Subtraction_OpenTD_Quaternion_OpenTD_Quaternion_"></a> operator \-\(Quaternion, Quaternion\)

```csharp
public static Quaternion operator -(Quaternion p, Quaternion q)
```

#### Parameters

`p` [Quaternion](OpenTD.Quaternion.md)

`q` [Quaternion](OpenTD.Quaternion.md)

#### Returns

 [Quaternion](OpenTD.Quaternion.md)

### <a id="OpenTD_Quaternion_op_UnaryNegation_OpenTD_Quaternion_"></a> operator \-\(Quaternion\)

```csharp
public static Quaternion operator -(Quaternion q)
```

#### Parameters

`q` [Quaternion](OpenTD.Quaternion.md)

#### Returns

 [Quaternion](OpenTD.Quaternion.md)

## See Also

[FEMeshImporter](OpenTD.RadCAD.FEMeshImporter.md)

