# MergeBoundaryNodesParams

<a id="ansys.meshing.prime.MergeBoundaryNodesParams"></a>

### *class* ansys.meshing.prime.MergeBoundaryNodesParams(model=None, tolerance=None, use_absolute_tolerance=None, merge_node_type=None, json_data=None, \*\*kwargs)

Parameters used for the merge boundary nodes operation.

* **Parameters:**

  **model: Model**
  : Model to create a `MergeBoundaryNodesParams` object with default parameters.

  **tolerance: float, optional**
  : Distance tolerance for merging boundary nodes.

  **use_absolute_tolerance: bool, optional**
  : Indicates whether the tolerance provided is an absolute value or not.

  **merge_node_type: MergeNodeType, optional**
  : Type of nodes to be merged.

  **json_data: dict, optional**
  : JSON dictionary to create a `MergeBoundaryNodesParams` object with provided parameters.

### Examples

```pycon
>>> merge_boundary_nodes_params = prime.MergeBoundaryNodesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`MergeBoundaryNodesParams.print_default`](ansys.meshing.prime.MergeBoundaryNodesParams.print_default.md#ansys.meshing.prime.MergeBoundaryNodesParams.print_default)()   | Print the default values of `MergeBoundaryNodesParams` object.   |
| [`MergeBoundaryNodesParams.set_default`](ansys.meshing.prime.MergeBoundaryNodesParams.set_default.md#ansys.meshing.prime.MergeBoundaryNodesParams.set_default)([...])    | Set the default values of the `MergeBoundaryNodesParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`MergeBoundaryNodesParams.merge_node_type`](ansys.meshing.prime.MergeBoundaryNodesParams.merge_node_type.md#ansys.meshing.prime.MergeBoundaryNodesParams.merge_node_type)                      | Type of nodes to be merged.                                           |
| [`MergeBoundaryNodesParams.tolerance`](ansys.meshing.prime.MergeBoundaryNodesParams.tolerance.md#ansys.meshing.prime.MergeBoundaryNodesParams.tolerance)                                        | Distance tolerance for merging boundary nodes.                        |
| [`MergeBoundaryNodesParams.use_absolute_tolerance`](ansys.meshing.prime.MergeBoundaryNodesParams.use_absolute_tolerance.md#ansys.meshing.prime.MergeBoundaryNodesParams.use_absolute_tolerance) | Indicates whether the tolerance provided is an absolute value or not. |
<!-- vale on -->