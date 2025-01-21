# search_zonelets_by_quality

<a id="ansys.meshing.prime.SurfaceSearch.search_zonelets_by_quality"></a>

#### SurfaceSearch.search_zonelets_by_quality(part_id, face_zonelets, register_id, params)

Search face zonelets with the provided quality parameters and applies register id on face elements found.

* **Parameters:**

  **part_id**
  : Id of the part.

  **face_zonelets**
  : Ids of the face zonelets whose element search is performed.

  **register_id**
  : Id used to register face elements found by the search.

  **params**
  : Quality parameters used to search face elements.

* **Returns:**

  [`SearchByQualityResults`](ansys.meshing.prime.SearchByQualityResults.md#ansys.meshing.prime.SearchByQualityResults)
  : Returns the SearchByQualityResults.

* **Return type:**

  [`SearchByQualityResults`](ansys.meshing.prime.SearchByQualityResults.md#ansys.meshing.prime.SearchByQualityResults)

### Examples

```pycon
>>> surf_search = prime.SurfaceSearch(model=model)
>>> results = surf_search.search_zonelets_by_quality(part_id, face_zonelets, register_id, prime.SearchByQualityParams(model=model))
```

<!-- !! processed by numpydoc !! -->
