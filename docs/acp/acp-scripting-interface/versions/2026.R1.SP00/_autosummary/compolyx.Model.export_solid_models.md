# export_solid_models

<a id="compolyx.Model.export_solid_models"></a>

## Model.export_solid_models(directory=None, prefix='ACPSolidModel_', delete_existing=True, formats=['cdb', 'h5'], normalize_filename_for_cdb=False)

Save solid models to files. Function is used within the Workbench application updates.

### Parameters
  - directory: Directory to save the models.
  - prefix: Prefix of the model. Default “

    ```
    ACPSolidModel_
    ```

    ”.
  - delete_existing: Flag if existing models should be deleted. Default is ‘True’.
  - formats: Available file formats are ‘cdb’ or ‘h5’. Default [‘cdb’, ‘h5’].
  - normalize_filename_for_cdb: Whether the solid model name should be normalized
    for the .cdb filepath. This may be necessary because Mechanical APDL cannot read filenames
    that contain non-ASCII characters.
