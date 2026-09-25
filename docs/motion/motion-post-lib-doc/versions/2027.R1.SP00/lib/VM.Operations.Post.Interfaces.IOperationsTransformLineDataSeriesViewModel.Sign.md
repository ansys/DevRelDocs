# Property Sign
<a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_Sign"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_Sign"></a> Sign

Gets or sets the sign selected from [`SignType`](VM.Models.Post.SignType.md) for the absolute transform.

```csharp
SignType Sign { get; set; }
```

### Property Value

 [SignType](VM.Models.Post.SignType.md)

### Remarks

When the transform mode is `Absolute`, this value selects whether the calculated curve keeps positive or negative values. See [Example - Transform](../../document/operation-api/example/example_chart_for_operation_api.md#transform) for a complete usage flow.
