# export_lsdyna_iga_keyword_file

<a id="ansys.meshing.prime.FileIO.export_lsdyna_iga_keyword_file"></a>

#### FileIO.export_lsdyna_iga_keyword_file(file_name, params)

Export IGA LS-DYNA Keyword file for solid, surface splines.

* **Parameters:**

  **file_name**
  : Name of the file.

  **params**
  : Parameters for IGA LS-DYNA Keyword file export.

* **Returns:**

  [`ExportLSDynaIGAResults`](ansys.meshing.prime.ExportLSDynaIGAResults.md#ansys.meshing.prime.ExportLSDynaIGAResults)
  : Returns ExportLSDynaIGAResults.

* **Return type:**

  [`ExportLSDynaIGAResults`](ansys.meshing.prime.ExportLSDynaIGAResults.md#ansys.meshing.prime.ExportLSDynaIGAResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> results = file_io.export_lsdyna_iga_keyword_file(
    file_name, ExportLSDynaIgaKeywordFileParams(model=model)
)
```

<!-- !! processed by numpydoc !! -->
