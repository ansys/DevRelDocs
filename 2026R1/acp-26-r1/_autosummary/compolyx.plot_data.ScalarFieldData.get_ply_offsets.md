# get_ply_offsets

<a id="compolyx.plot_data.ScalarFieldData.get_ply_offsets"></a>

#### ScalarFieldData.get_ply_offsets(visible=None, selected=None)

Get the offset between plies and reference surface.

* **Parameters:**
  - visible: Object(s) defining visible scope
  - selected: Selected object(s) for ply-wise evaluations.
* **Returns:**
  Resulting n-dimensional array of arrays with the ply-offset vectors for each node within the object/ply-selection:
  [
  [array(float, float, float), array(float, float, float), …]
  …
  ]

  The scope of the data is evaluated as the intersection of
  > - data_scope of plot
  > - visible_scope defined by visible
  > - selection_scope defined by selected

**Example:**
: Get the ply-offsets for the current ply-wise plot with visible scope set to element set “All_Elements” and with ply1 and ply2 selected:
  <br/>
  ```default
  >>> p_offs = my_contour_plot.get_ply_offsets(visible=db.active_model.element_sets['All_Elements'], selected=[ply1, ply2])
  ```
