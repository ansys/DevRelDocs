# TransformParams

<a id="ansys.meshing.prime.TransformParams"></a>

### *class* ansys.meshing.prime.TransformParams(model=None, transformation_matrix=None, json_data=None, \*\*kwargs)

Parameters to transform given entities.

* **Parameters:**

  **model: Model**
  : Model to create a `TransformParams` object with default parameters.

  **transformation_matrix: Iterable[float], optional**
  : Transformation matrix(4x4) to be used to transform.

  **json_data: dict, optional**
  : JSON dictionary to create a `TransformParams` object with provided parameters.

### Examples

```pycon
>>> transform_params = prime.TransformParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`TransformParams.print_default`](ansys.meshing.prime.TransformParams.print_default.md#ansys.meshing.prime.TransformParams.print_default)()   | Print the default values of `TransformParams` object.   |
| [`TransformParams.set_default`](ansys.meshing.prime.TransformParams.set_default.md#ansys.meshing.prime.TransformParams.set_default)([...])    | Set the default values of the `TransformParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`TransformParams.transformation_matrix`](ansys.meshing.prime.TransformParams.transformation_matrix.md#ansys.meshing.prime.TransformParams.transformation_matrix)   | Transformation matrix(4x4) to be used to transform.   |
<!-- vale on -->