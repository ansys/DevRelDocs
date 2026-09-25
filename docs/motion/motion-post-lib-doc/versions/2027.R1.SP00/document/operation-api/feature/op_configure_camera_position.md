# Configure Camera Position
This feature covers configuring the camera viewpoint of [`IOperationsAnimation`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.md) with [`IViewSpec`](../../../lib/VM.Operations.Post.Interfaces.IViewSpec.md), created through [Manage View - Creating](op_manage_view.md#creating), for the current animation frame and assigning different viewpoints to loaded animation frames during recording.

## Current Viewpoint
Use [`IViewSpec`](../../../lib/VM.Operations.Post.Interfaces.IViewSpec.md) to define the camera viewpoint.

- Set the camera position with [`Eye`](../../../lib/VM.Operations.Post.Interfaces.IViewSpec.Eye.md).
- Set the camera target with [`Target`](../../../lib/VM.Operations.Post.Interfaces.IViewSpec.Target.md).
- Set the camera up direction with [`UpVector`](../../../lib/VM.Operations.Post.Interfaces.IViewSpec.UpVector.md).

Select the animation frame to apply the viewpoint to with [`MoveToAnimationFrame(int)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.MoveToAnimationFrame.md), see [Control Animation Playback](op_control_animation_playback.md). Apply the changed viewpoint to that frame with [`SetViewSpec(IViewSpec)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.SetViewSpec.md); the new viewpoint affects the displayed or captured image for that frame.

## Frame-Specific Viewpoints
Prepare an array of `IViewSpec` entries with [`GetViewSpecs()`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.GetViewSpecs.md). The array contains one `IViewSpec` for each frame available in the animation result. Set the `Eye`, `Target`, and `UpVector` values in each entry and pass the array to [`RecordingAnimation(string, RecordingType, RecordingRangeType, int, IViewSpec[])`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.RecordingAnimation.md). During recording, the corresponding specification is applied before each frame is captured, see [Control Animation Playback](op_control_animation_playback.md).