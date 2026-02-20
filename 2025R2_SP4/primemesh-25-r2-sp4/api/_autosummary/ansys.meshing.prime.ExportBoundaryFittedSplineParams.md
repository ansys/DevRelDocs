# ExportBoundaryFittedSplineParams

<a id="ansys.meshing.prime.ExportBoundaryFittedSplineParams"></a>

### *class* ansys.meshing.prime.ExportBoundaryFittedSplineParams(model=None, id_offset=None, id_start=None, json_data=None, \*\*kwargs)

Parameters for exporting boundary fitted splines.

* **Parameters:**

  **model: Model**
  : Model to create a `ExportBoundaryFittedSplineParams` object with default parameters.

  **id_offset: int, optional**
  : Offset value for IGA entity ids between parts.

  **id_start: int, optional**
  : Start ids for IGA entities.

  **json_data: dict, optional**
  : JSON dictionary to create a `ExportBoundaryFittedSplineParams` object with provided parameters.

### Examples

```pycon
>>> export_boundary_fitted_spline_params = prime.ExportBoundaryFittedSplineParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`ExportBoundaryFittedSplineParams.print_default`](ansys.meshing.prime.ExportBoundaryFittedSplineParams.print_default.md#ansys.meshing.prime.ExportBoundaryFittedSplineParams.print_default)()   | Print the default values of `ExportBoundaryFittedSplineParams` object.   |
| [`ExportBoundaryFittedSplineParams.set_default`](ansys.meshing.prime.ExportBoundaryFittedSplineParams.set_default.md#ansys.meshing.prime.ExportBoundaryFittedSplineParams.set_default)([...])    | Set the default values of the `ExportBoundaryFittedSplineParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| [`ExportBoundaryFittedSplineParams.id_offset`](ansys.meshing.prime.ExportBoundaryFittedSplineParams.id_offset.md#ansys.meshing.prime.ExportBoundaryFittedSplineParams.id_offset)   | Offset value for IGA entity ids between parts.   |
| [`ExportBoundaryFittedSplineParams.id_start`](ansys.meshing.prime.ExportBoundaryFittedSplineParams.id_start.md#ansys.meshing.prime.ExportBoundaryFittedSplineParams.id_start)      | Start ids for IGA entities.                      |
<!-- vale on -->