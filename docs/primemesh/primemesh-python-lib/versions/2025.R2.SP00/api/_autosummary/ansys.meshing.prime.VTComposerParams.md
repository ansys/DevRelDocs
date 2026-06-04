# VTComposerParams

<a id="ansys.meshing.prime.VTComposerParams"></a>

### *class* ansys.meshing.prime.VTComposerParams(model=None, thin_stripes_tol=None, json_data=None, \*\*kwargs)

Parameters to control VTComposer operations.

* **Parameters:**

  **model: Model**
  : Model to create a `VTComposerParams` object with default parameters.

  **thin_stripes_tol: float, optional**
  : **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `VTComposerParams` object with provided parameters.

### Examples

```pycon
>>> v_tcomposer_params = prime.VTComposerParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`VTComposerParams.print_default`](ansys.meshing.prime.VTComposerParams.print_default.md#ansys.meshing.prime.VTComposerParams.print_default)()             | Print the default values of `VTComposerParams` object.   |
| [`VTComposerParams.set_default`](ansys.meshing.prime.VTComposerParams.set_default.md#ansys.meshing.prime.VTComposerParams.set_default)([thin_stripes_tol]) | Set the default values of the `VTComposerParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| [`VTComposerParams.thin_stripes_tol`](ansys.meshing.prime.VTComposerParams.thin_stripes_tol.md#ansys.meshing.prime.VTComposerParams.thin_stripes_tol)   | **This is a beta parameter**.   |
<!-- vale on -->