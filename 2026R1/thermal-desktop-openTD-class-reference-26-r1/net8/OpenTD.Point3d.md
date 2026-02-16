# <a id="OpenTD_Point3d"></a> Class Point3d

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

A mathematical point in 3D.

```csharp
public class Point3d
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Point3d](OpenTD.Point3d.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Point3d__ctor"></a> Point3d\(\)

Initializes a new instance of the <xref href="OpenTD.Point3d" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Point3d()
```

### <a id="OpenTD_Point3d__ctor_OpenTD_Point3d_"></a> Point3d\(Point3d\)

Copy constructor.

```csharp
public Point3d(Point3d p)
```

#### Parameters

`p` [Point3d](OpenTD.Point3d.md)

The Point3d to copy from.

### <a id="OpenTD_Point3d__ctor_System_Double_System_Double_System_Double_"></a> Point3d\(double, double, double\)

Initializes a new instance of the <xref href="OpenTD.Point3d" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Point3d(double x, double y, double z)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

The x value.

`y` [double](https://learn.microsoft.com/dotnet/api/system.double)

The y value.

`z` [double](https://learn.microsoft.com/dotnet/api/system.double)

The z value.

## Properties

### <a id="OpenTD_Point3d_X"></a> X

```csharp
public Dimensional<ModelLength> X { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_Point3d_Y"></a> Y

```csharp
public Dimensional<ModelLength> Y { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_Point3d_Z"></a> Z

```csharp
public Dimensional<ModelLength> Z { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

## Methods

### <a id="OpenTD_Point3d_Equals_System_Object_"></a> Equals\(object\)

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

### <a id="OpenTD_Point3d_GetHashCode"></a> GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### <a id="OpenTD_Point3d_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### <a id="OpenTD_Point3d_op_Addition_OpenTD_Point3d_OpenTD_Point3d_"></a> operator \+\(Point3d, Point3d\)

```csharp
public static Point3d operator +(Point3d firstOperand, Point3d secondOperand)
```

#### Parameters

`firstOperand` [Point3d](OpenTD.Point3d.md)

`secondOperand` [Point3d](OpenTD.Point3d.md)

#### Returns

 [Point3d](OpenTD.Point3d.md)

### <a id="OpenTD_Point3d_op_Addition_OpenTD_Point3d_OpenTD_Vector3d_"></a> operator \+\(Point3d, Vector3d\)

```csharp
public static Point3d operator +(Point3d firstOperand, Vector3d secondOperand)
```

#### Parameters

`firstOperand` [Point3d](OpenTD.Point3d.md)

`secondOperand` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Point3d](OpenTD.Point3d.md)

### <a id="OpenTD_Point3d_op_Equality_OpenTD_Point3d_OpenTD_Point3d_"></a> operator ==\(Point3d, Point3d\)

```csharp
public static bool operator ==(Point3d first, Point3d second)
```

#### Parameters

`first` [Point3d](OpenTD.Point3d.md)

`second` [Point3d](OpenTD.Point3d.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Point3d_op_Inequality_OpenTD_Point3d_OpenTD_Point3d_"></a> operator \!=\(Point3d, Point3d\)

```csharp
public static bool operator !=(Point3d first, Point3d second)
```

#### Parameters

`first` [Point3d](OpenTD.Point3d.md)

`second` [Point3d](OpenTD.Point3d.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Point3d_op_Subtraction_OpenTD_Point3d_OpenTD_Point3d_"></a> operator \-\(Point3d, Point3d\)

```csharp
public static Vector3d operator -(Point3d a, Point3d b)
```

#### Parameters

`a` [Point3d](OpenTD.Point3d.md)

`b` [Point3d](OpenTD.Point3d.md)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)

