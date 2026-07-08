# export_lsdyna_keyword_file

<a id="ansys.meshing.prime.FileIO.export_lsdyna_keyword_file"></a>

#### FileIO.export_lsdyna_keyword_file(file_name, params)

Export FEA LS-DYNA Keyword file for solid, surface mesh, or both.

* **Parameters:**

  **file_name**
  : Name of the file.

  **params**
  : Parameters for FEA LS-DYNA Keyword file export.

* **Returns:**

  [`FileWriteResults`](ansys.meshing.prime.FileWriteResults.md#ansys.meshing.prime.FileWriteResults)
  : Returns FileWriteResults.

* **Return type:**

  [`FileWriteResults`](ansys.meshing.prime.FileWriteResults.md#ansys.meshing.prime.FileWriteResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> results = file_io.export_lsdyna_keyword_file(
    file_name, ExportLSDynaKeywordFileParams(model=model)
)
```

<!-- !! processed by numpydoc !! -->
