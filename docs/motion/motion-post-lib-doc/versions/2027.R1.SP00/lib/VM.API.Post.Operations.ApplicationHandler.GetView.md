# Method GetView
<a id="VM_API_Post_Operations_ApplicationHandler_GetView_System_Int32_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_GetView_System_Int32_"></a> GetView\(int\)

Retrieves a view by its ID.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the GetView function of the IPage interface instead.", true)]
public IView GetView(int index)
```

### Parameters

`index` int

The ID of the view to be retrieved.

### Returns

 [IView](VM.Operations.Post.Interfaces.IView.md)

The matching [`IView`](VM.Operations.Post.Interfaces.IView.md), or <code>null</code> when no view is found.

### Remarks

This method is obsolete. Use [`GetView(int)`](VM.Operations.Post.Interfaces.IPage.GetView.md) instead.

## <a id="VM_API_Post_Operations_ApplicationHandler_GetView_System_String_"></a> GetView\(string\)

Retrieves a view by its name.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the GetView function of the IPage interface instead.", true)]
public IView GetView(string name)
```

### Parameters

`name` string

The name of the view to be retrieved.

### Returns

 [IView](VM.Operations.Post.Interfaces.IView.md)

The matching [`IView`](VM.Operations.Post.Interfaces.IView.md), or <code>null</code> when no view is found.

### Remarks

This method is obsolete. Use [`GetView(string)`](VM.Operations.Post.Interfaces.IPage.GetView.md) instead.
