# Class SindaCyclicData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Sinda cyclic run data. Used in Case Set.

```csharp
[DataContract]
public class SindaCyclicData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SindaCyclicData](OpenTD.SindaCyclicData.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### SindaCyclicData\(\)

```csharp
public SindaCyclicData()
```

## Properties

### AngleCyc

```csharp
[DataMember]
public double AngleCyc { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### AngleCycExp

```csharp
[DataMember]
public ExpressionData AngleCycExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### ConvTolCyc

```csharp
[DataMember]
public double ConvTolCyc { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ConvTolCycExp

```csharp
[DataMember]
public ExpressionData ConvTolCycExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### CyclicMode

```csharp
[DataMember]
public int CyclicMode { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DampCyc

```csharp
[DataMember]
public double DampCyc { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DampCycExp

```csharp
[DataMember]
public ExpressionData DampCycExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### DisableOutputSave

```csharp
[DataMember]
public bool DisableOutputSave { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NloopsCyc

```csharp
[DataMember]
public int NloopsCyc { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NloopsCycExp

```csharp
[DataMember]
public ExpressionData NloopsCycExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### PerformFinalLoop

```csharp
[DataMember]
public int PerformFinalLoop { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PeriodCyc

```csharp
[DataMember]
public double PeriodCyc { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### PeriodCycExp

```csharp
[DataMember]
public ExpressionData PeriodCycExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

## See Also

[CaseSet](OpenTD.CaseSet.md)


