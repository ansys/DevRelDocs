# set_default

<a id="ansys.meshing.prime.CheckMeshResults.set_default"></a>

#### *static* CheckMeshResults.set_default(has_non_positive_volumes=None, has_non_positive_areas=None, has_invalid_shape=None, has_left_handed_faces=None, error_code=None, warning_codes=None)

Set the default values of the `CheckMeshResults` object.

* **Parameters:**

  **has_non_positive_volumes: bool, optional**
  : Indicates whether mesh has non positive volumes.

  **has_non_positive_areas: bool, optional**
  : Indicates whether mesh has non positive areas.

  **has_invalid_shape: bool, optional**
  : Indicates whether mesh has invalid shape.

  **has_left_handed_faces: bool, optional**
  : Indicates whether mesh has left handed faces.

  **error_code: ErrorCode, optional**
  : Error code associated with the check grid operation.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the check grid operation.

<!-- !! processed by numpydoc !! -->
