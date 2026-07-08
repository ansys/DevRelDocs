# subtract_volumes

<a id="ansys.meshing.prime.Connect.subtract_volumes"></a>

#### Connect.subtract_volumes(part_id, target_volumes, cutter_volumes, params)

Subtract cutter volumes from target volumes. Volumes should be computed prior to calling this function. If multiple parts are being merged to form a single part, then volumes should be computed for each part prior to merging. Use compute_closed_volumes to do so. Volumes involved in this operation should not have self intersections. You can use SearchZoneletsBySelfIntersections to check self intersections in the volume.

* **Parameters:**

  **part_id**
  : Id of part containing target and cutter volumes for subtract operation.

  **target_volumes**
  : Ids of target volumes.

  **cutter_volumes**
  : Ids of cutter volumes.

  **params**
  : Parameters to control subtraction of volumes.

* **Returns:**
  

  [`SubtractVolumesResults`](ansys.meshing.prime.SubtractVolumesResults.md#ansys.meshing.prime.SubtractVolumesResults)
  : Returns the SubtractVolumesResults.

* **Return type:**

  [`SubtractVolumesResults`](ansys.meshing.prime.SubtractVolumesResults.md#ansys.meshing.prime.SubtractVolumesResults)

### Examples

```pycon
>>> results = connect.subtract_volumes(part_id, target_volumes, cutter_volumes, params)
```

<!-- !! processed by numpydoc !! -->
