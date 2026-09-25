# Property SelectedPoints
<a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_SelectedPoints"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsFFTLineDataSeriesViewModel_SelectedPoints"></a> SelectedPoints

Gets or sets the number of source data points used to generate the FFT curve.

```csharp
int SelectedPoints { get; set; }
```

### Property Value

 int

### Remarks

Changing this value refreshes the generated curve. The value controls how many samples are used to interpolate the selected source interval and how many frequency bins are produced from the FFT calculation.
