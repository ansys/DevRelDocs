# Interface IOperationsAnimation
<a id="VM_Operations_Post_Interfaces_IOperationsAnimation"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides animation-view properties and operations for camera control, playback, recording, entity visibility, coordinate systems, and result display settings.

```csharp
public interface IOperationsAnimation : IView, IHasGuid
```

## Properties

 [AnalysisResultType](VM.Operations.Post.Interfaces.IOperationsAnimation.AnalysisResultType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_AnalysisResultType)

Gets the analysis result type associated with animation.

 [BottomColor](VM.Operations.Post.Interfaces.IOperationsAnimation.BottomColor.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_BottomColor)

Gets or sets the color used at the lower part of the animation background.

 [DocumentFilePath](VM.Operations.Post.Interfaces.IOperationsAnimation.DocumentFilePath.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_DocumentFilePath)

Gets the result file path associated with the animation, or an empty string when no result document is associated.

 [IsFollowingCameraActive](VM.Operations.Post.Interfaces.IOperationsAnimation.IsFollowingCameraActive.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_IsFollowingCameraActive)

Gets or sets whether camera tracking is enabled. `true` follows the target selected by [SetFollowingCameraTarget\(string\)](VM.Operations.Post.Interfaces.IOperationsAnimation.SetFollowingCameraTarget.md).

 [IsFollowingRotXAxis](VM.Operations.Post.Interfaces.IOperationsAnimation.IsFollowingRotXAxis.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_IsFollowingRotXAxis)

Gets or sets whether camera tracking follows target rotation around the X axis when `TransformationType` is `Rotation`.

 [IsFollowingRotYAxis](VM.Operations.Post.Interfaces.IOperationsAnimation.IsFollowingRotYAxis.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_IsFollowingRotYAxis)

Gets or sets whether camera tracking follows target rotation around the Y axis when `TransformationType` is `Rotation`.

 [IsFollowingRotZAxis](VM.Operations.Post.Interfaces.IOperationsAnimation.IsFollowingRotZAxis.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_IsFollowingRotZAxis)

Gets or sets whether camera tracking follows target rotation around the Z axis when `TransformationType` is `Rotation`.

 [IsFollowingXAxis](VM.Operations.Post.Interfaces.IOperationsAnimation.IsFollowingXAxis.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_IsFollowingXAxis)

Gets or sets whether camera tracking follows target translation along the X axis when `TransformationType` is `Translation`.

 [IsFollowingYAxis](VM.Operations.Post.Interfaces.IOperationsAnimation.IsFollowingYAxis.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_IsFollowingYAxis)

Gets or sets whether camera tracking follows target translation along the Y axis when `TransformationType` is `Translation`.

 [IsFollowingZAxis](VM.Operations.Post.Interfaces.IOperationsAnimation.IsFollowingZAxis.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_IsFollowingZAxis)

Gets or sets whether camera tracking follows target translation along the Z axis when `TransformationType` is `Translation`.

 [IsVisibleLogo](VM.Operations.Post.Interfaces.IOperationsAnimation.IsVisibleLogo.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_IsVisibleLogo)

Gets or sets whether the logo overlay is visible. `true` shows the logo and `false` hides it.

 [IsVisibleNavigationCube](VM.Operations.Post.Interfaces.IOperationsAnimation.IsVisibleNavigationCube.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_IsVisibleNavigationCube)

Gets or sets whether the navigation cube is visible. `true` shows it and `false` hides it.

 [IsVisibleStateInfo](VM.Operations.Post.Interfaces.IOperationsAnimation.IsVisibleStateInfo.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_IsVisibleStateInfo)

Gets or sets whether animation state information is visible. `true` shows it and `false` hides it.

 [LogoHeight](VM.Operations.Post.Interfaces.IOperationsAnimation.LogoHeight.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_LogoHeight)

Gets or sets the logo height in pixels.

 [LogoPath](VM.Operations.Post.Interfaces.IOperationsAnimation.LogoPath.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_LogoPath)

Gets or sets the logo image file path. (`.bmp`, `.jpg`, `.png`)

 [LogoPosition](VM.Operations.Post.Interfaces.IOperationsAnimation.LogoPosition.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_LogoPosition)

Gets or sets the logo position selected from [`Layout`](VM.Models.Post.Layout.md).

 [LogoWidth](VM.Operations.Post.Interfaces.IOperationsAnimation.LogoWidth.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_LogoWidth)

Gets or sets the logo width in pixels.

 [NavigationCubePosition](VM.Operations.Post.Interfaces.IOperationsAnimation.NavigationCubePosition.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_NavigationCubePosition)

Gets or sets the navigation-cube position selected from [`Layout`](VM.Models.Post.Layout.md).

 [Opacity](VM.Operations.Post.Interfaces.IOperationsAnimation.Opacity.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_Opacity)

Gets or sets logo opacity from `0` to `100`, where `0` is fully transparent and `100` is fully opaque.

 [StateInfoPosition](VM.Operations.Post.Interfaces.IOperationsAnimation.StateInfoPosition.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_StateInfoPosition)

Gets or sets the state-information position selected from [`Layout`](VM.Models.Post.Layout.md).

 [TextColorStateInfo](VM.Operations.Post.Interfaces.IOperationsAnimation.TextColorStateInfo.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_TextColorStateInfo)

Gets or sets the color used to draw state-information text.

 [TopColor](VM.Operations.Post.Interfaces.IOperationsAnimation.TopColor.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_TopColor)

Gets or sets the color used at the upper part of the animation background.

 [TransformationType](VM.Operations.Post.Interfaces.IOperationsAnimation.TransformationType.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_TransformationType)

Gets or sets [`TransformationType`](VM.Models.Post.TransformationType.md) that determines the camera-follow direction.

## Methods

 [CreateCoordinateSystem\(string, string\)](VM.Operations.Post.Interfaces.IOperationsAnimation.CreateCoordinateSystem.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_CreateCoordinateSystem\_System\_String\_System\_String\_)

Creates a coordinate system in the analysis result associated with `IOperationsAnimation`.

 [CreateSoundPressure\(IList<string\>, IList<string\>, double, double, double, double, double, double, int, int, bool\)](VM.Operations.Post.Interfaces.IOperationsAnimation.CreateSoundPressure.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_CreateSoundPressure\_System\_Collections\_Generic\_IList\_System\_String\_\_System\_Collections\_Generic\_IList\_System\_String\_\_System\_Double\_System\_Double\_System\_Double\_System\_Double\_System\_Double\_System\_Double\_System\_Int32\_System\_Int32\_System\_Boolean\_)

Creates sound-pressure curve data for selected bodies and coordinate systems.

 [Fit\(\)](VM.Operations.Post.Interfaces.IOperationsAnimation.Fit.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_Fit)

Fits all visible entities inside the animation viewport.

 [GetCoordinateSystem\(string\)](VM.Operations.Post.Interfaces.IOperationsAnimation.GetCoordinateSystem.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_GetCoordinateSystem\_System\_String\_)

Gets a coordinate system by its [`FullName`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.FullName.md).

 [GetViewModelByName\(string\)](VM.Operations.Post.Interfaces.IOperationsAnimation.GetViewModelByName.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_GetViewModelByName\_System\_String\_)

Finds an entity by its full name.

 [GetViewSpecs\(\)](VM.Operations.Post.Interfaces.IOperationsAnimation.GetViewSpecs.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_GetViewSpecs)

Creates an array of view specifications corresponding to the number of loaded animation frames.

 [HideOthers\(params string\[\]\)](VM.Operations.Post.Interfaces.IOperationsAnimation.HideOthers.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_HideOthers\_System\_String\_\_\_)

Shows entities identified by full name and hides other entities.

 [HideOthers\(params Guid\[\]\)](VM.Operations.Post.Interfaces.IOperationsAnimation.HideOthers.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_HideOthers\_System\_Guid\_\_\_)

Shows entities identified by GUID and hides other entities.

 [PlayAnimation\(\)](VM.Operations.Post.Interfaces.IOperationsAnimation.PlayAnimation.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_PlayAnimation)

Starts playback of animation frames in active `IOperationsAnimation`.

 [RecordingAnimation\(string, RecordingType, RecordingRangeType, int, IViewSpec\[\]\)](VM.Operations.Post.Interfaces.IOperationsAnimation.RecordingAnimation.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_RecordingAnimation\_System\_String\_VM\_Models\_Post\_RecordingType\_VM\_Models\_Post\_RecordingRangeType\_System\_Int32\_VM\_Operations\_Post\_Interfaces\_IViewSpec\_\_\_)

Records loaded animation frames to a file.

 [RemoveCoordinateSystem\(string\)](VM.Operations.Post.Interfaces.IOperationsAnimation.RemoveCoordinateSystem.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_RemoveCoordinateSystem\_System\_String\_)

Removes a removable coordinate system identified by its full name.

 [SetFollowingCameraTarget\(string\)](VM.Operations.Post.Interfaces.IOperationsAnimation.SetFollowingCameraTarget.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_SetFollowingCameraTarget\_System\_String\_)

Sets a body, marker, node, or coordinate system as the camera-follow target.

 [SetViewSpec\(IViewSpec\)](VM.Operations.Post.Interfaces.IOperationsAnimation.SetViewSpec.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_SetViewSpec\_VM\_Operations\_Post\_Interfaces\_IViewSpec\_)

Applies camera information from [`IViewSpec`](VM.Operations.Post.Interfaces.IViewSpec.md) to the current animation frame.

 [ShowAll\(\)](VM.Operations.Post.Interfaces.IOperationsAnimation.ShowAll.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_ShowAll)

Shows all entities in the animation view.

 [StopAnimation\(\)](VM.Operations.Post.Interfaces.IOperationsAnimation.StopAnimation.md\#VM\_Operations\_Post\_Interfaces\_IOperationsAnimation\_StopAnimation)

Stops animation playback.
