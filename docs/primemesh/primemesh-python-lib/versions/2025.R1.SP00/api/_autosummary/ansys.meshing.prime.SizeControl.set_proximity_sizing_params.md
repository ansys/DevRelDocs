# set_proximity_sizing_params

<a id="ansys.meshing.prime.SizeControl.set_proximity_sizing_params"></a>

#### SizeControl.set_proximity_sizing_params(params)

Set the proximity sizing parameters to compute volumetric size field.

* **Parameters:**

  **params**
  : Parameters that enables you to specify number of elements in the gaps.

* **Returns:**

  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)
  : Return the SetSizingResults.

* **Return type:**

  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)

### Examples

```pycon
>>> size_control.set_proximity_sizing_params(
>>>                  prime.ProximitySizingParams(model=model,
>>>                  min = 0.1, max = 1.0, growth_rate = 1.2))
```

<!-- !! processed by numpydoc !! -->
