# create_layup_mapping_plot

<a id="compolyx.plot_data.LayupPlotDict.create_layup_mapping_plot"></a>

#### LayupPlotDict.create_layup_mapping_plot(name=None, id=None, data_scope=[], ply_wise=True, add_to_active_set=True, locked=False, component=None, show_on_solids=True, active=True)

Create a Layup Mapping Plot object.

### Parameters:
  - name: Name of the plot.
  - id: ID for the plot.
  - data_scope: One or more objects defining the scope for which data is computed and returned. Applicable: imported solid model.
  - ply_wise: ‘True’ or ‘False’ (default). Decides whether to return the thickness of the individual plies or of the whole stack of plies present at an element.
  - show_on_solids: ‘True’ or ‘False’ (default). Whether to show the results on the shell or solid model (if present).
  - component: Specifies the active component.
  - show_on_solids: Whether to show the values of the solid element.
  - active: Whether the plot is active.
### Returns:
  The plot object.

### Example:
: Create a thickness plot with Data Scope set to element set “All_Elements” in ply_wise mode:
  <br/>
  ```default
  >>> thick_plot = db.active_model.layup_plots.create_layup_mapping_plot(self, name="MyPlot", data_scope=[db.active_model.solid_models['ImportedSolidModel'], ply_wise = True)
  ```
