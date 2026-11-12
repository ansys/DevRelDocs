# Overview
<div align="right"><a href="/document/result-file-reader/overview/overview_result_file_reader_api.md" download="overview_result_file_reader_api.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

The Result File Reader API provides a Python interface for opening Ansys Motion result files and reading their analysis data without opening the Postprocessor. Its entry point opens one result file and exposes result information, entity data, curve data, contour data, vector data, and supported analysis operations.

Use this API for operations that inspect or export result-file data independently of an interactive Postprocessor session.

For downloadable API modules, result files, and example scripts, see [Introduction](../../../index.md).

## Features

| Feature | What you can do |
|---|---|
| [Read Result Information](../feature/rfr_read_result_information.md) | Read state identifiers, reference times, analysis type, and frequency information. |
| [Manage a Coordinate System](../feature/rfr_manage_coordinate_system.md) | Create, get, export, and remove coordinate-system marker data. |
| [Get Curve Data](../feature/rfr_get_curve_data.md) | Get curve data from result entities and build new points by interpolation. |
| [Get Contour Data](../feature/rfr_get_contour_data.md) | Get and export contour data for selected result states and entities. |
| [Get Vector Data](../feature/rfr_get_vector_data.md) | Create, get, and export vector data for selected result entities. |
| [Run an Analysis](../feature/rfr_run_analysis.md) | Calculate sound-pressure data and export acoustic raw data. |
