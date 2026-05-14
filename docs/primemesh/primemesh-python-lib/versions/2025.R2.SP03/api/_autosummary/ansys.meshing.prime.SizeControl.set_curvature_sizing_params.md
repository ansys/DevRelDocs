# set_curvature_sizing_params

<a id="ansys.meshing.prime.SizeControl.set_curvature_sizing_params"></a>

#### SizeControl.set_curvature_sizing_params(params)

Set the curvature sizing parameters to compute volumetric size field.

* **Parameters:**

  **params**
  : Parameters that enables you to set the normal angle as the maximum allowable angle at which one element edge may span.

* **Returns:**

  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)
  : Return the SetSizingResults.

* **Return type:**

  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)

### Examples

```pycon
>>> size_control.set_curvature_sizing_params(
>>>                  prime.CurvatureSizingParams(model=model,
>>>                  min = 0.1, max = 1.0, growth_rate = 1.2,
>>>                  normal_angle = 18))
```

<!-- !! processed by numpydoc !! -->
