# export_fluent_meshing_mesh

<a id="ansys.meshing.prime.FileIO.export_fluent_meshing_mesh"></a>

#### FileIO.export_fluent_meshing_mesh(file_name, export_fluent_mesh_params)

Export a Fluent Meshing mesh (MSH) file.

* **Parameters:**

  **file_name**
  : Path to the mesh file on disk.

  **export_fluent_mesh_params**
  : Parameters for exporting the mesh file.

* **Returns:**
  
  [`FileWriteResults`](ansys.meshing.prime.FileWriteResults.md#ansys.meshing.prime.FileWriteResults)
  : Results from exporting the mesh file.

* **Return type:**

  [`FileWriteResults`](ansys.meshing.prime.FileWriteResults.md#ansys.meshing.prime.FileWriteResults)

### Examples

```pycon
>>> results = file_io.export_fluent_meshing_mesh(
                "/tmp/fluent_meshing.msh",
                ExportFluentMeshingMeshParams(model=model))
```

<!-- !! processed by numpydoc !! -->
