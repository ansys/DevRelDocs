# search_zonelets_by_invalid_normals

<a id="ansys.meshing.prime.SurfaceSearch.search_zonelets_by_invalid_normals"></a>

#### SurfaceSearch.search_zonelets_by_invalid_normals(part_id, face_zonelets, register_id)

Search face zonelets to identify faces with invalid normals.

Search face zonelets to identify faces with invalid normals.

* **Parameters:**

  **part_id**
  : Id of part.

  **face_zonelets**
  : Ids of face zonelets.

  **register_id**
  : Id of register.

* **Returns:**

  [`SearchByInvalidNormalsResults`](ansys.meshing.prime.SearchByInvalidNormalsResults.md#ansys.meshing.prime.SearchByInvalidNormalsResults)
  : Returns the SearchByInvalidNormalsResults.

* **Return type:**

  [`SearchByInvalidNormalsResults`](ansys.meshing.prime.SearchByInvalidNormalsResults.md#ansys.meshing.prime.SearchByInvalidNormalsResults)

### Examples

```pycon
>>> surf_search = SurfaceSearch(model=model)
>>> results = surf_search.search_zonelets_by_invalid_normals(part_id, face_zonelets, register_id)
```

<!-- !! processed by numpydoc !! -->
