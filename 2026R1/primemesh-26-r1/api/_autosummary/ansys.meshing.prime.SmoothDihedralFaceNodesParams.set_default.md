# set_default

<a id="ansys.meshing.prime.SmoothDihedralFaceNodesParams.set_default"></a>

#### *static* SmoothDihedralFaceNodesParams.set_default(min_dihedral_angle=None, tolerance=None, type=None)

Set the default values of the `SmoothDihedralFaceNodesParams` object.

* **Parameters:**

  **min_dihedral_angle: float, optional**
  : Minimum angle to be used to identify dihedral faces.

  **tolerance: float, optional**
  : Tolerance relative to local mesh size to control smooth movement of nodes.

  **type: SmoothType, optional**
  : Option to inflate neighbor nodes of dihedral face edges or smooth dihedral face edge nodes to improve dihedral angle.

<!-- !! processed by numpydoc !! -->
