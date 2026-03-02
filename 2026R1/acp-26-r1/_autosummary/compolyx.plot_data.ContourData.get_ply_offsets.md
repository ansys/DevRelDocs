# get_ply_offsets

<a id="compolyx.plot_data.ContourData.get_ply_offsets"></a>

## ContourData.get_ply_offsets(visible=None, selected=None)

Returns the offset between plies and reference surface.

### Parameters
  - visible: One or more objects defining visible scope
  - selected: Selected one or more objects for ply-wise evaluations.
### Returns
  Resulting n-dimensional array of arrays with the ply-offset vectors for each node within the object/ply-selection:
  [
  [array(float, float, float), array(float, float, float), …]
  …
  ]

  The scope of the data is evaluated as the intersection of
  > - data_scope of plot
  > - visible_scope defined by visible
  > - selection_scope defined by selected

### Example
: Returns the ply-offsets for the current ply-wise plot with visible scope set to element set “All_Elements” and with ply1 and ply2 selected:
  <br/>
  ```default
  >>> p_offs = my_contour_plot.get_ply_offsets(visible=db.active_model.element_sets['All_Elements'], selected=[ply1, ply2])
  ```
