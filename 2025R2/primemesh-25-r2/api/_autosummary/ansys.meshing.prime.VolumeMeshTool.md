# VolumeMeshTool

<a id="ansys.meshing.prime.VolumeMeshTool"></a>

### *class* ansys.meshing.prime.VolumeMeshTool(model)

VolumeMeshTool allows you to check grid and improve volume mesh quality.

VolumeMeshTool provides various volume mesh improvement algorithms.

* **Parameters:**

  **model**
  : Server model to create VolumeMeshTool object.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`VolumeMeshTool.assign_mesh_regions`](ansys.meshing.prime.VolumeMeshTool.assign_mesh_regions.md#ansys.meshing.prime.VolumeMeshTool.assign_mesh_regions)(...)                   | Assigns a region id to the cells in target cell zonelets of target part id.   |
| [`VolumeMeshTool.check_mesh`](ansys.meshing.prime.VolumeMeshTool.check_mesh.md#ansys.meshing.prime.VolumeMeshTool.check_mesh)(part_id, params)                                  | Checks mesh of a part.                                                        |
| [`VolumeMeshTool.copy_cell_zonelets`](ansys.meshing.prime.VolumeMeshTool.copy_cell_zonelets.md#ansys.meshing.prime.VolumeMeshTool.copy_cell_zonelets)(...)                      | Copy cell zonelets and face zonelets connected to the cell zonelets.          |
| [`VolumeMeshTool.get_parts_for_points`](ansys.meshing.prime.VolumeMeshTool.get_parts_for_points.md#ansys.meshing.prime.VolumeMeshTool.get_parts_for_points)(points, ...)        | Finds parts enclosing the given list of points.                               |
| [`VolumeMeshTool.improve_by_auto_node_move`](ansys.meshing.prime.VolumeMeshTool.improve_by_auto_node_move.md#ansys.meshing.prime.VolumeMeshTool.improve_by_auto_node_move)(...) | Improve volume mesh by auto node move.                                        |
<!-- vale on -->