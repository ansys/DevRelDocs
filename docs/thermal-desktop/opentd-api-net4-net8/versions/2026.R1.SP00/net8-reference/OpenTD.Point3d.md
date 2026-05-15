# Class Point3d

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

A mathematical point in 3D.

```csharp
[MessagePackObject(true)]
public class Point3d
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Point3d](OpenTD.Point3d.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Point3d\(\)

Initializes a new instance of the <xref href="OpenTD.Point3d" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Point3d()
```

### Point3d\(Point3d\)

Copy constructor.

```csharp
public Point3d(Point3d p)
```

#### Parameters

`p` [Point3d](OpenTD.Point3d.md)

The Point3d to copy from.

### Point3d\(double, double, double\)

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

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### operator \+\(Point3d, Point3d\)

```csharp
public static Point3d operator +(Point3d firstOperand, Point3d secondOperand)
```

#### Parameters

`firstOperand` [Point3d](OpenTD.Point3d.md)

`secondOperand` [Point3d](OpenTD.Point3d.md)

#### Returns

 [Point3d](OpenTD.Point3d.md)

### operator \+\(Point3d, Vector3d\)

```csharp
public static Point3d operator +(Point3d firstOperand, Vector3d secondOperand)
```

#### Parameters

`firstOperand` [Point3d](OpenTD.Point3d.md)

`secondOperand` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Point3d](OpenTD.Point3d.md)

### operator ==\(Point3d, Point3d\)

```csharp
public static bool operator ==(Point3d first, Point3d second)
```

#### Parameters

`first` [Point3d](OpenTD.Point3d.md)

`second` [Point3d](OpenTD.Point3d.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \!=\(Point3d, Point3d\)

```csharp
public static bool operator !=(Point3d first, Point3d second)
```

#### Parameters

`first` [Point3d](OpenTD.Point3d.md)

`second` [Point3d](OpenTD.Point3d.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \-\(Point3d, Point3d\)

```csharp
public static Vector3d operator -(Point3d a, Point3d b)
```

#### Parameters

`a` [Point3d](OpenTD.Point3d.md)

`b` [Point3d](OpenTD.Point3d.md)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)


