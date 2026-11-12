# Configure Camera Position
<div align="right"><a href="/document/operation-api/feature/op_configure_camera_position.md" download="op_configure_camera_position.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

This feature covers configuring the camera viewpoint of [`IOperationsAnimation`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.md) with [`IViewSpec`](../../../lib/VM.Operations.Post.Interfaces.IViewSpec.md), created through [Manage View - Creating](op_manage_view.md#creating), for the current animation frame and assigning different viewpoints to loaded animation frames during recording.

## Current Viewpoint
Use `IViewSpec` to define the camera viewpoint.

- Set the camera position with [`Eye`](../../../lib/VM.Operations.Post.Interfaces.IViewSpec.Eye.md).
- Set the camera target with [`Target`](../../../lib/VM.Operations.Post.Interfaces.IViewSpec.Target.md).
- Set the camera up direction with [`UpVector`](../../../lib/VM.Operations.Post.Interfaces.IViewSpec.UpVector.md).

Select the animation frame to apply the viewpoint to with [`MoveToAnimationFrame(int)`](../../../lib/VM.Operations.Post.Interfaces.IOperationAnalysisResult.MoveToAnimationFrame.md), see [Control Animation Playback](op_control_animation_playback.md). Apply the changed viewpoint to that frame with [`SetViewSpec(IViewSpec)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.SetViewSpec.md); the new viewpoint affects the displayed or captured image for that frame.

## Frame-Specific Viewpoints
Prepare an array of `IViewSpec` entries with [`GetViewSpecs()`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.GetViewSpecs.md). The array contains one `IViewSpec` for each frame available in the animation result. Set the `Eye`, `Target`, and `UpVector` values in each entry and pass the array to [`RecordingAnimation(string, RecordingType, RecordingRangeType, int, IViewSpec[])`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.RecordingAnimation.md). During recording, the corresponding specification is applied before each frame is captured, see [Control Animation Playback](op_control_animation_playback.md).
