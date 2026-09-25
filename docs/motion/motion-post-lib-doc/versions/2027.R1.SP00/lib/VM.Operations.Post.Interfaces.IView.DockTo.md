# Method DockTo
<a id="VM_Operations_Post_Interfaces_IView_DockTo_VM_Models_Post_DockLayout_VM_Operations_Post_Interfaces_IView_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IView_DockTo_VM_Models_Post_DockLayout_VM_Operations_Post_Interfaces_IView_"></a> DockTo\(DockLayout, IView\)

Moves the view to a specified position relative to another view.

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
page_name = "Page"
page = application_handler.GetPage(page_name)
source_name = "SourceChart"
target_name = "TargetChart"
source_view = page.CreateChart(source_name)
target_view = page.CreateChart(target_name)

# Dock the source view above the target view.
dock_layout = DockLayout.Top
source_view.DockTo(dock_layout, target_view)
```

### Remarks

Calling `DockTo(DockLayout, IView)` moves the current view to a new position relative to another view.
The position is specified using the <code class="paramref">dockLayout</code> parameter, which determines the direction
where the current view will be docked in relation to the target view.

> [!IMPORTANT]
> The <code class="paramref">target</code> must identify a valid [`IView`](VM.Operations.Post.Interfaces.IView.md) in the same [`IPage`](VM.Operations.Post.Interfaces.IPage.md) as the current view. An invalid target cannot receive the docking request.
