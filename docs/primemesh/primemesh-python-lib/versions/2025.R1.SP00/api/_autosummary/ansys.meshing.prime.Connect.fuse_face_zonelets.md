# fuse_face_zonelets

<a id="ansys.meshing.prime.Connect.fuse_face_zonelets"></a>

#### Connect.fuse_face_zonelets(part_id, source_face_zonelet_ids, target_face_zonelet_ids, params)

Perform fuse between overlapping face zonelets within a single part. Surfaces that are fused can then be colocated, merged or removed as directed.

* **Parameters:**

  **part_id**
  : Id of the part.

  **source_face_zonelet_ids**
  : Ids of source face zonelets to be fused.

  **target_face_zonelet_ids**
  : Ids of target face zonelets to be fused.

  **params**
  : Parameters for fuse operation.
* **Returns:**
  :

  [`FuseResults`](ansys.meshing.prime.FuseResults.md#ansys.meshing.prime.FuseResults)
  : Returns the FuseResults.
* **Return type:**
  [`FuseResults`](ansys.meshing.prime.FuseResults.md#ansys.meshing.prime.FuseResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

connect = Connect(model = model)
connect.fuse_face_zonelets(part.id, source_face_zonelet_ids, target_face_zonelet_ids, fuse_params)

<!-- !! processed by numpydoc !! -->
