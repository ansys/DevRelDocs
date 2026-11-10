# Method Activate
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IView.Activate.md" download="VM.Operations.Post.Interfaces.IView.Activate.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
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
