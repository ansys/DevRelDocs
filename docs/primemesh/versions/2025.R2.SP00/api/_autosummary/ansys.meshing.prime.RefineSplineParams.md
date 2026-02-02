# RefineSplineParams

<a id="ansys.meshing.prime.RefineSplineParams"></a>

### *class* ansys.meshing.prime.RefineSplineParams(model=None, refine_flag_u=None, refine_flag_v=None, refine_flag_w=None, spline_refinement_type=None, json_data=None, \*\*kwargs)

Spline refinement parameters.

* **Parameters:**

  **model: Model**
  : Model to create a `RefineSplineParams` object with default parameters.

  **refine_flag_u: bool, optional**
  : Indicates whether refinement is applied in u direction.

  **refine_flag_v: bool, optional**
  : Indicates whether refinement is applied in v direction.

  **refine_flag_w: bool, optional**
  : Indicates whether refinement is applied in w direction.

  **spline_refinement_type: SplineRefinementType, optional**
  : Type of spline refinement. Currently, supports h-refinement and p-refinement.

  **json_data: dict, optional**
  : JSON dictionary to create a `RefineSplineParams` object with provided parameters.

### Examples

```pycon
>>> refine_spline_params = prime.RefineSplineParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`RefineSplineParams.print_default`](ansys.meshing.prime.RefineSplineParams.print_default.md#ansys.meshing.prime.RefineSplineParams.print_default)()   | Print the default values of `RefineSplineParams` object.   |
| [`RefineSplineParams.set_default`](ansys.meshing.prime.RefineSplineParams.set_default.md#ansys.meshing.prime.RefineSplineParams.set_default)([...])    | Set the default values of the `RefineSplineParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`RefineSplineParams.refine_flag_u`](ansys.meshing.prime.RefineSplineParams.refine_flag_u.md#ansys.meshing.prime.RefineSplineParams.refine_flag_u)                            | Indicates whether refinement is applied in u direction.   |
| [`RefineSplineParams.refine_flag_v`](ansys.meshing.prime.RefineSplineParams.refine_flag_v.md#ansys.meshing.prime.RefineSplineParams.refine_flag_v)                            | Indicates whether refinement is applied in v direction.   |
| [`RefineSplineParams.refine_flag_w`](ansys.meshing.prime.RefineSplineParams.refine_flag_w.md#ansys.meshing.prime.RefineSplineParams.refine_flag_w)                            | Indicates whether refinement is applied in w direction.   |
| [`RefineSplineParams.spline_refinement_type`](ansys.meshing.prime.RefineSplineParams.spline_refinement_type.md#ansys.meshing.prime.RefineSplineParams.spline_refinement_type) | Type of spline refinement.                                |
<!-- vale on -->