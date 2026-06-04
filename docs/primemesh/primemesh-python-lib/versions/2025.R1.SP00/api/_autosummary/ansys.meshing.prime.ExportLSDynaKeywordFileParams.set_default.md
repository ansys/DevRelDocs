# set_default

<a id="ansys.meshing.prime.ExportLSDynaKeywordFileParams.set_default"></a>

#### *static* ExportLSDynaKeywordFileParams.set_default(material_properties=None, database_keywords=None, output_format=None, analysis_type=None, compute_spotweld_thickness=None, write_thickness_file=None)

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

  **write_thickness_file: bool, optional**
  : Option to write a thickness file for spotweld fatigue analysis. If true, writes a file named [exportedFilename].k.thick.txt containing thickness information.

<!-- !! processed by numpydoc !! -->
