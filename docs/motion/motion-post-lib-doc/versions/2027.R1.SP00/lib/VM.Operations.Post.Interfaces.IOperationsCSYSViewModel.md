# Interface IOperationsCSYSViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsCSYSViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides configuration for a coordinate system created with [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md).

```csharp
public interface IOperationsCSYSViewModel
```

## Properties

 [CurrentCoordinateSystemType](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CurrentCoordinateSystemType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_CurrentCoordinateSystemType)

Gets or sets the coordinate-system representation selected from [`GeneralMarkerType`](VM.Models.Post.GeneralMarkerType.md).

 [CylindricalAxisR](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CylindricalAxisR.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_CylindricalAxisR)

Gets or sets the radial axis selected from [`CoordinateType`](VM.Models.Post.CoordinateType.md) for cylindrical coordinates.

 [CylindricalAxisZ](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CylindricalAxisZ.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_CylindricalAxisZ)

Gets or sets the axial direction selected from [`CoordinateType`](VM.Models.Post.CoordinateType.md) for cylindrical coordinates.

 [FullName](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.FullName.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_FullName)

Gets or sets the full name used to identify the coordinate system with [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md).

 [IsVisible](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisible.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_IsVisible)

Gets or sets whether the coordinate-system marker is rendered. `true` shows the marker and `false` hides it.

 [IsVisibleLabel](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleLabel.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_IsVisibleLabel)

Gets or sets whether the coordinate-system label is rendered. `true` shows the label and `false` hides it.

 [IsVisibleLabelBackground](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleLabelBackground.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_IsVisibleLabelBackground)

Gets or sets whether the background behind the coordinate-system label is rendered. `true` shows it when `IsVisibleLabel` is `true`, and `false` hides it.

 [IsVisibleTrajectory](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleTrajectory.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_IsVisibleTrajectory)

Gets or sets whether the coordinate-system trajectory is rendered using [`TrajectoryColor`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TrajectoryColor.md). `true` shows it and `false` hides it.

 [LabelBackGroundColor](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.LabelBackGroundColor.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_LabelBackGroundColor)

Gets or sets the background color behind the coordinate-system label when [`IsVisibleLabel`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleLabel.md) and [`IsVisibleLabelBackground`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleLabelBackground.md) are `true`.

 [LabelTextColor](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.LabelTextColor.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_LabelTextColor)

Gets or sets the color used to render coordinate-system label text when [`IsVisibleLabel`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleLabel.md) is `true`.

 [MarkerSize](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.MarkerSize.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_MarkerSize)

Gets or sets the size of the rendered coordinate-system marker.

 [ParentInfo](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.ParentInfo.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_ParentInfo)

Gets or sets the full name of the body, node, or coordinate system whose motion defines the coordinate-system parent.

 [SphericalAxis1](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.SphericalAxis1.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_SphericalAxis1)

Gets or sets the first spherical-axis direction selected from [`CoordinateType`](VM.Models.Post.CoordinateType.md) when [`CurrentCoordinateSystemType`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CurrentCoordinateSystemType.md) is spherical.

 [SphericalAxis2](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.SphericalAxis2.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_SphericalAxis2)

Gets or sets the second spherical-axis direction selected from [`CoordinateType`](VM.Models.Post.CoordinateType.md) when [`CurrentCoordinateSystemType`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.CurrentCoordinateSystemType.md) is spherical.

 [TrajectoryColor](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TrajectoryColor.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_TrajectoryColor)

Gets or sets the color used to render the coordinate-system trajectory when [`IsVisibleTrajectory`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.IsVisibleTrajectory.md) is `true`.

 [TransformationOffsetAngle](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TransformationOffsetAngle.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_TransformationOffsetAngle)

Gets or sets the angular offset applied to the parent reference orientation. The value is interpreted with [`TransformationOffsetRotationType`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TransformationOffsetRotationType.md) and [`TransformationOffsetRotationAxis`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TransformationOffsetRotationAxis.md).

 [TransformationOffsetPosition](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TransformationOffsetPosition.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_TransformationOffsetPosition)

Gets or sets the position offset applied to the parent reference position.

 [TransformationOffsetRotationAxis](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TransformationOffsetRotationAxis.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_TransformationOffsetRotationAxis)

Gets or sets the rotation-axis sequence selected from VM.Models.Post.RotationAxes for angular offsets.

 [TransformationOffsetRotationType](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.TransformationOffsetRotationType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsCSYSViewModel\_TransformationOffsetRotationType)

Gets or sets how angular offsets are interpreted, using a value from [`RotationTypes`](VM.Models.Post.RotationTypes.md).
