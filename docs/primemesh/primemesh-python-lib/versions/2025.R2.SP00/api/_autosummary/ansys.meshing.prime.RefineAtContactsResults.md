# RefineAtContactsResults

<a id="ansys.meshing.prime.RefineAtContactsResults"></a>

### *class* ansys.meshing.prime.RefineAtContactsResults(model=None, n_refined=None, size_field_id=None, error_code=None, json_data=None, \*\*kwargs)

Results structure associated with refine face elements in contact.

* **Parameters:**

  **model: Model**
  : Model to create a `RefineAtContactsResults` object with default parameters.

  **n_refined: int, optional**
  : Number of face elements identified for refinement.

  **size_field_id: int, optional**
  : Id of size field created to refine at contacts.

  **error_code: ErrorCode, optional**
  : ErrorCode associated with the refine contacts operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `RefineAtContactsResults` object with provided parameters.

### Examples

```pycon
>>> refine_at_contacts_results = prime.RefineAtContactsResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [`RefineAtContactsResults.print_default`](ansys.meshing.prime.RefineAtContactsResults.print_default.md#ansys.meshing.prime.RefineAtContactsResults.print_default)()   | Print the default values of `RefineAtContactsResults` object.   |
| [`RefineAtContactsResults.set_default`](ansys.meshing.prime.RefineAtContactsResults.set_default.md#ansys.meshing.prime.RefineAtContactsResults.set_default)([...])    | Set the default values of the `RefineAtContactsResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`RefineAtContactsResults.error_code`](ansys.meshing.prime.RefineAtContactsResults.error_code.md#ansys.meshing.prime.RefineAtContactsResults.error_code)          | ErrorCode associated with the refine contacts operation.   |
| [`RefineAtContactsResults.n_refined`](ansys.meshing.prime.RefineAtContactsResults.n_refined.md#ansys.meshing.prime.RefineAtContactsResults.n_refined)             | Number of face elements identified for refinement.         |
| [`RefineAtContactsResults.size_field_id`](ansys.meshing.prime.RefineAtContactsResults.size_field_id.md#ansys.meshing.prime.RefineAtContactsResults.size_field_id) | Id of size field created to refine at contacts.            |
<!-- vale on -->