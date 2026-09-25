# Property Legend
<a id="VM_Operations_Post_Interfaces_IOperationsChartViewModel_Legend"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsChartViewModel_Legend"></a> Legend

Gets [`IOperationsLegendModifier`](VM.Operations.Post.Interfaces.IOperationsLegendModifier.md) used by this chart.

```csharp
IOperationsLegendModifier Legend { get; }
```

### Property Value

 [IOperationsLegendModifier](VM.Operations.Post.Interfaces.IOperationsLegendModifier.md)

### Remarks

Changes made through `IOperationsLegendModifier` are applied to the legend rendered by this chart.
