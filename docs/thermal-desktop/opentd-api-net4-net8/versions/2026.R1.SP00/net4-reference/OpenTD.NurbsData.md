# Class NurbsData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Describes a Non-Uniform Rational B-Spline

```csharp
[DataContract]
public class NurbsData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NurbsData](OpenTD.NurbsData.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### NurbsData\(\)

```csharp
public NurbsData()
```

## Properties

### Closed

```csharp
[DataMember]
public bool Closed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ControlPointTolerance

```csharp
[DataMember]
public double ControlPointTolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ControlPoints

```csharp
[DataMember]
public List<Point3d> ControlPoints { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Point3d](OpenTD.Point3d.md)\>

### Degree

```csharp
[DataMember]
public int Degree { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### KnotTolerance

```csharp
[DataMember]
public double KnotTolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Knots

```csharp
[DataMember]
public List<double> Knots { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### Periodic

```csharp
[DataMember]
public bool Periodic { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Rational

```csharp
[DataMember]
public bool Rational { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Weights

```csharp
[DataMember]
public List<double> Weights { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

## See Also

[Spline](OpenTD.Spline.md)


