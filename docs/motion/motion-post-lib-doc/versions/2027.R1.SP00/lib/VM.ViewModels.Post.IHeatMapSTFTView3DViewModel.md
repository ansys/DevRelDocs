# Interface IHeatMapSTFTView3DViewModel
<a id="VM_ViewModels_Post_IHeatMapSTFTView3DViewModel"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

Represents the 3D waterfall view of a Short-Time Fourier Transform (STFT) heat map, reached through [`STFT3DViewModel`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.STFT3DViewModel.md).

This view shows STFT values as a 3D waterfall surface over time and frequency and is used when [`IsWaterfallType`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.IsWaterfallType.md) is set to show the waterfall instead of the flat 2D map.

```csharp
public interface IHeatMapSTFTView3DViewModel : IViewModel, IHasGuid
```

