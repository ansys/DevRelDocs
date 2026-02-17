# <a id="OpenTD_SolverControlData"></a> Class SolverControlData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Sinda solver (optimization) control constants. Used in Case Set.

```csharp
[DataContract]
public class SolverControlData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SolverControlData](OpenTD.SolverControlData.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_SolverControlData__ctor"></a> SolverControlData\(\)

```csharp
public SolverControlData()
```

## Properties

### <a id="OpenTD_SolverControlData_Object"></a> Object

```csharp
[DataMember]
public string Object { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_SolverControlData_achgo"></a> achgo

```csharp
[DataMember]
public double achgo { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SolverControlData_achgoExp"></a> achgoExp

```csharp
[DataMember]
public ExpressionData achgoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_adero"></a> adero

```csharp
[DataMember]
public double adero { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SolverControlData_aderoExp"></a> aderoExp

```csharp
[DataMember]
public ExpressionData aderoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_aderr"></a> aderr

```csharp
[DataMember]
public double aderr { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SolverControlData_aderrExp"></a> aderrExp

```csharp
[DataMember]
public ExpressionData aderrExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_aerro"></a> aerro

```csharp
[DataMember]
public double aerro { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SolverControlData_aerroExp"></a> aerroExp

```csharp
[DataMember]
public ExpressionData aerroExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_aerrr"></a> aerrr

```csharp
[DataMember]
public double aerrr { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SolverControlData_aerrrExp"></a> aerrrExp

```csharp
[DataMember]
public ExpressionData aerrrExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_goal"></a> goal

```csharp
[DataMember]
public double goal { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SolverControlData_goalExp"></a> goalExp

```csharp
[DataMember]
public ExpressionData goalExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_goalType"></a> goalType

```csharp
[DataMember]
public SolverControlData.GoalType goalType { get; set; }
```

#### Property Value

 [SolverControlData](OpenTD.SolverControlData.md).[GoalType](OpenTD.SolverControlData.GoalType.md)

### <a id="OpenTD_SolverControlData_mdero"></a> mdero

```csharp
[DataMember]
public int mdero { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SolverControlData_metho"></a> metho

```csharp
[DataMember]
public int metho { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SolverControlData_nconvo"></a> nconvo

```csharp
[DataMember]
public int nconvo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SolverControlData_nconvoExp"></a> nconvoExp

```csharp
[DataMember]
public ExpressionData nconvoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_nervus"></a> nervus

```csharp
[DataMember]
public int nervus { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SolverControlData_newpro"></a> newpro

```csharp
[DataMember]
public int newpro { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SolverControlData_newproExp"></a> newproExp

```csharp
[DataMember]
public ExpressionData newproExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_nloopo"></a> nloopo

```csharp
[DataMember]
public int nloopo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SolverControlData_nloopoExp"></a> nloopoExp

```csharp
[DataMember]
public ExpressionData nloopoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_nloopr"></a> nloopr

```csharp
[DataMember]
public int nloopr { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SolverControlData_nlooprExp"></a> nlooprExp

```csharp
[DataMember]
public ExpressionData nlooprExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_nseed"></a> nseed

```csharp
[DataMember]
public int nseed { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SolverControlData_nseedExp"></a> nseedExp

```csharp
[DataMember]
public ExpressionData nseedExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_nwrkio"></a> nwrkio

```csharp
[DataMember]
public int nwrkio { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SolverControlData_nwrkioExp"></a> nwrkioExp

```csharp
[DataMember]
public ExpressionData nwrkioExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_nwrkro"></a> nwrkro

```csharp
[DataMember]
public double nwrkro { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SolverControlData_nwrkroExp"></a> nwrkroExp

```csharp
[DataMember]
public ExpressionData nwrkroExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_pusho"></a> pusho

```csharp
[DataMember]
public double pusho { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SolverControlData_pushoExp"></a> pushoExp

```csharp
[DataMember]
public ExpressionData pushoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_rcacto"></a> rcacto

```csharp
[DataMember]
public double rcacto { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SolverControlData_rcactoExp"></a> rcactoExp

```csharp
[DataMember]
public ExpressionData rcactoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_rcerro"></a> rcerro

```csharp
[DataMember]
public double rcerro { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SolverControlData_rcerroExp"></a> rcerroExp

```csharp
[DataMember]
public ExpressionData rcerroExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_rchgo"></a> rchgo

```csharp
[DataMember]
public double rchgo { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SolverControlData_rchgoExp"></a> rchgoExp

```csharp
[DataMember]
public ExpressionData rchgoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_rcvio"></a> rcvio

```csharp
[DataMember]
public double rcvio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SolverControlData_rcvioExp"></a> rcvioExp

```csharp
[DataMember]
public ExpressionData rcvioExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_rdero"></a> rdero

```csharp
[DataMember]
public double rdero { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SolverControlData_rderoExp"></a> rderoExp

```csharp
[DataMember]
public ExpressionData rderoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_rderr"></a> rderr

```csharp
[DataMember]
public double rderr { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SolverControlData_rderrExp"></a> rderrExp

```csharp
[DataMember]
public ExpressionData rderrExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_rerro"></a> rerro

```csharp
[DataMember]
public double rerro { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SolverControlData_rerroExp"></a> rerroExp

```csharp
[DataMember]
public ExpressionData rerroExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_rerrr"></a> rerrr

```csharp
[DataMember]
public double rerrr { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SolverControlData_rerrrExp"></a> rerrrExp

```csharp
[DataMember]
public ExpressionData rerrrExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SolverControlData_useDL"></a> useDL

```csharp
[DataMember]
public int useDL { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## See Also

[CaseSet](OpenTD.CaseSet.md)

