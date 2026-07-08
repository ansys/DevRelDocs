# read_size_field

<a id="ansys.meshing.prime.FileIO.read_size_field"></a>

#### FileIO.read_size_field(file_name, params)

Read a PyPrimeMesh size field (PSF and PSF.GZ) file from disk.

* **Parameters:**

  **file_name**
  : Path to the size field file on disk.

  **params**
  : Parameters for reading size field file.

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
>>> params = prime.ReadSizeFieldParams(model=model)
>>> results = file_io.read_size_field("/tmp/my_prime_sizefield.psf", params)
```

<!-- !! processed by numpydoc !! -->
