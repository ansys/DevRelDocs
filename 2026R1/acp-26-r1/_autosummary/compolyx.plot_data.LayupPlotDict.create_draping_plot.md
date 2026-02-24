# create_draping_plot

<a id="compolyx.plot_data.LayupPlotDict.create_draping_plot"></a>

#### LayupPlotDict.create_draping_plot(name=None, id=None, show_flatwrap=True, show_draping_mesh=True, add_to_active_set=True, locked=False)

Create a Draping Plot object.

* **Parameters:**
  - name: Name of the plot
  - id: ID for the plot
* **Returns:**
  the plot object

**Example:**
: Create a draping plot with Data Scope set to element set “All_Elements”:
  <br/>
  ```default
  >>> draping_plot = db.active_model.layup_plots.create_draping_plot(self, name="MyPlot")
  ```
