# get_summary

<a id="ansys.meshing.prime.SizeControl.get_summary"></a>

#### SizeControl.get_summary(params)

Get the size control summary along with the evaluated scope for the provided parameters..

* **Parameters:**

  **params**
  : Size control summary parameters.

* **Returns:**
  
  [`SizeControlSummaryResult`](ansys.meshing.prime.SizeControlSummaryResult.md#ansys.meshing.prime.SizeControlSummaryResult)
  : Return the SizeControlSummaryResult.

* **Return type:**

  [`SizeControlSummaryResult`](ansys.meshing.prime.SizeControlSummaryResult.md#ansys.meshing.prime.SizeControlSummaryResult)

### Examples

```pycon
>>> results = size_control.get_summary(prime.SizeControlSummaryParams(model=model))
```

<!-- !! processed by numpydoc !! -->
