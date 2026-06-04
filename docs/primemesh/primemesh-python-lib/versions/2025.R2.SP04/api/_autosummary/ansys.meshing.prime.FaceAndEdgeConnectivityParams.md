# FaceAndEdgeConnectivityParams

<a id="ansys.meshing.prime.FaceAndEdgeConnectivityParams"></a>

### *class* ansys.meshing.prime.FaceAndEdgeConnectivityParams(model=None, reorder_face_zonelets_mid_nodes=None, reorder_edge_zonelets_mid_nodes=None, json_data=None, \*\*kwargs)

Parameters to get face and edge connectivity information.

* **Parameters:**

  **model: Model**
  : Model to create a `FaceAndEdgeConnectivityParams` object with default parameters.

  **reorder_face_zonelets_mid_nodes: bool, optional**
  : Option to reorder mid nodes for quadratic faces.

  **reorder_edge_zonelets_mid_nodes: bool, optional**
  : Option to reorder mid nodes for quadratic edges.

  **json_data: dict, optional**
  : JSON dictionary to create a `FaceAndEdgeConnectivityParams` object with provided parameters.

### Examples

```pycon
>>> face_and_edge_connectivity_params = prime.FaceAndEdgeConnectivityParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`FaceAndEdgeConnectivityParams.print_default`](ansys.meshing.prime.FaceAndEdgeConnectivityParams.print_default.md#ansys.meshing.prime.FaceAndEdgeConnectivityParams.print_default)()   | Print the default values of `FaceAndEdgeConnectivityParams` object.   |
| [`FaceAndEdgeConnectivityParams.set_default`](ansys.meshing.prime.FaceAndEdgeConnectivityParams.set_default.md#ansys.meshing.prime.FaceAndEdgeConnectivityParams.set_default)([...])    | Set the default values of the `FaceAndEdgeConnectivityParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`FaceAndEdgeConnectivityParams.reorder_edge_zonelets_mid_nodes`](ansys.meshing.prime.FaceAndEdgeConnectivityParams.reorder_edge_zonelets_mid_nodes.md#ansys.meshing.prime.FaceAndEdgeConnectivityParams.reorder_edge_zonelets_mid_nodes)   | Option to reorder mid nodes for quadratic edges.   |
| [`FaceAndEdgeConnectivityParams.reorder_face_zonelets_mid_nodes`](ansys.meshing.prime.FaceAndEdgeConnectivityParams.reorder_face_zonelets_mid_nodes.md#ansys.meshing.prime.FaceAndEdgeConnectivityParams.reorder_face_zonelets_mid_nodes)   | Option to reorder mid nodes for quadratic faces.   |
<!-- vale on -->