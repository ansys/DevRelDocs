# Interface IHeatMapSTFTView3DViewModel
<div align="right"><a href="/lib/VM.ViewModels.Post.IHeatMapSTFTView3DViewModel.md" download="VM.ViewModels.Post.IHeatMapSTFTView3DViewModel.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_ViewModels_Post_IHeatMapSTFTView3DViewModel"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

Represents the 3D waterfall view of a Short-Time Fourier Transform (STFT) heat map, reached through [`STFT3DViewModel`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.STFT3DViewModel.md).

This view shows STFT values as a 3D waterfall surface over time and frequency and is used when [`IsWaterfallType`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.IsWaterfallType.md) is set to show the waterfall instead of the flat 2D map.

```csharp
public interface IHeatMapSTFTView3DViewModel : IViewModel, IHasGuid
```
