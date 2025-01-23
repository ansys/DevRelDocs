# QuadToSplineParams

<a id="ansys.meshing.prime.QuadToSplineParams"></a>

### *class* ansys.meshing.prime.QuadToSplineParams(model=None, feature_capture_type=None, feature_angle=None, corner_angle=None, shell_thickness=None, solid_shell=None, separate_by_zone=None, zone_name_shell_thickness_pairs=None, project_on_geometry=None, use_projection_scope=None, projection_scope=None, json_data=None, \*\*kwargs)

Parameters to control conversion of quadrilateral mesh to spline.

* **Parameters:**

  **model: Model**
  : Model to create a `QuadToSplineParams` object with default parameters.

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

  **shell_thickness: float, optional**
  : Thickness of shell.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **solid_shell: bool, optional**
  : Solid shell option. Set true to generate solid shell spline, and set false to generate surface spline.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **separate_by_zone: bool, optional**
  : Option to separate IGA shell regions by zone. If set to true, it creates LS-Dyna part per zone while exporting IGA .k file and if set to false, it creates a single LS-Dyna part per Prime part, irrespective of the zones.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **zone_name_shell_thickness_pairs: Dict[str, Union[str, int, float, bool]], optional**
  : Zone name and thickness pair list. For example, {“Zone1Name”: Zone1Thickness, “Zone2Name”: Zone2Thickness, …}.
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
  : JSON dictionary to create a `QuadToSplineParams` object with provided parameters.

### Examples

```pycon
>>> quad_to_spline_params = prime.QuadToSplineParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`QuadToSplineParams.print_default`](ansys.meshing.prime.QuadToSplineParams.print_default.md#ansys.meshing.prime.QuadToSplineParams.print_default)()   | Print the default values of `QuadToSplineParams` object.   |
| [`QuadToSplineParams.set_default`](ansys.meshing.prime.QuadToSplineParams.set_default.md#ansys.meshing.prime.QuadToSplineParams.set_default)([...])    | Set the default values of the `QuadToSplineParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| [`QuadToSplineParams.corner_angle`](ansys.meshing.prime.QuadToSplineParams.corner_angle.md#ansys.meshing.prime.QuadToSplineParams.corner_angle)                                                          | Corner angle of the feature.                  |
| [`QuadToSplineParams.feature_angle`](ansys.meshing.prime.QuadToSplineParams.feature_angle.md#ansys.meshing.prime.QuadToSplineParams.feature_angle)                                                       | Angle to capture the feature.                 |
| [`QuadToSplineParams.feature_capture_type`](ansys.meshing.prime.QuadToSplineParams.feature_capture_type.md#ansys.meshing.prime.QuadToSplineParams.feature_capture_type)                                  | Feature capture options.                      |
| [`QuadToSplineParams.project_on_geometry`](ansys.meshing.prime.QuadToSplineParams.project_on_geometry.md#ansys.meshing.prime.QuadToSplineParams.project_on_geometry)                                     | Option to project on geometry.                |
| [`QuadToSplineParams.projection_scope`](ansys.meshing.prime.QuadToSplineParams.projection_scope.md#ansys.meshing.prime.QuadToSplineParams.projection_scope)                                              | Scope to evaluate entities for projection.    |
| [`QuadToSplineParams.separate_by_zone`](ansys.meshing.prime.QuadToSplineParams.separate_by_zone.md#ansys.meshing.prime.QuadToSplineParams.separate_by_zone)                                              | Option to separate IGA shell regions by zone. |
| [`QuadToSplineParams.shell_thickness`](ansys.meshing.prime.QuadToSplineParams.shell_thickness.md#ansys.meshing.prime.QuadToSplineParams.shell_thickness)                                                 | Thickness of shell.                           |
| [`QuadToSplineParams.solid_shell`](ansys.meshing.prime.QuadToSplineParams.solid_shell.md#ansys.meshing.prime.QuadToSplineParams.solid_shell)                                                             | Solid shell option.                           |
| [`QuadToSplineParams.use_projection_scope`](ansys.meshing.prime.QuadToSplineParams.use_projection_scope.md#ansys.meshing.prime.QuadToSplineParams.use_projection_scope)                                  | Option to use projection scope.               |
| [`QuadToSplineParams.zone_name_shell_thickness_pairs`](ansys.meshing.prime.QuadToSplineParams.zone_name_shell_thickness_pairs.md#ansys.meshing.prime.QuadToSplineParams.zone_name_shell_thickness_pairs) | Zone2Thickness, ...}.                         |
<!-- vale on -->