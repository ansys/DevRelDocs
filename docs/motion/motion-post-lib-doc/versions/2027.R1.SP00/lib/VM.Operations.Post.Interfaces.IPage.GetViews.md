# Method GetViews
<a id="VM_Operations_Post_Interfaces_IPage_GetViews"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IPage_GetViews"></a> GetViews\(\)

Gets every [`IView`](VM.Operations.Post.Interfaces.IView.md) associated with [`IPage`](VM.Operations.Post.Interfaces.IPage.md).

```csharp
IView[] GetViews()
```

### Returns

 [IView](VM.Operations.Post.Interfaces.IView.md)\[\]

Array containing every `IView` currently associated with `IPage`, or an empty array if no views are associated with it.

### Examples

```python
page_name = "Page"
page = application_handler.GetPage(page_name)
views = page.GetViews()
```

<a href="/lib/VM.Operations.Post.Interfaces.IPage.GetViews.md" download="VM.Operations.Post.Interfaces.IPage.GetViews.md">Download this page as Markdown</a>
