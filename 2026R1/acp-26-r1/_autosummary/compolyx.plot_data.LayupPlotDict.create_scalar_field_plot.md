# create_scalar_field_plot

<a id="compolyx.plot_data.LayupPlotDict.create_scalar_field_plot"></a>

#### LayupPlotDict.create_scalar_field_plot(name=None, id=None, scope_entire_model=True, data_scope=[], scalar_field=None, show_supporting_points=False, show_supporting_point_labels=False, supporting_point_scale_factor=1.0, show_on_solids=False, show_ply_offsets=False, ply_offset_scale_factor=1.0, add_to_active_set=True, locked=False)

Create a Field Plot object.

### Parameters:
  - name: Name of the plot.
  - id: ID for the plot.
  - scope_entire_model: If ‘True’, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: One or more objects defining the scope for which data is computed and returned. Applicable are: element set, oriented selection set, modeling ply, sampling point.
  - ply_wise: ‘True’ or ‘False’ (default). Decides whether to return the field values of the individual plies or of the whole stack of plies present at an element.
  - show_on_solids: ‘True’ or ‘False’ (default). Whether to show the results on the shell or solid model (if present).
  - show_ply_offsets: ‘True’ or ‘False’ (default). Whether to display ply-wise visualizations with ply offsets.
  - ply_offset_scale_factor: Scale factor for the offsets of the visualized plies if show_ply_offsets=True.
### Returns:
  The plot object.

### Example:
: Create a field plot with Data Scope set to element set “All_Elements” in ply_wise mode:: tbdtbdtbd
