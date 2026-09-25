# Property Base
<a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_Base"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_Base"></a> Base

Gets or sets the logarithm base used by the log-scale transform.

```csharp
string Base { get; set; }
```

### Property Value

 string

### Remarks

When the transform type is `LogScale`, this value selects the base used to calculate transformed points.
