# import_section_data_from_legacy_model

<a id="compolyx.Model.import_section_data_from_legacy_model"></a>

#### Model.import_section_data_from_legacy_model(path, format='ansys:cdb', materials_mask_prefix='mat', materials_mask_suffix=' (setup, file1)')

Import and convert the layup of a legacy (Mechanical APDL) shell model into ACP composite definitions.

The mapping is based on the element labels and therefore it is a requirement that
the element labels in the legacy and ACP model match. The import is only performed if the file and ACP Model units are consistent.

### Parameters:
  - path: File path. Supported file extensions are CDB, DAT, and INP.
  - format: File format. Supported are ‘ansys:cdb’ and ‘ansys:dat’.
  - materials_mask_prefix: Defines the prefix that is added to the Material ID while importing materials via ExternalModel.
  - materials_mask_suffix: Defines the suffix that is added to the Material ID while importing materials via ExternalModel.
### Materials mapping:
  Only relevant when the import happens within the Workbench application.
  The materials mask prefix and suffix parameters enable automatic mapping of the Workbench application’s material and legacy material IDs.
  For instance the prefix and suffix, MAT1 and \` (Setup, File1)\` enable mapping MAT1 (Setup, File1) with legacy material 1.
  The mapping is case independent.
  Pass empty mapping masks when no mapping is needed.
### Example:
  ```pycon
  >>> db.active_model.import_section_data_from_legacy_model(path=r'D:  mp\class40_analysis_model.cdb', format='ansys:cdb')
  ```
