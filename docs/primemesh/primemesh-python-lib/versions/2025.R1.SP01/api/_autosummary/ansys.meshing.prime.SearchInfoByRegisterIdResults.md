# SearchInfoByRegisterIdResults

<a id="ansys.meshing.prime.SearchInfoByRegisterIdResults"></a>

### *class* ansys.meshing.prime.SearchInfoByRegisterIdResults(model=None, error_code=None, n_found=None, locations_found=None, face_zonelets_found=None, json_data=None, \*\*kwargs)

Result structure containing information on registered face elements.

* **Parameters:**

  **model: Model**
  : Model to create a `SearchInfoByRegisterIdResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the retreiving information based on register id.

  **n_found: int, optional**
  : Number of registered face elements.

  **locations_found: Iterable[float], optional**
  : Locations of each cluster of registered face elements.

  **face_zonelets_found: Iterable[int], optional**
  : Ids of the face zonelets containing atleast one registered face element.

  **json_data: dict, optional**
  : JSON dictionary to create a `SearchInfoByRegisterIdResults` object with provided parameters.

### Examples

```pycon
>>> search_info_by_register_id_results = prime.SearchInfoByRegisterIdResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`SearchInfoByRegisterIdResults.print_default`](ansys.meshing.prime.SearchInfoByRegisterIdResults.print_default.md#ansys.meshing.prime.SearchInfoByRegisterIdResults.print_default)()   | Print the default values of `SearchInfoByRegisterIdResults` object.   |
| [`SearchInfoByRegisterIdResults.set_default`](ansys.meshing.prime.SearchInfoByRegisterIdResults.set_default.md#ansys.meshing.prime.SearchInfoByRegisterIdResults.set_default)([...])    | Set the default values of the `SearchInfoByRegisterIdResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`SearchInfoByRegisterIdResults.error_code`](ansys.meshing.prime.SearchInfoByRegisterIdResults.error_code.md#ansys.meshing.prime.SearchInfoByRegisterIdResults.error_code)                            | Error code associated with the retreiving information based on register id.   |
| [`SearchInfoByRegisterIdResults.face_zonelets_found`](ansys.meshing.prime.SearchInfoByRegisterIdResults.face_zonelets_found.md#ansys.meshing.prime.SearchInfoByRegisterIdResults.face_zonelets_found) | Ids of the face zonelets containing atleast one registered face element.      |
| [`SearchInfoByRegisterIdResults.locations_found`](ansys.meshing.prime.SearchInfoByRegisterIdResults.locations_found.md#ansys.meshing.prime.SearchInfoByRegisterIdResults.locations_found)             | Locations of each cluster of registered face elements.                        |
| [`SearchInfoByRegisterIdResults.n_found`](ansys.meshing.prime.SearchInfoByRegisterIdResults.n_found.md#ansys.meshing.prime.SearchInfoByRegisterIdResults.n_found)                                     | Number of registered face elements.                                           |
<!-- vale on -->