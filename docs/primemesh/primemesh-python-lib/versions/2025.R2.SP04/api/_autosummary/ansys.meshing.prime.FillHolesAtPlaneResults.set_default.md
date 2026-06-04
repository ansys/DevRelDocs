# set_default

<a id="ansys.meshing.prime.FillHolesAtPlaneResults.set_default"></a>

#### *static* FillHolesAtPlaneResults.set_default(error_code=None, warning_codes=None, created_face_zonelets=None, assigned_zone_name=None, created_zone_id=None)

Set the default values of the `FillHolesAtPlaneResults` object.

* **Parameters:**

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with operation.

  **created_face_zonelets: Iterable[int], optional**
  : Ids of face zonelets created to fill the holes.

  **assigned_zone_name: str, optional**
  : Name assigned to zone created. Suffix is added to suggested name if the name not available.

  **created_zone_id: int, optional**
  : Id assigned to zone created.

<!-- !! processed by numpydoc !! -->
