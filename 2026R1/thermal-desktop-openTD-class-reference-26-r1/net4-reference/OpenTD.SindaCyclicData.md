# <a id="OpenTD_SindaCyclicData"></a> Class SindaCyclicData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Sinda cyclic run data. Used in Case Set.

```csharp
[DataContract]
public class SindaCyclicData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SindaCyclicData](OpenTD.SindaCyclicData.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_SindaCyclicData__ctor"></a> SindaCyclicData\(\)

```csharp
public SindaCyclicData()
```

## Properties

### <a id="OpenTD_SindaCyclicData_AngleCyc"></a> AngleCyc

```csharp
[DataMember]
public double AngleCyc { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaCyclicData_AngleCycExp"></a> AngleCycExp

```csharp
[DataMember]
public ExpressionData AngleCycExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaCyclicData_ConvTolCyc"></a> ConvTolCyc

```csharp
[DataMember]
public double ConvTolCyc { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaCyclicData_ConvTolCycExp"></a> ConvTolCycExp

```csharp
[DataMember]
public ExpressionData ConvTolCycExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaCyclicData_CyclicMode"></a> CyclicMode

```csharp
[DataMember]
public int CyclicMode { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SindaCyclicData_DampCyc"></a> DampCyc

```csharp
[DataMember]
public double DampCyc { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaCyclicData_DampCycExp"></a> DampCycExp

```csharp
[DataMember]
public ExpressionData DampCycExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaCyclicData_DisableOutputSave"></a> DisableOutputSave

```csharp
[DataMember]
public bool DisableOutputSave { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_SindaCyclicData_NloopsCyc"></a> NloopsCyc

```csharp
[DataMember]
public int NloopsCyc { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SindaCyclicData_NloopsCycExp"></a> NloopsCycExp

```csharp
[DataMember]
public ExpressionData NloopsCycExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaCyclicData_PerformFinalLoop"></a> PerformFinalLoop

```csharp
[DataMember]
public int PerformFinalLoop { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SindaCyclicData_PeriodCyc"></a> PeriodCyc

```csharp
[DataMember]
public double PeriodCyc { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaCyclicData_PeriodCycExp"></a> PeriodCycExp

```csharp
[DataMember]
public ExpressionData PeriodCycExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

## See Also

[CaseSet](OpenTD.CaseSet.md)

