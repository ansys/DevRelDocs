# Method CreateChart
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IPage.CreateChart.md" download="VM.Operations.Post.Interfaces.IPage.CreateChart.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IPage_CreateChart_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IPage_CreateChart_System_String_"></a> CreateChart\(string\)

Creates [`IOperationsLine2DViewModelBase`](VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md) on this page for 2D curve operations.

For a complete operations, see [Operation API Example - Create a ChartView](../document/operation-api/example/example_chart_for_operation_api.md#create-a-chartview).

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
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart = page.CreateChart(chart_name)
```

### Remarks

If `IPage` is inactive, this call activates it before creating the chart.

The returned `IOperationsLine2DViewModelBase` is kept with [`IPage`](VM.Operations.Post.Interfaces.IPage.md) and becomes active immediately. It starts without curve data until curve data is imported or added.
