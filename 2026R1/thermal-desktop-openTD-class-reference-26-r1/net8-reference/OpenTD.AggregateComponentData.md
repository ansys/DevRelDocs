# Class AggregateComponentData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Represents one component/layer of an aggregate/laminate material.

```csharp
[MessagePackObject(true)]
public class AggregateComponentData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AggregateComponentData](OpenTD.AggregateComponentData.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### AggregateComponentData\(\)

```csharp
public AggregateComponentData()
```

## Properties

### Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### OrientationAngle

```csharp
public Dimensional<Angle> OrientationAngle { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### OrientationAngleExp

```csharp
public ExpressionData OrientationAngleExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Thickness

```csharp
public Dimensional<ModelLength> Thickness { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### ThicknessExp

```csharp
public ExpressionData ThicknessExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Weight

```csharp
public double Weight { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### WeightExp

```csharp
public ExpressionData WeightExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)


