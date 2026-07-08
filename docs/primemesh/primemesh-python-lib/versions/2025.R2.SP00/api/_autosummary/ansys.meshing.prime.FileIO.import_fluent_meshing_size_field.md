# import_fluent_meshing_size_field

<a id="ansys.meshing.prime.FileIO.import_fluent_meshing_size_field"></a>

#### FileIO.import_fluent_meshing_size_field(file_name)

Import a Fluent Meshing size field (SF and SF.GZ) file from disk.

* **Parameters:**

  **file_name**
  : Path to the size field file on disk.

* **Returns:**

  [`SizeFieldFileReadResults`](ansys.meshing.prime.SizeFieldFileReadResults.md#ansys.meshing.prime.SizeFieldFileReadResults)
  : Results from reading the size field file.

* **Return type:**

  [`SizeFieldFileReadResults`](ansys.meshing.prime.SizeFieldFileReadResults.md#ansys.meshing.prime.SizeFieldFileReadResults)

### Notes

This method does not support Unicode paths.

### Examples

```pycon
>>> file_io = prime.FileIO(model=model)
>>> results = file_io.import_fluent_meshing_size_field("/tmp/my_sizefield.sf")
```

<!-- !! processed by numpydoc !! -->
