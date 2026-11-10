# Method GetActiveView
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IPage.GetActiveView.md" download="VM.Operations.Post.Interfaces.IPage.GetActiveView.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The active view of the page.
active_view = page.GetActiveView()
```

### Remarks

Calling [Activate\(\)](VM.Operations.Post.Interfaces.IView.Activate.md) on a view, or creating a new view with [CreateAnimation\(IAnalysisResultViewModel, string\)](VM.Operations.Post.Interfaces.IPage.CreateAnimation.md) or [CreateChart\(string\)](VM.Operations.Post.Interfaces.IPage.CreateChart.md), changes the view reported by this method.
