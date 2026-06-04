# fix_invalid_normal_nodes_of_face_zonelets

<a id="ansys.meshing.prime.SurfaceUtilities.fix_invalid_normal_nodes_of_face_zonelets"></a>

#### SurfaceUtilities.fix_invalid_normal_nodes_of_face_zonelets(part_id, face_zonelets, params)

Create nuggets to fix invalid normal at nodes of the given face zonelets.

* **Parameters:**

  **part_id**
  : Part id of the given face zonelets. Nuggets created are associated to the given part.

  **face_zonelets**
  : Ids of face zonelets used to find invalid normal nodes.

  **params**
  : Parameters to find invalid normal nodes and fix them.

* **Returns:**

  [`FixInvalidNormalNodeResults`](ansys.meshing.prime.FixInvalidNormalNodeResults.md#ansys.meshing.prime.FixInvalidNormalNodeResults)
  : Returns the FixInvalidNormalNodeResults.

* **Return type:**

  [`FixInvalidNormalNodeResults`](ansys.meshing.prime.FixInvalidNormalNodeResults.md#ansys.meshing.prime.FixInvalidNormalNodeResults)

### Examples

```pycon
>>> params = prime.FixInvalidNormalNodeParams(model = model)
>>> results = surface_utils.fix_invalid_normal_nodes_of_face_zonelets(part_id, face_zonelets, params)
```

<!-- !! processed by numpydoc !! -->
