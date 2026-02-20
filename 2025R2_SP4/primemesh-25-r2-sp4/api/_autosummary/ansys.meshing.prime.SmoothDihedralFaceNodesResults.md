# SmoothDihedralFaceNodesResults

<a id="ansys.meshing.prime.SmoothDihedralFaceNodesResults"></a>

### *class* ansys.meshing.prime.SmoothDihedralFaceNodesResults(model=None, n_nodes_smoothed=None, error_code=None, json_data=None, \*\*kwargs)

Results structure associated with smooth dihedral face nodes.

* **Parameters:**

  **model: Model**
  : Model to create a `SmoothDihedralFaceNodesResults` object with default parameters.

  **n_nodes_smoothed: int, optional**
  : Number of dihedral face nodes smoothed.

  **error_code: ErrorCode, optional**
  : Error Code associated with creating offset surface.

  **json_data: dict, optional**
  : JSON dictionary to create a `SmoothDihedralFaceNodesResults` object with provided parameters.

### Examples

```pycon
>>> smooth_dihedral_face_nodes_results = prime.SmoothDihedralFaceNodesResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`SmoothDihedralFaceNodesResults.print_default`](ansys.meshing.prime.SmoothDihedralFaceNodesResults.print_default.md#ansys.meshing.prime.SmoothDihedralFaceNodesResults.print_default)()   | Print the default values of `SmoothDihedralFaceNodesResults` object.   |
| [`SmoothDihedralFaceNodesResults.set_default`](ansys.meshing.prime.SmoothDihedralFaceNodesResults.set_default.md#ansys.meshing.prime.SmoothDihedralFaceNodesResults.set_default)([...])    | Set the default values of the `SmoothDihedralFaceNodesResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`SmoothDihedralFaceNodesResults.error_code`](ansys.meshing.prime.SmoothDihedralFaceNodesResults.error_code.md#ansys.meshing.prime.SmoothDihedralFaceNodesResults.error_code)                   | Error Code associated with creating offset surface.   |
| [`SmoothDihedralFaceNodesResults.n_nodes_smoothed`](ansys.meshing.prime.SmoothDihedralFaceNodesResults.n_nodes_smoothed.md#ansys.meshing.prime.SmoothDihedralFaceNodesResults.n_nodes_smoothed) | Number of dihedral face nodes smoothed.               |
<!-- vale on -->