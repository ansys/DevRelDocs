# set_default

<a id="ansys.meshing.prime.SearchInfoByRegisterIdResults.set_default"></a>

#### *static* SearchInfoByRegisterIdResults.set_default(error_code=None, n_found=None, locations_found=None, face_zonelets_found=None)

Set the default values of the `SearchInfoByRegisterIdResults` object.

* **Parameters:**

  **error_code: ErrorCode, optional**
  : Error code associated with the retreiving information based on register id.

  **n_found: int, optional**
  : Number of registered face elements.

  **locations_found: Iterable[float], optional**
  : Locations of each cluster of registered face elements.

  **face_zonelets_found: Iterable[int], optional**
  : Ids of the face zonelets containing atleast one registered face element.

<!-- !! processed by numpydoc !! -->
