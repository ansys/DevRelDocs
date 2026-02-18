# Class SF\_CoSolver

Namespace: [OpenTD.CoSolver](OpenTD.CoSolver.md)  
Assembly: OpenTD.CoSolver.dll  

Use SF_CoSolver to start a Sinda run via an input text file
and communicate with it.
Implements the <xref href="OpenTD.CoSolver.CoSolver" data-throw-if-not-resolved="false"></xref>
Implements the <xref href="OpenTD.CoSolver.ISF_RunConfig" data-throw-if-not-resolved="false"></xref>

```csharp
public class SF_CoSolver : CoSolver
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CoSolver](OpenTD.CoSolver.CoSolver.md) ← 
[SF\_CoSolver](OpenTD.CoSolver.SF\_CoSolver.md)

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

### SF\_CoSolver\(string\)

```csharp
public SF_CoSolver(string inputFilePath)
```

#### Parameters

`inputFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### SF\_CoSolver\(string, string\)

```csharp
public SF_CoSolver(string inputFilePath, string communicationsPipeId)
```

#### Parameters

`inputFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`communicationsPipeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### AdditionalCompileOptions

Add additional commandline switches for the compiler here.
Example: '/warn:declarations'

```csharp
public string AdditionalCompileOptions { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### AdditionalLinkOptions

Add additional commandline switches for the linker here.
Example: 'MyAddOnLibrary.lib'

```csharp
public string AdditionalLinkOptions { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Cleanup

If true, Sinda will delete any temporary directories when finished.
Defaults to true.

```csharp
public bool Cleanup { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InputPathname

The Sinda input deck to run. Relative pathnames are evaluated from
the client program working directory.

```csharp
public string InputPathname { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### LicenseWait

```csharp
public bool LicenseWait { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PreprocessorOutputPathname

Preprocessor output pathname. Defaults to 'pp.out'. Relative pathnames are
evaluated from the InputPathname directory.

```csharp
public string PreprocessorOutputPathname { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SindaExePathname

By default, Run() will use the most-recent version of sinda.exe installed
on your system. To force it to use a specific version, set SindaExePathname
to the path to the sinda.exe you'd like to use. Relative paths are evaluated
from the client program working directory.

```csharp
public string SindaExePathname { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SindaFluintProcess

After calling Initalize(), use SindaFluintProcess to access the operating
system process running Sinda.

```csharp
public Process SindaFluintProcess { get; }
```

#### Property Value

 [Process](https://learn.microsoft.com/dotnet/api/system.diagnostics.process)

### StatusWindows

If true, Sinda shows status windows during the run. Defaults to false;

```csharp
public bool StatusWindows { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseOpenMP

```csharp
public bool UseOpenMP { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### Initialize\(\)

```csharp
public override void Initialize()
```

## See Also

[CoSolver](OpenTD.CoSolver.CoSolver.md), 
ISF\_RunConfig


