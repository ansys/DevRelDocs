# extract_volumes

<a id="ansys.meshing.prime.Part.extract_volumes"></a>

#### Part.extract_volumes(face_zonelets, params)

Extract volumes connected to given face zonelets.

* **Parameters:**

  **face_zonelets**
  : Ids of face zonelets connected to volumes.

  **params**
  : Parameters to compute volumes.

* **Returns:**

  [`ExtractVolumesResults`](ansys.meshing.prime.ExtractVolumesResults.md#ansys.meshing.prime.ExtractVolumesResults)
  : Return the ExtractVolumesResults.

* **Return type:**

  [`ExtractVolumesResults`](ansys.meshing.prime.ExtractVolumesResults.md#ansys.meshing.prime.ExtractVolumesResults)

### Examples

```pycon
>>> results = part.extract_volumes(face_zonelets, params)
```

<!-- !! processed by numpydoc !! -->
