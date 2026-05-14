# MergePartsParams

<a id="ansys.meshing.prime.MergePartsParams"></a>

### *class* ansys.meshing.prime.MergePartsParams(model=None, merged_part_suggested_name=None, json_data=None, \*\*kwargs)

Parameters to merge parts.

* **Parameters:**

  **model: Model**
  : Model to create a `MergePartsParams` object with default parameters.

  **merged_part_suggested_name: str, optional**
  : Suggested name to be set on merged part. First in alphabetical order of given part names will be used, when empty name is given.

  **json_data: dict, optional**
  : JSON dictionary to create a `MergePartsParams` object with provided parameters.

### Examples

```pycon
>>> merge_parts_params = prime.MergePartsParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`MergePartsParams.print_default`](ansys.meshing.prime.MergePartsParams.print_default.md#ansys.meshing.prime.MergePartsParams.print_default)()   | Print the default values of `MergePartsParams` object.   |
| [`MergePartsParams.set_default`](ansys.meshing.prime.MergePartsParams.set_default.md#ansys.meshing.prime.MergePartsParams.set_default)([...])    | Set the default values of the `MergePartsParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| [`MergePartsParams.merged_part_suggested_name`](ansys.meshing.prime.MergePartsParams.merged_part_suggested_name.md#ansys.meshing.prime.MergePartsParams.merged_part_suggested_name)   | Suggested name to be set on merged part.   |
<!-- vale on -->