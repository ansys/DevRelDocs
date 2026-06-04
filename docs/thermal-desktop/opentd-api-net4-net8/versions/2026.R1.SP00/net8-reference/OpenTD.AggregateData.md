# Class AggregateData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Represents an aggregate or laminate material.

```csharp
[MessagePackObject(true)]
public class AggregateData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AggregateData](OpenTD.AggregateData.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### AggregateData\(\)

```csharp
public AggregateData()
```

## Properties

### Components

```csharp
public List<AggregateComponentData> Components { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[AggregateComponentData](OpenTD.AggregateComponentData.md)\>

### Theta

```csharp
public Dimensional<Angle> Theta { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### WeightType

```csharp
public AggregateData.WeightTypes WeightType { get; set; }
```

#### Property Value

 [AggregateData](OpenTD.AggregateData.md).[WeightTypes](OpenTD.AggregateData.WeightTypes.md)

### kxp

```csharp
public double kxp { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### kxpExp

```csharp
public ExpressionData kxpExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### kyp

```csharp
public double kyp { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### kypExp

```csharp
public ExpressionData kypExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### kzp

```csharp
public double kzp { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### kzpExp

```csharp
public ExpressionData kzpExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)


