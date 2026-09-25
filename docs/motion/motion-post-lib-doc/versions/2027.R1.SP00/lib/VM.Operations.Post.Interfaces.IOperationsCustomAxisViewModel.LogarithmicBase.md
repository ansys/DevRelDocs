# Property LogarithmicBase
<a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_LogarithmicBase"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsCustomAxisViewModel_LogarithmicBase"></a> LogarithmicBase

Gets or sets the logarithmic base used by a custom axis, such as `2`, `3`, `4`, `5`, `10`, or `E`.

```csharp
string LogarithmicBase { get; set; }
```

### Property Value

 string

### Remarks

This value affects axis labels only when [`AxisType`](VM.Operations.Post.Interfaces.IOperationsCustomAxisViewModel.AxisType.md) selects a logarithmic scale.
