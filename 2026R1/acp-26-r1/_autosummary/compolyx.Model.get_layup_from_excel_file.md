# get_layup_from_excel_file

<a id="compolyx.Model.get_layup_from_excel_file"></a>

#### Model.get_layup_from_excel_file(path, objects=None, mode='update_entities')

Load layup from Excel File.

### Parameters:
  - path: Path to file to load.
  - objects: Objects to be loaded and overwritten.
  - mode: Valid options:
    : > update_properties_only: Definitions are updated with properties given.
      <br/>
      update_entities: Definitions are updated, additional plies are generated and deleted.
      recreate: Existing layup is deleted generated from scratch.
