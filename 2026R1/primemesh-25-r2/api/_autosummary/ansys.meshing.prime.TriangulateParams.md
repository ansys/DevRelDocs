# TriangulateParams

<a id="ansys.meshing.prime.TriangulateParams"></a>

### *class* ansys.meshing.prime.TriangulateParams(model=None, json_data=None, \*\*kwargs)

Provides the parameters used for triangulation operation.

* **Parameters:**

  **model: Model**
  : Model to create a `TriangulateParams` object with default parameters.

  **json_data: dict, optional**
  : JSON dictionary to create a `TriangulateParams` object with provided parameters.

### Examples

```pycon
>>> triangulate_params = prime.TriangulateParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`TriangulateParams.print_default`](ansys.meshing.prime.TriangulateParams.print_default.md#ansys.meshing.prime.TriangulateParams.print_default)()   | Print the default values of `TriangulateParams` object.   |
| [`TriangulateParams.set_default`](ansys.meshing.prime.TriangulateParams.set_default.md#ansys.meshing.prime.TriangulateParams.set_default)()         | Set the default values of the `TriangulateParams` object. |
<!-- vale on -->