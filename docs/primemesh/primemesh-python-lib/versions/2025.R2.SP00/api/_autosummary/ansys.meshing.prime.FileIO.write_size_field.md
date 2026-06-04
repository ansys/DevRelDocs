# write_size_field

<a id="ansys.meshing.prime.FileIO.write_size_field"></a>

#### FileIO.write_size_field(file_name, params)

Write a PyPrimeMesh size field (PSF) file to a file on disk.

* **Parameters:**

  **file_name**
  : Path to the size field file on disk.

  **params**
  : Parameters for writing the size field file.

* **Returns:**

  [`FileWriteResults`](ansys.meshing.prime.FileWriteResults.md#ansys.meshing.prime.FileWriteResults)
  : Results from writing the size field file.

* **Return type:**

  [`FileWriteResults`](ansys.meshing.prime.FileWriteResults.md#ansys.meshing.prime.FileWriteResults)

### Notes

This method does not support Unicode paths.

### Examples

```pycon
>>> file_io = prime.FileIO(model=model)
>>> params = prime.WriteSizeFieldParams(model=model)
>>> results = file_io.write_size_field("/tmp/my_prime_sizefield.psf", params)
```

<!-- !! processed by numpydoc !! -->
