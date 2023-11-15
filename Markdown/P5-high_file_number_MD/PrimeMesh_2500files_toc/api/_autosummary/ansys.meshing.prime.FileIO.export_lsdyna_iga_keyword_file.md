# ansys.meshing.prime.FileIO.export_lsdyna_iga_keyword_file

#### FileIO.export_lsdyna_iga_keyword_file(file_name, export_params)

Export IGA LS-DYNA Keyword file for solid, surface splines, or both.

* **Parameters:**
  **file_name**
  : Name of the file.

  **export_params**
  : Parameters for IGA LS-DYNA Keyword file export.
* **Returns:**
  [`FileWriteResults`](ansys.meshing.prime.FileWriteResults.md#ansys.meshing.prime.FileWriteResults)
  : Returns FileWriteResults.
* **Return type:**
  [`FileWriteResults`](ansys.meshing.prime.FileWriteResults.md#ansys.meshing.prime.FileWriteResults)

### Notes

This API is a Beta. API Behavior and implementation may change in future.

### Examples

```pycon
>>> results = file_io.export_lsdyna_iga_keyword_file(file_name, ExportLSDynaIgaKeywordFileParams(model = model))
```

<!-- !! processed by numpydoc !! -->
