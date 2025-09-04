# set_soft_sizing_params

<a id="ansys.meshing.prime.SizeControl.set_soft_sizing_params"></a>

#### SizeControl.set_soft_sizing_params(params)

Set the soft sizing parameters to compute volumetric size field.

* **Parameters:**

  **params**
  : Parameters that enables you to set the maximum size on scoped face zonelets.

* **Returns:**

  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)
  : Return the SetSizingResults.

* **Return type:**

  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)

### Examples

```pycon
>>> size_control.set_soft_sizing_params(
>>>                  prime.SoftSizingParams(model=model,
>>>                  max = 1.0, growth_rate = 1.2))
```

<!-- !! processed by numpydoc !! -->
