# Manage View
<div align="right"><a href="/document/operation-api/feature/op_manage_view.md" download="op_manage_view.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

This feature covers creating, finding, activating, closing, and docking [`IView`](../../../lib/VM.Operations.Post.Interfaces.IView.md), the animation or chart view used by the Operation API.

The Operation API uses [`IOperationsAnimation`](../../../lib/VM.Operations.Post.Interfaces.IOperationsAnimation.md) for animation results and [`IOperationsLine2DViewModelBase`](../../../lib/VM.Operations.Post.Interfaces.IOperationsLine2DViewModelBase.md) for chart data. Creating, finding, and closing `IView` are provided by [`IPage`](../../../lib/VM.Operations.Post.Interfaces.IPage.md), while activating and docking are provided by `IView` itself.

## Creating
Create `IPage` before creating a view, see [Manage Page](op_manage_page.md).

[`IAnalysisResultViewModel`](../../../lib/VM.ViewModels.Post.IAnalysisResultViewModel.md) from imported result data is required for animation creation, see [Import File](op_import_file.md).

Create `IOperationsAnimation` with [`CreateAnimation(IAnalysisResultViewModel, string)`](../../../lib/VM.Operations.Post.Interfaces.IPage.CreateAnimation.md).

The new `IOperationsAnimation` becomes active after creation.

After creation, `IOperationsAnimation` can be used with related animation operations:

- [Configure Camera Position](op_configure_camera_position.md)
- [Follow a Moving Target](op_follow_moving_target.md)
- [Manage a Coordinate System](op_manage_coordinate_system.md)
- [Control Animation Playback](op_control_animation_playback.md)
- [Manage a Contour](op_manage_contour.md)
- [Manage a Vector](op_manage_vector.md)
- [Animation Properties](op_animation_properties.md)
- [Run an Analysis](op_run_analysis.md)

Create `IOperationsLine2DViewModelBase` with [`CreateChart(string)`](../../../lib/VM.Operations.Post.Interfaces.IPage.CreateChart.md).

The new `IOperationsLine2DViewModelBase` becomes active after creation.

`IOperationsLine2DViewModelBase` can be used with related chart operations:

- [Manage a Curve](op_manage_curve.md)
- [Postprocess a Curve](op_postprocess_curve.md)
- [Chart Properties](op_chart_properties.md)
- [Import File](op_import_file.md)

## Getting
Get `IView` with [`GetView(int)`](../../../lib/VM.Operations.Post.Interfaces.IPage.GetView.md) or [`GetView(string)`](../../../lib/VM.Operations.Post.Interfaces.IPage.GetView.md).

Get the active `IView` with [`GetActiveView()`](../../../lib/VM.Operations.Post.Interfaces.IPage.GetActiveView.md).

Get all views with [`GetViews()`](../../../lib/VM.Operations.Post.Interfaces.IPage.GetViews.md).

## Activating
Activate the target `IView` with [`Activate()`](../../../lib/VM.Operations.Post.Interfaces.IView.Activate.md). Other views in the same `IPage` are deactivated.

## Closing
Close `IView` through [`CloseView(IView)`](../../../lib/VM.Operations.Post.Interfaces.IPage.CloseView.md), [`CloseView(int)`](../../../lib/VM.Operations.Post.Interfaces.IPage.CloseView.md), or [`CloseView(string)`](../../../lib/VM.Operations.Post.Interfaces.IPage.CloseView.md).

## Docking
Place `IView` relative to another `IView` with [`DockTo(DockLayout, IView)`](../../../lib/VM.Operations.Post.Interfaces.IView.DockTo.md).

Docking changes the arrangement of the two views without changing how they are found or closed.
