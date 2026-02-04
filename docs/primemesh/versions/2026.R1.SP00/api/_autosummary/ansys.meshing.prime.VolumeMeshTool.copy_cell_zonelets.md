# copy_cell_zonelets

<a id="ansys.meshing.prime.VolumeMeshTool.copy_cell_zonelets"></a>

#### VolumeMeshTool.copy_cell_zonelets(cell_zonelets, target_part_id, params)

Copy cell zonelets and face zonelets connected to the cell zonelets.

* **Parameters:**

  **cell_zonelets**
  : Ids of cell zonelets to be copied.

  **target_part_id**
  : Part id used to move the copied zonelets.

  **params**
  : Parameters to copy cell zonelets.

* **Returns:**

  [`CopyZoneletsResults`](ansys.meshing.prime.CopyZoneletsResults.md#ansys.meshing.prime.CopyZoneletsResults)
  : Returns the CopyZoneletsResults.
* **Return type:**
  [`CopyZoneletsResults`](ansys.meshing.prime.CopyZoneletsResults.md#ansys.meshing.prime.CopyZoneletsResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

>>>> results = volume_mesh_tool.copy_cell_zonelets(cell_zonelets, target_part_id = new_part.id, prime.CopyZoneletsParams(model = model))

<!-- !! processed by numpydoc !! -->
