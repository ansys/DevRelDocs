# create_field_definition_plot

<a id="compolyx.plot_data.LayupPlotDict.create_field_definition_plot"></a>

#### LayupPlotDict.create_field_definition_plot(name=None, id=None, scope_entire_model=True, data_scope=[], field_variable_name=None, show_on_solids=False, add_to_active_set=True, locked=False)

Create a FieldDefinition Plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - scope_entire_model: If ‘True’, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: Object(s) defining the scope for which data is computed and returned. Applicable are: element set, oriented selection set, modeling ply.
  - show_on_solids: ‘True’ or ‘False’ (default). Whether to show the results on the shell or solid model (if present).
* **Returns:**
  The plot object.

**Example:**
: Create a field definition plot for field degradation with Data Scope set to element set “All_Elements” in ply_wise mode:
  <br/>
  ```default
  >>> field_plot = db.active_model.layup_plots.create_field_definition_plot(self, name="MyPlot", field_variable_name="degradation", data_scope=db.active_model.element_sets['All_Elements'], ply_wise = True)
  ```
