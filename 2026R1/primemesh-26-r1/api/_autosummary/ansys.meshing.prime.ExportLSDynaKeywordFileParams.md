# ExportLSDynaKeywordFileParams

<a id="ansys.meshing.prime.ExportLSDynaKeywordFileParams"></a>

### *class* ansys.meshing.prime.ExportLSDynaKeywordFileParams(model=None, material_properties=None, database_keywords=None, output_format=None, analysis_type=None, compute_spotweld_thickness=None, write_thickness_file=None, output_controls_d3_part=None, json_data=None, \*\*kwargs)

Parameters to control LS-DYNA keyword file export settings.

* **Parameters:**

  **model: Model**
  : Model to create a `ExportLSDynaKeywordFileParams` object with default parameters.

  **material_properties: str, optional**
  : Materials in LS-DYNA format to be added to the file.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **database_keywords: str, optional**
  : Database keywords in LS-DYNA format to be added to the file.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **output_format: LSDynaFileFormatType, optional**
  : Output file format used to write LS-DYNA file.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **analysis_type: LSDynaAnalysisType, optional**
  : Option to specify LS-DYNA analysis type.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **compute_spotweld_thickness: bool, optional**
  : Option to compute spot weld thickness using shell thickness when set to true. Else, use search radius as thickness.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **write_thickness_file: bool, optional**
  : Option to write a thickness file for spotweld fatigue analysis. If true, writes a file named [exportedFilename].k.thick.txt containing thickness information.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **output_controls_d3_part: bool, optional**
  : Option to create D3Part card in output controls.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `ExportLSDynaKeywordFileParams` object with provided parameters.

### Examples

```pycon
>>> export_lsdyna_keyword_file_params = prime.ExportLSDynaKeywordFileParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`ExportLSDynaKeywordFileParams.print_default`](ansys.meshing.prime.ExportLSDynaKeywordFileParams.print_default.md#ansys.meshing.prime.ExportLSDynaKeywordFileParams.print_default)()   | Print the default values of `ExportLSDynaKeywordFileParams` object.   |
| [`ExportLSDynaKeywordFileParams.set_default`](ansys.meshing.prime.ExportLSDynaKeywordFileParams.set_default.md#ansys.meshing.prime.ExportLSDynaKeywordFileParams.set_default)([...])    | Set the default values of the `ExportLSDynaKeywordFileParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`ExportLSDynaKeywordFileParams.analysis_type`](ansys.meshing.prime.ExportLSDynaKeywordFileParams.analysis_type.md#ansys.meshing.prime.ExportLSDynaKeywordFileParams.analysis_type)                                        | Option to specify LS-DYNA analysis type.                                      |
| [`ExportLSDynaKeywordFileParams.compute_spotweld_thickness`](ansys.meshing.prime.ExportLSDynaKeywordFileParams.compute_spotweld_thickness.md#ansys.meshing.prime.ExportLSDynaKeywordFileParams.compute_spotweld_thickness) | Option to compute spot weld thickness using shell thickness when set to true. |
| [`ExportLSDynaKeywordFileParams.database_keywords`](ansys.meshing.prime.ExportLSDynaKeywordFileParams.database_keywords.md#ansys.meshing.prime.ExportLSDynaKeywordFileParams.database_keywords)                            | Database keywords in LS-DYNA format to be added to the file.                  |
| [`ExportLSDynaKeywordFileParams.material_properties`](ansys.meshing.prime.ExportLSDynaKeywordFileParams.material_properties.md#ansys.meshing.prime.ExportLSDynaKeywordFileParams.material_properties)                      | Materials in LS-DYNA format to be added to the file.                          |
| [`ExportLSDynaKeywordFileParams.output_controls_d3_part`](ansys.meshing.prime.ExportLSDynaKeywordFileParams.output_controls_d3_part.md#ansys.meshing.prime.ExportLSDynaKeywordFileParams.output_controls_d3_part)          | Option to create D3Part card in output controls.                              |
| [`ExportLSDynaKeywordFileParams.output_format`](ansys.meshing.prime.ExportLSDynaKeywordFileParams.output_format.md#ansys.meshing.prime.ExportLSDynaKeywordFileParams.output_format)                                        | Output file format used to write LS-DYNA file.                                |
| [`ExportLSDynaKeywordFileParams.write_thickness_file`](ansys.meshing.prime.ExportLSDynaKeywordFileParams.write_thickness_file.md#ansys.meshing.prime.ExportLSDynaKeywordFileParams.write_thickness_file)                   | Option to write a thickness file for spotweld fatigue analysis.               |
<!-- vale on -->