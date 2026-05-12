# CellStatisticsParams

<a id="ansys.meshing.prime.CellStatisticsParams"></a>

### *class* ansys.meshing.prime.CellStatisticsParams(model=None, get_volume=None, json_data=None, \*\*kwargs)

Parameters used to calculate cell statistics.

* **Parameters:**

  **model: Model**
  : Model to create a `CellStatisticsParams` object with default parameters.

  **get_volume: bool, optional**
  : Provides option to compute and get cumulative cell volume.

  **json_data: dict, optional**
  : JSON dictionary to create a `CellStatisticsParams` object with provided parameters.

### Examples

```pycon
>>> cell_statistics_params = prime.CellStatisticsParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`CellStatisticsParams.print_default`](ansys.meshing.prime.CellStatisticsParams.print_default.md#ansys.meshing.prime.CellStatisticsParams.print_default)()       | Print the default values of `CellStatisticsParams` object.   |
| [`CellStatisticsParams.set_default`](ansys.meshing.prime.CellStatisticsParams.set_default.md#ansys.meshing.prime.CellStatisticsParams.set_default)([get_volume]) | Set the default values of the `CellStatisticsParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`CellStatisticsParams.get_volume`](ansys.meshing.prime.CellStatisticsParams.get_volume.md#ansys.meshing.prime.CellStatisticsParams.get_volume)   | Provides option to compute and get cumulative cell volume.   |
<!-- vale on -->