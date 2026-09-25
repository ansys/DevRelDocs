# Property SelectedTransformType
<a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_SelectedTransformType"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsTransformLineDataSeriesViewModel_SelectedTransformType"></a> SelectedTransformType

Gets or sets the transform mode selected from `TransformType`.

```csharp
string SelectedTransformType { get; set; }
```

### Property Value

 string

### Remarks

Changing this value selects the transformation path and recalculates the curve. See [Example - Transform](../../document/operation-api/example/example_chart_for_operation_api.md#transform) for a complete usage flow.
