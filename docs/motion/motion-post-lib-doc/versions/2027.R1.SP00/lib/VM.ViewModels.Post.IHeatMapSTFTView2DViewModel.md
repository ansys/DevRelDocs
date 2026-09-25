# Interface IHeatMapSTFTView2DViewModel
<a id="VM_ViewModels_Post_IHeatMapSTFTView2DViewModel"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

Represents the 2D view of a Short-Time Fourier Transform (STFT) heat map, reached through [`STFT2DViewModel`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.STFT2DViewModel.md).

This view shows STFT values on a flat time-frequency map and is used when [`IsWaterfallType`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.IsWaterfallType.md) is set to keep the flat 2D map instead of the 3D waterfall view.

```csharp
public interface IHeatMapSTFTView2DViewModel : IViewModel, IHasGuid, ISTFTParameters
```

