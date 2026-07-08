# write_pmdat

<a id="ansys.meshing.prime.FileIO.write_pmdat"></a>

#### FileIO.write_pmdat(file_name, file_write_params)

Write a PyPrimeMesh data (PMDAT) file.

* **Parameters:**

  **file_name**
  : Path for writing the data file on disk.

  **file_write_params**
  : Parameters for writing the data file.

* **Returns:**
  
  [`FileWriteResults`](ansys.meshing.prime.FileWriteResults.md#ansys.meshing.prime.FileWriteResults)
  : Results from writing the data file.

* **Return type:**

  [`FileWriteResults`](ansys.meshing.prime.FileWriteResults.md#ansys.meshing.prime.FileWriteResults)

### Examples

```pycon
>>> results = file_io.write_pmdat("/tmp/prime_mesh_data.pmdat",
                                  prime.FileWriteParams(model=model))
```

<!-- !! processed by numpydoc !! -->
