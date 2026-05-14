# WrapParams

<a id="ansys.meshing.prime.WrapParams"></a>

### *class* ansys.meshing.prime.WrapParams(model=None, sizing_method=None, base_size=None, size_control_ids=None, size_field_ids=None, wrap_region=None, number_of_threads=None, imprint_relative_range=None, imprint_iterations=None, json_data=None, \*\*kwargs)

WrapParams defines parameters for wrapping.

* **Parameters:**

  **model: Model**
  : Model to create a `WrapParams` object with default parameters.

  **sizing_method: SizeFieldType, optional**
  : Used to define sizing method for wrapping.

  **base_size: float, optional**
  : Base size to define octree.

  **size_control_ids: Iterable[int], optional**
  : Used to construct geodesic sizes for octree refinement.

  **size_field_ids: Iterable[int], optional**
  : Used to define size field based octree refinement.

  **wrap_region: WrapRegion, optional**
  : Indicates source type to extract wrapper region.

  **number_of_threads: int, optional**
  : Number of threads for multithreading.

  **imprint_relative_range: float, optional**
  : Used to define relative range in imprinting in wrapping.

  **imprint_iterations: int, optional**
  : Used to define number of imprint iterations in wrapping.

  **json_data: dict, optional**
  : JSON dictionary to create a `WrapParams` object with provided parameters.

### Examples

```pycon
>>> wrap_params = prime.WrapParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`WrapParams.print_default`](ansys.meshing.prime.WrapParams.print_default.md#ansys.meshing.prime.WrapParams.print_default)()               | Print the default values of `WrapParams` object.   |
| [`WrapParams.set_default`](ansys.meshing.prime.WrapParams.set_default.md#ansys.meshing.prime.WrapParams.set_default)([sizing_method, ...]) | Set the default values of the `WrapParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`WrapParams.base_size`](ansys.meshing.prime.WrapParams.base_size.md#ansys.meshing.prime.WrapParams.base_size)                                        | Base size to define octree.                              |
| [`WrapParams.imprint_iterations`](ansys.meshing.prime.WrapParams.imprint_iterations.md#ansys.meshing.prime.WrapParams.imprint_iterations)             | Used to define number of imprint iterations in wrapping. |
| [`WrapParams.imprint_relative_range`](ansys.meshing.prime.WrapParams.imprint_relative_range.md#ansys.meshing.prime.WrapParams.imprint_relative_range) | Used to define relative range in imprinting in wrapping. |
| [`WrapParams.number_of_threads`](ansys.meshing.prime.WrapParams.number_of_threads.md#ansys.meshing.prime.WrapParams.number_of_threads)                | Number of threads for multithreading.                    |
| [`WrapParams.size_control_ids`](ansys.meshing.prime.WrapParams.size_control_ids.md#ansys.meshing.prime.WrapParams.size_control_ids)                   | Used to construct geodesic sizes for octree refinement.  |
| [`WrapParams.size_field_ids`](ansys.meshing.prime.WrapParams.size_field_ids.md#ansys.meshing.prime.WrapParams.size_field_ids)                         | Used to define size field based octree refinement.       |
| [`WrapParams.sizing_method`](ansys.meshing.prime.WrapParams.sizing_method.md#ansys.meshing.prime.WrapParams.sizing_method)                            | Used to define sizing method for wrapping.               |
| [`WrapParams.wrap_region`](ansys.meshing.prime.WrapParams.wrap_region.md#ansys.meshing.prime.WrapParams.wrap_region)                                  | Indicates source type to extract wrapper region.         |
<!-- vale on -->