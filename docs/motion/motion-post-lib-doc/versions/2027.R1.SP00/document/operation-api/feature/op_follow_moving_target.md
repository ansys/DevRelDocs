# Follow a Moving Target
<div align="right"><a href="/document/operation-api/feature/op_follow_moving_target.md" download="op_follow_moving_target.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

This feature covers selecting an entity for the camera of [`IOperationsAnimation`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.md) to follow, enabling camera tracking, and choosing whether the camera follows the entity's translation or rotation.

## Selecting a Target
`IOperationsAnimation` created through [Manage View - Creating](op_manage_view.md#creating) is required before selecting a target for camera tracking.

Select a target with [`SetFollowingCameraTarget(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.SetFollowingCameraTarget.md). Subsequent camera-follow updates use the found entity as their target.

<Danger>
The target name must identify a supported entity. If no supported entity is found, no camera target is set.
</Danger>

## Enabling Camera Tracking
Turn camera tracking on or off with [`IsFollowingCameraActive`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.IsFollowingCameraActive.md). With a selected target and tracking enabled, camera updates follow the target as its position or orientation changes.

## Configuring Tracking Direction
Choose how target motion affects the camera with [`TransformationType`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.TransformationType.md). [`TransformationType`](../../../lib/VM.Models.Post.TransformationType.md) value Translation moves the camera along the enabled translation axes while keeping its orientation. The Rotation value makes target orientation determine the camera position and up direction, while the enabled rotation axes determine which rotations are applied.

Configure the axes used by each mode:

- Translation follows the selected components from [`IsFollowingXAxis`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.IsFollowingXAxis.md), [`IsFollowingYAxis`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.IsFollowingYAxis.md), and [`IsFollowingZAxis`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.IsFollowingZAxis.md).
- Rotation follows the selected components from [`IsFollowingRotXAxis`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.IsFollowingRotXAxis.md), [`IsFollowingRotYAxis`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.IsFollowingRotYAxis.md), and [`IsFollowingRotZAxis`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.IsFollowingRotZAxis.md).
