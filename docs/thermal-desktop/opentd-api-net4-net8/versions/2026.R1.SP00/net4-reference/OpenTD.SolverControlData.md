# Class SolverControlData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Sinda solver (optimization) control constants. Used in Case Set.

```csharp
[DataContract]
public class SolverControlData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SolverControlData](OpenTD.SolverControlData.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### SolverControlData\(\)

```csharp
public SolverControlData()
```

## Properties

### Object

```csharp
[DataMember]
public string Object { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### achgo

```csharp
[DataMember]
public double achgo { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### achgoExp

```csharp
[DataMember]
public ExpressionData achgoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### adero

```csharp
[DataMember]
public double adero { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### aderoExp

```csharp
[DataMember]
public ExpressionData aderoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### aderr

```csharp
[DataMember]
public double aderr { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### aderrExp

```csharp
[DataMember]
public ExpressionData aderrExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### aerro

```csharp
[DataMember]
public double aerro { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### aerroExp

```csharp
[DataMember]
public ExpressionData aerroExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### aerrr

```csharp
[DataMember]
public double aerrr { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### aerrrExp

```csharp
[DataMember]
public ExpressionData aerrrExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### goal

```csharp
[DataMember]
public double goal { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### goalExp

```csharp
[DataMember]
public ExpressionData goalExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### goalType

```csharp
[DataMember]
public SolverControlData.GoalType goalType { get; set; }
```

#### Property Value

 [SolverControlData](OpenTD.SolverControlData.md).[GoalType](OpenTD.SolverControlData.GoalType.md)

### mdero

```csharp
[DataMember]
public int mdero { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### metho

```csharp
[DataMember]
public int metho { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### nconvo

```csharp
[DataMember]
public int nconvo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### nconvoExp

```csharp
[DataMember]
public ExpressionData nconvoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### nervus

```csharp
[DataMember]
public int nervus { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### newpro

```csharp
[DataMember]
public int newpro { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### newproExp

```csharp
[DataMember]
public ExpressionData newproExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### nloopo

```csharp
[DataMember]
public int nloopo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### nloopoExp

```csharp
[DataMember]
public ExpressionData nloopoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### nloopr

```csharp
[DataMember]
public int nloopr { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### nlooprExp

```csharp
[DataMember]
public ExpressionData nlooprExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### nseed

```csharp
[DataMember]
public int nseed { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### nseedExp

```csharp
[DataMember]
public ExpressionData nseedExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### nwrkio

```csharp
[DataMember]
public int nwrkio { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### nwrkioExp

```csharp
[DataMember]
public ExpressionData nwrkioExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### nwrkro

```csharp
[DataMember]
public double nwrkro { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### nwrkroExp

```csharp
[DataMember]
public ExpressionData nwrkroExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### pusho

```csharp
[DataMember]
public double pusho { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### pushoExp

```csharp
[DataMember]
public ExpressionData pushoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### rcacto

```csharp
[DataMember]
public double rcacto { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### rcactoExp

```csharp
[DataMember]
public ExpressionData rcactoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### rcerro

```csharp
[DataMember]
public double rcerro { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### rcerroExp

```csharp
[DataMember]
public ExpressionData rcerroExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### rchgo

```csharp
[DataMember]
public double rchgo { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### rchgoExp

```csharp
[DataMember]
public ExpressionData rchgoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### rcvio

```csharp
[DataMember]
public double rcvio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### rcvioExp

```csharp
[DataMember]
public ExpressionData rcvioExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### rdero

```csharp
[DataMember]
public double rdero { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### rderoExp

```csharp
[DataMember]
public ExpressionData rderoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### rderr

```csharp
[DataMember]
public double rderr { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### rderrExp

```csharp
[DataMember]
public ExpressionData rderrExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### rerro

```csharp
[DataMember]
public double rerro { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### rerroExp

```csharp
[DataMember]
public ExpressionData rerroExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### rerrr

```csharp
[DataMember]
public double rerrr { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### rerrrExp

```csharp
[DataMember]
public ExpressionData rerrrExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### useDL

```csharp
[DataMember]
public int useDL { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## See Also

[CaseSet](OpenTD.CaseSet.md)


