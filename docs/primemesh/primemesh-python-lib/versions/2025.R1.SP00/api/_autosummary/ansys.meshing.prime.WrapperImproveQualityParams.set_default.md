# set_default

<a id="ansys.meshing.prime.WrapperImproveQualityParams.set_default"></a>

#### *static* WrapperImproveQualityParams.set_default(target_skewness=None, island_count=None, island_tol=None, overlap_count=None, overlap_tol=None, resolve_spikes=None, resolve_intersections=None, inflate_dihedral_face_nodes=None, resolve_invalid_node_normals=None, aggressively=None, sharp_angle=None, geom_zonelets=None, number_of_threads=None)

Set the default values of the `WrapperImproveQualityParams` object.

* **Parameters:**

  **target_skewness: float, optional**
  : Target skewness.

  **island_count: int, optional**
  : Face count of smallest island.

  **island_tol: float, optional**
  : Relative face count of smallest island.

  **overlap_count: int, optional**
  : Face count of non-manifold overlap.

  **overlap_tol: float, optional**
  : Relative face count of non-manifold overlap.

  **resolve_spikes: bool, optional**
  : Control to perform removing spikes or not.

  **resolve_intersections: bool, optional**
  : Control to resolve face intersections or not.

  **inflate_dihedral_face_nodes: bool, optional**
  : Control to resolve face dihedral angle by inflating opposite nodes or not.

  **resolve_invalid_node_normals: bool, optional**
  : Control to resolve invalid node normals by inflating opposite nodes or not.

  **aggressively: bool, optional**
  : Control to improve surfaces aggressively or not.

  **sharp_angle: float, optional**
  : Maximum off feature sharp node angle.

  **geom_zonelets: Iterable[int], optional**
  : Associated underlying geometry zonelet ids.

  **number_of_threads: int, optional**
  : Number of threads for multithreading.

<!-- !! processed by numpydoc !! -->
