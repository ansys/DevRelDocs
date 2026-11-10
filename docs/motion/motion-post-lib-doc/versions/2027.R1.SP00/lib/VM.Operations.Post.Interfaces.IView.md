# Interface IView
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IView.md" download="VM.Operations.Post.Interfaces.IView.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IView"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents an animation or chart view that can be activated, arranged, and exported through the Operation API.

```csharp
public interface IView : IHasGuid
```

## Properties

 [FullName](VM.Operations.Post.Interfaces.IView.FullName.md\#VM\_Operations\_Post\_Interfaces\_IView\_FullName)

Gets or sets the full name used to identify the view.

 [GroupID](VM.Operations.Post.Interfaces.IView.GroupID.md\#VM\_Operations\_Post\_Interfaces\_IView\_GroupID)

Gets the ID of [`IPage`](VM.Operations.Post.Interfaces.IPage.md) associated with the view.

 [GroupName](VM.Operations.Post.Interfaces.IView.GroupName.md\#VM\_Operations\_Post\_Interfaces\_IView\_GroupName)

Gets or sets the name of [`IPage`](VM.Operations.Post.Interfaces.IPage.md) associated with the view.

 [Index](VM.Operations.Post.Interfaces.IView.Index.md\#VM\_Operations\_Post\_Interfaces\_IView\_Index)

Gets the index assigned to the view when it is created.

 [ViewType](VM.Operations.Post.Interfaces.IView.ViewType.md\#VM\_Operations\_Post\_Interfaces\_IView\_ViewType)

Gets [`ViewType`](VM.Operations.Post.Interfaces.IView.ViewType.md) that identifies whether the view is an animation or chart view.

## Methods

 [Activate\(\)](VM.Operations.Post.Interfaces.IView.Activate.md\#VM\_Operations\_Post\_Interfaces\_IView\_Activate)

Activates the view.

 [DockTo\(DockLayout, IView\)](VM.Operations.Post.Interfaces.IView.DockTo.md\#VM\_Operations\_Post\_Interfaces\_IView\_DockTo\_VM\_Models\_Post\_DockLayout\_VM\_Operations\_Post\_Interfaces\_IView\_)

Moves the view to a specified position relative to another view.

For a complete operations, see [Operation API Example - Moving a View](../document/operation-api/example/example_view_for_operation_api.md#moving-a-view).

 [ExportImage\(string, ImageFormat, double?, double?\)](VM.Operations.Post.Interfaces.IView.ExportImage.md\#VM\_Operations\_Post\_Interfaces\_IView\_ExportImage\_System\_String\_VM\_Models\_Post\_ImageFormat\_System\_Nullable\_System\_Double\_\_System\_Nullable\_System\_Double\_\_)

Exports the image to the specified file path in the specified format.

For a complete operations, see [Operation API Example - Image Capture](../document/operation-api/example/example_animation_for_operation_api.md#image-capture).
