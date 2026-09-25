# Method GetActivePlotView
<a id="VM_API_Post_Operations_ApplicationHandler_GetActivePlotView"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_GetActivePlotView"></a> GetActivePlotView\(\)

Retrieves the active chart view from the current page.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the GetActiveView function of the IPage interface instead.", true)]
public IOperationsLine2DViewModelBase GetActivePlotView()
```

### Returns

 [IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md)

The active [`IOperationsLine2DViewModelBase`](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md), or <code>null</code> when the active view is not a chart.

### Remarks

This method is obsolete. Use [GetActiveView\(\)](VM.Operations.Post.Interfaces.IPage.GetActiveView.md) instead.
