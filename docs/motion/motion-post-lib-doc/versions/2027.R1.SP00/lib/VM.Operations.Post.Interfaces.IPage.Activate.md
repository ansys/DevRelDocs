# Method Activate
<a id="VM_Operations_Post_Interfaces_IPage_Activate"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IPage_Activate"></a> Activate\(\)

Activates [`IPage`](VM.Operations.Post.Interfaces.IPage.md).

```csharp
void Activate()
```

### Examples

```python
page_name = "Page"
page = application_handler.GetPage(page_name)
page.Activate()
```

### Remarks

Activating `IPage` deactivates other pages, so one page remains active at a time.

After this call, [GetActivePage\(\)](VM.API.Post.Operations.ApplicationHandler.GetActivePage.md) reports this page.
