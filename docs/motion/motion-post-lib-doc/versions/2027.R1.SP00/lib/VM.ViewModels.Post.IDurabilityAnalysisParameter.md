# Interface IDurabilityAnalysisParameter
<a id="VM_ViewModels_Post_IDurabilityAnalysisParameter"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

Defines the result document, fatigue result name, state range, repeated-load count, and finite-element targets for [RunFatigueAnalysis\(IDurabilityAnalysisParameter\)](VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysis.md).

```csharp
public interface IDurabilityAnalysisParameter
```

## Properties

 [DocumentFilePath](VM.ViewModels.Post.IDurabilityAnalysisParameter.DocumentFilePath.md\#VM\_ViewModels\_Post\_IDurabilityAnalysisParameter\_DocumentFilePath)

Gets or sets the path of the imported result document used for the fatigue analysis.

 [End](VM.ViewModels.Post.IDurabilityAnalysisParameter.End.md\#VM\_ViewModels\_Post\_IDurabilityAnalysisParameter\_End)

Gets or sets the last State included in the fatigue analysis range.

 [FilePath](VM.ViewModels.Post.IDurabilityAnalysisParameter.FilePath.md\#VM\_ViewModels\_Post\_IDurabilityAnalysisParameter\_FilePath)

Gets or sets the legacy document path property.

 [LowerValue](VM.ViewModels.Post.IDurabilityAnalysisParameter.LowerValue.md\#VM\_ViewModels\_Post\_IDurabilityAnalysisParameter\_LowerValue)

Gets or sets the legacy first State property.

 [NoOfRepeatedLoad](VM.ViewModels.Post.IDurabilityAnalysisParameter.NoOfRepeatedLoad.md\#VM\_ViewModels\_Post\_IDurabilityAnalysisParameter\_NoOfRepeatedLoad)

Gets or sets the number of repeated loads used when writing the fatigue analysis input.

 [Parameters](VM.ViewModels.Post.IDurabilityAnalysisParameter.Parameters.md\#VM\_ViewModels\_Post\_IDurabilityAnalysisParameter\_Parameters)

Gets the legacy fatigue parameter collection.

 [ResultName](VM.ViewModels.Post.IDurabilityAnalysisParameter.ResultName.md\#VM\_ViewModels\_Post\_IDurabilityAnalysisParameter\_ResultName)

Gets or sets the fatigue result name assigned to the analyzed document.

 [Start](VM.ViewModels.Post.IDurabilityAnalysisParameter.Start.md\#VM\_ViewModels\_Post\_IDurabilityAnalysisParameter\_Start)

Gets or sets the first State included in the fatigue analysis range.

 [Targets](VM.ViewModels.Post.IDurabilityAnalysisParameter.Targets.md\#VM\_ViewModels\_Post\_IDurabilityAnalysisParameter\_Targets)

Gets the identifiers of finite-element bodies selected for the fatigue analysis.

 [UpperValue](VM.ViewModels.Post.IDurabilityAnalysisParameter.UpperValue.md\#VM\_ViewModels\_Post\_IDurabilityAnalysisParameter\_UpperValue)

Gets or sets the legacy last State property.

## Methods

 [AddTarget\(Guid\)](VM.ViewModels.Post.IDurabilityAnalysisParameter.AddTarget.md\#VM\_ViewModels\_Post\_IDurabilityAnalysisParameter\_AddTarget\_System\_Guid\_)

Adds a finite-element body identifier to the fatigue analysis targets.

 [RemoveTarget\(Guid\)](VM.ViewModels.Post.IDurabilityAnalysisParameter.RemoveTarget.md\#VM\_ViewModels\_Post\_IDurabilityAnalysisParameter\_RemoveTarget\_System\_Guid\_)

Removes a finite-element body identifier from the fatigue analysis targets.
