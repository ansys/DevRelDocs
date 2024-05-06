# ansys.meshing.prime.FeatureExtraction.extract_features_on_face_zonelets

#### FeatureExtraction.extract_features_on_face_zonelets(part_id, face_zonelets, params)

Extract edges by angle and face zonelet boundary using the given extract feature parameters.

* **Parameters:**
  **part_id**
  : Id of input part.

  **face_zonelets**
  : Ids of input face zonelets.

  **params**
  : Parameters used to extract edges.
* **Returns:**
  [`ExtractFeatureResults`](ansys.meshing.prime.ExtractFeatureResults.md#ansys.meshing.prime.ExtractFeatureResults)
  : Returns the ExtractFeatureResults.
* **Return type:**
  [`ExtractFeatureResults`](ansys.meshing.prime.ExtractFeatureResults.md#ansys.meshing.prime.ExtractFeatureResults)

### Examples

```pycon
>>> results = feature_extraction.extract_features_on_face_zonelets(part_id, face_zonelets, params)
```

<!-- !! processed by numpydoc !! -->
