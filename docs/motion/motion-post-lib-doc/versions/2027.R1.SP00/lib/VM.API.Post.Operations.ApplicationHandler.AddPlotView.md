# Method AddPlotView
<a id="VM_API_Post_Operations_ApplicationHandler_AddPlotView"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_AddPlotView"></a> AddPlotView\(\)

Adds a new plot view by creating a chart.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the CreateChart function of the IPage interface instead.", true)]
public IOperationsLine2DViewModelBase AddPlotView()
```

### Returns

 [IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md)

The newly added [`IOperationsLine2DViewModelBase`](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

### Remarks

This method is obsolete. Use [CreateChart\(string\)](VM.Operations.Post.Interfaces.IPage.CreateChart.md) instead.
