# add_data_scope_entity

<a id="compolyx.plot_data.FieldDefinitionData.add_data_scope_entity"></a>

#### FieldDefinitionData.add_data_scope_entity(entity)

Add 1 entity to the Data Scope of a plot.

* **Parameters:**
  - entity: Entity to be added. Applicable are Element Set, Oriented Selection Set, Modeling Ply, Production Ply, Analysis Ply, and Sampling Point

**Example:**
: Add the Element Set “My_ESet” to a my_plot:
  <br/>
  ```default
  >>> my_plot.add_data_scope_entity(entity = db.active_model.element_sets['My_ESet'])
  ```
