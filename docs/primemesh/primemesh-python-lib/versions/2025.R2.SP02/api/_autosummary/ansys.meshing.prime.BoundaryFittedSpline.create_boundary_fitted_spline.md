# create_boundary_fitted_spline

<a id="ansys.meshing.prime.BoundaryFittedSpline.create_boundary_fitted_spline"></a>

#### BoundaryFittedSpline.create_boundary_fitted_spline(part_id, cell_zonelet_ids, boundary_fitted_spline_params)

Create boundary fitted spline for structured hex-mesh.

The hex-mesh can be structured in blocks but must be conformally connected.
That is, each block must have six sided volume and must be connected to other blocks through unique face.
The degree and number of control points of the spline can be set in the fitting parameter structure.

* **Parameters:**

  **part_id**
  : Id of the part.

  **cell_zonelet_ids**
  : Ids of the cell zonelets on which spline will be fit.

  **boundary_fitted_spline_params**
  : Structure containing spline fitting parameters.

* **Returns:**

  [`IGAResults`](ansys.meshing.prime.IGAResults.md#ansys.meshing.prime.IGAResults)
  : Returns the IGAResults.

* **Return type:**

  [`IGAResults`](ansys.meshing.prime.IGAResults.md#ansys.meshing.prime.IGAResults)

### Examples

```pycon
>>> from ansys.meshing.prime import BoundaryFittedSpline
>>> #connect client to server and get model from it
>>> client = Client(ip="localhost", port=50060)
>>> model = client.model
>>> boundary_fitted_spline = BoundaryFittedSpline(model = model)
>>> results = boundary_fitted_spline.create_boundary_fitted_spline(part_id, cell_zonelet_ids, boundary_fitted_spline_params)
```

<!-- !! processed by numpydoc !! -->
