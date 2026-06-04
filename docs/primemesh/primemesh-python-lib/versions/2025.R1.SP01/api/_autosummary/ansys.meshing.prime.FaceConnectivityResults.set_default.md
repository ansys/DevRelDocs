# set_default

<a id="ansys.meshing.prime.FaceConnectivityResults.set_default"></a>

#### *static* FaceConnectivityResults.set_default(error_code=None, face_zonelet_ids=None, topo_face_ids=None, mesh_face_ids=None, face_zone_ids=None, face_zone_names=None, num_nodes_per_face_zonelet=None, node_coords=None, num_face_list_per_face_zonelet=None, face_list=None)

Set the default values of the `FaceConnectivityResults` object.

* **Parameters:**

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

<!-- !! processed by numpydoc !! -->
