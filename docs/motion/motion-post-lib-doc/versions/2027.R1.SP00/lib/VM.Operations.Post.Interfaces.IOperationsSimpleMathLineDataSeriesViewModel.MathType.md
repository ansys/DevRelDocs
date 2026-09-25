# Property MathType
<a id="VM_Operations_Post_Interfaces_IOperationsSimpleMathLineDataSeriesViewModel_MathType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsSimpleMathLineDataSeriesViewModel_MathType"></a> MathType

Gets or sets the arithmetic operation selected from [`SimpleMathType`](VM.Models.Post.SimpleMathType.md) to combine the source curves.

```csharp
SimpleMathType MathType { get; set; }
```

### Property Value

 [SimpleMathType](VM.Models.Post.SimpleMathType.md)

### Remarks

Changing this value recalculates the calculated curve. Source curves must have compatible domains, and their units are converted before the selected operation is applied.
