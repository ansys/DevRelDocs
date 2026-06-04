# set_default

<a id="ansys.meshing.prime.PartialDefeatureParams.set_default"></a>

#### *static* PartialDefeatureParams.set_default(edge_sharp_corner_angle=None, merge_face_normals_angle=None, merge_edge_allow_self_close=None)

Set the default values of the `PartialDefeatureParams` object.

* **Parameters:**

  **edge_sharp_corner_angle: float, optional**
  : Merge edges when the angle between the edges are below the provided value.

  **merge_face_normals_angle: float, optional**
  : Merge faces when the normal angle between the faces is below the provided value.

  **merge_edge_allow_self_close: bool, optional**
  : Option for merging self-closing edge loops.

<!-- !! processed by numpydoc !! -->
