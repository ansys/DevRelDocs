# export_surface_section_cut

<a id="compolyx.SectionCut.export_surface_section_cut"></a>

#### SectionCut.export_surface_section_cut(path, format='becas:in', export_strength_limits=True, mapdl_model_type='mesh_only')

Exports the suface section cut to BECAS or ANSYS Mechanical APDL.

* **Paramters:**
  - path: File path or directory depending on the export format.
  - format: Export format. Implemented are ‘becas:in’ (default) and ‘ansys:cdb’.
  - export_strength_limits: Whether to export the strength limits for BECAS (default is ‘True’). Ignored if the format is not ‘becas:in’.
  - mapdl_model_type: The type of the model to be exported to ANSYS Mechanical APDL. Ignored if the format is not ‘ansys:cdb’.

  mapdl_model_type: (String)
  : - ‘mesh_only’: Only the mesh (elements and nodes) is exported. This is the default.
    - solid_model: The section cut is expanded into a slice of solid elements.
      : In addition, the material properties are exported and the element coordinate systems
        are alinged with the fiber direction. This model can be used to compute the equivalent
        beam properties of the section cut.
* **Usage:**
  ```pycon
  >>> section_cut.export_surface_section_cut(r'D:\tmp\section_cut.cdb', 'ansys:cdb', mapdl_model_type='mesh_only')
  >>> section_cut.export_surface_section_cut(r'D:\tmp\section_cut.cdb', 'ansys:cdb', mapdl_model_type='solid_model')
  >>> section_cut.export_surface_section_cut(path=r'D:\tmp', format='becas:in', export_strength_limits=False)
  ```
* **Output:**
  - mapdl: CDB file including the nodes and elements.
  - becas: BECAS IN input files: N2D, E2D, EMAT and MATPROPS. Optional FAILMAT.
