# Method GetActivePage
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

The active [`IPage`](VM.Operations.Post.Interfaces.IPage.md), or <code>null</code> when no active page exists.

### Examples

```python
# Get the currently active page.
page = application_handler.GetActivePage()
```

### Remarks

The method determines returned `IPage` from currently active [`IView`](VM.Operations.Post.Interfaces.IView.md). If no active view exists, or the active view cannot be associated with an `IPage`, no active page exists.
