# set_meshed_sizing_params

<a id="ansys.meshing.prime.SizeControl.set_meshed_sizing_params"></a>

#### SizeControl.set_meshed_sizing_params(params)

Set the meshed sizing parameters to compute volumetric size field.

* **Parameters:**

  **params**
  : Parameters that enables you to set the sizes based on existing sizes.

* **Returns:**

  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)
  : Return the SetSizingResults.

* **Return type:**

  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)

### Examples

```pycon
>>> size_control.set_meshed_sizing_params(
>>>                  prime.MeshedSizingParams(model=model,
>>>                  growth_rate = 1.2))
```

<!-- !! processed by numpydoc !! -->
