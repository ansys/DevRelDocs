# Property ReferenceValue
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_ReferenceValue"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_ReferenceValue"></a> ReferenceValue

Gets or sets the reference value used for STFT decibel scaling.

```csharp
double ReferenceValue { get; set; }
```

### Property Value

 double

### Remarks

Changing this value refreshes STFT data when [`SelectedScaleType`](VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.SelectedScaleType.md) selects decibel scaling. It has no scaling effect in the original-value mode.

<a href="/lib/VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.ReferenceValue.md" download="VM.Operations.Post.Interfaces.IOperationsHeatMapSTFTDataViewModel.ReferenceValue.md">Download this page as Markdown</a>
