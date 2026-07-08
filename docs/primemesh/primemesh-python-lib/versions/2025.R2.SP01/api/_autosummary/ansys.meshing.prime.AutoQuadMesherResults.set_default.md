# set_default

<a id="ansys.meshing.prime.AutoQuadMesherResults.set_default"></a>

#### *static* AutoQuadMesherResults.set_default(error_code=None, warning_codes=None, failed_topo_face_ids=None)

Set the default values of the `AutoQuadMesherResults` object.

* **Parameters:**

  **error_code: ErrorCode, optional**
  : Error code if AutoQuadMesher operation is unsuccessful.

  **warning_codes: List[WarningCode], optional**
  : Warning code if AutoQuadMesher operation is partially successful.

  **failed_topo_face_ids: Iterable[int], optional**
  : Ids of the failed topofaces during topology check.

<!-- !! processed by numpydoc !! -->
