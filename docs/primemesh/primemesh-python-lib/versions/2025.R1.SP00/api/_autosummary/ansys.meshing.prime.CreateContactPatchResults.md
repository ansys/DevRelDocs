# CreateContactPatchResults

<a id="ansys.meshing.prime.CreateContactPatchResults"></a>

### *class* ansys.meshing.prime.CreateContactPatchResults(model=None, error_code=None, part_id=None, json_data=None, \*\*kwargs)

Result structure associated with created contact patch zonelets.

* **Parameters:**

  **model: Model**
  : Model to create a `CreateContactPatchResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the contact patch creation operation.

  **part_id: int, optional**
  : Contact patch part id.

  **json_data: dict, optional**
  : JSON dictionary to create a `CreateContactPatchResults` object with provided parameters.

### Examples

```pycon
>>> create_contact_patch_results = prime.CreateContactPatchResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`CreateContactPatchResults.print_default`](ansys.meshing.prime.CreateContactPatchResults.print_default.md#ansys.meshing.prime.CreateContactPatchResults.print_default)()   | Print the default values of `CreateContactPatchResults` object.   |
| [`CreateContactPatchResults.set_default`](ansys.meshing.prime.CreateContactPatchResults.set_default.md#ansys.meshing.prime.CreateContactPatchResults.set_default)([...])    | Set the default values of the `CreateContactPatchResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`CreateContactPatchResults.error_code`](ansys.meshing.prime.CreateContactPatchResults.error_code.md#ansys.meshing.prime.CreateContactPatchResults.error_code)   | Error code associated with the contact patch creation operation.   |
| [`CreateContactPatchResults.part_id`](ansys.meshing.prime.CreateContactPatchResults.part_id.md#ansys.meshing.prime.CreateContactPatchResults.part_id)            | Contact patch part id.                                             |



<!-- vale on -->
