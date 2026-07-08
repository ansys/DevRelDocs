# CreateContactPatchParams

<a id="ansys.meshing.prime.CreateContactPatchParams"></a>

### *class* ansys.meshing.prime.CreateContactPatchParams(model=None, contact_patch_axis=None, offset_distance=None, grouping_tolerance=None, suggested_part_name=None, suggested_label_prefix=None, json_data=None, \*\*kwargs)

Parameters used for contact patch creation in the given axis.

* **Parameters:**

  **model: Model**
  : Model to create a `CreateContactPatchParams` object with default parameters.

  **contact_patch_axis: ContactPatchAxis, optional**
  : Assigns the contact patch direction.

  **offset_distance: float, optional**
  : Source offset distance value.

  **grouping_tolerance: float, optional**
  : Tolerance distance value to group regions for contact patch creation.

  **suggested_part_name: str, optional**
  : Suggested part name for created contact patch surfaces.

  **suggested_label_prefix: str, optional**
  : Suggested label name for created contact patch surfaces.

  **json_data: dict, optional**
  : JSON dictionary to create a `CreateContactPatchParams` object with provided parameters.

### Examples

```pycon
>>> create_contact_patch_params = prime.CreateContactPatchParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`CreateContactPatchParams.print_default`](ansys.meshing.prime.CreateContactPatchParams.print_default.md#ansys.meshing.prime.CreateContactPatchParams.print_default)()   | Print the default values of `CreateContactPatchParams` object.   |
| [`CreateContactPatchParams.set_default`](ansys.meshing.prime.CreateContactPatchParams.set_default.md#ansys.meshing.prime.CreateContactPatchParams.set_default)([...])    | Set the default values of the `CreateContactPatchParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`CreateContactPatchParams.contact_patch_axis`](ansys.meshing.prime.CreateContactPatchParams.contact_patch_axis.md#ansys.meshing.prime.CreateContactPatchParams.contact_patch_axis)             | Assigns the contact patch direction.                                  |
| [`CreateContactPatchParams.grouping_tolerance`](ansys.meshing.prime.CreateContactPatchParams.grouping_tolerance.md#ansys.meshing.prime.CreateContactPatchParams.grouping_tolerance)             | Tolerance distance value to group regions for contact patch creation. |
| [`CreateContactPatchParams.offset_distance`](ansys.meshing.prime.CreateContactPatchParams.offset_distance.md#ansys.meshing.prime.CreateContactPatchParams.offset_distance)                      | Source offset distance value.                                         |
| [`CreateContactPatchParams.suggested_label_prefix`](ansys.meshing.prime.CreateContactPatchParams.suggested_label_prefix.md#ansys.meshing.prime.CreateContactPatchParams.suggested_label_prefix) | Suggested label name for created contact patch surfaces.              |
| [`CreateContactPatchParams.suggested_part_name`](ansys.meshing.prime.CreateContactPatchParams.suggested_part_name.md#ansys.meshing.prime.CreateContactPatchParams.suggested_part_name)          | Suggested part name for created contact patch surfaces.               |
<!-- vale on -->