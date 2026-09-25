# Property End
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_End"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapSTFTDataViewModel_End"></a> End

Gets or sets the end of the time interval analyzed by STFT.

```csharp
double End { get; set; }
```

### Property Value

 double

### Remarks

Changing this value refreshes the STFT windows calculated from the referenced source curve.
