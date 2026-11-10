# Properties
<div align="right"><a href="/document/operation-api/feature/op_animation_properties.md" download="op_animation_properties.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
