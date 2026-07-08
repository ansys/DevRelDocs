# get_layup_from_csv_file

<a id="compolyx.Model.get_layup_from_csv_file"></a>

#### Model.get_layup_from_csv_file(path, objects=None, mode='update_entities', modeling_group=None)

Function that reads the layup data from a .csv file and adds the data to the graph.

* **Parameters:**
  - objects: List of objects to be synced.
  - path: The path to the file.
  - mode: Available options:
     - `update_properties_only`: Definitions are updated with properties given.
      - `update_entities`: Definitions are updated, additional plies are generated and deleted.
      - `recreate`: Existing layup is deleted generated from scratch.
  - modeling_group: Key of the mpg_collection dict equals the ID of the mpg. Only plies of this modeling_group will be imported from the file if none is specified all mpgs are read.
