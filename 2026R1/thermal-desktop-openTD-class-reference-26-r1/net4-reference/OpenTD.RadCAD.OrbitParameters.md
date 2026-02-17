# <a id="OpenTD_RadCAD_OrbitParameters"></a> Class OrbitParameters

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

Parameters used to define the shape and position of orbits.

```csharp
[DataContract]
public class OrbitParameters
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OrbitParameters](OpenTD.RadCAD.OrbitParameters.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_RadCAD_OrbitParameters__ctor"></a> OrbitParameters\(\)

```csharp
public OrbitParameters()
```

## Properties

### <a id="OpenTD_RadCAD_OrbitParameters_AltMax"></a> AltMax

```csharp
[DataMember]
public Dimensional<OrbitLength> AltMax { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### <a id="OpenTD_RadCAD_OrbitParameters_AltMaxExp"></a> AltMaxExp

```csharp
[DataMember]
public ExpressionData AltMaxExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_OrbitParameters_AltMin"></a> AltMin

```csharp
[DataMember]
public Dimensional<OrbitLength> AltMin { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[OrbitLength](OpenTD.Dimension.OrbitLength.md)\>

### <a id="OpenTD_RadCAD_OrbitParameters_AltMinExp"></a> AltMinExp

```csharp
[DataMember]
public ExpressionData AltMinExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_OrbitParameters_Eccen"></a> Eccen

```csharp
[DataMember]
public double Eccen { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_OrbitParameters_EccenExp"></a> EccenExp

```csharp
[DataMember]
public ExpressionData EccenExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_OrbitParameters_Inclination"></a> Inclination

```csharp
[DataMember]
public Dimensional<Angle> Inclination { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_OrbitParameters_InclinationExp"></a> InclinationExp

```csharp
[DataMember]
public ExpressionData InclinationExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_OrbitParameters_PeriapArgument"></a> PeriapArgument

```csharp
[DataMember]
public Dimensional<Angle> PeriapArgument { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_OrbitParameters_PeriapArgumentExp"></a> PeriapArgumentExp

```csharp
[DataMember]
public ExpressionData PeriapArgumentExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_OrbitParameters_Period"></a> Period

```csharp
[DataMember]
public Dimensional<Time> Period { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadCAD_OrbitParameters_PeriodExp"></a> PeriodExp

```csharp
[DataMember]
public ExpressionData PeriodExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_OrbitParameters_RaAscending"></a> RaAscending

```csharp
[DataMember]
public Dimensional<Angle> RaAscending { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_OrbitParameters_RaAscendingExp"></a> RaAscendingExp

```csharp
[DataMember]
public ExpressionData RaAscendingExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_OrbitParameters_RaPrime"></a> RaPrime

```csharp
[DataMember]
public Dimensional<Angle> RaPrime { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_OrbitParameters_RaPrimeExp"></a> RaPrimeExp

```csharp
[DataMember]
public ExpressionData RaPrimeExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_OrbitParameters_RaSun"></a> RaSun

```csharp
[DataMember]
public Dimensional<Angle> RaSun { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_OrbitParameters_RaSunExp"></a> RaSunExp

```csharp
[DataMember]
public ExpressionData RaSunExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_OrbitParameters_shape1"></a> shape1

```csharp
[DataMember]
public OrbitParameters.ShapeTypes shape1 { get; set; }
```

#### Property Value

 [OrbitParameters](OpenTD.RadCAD.OrbitParameters.md).[ShapeTypes](OpenTD.RadCAD.OrbitParameters.ShapeTypes.md)

### <a id="OpenTD_RadCAD_OrbitParameters_shape2"></a> shape2

```csharp
[DataMember]
public OrbitParameters.ShapeTypes shape2 { get; set; }
```

#### Property Value

 [OrbitParameters](OpenTD.RadCAD.OrbitParameters.md).[ShapeTypes](OpenTD.RadCAD.OrbitParameters.ShapeTypes.md)

## See Also

ITdDerived

