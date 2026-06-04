# get_summary

<a id="ansys.meshing.prime.PeriodicControl.get_summary"></a>

#### PeriodicControl.get_summary(params)

Get the periodic control summary along with the evaluated scope for the provided parameters.

* **Parameters:**

  **params**
  : Periodic control summary parameters.

* **Returns:**

  [`PeriodicControlSummaryResult`](ansys.meshing.prime.PeriodicControlSummaryResult.md#ansys.meshing.prime.PeriodicControlSummaryResult)
  : Return the PeriodicControlSummaryResult.

* **Return type:**

  [`PeriodicControlSummaryResult`](ansys.meshing.prime.PeriodicControlSummaryResult.md#ansys.meshing.prime.PeriodicControlSummaryResult)

### Examples

```pycon
>>> results = periodic_control.get_summary(prime.PeriodicControlSummaryParams(model=model))
```

<!-- !! processed by numpydoc !! -->
