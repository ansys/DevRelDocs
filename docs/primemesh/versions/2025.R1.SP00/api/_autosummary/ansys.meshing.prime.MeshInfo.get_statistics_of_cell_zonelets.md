# get_statistics_of_cell_zonelets

<a id="ansys.meshing.prime.MeshInfo.get_statistics_of_cell_zonelets"></a>

#### MeshInfo.get_statistics_of_cell_zonelets(cell_zonelets, params)

Gets cell statistics of given cell zonelets using provided cell statistics parameters.

* **Parameters:**

  **cell_zonelets**
  : Ids of cell zonelets for which statistics are calculated.

  **params**
  : Parameters to get cells statistics.

* **Returns:**

  [`CellStatisticsResults`](ansys.meshing.prime.CellStatisticsResults.md#ansys.meshing.prime.CellStatisticsResults)
  : Returns the CellStatisticsResults.

* **Return type:**

  [`CellStatisticsResults`](ansys.meshing.prime.CellStatisticsResults.md#ansys.meshing.prime.CellStatisticsResults)

### Examples

```pycon
>>> mesh_info = prime.MeshInfo(model)
>>> part = model.get_part_by_name("part_name")
>>> result = mesh_info.get_statistics_of_cell_zonelets(part.get_cell_zonelets(),
>>>                  prime.CellStatisticsParams(model=model))
```

<!-- !! processed by numpydoc !! -->
