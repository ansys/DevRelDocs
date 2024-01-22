<!-- vale off -->

# Connect

### *class* ansys.meshing.prime.Connect(model)

Connect face zonelets.

Perform surface connection using various connect algorithms on face zonelets.

### Notes

Connect operations like Join, Stitch and Intersect supports only computational mesh
(mesh with reasonable size). Faceted mesh is not supported.

<!-- !! processed by numpydoc !! -->

### Methods

| [`Connect.intersect_face_zonelets`](ansys.meshing.prime.Connect.intersect_face_zonelets.md#ansys.meshing.prime.Connect.intersect_face_zonelets)(part_id, ...)   | Perform intersection between specified face zonelets of the part with the given intersect parameters.   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Connect.join_face_zonelets`](ansys.meshing.prime.Connect.join_face_zonelets.md#ansys.meshing.prime.Connect.join_face_zonelets)(part_id, ...)                  | Joins a set of face zones with another set of face zones.                                               |
| [`Connect.stitch_face_zonelets`](ansys.meshing.prime.Connect.stitch_face_zonelets.md#ansys.meshing.prime.Connect.stitch_face_zonelets)(part_id, ...)            | Stitches a set of face zonelets with another set of face zones.                                         |
| [`Connect.subtract_volumes`](ansys.meshing.prime.Connect.subtract_volumes.md#ansys.meshing.prime.Connect.subtract_volumes)(part_id, ...)                        | Subtract cutter volumes from target volumes.                                                            |
<!-- vale on -->
