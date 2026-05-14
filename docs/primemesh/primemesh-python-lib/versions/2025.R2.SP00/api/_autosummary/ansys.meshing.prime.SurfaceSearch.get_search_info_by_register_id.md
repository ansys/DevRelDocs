# get_search_info_by_register_id

<a id="ansys.meshing.prime.SurfaceSearch.get_search_info_by_register_id"></a>

#### SurfaceSearch.get_search_info_by_register_id(face_zonelets, register_id, params)

Gets search information regarding registered face elements of provided zonelets using a register id.

* **Parameters:**

  **face_zonelets**
  : Ids of the face zonelets to search in.

  **register_id**
  : An integer register id.

  **params**
  : Parameters for retrieveing information on registered faces.

* **Returns:**

  [`SearchInfoByRegisterIdResults`](ansys.meshing.prime.SearchInfoByRegisterIdResults.md#ansys.meshing.prime.SearchInfoByRegisterIdResults)
  : Returns the SearchInfoByRegisterIdResults.

* **Return type:**

  [`SearchInfoByRegisterIdResults`](ansys.meshing.prime.SearchInfoByRegisterIdResults.md#ansys.meshing.prime.SearchInfoByRegisterIdResults)

### Examples

```pycon
>>> surf_search = SurfaceSearch(model=model)
>>> params = prime.SearchInfoByRegisterIdParams(model=model)
>>> results = surf_search.get_search_info_by_register_id(face_zonelets, register_id, params)
```

<!-- !! processed by numpydoc !! -->
