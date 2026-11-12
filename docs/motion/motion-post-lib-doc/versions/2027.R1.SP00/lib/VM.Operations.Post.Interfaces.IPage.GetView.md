# Method GetView
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IPage.GetView.md" download="VM.Operations.Post.Interfaces.IPage.GetView.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IPage_GetView_System_Int32_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IPage_GetView_System_Int32_"></a> GetView\(int\)

Finds [`IView`](VM.Operations.Post.Interfaces.IView.md) with the specified [`Index`](VM.Operations.Post.Interfaces.IView.Index.md).

```csharp
IView GetView(int index)
```

### Parameters

`index` int

Index of the `IView` to find.

### Returns

 [IView](VM.Operations.Post.Interfaces.IView.md)

Matching `IView`, or `null` if no view with this `Index` is found with `IPage`.

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
# The view found on the page.
view = page.GetView(chart.Index)
```

## <a id="VM_Operations_Post_Interfaces_IPage_GetView_System_String_"></a> GetView\(string\)

Finds [`IView`](VM.Operations.Post.Interfaces.IView.md) with the specified [`FullName`](VM.Operations.Post.Interfaces.IView.FullName.md).

```csharp
IView GetView(string name)
```

### Parameters

`name` string

`FullName` of the `IView` to find.

### Returns

 [IView](VM.Operations.Post.Interfaces.IView.md)

Matching `IView`, or `null` if no view with this `FullName` is found with `IPage`.

### Examples

```python
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The name of the new chart view.
chart_name = "ChartByName"
# The chart view created on the page.
chart = page.CreateChart(chart_name)
# The view found on the page.
view = page.GetView(chart.FullName)
```
