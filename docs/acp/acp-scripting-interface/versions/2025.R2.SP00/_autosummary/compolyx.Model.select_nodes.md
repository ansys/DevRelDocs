# select_nodes

<a id="compolyx.Model.select_nodes"></a>

#### Model.select_nodes(selection='sel0', op='new', labels=None, attached_to=None, x=None, y=None, z=None)

Function selects nodes in graph and marks the given selection as SELECTED.

* **Parameters:**
  - selection: The selection to update.
    Can be given as string (`sel0`-`sel5` or `all`)
    or ObjectSelection object such as
    - `model.selection`
    - `scene.active_set`
  - op: Select operation. Available options: `all`, `new` (default), `add`, `remove`, `intersect`, `inverse`, and `none`.
  - labels: List with node labels to select.
  - attached_to: Nodes attached to the given list of entities or vertices will be selected.
    If attached_to=”elements” all nodes attached to selected elements are selected.
  - x: X-range to select.
  - y: Y-range to select.
  - z: Z-range to select.
