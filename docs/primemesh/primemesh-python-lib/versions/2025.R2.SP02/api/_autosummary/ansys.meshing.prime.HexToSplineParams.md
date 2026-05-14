# HexToSplineParams

<a id="ansys.meshing.prime.HexToSplineParams"></a>

### *class* ansys.meshing.prime.HexToSplineParams(model=None, feature_capture_type=None, feature_angle=None, corner_angle=None, continuity=None, project_on_geometry=None, use_projection_scope=None, projection_scope=None, json_data=None, \*\*kwargs)

Parameters to control conversion of hex mesh to spline.

* **Parameters:**

  **model: Model**
  : Model to create a `HexToSplineParams` object with default parameters.

  **feature_capture_type: SplineFeatureCaptureType, optional**
  : Feature capture options.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **feature_angle: float, optional**
  : Angle to capture the feature.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **corner_angle: float, optional**
  : Corner angle of the feature.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **continuity: SplineContinuityType, optional**
  : Spline Continuity options.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **project_on_geometry: bool, optional**
  : Option to project on geometry.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **use_projection_scope: bool, optional**
  : Option to use projection scope.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **projection_scope: ScopeDefinition, optional**
  : Scope to evaluate entities for projection.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `HexToSplineParams` object with provided parameters.

### Examples

```pycon
>>> hex_to_spline_params = prime.HexToSplineParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`HexToSplineParams.print_default`](ansys.meshing.prime.HexToSplineParams.print_default.md#ansys.meshing.prime.HexToSplineParams.print_default)()   | Print the default values of `HexToSplineParams` object.   |
| [`HexToSplineParams.set_default`](ansys.meshing.prime.HexToSplineParams.set_default.md#ansys.meshing.prime.HexToSplineParams.set_default)([...])    | Set the default values of the `HexToSplineParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| [`HexToSplineParams.continuity`](ansys.meshing.prime.HexToSplineParams.continuity.md#ansys.meshing.prime.HexToSplineParams.continuity)                               | Spline Continuity options.                 |
| [`HexToSplineParams.corner_angle`](ansys.meshing.prime.HexToSplineParams.corner_angle.md#ansys.meshing.prime.HexToSplineParams.corner_angle)                         | Corner angle of the feature.               |
| [`HexToSplineParams.feature_angle`](ansys.meshing.prime.HexToSplineParams.feature_angle.md#ansys.meshing.prime.HexToSplineParams.feature_angle)                      | Angle to capture the feature.              |
| [`HexToSplineParams.feature_capture_type`](ansys.meshing.prime.HexToSplineParams.feature_capture_type.md#ansys.meshing.prime.HexToSplineParams.feature_capture_type) | Feature capture options.                   |
| [`HexToSplineParams.project_on_geometry`](ansys.meshing.prime.HexToSplineParams.project_on_geometry.md#ansys.meshing.prime.HexToSplineParams.project_on_geometry)    | Option to project on geometry.             |
| [`HexToSplineParams.projection_scope`](ansys.meshing.prime.HexToSplineParams.projection_scope.md#ansys.meshing.prime.HexToSplineParams.projection_scope)             | Scope to evaluate entities for projection. |
| [`HexToSplineParams.use_projection_scope`](ansys.meshing.prime.HexToSplineParams.use_projection_scope.md#ansys.meshing.prime.HexToSplineParams.use_projection_scope) | Option to use projection scope.            |
<!-- vale on -->