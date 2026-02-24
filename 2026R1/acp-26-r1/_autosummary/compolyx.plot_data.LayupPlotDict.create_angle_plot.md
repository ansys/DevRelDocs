# create_angle_plot

<a id="compolyx.plot_data.LayupPlotDict.create_angle_plot"></a>

#### LayupPlotDict.create_angle_plot(name=None, id=None, scope_entire_model=True, data_scope=[], show_on_solids=False, show_on_section_cuts=True, show_ply_offsets=False, ply_offset_scale_factor=1.0, component=None, add_to_active_set=True, locked=False)

Create a Angle Plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - scope_entire_model: If ‘True’, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: Object(s) defining the scope for which data is computed and returned.
    : Applicable are: Element Set, Oriented Selection Set, Modeling Ply, Sampling Point.
  - show_on_solids: ‘True’ or ‘False’ (default). Whether to show the results on the shell or solid model (if present).
  - show_on_section_cuts: Whether to show the results on the surface section cuts as well. Default is ‘True’.
  - show_ply_offsets: ‘True’ or ‘False’ (default). Whether to display ply-wise visualizations with ply offsets.
  - ply_offset_scale_factor: Scale factor for the offsets of the visualized plies if show_ply_offsets=True.
* **Returns:**
  The plot object.

**Example:**
: Create a angle plot with Data Scope set to Element Set “All_Elements”:
  <br/>
  ```default
  >>> angle_plot = db.active_model.layup_plots.create_angle_plot(self, name="MyPlot", data_scope=db.active_model.element_sets['All_Elements'])
  ```
