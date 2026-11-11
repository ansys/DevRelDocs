# Class PolylineVertex

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Describes a vertex and attached line segment in a Polyline.

```csharp
[MessagePackObject(true)]
public class PolylineVertex
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PolylineVertex](OpenTD.PolylineVertex.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### PolylineVertex\(double, double, double, double, double, int\)

```csharp
public PolylineVertex(double x, double y, double bulge = 0, double startWidth = 0, double endWidth = 0, int vertexIdentifier = 0)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

`y` [double](https://learn.microsoft.com/dotnet/api/system.double)

`bulge` [double](https://learn.microsoft.com/dotnet/api/system.double)

`startWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

`endWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

`vertexIdentifier` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PolylineVertex\(\)

```csharp
public PolylineVertex()
```

## Properties

### Bulge

Tangent of 1/4 of the included angle of the arc. Positive for arcs
that go counter-clockwise from the start point to end point. Straight
segments have a bulge of 0. Semicircles have a bulge of +/-1.

```csharp
public double Bulge { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### EndWidth

The ending width of the line segment, in-plane with the polyline.

```csharp
public DimensionalIfPositive<ModelLength> EndWidth { get; set; }
```

#### Property Value

 [DimensionalIfPositive](OpenTD.Dimension.DimensionalIfPositive\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### Location

```csharp
public Point2d Location { get; set; }
```

#### Property Value

 [Point2d](OpenTD.Point2d.md)

### StartWidth

The starting width of the line segment, in-plane with the polyline.

```csharp
public DimensionalIfPositive<ModelLength> StartWidth { get; set; }
```

#### Property Value

 [DimensionalIfPositive](OpenTD.Dimension.DimensionalIfPositive\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### VertexIdentifier

Added for completeness. Do not use in most cases.

```csharp
public int VertexIdentifier { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## See Also

[Polyline](OpenTD.Polyline.md)


