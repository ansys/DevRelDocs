# Class CoSolver

Namespace: [OpenTD.CoSolver](OpenTD.CoSolver.md)  
Assembly: OpenTD.CoSolver.dll  

Base class for communicating with a Sinda run via an SF_Pipe.

```csharp
public class CoSolver
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CoSolver](OpenTD.CoSolver.CoSolver.md)

#### Derived

[SF\_CoSolver](OpenTD.CoSolver.SF\_CoSolver.md), 
[TDSF\_CoSolver](OpenTD.CoSolver.TDSF\_CoSolver.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Fields

### pipeID

```csharp
protected string pipeID
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### sf\_pipe

```csharp
protected SF_Pipe sf_pipe
```

#### Field Value

 [SF\_Pipe](OpenTD.CoSolver.SF\_Pipe.md)

## Properties

### Converged

```csharp
public bool Converged { set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CouplingTimeStep

```csharp
public double CouplingTimeStep { set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### InitializeTimeoutMs

Determines how long in milliseconds that Initialize() will
try to connect to the Sinda run.

```csharp
public int InitializeTimeoutMs { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### Abort\(\)

```csharp
public void Abort()
```

### CloseSF\_Pipe\(\)

```csharp
protected void CloseSF_Pipe()
```

### Continue\(\)

Tells Sinda to proceed to the next step of the simulation.
Return values:
-1 - Sinda disconnected or error
0 - Sinda initial connection after call to OPENSF
99 - Sinda termination

11 - beginning of STEADY
12 - end of STEADY

1 - beginning of TRANSIENT
2 - at end of TRANSIENT time step
3 - at end of TRANSIENT

```csharp
public int Continue()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CreateSF\_Pipe\(\)

```csharp
protected void CreateSF_Pipe()
```

### DoStep\(\)

```csharp
public int DoStep()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetCondSequenceNumber\(string, int\)

```csharp
public long GetCondSequenceNumber(string submodel, int Id)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`Id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetLumpSequenceNumber\(string, int\)

```csharp
public long GetLumpSequenceNumber(string submodel, int Id)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`Id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetNodeSequenceNumber\(string, int\)

```csharp
public long GetNodeSequenceNumber(string submodel, int Id)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`Id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetPathSequenceNumber\(string, int\)

```csharp
public long GetPathSequenceNumber(string submodel, int Id)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`Id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetRegisterExpression\(string\)

```csharp
public string GetRegisterExpression(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetRegisterValue\(string\)

```csharp
public double GetRegisterValue(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetTieSequenceNumber\(string, int\)

```csharp
public long GetTieSequenceNumber(string submodel, int Id)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`Id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetValue\(string, int, string\)

```csharp
public double GetValue(string submodel, int Id, string type)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`Id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetValue\(int, string\)

```csharp
public double GetValue(int SequenceNumber, string type)
```

#### Parameters

`SequenceNumber` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetValue\(string\)

```csharp
public double GetValue(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Initialize\(\)

```csharp
public virtual void Initialize()
```

### SetRegisterExpression\(string, double\)

```csharp
public void SetRegisterExpression(string name, double value)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

### SetValue\(string, int, string, double\)

```csharp
public void SetValue(string submodel, int Id, string type, double value)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`Id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

### SetValue\(int, string, double\)

```csharp
public void SetValue(int SequenceNumber, string type, double value)
```

#### Parameters

`SequenceNumber` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

### SetValue\(string, double\)

```csharp
public void SetValue(string name, double value)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

### Set\_Q\_UDFA\(string, int, double\)

```csharp
public void Set_Q_UDFA(string name, int SequenceNumber, double value)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`SequenceNumber` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

### SetupExperiment\(\)

```csharp
public void SetupExperiment()
```


