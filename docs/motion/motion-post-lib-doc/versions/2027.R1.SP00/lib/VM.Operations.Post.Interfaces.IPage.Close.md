# Method Close
<a id="VM_Operations_Post_Interfaces_IPage_Close"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IPage_Close"></a> Close\(\)

Closes [`IPage`](VM.Operations.Post.Interfaces.IPage.md) and removes [`IView`](VM.Operations.Post.Interfaces.IView.md) objects associated with it.

```csharp
void Close()
```

### Remarks

After this call, `IPage` is no longer included in [GetPages\(\)](VM.API.Post.Operations.ApplicationHandler.GetPages.md). The associated `IView` objects are also removed.
