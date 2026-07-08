#  Class AnalysisParameterStatic

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the static analysis parameter.

```csharp
public class AnalysisParameterStatic : AnalysisParameterDynamic
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisParameterDynamic](VM.Managed.AnalysisParameterDynamic.md) ← 
[AnalysisParameterStatic](VM.Managed.AnalysisParameterStatic.md)

#### Inherited Members

[AnalysisParameterDynamic.SetModified\(\)](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_SetModified), 
[AnalysisParameterDynamic.ConvergenceErrorTolerance](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_ConvergenceErrorTolerance), 
[AnalysisParameterDynamic.NumericalDampingValue](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_NumericalDampingValue), 
[AnalysisParameterDynamic.InitialStepSize](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_InitialStepSize), 
[AnalysisParameterDynamic.MaximumStepSize](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_MaximumStepSize), 
[AnalysisParameterDynamic.MinimumStepSize](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_MinimumStepSize), 
[AnalysisParameterDynamic.StepFactorValue](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_StepFactorValue), 
[AnalysisParameterDynamic.MaximumConvergence](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_MaximumConvergence), 
[AnalysisParameterDynamic.UseStabilizationTime](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_UseStabilizationTime), 
[AnalysisParameterDynamic.StabilizationTime](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_StabilizationTime), 
[AnalysisParameterDynamic.OwnerLinkContainer](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_OwnerLinkContainer), 
[AnalysisParameterDynamic.LoadingConditionResultFile](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_LoadingConditionResultFile), 
[AnalysisParameterDynamic.DurabilityResultFile](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_DurabilityResultFile), 
[AnalysisParameterDynamic.LoadingConditionStartTime](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_LoadingConditionStartTime), 
[AnalysisParameterDynamic.LoadingConditionEndTime](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_LoadingConditionEndTime), 
[AnalysisParameterDynamic.NumberOfRepeatedLoad](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_NumberOfRepeatedLoad), 
[AnalysisParameterDynamic.DurabilityStepSkipFactor](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_DurabilityStepSkipFactor), 
[AnalysisParameterDynamic.UseErrorToleranceFactorForNRResidual](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_UseErrorToleranceFactorForNRResidual), 
[AnalysisParameterDynamic.ErrorToleranceFactorForNRResidual](VM.Managed.AnalysisParameterDynamic.md\#VM\_Managed\_AnalysisParameterDynamic\_ErrorToleranceFactorForNRResidual)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_AnalysisParameterStatic__ctor"></a> AnalysisParameterStatic\(\)

```csharp
public AnalysisParameterStatic()
```

## Properties

### <a id="VM_Managed_AnalysisParameterStatic_MaximumInterGlobalLoop"></a> MaximumInterGlobalLoop

Gets or sets the maximum inter global loop.

```csharp
public int MaximumInterGlobalLoop { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_AnalysisParameterStatic_OutputFileFlag"></a> OutputFileFlag

Gets or sets a value indicating whether [output flag].

```csharp
public bool OutputFileFlag { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AnalysisParameterStatic_SkipInitialResult"></a> SkipInitialResult

```csharp
public bool SkipInitialResult { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AnalysisParameterStatic_TypeForSolving"></a> TypeForSolving

Gets or sets the analysis type.

```csharp
public AnalysisParameterStatic.SolvingType TypeForSolving { get; set; }
```

#### Property Value

 [AnalysisParameterStatic](VM.Managed.AnalysisParameterStatic.md).[SolvingType](VM.Managed.AnalysisParameterStatic.SolvingType.md)

### <a id="VM_Managed_AnalysisParameterStatic_TypeOfJacobianEval"></a> TypeOfJacobianEval

Gets or sets the type of the jacobian evaluation.

```csharp
public AnalysisParameterStatic.JacobianEvaluationType TypeOfJacobianEval { get; set; }
```

#### Property Value

 [AnalysisParameterStatic](VM.Managed.AnalysisParameterStatic.md).[JacobianEvaluationType](VM.Managed.AnalysisParameterStatic.JacobianEvaluationType.md)

### <a id="VM_Managed_AnalysisParameterStatic_UseLinearAnalysis"></a> UseLinearAnalysis

Gets or sets a value indicating whether [linear].

```csharp
public bool UseLinearAnalysis { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AnalysisParameterStatic_UseNonLinearAnalysisWithoutRigidMode"></a> UseNonLinearAnalysisWithoutRigidMode

Gets or sets a value indicating whether [without rigid mode].

```csharp
public bool UseNonLinearAnalysisWithoutRigidMode { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

