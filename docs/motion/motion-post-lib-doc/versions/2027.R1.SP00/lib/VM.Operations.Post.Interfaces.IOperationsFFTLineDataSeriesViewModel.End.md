# Property End
<a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_End"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_End"></a> End

Gets or sets the end time of the source interval used for FFT.

```csharp
double End { get; set; }
```

### Property Value

 double

### Remarks

Changing this value refreshes the FFT calculation when the referenced source curve exists. An interval outside the source X range does not produce replacement FFT points.
