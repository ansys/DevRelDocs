# VolumeSweeper

<a id="ansys.meshing.prime.VolumeSweeper"></a>

### *class* ansys.meshing.prime.VolumeSweeper(model)

VolumeSweeper class provide functions to volume mesh a given set of topovolumes by sweeping or stacking a set of face and edge zonelets. Provide operations to generate volume mesh using stacker technology.

* **Parameters:**

  **model**
  : Server model to create VolumeSweeper object.

  **part_id**
  : Id of the part.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| [`VolumeSweeper.create_base_face`](ansys.meshing.prime.VolumeSweeper.create_base_face.md#ansys.meshing.prime.VolumeSweeper.create_base_face)(part_id, ...)   | Create a face at the specified origin.          |
| [`VolumeSweeper.stack_base_face`](ansys.meshing.prime.VolumeSweeper.stack_base_face.md#ansys.meshing.prime.VolumeSweeper.stack_base_face)(part_id, ...)      | Generate volume mesh by stacking a meshed face. |


<!-- vale on -->
