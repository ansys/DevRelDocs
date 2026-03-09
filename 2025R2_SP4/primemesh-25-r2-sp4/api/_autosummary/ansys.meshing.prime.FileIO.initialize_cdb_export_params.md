# initialize_cdb_export_params

<a id="ansys.meshing.prime.FileIO.initialize_cdb_export_params"></a>

#### FileIO.initialize_cdb_export_params(params, major_version, minor_version)

Initialize specific CDB export parameters based on the given version.

This function sets the separate_blocks_format_type, export_fasteners_as_swgen and
export_rigid_bodies_as_rbgen parameters of the provided ExportMapdlCdbParams
object based on the given major and minor version numbers.
Other parameters remain unchanged.

* **Parameters:**

  **params**
  : The CDB export parameters object to be modified.

  **major_version**
  : The major version number.

  **minor_version**
  : The minor version number.

* **Returns:**

  [`ExportMapdlCdbParams`](ansys.meshing.prime.ExportMapdlCdbParams.md#ansys.meshing.prime.ExportMapdlCdbParams)
  : The modified CDB export parameters object.

* **Return type:**

  [`ExportMapdlCdbParams`](ansys.meshing.prime.ExportMapdlCdbParams.md#ansys.meshing.prime.ExportMapdlCdbParams)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

The version is formed as “<major_version>r<minor_version>”, e.g., “24r1”, “25r2”.
If the version is greater than or equal to “25r1”, write_separate_blocks is set to True
with COMPACT format, and export_fasteners_as_swgen and export_rigid_bodies_as_rbgen
parameters are set to True. Otherwise, they are set to False.

### Examples

```pycon
>>> file_io = prime.FileIO(model=model)
>>> params = prime.ExportMapdlCdbParams()
>>> params = file_io.initialize_cdb_export_params(params, 24, 1)
>>> params.write_separate_blocks
False
>>> params.export_fasteners_as_swgen
False
>>> params.export_rigid_bodies_as_swgen
False
```

```pycon
>>> file_io = prime.FileIO(model=model)
>>> params = prime.ExportMapdlCdbParams()
>>> params = file_io.initialize_cdb_export_params(params, 25, 2)
>>> params.write_separate_blocks
True
>>> params.separate_blocks_format_type
SeparateBlocksFormatType.COMPACT
>>> params.export_fasteners_as_swgen
True
>>> params.export_rigid_bodies_as_swgen
True
```

<!-- !! processed by numpydoc !! -->
