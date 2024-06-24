<a id="ansys-meshing-prime-exportlsdynakeywordfileparams-set-default"></a>

# ansys.meshing.prime.ExportLSDynaKeywordFileParams.set_default

<a id="ansys.meshing.prime.ExportLSDynaKeywordFileParams.set_default"></a>

#### *static* ExportLSDynaKeywordFileParams.set_default(material_properties=None, database_keywords=None, output_format=None, analysis_type=None, compute_spotweld_thickness=None)

Set the default values of the `ExportLSDynaKeywordFileParams` object.

* **Parameters:**
  **material_properties: str, optional**
  : Materials in LS-DYNA format to be added to the file.

  **database_keywords: str, optional**
  : Database keywords in LS-DYNA format to be added to the file.

  **output_format: LSDynaFileFormatType, optional**
  : Output file format used to write LS-DYNA file.

  **analysis_type: LSDynaAnalysisType, optional**
  : Option to specify LS-DYNA analysis type.

  **compute_spotweld_thickness: bool, optional**
  : Option to compute spot weld thickness using shell thickness when set to true. Else, use search radius as thickness.

<!-- !! processed by numpydoc !! -->
