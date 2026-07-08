<!-- vale off -->

# AutoNodeMoveParams

### *class* ansys.meshing.prime.AutoNodeMoveParams(model=None, quality_measure=None, target_quality=None, dihedral_angle=None, n_iterations_per_node=None, restrict_boundary_nodes_along_surface=None, n_attempts=None, json_data=None, \*\*kwargs)

Parameters used to improve volume mesh by auto node move.

<!-- !! processed by numpydoc !! -->

### Methods

| [`AutoNodeMoveParams.print_default`](ansys.meshing.prime.AutoNodeMoveParams.print_default.md#ansys.meshing.prime.AutoNodeMoveParams.print_default)()   | Print the default values of AutoNodeMoveParams.   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`AutoNodeMoveParams.set_default`](ansys.meshing.prime.AutoNodeMoveParams.set_default.md#ansys.meshing.prime.AutoNodeMoveParams.set_default)([...])    | Set the default values of AutoNodeMoveParams.     |

### Attributes

| [`AutoNodeMoveParams.dihedral_angle`](ansys.meshing.prime.AutoNodeMoveParams.dihedral_angle.md#ansys.meshing.prime.AutoNodeMoveParams.dihedral_angle)                                                                      | Dihedral angle used to mantain features of boundary face zonelets.                                                         |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| [`AutoNodeMoveParams.n_attempts`](ansys.meshing.prime.AutoNodeMoveParams.n_attempts.md#ansys.meshing.prime.AutoNodeMoveParams.n_attempts)                                                                                  | Number of attempts to improve specified quality measure by node movement.                                                  |
| [`AutoNodeMoveParams.n_iterations_per_node`](ansys.meshing.prime.AutoNodeMoveParams.n_iterations_per_node.md#ansys.meshing.prime.AutoNodeMoveParams.n_iterations_per_node)                                                 | Number of iterations per node to be moved.                                                                                 |
| [`AutoNodeMoveParams.quality_measure`](ansys.meshing.prime.AutoNodeMoveParams.quality_measure.md#ansys.meshing.prime.AutoNodeMoveParams.quality_measure)                                                                   | Specify cell quality measure to be used for volume mesh improvement.                                                       |
| [`AutoNodeMoveParams.restrict_boundary_nodes_along_surface`](ansys.meshing.prime.AutoNodeMoveParams.restrict_boundary_nodes_along_surface.md#ansys.meshing.prime.AutoNodeMoveParams.restrict_boundary_nodes_along_surface) | Option to restrict the movement of the boundary node to the plane containing the boundary faces sharing the boundary node. |
| [`AutoNodeMoveParams.target_quality`](ansys.meshing.prime.AutoNodeMoveParams.target_quality.md#ansys.meshing.prime.AutoNodeMoveParams.target_quality)                                                                      | Specify target quality used for the mesh improvement based on specified quality measure.                                   |
<!-- vale on -->
