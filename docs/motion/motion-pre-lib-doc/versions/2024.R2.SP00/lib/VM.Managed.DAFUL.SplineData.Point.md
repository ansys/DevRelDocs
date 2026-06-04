# Struct SplineData.Point

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDSB.dll  

This base class is to represent the point in spline value.

```csharp
public struct SplineData.Point : IDataPoint
```

#### Implements

IDataPoint

## Constructors

### Point\(double, double\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SplineData.Point" data-throw-if-not-resolved="false"></xref> struct.

```csharp
public Point(double dx, double dy)
```

#### Parameters

`dx` [double](https://learn.microsoft.com/dotnet/api/system.double)

The dx.

`dy` [double](https://learn.microsoft.com/dotnet/api/system.double)

The dy.

## Properties

### X

Gets or sets the X value.

```csharp
public double X { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Y

Gets or sets the Y value.

```csharp
public double Y { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Operators

### implicit operator DataPoint\(Point\)

```csharp
public static implicit operator DataPoint(SplineData.Point point)
```

#### Parameters

`point` [SplineData](VM.Managed.DAFUL.SplineData.md).[Point](VM.Managed.DAFUL.SplineData.Point.md)

#### Returns

 DataPoint

### implicit operator Point\(DataPoint\)

```csharp
public static implicit operator SplineData.Point(DataPoint dataPoint)
```

#### Parameters

`dataPoint` DataPoint

#### Returns

 [SplineData](VM.Managed.DAFUL.SplineData.md).[Point](VM.Managed.DAFUL.SplineData.Point.md)

### implicit operator Point\(TwoPoint\)

```csharp
public static implicit operator SplineData.Point(SplineValue.TwoPoint twoPoint)
```

#### Parameters

`twoPoint` [SplineValue](VM.Managed.DAFUL.SplineValue.md).[TwoPoint](VM.Managed.DAFUL.SplineValue.TwoPoint.md)

#### Returns

 [SplineData](VM.Managed.DAFUL.SplineData.md).[Point](VM.Managed.DAFUL.SplineData.Point.md)


