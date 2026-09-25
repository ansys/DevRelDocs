# Property Points
<a id="VM_Operations_Post_Interfaces_IOperationsSimpleMathLineDataSeriesViewModel_Points"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsSimpleMathLineDataSeriesViewModel_Points"></a> Points

Gets or sets the number of points used to interpolate each source curve before the arithmetic operation.

```csharp
int Points { get; set; }
```

### Property Value

 int

### Remarks

Changing this value recalculates the calculated curve on the shared domain. Source curves with different domain start or end values cannot be combined.
