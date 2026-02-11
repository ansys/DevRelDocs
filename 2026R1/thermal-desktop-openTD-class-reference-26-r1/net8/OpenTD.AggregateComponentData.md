# <a id="OpenTD_AggregateComponentData"></a> Class AggregateComponentData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Represents one component/layer of an aggregate/laminate material.

```csharp
public class AggregateComponentData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AggregateComponentData](OpenTD.AggregateComponentData.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_AggregateComponentData__ctor"></a> AggregateComponentData\(\)

```csharp
public AggregateComponentData()
```

## Properties

### <a id="OpenTD_AggregateComponentData_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_AggregateComponentData_OrientationAngle"></a> OrientationAngle

```csharp
public Dimensional<Angle> OrientationAngle { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_AggregateComponentData_OrientationAngleExp"></a> OrientationAngleExp

```csharp
public ExpressionData OrientationAngleExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_AggregateComponentData_Thickness"></a> Thickness

```csharp
public Dimensional<ModelLength> Thickness { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_AggregateComponentData_ThicknessExp"></a> ThicknessExp

```csharp
public ExpressionData ThicknessExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_AggregateComponentData_Weight"></a> Weight

```csharp
public double Weight { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_AggregateComponentData_WeightExp"></a> WeightExp

```csharp
public ExpressionData WeightExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

