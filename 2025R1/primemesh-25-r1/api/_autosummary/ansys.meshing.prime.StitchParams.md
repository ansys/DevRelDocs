# StitchParams

<a id="ansys.meshing.prime.StitchParams"></a>

### *class* ansys.meshing.prime.StitchParams(model=None, tolerance=None, use_absolute_tolerance=None, remesh=None, enable_multi_threading=None, type=None, json_data=None, \*\*kwargs)

Parameters used for stitch operation.

* **Parameters:**

  **model: Model**
  : Model to create a `StitchParams` object with default parameters.

  **tolerance: float, optional**
  : Distance tolerance for stitching boundaries.

  **use_absolute_tolerance: bool, optional**
  : True if tolerance provided is absolute value.

  **remesh: bool, optional**
  : Remesh at stitch connection.

  **enable_multi_threading: bool, optional**
  : Option to run stitch in parallel using multithread.

  **type: StitchType, optional**
  : Stitch type depending on nature of surface boundary edges to be stitched.

  **json_data: dict, optional**
  : JSON dictionary to create a `StitchParams` object with provided parameters.

### Examples

```pycon
>>> stitch_params = prime.StitchParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`StitchParams.print_default`](ansys.meshing.prime.StitchParams.print_default.md#ansys.meshing.prime.StitchParams.print_default)()           | Print the default values of `StitchParams` object.   |
| [`StitchParams.set_default`](ansys.meshing.prime.StitchParams.set_default.md#ansys.meshing.prime.StitchParams.set_default)([tolerance, ...]) | Set the default values of the `StitchParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`StitchParams.enable_multi_threading`](ansys.meshing.prime.StitchParams.enable_multi_threading.md#ansys.meshing.prime.StitchParams.enable_multi_threading)   | Option to run stitch in parallel using multithread.                       |
| [`StitchParams.remesh`](ansys.meshing.prime.StitchParams.remesh.md#ansys.meshing.prime.StitchParams.remesh)                                                   | Remesh at stitch connection.                                              |
| [`StitchParams.tolerance`](ansys.meshing.prime.StitchParams.tolerance.md#ansys.meshing.prime.StitchParams.tolerance)                                          | Distance tolerance for stitching boundaries.                              |
| [`StitchParams.type`](ansys.meshing.prime.StitchParams.type.md#ansys.meshing.prime.StitchParams.type)                                                         | Stitch type depending on nature of surface boundary edges to be stitched. |
| [`StitchParams.use_absolute_tolerance`](ansys.meshing.prime.StitchParams.use_absolute_tolerance.md#ansys.meshing.prime.StitchParams.use_absolute_tolerance)   | True if tolerance provided is absolute value.                             |
<!-- vale on -->