# create_edge_set

<a id="compolyx.Model.create_edge_set"></a>

#### Model.create_edge_set(name, id=None, origin=(0.0, 0.0, 0.0), limit_angle=-1.0, edge_set_type='By Reference', element_set=None, node_labels=[], show=False)

Create a new edge set.

* **Parameters:**
  - name: Name of the edge set.
  - edge_set_type: Available options: `By Nodes`, `By Reference`, and `Imported` (only for imported edge sets).
  - origin: Origin.
  - limit_angle: The edge set is cropped if the angle between two element edges exceeds this limit. Use -1 to disable it.
  - element_set: Element set.
  - node_labels: List of nodes defining the edge set (only if edge_set_type= `By Nodes`).
* **Returns:**
  The created edge set.
