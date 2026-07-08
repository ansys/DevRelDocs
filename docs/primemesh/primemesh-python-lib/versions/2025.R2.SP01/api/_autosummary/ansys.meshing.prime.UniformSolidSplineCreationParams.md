# UniformSolidSplineCreationParams

<a id="ansys.meshing.prime.UniformSolidSplineCreationParams"></a>

### *class* ansys.meshing.prime.UniformSolidSplineCreationParams(model=None, n_control_points_u=None, n_control_points_v=None, n_control_points_w=None, degree_u=None, degree_v=None, degree_w=None, json_data=None, \*\*kwargs)

Parameters to define the uniform solid spline.

* **Parameters:**

  **model: Model**
  : Model to create a `UniformSolidSplineCreationParams` object with default parameters.

  **n_control_points_u: int, optional**
  : Number of control points in u direction.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **n_control_points_v: int, optional**
  : Number of control points in v direction.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **n_control_points_w: int, optional**
  : Number of control points in w direction.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **degree_u: int, optional**
  : Degree in u direction.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **degree_v: int, optional**
  : Degree in v direction.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **degree_w: int, optional**
  : Degree in w direction.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `UniformSolidSplineCreationParams` object with provided parameters.

### Examples

```pycon
>>> uniform_solid_spline_creation_params = prime.UniformSolidSplineCreationParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`UniformSolidSplineCreationParams.print_default`](ansys.meshing.prime.UniformSolidSplineCreationParams.print_default.md#ansys.meshing.prime.UniformSolidSplineCreationParams.print_default)()   | Print the default values of `UniformSolidSplineCreationParams` object.   |
| [`UniformSolidSplineCreationParams.set_default`](ansys.meshing.prime.UniformSolidSplineCreationParams.set_default.md#ansys.meshing.prime.UniformSolidSplineCreationParams.set_default)([...])    | Set the default values of the `UniformSolidSplineCreationParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|
| [`UniformSolidSplineCreationParams.degree_u`](ansys.meshing.prime.UniformSolidSplineCreationParams.degree_u.md#ansys.meshing.prime.UniformSolidSplineCreationParams.degree_u)                               | Degree in u direction.                   |
| [`UniformSolidSplineCreationParams.degree_v`](ansys.meshing.prime.UniformSolidSplineCreationParams.degree_v.md#ansys.meshing.prime.UniformSolidSplineCreationParams.degree_v)                               | Degree in v direction.                   |
| [`UniformSolidSplineCreationParams.degree_w`](ansys.meshing.prime.UniformSolidSplineCreationParams.degree_w.md#ansys.meshing.prime.UniformSolidSplineCreationParams.degree_w)                               | Degree in w direction.                   |
| [`UniformSolidSplineCreationParams.n_control_points_u`](ansys.meshing.prime.UniformSolidSplineCreationParams.n_control_points_u.md#ansys.meshing.prime.UniformSolidSplineCreationParams.n_control_points_u) | Number of control points in u direction. |
| [`UniformSolidSplineCreationParams.n_control_points_v`](ansys.meshing.prime.UniformSolidSplineCreationParams.n_control_points_v.md#ansys.meshing.prime.UniformSolidSplineCreationParams.n_control_points_v) | Number of control points in v direction. |
| [`UniformSolidSplineCreationParams.n_control_points_w`](ansys.meshing.prime.UniformSolidSplineCreationParams.n_control_points_w.md#ansys.meshing.prime.UniformSolidSplineCreationParams.n_control_points_w) | Number of control points in w direction. |
<!-- vale on -->