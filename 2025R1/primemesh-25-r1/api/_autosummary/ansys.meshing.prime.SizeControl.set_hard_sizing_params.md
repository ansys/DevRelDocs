# set_hard_sizing_params

<a id="ansys.meshing.prime.SizeControl.set_hard_sizing_params"></a>

#### SizeControl.set_hard_sizing_params(params)

Set the hard sizing parameters to compute volumetric size field.

* **Parameters:**

  **params**
  : Parameters that enables you to set uniform size based on the specified size.

* **Returns:**

  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)
  : Return the SetSizingResults.

* **Return type:**

  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)

### Examples

```pycon
>>> size_control.set_hard_sizing_params(
>>>                  prime.HardSizingParams(model=model,
>>>                  min = 0.1, growth_rate = 1.2))
```

<!-- !! processed by numpydoc !! -->
