# mesh

<a id="ansys.meshing.prime.AutoMesh.mesh"></a>

#### AutoMesh.mesh(part_id, automesh_params)

Performs volume meshing on the part with the given meshing parameters.

* **Parameters:**

  **part_id**
  : Id of the part.

  **automesh_params**
  : Parameters for auto mesh.

* **Returns:**

  [`AutoMeshResults`](ansys.meshing.prime.AutoMeshResults.md#ansys.meshing.prime.AutoMeshResults)
  : Returns the AutomeshResults.

* **Return type:**

  [`AutoMeshResults`](ansys.meshing.prime.AutoMeshResults.md#ansys.meshing.prime.AutoMeshResults)

### Examples

```pycon
>>> auto_mesh = AutoMesh(model = model)
>>> automesh_params = AutoMeshParams(model = model)
>>> results = auto_mesh.mesh(part_id, automesh_params)
```

<!-- !! processed by numpydoc !! -->

