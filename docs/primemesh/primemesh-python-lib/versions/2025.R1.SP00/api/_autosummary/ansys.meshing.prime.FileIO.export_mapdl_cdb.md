# export_mapdl_cdb

<a id="ansys.meshing.prime.FileIO.export_mapdl_cdb"></a>

#### FileIO.export_mapdl_cdb(file_name, params)

Export an MAPDL CDB file.

* **Parameters:**

  **file_name**
  : Path to the CDB file on disk.

  **params**
  : Parameters for exporting the CDB file.

* **Returns:**

  [`ExportMapdlCdbResults`](ansys.meshing.prime.ExportMapdlCdbResults.md#ansys.meshing.prime.ExportMapdlCdbResults)
  : Results from exporting the CDB file.

* **Return type:**

  [`ExportMapdlCdbResults`](ansys.meshing.prime.ExportMapdlCdbResults.md#ansys.meshing.prime.ExportMapdlCdbResults)

### Notes

This method does not support Unicode paths.

### Examples

```pycon
>>> import ansys.meshing.prime as prime
>>> #connect client to server and get model from it
>>> client = prime.Client(ip="localhost", port=50060)
>>> model = client.model
>>> file_io = prime.FileIO(model=model)
>>> params = prime.ExportMapdlCdbParams(model=model)
>>> results = file_io.export_mapdl_cdb("/tmp/file.cdb", params)
```

<!-- !! processed by numpydoc !! -->


