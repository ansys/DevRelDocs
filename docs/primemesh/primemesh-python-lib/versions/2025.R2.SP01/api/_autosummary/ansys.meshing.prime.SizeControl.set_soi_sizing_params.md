# set_soi_sizing_params

<a id="ansys.meshing.prime.SizeControl.set_soi_sizing_params"></a>

#### SizeControl.set_soi_sizing_params(params)

Set the sphere of influence sizing parameters to compute volumetric size field.

* **Parameters:**

  **params**
  : Parameters that enables you to set sizing on the spherical influence region.

* **Returns:**

  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)
  : Returns the SetSizingResults.

* **Return type:**

  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> size_control.set_soi_sizing_params(
>>>                  prime.SoiSizingParams(model=model,
>>>                  max = 0.1, growth_rate = 1.2))
```

<!-- !! processed by numpydoc !! -->
