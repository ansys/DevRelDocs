# Class Point2d

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

A mathematical point in 2D.

```csharp
[MessagePackObject(true)]
public class Point2d
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Point2d](OpenTD.Point2d.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Point2d\(\)

Initializes a new instance of the <xref href="OpenTD.Point2d" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Point2d()
```

### Point2d\(Point2d\)

Copy constructor.

```csharp
public Point2d(Point2d p)
```

#### Parameters

`p` [Point2d](OpenTD.Point2d.md)

The Point2d to copy from.

### Point2d\(double, double\)

Initializes a new instance of the <xref href="OpenTD.Point2d" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Point2d(double x, double y)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

The x value.

`y` [double](https://learn.microsoft.com/dotnet/api/system.double)

The y value.

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

### operator \+\(Point2d, Point2d\)

```csharp
public static Point2d operator +(Point2d firstOperand, Point2d secondOperand)
```

#### Parameters

`firstOperand` [Point2d](OpenTD.Point2d.md)

`secondOperand` [Point2d](OpenTD.Point2d.md)

#### Returns

 [Point2d](OpenTD.Point2d.md)

### operator \+\(Point2d, Vector3d\)

```csharp
public static Point2d operator +(Point2d firstOperand, Vector3d secondOperand)
```

#### Parameters

`firstOperand` [Point2d](OpenTD.Point2d.md)

`secondOperand` [Vector3d](OpenTD.Vector3d.md)

#### Returns

 [Point2d](OpenTD.Point2d.md)

### operator ==\(Point2d, Point2d\)

```csharp
public static bool operator ==(Point2d first, Point2d second)
```

#### Parameters

`first` [Point2d](OpenTD.Point2d.md)

`second` [Point2d](OpenTD.Point2d.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \!=\(Point2d, Point2d\)

```csharp
public static bool operator !=(Point2d first, Point2d second)
```

#### Parameters

`first` [Point2d](OpenTD.Point2d.md)

`second` [Point2d](OpenTD.Point2d.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \-\(Point2d, Point2d\)

```csharp
public static Vector3d operator -(Point2d a, Point2d b)
```

#### Parameters

`a` [Point2d](OpenTD.Point2d.md)

`b` [Point2d](OpenTD.Point2d.md)

#### Returns

 [Vector3d](OpenTD.Vector3d.md)


