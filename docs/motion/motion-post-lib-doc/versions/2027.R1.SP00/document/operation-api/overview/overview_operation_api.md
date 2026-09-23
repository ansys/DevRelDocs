# Overview

The Operation API provides an in-process Python interface for automating operations in the running Ansys Motion Standalone Postprocessor. Its entry point exposes operations for loading result documents, organizing pages and views, configuring animation and chart data, and running supported analyses.

Use this API for operations that work with the active Postprocessor session, including its pages, views, documents, and operation interfaces.

For downloadable API modules, result files, and example scripts, see [Introduction](../../../index.md).

## Features

| Feature | Available operation |
|---|---|
| [Import File](../feature/op_import_file.md) | Import result documents and add external numeric data to a chart. |
| [Manage Page](../feature/op_manage_page.md) | Create, get, activate and close pages. |
| [Manage View](../feature/op_manage_view.md) | Create, get, activate, close, and dock views within a page. |
| [Configure Camera Position](../feature/op_configure_camera_position.md) | Set the camera viewpoint for an animation and prepare frame-specific camera specifications. |
| [Follow a Moving Target](../feature/op_follow_moving_target.md) | Configure an animation camera to follow a selected target through the loaded frames. |
| [Manage a Coordinate System](../feature/op_manage_coordinate_system.md) | Create, get, remove, and configure coordinate systems used by an animation. |
| [Control Animation Playback](../feature/op_control_animation_playback.md) | Load, play, record, stop, and position animation frames. |
| [Manage a Contour](../feature/op_manage_contour.md) | Create, get, remove, export and configure contour data in an animation. |
| [Manage a Vector](../feature/op_manage_vector.md) | Create, get, remove, and configure vector display data in an animation. |
| [Animation Properties](../feature/op_animation_properties.md) | Configure animation display and presentation properties. |
| [Manage a Curve](../feature/op_manage_curve.md) | Create, get, remove, and export curves in a chart. |
| [Postprocess a Curve](../feature/op_postprocess_curve.md) | Create calculated curves through mathematical and signal-processing operations. |
| [Curve Properties](../feature/op_curve_properties.md) | Configure the properties of chart curves. |
| [Chart Properties](../feature/op_chart_properties.md) | Configure chart appearance and display behavior. |
| [Manage Expression](../feature/op_manage_expression.md) | Create, get, and remove expressions for a dynamic analysis result. |
| [Manage an Analysis Result](../feature/op_manage_analysis_result.md) | Read contour and curve metadata, read result state, and create contours. |
| [Run an Analysis](../feature/op_run_analysis.md) | Run fatigue and sound-pressure analysis operations. |