# Manage a Vector
This feature covers creating vector display data with [`IOperationsDynamicAnalysisResultViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.md), changing what [`IOperationsVectorDisplayBaseViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md) shows, and setting how it looks. Once created, the vector display shows a chosen result characteristic in the animation and appears in frames captured through [Control Animation Playback](op_control_animation_playback.md#recording).

## Creating
Find the vector display characteristics available for an entity with [`GetVectorDisplayCharacteristics(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetVectorDisplayCharacteristics.md). Then create [`IOperationsVectorDisplayBaseViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md) with [`CreateVectorDisplay(string, string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.CreateVectorDisplay.md) from the imported dynamic analysis result, passing the selected characteristic.

> [!IMPORTANT]
> The named entity must support vector display. If the entity is missing or does not support it, `CreateVectorDisplay(string, string)` throws an exception.

## Getting
Get a vector display by name with [`GetVectorDisplay(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.GetVectorDisplay.md).

## Removing
Remove a vector display by name with [`RemoveVectorDisplay(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsDynamicAnalysisResultViewModel.RemoveVectorDisplay.md). The named vector display is removed from the dynamic analysis result.

## Properties
Change what the vector display shows with [`SetCharacteristic(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.SetCharacteristic.md). The display then updates to show the newly chosen characteristic.

Change how it looks with these properties:

- Name it with [`FullName`](../../../lib/VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.FullName.md).
- Show or hide the vector and its label with [`IsVisible`](../../../lib/VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.IsVisible.md) and [`IsLabel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.IsLabel.md).
- Set the label's background and text colors with [`LabelBackgroundColor`](../../../lib/VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.LabelBackgroundColor.md) and [`LabelTextColor`](../../../lib/VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.LabelTextColor.md).
- Set the vector's color and size with [`Color`](../../../lib/VM.Operations.Post.Interfaces.IOperationsVectorDisplayViewModel.Color.md) and [`Scale`](../../../lib/VM.Operations.Post.Interfaces.IOperationsVectorDisplayViewModel.Scale.md).
- Turn logarithmic display on or off with [`IsLog`](../../../lib/VM.Operations.Post.Interfaces.IOperationsVectorDisplayViewModel.IsLog.md).