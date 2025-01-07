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

| [`CreateContactPatchResults.print_default`](ansys.meshing.prime.CreateContactPatchResults.print_default.md#ansys.meshing.prime.CreateContactPatchResults.print_default)()   | Print the default values of `CreateContactPatchResults` object.   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`CreateContactPatchResults.set_default`](ansys.meshing.prime.CreateContactPatchResults.set_default.md#ansys.meshing.prime.CreateContactPatchResults.set_default)([...])    | Set the default values of the `CreateContactPatchResults` object. |

### Attributes

| [`CreateContactPatchResults.error_code`](ansys.meshing.prime.CreateContactPatchResults.error_code.md#ansys.meshing.prime.CreateContactPatchResults.error_code)   | Error code associated with the contact patch creation operation.   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`CreateContactPatchResults.part_id`](ansys.meshing.prime.CreateContactPatchResults.part_id.md#ansys.meshing.prime.CreateContactPatchResults.part_id)            | Contact patch part id.                                             |

<a id="examples-using-createcontactpatchresults"></a>

## Examples using CreateContactPatchResults

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to create a contact patch for use with wrapping to avoid meshing into a narrow contact region between two objects.">  <div class="sphx-glr-thumbnail-title">Create a contact patch for wrapping between a wheel and ground interface</div>
</div>
* [Create a contact patch for wrapping between a wheel and ground interface](../../examples/gallery_examples/gallery/10_wheel_ground_contact_patch.md#sphx-glr-examples-gallery-examples-gallery-10-wheel-ground-contact-patch-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
