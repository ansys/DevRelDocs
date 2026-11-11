# Class NurbsData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Describes a Non-Uniform Rational B-Spline

```csharp
[MessagePackObject(true)]
public class NurbsData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NurbsData](OpenTD.NurbsData.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### NurbsData\(\)

```csharp
public NurbsData()
```

## Properties

### Closed

```csharp
public bool Closed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ControlPointTolerance

```csharp
public double ControlPointTolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ControlPoints

```csharp
public List<Point3d> ControlPoints { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Point3d](OpenTD.Point3d.md)\>

### Degree

```csharp
public int Degree { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### KnotTolerance

```csharp
public double KnotTolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Knots

```csharp
public List<double> Knots { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### Periodic

```csharp
public bool Periodic { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Rational

```csharp
public bool Rational { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Weights

```csharp
public List<double> Weights { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

## See Also

[Spline](OpenTD.Spline.md)


