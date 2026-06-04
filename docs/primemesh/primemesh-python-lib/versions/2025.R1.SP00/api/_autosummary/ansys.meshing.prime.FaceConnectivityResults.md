# FaceConnectivityResults

<a id="ansys.meshing.prime.FaceConnectivityResults"></a>

### *class* ansys.meshing.prime.FaceConnectivityResults(model=None, error_code=None, face_zonelet_ids=None, topo_face_ids=None, mesh_face_ids=None, face_zone_ids=None, face_zone_names=None, num_nodes_per_face_zonelet=None, node_coords=None, num_face_list_per_face_zonelet=None, face_list=None, json_data=None, \*\*kwargs)

Result of the face connectivity information.

* **Parameters:**

  **model: Model**
  : Model to create a `FaceConnectivityResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the get face connectivity operation.

  **face_zonelet_ids: Iterable[int], optional**
  : Face zonelet ids for which connectivity data is available.

  **topo_face_ids: Iterable[int], optional**
  : TopoFace ids corresponding to each face zonelet id for topology based mesh.

  **mesh_face_ids: Iterable[int], optional**
  : Mesh face ids corresponding to each topoface.

  **face_zone_ids: Iterable[int], optional**
  : Face zone id corresponding to each topoface or face zonelet.

  **face_zone_names: List[str], optional**
  : Face zone name corresponding to each topoface or face zonelet.

  **num_nodes_per_face_zonelet: Iterable[int], optional**
  : Number of nodes per face zonelet.

  **node_coords: Iterable[float], optional**
  : Node coordinates describing faces of face zonelet.

  **num_face_list_per_face_zonelet: Iterable[int], optional**
  : Number of face list per face zonelet.

  **face_list: Iterable[int], optional**
  : Face list describing connectivity of node coordinates.

  **json_data: dict, optional**
  : JSON dictionary to create a `FaceConnectivityResults` object with provided parameters.

### Examples

```pycon
>>> face_connectivity_results = prime.FaceConnectivityResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [`FaceConnectivityResults.print_default`](ansys.meshing.prime.FaceConnectivityResults.print_default.md#ansys.meshing.prime.FaceConnectivityResults.print_default)()   | Print the default values of `FaceConnectivityResults` object.   |
| [`FaceConnectivityResults.set_default`](ansys.meshing.prime.FaceConnectivityResults.set_default.md#ansys.meshing.prime.FaceConnectivityResults.set_default)([...])    | Set the default values of the `FaceConnectivityResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| [`FaceConnectivityResults.error_code`](ansys.meshing.prime.FaceConnectivityResults.error_code.md#ansys.meshing.prime.FaceConnectivityResults.error_code)                                                             | Error code associated with the get face connectivity operation.             |
| [`FaceConnectivityResults.face_list`](ansys.meshing.prime.FaceConnectivityResults.face_list.md#ansys.meshing.prime.FaceConnectivityResults.face_list)                                                                | Face list describing connectivity of node coordinates.                      |
| [`FaceConnectivityResults.face_zone_ids`](ansys.meshing.prime.FaceConnectivityResults.face_zone_ids.md#ansys.meshing.prime.FaceConnectivityResults.face_zone_ids)                                                    | Face zone id corresponding to each topoface or face zonelet.                |
| [`FaceConnectivityResults.face_zone_names`](ansys.meshing.prime.FaceConnectivityResults.face_zone_names.md#ansys.meshing.prime.FaceConnectivityResults.face_zone_names)                                              | Face zone name corresponding to each topoface or face zonelet.              |
| [`FaceConnectivityResults.face_zonelet_ids`](ansys.meshing.prime.FaceConnectivityResults.face_zonelet_ids.md#ansys.meshing.prime.FaceConnectivityResults.face_zonelet_ids)                                           | Face zonelet ids for which connectivity data is available.                  |
| [`FaceConnectivityResults.mesh_face_ids`](ansys.meshing.prime.FaceConnectivityResults.mesh_face_ids.md#ansys.meshing.prime.FaceConnectivityResults.mesh_face_ids)                                                    | Mesh face ids corresponding to each topoface.                               |
| [`FaceConnectivityResults.node_coords`](ansys.meshing.prime.FaceConnectivityResults.node_coords.md#ansys.meshing.prime.FaceConnectivityResults.node_coords)                                                          | Node coordinates describing faces of face zonelet.                          |
| [`FaceConnectivityResults.num_face_list_per_face_zonelet`](ansys.meshing.prime.FaceConnectivityResults.num_face_list_per_face_zonelet.md#ansys.meshing.prime.FaceConnectivityResults.num_face_list_per_face_zonelet) | Number of face list per face zonelet.                                       |
| [`FaceConnectivityResults.num_nodes_per_face_zonelet`](ansys.meshing.prime.FaceConnectivityResults.num_nodes_per_face_zonelet.md#ansys.meshing.prime.FaceConnectivityResults.num_nodes_per_face_zonelet)             | Number of nodes per face zonelet.                                           |
| [`FaceConnectivityResults.topo_face_ids`](ansys.meshing.prime.FaceConnectivityResults.topo_face_ids.md#ansys.meshing.prime.FaceConnectivityResults.topo_face_ids)                                                    | TopoFace ids corresponding to each face zonelet id for topology based mesh. |
<!-- vale on -->