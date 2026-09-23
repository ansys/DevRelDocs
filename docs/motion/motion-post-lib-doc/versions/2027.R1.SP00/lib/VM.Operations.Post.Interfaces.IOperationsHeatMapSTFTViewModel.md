# Interface IOperationsHeatMapSTFTViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides access to the 2D heat-map and 3D waterfall representations of a Short-Time Fourier Transform (STFT).

```csharp
public interface IOperationsHeatMapSTFTViewModel : IOperationsLine2DViewModelBase, IOperationsChartViewModel, IView, IHasGuid
```

## Properties

 [IsWaterfallType](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.IsWaterfallType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapSTFTViewModel\_IsWaterfallType)

Gets or sets whether the STFT view uses waterfall mode. `true` uses the waterfall view and `false` uses the 2D heat-map view.

 [STFT2DViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.STFT2DViewModel.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapSTFTViewModel\_STFT2DViewModel)

Gets [`IHeatMapSTFTView2DViewModel`](VM.ViewModels.Post.IHeatMapSTFTView2DViewModel.md) that exposes the 2D STFT range, legend, curve, and export operations.

 [STFT3DViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.STFT3DViewModel.md\#VM\_Operations\_Post\_Interfaces\_IOperationsHeatMapSTFTViewModel\_STFT3DViewModel)

Gets [`IHeatMapSTFTView3DViewModel`](VM.ViewModels.Post.IHeatMapSTFTView3DViewModel.md) that exposes the 3D STFT display and export operations.
