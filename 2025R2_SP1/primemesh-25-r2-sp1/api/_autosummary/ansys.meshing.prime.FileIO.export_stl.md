# export_stl

<a id="ansys.meshing.prime.FileIO.export_stl"></a>

#### FileIO.export_stl(file_name, params)

Export an STL file.

* **Parameters:**

  **file_name**
  : Path to the STL file on disk.

  **params**
  : Parameters for exporting the STL file.

* **Returns:**

  [`FileWriteResults`](ansys.meshing.prime.FileWriteResults.md#ansys.meshing.prime.FileWriteResults)
  : Results from exporting the STL file.

* **Return type:**

  [`FileWriteResults`](ansys.meshing.prime.FileWriteResults.md#ansys.meshing.prime.FileWriteResults)

### Notes

This method does not support Unicode paths.

### Examples

```pycon
>>> import ansys.meshing.prime as prime
>>> model = prime.launch_prime().model
>>> fileio = prime.FileIO(model=model)
>>> out_file_path = r"/tmp/output.stl"
>>> part_ids = [part.id for part in model.parts]
>>> export_stl_params=prime.ExportSTLParams(model=model,part_ids=part_ids)
>>> results = fileio.export_stl(out_file_path,export_stl_params)
```

<!-- !! processed by numpydoc !! -->
