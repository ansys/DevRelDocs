# SmoothDihedralFaceNodesParams

<a id="ansys.meshing.prime.SmoothDihedralFaceNodesParams"></a>

### *class* ansys.meshing.prime.SmoothDihedralFaceNodesParams(model=None, min_dihedral_angle=None, tolerance=None, type=None, json_data=None, \*\*kwargs)

Parameters to smooth dihedral face nodes.

* **Parameters:**

  **model: Model**
  : Model to create a `SmoothDihedralFaceNodesParams` object with default parameters.

  **min_dihedral_angle: float, optional**
  : Minimum angle to be used to identify dihedral faces.

  **tolerance: float, optional**
  : Tolerance relative to local mesh size to control smooth movement of nodes.

  **type: SmoothType, optional**
  : Option to inflate neighbor nodes of dihedral face edges or smooth dihedral face edge nodes to improve dihedral angle.

  **json_data: dict, optional**
  : JSON dictionary to create a `SmoothDihedralFaceNodesParams` object with provided parameters.

### Examples

```pycon
>>> smooth_dihedral_face_nodes_params = prime.SmoothDihedralFaceNodesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`SmoothDihedralFaceNodesParams.print_default`](ansys.meshing.prime.SmoothDihedralFaceNodesParams.print_default.md#ansys.meshing.prime.SmoothDihedralFaceNodesParams.print_default)()   | Print the default values of `SmoothDihedralFaceNodesParams` object.   |
| [`SmoothDihedralFaceNodesParams.set_default`](ansys.meshing.prime.SmoothDihedralFaceNodesParams.set_default.md#ansys.meshing.prime.SmoothDihedralFaceNodesParams.set_default)([...])    | Set the default values of the `SmoothDihedralFaceNodesParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| [`SmoothDihedralFaceNodesParams.min_dihedral_angle`](ansys.meshing.prime.SmoothDihedralFaceNodesParams.min_dihedral_angle.md#ansys.meshing.prime.SmoothDihedralFaceNodesParams.min_dihedral_angle)   | Minimum angle to be used to identify dihedral faces.                                                                  |
| [`SmoothDihedralFaceNodesParams.tolerance`](ansys.meshing.prime.SmoothDihedralFaceNodesParams.tolerance.md#ansys.meshing.prime.SmoothDihedralFaceNodesParams.tolerance)                              | Tolerance relative to local mesh size to control smooth movement of nodes.                                            |
| [`SmoothDihedralFaceNodesParams.type`](ansys.meshing.prime.SmoothDihedralFaceNodesParams.type.md#ansys.meshing.prime.SmoothDihedralFaceNodesParams.type)                                             | Option to inflate neighbor nodes of dihedral face edges or smooth dihedral face edge nodes to improve dihedral angle. |
<!-- vale on -->