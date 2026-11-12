# Method GetView
<div align="right"><a href="/lib/VM.API.Post.Operations.ApplicationHandler.GetView.md" download="VM.API.Post.Operations.ApplicationHandler.GetView.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_API_Post_Operations_ApplicationHandler_GetView_System_Int32_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_GetView_System_Int32_"></a> GetView\(int\)

Retrieves a view by its ID.

```csharp
public IView GetView(int index)
```

### Parameters

`index` int

The ID of the view to be retrieved.

### Returns

 [IView](VM.Operations.Post.Interfaces.IView.md)

The matching [`IView`](VM.Operations.Post.Interfaces.IView.md), or `null` when no view is found.

### Remarks

This method is obsolete. Use [`GetView(int)`](VM.Operations.Post.Interfaces.IPage.GetView.md) instead.

## <a id="VM_API_Post_Operations_ApplicationHandler_GetView_System_String_"></a> GetView\(string\)

Retrieves a view by its name.

```csharp
public IView GetView(string name)
```

### Parameters

`name` string

The name of the view to be retrieved.

### Returns

 [IView](VM.Operations.Post.Interfaces.IView.md)

The matching [`IView`](VM.Operations.Post.Interfaces.IView.md), or `null` when no view is found.

### Remarks

This method is obsolete. Use [`GetView(string)`](VM.Operations.Post.Interfaces.IPage.GetView.md) instead.
