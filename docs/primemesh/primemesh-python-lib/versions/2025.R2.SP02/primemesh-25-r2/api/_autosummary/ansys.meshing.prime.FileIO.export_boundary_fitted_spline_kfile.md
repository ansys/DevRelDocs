# export_boundary_fitted_spline_kfile

<a id="ansys.meshing.prime.FileIO.export_boundary_fitted_spline_kfile"></a>

#### FileIO.export_boundary_fitted_spline_kfile(file_name, export_params)

Export the IGA LS-DYNA keyword file for a boundary fitted spline.

* **Parameters:**

  **file_name**
  : Name of the keyword file.

  **export_params**
  : Parameters for exporting the keyword file.

* **Returns:**

  [`FileWriteResults`](ansys.meshing.prime.FileWriteResults.md#ansys.meshing.prime.FileWriteResults)
  : Results from exporting the keyword file.

* **Return type:**

  [`FileWriteResults`](ansys.meshing.prime.FileWriteResults.md#ansys.meshing.prime.FileWriteResults)

### Examples

```pycon
>>> results = file_io.export_boundary_fitted_spline_k_file(
                file_name,
                ExportBoundaryFittedSplineParams(model=model))
```

<!-- !! processed by numpydoc !! -->
