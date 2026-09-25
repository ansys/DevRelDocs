# Class FatigueParameter
<a id="VM_Operations_Post_FatigueParameter"></a>

Namespace: [VM.Operations.Post](VM.Operations.Post.md)  
Assembly: VM.Operations.Post.dll  

Represents the obsolete per-body fatigue parameter model.

```csharp
[Obsolete("This property is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the Targets property of the FEBody class instead.", true)]
public class FatigueParameter
```

## Remarks

This type is obsolete. Use [`Targets`](VM.ViewModels.Post.IDurabilityAnalysisParameter.Targets.md) to select target bodies and configure each target through [`IOperationsFEBody`](VM.Operations.Post.Interfaces.IOperationsFEBody.md) instead.

## Constructors

 [FatigueParameter\(\)](VM.Operations.Post.FatigueParameter.\-ctor.md\#VM\_Operations\_Post\_FatigueParameter\_\_ctor)

## Properties

 [AnalysisMethod](VM.Operations.Post.FatigueParameter.AnalysisMethod.md\#VM\_Operations\_Post\_FatigueParameter\_AnalysisMethod)

Gets or sets the legacy strain-life analysis method selected from [`AnalysisMethodEN`](VM.Models.Post.AnalysisMethodEN.md) for the legacy analysis path.

 [AnalysisType](VM.Operations.Post.FatigueParameter.AnalysisType.md\#VM\_Operations\_Post\_FatigueParameter\_AnalysisType)

Gets or sets the legacy fatigue method selected from [`FatigueAnalysisType`](VM.Models.Post.FatigueAnalysisType.md) for the legacy analysis path.

 [BodyName](VM.Operations.Post.FatigueParameter.BodyName.md\#VM\_Operations\_Post\_FatigueParameter\_BodyName)

Gets or sets the legacy body name used by the obsolete fatigue parameter model to find a finite-element body in the legacy analysis path.

 [MaterialName](VM.Operations.Post.FatigueParameter.MaterialName.md\#VM\_Operations\_Post\_FatigueParameter\_MaterialName)

Gets or sets the legacy material name used by the legacy analysis path.

 [MeanStressCorrection](VM.Operations.Post.FatigueParameter.MeanStressCorrection.md\#VM\_Operations\_Post\_FatigueParameter\_MeanStressCorrection)

Gets or sets the legacy mean-stress correction selected from [`MeanStressCorrection`](VM.Operations.Post.FatigueParameter.MeanStressCorrection.md) for the legacy analysis path.

 [PlasticityCorrection](VM.Operations.Post.FatigueParameter.PlasticityCorrection.md\#VM\_Operations\_Post\_FatigueParameter\_PlasticityCorrection)

Gets or sets the legacy plasticity correction selected from [`PlasticityCorrection`](VM.Operations.Post.FatigueParameter.PlasticityCorrection.md) for the legacy analysis path.

 [Scale](VM.Operations.Post.FatigueParameter.Scale.md\#VM\_Operations\_Post\_FatigueParameter\_Scale)

Gets or sets the legacy fatigue scale factor applied by the legacy analysis path.

 [StressStrainCombinationType](VM.Operations.Post.FatigueParameter.StressStrainCombinationType.md\#VM\_Operations\_Post\_FatigueParameter\_StressStrainCombinationType)

Gets or sets the legacy stress or strain combination selected from [`StressStrainCombinationType`](VM.Operations.Post.FatigueParameter.StressStrainCombinationType.md) for the legacy analysis path.
