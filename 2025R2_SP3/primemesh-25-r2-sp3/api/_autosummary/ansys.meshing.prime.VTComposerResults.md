# VTComposerResults

<a id="ansys.meshing.prime.VTComposerResults"></a>

### *class* ansys.meshing.prime.VTComposerResults(model=None, error_code=None, json_data=None, \*\*kwargs)

Result struct associated to VTComposer operations.

* **Parameters:**

  **model: Model**
  : Model to create a `VTComposerResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `VTComposerResults` object with provided parameters.

### Examples

```pycon
>>> v_tcomposer_results = prime.VTComposerResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`VTComposerResults.print_default`](ansys.meshing.prime.VTComposerResults.print_default.md#ansys.meshing.prime.VTComposerResults.print_default)()       | Print the default values of `VTComposerResults` object.   |
| [`VTComposerResults.set_default`](ansys.meshing.prime.VTComposerResults.set_default.md#ansys.meshing.prime.VTComposerResults.set_default)([error_code]) | Set the default values of the `VTComposerResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| [`VTComposerResults.error_code`](ansys.meshing.prime.VTComposerResults.error_code.md#ansys.meshing.prime.VTComposerResults.error_code)   | **This is a beta parameter**.   |
<!-- vale on -->