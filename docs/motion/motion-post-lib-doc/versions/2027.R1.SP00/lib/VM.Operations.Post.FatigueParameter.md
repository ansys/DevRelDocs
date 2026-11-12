# Class FatigueParameter
<div align="right"><a href="/lib/VM.Operations.Post.FatigueParameter.md" download="VM.Operations.Post.FatigueParameter.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_FatigueParameter"></a>

Namespace: [VM.Operations.Post](VM.Operations.Post.md)  
Assembly: VM.Operations.Post.dll  

Represents the obsolete per-body fatigue parameter model.

```csharp
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
