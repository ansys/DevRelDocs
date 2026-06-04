# AutoNodeMoveParams

<a id="ansys.meshing.prime.AutoNodeMoveParams"></a>

### *class* ansys.meshing.prime.AutoNodeMoveParams(model=None, quality_measure=None, target_quality=None, dihedral_angle=None, n_iterations_per_node=None, restrict_boundary_nodes_along_surface=None, n_attempts=None, json_data=None, \*\*kwargs)

Parameters used to improve volume mesh by auto node move.

* **Parameters:**

  **model: Model**
  : Model to create a `AutoNodeMoveParams` object with default parameters.

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

  **json_data: dict, optional**
  : JSON dictionary to create a `AutoNodeMoveParams` object with provided parameters.

### Examples

```pycon
>>> auto_node_move_params = prime.AutoNodeMoveParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`AutoNodeMoveParams.print_default`](ansys.meshing.prime.AutoNodeMoveParams.print_default.md#ansys.meshing.prime.AutoNodeMoveParams.print_default)()   | Print the default values of `AutoNodeMoveParams` object.   |
| [`AutoNodeMoveParams.set_default`](ansys.meshing.prime.AutoNodeMoveParams.set_default.md#ansys.meshing.prime.AutoNodeMoveParams.set_default)([...])    | Set the default values of the `AutoNodeMoveParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| [`AutoNodeMoveParams.dihedral_angle`](ansys.meshing.prime.AutoNodeMoveParams.dihedral_angle.md#ansys.meshing.prime.AutoNodeMoveParams.dihedral_angle)                                                                      | Dihedral angle used to mantain features of boundary face zonelets.                                                         |
| [`AutoNodeMoveParams.n_attempts`](ansys.meshing.prime.AutoNodeMoveParams.n_attempts.md#ansys.meshing.prime.AutoNodeMoveParams.n_attempts)                                                                                  | Number of attempts to improve specified quality measure by node movement.                                                  |
| [`AutoNodeMoveParams.n_iterations_per_node`](ansys.meshing.prime.AutoNodeMoveParams.n_iterations_per_node.md#ansys.meshing.prime.AutoNodeMoveParams.n_iterations_per_node)                                                 | Number of iterations per node to be moved.                                                                                 |
| [`AutoNodeMoveParams.quality_measure`](ansys.meshing.prime.AutoNodeMoveParams.quality_measure.md#ansys.meshing.prime.AutoNodeMoveParams.quality_measure)                                                                   | Specify cell quality measure to be used for volume mesh improvement.                                                       |
| [`AutoNodeMoveParams.restrict_boundary_nodes_along_surface`](ansys.meshing.prime.AutoNodeMoveParams.restrict_boundary_nodes_along_surface.md#ansys.meshing.prime.AutoNodeMoveParams.restrict_boundary_nodes_along_surface) | Option to restrict the movement of the boundary node to the plane containing the boundary faces sharing the boundary node. |
| [`AutoNodeMoveParams.target_quality`](ansys.meshing.prime.AutoNodeMoveParams.target_quality.md#ansys.meshing.prime.AutoNodeMoveParams.target_quality)                                                                      | Specify target quality used for the mesh improvement based on specified quality measure.                                   |

<!-- vale on -->
