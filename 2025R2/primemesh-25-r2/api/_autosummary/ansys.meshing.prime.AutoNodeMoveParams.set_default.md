# set_default

<a id="ansys.meshing.prime.AutoNodeMoveParams.set_default"></a>

#### *static* AutoNodeMoveParams.set_default(quality_measure=None, target_quality=None, dihedral_angle=None, n_iterations_per_node=None, restrict_boundary_nodes_along_surface=None, n_attempts=None)

Set the default values of the `AutoNodeMoveParams` object.

* **Parameters:**

  **quality_measure: CellQualityMeasure, optional**
  : Specify cell quality measure to be used for volume mesh improvement. The default value for cell quality measure is skewness.

  **target_quality: float, optional**
  : Specify target quality used for the mesh improvement based on specified quality measure.

  **dihedral_angle: float, optional**
  : Dihedral angle used to mantain features of boundary face zonelets.

  **n_iterations_per_node: int, optional**
  : Number of iterations per node to be moved.

  **restrict_boundary_nodes_along_surface: bool, optional**
  : Option to restrict the movement of the boundary node to the plane containing the boundary faces sharing the boundary node.

  **n_attempts: int, optional**
  : Number of attempts to improve specified quality measure by node movement.

<!-- !! processed by numpydoc !! -->
