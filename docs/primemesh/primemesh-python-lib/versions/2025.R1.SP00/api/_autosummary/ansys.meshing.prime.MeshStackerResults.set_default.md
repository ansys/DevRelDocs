# set_default

<a id="ansys.meshing.prime.MeshStackerResults.set_default"></a>

#### *static* MeshStackerResults.set_default(error_code=None, error_codes_per_topo_volume=None, non_stackable_faces=None, non_stackable_edges=None, small_features=None, base_face_ids=None, size_control_ids=None)

Set the default values of the `MeshStackerResults` object.

* **Parameters:**

  **error_code: ErrorCode, optional**
  : Error code associated with the operation.

  **error_codes_per_topo_volume: Iterable[int], optional**
  : Error codes associated with the topovolume-by-topovolume stacking.

  **non_stackable_faces: Iterable[int], optional**
  : List of non-stackable faces. Note: Under-resolved faceting can also create non-stackable geometry.

  **non_stackable_edges: Iterable[int], optional**
  : List of non-stackable edges. Note: Under-resolved faceting can also create non-stackable geometry.

  **small_features: Iterable[int], optional**
  : List of features edges smaller than input tolerance.

  **base_face_ids: Iterable[int], optional**
  : List of base face ids after base creation.

  **size_control_ids: Iterable[int], optional**
  : List of ids of newly created size controls.

<!-- !! processed by numpydoc !! -->
