# remove_data_scope_entity

<a id="compolyx.plot_data.ThicknessData.remove_data_scope_entity"></a>

#### ThicknessData.remove_data_scope_entity(entity)

Remove 1 entity to the Data Scope of a plot.

* **Parameters:**
  - entity: Entity to be removed. Applicable are Element Set, Oriented Selection Set, Modeling Ply, Production Ply, Analysis Ply, and Sampling Point

**Example:**
: Remove the Element Set “My_ESet” from my_plot:
  <br/>
  ```default
  >>> my_plot.remove_data_scope_entity(entity = db.active_model.element_sets['My_ESet'])
  ```
