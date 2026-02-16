# <a id="OpenTD_NurbsData"></a> Class NurbsData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Describes a Non-Uniform Rational B-Spline

```csharp
public class NurbsData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NurbsData](OpenTD.NurbsData.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_NurbsData__ctor"></a> NurbsData\(\)

```csharp
public NurbsData()
```

## Properties

### <a id="OpenTD_NurbsData_Closed"></a> Closed

```csharp
public bool Closed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_NurbsData_ControlPointTolerance"></a> ControlPointTolerance

```csharp
public double ControlPointTolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_NurbsData_ControlPoints"></a> ControlPoints

```csharp
public List<Point3d> ControlPoints { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Point3d](OpenTD.Point3d.md)\>

### <a id="OpenTD_NurbsData_Degree"></a> Degree

```csharp
public int Degree { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_NurbsData_KnotTolerance"></a> KnotTolerance

```csharp
public double KnotTolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_NurbsData_Knots"></a> Knots

```csharp
public List<double> Knots { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_NurbsData_Periodic"></a> Periodic

```csharp
public bool Periodic { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_NurbsData_Rational"></a> Rational

```csharp
public bool Rational { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_NurbsData_Weights"></a> Weights

```csharp
public List<double> Weights { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

## See Also

[Spline](OpenTD.Spline.md)

