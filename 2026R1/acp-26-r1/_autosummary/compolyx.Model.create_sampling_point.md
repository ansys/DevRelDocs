# create_sampling_point

<a id="compolyx.Model.create_sampling_point"></a>

#### Model.create_sampling_point(name, id=None, point=(0.0, 0.0, 0.0), direction=(0.0, 0.0, 0.0), locked=False, use_default_reference_direction=True, rosette=None, offset_is_middle=True, consider_coupling_effect=True, solution_set=None)

Create a new sampling point.

### Parameters:
  - name: Name of the sampling point.
  - point: Sampling point.
  - direction: Sampling direction.
  - use_default_reference_direction: Whether to use the default reference direction for the evaluation.
  - rosette: Rosette used for the evaluation of the reference direction.
  - offset_is_middle: Specifies the offset of the reference plane used for the CLT analyses.
  - consider_coupling_effect: Indicates whether the laminate properties are evaluated considering the coupling effect (B matrix).
  - solution_set: Specifies the solution and the set of the element-wise postprocessing. Note, this must be given as a tuple.
### Returns:
  The created sampling point.
