# import_fluent_meshing_meshes

<a id="ansys.meshing.prime.FileIO.import_fluent_meshing_meshes"></a>

#### FileIO.import_fluent_meshing_meshes(file_names, import_fluent_meshing_mesh_params)

Import Fluent Meshing’s mesh (MS and MSH.GZ) files from disk.

* **Parameters:**

  **file_names**
  : List of full path for the mesh files to import.

  **import_fluent_meshing_mesh_params**
  : Parameters for importing the mesh files.

* **Returns:**

  [`ImportFluentMeshingMeshResults`](ansys.meshing.prime.ImportFluentMeshingMeshResults.md#ansys.meshing.prime.ImportFluentMeshingMeshResults)
  : Results from importing the mesh files.

* **Return type:**

  [`ImportFluentMeshingMeshResults`](ansys.meshing.prime.ImportFluentMeshingMeshResults.md#ansys.meshing.prime.ImportFluentMeshingMeshResults)

### Notes

This method does not support Unicode paths.

### Examples

```pycon
>>> file_io = prime.FileIO(model=model)
>>> params = prime.ImportFluentMeshingMeshParams(model=model)
>>> results = file_io.import_fluent_meshing_meshes(
                ["/tmp/mesh.msh", "/tmp/mesh1.msh"],
                params)
```

<!-- !! processed by numpydoc !! -->
