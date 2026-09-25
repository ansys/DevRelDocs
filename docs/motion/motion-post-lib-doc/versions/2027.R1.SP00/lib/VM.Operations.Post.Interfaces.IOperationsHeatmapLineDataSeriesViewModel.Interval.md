# Property Interval
<a id="VM_Operations_Post_Interfaces_IOperationsHeatmapLineDataSeriesViewModel_Interval"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatmapLineDataSeriesViewModel_Interval"></a> Interval

Gets or sets the interval between heat-map samples or frequency positions.

```csharp
double Interval { get; set; }
```

### Property Value

 double

### Remarks

Changing this value changes the grid spacing used when the heat-map curve is intersected or generated, including order-tracking export.
