# stack_base_face

<a id="ansys.meshing.prime.VolumeSweeper.stack_base_face"></a>

#### VolumeSweeper.stack_base_face(part_id, base_face_ids, topo_volume_ids, params)

Generate volume mesh by stacking a meshed face.

This method generates volume mesh by stacking a meshed face, layer by layer, along
the given direction. It calculates the stack layers using size controls and global
size parameters.

* **Parameters:**

  **part_id**
  : ID of the part.

  **base_face_ids: Iterable[int]**
  : IDs of the base faces to stack.

  **topo_volume_ids**
  : IDs of the volumes to mesh.

  **params**
  : Mesh stacker parameters.

* **Returns:**

  [`MeshStackerResults`](ansys.meshing.prime.MeshStackerResults.md#ansys.meshing.prime.MeshStackerResults)
  : Results from generating the volume mesh.

* **Return type:**

  [`MeshStackerResults`](ansys.meshing.prime.MeshStackerResults.md#ansys.meshing.prime.MeshStackerResults)

### Examples

```pycon
>>> results = volumesweeper.stack_base_face(part_id, base_face_ids, topo_volume_ids, params)
```

<!-- !! processed by numpydoc !! -->
