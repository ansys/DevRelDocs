# Method CloseView
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IPage.CloseView.md" download="VM.Operations.Post.Interfaces.IPage.CloseView.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IPage_CloseView_VM_Operations_Post_Interfaces_IView_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IPage_CloseView_VM_Operations_Post_Interfaces_IView_"></a> CloseView\(IView\)

Closes the given [`IView`](VM.Operations.Post.Interfaces.IView.md) with [`IPage`](VM.Operations.Post.Interfaces.IPage.md).

```csharp
void CloseView(IView view)
```

### Parameters

`view` [IView](VM.Operations.Post.Interfaces.IView.md)

[`IView`](VM.Operations.Post.Interfaces.IView.md) to close.

### Examples

```python
# Get the page and create a chart view.
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The name of the new chart view.
chart_name = "ChartByView"
# The chart view created on the page.
view = page.CreateChart(chart_name)

# Close the view by passing the view object.
page.CloseView(view)
```

### Remarks

If `view` identifies an object with [`IPage`](VM.Operations.Post.Interfaces.IPage.md), that object is removed and is no longer returned by [`GetView(int)`](VM.Operations.Post.Interfaces.IPage.GetView.md), [`GetView(string)`](VM.Operations.Post.Interfaces.IPage.GetView.md), or [GetViews\(\)](VM.Operations.Post.Interfaces.IPage.GetViews.md). If `view` does not identify an object with `IPage`, this method does not remove a view.

### Exceptions

 ArgumentNullException

Thrown when `view` is `null`.

## <a id="VM_Operations_Post_Interfaces_IPage_CloseView_System_Int32_"></a> CloseView\(int\)

Closes [`IView`](VM.Operations.Post.Interfaces.IView.md) with the specified [`Index`](VM.Operations.Post.Interfaces.IView.Index.md).

```csharp
void CloseView(int index)
```

### Parameters

`index` int

Index of the `IView` to close.

### Examples

```python
# Get the page and create a chart view.
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The name of the new chart view.
chart_name = "ChartByIndex"
# The chart view created on the page.
view = page.CreateChart(chart_name)

# Close the view by its index.
# The index of the view.
view_index = view.Index
page.CloseView(view_index)
```

### Remarks

The matching `IView` is removed with [`IPage`](VM.Operations.Post.Interfaces.IPage.md) and is no longer returned by [`GetView(int)`](VM.Operations.Post.Interfaces.IPage.GetView.md), [`GetView(string)`](VM.Operations.Post.Interfaces.IPage.GetView.md), or [GetViews\(\)](VM.Operations.Post.Interfaces.IPage.GetViews.md).

### Exceptions

 ArgumentException

Thrown when `index` does not identify an `IView` with `IPage`.

## <a id="VM_Operations_Post_Interfaces_IPage_CloseView_System_String_"></a> CloseView\(string\)

Closes [`IView`](VM.Operations.Post.Interfaces.IView.md) with the specified [`FullName`](VM.Operations.Post.Interfaces.IView.FullName.md).

```csharp
void CloseView(string name)
```

### Parameters

`name` string

`FullName` of the `IView` to close.

### Examples

```python
# Get the page and create a chart view.
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The name of the new chart view.
chart_name = "ChartByName"
# The chart view created on the page.
view = page.CreateChart(chart_name)

# Close the view by its name.
# The full name of the view.
view_name = view.FullName
page.CloseView(view_name)
```

### Remarks

The matching `IView` is removed with [`IPage`](VM.Operations.Post.Interfaces.IPage.md) and is no longer returned by [`GetView(int)`](VM.Operations.Post.Interfaces.IPage.GetView.md), [`GetView(string)`](VM.Operations.Post.Interfaces.IPage.GetView.md), or [GetViews\(\)](VM.Operations.Post.Interfaces.IPage.GetViews.md). If no matching `FullName` exists with `IPage`, this method does nothing.

### Exceptions

 ArgumentException

Thrown when `name` is `null` or empty.
