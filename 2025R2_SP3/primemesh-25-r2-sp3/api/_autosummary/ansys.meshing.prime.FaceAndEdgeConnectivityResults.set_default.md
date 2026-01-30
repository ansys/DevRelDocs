# set_default

<a id="ansys.meshing.prime.FaceAndEdgeConnectivityResults.set_default"></a>

#### *static* FaceAndEdgeConnectivityResults.set_default(error_code=None, part_ids=None, face_connectivity_result_per_part=None, edge_connectivity_result_per_part=None)

Set the default values of the `FaceAndEdgeConnectivityResults` object.

* **Parameters:**

  **error_code: ErrorCode, optional**
  : Error code associated with the get face and edge connectivity operation.

  **part_ids: Iterable[int], optional**
  : Part ids for which face and edge connectivity data is available.

  **face_connectivity_result_per_part: List[FaceConnectivityResults], optional**
  : Face connectivity result per part.

  **edge_connectivity_result_per_part: List[EdgeConnectivityResults], optional**
  : Edge connectivity result per part.

<!-- !! processed by numpydoc !! -->
