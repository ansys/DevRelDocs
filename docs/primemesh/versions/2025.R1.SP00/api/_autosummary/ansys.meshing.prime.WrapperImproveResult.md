# WrapperImproveResult

<a id="ansys.meshing.prime.WrapperImproveResult"></a>

### *class* ansys.meshing.prime.WrapperImproveResult(model=None, error_code=None, n_skew_found=None, remaining_skew_faces=None, n_face_intersections_found=None, unresolved_face_intersections=None, json_data=None, \*\*kwargs)

Results structure associated to improve quality.

* **Parameters:**

  **model: Model**
  : Model to create a `WrapperImproveResult` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with a wrapper operation.

  **n_skew_found: int, optional**
  : Number of skewed faces found.

  **remaining_skew_faces: int, optional**
  : Number of remaining skew faces.

  **n_face_intersections_found: int, optional**
  : Number of self intersections found.

  **unresolved_face_intersections: int, optional**
  : Number of remaining self intersections.

  **json_data: dict, optional**
  : JSON dictionary to create a `WrapperImproveResult` object with provided parameters.

### Examples

```pycon
>>> wrapper_improve_result = prime.WrapperImproveResult(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`WrapperImproveResult.print_default`](ansys.meshing.prime.WrapperImproveResult.print_default.md#ansys.meshing.prime.WrapperImproveResult.print_default)()   | Print the default values of `WrapperImproveResult` object.   |
| [`WrapperImproveResult.set_default`](ansys.meshing.prime.WrapperImproveResult.set_default.md#ansys.meshing.prime.WrapperImproveResult.set_default)([...])    | Set the default values of the `WrapperImproveResult` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`WrapperImproveResult.error_code`](ansys.meshing.prime.WrapperImproveResult.error_code.md#ansys.meshing.prime.WrapperImproveResult.error_code)                                                          | Error code associated with a wrapper operation.   |
| [`WrapperImproveResult.n_face_intersections_found`](ansys.meshing.prime.WrapperImproveResult.n_face_intersections_found.md#ansys.meshing.prime.WrapperImproveResult.n_face_intersections_found)          | Number of self intersections found.               |
| [`WrapperImproveResult.n_skew_found`](ansys.meshing.prime.WrapperImproveResult.n_skew_found.md#ansys.meshing.prime.WrapperImproveResult.n_skew_found)                                                    | Number of skewed faces found.                     |
| [`WrapperImproveResult.remaining_skew_faces`](ansys.meshing.prime.WrapperImproveResult.remaining_skew_faces.md#ansys.meshing.prime.WrapperImproveResult.remaining_skew_faces)                            | Number of remaining skew faces.                   |
| [`WrapperImproveResult.unresolved_face_intersections`](ansys.meshing.prime.WrapperImproveResult.unresolved_face_intersections.md#ansys.meshing.prime.WrapperImproveResult.unresolved_face_intersections) | Number of remaining self intersections.           |
<!-- vale on -->