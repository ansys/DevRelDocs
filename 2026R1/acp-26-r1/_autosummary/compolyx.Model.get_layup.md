# get_layup

<a id="compolyx.Model.get_layup"></a>

#### Model.get_layup(path, format=None, objects=None, mode='update_entities')

Load layup from excel or .csv file.

* **Parameters:**
  - mode: Valid options:
    : update_properties_only: Definitions are updated with properties given.
      update_entities: Definitions are updated, additional plies are generated and deleted.
      recreate: Existing layup is deleted generated from scratch.
