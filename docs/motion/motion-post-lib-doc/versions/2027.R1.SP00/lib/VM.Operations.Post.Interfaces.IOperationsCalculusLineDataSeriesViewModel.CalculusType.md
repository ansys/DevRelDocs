# Property CalculusType
<a id="VM_Operations_Post_Interfaces_IOperationsCalculusLineDataSeriesViewModel_CalculusType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCalculusLineDataSeriesViewModel_CalculusType"></a> CalculusType

Gets or sets the calculus operation selected from `CalculusType` for the calculated curve.

```csharp
CalculusType CalculusType { get; set; }
```

### Property Value

 [CalculusType](VM.Models.Post.CalculusType.md)

### Remarks

Changing `CalculusType` recalculates points from the original curve. Differentiation produces derivative points, while integration produces accumulated points.

The calculated curve raises a change notification after recalculation.
