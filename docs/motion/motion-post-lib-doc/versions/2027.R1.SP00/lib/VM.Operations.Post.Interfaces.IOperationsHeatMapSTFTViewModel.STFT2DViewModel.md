# Property STFT2DViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel_STFT2DViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel_STFT2DViewModel"></a> STFT2DViewModel

Gets [`IHeatMapSTFTView2DViewModel`](VM.ViewModels.Post.IHeatMapSTFTView2DViewModel.md) that exposes the 2D STFT range, legend, curve, and export operations.

```csharp
IHeatMapSTFTView2DViewModel STFT2DViewModel { get; }
```

### Property Value

 [IHeatMapSTFTView2DViewModel](VM.ViewModels.Post.IHeatMapSTFTView2DViewModel.md)

### Remarks

This view is used when [`IsWaterfallType`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.IsWaterfallType.md) is `false`.
