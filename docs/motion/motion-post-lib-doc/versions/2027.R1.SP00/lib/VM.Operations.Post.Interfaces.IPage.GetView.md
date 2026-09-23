# Method GetView
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
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "Chart"
chart = page.CreateChart(chart_name)
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
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "ChartByName"
chart = page.CreateChart(chart_name)
view = page.GetView(chart.FullName)
```
