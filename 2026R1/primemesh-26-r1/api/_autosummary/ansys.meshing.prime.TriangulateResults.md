# TriangulateResults

<a id="ansys.meshing.prime.TriangulateResults"></a>

### *class* ansys.meshing.prime.TriangulateResults(model=None, error_code=None, n_faces_triangulated=None, json_data=None, \*\*kwargs)

Results associated with triangulate operation.

* **Parameters:**

  **model: Model**
  : Model to create a `TriangulateResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with failure of the operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **n_faces_triangulated: int, optional**
  : Number of faces that were triangulated.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `TriangulateResults` object with provided parameters.

### Examples

```pycon
>>> triangulate_results = prime.TriangulateResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`TriangulateResults.print_default`](ansys.meshing.prime.TriangulateResults.print_default.md#ansys.meshing.prime.TriangulateResults.print_default)()            | Print the default values of `TriangulateResults` object.   |
| [`TriangulateResults.set_default`](ansys.meshing.prime.TriangulateResults.set_default.md#ansys.meshing.prime.TriangulateResults.set_default)([error_code, ...]) | Set the default values of the `TriangulateResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`TriangulateResults.error_code`](ansys.meshing.prime.TriangulateResults.error_code.md#ansys.meshing.prime.TriangulateResults.error_code)                               | Error code associated with failure of the operation.   |
| [`TriangulateResults.n_faces_triangulated`](ansys.meshing.prime.TriangulateResults.n_faces_triangulated.md#ansys.meshing.prime.TriangulateResults.n_faces_triangulated) | Number of faces that were triangulated.                |
<!-- vale on -->