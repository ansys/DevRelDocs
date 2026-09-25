# Method CloseView
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
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "ChartByView"
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
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "ChartByIndex"
view = page.CreateChart(chart_name)

# Close the view by its index.
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
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "ChartByName"
view = page.CreateChart(chart_name)

# Close the view by its name.
view_name = view.FullName
page.CloseView(view_name)
```

### Remarks

The matching `IView` is removed with [`IPage`](VM.Operations.Post.Interfaces.IPage.md) and is no longer returned by [`GetView(int)`](VM.Operations.Post.Interfaces.IPage.GetView.md), [`GetView(string)`](VM.Operations.Post.Interfaces.IPage.GetView.md), or [GetViews\(\)](VM.Operations.Post.Interfaces.IPage.GetViews.md). If no matching `FullName` exists with `IPage`, this method does nothing.

### Exceptions

 ArgumentException

Thrown when `name` is `null` or empty.
