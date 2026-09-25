# Properties
This feature covers reading animation metadata and setting the visual parts of [`IOperationsAnimation`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.md). These settings change the animation view, and the same change appears in frames captured through [Control Animation Playback](op_control_animation_playback.md#recording).

## Reading Metadata
Read the analysis type with [`AnalysisResultType`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.AnalysisResultType.md) and the source result file path with [`DocumentFilePath`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.DocumentFilePath.md). The path identifies the result data behind the animation.

## Configuring the Background
Set the lower and upper background colors with [`BottomColor`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.BottomColor.md) and [`TopColor`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.TopColor.md).

## Configuring the Logo
Show or hide the logo with [`IsVisibleLogo`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.IsVisibleLogo.md). Set its file, size, position, and transparency with [`LogoPath`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.LogoPath.md), [`LogoHeight`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.LogoHeight.md), [`LogoWidth`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.LogoWidth.md), [`LogoPosition`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.LogoPosition.md), and [`Opacity`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.Opacity.md).

## Configuring the Navigation Cube
Show or hide the navigation cube with [`IsVisibleNavigationCube`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.IsVisibleNavigationCube.md), and set where it sits with [`NavigationCubePosition`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.NavigationCubePosition.md).

## Configuring State Information
Show or hide state information with [`IsVisibleStateInfo`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.IsVisibleStateInfo.md). Set its position and text color with [`StateInfoPosition`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.StateInfoPosition.md) and [`TextColorStateInfo`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.TextColorStateInfo.md).