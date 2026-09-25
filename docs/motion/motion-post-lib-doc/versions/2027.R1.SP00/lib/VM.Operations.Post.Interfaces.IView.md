# Interface IView
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

 [ExportImage\(string, ImageFormat, double?, double?\)](VM.Operations.Post.Interfaces.IView.ExportImage.md\#VM\_Operations\_Post\_Interfaces\_IView\_ExportImage\_System\_String\_VM\_Models\_Post\_ImageFormat\_System\_Nullable\_System\_Double\_\_System\_Nullable\_System\_Double\_\_)

Exports the image to the specified file path in the specified format.
