# search_zonelets_by_folds

<a id="ansys.meshing.prime.SurfaceSearch.search_zonelets_by_folds"></a>

#### SurfaceSearch.search_zonelets_by_folds(part_id, face_zonelets, register_id, params)

Search face zonelets to identify folds.

Search face zonelets to identify folds with provided folds parameters.

* **Parameters:**

  **part_id**
  : Id of part.

  **face_zonelets**
  : Ids of face zonelets.

  **register_id**
  : Id of register.

  **params**
  : Parameters used to identify folds.

* **Returns:**

  [`SearchByFoldsResults`](ansys.meshing.prime.SearchByFoldsResults.md#ansys.meshing.prime.SearchByFoldsResults)
  : Returns the SearchByFoldsResults.

* **Return type:**

  [`SearchByFoldsResults`](ansys.meshing.prime.SearchByFoldsResults.md#ansys.meshing.prime.SearchByFoldsResults)

### Examples

```pycon
>>> surf_search = SurfaceSearch(model=model)
>>> results = surf_search.search_zonelets_by_folds(part_id, face_zonelets, register_id, params)
```

<!-- !! processed by numpydoc !! -->
