# Method Activate
<a id="VM_Operations_Post_Interfaces_IView_Activate"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IView_Activate"></a> Activate\(\)

Activates the view.

```csharp
void Activate()
```

### Examples

```python
page_name = "Page"
page = application_handler.GetPage(page_name)
view_name = "Chart"
view = page.CreateChart(view_name)
view.Activate()
```

### Remarks

Calling `Activate()` activates the selected view.
When this method is called, it deactivates any currently active views within the same page and sets the selected view as the only active view.
There can be only one active view at a time.

> [!NOTE]
> Activating this view deactivates the other active views in the same page.
