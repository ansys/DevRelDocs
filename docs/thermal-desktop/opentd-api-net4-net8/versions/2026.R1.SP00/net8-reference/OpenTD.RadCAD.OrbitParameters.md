# Class OrbitParameters

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

Parameters used to define the shape and position of orbits.

```csharp
[MessagePackObject(true)]
public class OrbitParameters
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OrbitParameters](OpenTD.RadCAD.OrbitParameters.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### OrbitParameters\(\)

```csharp
public OrbitParameters()
```

## Properties

### AltMax

```csharp
public Dimensional<OrbitLength> AltMax { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### AltMaxExp

```csharp
public ExpressionData AltMaxExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### AltMin

```csharp
public Dimensional<OrbitLength> AltMin { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### AltMinExp

```csharp
public ExpressionData AltMinExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Eccen

```csharp
public double Eccen { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### EccenExp

```csharp
public ExpressionData EccenExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Inclination

```csharp
public Dimensional<Angle> Inclination { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### InclinationExp

```csharp
public ExpressionData InclinationExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### PeriapArgument

```csharp
public Dimensional<Angle> PeriapArgument { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### PeriapArgumentExp

```csharp
public ExpressionData PeriapArgumentExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Period

```csharp
public Dimensional<Time> Period { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### PeriodExp

```csharp
public ExpressionData PeriodExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### RaAscending

```csharp
public Dimensional<Angle> RaAscending { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### RaAscendingExp

```csharp
public ExpressionData RaAscendingExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### RaPrime

```csharp
public Dimensional<Angle> RaPrime { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### RaPrimeExp

```csharp
public ExpressionData RaPrimeExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### RaSun

```csharp
public Dimensional<Angle> RaSun { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### RaSunExp

```csharp
public ExpressionData RaSunExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### shape1

```csharp
public OrbitParameters.ShapeTypes shape1 { get; set; }
```

#### Property Value

 [OrbitParameters](OpenTD.RadCAD.OrbitParameters.md).[ShapeTypes](OpenTD.RadCAD.OrbitParameters.ShapeTypes.md)

### shape2

```csharp
public OrbitParameters.ShapeTypes shape2 { get; set; }
```

#### Property Value

 [OrbitParameters](OpenTD.RadCAD.OrbitParameters.md).[ShapeTypes](OpenTD.RadCAD.OrbitParameters.ShapeTypes.md)

## See Also

ITdDerived


