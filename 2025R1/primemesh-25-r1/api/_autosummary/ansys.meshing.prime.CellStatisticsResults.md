# CellStatisticsResults

<a id="ansys.meshing.prime.CellStatisticsResults"></a>

### *class* ansys.meshing.prime.CellStatisticsResults(model=None, volume=None, error_code=None, json_data=None, \*\*kwargs)

Results of cell statistics information.

* **Parameters:**

  **model: Model**
  : Model to create a `CellStatisticsResults` object with default parameters.

  **volume: float, optional**
  : Cumulative volume of all the cell elements of selected entities.

  **error_code: ErrorCode, optional**
  : Error code associated with the cell statistics function.

  **json_data: dict, optional**
  : JSON dictionary to create a `CellStatisticsResults` object with provided parameters.

### Examples

```pycon
>>> cell_statistics_results = prime.CellStatisticsResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`CellStatisticsResults.print_default`](ansys.meshing.prime.CellStatisticsResults.print_default.md#ansys.meshing.prime.CellStatisticsResults.print_default)()        | Print the default values of `CellStatisticsResults` object.   |
| [`CellStatisticsResults.set_default`](ansys.meshing.prime.CellStatisticsResults.set_default.md#ansys.meshing.prime.CellStatisticsResults.set_default)([volume, ...]) | Set the default values of the `CellStatisticsResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`CellStatisticsResults.error_code`](ansys.meshing.prime.CellStatisticsResults.error_code.md#ansys.meshing.prime.CellStatisticsResults.error_code)   | Error code associated with the cell statistics function.         |
| [`CellStatisticsResults.volume`](ansys.meshing.prime.CellStatisticsResults.volume.md#ansys.meshing.prime.CellStatisticsResults.volume)               | Cumulative volume of all the cell elements of selected entities. |
<!-- vale on -->