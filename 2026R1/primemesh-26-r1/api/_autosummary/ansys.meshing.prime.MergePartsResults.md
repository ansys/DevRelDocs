# MergePartsResults

<a id="ansys.meshing.prime.MergePartsResults"></a>

### *class* ansys.meshing.prime.MergePartsResults(model=None, error_code=None, merged_part_assigned_name=None, merged_part_id=None, json_data=None, \*\*kwargs)

Parameters to merge parts.

* **Parameters:**

  **model: Model**
  : Model to create a `MergePartsResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **merged_part_assigned_name: str, optional**
  : Name assigned to merged part. Suffix is added to suggested name if the name not available.

  **merged_part_id: int, optional**
  : Id assigned to merged part.

  **json_data: dict, optional**
  : JSON dictionary to create a `MergePartsResults` object with provided parameters.

### Examples

```pycon
>>> merge_parts_results = prime.MergePartsResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`MergePartsResults.print_default`](ansys.meshing.prime.MergePartsResults.print_default.md#ansys.meshing.prime.MergePartsResults.print_default)()            | Print the default values of `MergePartsResults` object.   |
| [`MergePartsResults.set_default`](ansys.meshing.prime.MergePartsResults.set_default.md#ansys.meshing.prime.MergePartsResults.set_default)([error_code, ...]) | Set the default values of the `MergePartsResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`MergePartsResults.error_code`](ansys.meshing.prime.MergePartsResults.error_code.md#ansys.meshing.prime.MergePartsResults.error_code)                                              | Error code associated with the failure of operation.   |
| [`MergePartsResults.merged_part_assigned_name`](ansys.meshing.prime.MergePartsResults.merged_part_assigned_name.md#ansys.meshing.prime.MergePartsResults.merged_part_assigned_name) | Name assigned to merged part.                          |
| [`MergePartsResults.merged_part_id`](ansys.meshing.prime.MergePartsResults.merged_part_id.md#ansys.meshing.prime.MergePartsResults.merged_part_id)                                  | Id assigned to merged part.                            |
<!-- vale on -->