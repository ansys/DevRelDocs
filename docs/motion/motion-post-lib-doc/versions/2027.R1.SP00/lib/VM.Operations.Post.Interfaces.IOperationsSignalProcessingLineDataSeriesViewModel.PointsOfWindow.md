# Property PointsOfWindow
<a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_PointsOfWindow"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsSignalProcessingLineDataSeriesViewModel_PointsOfWindow"></a> PointsOfWindow

Gets or sets the number of points used by the smoothing calculation.

```csharp
int PointsOfWindow { get; set; }
```

### Property Value

 int

### Remarks

This value applies when [`SignalProcessingType`](VM.Operations.Post.Interfaces.IOperationsSignalProcessingLineDataSeriesViewModel.SignalProcessingType.md) selects smoothing. The calculation returns no curve when twice this value exceeds the source point count or when the value is not positive.
