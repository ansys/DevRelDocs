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
  :

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

<a id="examples-using-fileio-export-mapdl-cdb"></a>

## Examples using FileIO.export_mapdl_cdb

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to use topology-based connection to generate conformal surface mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a mid-surfaced bracket for a structural analysis</div>
</div>
* [Mesh a mid-surfaced bracket for a structural analysis](../../examples/gallery_examples/gallery/01_bracket_scaffold.md#sphx-glr-examples-gallery-examples-gallery-01-bracket-scaffold-py)

<!-- thumbnail-parent-div-close --></div>
