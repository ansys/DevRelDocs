# Property SamplingFrequency
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_SamplingFrequency"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_SamplingFrequency"></a> SamplingFrequency

Gets or sets the sampling frequency used to build the STFT frequency axis.

```csharp
int SamplingFrequency { get; set; }
```

### Property Value

 int

### Remarks

Changing this value refreshes the frequency grid. Values greater than `1` are required when the STFT view is updating.
