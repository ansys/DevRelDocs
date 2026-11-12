# Method GetActivePage
<div align="right"><a href="/lib/VM.API.Post.Operations.ApplicationHandler.GetActivePage.md" download="VM.API.Post.Operations.ApplicationHandler.GetActivePage.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_API_Post_Operations_ApplicationHandler_GetActivePage"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_GetActivePage"></a> GetActivePage\(\)

Retrieves the active page.

```csharp
public IPage GetActivePage()
```

### Returns

 [IPage](VM.Operations.Post.Interfaces.IPage.md)

The active [`IPage`](VM.Operations.Post.Interfaces.IPage.md), or `null` when no active page exists.

### Examples

```python
# Get the currently active page.
page = application_handler.GetActivePage()
```

### Remarks

The method determines returned `IPage` from currently active [`IView`](VM.Operations.Post.Interfaces.IView.md). If no active view exists, or the active view cannot be associated with an `IPage`, no active page exists.
