# Property Enable
<a id="VM_Operations_Post_Interfaces_IOperationsFrequencyViewModel_Enable"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFrequencyViewModel_Enable"></a> Enable

Gets or sets whether the frequency is active for the eigenvalue animation. `true` loads its mode-shape animation and `false` restores the initialized animation state.

```csharp
bool Enable { get; set; }
```

### Property Value

 bool

### Remarks

Setting this value to `true` loads animation states for the frequency using the current eigenvalue frame setting. Setting it to `false` initializes the eigenvalue animation states again.

The property is intended for a frequency returned by [GetFrequencies\(\)](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.GetFrequencies.md) or [GetFrequency\(int\)](VM.Operations.Post.Interfaces.IOperationsEigenValueAnalysisResultViewModel.GetFrequency.md). The selected frequency must belong to the currently selected sampling time.
