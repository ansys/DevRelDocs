# Class AnalysisParameterDynamic

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the dynamic analysis parameter.

```csharp
public class AnalysisParameterDynamic
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisParameterDynamic](VM.Managed.AnalysisParameterDynamic.md)

#### Derived

[AnalysisParameterStatic](VM.Managed.AnalysisParameterStatic.md), 
[AnalysisParameterThermal](VM.Managed.AnalysisParameterThermal.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### AnalysisParameterDynamic\(\)

```csharp
public AnalysisParameterDynamic()
```

## Properties

### ConvergenceErrorTolerance

Gets or sets the convergence error tolerence.

```csharp
public double ConvergenceErrorTolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DurabilityResultFile

Gets or sets the durability result file.

```csharp
public string DurabilityResultFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### DurabilityStepSkipFactor

Gets or sets the durability step skip factor

```csharp
public uint DurabilityStepSkipFactor { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ErrorToleranceFactorForNRResidual

Gets or sets the error tolerance factor for NR residual.

```csharp
public double ErrorToleranceFactorForNRResidual { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### InitialStepSize

Gets or sets the size of the initial step.

```csharp
public double InitialStepSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LoadingConditionEndTime

Gets or sets the end time for loading condition.

```csharp
public double LoadingConditionEndTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LoadingConditionResultFile

Gets or sets the file for loading condition.

```csharp
public string LoadingConditionResultFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### LoadingConditionStartTime

Gets or sets the start time for loading condition.

```csharp
public double LoadingConditionStartTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### MaximumConvergence

Gets or sets the maximum convergence.

```csharp
public int MaximumConvergence { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaximumStepSize

Gets or sets the size of the maximum step.

```csharp
public double MaximumStepSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### MinimumStepSize

Gets or sets the size of the minimum step.

```csharp
public double MinimumStepSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### NumberOfRepeatedLoad

Gets or sets the No. of repeated load

```csharp
public uint NumberOfRepeatedLoad { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NumericalDampingValue

Gets or sets the numerical damping.

```csharp
public double NumericalDampingValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### OwnerLinkContainer

Gets the owner.

```csharp
public LinkContainer OwnerLinkContainer { set; }
```

#### Property Value

 LinkContainer

### StabilizationTime

Gets or sets the stabilization time.

```csharp
public double StabilizationTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### StepFactorValue

Gets or sets the step factor.

```csharp
public double StepFactorValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### UseErrorToleranceFactorForNRResidual

Gets or sets a value indicating whether error tolerance factor for NR residual use or not.

```csharp
public bool UseErrorToleranceFactorForNRResidual { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseStabilizationTime

Gets or sets the stabilization time use flag.

```csharp
public bool UseStabilizationTime { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### SetModified\(\)

Set modified flag.

```csharp
protected void SetModified()
```


