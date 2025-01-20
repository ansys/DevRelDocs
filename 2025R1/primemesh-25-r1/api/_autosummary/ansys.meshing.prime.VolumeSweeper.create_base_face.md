# create_base_face

<a id="ansys.meshing.prime.VolumeSweeper.create_base_face"></a>

#### VolumeSweeper.create_base_face(part_id, topo_volume_ids, params)

Create a face at the specified origin.

This method creates a face at the specified origin and perpendicular to the
specified direction. Also, it imprints model edges on the face, makes necessary
edge repairs, and duplicates relevant size controls on the base face.

* **Parameters:**

  **part_id**
  : ID of part.

  **topo_volume_ids**
  : IDs of the volumes to mesh.

  **params**
  : Mesh stacker parameters.

* **Returns:**

  [`MeshStackerResults`](ansys.meshing.prime.MeshStackerResults.md#ansys.meshing.prime.MeshStackerResults)
  : Results from creating the face.

* **Return type:**

  [`MeshStackerResults`](ansys.meshing.prime.MeshStackerResults.md#ansys.meshing.prime.MeshStackerResults)

### Examples

```pycon
>>> results = volumesweeper.create_base_face(part_id, topo_volume_ids, params)
```

<!-- !! processed by numpydoc !! -->


