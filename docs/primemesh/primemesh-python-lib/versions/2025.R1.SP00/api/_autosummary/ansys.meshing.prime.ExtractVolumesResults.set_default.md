# set_default

<a id="ansys.meshing.prime.ExtractVolumesResults.set_default"></a>

#### *static* ExtractVolumesResults.set_default(error_code=None, volumes=None, warning_codes=None, assigned_zone_name=None, face_zonelets_without_volumes=None)

Set the default values of the `ExtractVolumesResults` object.

* **Parameters:**

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **volumes: Iterable[int], optional**
  : Ids of computed volumes.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the compute volumes.

  **assigned_zone_name: str, optional**
  : Assigned name of zone for extracted flow volumes.

  **face_zonelets_without_volumes: Iterable[int], optional**
  : Ids of face zonelets for which volumes were not extracted.

<!-- !! processed by numpydoc !! -->
