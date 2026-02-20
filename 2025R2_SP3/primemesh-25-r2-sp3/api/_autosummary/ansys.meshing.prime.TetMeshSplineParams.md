# TetMeshSplineParams

<a id="ansys.meshing.prime.TetMeshSplineParams"></a>

### *class* ansys.meshing.prime.TetMeshSplineParams(model=None, feature_angle=None, mode=None, decimation_factor=None, json_data=None, \*\*kwargs)

Parameters for meshing the solid spline.

* **Parameters:**

  **model: Model**
  : Model to create a `TetMeshSplineParams` object with default parameters.

  **feature_angle: float, optional**
  : Feature angle used in meshing of the solid spline.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **mode: TrimmedSolidSplineCutMode, optional**
  : Cut mode to specify rule for mesh cell selection in the volume mesh.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **decimation_factor: float, optional**
  : Decimation factor used in meshing of the solid spline.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `TetMeshSplineParams` object with provided parameters.

### Examples

```pycon
>>> tet_mesh_spline_params = prime.TetMeshSplineParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`TetMeshSplineParams.print_default`](ansys.meshing.prime.TetMeshSplineParams.print_default.md#ansys.meshing.prime.TetMeshSplineParams.print_default)()   | Print the default values of `TetMeshSplineParams` object.   |
| [`TetMeshSplineParams.set_default`](ansys.meshing.prime.TetMeshSplineParams.set_default.md#ansys.meshing.prime.TetMeshSplineParams.set_default)([...])    | Set the default values of the `TetMeshSplineParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| [`TetMeshSplineParams.decimation_factor`](ansys.meshing.prime.TetMeshSplineParams.decimation_factor.md#ansys.meshing.prime.TetMeshSplineParams.decimation_factor)   | Decimation factor used in meshing of the solid spline.               |
| [`TetMeshSplineParams.feature_angle`](ansys.meshing.prime.TetMeshSplineParams.feature_angle.md#ansys.meshing.prime.TetMeshSplineParams.feature_angle)               | Feature angle used in meshing of the solid spline.                   |
| [`TetMeshSplineParams.mode`](ansys.meshing.prime.TetMeshSplineParams.mode.md#ansys.meshing.prime.TetMeshSplineParams.mode)                                          | Cut mode to specify rule for mesh cell selection in the volume mesh. |
<!-- vale on -->