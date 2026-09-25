# Manage a Coordinate System
This feature covers creating, getting, and removing [`IOperationsCSYSViewModel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.md) with [`IOperationsAnimation`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.md), and configuring the coordinate system it defines for an animation. The created coordinate system can be used as input for curve creation and sound pressure calculation, see [Manage a Curve](op_manage_curve.md) and [Run an Analysis](op_run_analysis.md).

## Creating
[`IOperationsAnimation`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.md) created through [Manage View - Creating](op_manage_view.md#creating) is required before creating `IOperationsCSYSViewModel`.

Create `IOperationsCSYSViewModel` with [`CreateCoordinateSystem(string, string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.CreateCoordinateSystem.md). The created `IOperationsCSYSViewModel` can then be configured through its properties.

> [!IMPORTANT]
> The parent entity must exist. The requested name must not already identify an entity in [`IAnalysisResultViewModel`](../../../lib/VM.ViewModels.Post.IAnalysisResultViewModel.md). If either condition is not met, the coordinate system is not created.

The created coordinate system can be used as a reference for a curve, see [Manage a Curve - Adding](op_manage_curve.md#adding).

It can also be used as a microphone position for sound pressure calculation, see [Run an Analysis - Sound Pressure](op_run_analysis.md#sound-pressure).

Changing the coordinate system's [`ParentInfo`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.ParentInfo.md) afterward changes which entity's motion the coordinate system follows, so its position and orientation at each frame change as well. Any Deformation, Stress, or Strain contour computed relative to this coordinate system reflects the new position and orientation.

## Removing
Remove a coordinate system by name with [`RemoveCoordinateSystem(string)`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.RemoveCoordinateSystem.md). The built-in `Inertia` coordinate system is preserved.

## Properties
Configure the coordinate system through these property groups:

- Set its name and parent with [`FullName`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.FullName.md) and `ParentInfo`.
- Choose a Cartesian, cylindrical, or spherical representation with [`CurrentCoordinateSystemType`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CurrentCoordinateSystemType.md). Set the cylindrical axes with [`CylindricalAxisR`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CylindricalAxisR.md) and [`CylindricalAxisZ`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CylindricalAxisZ.md), or set the spherical axes with [`SphericalAxis1`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.SphericalAxis1.md) and [`SphericalAxis2`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.SphericalAxis2.md).
- Show the marker and set its size with [`IsVisible`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisible.md) and [`MarkerSize`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.MarkerSize.md).
- Show the label, its background, and its colors with [`IsVisibleLabel`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleLabel.md), [`IsVisibleLabelBackground`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleLabelBackground.md), [`LabelBackGroundColor`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.LabelBackGroundColor.md), and [`LabelTextColor`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.LabelTextColor.md).
- Show the trajectory and set its color with [`IsVisibleTrajectory`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleTrajectory.md) and [`TrajectoryColor`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TrajectoryColor.md).
- Apply position and angle offsets with [`TransformationOffsetPosition`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TransformationOffsetPosition.md) and [`TransformationOffsetAngle`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TransformationOffsetAngle.md). Choose the angle interpretation and rotation sequence with [`TransformationOffsetRotationType`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TransformationOffsetRotationType.md) and [`TransformationOffsetRotationAxis`](../../../lib/VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TransformationOffsetRotationAxis.md).