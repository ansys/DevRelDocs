# Property IsWaterfallType
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel_IsWaterfallType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTViewModel_IsWaterfallType"></a> IsWaterfallType

Gets or sets whether the STFT view uses waterfall mode. `true` uses the waterfall view and `false` uses the 2D heat-map view.

```csharp
bool IsWaterfallType { get; set; }
```

### Property Value

 bool

### Remarks

Changing this value switches the active curve source between [`STFT2DViewModel`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.STFT2DViewModel.md) and [`STFT3DViewModel`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTViewModel.STFT3DViewModel.md). The selected representation also supplies the active and selected curve collections.
