# set_default

<a id="ansys.meshing.prime.ComputeVolumesResults.set_default"></a>

#### *static* ComputeVolumesResults.set_default(error_code=None, error_locations=None, volumes=None, material_point_volumes=None, external_open_face_zonelets=None, warning_codes=None)

Set the default values of the `ComputeVolumesResults` object.

* **Parameters:**

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **error_locations: Iterable[float], optional**
  : Coordinates of problematic locations in the surface mesh.

  **volumes: Iterable[int], optional**
  : Ids of computed volumes.

  **material_point_volumes: Iterable[int], optional**
  : Ids of computed volumes enclosing material points.

  **external_open_face_zonelets: Iterable[int], optional**
  : Face zonelet ids that are in external space and not part of any computed volumes.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the compute volumes.

<!-- !! processed by numpydoc !! -->
