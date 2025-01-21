# SubtractZoneletsParams

<a id="ansys.meshing.prime.SubtractZoneletsParams"></a>

### *class* ansys.meshing.prime.SubtractZoneletsParams(model=None, retain_cutter=None, extract_edges=None, trace_edges=None, json_data=None, \*\*kwargs)

Parameters to use when subtracting zonelets.

* **Parameters:**

  **model: Model**
  : Model to create a `SubtractZoneletsParams` object with default parameters.

  **retain_cutter: bool, optional**
  : Retain the zonelets used for removal.

  **extract_edges: bool, optional**
  : Extract edges of intersection during subtract.

  **trace_edges: bool, optional**
  : Trace edges of intersection on target. Only works if extractEdges is true.

  **json_data: dict, optional**
  : JSON dictionary to create a `SubtractZoneletsParams` object with provided parameters.

### Examples

```pycon
>>> subtract_zonelets_params = prime.SubtractZoneletsParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`SubtractZoneletsParams.print_default`](ansys.meshing.prime.SubtractZoneletsParams.print_default.md#ansys.meshing.prime.SubtractZoneletsParams.print_default)()   | Print the default values of `SubtractZoneletsParams` object.   |
| [`SubtractZoneletsParams.set_default`](ansys.meshing.prime.SubtractZoneletsParams.set_default.md#ansys.meshing.prime.SubtractZoneletsParams.set_default)([...])    | Set the default values of the `SubtractZoneletsParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| [`SubtractZoneletsParams.extract_edges`](ansys.meshing.prime.SubtractZoneletsParams.extract_edges.md#ansys.meshing.prime.SubtractZoneletsParams.extract_edges)   | Extract edges of intersection during subtract.   |
| [`SubtractZoneletsParams.retain_cutter`](ansys.meshing.prime.SubtractZoneletsParams.retain_cutter.md#ansys.meshing.prime.SubtractZoneletsParams.retain_cutter)   | Retain the zonelets used for removal.            |
| [`SubtractZoneletsParams.trace_edges`](ansys.meshing.prime.SubtractZoneletsParams.trace_edges.md#ansys.meshing.prime.SubtractZoneletsParams.trace_edges)         | Trace edges of intersection on target.           |
<!-- vale on -->