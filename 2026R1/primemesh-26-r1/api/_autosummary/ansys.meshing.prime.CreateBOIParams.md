# CreateBOIParams

<a id="ansys.meshing.prime.CreateBOIParams"></a>

### *class* ansys.meshing.prime.CreateBOIParams(model=None, boi_type=None, perform_initial_wrap=None, wrap_size=None, flow_dir=None, side_scale=None, wake_scale=None, wake_levels=None, suggested_part_name=None, suggested_label_prefix=None, number_of_threads=None, json_data=None, \*\*kwargs)

Parameters used for BOI surface creation in the given axis.

* **Parameters:**

  **model: Model**
  : Model to create a `CreateBOIParams` object with default parameters.

  **boi_type: BOIType, optional**
  : Type of BOI offsetting.

  **perform_initial_wrap: bool, optional**
  : Perform an initial wrap to create a BOI if BOI type is OFFSETSURFACE.

  **wrap_size: float, optional**
  : Set wrap size greater than the largest gap size in the input when performing_initial_wrap is true.

  **flow_dir: FlowDirection, optional**
  : Assigns the offset direction of inflation.

  **side_scale: float, optional**
  : BOI side scaling factor.

  **wake_scale: float, optional**
  : BOI flow direction scaling factor.

  **wake_levels: int, optional**
  : BOI levels.

  **suggested_part_name: str, optional**
  : Suggested part name for created BOI surfaces.

  **suggested_label_prefix: str, optional**
  : Suggested label name for created BOI surfaces.

  **number_of_threads: int, optional**
  : Number of threads for multithreading.

  **json_data: dict, optional**
  : JSON dictionary to create a `CreateBOIParams` object with provided parameters.

### Examples

```pycon
>>> create_boiparams = prime.CreateBOIParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`CreateBOIParams.print_default`](ansys.meshing.prime.CreateBOIParams.print_default.md#ansys.meshing.prime.CreateBOIParams.print_default)()          | Print the default values of `CreateBOIParams` object.   |
| [`CreateBOIParams.set_default`](ansys.meshing.prime.CreateBOIParams.set_default.md#ansys.meshing.prime.CreateBOIParams.set_default)([boi_type, ...]) | Set the default values of the `CreateBOIParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`CreateBOIParams.boi_type`](ansys.meshing.prime.CreateBOIParams.boi_type.md#ansys.meshing.prime.CreateBOIParams.boi_type)                                           | Type of BOI offsetting.                                                                            |
| [`CreateBOIParams.flow_dir`](ansys.meshing.prime.CreateBOIParams.flow_dir.md#ansys.meshing.prime.CreateBOIParams.flow_dir)                                           | Assigns the offset direction of inflation.                                                         |
| [`CreateBOIParams.number_of_threads`](ansys.meshing.prime.CreateBOIParams.number_of_threads.md#ansys.meshing.prime.CreateBOIParams.number_of_threads)                | Number of threads for multithreading.                                                              |
| [`CreateBOIParams.perform_initial_wrap`](ansys.meshing.prime.CreateBOIParams.perform_initial_wrap.md#ansys.meshing.prime.CreateBOIParams.perform_initial_wrap)       | Perform an initial wrap to create a BOI if BOI type is OFFSETSURFACE.                              |
| [`CreateBOIParams.side_scale`](ansys.meshing.prime.CreateBOIParams.side_scale.md#ansys.meshing.prime.CreateBOIParams.side_scale)                                     | BOI side scaling factor.                                                                           |
| [`CreateBOIParams.suggested_label_prefix`](ansys.meshing.prime.CreateBOIParams.suggested_label_prefix.md#ansys.meshing.prime.CreateBOIParams.suggested_label_prefix) | Suggested label name for created BOI surfaces.                                                     |
| [`CreateBOIParams.suggested_part_name`](ansys.meshing.prime.CreateBOIParams.suggested_part_name.md#ansys.meshing.prime.CreateBOIParams.suggested_part_name)          | Suggested part name for created BOI surfaces.                                                      |
| [`CreateBOIParams.wake_levels`](ansys.meshing.prime.CreateBOIParams.wake_levels.md#ansys.meshing.prime.CreateBOIParams.wake_levels)                                  | BOI levels.                                                                                        |
| [`CreateBOIParams.wake_scale`](ansys.meshing.prime.CreateBOIParams.wake_scale.md#ansys.meshing.prime.CreateBOIParams.wake_scale)                                     | BOI flow direction scaling factor.                                                                 |
| [`CreateBOIParams.wrap_size`](ansys.meshing.prime.CreateBOIParams.wrap_size.md#ansys.meshing.prime.CreateBOIParams.wrap_size)                                        | Set wrap size greater than the largest gap size in the input when performing_initial_wrap is true. |
<!-- vale on -->