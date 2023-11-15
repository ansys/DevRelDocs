# ansys.meshing.prime.Connect.subtract_volumes

#### Connect.subtract_volumes(part_id, target_volumes, cutter_volumes, params)

Subtract cutter volumes from target volumes.

* **Parameters:**
  **part_id**
  : Id of a part.

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
