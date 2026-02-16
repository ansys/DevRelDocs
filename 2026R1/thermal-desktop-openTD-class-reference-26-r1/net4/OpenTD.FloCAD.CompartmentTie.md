# <a id="OpenTD_FloCAD_CompartmentTie"></a> Class CompartmentTie

Namespace: [OpenTD.FloCAD](OpenTD.FloCAD.md)  
Assembly: OpenTD.dll  

Used to describe ties to extra surfaces within a compartment, such as baffles.

```csharp
[DataContract]
public class CompartmentTie
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CompartmentTie](OpenTD.FloCAD.CompartmentTie.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_FloCAD_CompartmentTie__ctor"></a> CompartmentTie\(\)

```csharp
public CompartmentTie()
```

## Properties

### <a id="OpenTD_FloCAD_CompartmentTie_AttachedSurfaces"></a> AttachedSurfaces

```csharp
[DataMember]
public List<Connection> AttachedSurfaces { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

### <a id="OpenTD_FloCAD_CompartmentTie_CoolMult"></a> CoolMult

```csharp
[DataMember]
public double CoolMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_CompartmentTie_CoolMultExp"></a> CoolMultExp

```csharp
[DataMember]
public ExpressionData CoolMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_CompartmentTie_HeatMult"></a> HeatMult

```csharp
[DataMember]
public double HeatMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_CompartmentTie_HeatMultExp"></a> HeatMultExp

```csharp
[DataMember]
public ExpressionData HeatMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_CompartmentTie_LiqAugMult"></a> LiqAugMult

```csharp
[DataMember]
public double LiqAugMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_CompartmentTie_LiqAugMultExp"></a> LiqAugMultExp

```csharp
[DataMember]
public ExpressionData LiqAugMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_CompartmentTie_LiqDegMult"></a> LiqDegMult

```csharp
[DataMember]
public double LiqDegMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_CompartmentTie_LiqDegMultExp"></a> LiqDegMultExp

```csharp
[DataMember]
public ExpressionData LiqDegMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_CompartmentTie_OverallMult"></a> OverallMult

```csharp
[DataMember]
public double OverallMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_CompartmentTie_OverallMultExp"></a> OverallMultExp

```csharp
[DataMember]
public ExpressionData OverallMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_CompartmentTie_RegisterDesignator"></a> RegisterDesignator

```csharp
[DataMember]
public string RegisterDesignator { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_FloCAD_CompartmentTie_VapAugMult"></a> VapAugMult

```csharp
[DataMember]
public double VapAugMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_CompartmentTie_VapAugMultExp"></a> VapAugMultExp

```csharp
[DataMember]
public ExpressionData VapAugMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_FloCAD_CompartmentTie_VapDegMult"></a> VapDegMult

```csharp
[DataMember]
public double VapDegMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_FloCAD_CompartmentTie_VapDegMultExp"></a> VapDegMultExp

```csharp
[DataMember]
public ExpressionData VapDegMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

## See Also

[Compartment](OpenTD.FloCAD.Compartment.md)

