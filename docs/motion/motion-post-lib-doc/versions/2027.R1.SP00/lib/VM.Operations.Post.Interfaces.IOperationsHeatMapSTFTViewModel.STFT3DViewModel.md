# Property STFT3DViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel_STFT3DViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel_STFT3DViewModel"></a> STFT3DViewModel

Gets [`IHeatMapSTFTView3DViewModel`](VM.ViewModels.Post.IHeatMapSTFTView3DViewModel.md) that exposes the 3D STFT display and export operations.

```csharp
IHeatMapSTFTView3DViewModel STFT3DViewModel { get; }
```

### Property Value

 [IHeatMapSTFTView3DViewModel](VM.ViewModels.Post.IHeatMapSTFTView3DViewModel.md)

### Remarks

This view is used when [`IsWaterfallType`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.IsWaterfallType.md) is `true`.
