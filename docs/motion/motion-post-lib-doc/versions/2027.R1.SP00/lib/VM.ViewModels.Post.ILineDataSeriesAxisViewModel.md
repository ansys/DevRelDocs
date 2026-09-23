# Interface ILineDataSeriesAxisViewModel
<a id="VM_ViewModels_Post_ILineDataSeriesAxisViewModel"></a>

Namespace: [VM.ViewModels.Post](VM.ViewModels.Post.md)  
Assembly: VM.ViewModels.Post.dll  

Describes the result data assigned to one axis of a 2D curve, such as the axis returned by [`SourceX`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.SourceX.md) or [`SourceY`](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModel.SourceY.md).

The values read here identify which target, result characteristic, component, and coordinate system supply the numbers plotted on that axis.

```csharp
public interface ILineDataSeriesAxisViewModel
```

## Properties

 [Characteristic](VM.ViewModels.Post.ILineDataSeriesAxisViewModel.Characteristic.md\#VM\_ViewModels\_Post\_ILineDataSeriesAxisViewModel\_Characteristic)

Gets the name of the result characteristic that supplies the values for this axis, such as a stress or displacement result.

 [Component](VM.ViewModels.Post.ILineDataSeriesAxisViewModel.Component.md\#VM\_ViewModels\_Post\_ILineDataSeriesAxisViewModel\_Component)

Gets the component of the result characteristic used for this axis, such as a direction of the selected characteristic.

 [CoordinateSystem](VM.ViewModels.Post.ILineDataSeriesAxisViewModel.CoordinateSystem.md\#VM\_ViewModels\_Post\_ILineDataSeriesAxisViewModel\_CoordinateSystem)

Gets the full name of the coordinate system that the values on this axis are measured in. It is empty when no coordinate system is set.

 [FullTarget](VM.ViewModels.Post.ILineDataSeriesAxisViewModel.FullTarget.md\#VM\_ViewModels\_Post\_ILineDataSeriesAxisViewModel\_FullTarget)

Gets the full name of the target that supplies the values for this axis. It is the special name for time when the axis plots the time values.

 [Parent](VM.ViewModels.Post.ILineDataSeriesAxisViewModel.Parent.md\#VM\_ViewModels\_Post\_ILineDataSeriesAxisViewModel\_Parent)

Gets the full name of the parent that owns the target. It falls back to the value of [`FullTarget`](VM.ViewModels.Post.ILineDataSeriesAxisViewModel.FullTarget.md) when the target has no separate parent.

 [SubTarget](VM.ViewModels.Post.ILineDataSeriesAxisViewModel.SubTarget.md\#VM\_ViewModels\_Post\_ILineDataSeriesAxisViewModel\_SubTarget)

Gets the sub-path under the target when the axis reads a value from a part of the target, such as a specific node or element.

 [TargetObject](VM.ViewModels.Post.ILineDataSeriesAxisViewModel.TargetObject.md\#VM\_ViewModels\_Post\_ILineDataSeriesAxisViewModel\_TargetObject)

Gets [`IEntityBaseViewModel`](VM.ViewModels.Post.IEntityBaseViewModel.md) for the target that supplies this axis. It is empty when the target cannot be found in the current result.
