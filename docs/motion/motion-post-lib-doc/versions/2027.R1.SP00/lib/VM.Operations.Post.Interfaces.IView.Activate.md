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
chart_name = "Chart"
view = page.CreateChart(chart_name)
view.Activate()
```

### Remarks

Calling `Activate()` activates the selected view.
When this method is called, it deactivates any currently active views within the same page and sets the selected view as the only active view.
There can be only one active view at a time.

<Note>
Activating this view deactivates the other active views in the same page.
</Note>

<a href="/lib/VM.Operations.Post.Interfaces.IView.Activate.md" download="VM.Operations.Post.Interfaces.IView.Activate.md">Download this page as Markdown</a>
