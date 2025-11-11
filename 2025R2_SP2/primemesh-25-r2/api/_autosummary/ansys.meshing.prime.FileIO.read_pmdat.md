# read_pmdat

<a id="ansys.meshing.prime.FileIO.read_pmdat"></a>

#### FileIO.read_pmdat(file_name, file_read_params)

Read a PyPrimeMesh data (PMDAT) file.

* **Parameters:**

  **file_name**
  : Path to the data file on disk.

  **file_read_params**
  : Parameters for reading the data file.

* **Returns:**

  [`FileReadResults`](ansys.meshing.prime.FileReadResults.md#ansys.meshing.prime.FileReadResults)
  : Results from reading the data file.

* **Return type:**

  [`FileReadResults`](ansys.meshing.prime.FileReadResults.md#ansys.meshing.prime.FileReadResults)

### Notes

This method does not support Unicode paths.

### Examples

```pycon
>>> import ansys.meshing.prime as prime
>>> #connect client to server and get model from it
>>> client = prime.Client(ip="localhost", port=50060)
>>> model = client.model
>>> file_io = prime.FileIO(model=model)
>>> file_read_params = prime.FileReadParams(model=model)
>>> results = file_io.read_pmdat("/tmp/file.pmdat", file_read_params)
```

<!-- !! processed by numpydoc !! -->
