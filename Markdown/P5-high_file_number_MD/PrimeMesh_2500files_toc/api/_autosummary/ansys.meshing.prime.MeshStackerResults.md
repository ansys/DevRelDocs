<!-- vale off -->

# MeshStackerResults

### *class* ansys.meshing.prime.MeshStackerResults(model=None, error_code=None, error_codes_per_topo_volume=None, non_stackable_faces=None, non_stackable_edges=None, small_features=None, base_face_ids=None, size_control_ids=None, json_data=None, \*\*kwargs)

Results associated with the mesh stacker operations.

<!-- !! processed by numpydoc !! -->

### Methods

| [`MeshStackerResults.print_default`](ansys.meshing.prime.MeshStackerResults.print_default.md#ansys.meshing.prime.MeshStackerResults.print_default)()            | Print the default values of MeshStackerResults.   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`MeshStackerResults.set_default`](ansys.meshing.prime.MeshStackerResults.set_default.md#ansys.meshing.prime.MeshStackerResults.set_default)([error_code, ...]) | Set the default values of MeshStackerResults.     |

### Attributes

| [`MeshStackerResults.base_face_ids`](ansys.meshing.prime.MeshStackerResults.base_face_ids.md#ansys.meshing.prime.MeshStackerResults.base_face_ids)                                           | List of base face ids after base creation.                         |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`MeshStackerResults.error_code`](ansys.meshing.prime.MeshStackerResults.error_code.md#ansys.meshing.prime.MeshStackerResults.error_code)                                                    | Error code associated with the operation.                          |
| [`MeshStackerResults.error_codes_per_topo_volume`](ansys.meshing.prime.MeshStackerResults.error_codes_per_topo_volume.md#ansys.meshing.prime.MeshStackerResults.error_codes_per_topo_volume) | Error codes associated with the topovolume-by-topovolume stacking. |
| [`MeshStackerResults.non_stackable_edges`](ansys.meshing.prime.MeshStackerResults.non_stackable_edges.md#ansys.meshing.prime.MeshStackerResults.non_stackable_edges)                         | List of non-stackable edges.                                       |
| [`MeshStackerResults.non_stackable_faces`](ansys.meshing.prime.MeshStackerResults.non_stackable_faces.md#ansys.meshing.prime.MeshStackerResults.non_stackable_faces)                         | List of non-stackable faces.                                       |
| [`MeshStackerResults.size_control_ids`](ansys.meshing.prime.MeshStackerResults.size_control_ids.md#ansys.meshing.prime.MeshStackerResults.size_control_ids)                                  | List of ids of newly created size controls.                        |
| [`MeshStackerResults.small_features`](ansys.meshing.prime.MeshStackerResults.small_features.md#ansys.meshing.prime.MeshStackerResults.small_features)                                        | List of features edges smaller than input tolerance.               |
<!-- vale on -->
