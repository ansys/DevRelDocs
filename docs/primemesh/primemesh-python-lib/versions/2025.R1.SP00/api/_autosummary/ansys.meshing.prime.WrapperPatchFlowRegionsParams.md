# WrapperPatchFlowRegionsParams

<a id="ansys.meshing.prime.WrapperPatchFlowRegionsParams"></a>

### *class* ansys.meshing.prime.WrapperPatchFlowRegionsParams(model=None, base_size=None, suggested_part_name=None, number_of_threads=None, dead_regions=None, json_data=None, \*\*kwargs)

WrapperPatchFlowRegionsParams to define parameters for patch flow regions operation.

* **Parameters:**

  **model: Model**
  : Model to create a `WrapperPatchFlowRegionsParams` object with default parameters.

  **base_size: float, optional**
  : Base size to define octree.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **suggested_part_name: str, optional**
  : Suggested part name for created patching surfaces.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **number_of_threads: int, optional**
  : Number of threads for multithreading.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **dead_regions: List[DeadRegion], optional**
  : List of dead regions.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `WrapperPatchFlowRegionsParams` object with provided parameters.

### Examples

```pycon
>>> wrapper_patch_flow_regions_params = prime.WrapperPatchFlowRegionsParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`WrapperPatchFlowRegionsParams.print_default`](ansys.meshing.prime.WrapperPatchFlowRegionsParams.print_default.md#ansys.meshing.prime.WrapperPatchFlowRegionsParams.print_default)()   | Print the default values of `WrapperPatchFlowRegionsParams` object.   |
| [`WrapperPatchFlowRegionsParams.set_default`](ansys.meshing.prime.WrapperPatchFlowRegionsParams.set_default.md#ansys.meshing.prime.WrapperPatchFlowRegionsParams.set_default)([...])    | Set the default values of the `WrapperPatchFlowRegionsParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`WrapperPatchFlowRegionsParams.base_size`](ansys.meshing.prime.WrapperPatchFlowRegionsParams.base_size.md#ansys.meshing.prime.WrapperPatchFlowRegionsParams.base_size)                               | Base size to define octree.                        |
| [`WrapperPatchFlowRegionsParams.dead_regions`](ansys.meshing.prime.WrapperPatchFlowRegionsParams.dead_regions.md#ansys.meshing.prime.WrapperPatchFlowRegionsParams.dead_regions)                      | List of dead regions.                              |
| [`WrapperPatchFlowRegionsParams.number_of_threads`](ansys.meshing.prime.WrapperPatchFlowRegionsParams.number_of_threads.md#ansys.meshing.prime.WrapperPatchFlowRegionsParams.number_of_threads)       | Number of threads for multithreading.              |
| [`WrapperPatchFlowRegionsParams.suggested_part_name`](ansys.meshing.prime.WrapperPatchFlowRegionsParams.suggested_part_name.md#ansys.meshing.prime.WrapperPatchFlowRegionsParams.suggested_part_name) | Suggested part name for created patching surfaces. |
<!-- vale on -->