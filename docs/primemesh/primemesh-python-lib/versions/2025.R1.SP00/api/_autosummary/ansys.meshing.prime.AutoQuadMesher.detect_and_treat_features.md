# detect_and_treat_features

<a id="ansys.meshing.prime.AutoQuadMesher.detect_and_treat_features"></a>

#### AutoQuadMesher.detect_and_treat_features(part_id, topo_face_ids, params)

Detect features in topology and treat them with given parameters.

* **Parameters:**

  **part_id**
  : Id of the Part.

  **topo_face_ids**
  : Ids of topofaces.

  **params**
  : Parameters of detect and treat features.

* **Returns:**
  
  [`AutoQuadMesherResults`](ansys.meshing.prime.AutoQuadMesherResults.md#ansys.meshing.prime.AutoQuadMesherResults)
  : Returns the AutoQuadMesherResults structure.
  
* **Return type:**

  [`AutoQuadMesherResults`](ansys.meshing.prime.AutoQuadMesherResults.md#ansys.meshing.prime.AutoQuadMesherResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> autoQuadMesher = AutoQuadMesher(model=model)
>>> results = autoQuadMesher.detect_and_treat_features(part_id, topo_face_ids, params);
```

<!-- !! processed by numpydoc !! -->
