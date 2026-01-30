# RepairTopologyParams

<a id="ansys.meshing.prime.RepairTopologyParams"></a>

### *class* ansys.meshing.prime.RepairTopologyParams(model=None, connect_faces=None, repair_edges=None, split_topo_edges_at_apex_point=None, fillet_max_radius=None, smallest_edge_length=None, merge_edge_allow_self_close=None, suppress_shared_edges_when_merging=None, edge_connect_type=None, connect_faces_params=None, repair_edges_params=None, json_data=None, \*\*kwargs)

Parameters for repair topology operations.

* **Parameters:**

  **model: Model**
  : Model to create a `RepairTopologyParams` object with default parameters.

  **connect_faces: bool, optional**
  : Option to connect faces.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **repair_edges: bool, optional**
  : Option to repair edges.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **split_topo_edges_at_apex_point: bool, optional**
  : Option to split edges at apex point.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **fillet_max_radius: float, optional**
  : Maximum radius of fillets to be detected.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **smallest_edge_length: float, optional**
  : Length of smallest edge for which split is applied.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **merge_edge_allow_self_close: bool, optional**
  : Option for merging self-closing edge loops.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **suppress_shared_edges_when_merging: bool, optional**
  : Option for suppressing shared edges when merging.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **edge_connect_type: int, optional**
  : Edge connection type.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **connect_faces_params: ConnectFacesParams, optional**
  : Parameters for connect faces operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **repair_edges_params: RepairEdgesParams, optional**
  : Parameters for repair edges operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `RepairTopologyParams` object with provided parameters.

### Examples

```pycon
>>> repair_topology_params = prime.RepairTopologyParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`RepairTopologyParams.print_default`](ansys.meshing.prime.RepairTopologyParams.print_default.md#ansys.meshing.prime.RepairTopologyParams.print_default)()   | Print the default values of `RepairTopologyParams` object.   |
| [`RepairTopologyParams.set_default`](ansys.meshing.prime.RepairTopologyParams.set_default.md#ansys.meshing.prime.RepairTopologyParams.set_default)([...])    | Set the default values of the `RepairTopologyParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| [`RepairTopologyParams.connect_faces`](ansys.meshing.prime.RepairTopologyParams.connect_faces.md#ansys.meshing.prime.RepairTopologyParams.connect_faces)                                                                | Option to connect faces.                            |
| [`RepairTopologyParams.connect_faces_params`](ansys.meshing.prime.RepairTopologyParams.connect_faces_params.md#ansys.meshing.prime.RepairTopologyParams.connect_faces_params)                                           | Parameters for connect faces operation.             |
| [`RepairTopologyParams.edge_connect_type`](ansys.meshing.prime.RepairTopologyParams.edge_connect_type.md#ansys.meshing.prime.RepairTopologyParams.edge_connect_type)                                                    | Edge connection type.                               |
| [`RepairTopologyParams.fillet_max_radius`](ansys.meshing.prime.RepairTopologyParams.fillet_max_radius.md#ansys.meshing.prime.RepairTopologyParams.fillet_max_radius)                                                    | Maximum radius of fillets to be detected.           |
| [`RepairTopologyParams.merge_edge_allow_self_close`](ansys.meshing.prime.RepairTopologyParams.merge_edge_allow_self_close.md#ansys.meshing.prime.RepairTopologyParams.merge_edge_allow_self_close)                      | Option for merging self-closing edge loops.         |
| [`RepairTopologyParams.repair_edges`](ansys.meshing.prime.RepairTopologyParams.repair_edges.md#ansys.meshing.prime.RepairTopologyParams.repair_edges)                                                                   | Option to repair edges.                             |
| [`RepairTopologyParams.repair_edges_params`](ansys.meshing.prime.RepairTopologyParams.repair_edges_params.md#ansys.meshing.prime.RepairTopologyParams.repair_edges_params)                                              | Parameters for repair edges operation.              |
| [`RepairTopologyParams.smallest_edge_length`](ansys.meshing.prime.RepairTopologyParams.smallest_edge_length.md#ansys.meshing.prime.RepairTopologyParams.smallest_edge_length)                                           | Length of smallest edge for which split is applied. |
| [`RepairTopologyParams.split_topo_edges_at_apex_point`](ansys.meshing.prime.RepairTopologyParams.split_topo_edges_at_apex_point.md#ansys.meshing.prime.RepairTopologyParams.split_topo_edges_at_apex_point)             | Option to split edges at apex point.                |
| [`RepairTopologyParams.suppress_shared_edges_when_merging`](ansys.meshing.prime.RepairTopologyParams.suppress_shared_edges_when_merging.md#ansys.meshing.prime.RepairTopologyParams.suppress_shared_edges_when_merging) | Option for suppressing shared edges when merging.   |
<!-- vale on -->