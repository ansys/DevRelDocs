# search_zonelets_by_thin_strips

<a id="ansys.meshing.prime.SurfaceSearch.search_zonelets_by_thin_strips"></a>

#### SurfaceSearch.search_zonelets_by_thin_strips(part_id, face_zonelets, register_id, params)

Search face zonelets to identify face element of thin strips(single layer of triangles between features).

* **Parameters:**

  **part_id**
  : Id of part.

  **face_zonelets**
  : Ids of face zonelets.

  **register_id**
  : Id of register.

  **params**
  : Parameters used to identify face elements of thin strips.

* **Returns:**
  
  [`SearchByThinStripResults`](ansys.meshing.prime.SearchByThinStripResults.md#ansys.meshing.prime.SearchByThinStripResults)
  : Returns the SearchByThinStripResults.

* **Return type:**

  [`SearchByThinStripResults`](ansys.meshing.prime.SearchByThinStripResults.md#ansys.meshing.prime.SearchByThinStripResults)

### Examples

```pycon
>>> surf_search = SurfaceSearch(model=model)
>>> results = surf_search.search_zonelets_by_thin_strips(part_id, face_zonelets, register_id, params)
```

<!-- !! processed by numpydoc !! -->
