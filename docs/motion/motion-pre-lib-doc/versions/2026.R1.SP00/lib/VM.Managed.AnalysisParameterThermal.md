# Class AnalysisParameterThermal
<a id="VM_Managed_AnalysisParameterThermal"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the thermal analysis parameter.

```csharp
public class AnalysisParameterThermal : AnalysisParameterDynamic
```

#### Inheritance

object ← 
[AnalysisParameterDynamic](VM.Managed.AnalysisParameterDynamic.md) ← 
[AnalysisParameterThermal](VM.Managed.AnalysisParameterThermal.md)

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

### <a id="VM_Managed_AnalysisParameterThermal__ctor"></a> AnalysisParameterThermal\(\)

```csharp
public AnalysisParameterThermal()
```

## Properties

### <a id="VM_Managed_AnalysisParameterThermal_UseSteadyStateAnalysis"></a> UseSteadyStateAnalysis

Gets or sets a value indicating whether [steady state analysis].

```csharp
public bool UseSteadyStateAnalysis { get; set; }
```

#### Property Value

 bool

