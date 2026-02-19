# Class TDSF\_CoSolver

Namespace: [OpenTD.CoSolver](OpenTD.CoSolver.md)  
Assembly: OpenTD.CoSolver.dll  

Use a TDSF_CoSolver to start a Sinda run via a TD Case Set
and communicate with it.
Implements the <xref href="OpenTD.CoSolver.CoSolver" data-throw-if-not-resolved="false"></xref>

```csharp
public class TDSF_CoSolver : CoSolver
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CoSolver](OpenTD.CoSolver.CoSolver.md) ← 
[TDSF\_CoSolver](OpenTD.CoSolver.TDSF\_CoSolver.md)

## Inherited Members

[CoSolver.Initialize\(\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_Initialize), 
[CoSolver.InitializeTimeoutMs](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_InitializeTimeoutMs), 
[CoSolver.SetupExperiment\(\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_SetupExperiment), 
[CoSolver.Abort\(\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_Abort), 
[CoSolver.DoStep\(\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_DoStep), 
[CoSolver.Continue\(\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_Continue), 
[CoSolver.CouplingTimeStep](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_CouplingTimeStep), 
[CoSolver.Converged](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_Converged), 
[CoSolver.GetRegisterExpression\(string\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_GetRegisterExpression\_System\_String\_), 
[CoSolver.GetRegisterValue\(string\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_GetRegisterValue\_System\_String\_), 
[CoSolver.SetRegisterExpression\(string, double\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_SetRegisterExpression\_System\_String\_System\_Double\_), 
[CoSolver.GetValue\(string, int, string\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_GetValue\_System\_String\_System\_Int32\_System\_String\_), 
[CoSolver.GetValue\(int, string\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_GetValue\_System\_Int32\_System\_String\_), 
[CoSolver.GetValue\(string\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_GetValue\_System\_String\_), 
[CoSolver.GetNodeSequenceNumber\(string, int\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_GetNodeSequenceNumber\_System\_String\_System\_Int32\_), 
[CoSolver.GetPathSequenceNumber\(string, int\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_GetPathSequenceNumber\_System\_String\_System\_Int32\_), 
[CoSolver.GetCondSequenceNumber\(string, int\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_GetCondSequenceNumber\_System\_String\_System\_Int32\_), 
[CoSolver.GetTieSequenceNumber\(string, int\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_GetTieSequenceNumber\_System\_String\_System\_Int32\_), 
[CoSolver.GetLumpSequenceNumber\(string, int\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_GetLumpSequenceNumber\_System\_String\_System\_Int32\_), 
[CoSolver.Set\_Q\_UDFA\(string, int, double\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_Set\_Q\_UDFA\_System\_String\_System\_Int32\_System\_Double\_), 
[CoSolver.SetValue\(string, int, string, double\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_SetValue\_System\_String\_System\_Int32\_System\_String\_System\_Double\_), 
[CoSolver.SetValue\(int, string, double\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_SetValue\_System\_Int32\_System\_String\_System\_Double\_), 
[CoSolver.SetValue\(string, double\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_SetValue\_System\_String\_System\_Double\_), 
[CoSolver.pipeID](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_pipeID), 
[CoSolver.sf\_pipe](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_sf\_pipe), 
[CoSolver.CreateSF\_Pipe\(\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_CreateSF\_Pipe), 
[CoSolver.CloseSF\_Pipe\(\)](OpenTD.CoSolver.CoSolver.md\#OpenTD\_CoSolver\_CoSolver\_CloseSF\_Pipe), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### TDSF\_CoSolver\(string, string, string\)

```csharp
public TDSF_CoSolver(string _ThermalDesktopDwgPath, string _caseSetName, string _caseSetGroupName = "")
```

#### Parameters

`_ThermalDesktopDwgPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`_caseSetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`_caseSetGroupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### TDSF\_CoSolver\(string, string, string, string\)

```csharp
public TDSF_CoSolver(string _ThermalDesktopDwgPath, string _caseSetName, string _pipeID, string _caseSetGroupName = "")
```

#### Parameters

`_ThermalDesktopDwgPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`_caseSetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`_pipeID` [string](https://learn.microsoft.com/dotnet/api/system.string)

`_caseSetGroupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Fields

### TD

```csharp
public ThermalDesktop TD
```

#### Field Value

 ThermalDesktop

## Methods

### Initialize\(\)

```csharp
public override void Initialize()
```

### runCaseSet\(\)

```csharp
public void runCaseSet()
```


