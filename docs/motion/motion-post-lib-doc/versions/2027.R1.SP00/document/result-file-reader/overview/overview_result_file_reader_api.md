# Overview

The Result File Reader API provides a Python interface for opening Ansys Motion result files and reading their analysis data without opening the Postprocessor. Its entry point opens one result file and exposes result information, entity data, curve data, contour data, vector data, and supported analysis operations.

Use this API for operations that inspect or export result-file data independently of an interactive Postprocessor session.

For downloadable API modules, result files, and example scripts, see [Introduction](../../index.md).

## Features

| Feature | Capabilities |
|---|---|
| [Read Result Information](../feature/rfr_read_result_information.md) | Read state identifiers, reference times, analysis type, and frequency information. |
| [Manage a Coordinate System](../feature/rfr_manage_coordinate_system.md) | Create, get, export, and remove coordinate-system marker data. |
| [Get Curve Data](../feature/rfr_get_curve_data.md) | Get curve data from result entities and build new points by interpolation. |
| [Get Contour Data](../feature/rfr_get_contour_data.md) | Get and export contour data for selected result states and entities. |
| [Get Vector Data](../feature/rfr_get_vector_data.md) | Create, get, and export vector data for selected result entities. |
| [Run an Analysis](../feature/rfr_run_analysis.md) | Calculate sound-pressure data and export acoustic raw data. |