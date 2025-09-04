# get_element_labels

<a id="compolyx.plot_data.PlotData.get_element_labels"></a>

#### PlotData.get_element_labels(visible=None, selected=None)

Get element labels (element numbers as read from / written to mesh files)  of plot.

* **Parameters:**
  - visible: Object(s) defining visible scope
  - selected: Selected object(s) for ply-wise evaluations.
* **Returns:**
  Resulting array with element labels from the intersection of
  - data_scope of plot
  - visible_scope defined by visible
  - selection_scope defined by selected

Labels are returned independent of update status of plot, but only if results for the current plot configuration are available, else an empty array is returned.

**Examples:**
: Get element labels for current plot with visible scope set to element set “All_Elements” and with ply1 and ply2 selected:
  <br/>
  ```default
  >>> eis = my_plot.get_element_labels(visible=db.active_model.element_sets['All_Elements'], selected=[ply1, ply2])
  ```
  <br/>
  Get element labels for current plot with visible scope equal to all objects visible in current scene::
  : ```pycon
    >>> eis = my_plot.get_element_labels(visible=db.active_model.active_scene.active_set.entities)
    ```
