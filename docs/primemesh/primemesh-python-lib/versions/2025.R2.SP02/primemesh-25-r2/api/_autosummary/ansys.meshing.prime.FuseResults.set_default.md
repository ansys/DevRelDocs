# set_default

<a id="ansys.meshing.prime.FuseResults.set_default"></a>

#### *static* FuseResults.set_default(fused_pairs=None, fused_area=None, error_code=None, warning_codes=None, intersecting_locations=None, intersecting_zonelet_pairs=None)

Set the default values of the `FuseResults` object.

* **Parameters:**

  **fused_pairs: int, optional**
  : Number of face region pairs that were fused.

  **fused_area: float, optional**
  : Total area of fused regions from both source and target faces.

  **error_code: ErrorCode, optional**
  : Error code associated with failure of the fuse operation.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the fuse operation.

  **intersecting_locations: Iterable[float], optional**
  : Locations where the fuse operation did not remove self-intersections in the input. Each location corresponds to a patch of faces where self-intersections exist. The number of elements in intersecting locations are in multiples of three. For example, zero, three, six, nine, and so on. Each triplet corresponds to coordinates in x, y, and z. For example, if the intersecting locations contain (a, b, c, d, e, f), then (a, b, c) represent the first location and (d, e, f) represent the second location.

  **intersecting_zonelet_pairs: List[OverlapPairs], optional**
  : Contains pairs of face zonelet ids where the fuse operation failed to remove self-intersections in the input.

<!-- !! processed by numpydoc !! -->
