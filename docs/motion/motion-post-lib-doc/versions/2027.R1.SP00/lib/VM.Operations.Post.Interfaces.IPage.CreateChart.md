# Method CreateChart
<a id="VM_Operations_Post_Interfaces_IPage_CreateChart_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IPage_CreateChart_System_String_"></a> CreateChart\(string\)

Creates [`IOperationsLine2DViewModelBase`](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md) on this page for 2D curve operations.

```csharp
IOperationsLine2DViewModelBase CreateChart(string name = null)
```

### Parameters

`name` string

Initial name for the new view. If omitted, a default name is generated.

### Returns

 [IOperationsLine2DViewModelBase](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md)

Newly created [`IOperationsLine2DViewModelBase`](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md).

### Examples

```python
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "Chart"
chart = page.CreateChart(chart_name)
```

### Remarks

If `IPage` is inactive, this call activates it before creating the chart.

The returned `IOperationsLine2DViewModelBase` is kept with [`IPage`](VM.Operations.Post.Interfaces.IPage.md) and becomes active immediately. It starts without curve data until curve data is imported or added.
