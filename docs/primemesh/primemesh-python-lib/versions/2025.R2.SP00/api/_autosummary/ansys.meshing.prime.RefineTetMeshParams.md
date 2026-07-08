# RefineTetMeshParams

<a id="ansys.meshing.prime.RefineTetMeshParams"></a>

### *class* ansys.meshing.prime.RefineTetMeshParams(model=None, nisr=None, niss=None, nist=None, tolerance=None, json_data=None, \*\*kwargs)

Parameters for meshing the solid spline.

* **Parameters:**

  **model: Model**
  : Model to create a `RefineTetMeshParams` object with default parameters.

  **nisr: int, optional**
  : Interpolation elements in the local r-direction.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **niss: int, optional**
  : Interpolation elements in the local s-direction.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **nist: int, optional**
  : Interpolation elements in the local t-direction.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **tolerance: float, optional**
  : Tolerance for boundary refinement.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `RefineTetMeshParams` object with provided parameters.

### Examples

```pycon
>>> refine_tet_mesh_params = prime.RefineTetMeshParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`RefineTetMeshParams.print_default`](ansys.meshing.prime.RefineTetMeshParams.print_default.md#ansys.meshing.prime.RefineTetMeshParams.print_default)()      | Print the default values of `RefineTetMeshParams` object.   |
| [`RefineTetMeshParams.set_default`](ansys.meshing.prime.RefineTetMeshParams.set_default.md#ansys.meshing.prime.RefineTetMeshParams.set_default)([nisr, ...]) | Set the default values of the `RefineTetMeshParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`RefineTetMeshParams.nisr`](ansys.meshing.prime.RefineTetMeshParams.nisr.md#ansys.meshing.prime.RefineTetMeshParams.nisr)                | Interpolation elements in the local r-direction.   |
| [`RefineTetMeshParams.niss`](ansys.meshing.prime.RefineTetMeshParams.niss.md#ansys.meshing.prime.RefineTetMeshParams.niss)                | Interpolation elements in the local s-direction.   |
| [`RefineTetMeshParams.nist`](ansys.meshing.prime.RefineTetMeshParams.nist.md#ansys.meshing.prime.RefineTetMeshParams.nist)                | Interpolation elements in the local t-direction.   |
| [`RefineTetMeshParams.tolerance`](ansys.meshing.prime.RefineTetMeshParams.tolerance.md#ansys.meshing.prime.RefineTetMeshParams.tolerance) | Tolerance for boundary refinement.                 |
<!-- vale on -->