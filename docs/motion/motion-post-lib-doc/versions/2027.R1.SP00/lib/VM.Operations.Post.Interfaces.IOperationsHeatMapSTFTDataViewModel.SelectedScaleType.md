# Property SelectedScaleType
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_SelectedScaleType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_SelectedScaleType"></a> SelectedScaleType

Gets or sets [`STFTScaleType`](VM.Models.Post.STFTScaleType.md) used for STFT values.

```csharp
STFTScaleType SelectedScaleType { get; set; }
```

### Property Value

 [STFTScaleType](VM.Models.Post.STFTScaleType.md)

### Remarks

Changing this value refreshes the heat map. Decibel mode also makes [`ReferenceValue`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.ReferenceValue.md) applicable.
