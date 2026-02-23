# get_element_indices

<a id="compolyx.plot_data.AngleData.get_element_indices"></a>

#### AngleData.get_element_indices(visible=None, selected=None)

Get element indices (ACP internal element numbers starting from 0) of plot.

* **Parameters:**
  - visible: Object(s) defining visible scope
  - selected: Selected object(s) for ply-wise evaluations.
* **Returns:**
  Resulting array with element indices from the intersection of
  - data_scope of plot
  - visible_scope defined by visible
  - selection_scope defined by selected

Indices are returned independent of update status of plot, but only if results for the current plot configuration are available, else an empty array is returned.

**Examples:**
: Get element indices for current plot with visible scope set to element set “All_Elements” and with ply1 and ply2 selected:
  <br/>
  ```default
  >>> eis = my_plot.get_element_indices(visible=db.active_model.element_sets['All_Elements'], selected=[ply1, ply2])
  ```
  <br/>
  Get element indices for current plot with visible scope equal to all objects visible in current scene:
  <br/>
  ```default
  >>> eis = my_plot.get_element_indices(visible=db.active_model.active_scene.active_set.entities)
  ```
