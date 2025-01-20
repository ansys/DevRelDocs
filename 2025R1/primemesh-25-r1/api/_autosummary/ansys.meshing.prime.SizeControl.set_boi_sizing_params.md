# set_boi_sizing_params

<a id="ansys.meshing.prime.SizeControl.set_boi_sizing_params"></a>

#### SizeControl.set_boi_sizing_params(params)

Set the body of influence sizing parameters to compute volumetric size field.

* **Parameters:**

  **params**
  : Parameters that enables you to set sizing on the body of influence region.

* **Returns:**

  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)
  : Return the SetSizingResults.

* **Return type:**

  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)

### Examples

```pycon
>>> size_control.set_boi_sizing_params(
>>>                  prime.BoiSizingParams(model=model,
>>>                  max = 0.1, growth_rate = 1.2))
```

<!-- !! processed by numpydoc !! -->
