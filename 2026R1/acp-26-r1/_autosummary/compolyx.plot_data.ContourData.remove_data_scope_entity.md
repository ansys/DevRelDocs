# remove_data_scope_entity

<a id="compolyx.plot_data.ContourData.remove_data_scope_entity"></a>

#### ContourData.remove_data_scope_entity(entity)

Remove 1 entity to the Data Scope of a plot.

### Parameters:
  - entity: Entity to be removed. Applicable are element set, oriented selection set, modeling ply, production ply, analysis ply, and sampling point

### Example:
: Remove the element set “My_ESet” from my_plot:
  <br/>
  ```default
  >>> my_plot.remove_data_scope_entity(entity = db.active_model.element_sets['My_ESet'])
  ```
