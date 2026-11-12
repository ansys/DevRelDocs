# Method DockTo
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IView.DockTo.md" download="VM.Operations.Post.Interfaces.IView.DockTo.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IView_DockTo_VM_Models_Post_DockLayout_VM_Operations_Post_Interfaces_IView_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IView_DockTo_VM_Models_Post_DockLayout_VM_Operations_Post_Interfaces_IView_"></a> DockTo\(DockLayout, IView\)

Moves the view to a specified position relative to another view.

For a complete operations, see [Operation API Example - Moving a View](../document/operation-api/example/example_view_for_operation_api.md#moving-a-view).

```csharp
void DockTo(DockLayout dockLayout, IView target)
```

### Parameters

`dockLayout` DockLayout

Specifies the position where the current view should be docked relative to the target view. 
Use `DockLayout` to select the relative position.

`target` [IView](VM.Operations.Post.Interfaces.IView.md)

The view relative to which the current view will be docked.

### Examples

```python
# Get the page and create the source and target chart views.
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The name of the source chart view.
source_chart_name = "SourceChart"
# The name of the target chart view.
target_chart_name = "TargetChart"
# The source chart view.
source_view = page.CreateChart(source_chart_name)
# The target chart view.
target_view = page.CreateChart(target_chart_name)

# Dock the source view above the target view.
# The position at which the view is docked relative to the target view.
dock_layout = DockLayout.Top
source_view.DockTo(dock_layout, target_view)
```

### Remarks

Calling `DockTo(DockLayout, IView)` moves the current view to a new position relative to another view.
The position is specified using the <code class="paramref">dockLayout</code> parameter, which determines the direction
where the current view will be docked in relation to the target view.

<Danger>
The <code class="paramref">target</code> must identify a valid [`IView`](VM.Operations.Post.Interfaces.IView.md) in the same [`IPage`](VM.Operations.Post.Interfaces.IPage.md) as the current view. An invalid target cannot receive the docking request.
</Danger>
