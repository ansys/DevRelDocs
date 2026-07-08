# assign_mesh_regions

<a id="ansys.meshing.prime.VolumeMeshTool.assign_mesh_regions"></a>

#### VolumeMeshTool.assign_mesh_regions(target_part_id, target_cell_zonelets, source_part_ids, small_regions_volume_fraction)

Assigns a region id to the cells in target cell zonelets of target part id. The region id is based on their location within source part ids.

* **Parameters:**

  **target_part_id**
  : Id of the target part.

  **target_cell_zonelets**
  : Ids of cell zonelets to be split into regions.

  **source_part_ids**
  : Ids of solids used as a reference for assigning regions.

  **small_regions_volume_fraction**
  : Regions with volumes smaller than a specified fraction of the total volume are merged into their largest adjacent region.
    This helps to eliminate isolated cells and thin regions from the output.

* **Returns:**

  [`VolumeMeshToolResults`](ansys.meshing.prime.VolumeMeshToolResults.md#ansys.meshing.prime.VolumeMeshToolResults)
  : Returns the VolumeMeshToolResults.

* **Return type:**

  [`VolumeMeshToolResults`](ansys.meshing.prime.VolumeMeshToolResults.md#ansys.meshing.prime.VolumeMeshToolResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> results = volume_mesh_tool.AssignMeshRegions(target_part_id, target_cell_zonelets, source_part_ids, small_regions_volume_fraction)
```

<!-- !! processed by numpydoc !! -->
