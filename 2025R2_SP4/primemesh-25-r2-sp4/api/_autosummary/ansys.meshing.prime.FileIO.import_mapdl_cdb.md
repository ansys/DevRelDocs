# import_mapdl_cdb

<a id="ansys.meshing.prime.FileIO.import_mapdl_cdb"></a>

#### FileIO.import_mapdl_cdb(file_name, params)

Import an MAPDL CDB file.

* **Parameters:**

  **file_name**
  : Path to the CDB file on disk.

  **params**
  : Parameters for importing the CDB file.

* **Returns:**

  [`ImportMapdlCdbResults`](ansys.meshing.prime.ImportMapdlCdbResults.md#ansys.meshing.prime.ImportMapdlCdbResults)
  : Results from importing the CDB file.

* **Return type:**

  [`ImportMapdlCdbResults`](ansys.meshing.prime.ImportMapdlCdbResults.md#ansys.meshing.prime.ImportMapdlCdbResults)

### Notes

This method does not support Unicode paths.

### Examples

```pycon
>>> import ansys.meshing.prime as prime
>>> # connect client to server and get model from it
>>> client = prime.Client(ip="localhost", port=50060)
>>> model = client.model
>>> file_io = prime.FileIO(model=model)
>>> params = prime.ImportMapdlCdbParams(model=model)
>>> results = file_io.import_mapdl_cdb("/tmp/file.cdb", params)
```

<!-- !! processed by numpydoc !! -->
