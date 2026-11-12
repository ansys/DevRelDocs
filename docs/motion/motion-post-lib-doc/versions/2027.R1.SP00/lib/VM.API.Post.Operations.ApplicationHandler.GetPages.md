# Method GetPages
<div align="right"><a href="/lib/VM.API.Post.Operations.ApplicationHandler.GetPages.md" download="VM.API.Post.Operations.ApplicationHandler.GetPages.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_API_Post_Operations_ApplicationHandler_GetPages"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_GetPages"></a> GetPages\(\)

Retrieves all currently created pages.

```csharp
public IPage[] GetPages()
```

### Returns

 [IPage](VM.Operations.Post.Interfaces.IPage.md)\[\]

An array containing every currently created [`IPage`](VM.Operations.Post.Interfaces.IPage.md), or an empty array when no page exists.

### Examples

```python
# The pages of the application.
pages = application_handler.GetPages()
```

### Remarks

The returned array is a snapshot of the pages available when the method is called. Later page creation or removal does not change that array.
