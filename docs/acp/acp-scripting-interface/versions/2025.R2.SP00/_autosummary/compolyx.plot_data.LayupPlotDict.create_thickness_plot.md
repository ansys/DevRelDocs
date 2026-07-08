# create_thickness_plot

<a id="compolyx.plot_data.LayupPlotDict.create_thickness_plot"></a>

#### LayupPlotDict.create_thickness_plot(name=None, id=None, scope_entire_model=True, data_scope=[], ply_wise=False, show_on_solids=False, show_ply_offsets=False, ply_offset_scale_factor=1.0, add_to_active_set=True, locked=False, component='thickness')

Create a Thickness Plot object.

* **Parameters:**
  - name: Name of the plot.
  - id: ID for the plot.
  - scope_entire_model: If true, then the scope of this plot is the entire model. If not, then set to false and use the data_scope to specify a sub scope.
  - data_scope: Object(s) defining the scope for which data is computed and returned. Applicable are: Element Set, Oriented Selection Set, Modeling Ply, Sampling Point.
  - ply_wise: ‘True’ or ‘False’ (default). Decides whether to return the thickness of the individual plies or of the whole stack of plies present at an element.
  - show_on_solids: ‘True’ or ‘False’ (default). Whether to show the results on the shell or solid model (if present).
  - show_ply_offsets: ‘True’ or ‘False’ (default). Whether to display ply-wise visualizations with ply offsets.
  - ply_offset_scale_factor: Scale factor for the offsets of the visualized plies if show_ply_offsets=True.
  - component: Specifies the component.
* **Returns:**
  The plot object.

**Example:**
: Create a thickness plot with Data Scope set to Element Set “All_Elements” in ply_wise mode:
  <br/>
  ```default
  >>> thick_plot = db.active_model.layup_plots.create_thickness_plot(self, name="MyPlot", data_scope=db.active_model.element_sets['All_Elements'], ply_wise = True)
  ```
