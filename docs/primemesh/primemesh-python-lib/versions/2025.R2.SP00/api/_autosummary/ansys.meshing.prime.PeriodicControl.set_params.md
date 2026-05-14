# set_params

<a id="ansys.meshing.prime.PeriodicControl.set_params"></a>

#### PeriodicControl.set_params(periodic_control_params)

Set the periodic control parameters.

* **Parameters:**

  **periodic_control_params**
  : Parameters to control periodic surface recovery.
  
* **Return type:**
  [`SetParamsResults`](ansys.meshing.prime.SetParamsResults.md#ansys.meshing.prime.SetParamsResults)

### Examples

```pycon
>>> periodic_control.set_params(
>>>                  PeriodicControlParams(model=model,
>>>                     center=[0,0,0], axis=[0,1,0], angle=180))
```

<!-- !! processed by numpydoc !! -->
