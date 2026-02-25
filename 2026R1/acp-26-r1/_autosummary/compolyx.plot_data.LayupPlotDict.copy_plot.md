# copy_plot

<a id="compolyx.plot_data.LayupPlotDict.copy_plot"></a>

#### LayupPlotDict.copy_plot(source)

Copy a plot object.

### Parameters:
  - source: Plot object to be copied.
### Returns:
  Object of the plot duplicate.

### Examples:
: Make a copy of the thickness plot “My_Thickness_Plot”:
  <br/>
  ```default
  >>> plot_copy = db.active_model.layup_plots.copy_plot( db.active_model.layup_plots['My_Thickness_Plot'] )
  ```
