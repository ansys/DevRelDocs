# Interface IOperationsFEBody
<a id="VM_Operations_Post_Interfaces_IOperationsFEBody"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides deformation, fatigue, property, and finite-element selection operations for a finite-element body.

```csharp
public interface IOperationsFEBody
```

## Properties

 [AlphaX](VM.Operations.Post.Interfaces.IOperationsFEBody.AlphaX.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFEBody\_AlphaX)

Gets or sets the non-negative X component of the deformation scale used for finite-element result display.

 [AlphaY](VM.Operations.Post.Interfaces.IOperationsFEBody.AlphaY.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFEBody\_AlphaY)

Gets or sets the non-negative Y component of the deformation scale used for finite-element result display.

 [AlphaZ](VM.Operations.Post.Interfaces.IOperationsFEBody.AlphaZ.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFEBody\_AlphaZ)

Gets or sets the non-negative Z component of the deformation scale used for finite-element result display.

 [AnalysisMethodEN](VM.Operations.Post.Interfaces.IOperationsFEBody.AnalysisMethodEN.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFEBody\_AnalysisMethodEN)

Gets or sets the mean-stress method selected from [`AnalysisMethodEN`](VM.Models.Post.AnalysisMethodEN.md) for strain-life fatigue analysis.

 [AnalysisType](VM.Operations.Post.Interfaces.IOperationsFEBody.AnalysisType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFEBody\_AnalysisType)

Gets or sets the fatigue method selected from [`FatigueAnalysisType`](VM.Models.Post.FatigueAnalysisType.md) for finite-element durability analysis.

 [IsDeformationSuppressed](VM.Operations.Post.Interfaces.IOperationsFEBody.IsDeformationSuppressed.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFEBody\_IsDeformationSuppressed)

Gets or sets whether result deformation is excluded from node transformations for the finite-element body. `true` uses rigid-body transformations; `false` includes available result deformation.

 [Material](VM.Operations.Post.Interfaces.IOperationsFEBody.Material.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFEBody\_Material)

Gets or sets `IOperationMaterial` associated with the finite-element body, or `null` when no material is available.

 [MeanStressCorrection](VM.Operations.Post.Interfaces.IOperationsFEBody.MeanStressCorrection.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFEBody\_MeanStressCorrection)

Gets or sets the correction method selected from [`MeanStressCorrection`](VM.Models.Post.MeanStressCorrection.md) for stress-life fatigue analysis.

 [PlasticityCorrection](VM.Operations.Post.Interfaces.IOperationsFEBody.PlasticityCorrection.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFEBody\_PlasticityCorrection)

Gets or sets the correction method selected from [`PlasticityCorrection`](VM.Models.Post.PlasticityCorrection.md) for strain-life fatigue analysis.

 [Properties](VM.Operations.Post.Interfaces.IOperationsFEBody.Properties.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFEBody\_Properties)

Gets the read-only collection of finite-element property entries associated with the finite-element body.

 [Scale](VM.Operations.Post.Interfaces.IOperationsFEBody.Scale.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFEBody\_Scale)

Gets or sets the fatigue scale factor stored with the fatigue parameters. The default value is `1.0`.

 [ShellResult](VM.Operations.Post.Interfaces.IOperationsFEBody.ShellResult.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFEBody\_ShellResult)

Gets or sets the shell direction selected from [`ShellDirectionType`](VM.Models.Post.ShellDirectionType.md) for fatigue result extraction.

 [StressStrainCombination](VM.Operations.Post.Interfaces.IOperationsFEBody.StressStrainCombination.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFEBody\_StressStrainCombination)

Gets or sets the stress or strain combination selected from [`StressStrainCombinationType`](VM.Models.StressStrainCombinationType.md) for fatigue analysis.

## Methods

 [CreateElement\(int\)](VM.Operations.Post.Interfaces.IOperationsFEBody.CreateElement.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFEBody\_CreateElement\_System\_Int32\_)

Creates an element selection for an element ID in the current finite-element data.

 [CreateNode\(int, PlotDataType\)](VM.Operations.Post.Interfaces.IOperationsFEBody.CreateNode.md\#VM\_Operations\_Post\_Interfaces\_IOperationsFEBody\_CreateNode\_System\_Int32\_VM\_Models\_PlotDataType\_)

Creates a node selection for a node ID in the current finite-element data.
