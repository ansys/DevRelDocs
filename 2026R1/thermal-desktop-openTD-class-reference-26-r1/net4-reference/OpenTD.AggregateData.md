# <a id="OpenTD_AggregateData"></a> Class AggregateData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Represents an aggregate or laminate material.

```csharp
[DataContract]
public class AggregateData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AggregateData](OpenTD.AggregateData.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_AggregateData__ctor"></a> AggregateData\(\)

```csharp
public AggregateData()
```

## Properties

### <a id="OpenTD_AggregateData_Components"></a> Components

```csharp
[DataMember]
public List<AggregateComponentData> Components { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[AggregateComponentData](OpenTD.AggregateComponentData.md)\>

### <a id="OpenTD_AggregateData_Theta"></a> Theta

```csharp
[DataMember]
public Dimensional<Angle> Theta { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_AggregateData_WeightType"></a> WeightType

```csharp
[DataMember]
public AggregateData.WeightTypes WeightType { get; set; }
```

#### Property Value

 [AggregateData](OpenTD.AggregateData.md).[WeightTypes](OpenTD.AggregateData.WeightTypes.md)

### <a id="OpenTD_AggregateData_kxp"></a> kxp

```csharp
[DataMember]
public double kxp { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_AggregateData_kxpExp"></a> kxpExp

```csharp
[DataMember]
public ExpressionData kxpExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_AggregateData_kyp"></a> kyp

```csharp
[DataMember]
public double kyp { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_AggregateData_kypExp"></a> kypExp

```csharp
[DataMember]
public ExpressionData kypExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_AggregateData_kzp"></a> kzp

```csharp
[DataMember]
public double kzp { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_AggregateData_kzpExp"></a> kzpExp

```csharp
[DataMember]
public ExpressionData kzpExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

