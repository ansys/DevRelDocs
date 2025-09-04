# search_zonelets_by_spikes

<a id="ansys.meshing.prime.SurfaceSearch.search_zonelets_by_spikes"></a>

#### SurfaceSearch.search_zonelets_by_spikes(part_id, face_zonelets, register_id, params)

Search face zonelets to identify spikes.

Search face zonelets to identify spikes with provided spike parameters

* **Parameters:**

  **part_id**
  : Id of part.

  **face_zonelets**
  : Ids of face zonelets.

  **register_id**
  : Id of register.

  **params**
  : Parameters used to identify spikes.

* **Returns:**
  
  [`SearchBySpikeResults`](ansys.meshing.prime.SearchBySpikeResults.md#ansys.meshing.prime.SearchBySpikeResults)
  : Returns the SearchBySpikeResults.

* **Return type:**

  [`SearchBySpikeResults`](ansys.meshing.prime.SearchBySpikeResults.md#ansys.meshing.prime.SearchBySpikeResults)

### Examples

```pycon
>>> surf_search = SurfaceSearch(model=model)
>>> results = surf_search.search_zonelets_by_spikes(part_id, face_zonelets, register_id, params)
```

<!-- !! processed by numpydoc !! -->
