# set_default

<a id="ansys.meshing.prime.QuadToSplineParams.set_default"></a>

#### *static* QuadToSplineParams.set_default(feature_capture_type=None, feature_angle=None, corner_angle=None, shell_thickness=None, solid_shell=None, separate_by_zone=None, zone_name_shell_thickness_pairs=None, project_on_geometry=None, use_projection_scope=None, projection_scope=None)

Set the default values of the `QuadToSplineParams` object.

* **Parameters:**

  **feature_capture_type: SplineFeatureCaptureType, optional**
  : Feature capture options.

  **feature_angle: float, optional**
  : Angle to capture the feature.

  **corner_angle: float, optional**
  : Corner angle of the feature.

  **shell_thickness: float, optional**
  : Thickness of shell.

  **solid_shell: bool, optional**
  : Solid shell option. Set true to generate solid shell spline, and set false to generate surface spline.

  **separate_by_zone: bool, optional**
  : Option to separate IGA shell regions by zone. If set to true, it creates LS-Dyna part per zone while exporting IGA .k file and if set to false, it creates a single LS-Dyna part per Prime part, irrespective of the zones.

  **zone_name_shell_thickness_pairs: Dict[str, Union[str, int, float, bool]], optional**
  : Zone name and thickness pair list. For example, {“Zone1Name”: Zone1Thickness, “Zone2Name”: Zone2Thickness, …}.

  **project_on_geometry: bool, optional**
  : Option to project on geometry.

  **use_projection_scope: bool, optional**
  : Option to use projection scope.

  **projection_scope: ScopeDefinition, optional**
  : Scope to evaluate entities for projection.

<!-- !! processed by numpydoc !! -->
