# refine_spline

<a id="ansys.meshing.prime.BoundaryFittedSpline.refine_spline"></a>

#### BoundaryFittedSpline.refine_spline(part_id, spline_ids, refine_spline_params)

Refine boundary fitted splines.

Now H and P refinement are supported.
Refinement along one or more dimension can be suppressed using refinement parameters in the input.

* **Parameters:**

  **part_id**
  : Id of the part.

  **spline_ids**
  : Ids of the splines on which refinement is performed.

  **refine_spline_params**
  : Structure containing parameters for spline refinement.

* **Returns:**
  

  [`IGAResults`](ansys.meshing.prime.IGAResults.md#ansys.meshing.prime.IGAResults)
  : Returns the IGAResults Structure.
  
* **Return type:**

  [`IGAResults`](ansys.meshing.prime.IGAResults.md#ansys.meshing.prime.IGAResults)

### Examples

```pycon
>>> from ansys.meshing.prime import BoundaryFittedSpline
>>> #connect client to server and get model from it
>>> client = Client(ip="localhost", port=50060)
>>> model = client.model
>>> boundary_fitted_spline = BoundaryFittedSpline(model = model)
>>> results = boundary_fitted_spline.refine_spline(part_id, spline_ids, refine_spline_params)
```

<!-- !! processed by numpydoc !! -->
