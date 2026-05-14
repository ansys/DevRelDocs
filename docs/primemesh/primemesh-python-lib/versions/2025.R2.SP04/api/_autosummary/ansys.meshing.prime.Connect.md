# Connect

<a id="ansys.meshing.prime.Connect"></a>

### *class* ansys.meshing.prime.Connect(model)

Connect face zonelets.

Perform surface connection using various connect algorithms on face zonelets.

* **Parameters:**

  **model**
  : Server model to create Connect object.

### Notes

Connect operations support only computational mesh, which is mesh with reasonable size changes and quality. Faceted geometry, which is STL-like mesh that can have extreme size changes and many sliver elements, not supported.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| [`Connect.fuse_face_zonelets`](ansys.meshing.prime.Connect.fuse_face_zonelets.md#ansys.meshing.prime.Connect.fuse_face_zonelets)(part_id, ...)                | Perform fuse between overlapping face zonelets within a single part.                                                            |
| [`Connect.intersect_face_zonelets`](ansys.meshing.prime.Connect.intersect_face_zonelets.md#ansys.meshing.prime.Connect.intersect_face_zonelets)(part_id, ...) | Perform intersection between specified face zonelets of the part with the given intersect parameters.                           |
| [`Connect.join_face_zonelets`](ansys.meshing.prime.Connect.join_face_zonelets.md#ansys.meshing.prime.Connect.join_face_zonelets)(part_id, ...)                | Joins a set of face zones with another set of face zones.                                                                       |
| [`Connect.merge_boundary_nodes`](ansys.meshing.prime.Connect.merge_boundary_nodes.md#ansys.meshing.prime.Connect.merge_boundary_nodes)(part_id, ...)          | Merges boundary nodes of source face zonelets with boundary nodes of target face zonelets according to the provided parameters. |
| [`Connect.stitch_face_zonelets`](ansys.meshing.prime.Connect.stitch_face_zonelets.md#ansys.meshing.prime.Connect.stitch_face_zonelets)(part_id, ...)          | Stitches a set of face zonelets with another set of face zonelets.                                                              |
| [`Connect.subtract_volumes`](ansys.meshing.prime.Connect.subtract_volumes.md#ansys.meshing.prime.Connect.subtract_volumes)(part_id, ...)                      | Subtract cutter volumes from target volumes.                                                                                    |
<!-- vale on -->