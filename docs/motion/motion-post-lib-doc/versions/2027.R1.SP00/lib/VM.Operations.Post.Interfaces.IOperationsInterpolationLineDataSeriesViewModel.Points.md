# Property Points
<a id="VM_Operations_Post_Interfaces_IOperationsInterpolationLineDataSeriesViewModel_Points"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsInterpolationLineDataSeriesViewModel_Points"></a> Points

Gets or sets the number of interpolation intervals used to generate the curve.

```csharp
int Points { get; set; }
```

### Property Value

 int

### Remarks

Changing this value refreshes the interpolated curve when the source curve is available. The calculation generates one more output point than this requested value.
