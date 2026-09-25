# Property Overlap
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_Overlap"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_Overlap"></a> Overlap

Gets or sets the percentage of overlap between adjacent STFT windows.

```csharp
double Overlap { get; set; }
```

### Property Value

 double

### Remarks

Changing this value changes the number of source samples reused between adjacent windows. Values are validated from `1` through `100` when the STFT view is updating.
