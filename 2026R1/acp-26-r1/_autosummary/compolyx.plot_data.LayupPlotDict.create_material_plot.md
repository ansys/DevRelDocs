# create_material_plot

<a id="compolyx.plot_data.LayupPlotDict.create_material_plot"></a>

#### LayupPlotDict.create_material_plot(name=None, id=None, active=True, scope_entire_model=True, data_scope=[], show_on_solids=False, show_ply_offsets=False, ply_offset_scale_factor=1.0, add_to_active_set=True, locked=False, component='E1', use_all_available_fields=True, field_variable_names=[], shear_angle_enabled=False, temperature_enabled=False)

Create a Material Plot object.

### Parameters:
  - name: Name of the plot.
  - id: ID for the plot.
  - active: Whether the plot is active.
  - scope_entire_model: If ‘True’, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: One or more objects defining the scope for which data is computed and returned. Applicable are: element set, oriented selection set, modeling ply, sampling point.
  - show_on_solids: ‘True’ or ‘False’ (default). Whether to show the results on the shell or solid model (if present).
  - show_ply_offsets: ‘True’ or ‘False’ (default). Whether to display ply-wise visualizations with ply offsets.
  - ply_offset_scale_factor: Scale factor for the offsets of the visualized plies if show_ply_offsets=True.
  - component: Specifies the component.
  - use_all_available_fields: ‘True’ (default) or ‘False’. Whether to enable all available field variables in the evaluation.
### Returns:
  The plot object.

### Example:
: Create a material plot with Data Scope set to element set “All_Elements” showing the Young Modulus E2:
  <br/>
  ```default
  >>> E2_plot = db.active_model.layup_plots.create_material_plot(name="E2_Plot", data_scope=[db.active_model.element_sets['All_Elements']], component = 'E2')
  ```
