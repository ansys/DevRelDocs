# search_zonelets_by_self_intersections

<a id="ansys.meshing.prime.SurfaceSearch.search_zonelets_by_self_intersections"></a>

#### SurfaceSearch.search_zonelets_by_self_intersections(part_id, face_zonelets, register_id, params)

Search face zonelets to identify face elements intersecting with each other.

* **Parameters:**

  **part_id**
  : Id of part.

  **face_zonelets**
  : Ids of face zonelets.

  **register_id**
  : Id of register.

  **params**
  : Parameters used to identify face elements by self intersection.

* **Returns:**
  
  [`SearchByIntersectionResults`](ansys.meshing.prime.SearchByIntersectionResults.md#ansys.meshing.prime.SearchByIntersectionResults)
  : Returns the SearchByIntersectionResults.

* **Return type:**

  [`SearchByIntersectionResults`](ansys.meshing.prime.SearchByIntersectionResults.md#ansys.meshing.prime.SearchByIntersectionResults)

### Examples

```pycon
>>> surf_search = SurfaceSearch(model=model)
>>> results = surf_search.search_zonelets_by_self_intersections(part_id, face_zonelets, register_id, params)
```

<!-- !! processed by numpydoc !! -->
