# select_elements

<a id="compolyx.Model.select_elements"></a>

#### Model.select_elements(selection='sel0', op='new', labels=None, indices=None, attached_to=None, x=None, y=None, z=None, element_type='all')

Selects element within active model and marks the selection as SELECTED.

* **Parameters:**
  - selection: The selection to update.
    Can be given as string (‘sel0’-‘sel5’ or ‘all’) or ObjectSelection object such as
    - model.selection
    - scene.active_set
  - op: Select operation. Valid options: all, new (default), add, remove, intersect, inverse, and none.
  - labels: List with element labels to select.
  - indices: List with element indices to select.
  - attached_to: Elements attached to entities/vertices in this list will be selected.
  - x: X-range to select.
  - y: Y-range to select.
  - z: Z-range to select.
  - element_type: Valid options: solid and shell.
