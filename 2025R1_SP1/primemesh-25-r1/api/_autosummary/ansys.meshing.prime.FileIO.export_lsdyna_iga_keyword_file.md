# export_lsdyna_iga_keyword_file

<a id="ansys.meshing.prime.FileIO.export_lsdyna_iga_keyword_file"></a>

#### FileIO.export_lsdyna_iga_keyword_file(file_name, export_params)

Exports IGA LS-DYNA Keyword file for solid, surface splines, or both.

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

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> results = file_io.export_lsdyna_iga_keyword_file(file_name, ExportLSDynaIgaKeywordFileParams(model = model))
```

<!-- !! processed by numpydoc !! -->
