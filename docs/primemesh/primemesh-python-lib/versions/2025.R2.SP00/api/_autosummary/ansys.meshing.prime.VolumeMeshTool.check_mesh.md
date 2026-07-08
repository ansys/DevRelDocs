# check_mesh

<a id="ansys.meshing.prime.VolumeMeshTool.check_mesh"></a>

#### VolumeMeshTool.check_mesh(part_id, params)

Checks mesh of a part.

* **Parameters:**

  **part_id**
  : Id of a part.

  **params**
  : Parameters to check mesh.

* **Returns:**
  
  [`CheckMeshResults`](ansys.meshing.prime.CheckMeshResults.md#ansys.meshing.prime.CheckMeshResults)
  : Returns the CheckMeshResults.

* **Return type:**

  [`CheckMeshResults`](ansys.meshing.prime.CheckMeshResults.md#ansys.meshing.prime.CheckMeshResults)

### Examples

```pycon
>>> results = volume_mesh_tool.check_mesh(part_id,
>>>                                prime.CheckMeshParams(model =model))
```

<!-- !! processed by numpydoc !! -->
