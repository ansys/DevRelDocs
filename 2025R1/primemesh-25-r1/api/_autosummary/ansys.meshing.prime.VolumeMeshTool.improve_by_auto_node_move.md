# improve_by_auto_node_move

<a id="ansys.meshing.prime.VolumeMeshTool.improve_by_auto_node_move"></a>

#### VolumeMeshTool.improve_by_auto_node_move(part_id, cell_zonelets, boundary_zonelets, params)

Improve volume mesh by auto node move.

* **Parameters:**

  **part_id**
  : Id of a part.

  **cell_zonelets**
  : Ids of cell zonelets to be improved.

  **boundary_zonelets**
  : Ids of boundary face zonelets.

  **params**
  : Auto node move parameters.

* **Returns:**

  [`VolumeMeshToolResults`](ansys.meshing.prime.VolumeMeshToolResults.md#ansys.meshing.prime.VolumeMeshToolResults)
  : Return the VolumeMeshToolResults.

* **Return type:**

  [`VolumeMeshToolResults`](ansys.meshing.prime.VolumeMeshToolResults.md#ansys.meshing.prime.VolumeMeshToolResults)

### Examples

```pycon
>>> results = volume_mesh_tool.improve_by_auto_node_move(part_id,
>>>                                cell_zonelets,
>>>                                boundary_zonelets,
>>>                                prime.AutoNodeMoveParams(model =model))
```

<!-- !! processed by numpydoc !! -->

