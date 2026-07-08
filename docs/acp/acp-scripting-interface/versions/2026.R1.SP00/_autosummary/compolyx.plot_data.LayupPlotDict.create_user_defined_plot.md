# create_user_defined_plot

<a id="compolyx.plot_data.LayupPlotDict.create_user_defined_plot"></a>

## LayupPlotDict.create_user_defined_plot(name=None, id=None, active=True, scope_entire_model=True, data_scope=[], user_data=[], user_text=[], user_script=None, user_script_enabled=False, show_on_solids=False, show_user_text=False, text_threshold=0.0, text_threshold_type='show_all', show_ply_offsets=False, ply_offset_scale_factor=1.0, add_to_active_set=True, locked=False)

Create a User-defined Plot object.

### Parameters
  - name: Name of the plot.
  - id: ID for the plot.
  - active: Whether the plot is active.
  - scope_entire_model: If true, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: One or more objects defining the scope for which data is computed and returned. Applicable are: element set, oriented selection set, modeling ply, sampling point.
  - user_data: Retrieve or provide the user data, which must obey the order of the user_element_indices or user_element_labels, respectively.
  - user_text: Access to the user-defined text of the plot. Empty strings can be inserted when no labels are to be shown for certain elements.
  - user_script: The body of the script to be executed on update if user_script_enabled = True.
  - user_script_enabled: Boolean that controls if a custom script is run on update.
  - show_on_solids: ‘True’ or ‘False’ (default). Whether to show the results on the shell or solid model (if present).
  - show_user_text: ‘True’ or ‘False’ (default). Whether to show the text, which the user provided.
  - text_threshold_type: “show_all” (default), “show_only_values_above_threshold”, “show_only_values_below_threshold. Threshold can be set using the text_threshold property.
  - text_threshold: Threshold used for showing text if text_threshold_type is not “show_all”.
  - show_ply_offsets: ‘True’ or ‘False’ (default). Whether to display ply-wise visualizations with ply offsets.
  - ply_offset_scale_factor: Scale factor for the offsets of the visualized plies if show_ply_offsets=True.
### Returns
  The plot object.

### Example
: Create a user-defined plot with Data Scope set to element set “All_Elements”:
  <br/>
  ```default
  >>> u_plot = db.active_model.layup_plots.create_user_defined_plot(self, name="MyPlot", data_scope=db.active_model.element_sets['All_Elements'])
  ```
