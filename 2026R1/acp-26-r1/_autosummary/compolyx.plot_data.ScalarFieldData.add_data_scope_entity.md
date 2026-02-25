# add_data_scope_entity

<a id="compolyx.plot_data.ScalarFieldData.add_data_scope_entity"></a>

#### ScalarFieldData.add_data_scope_entity(entity)

Add 1 entity to the Data Scope of a plot.

### Parameters:
  - entity: Entity to be added. Applicable are element set, oriented selection set, modeling ply, production ply, analysis ply, and sampling point

### Example:
: Add the element set “My_ESet” to a my_plot:
  <br/>
  ```default
  >>> my_plot.add_data_scope_entity(entity = db.active_model.element_sets['My_ESet'])
  ```
