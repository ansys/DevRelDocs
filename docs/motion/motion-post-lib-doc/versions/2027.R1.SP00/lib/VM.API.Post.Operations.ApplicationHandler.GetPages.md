# Method GetPages
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
pages = application_handler.GetPages()
```

### Remarks

The returned array is a snapshot of the pages available when the method is called. Later page creation or removal does not change that array.
