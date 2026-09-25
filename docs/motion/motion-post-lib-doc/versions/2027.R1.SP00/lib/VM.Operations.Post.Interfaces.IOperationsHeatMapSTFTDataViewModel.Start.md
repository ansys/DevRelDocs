# Property Start
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_Start"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_Start"></a> Start

Gets or sets the start of the time interval analyzed by STFT.

```csharp
double Start { get; set; }
```

### Property Value

 double

### Remarks

Changing this value refreshes the STFT windows calculated from the referenced source curve.
