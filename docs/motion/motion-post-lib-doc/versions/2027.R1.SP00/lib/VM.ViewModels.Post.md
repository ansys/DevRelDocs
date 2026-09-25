# Namespace VM.ViewModels.Post
<a id="VM_ViewModels_Post"></a>

### Namespaces

 [VM.ViewModels.Post.Interfaces](VM.ViewModels.Post.Interfaces.md)

### Interfaces

 [IAnalysisResultViewModel](VM.ViewModels.Post.IAnalysisResultViewModel.md)

Represents analysis result data loaded from a result document and exposed to Operation API views.

 [IDurabilityAnalysisParameter](VM.ViewModels.Post.IDurabilityAnalysisParameter.md)

Defines the result document, fatigue result name, state range, repeated-load count, and finite-element targets for [RunFatigueAnalysis\(IDurabilityAnalysisParameter\)](VM.API.Post.Operations.DurabilityAnalysis.RunFatigueAnalysis.md).

 [IEntityBaseViewModel](VM.ViewModels.Post.IEntityBaseViewModel.md)

Defines the identity, category, availability, and result metadata exposed for a result entity.

 [IHeatMapSTFTView2DViewModel](VM.ViewModels.Post.IHeatMapSTFTView2DViewModel.md)

Represents the 2D view of a Short-Time Fourier Transform (STFT) heat map, reached through [`STFT2DViewModel`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.STFT2DViewModel.md).

This view shows STFT values on a flat time-frequency map and is used when [`IsWaterfallType`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.IsWaterfallType.md) is set to keep the flat 2D map instead of the 3D waterfall view.

 [IHeatMapSTFTView3DViewModel](VM.ViewModels.Post.IHeatMapSTFTView3DViewModel.md)

Represents the 3D waterfall view of a Short-Time Fourier Transform (STFT) heat map, reached through [`STFT3DViewModel`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.STFT3DViewModel.md).

This view shows STFT values as a 3D waterfall surface over time and frequency and is used when [`IsWaterfallType`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.IsWaterfallType.md) is set to show the waterfall instead of the flat 2D map.

 [ILineDataSeriesAxisViewModel](VM.ViewModels.Post.ILineDataSeriesAxisViewModel.md)

Describes the result data assigned to one axis of a 2D curve, such as the axis returned by [`SourceX`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.SourceX.md) or [`SourceY`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.SourceY.md).

The values read here identify which target, result characteristic, component, and coordinate system supply the numbers plotted on that axis.

 [INumericParameter](VM.ViewModels.Post.INumericParameter.md)

Defines the name and source columns used to create a curve from a numeric file.
