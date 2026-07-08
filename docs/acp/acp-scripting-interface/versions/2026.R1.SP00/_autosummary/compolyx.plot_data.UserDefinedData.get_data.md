# get_data

<a id="compolyx.plot_data.UserDefinedData.get_data"></a>

## UserDefinedData.get_data(visible=None, selected=None)

Get data of plot.

### Parameters
  - visible: One or more objects defining visible scope
  - selected: Selected one or more objects for ply-wise evaluations.
### Returns
  Resulting n-dimensional array with plot data for each selected object.
  The scope of the data is evaluated identically as for get_element_xx functions as the intersection of
  - data_scope of plot
  - visible_scope defined by visible
  - selection_scope defined by selected

Data is returned independent of update status of plot, but only if results for the current plot configuration are available, else an empty array is returned.

Examples:
: Get data for current ply-wise plot with visible scope set to element set “All_Elements” and with ply1 and ply2 selected:
  <br/>
  ```default
  >>> data = my_plot.get_data(visible=db.active_model.element_sets['All_Elements'], selected=[ply1, ply2])
  ```
  <br/>
  Get data for current element-wise plot with visible scope equal to all objects visible in current scene:
  <br/>
  ```default
  >>> data = my_plot.get_data(visible=db.active_model.active_scene.active_set.entities)
  ```
