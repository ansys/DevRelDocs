# Method GetActiveView
<a id="VM_Operations_Post_Interfaces_IPage_GetActiveView"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IPage_GetActiveView"></a> GetActiveView\(\)

Gets [`IView`](VM.Operations.Post.Interfaces.IView.md) currently reported as active by the Operation API.

```csharp
IView GetActiveView()
```

### Returns

 [IView](VM.Operations.Post.Interfaces.IView.md)

Active `IView`, or `null` if no view is active.

### Examples

```python
page_name = "Page"
page = application_handler.GetPage(page_name)
active_view = page.GetActiveView()
```

### Remarks

Calling [Activate\(\)](VM.Operations.Post.Interfaces.IView.Activate.md) on a view, or creating a new view with [CreateAnimation\(IAnalysisResultViewModel, string\)](VM.Operations.Post.Interfaces.IPage.CreateAnimation.md) or [CreateChart\(string\)](VM.Operations.Post.Interfaces.IPage.CreateChart.md), changes the view reported by this method.
