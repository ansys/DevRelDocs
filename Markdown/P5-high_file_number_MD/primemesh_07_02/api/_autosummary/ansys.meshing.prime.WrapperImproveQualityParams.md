<!-- vale off -->

# WrapperImproveQualityParams

### *class* ansys.meshing.prime.WrapperImproveQualityParams(model=None, target_skewness=None, island_count=None, island_tol=None, overlap_count=None, overlap_tol=None, resolve_spikes=None, resolve_intersections=None, inflate_dihedral_face_nodes=None, resolve_invalid_node_normals=None, aggressively=None, sharp_angle=None, geom_zonelets=None, number_of_threads=None, json_data=None, \*\*kwargs)

WrapperImproveQualityParams defines parameters to improve wrapper part.

<!-- !! processed by numpydoc !! -->

### Methods

| [`WrapperImproveQualityParams.print_default`](ansys.meshing.prime.WrapperImproveQualityParams.print_default.md#ansys.meshing.prime.WrapperImproveQualityParams.print_default)()   | Print the default values of WrapperImproveQualityParams.   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`WrapperImproveQualityParams.set_default`](ansys.meshing.prime.WrapperImproveQualityParams.set_default.md#ansys.meshing.prime.WrapperImproveQualityParams.set_default)([...])    | Set the default values of WrapperImproveQualityParams.     |

### Attributes

| [`WrapperImproveQualityParams.aggressively`](ansys.meshing.prime.WrapperImproveQualityParams.aggressively.md#ansys.meshing.prime.WrapperImproveQualityParams.aggressively)                                                 | Control to improve surfaces aggressively or not.                            |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| [`WrapperImproveQualityParams.geom_zonelets`](ansys.meshing.prime.WrapperImproveQualityParams.geom_zonelets.md#ansys.meshing.prime.WrapperImproveQualityParams.geom_zonelets)                                              | Associated underlying geometry zonelet ids.                                 |
| [`WrapperImproveQualityParams.inflate_dihedral_face_nodes`](ansys.meshing.prime.WrapperImproveQualityParams.inflate_dihedral_face_nodes.md#ansys.meshing.prime.WrapperImproveQualityParams.inflate_dihedral_face_nodes)    | Control to resolve face dihedral angle by inflating opposite nodes or not.  |
| [`WrapperImproveQualityParams.island_count`](ansys.meshing.prime.WrapperImproveQualityParams.island_count.md#ansys.meshing.prime.WrapperImproveQualityParams.island_count)                                                 | Face count of smallest island.                                              |
| [`WrapperImproveQualityParams.island_tol`](ansys.meshing.prime.WrapperImproveQualityParams.island_tol.md#ansys.meshing.prime.WrapperImproveQualityParams.island_tol)                                                       | Relative face count of smallest island.                                     |
| [`WrapperImproveQualityParams.number_of_threads`](ansys.meshing.prime.WrapperImproveQualityParams.number_of_threads.md#ansys.meshing.prime.WrapperImproveQualityParams.number_of_threads)                                  | Number of threads for multithreading.                                       |
| [`WrapperImproveQualityParams.overlap_count`](ansys.meshing.prime.WrapperImproveQualityParams.overlap_count.md#ansys.meshing.prime.WrapperImproveQualityParams.overlap_count)                                              | Face count of non-manifold overlap.                                         |
| [`WrapperImproveQualityParams.overlap_tol`](ansys.meshing.prime.WrapperImproveQualityParams.overlap_tol.md#ansys.meshing.prime.WrapperImproveQualityParams.overlap_tol)                                                    | Relative face count of non-manifold overlap.                                |
| [`WrapperImproveQualityParams.resolve_intersections`](ansys.meshing.prime.WrapperImproveQualityParams.resolve_intersections.md#ansys.meshing.prime.WrapperImproveQualityParams.resolve_intersections)                      | Control to resolve face intersections or not.                               |
| [`WrapperImproveQualityParams.resolve_invalid_node_normals`](ansys.meshing.prime.WrapperImproveQualityParams.resolve_invalid_node_normals.md#ansys.meshing.prime.WrapperImproveQualityParams.resolve_invalid_node_normals) | Control to resolve invalid node normals by inflating opposite nodes or not. |
| [`WrapperImproveQualityParams.resolve_spikes`](ansys.meshing.prime.WrapperImproveQualityParams.resolve_spikes.md#ansys.meshing.prime.WrapperImproveQualityParams.resolve_spikes)                                           | Control to perform removing spikes or not.                                  |
| [`WrapperImproveQualityParams.sharp_angle`](ansys.meshing.prime.WrapperImproveQualityParams.sharp_angle.md#ansys.meshing.prime.WrapperImproveQualityParams.sharp_angle)                                                    | Maximum off feature sharp node angle.                                       |
| [`WrapperImproveQualityParams.target_skewness`](ansys.meshing.prime.WrapperImproveQualityParams.target_skewness.md#ansys.meshing.prime.WrapperImproveQualityParams.target_skewness)                                        | Target skewness.                                                            |
<!-- vale on -->
