# Interface IHeatMapSTFTView2DViewModel
<div align="right"><a href="/lib/VM.ViewModels.Post.IHeatMapSTFTView2DViewModel.md" download="VM.ViewModels.Post.IHeatMapSTFTView2DViewModel.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_ViewModels_Post_IHeatMapSTFTView2DViewModel"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

Represents the 2D view of a Short-Time Fourier Transform (STFT) heat map, reached through [`STFT2DViewModel`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.STFT2DViewModel.md).

This view shows STFT values on a flat time-frequency map and is used when [`IsWaterfallType`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.IsWaterfallType.md) is set to keep the flat 2D map instead of the 3D waterfall view.

```csharp
public interface IHeatMapSTFTView2DViewModel : IViewModel, IHasGuid, ISTFTParameters
```
