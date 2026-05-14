# TetParams

<a id="ansys.meshing.prime.TetParams"></a>

### *class* ansys.meshing.prime.TetParams(model=None, quadratic=None, json_data=None, \*\*kwargs)

Parameters to control tetrahedral mesh generation.

* **Parameters:**

  **model: Model**
  : Model to create a `TetParams` object with default parameters.

  **quadratic: bool, optional**
  : Option to generate quadratic tetrahedral mesh. It is not supported with parallel meshing. It is only supported with pure tetrahedral mesh.

  **json_data: dict, optional**
  : JSON dictionary to create a `TetParams` object with provided parameters.

### Examples

```pycon
>>> tet_params = prime.TetParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`TetParams.print_default`](ansys.meshing.prime.TetParams.print_default.md#ansys.meshing.prime.TetParams.print_default)()      | Print the default values of `TetParams` object.   |
| [`TetParams.set_default`](ansys.meshing.prime.TetParams.set_default.md#ansys.meshing.prime.TetParams.set_default)([quadratic]) | Set the default values of the `TetParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| [`TetParams.quadratic`](ansys.meshing.prime.TetParams.quadratic.md#ansys.meshing.prime.TetParams.quadratic)   | Option to generate quadratic tetrahedral mesh.   |
<!-- vale on -->