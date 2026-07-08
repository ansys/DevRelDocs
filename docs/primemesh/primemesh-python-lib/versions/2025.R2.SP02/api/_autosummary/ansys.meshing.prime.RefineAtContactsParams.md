# RefineAtContactsParams

<a id="ansys.meshing.prime.RefineAtContactsParams"></a>

### *class* ansys.meshing.prime.RefineAtContactsParams(model=None, contact_tolerance=None, relative_tolerance=None, refine_max_size=None, project_on_geometry=None, json_data=None, \*\*kwargs)

Parameters to refine face elements in contact.

* **Parameters:**

  **model: Model**
  : Model to create a `RefineAtContactsParams` object with default parameters.

  **contact_tolerance: float, optional**
  : Maximum tolerance used to identify face elements as contacts.

  **relative_tolerance: bool, optional**
  : Option to specify the contact tolerance is relative or absolute.

  **refine_max_size: float, optional**
  : Maximum size used to refine contact face elements.

  **project_on_geometry: bool, optional**
  : Project on geometry on remesh.

  **json_data: dict, optional**
  : JSON dictionary to create a `RefineAtContactsParams` object with provided parameters.

### Examples

```pycon
>>> refine_at_contacts_params = prime.RefineAtContactsParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`RefineAtContactsParams.print_default`](ansys.meshing.prime.RefineAtContactsParams.print_default.md#ansys.meshing.prime.RefineAtContactsParams.print_default)()   | Print the default values of `RefineAtContactsParams` object.   |
| [`RefineAtContactsParams.set_default`](ansys.meshing.prime.RefineAtContactsParams.set_default.md#ansys.meshing.prime.RefineAtContactsParams.set_default)([...])    | Set the default values of the `RefineAtContactsParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`RefineAtContactsParams.contact_tolerance`](ansys.meshing.prime.RefineAtContactsParams.contact_tolerance.md#ansys.meshing.prime.RefineAtContactsParams.contact_tolerance)       | Maximum tolerance used to identify face elements as contacts.    |
| [`RefineAtContactsParams.project_on_geometry`](ansys.meshing.prime.RefineAtContactsParams.project_on_geometry.md#ansys.meshing.prime.RefineAtContactsParams.project_on_geometry) | Project on geometry on remesh.                                   |
| [`RefineAtContactsParams.refine_max_size`](ansys.meshing.prime.RefineAtContactsParams.refine_max_size.md#ansys.meshing.prime.RefineAtContactsParams.refine_max_size)             | Maximum size used to refine contact face elements.               |
| [`RefineAtContactsParams.relative_tolerance`](ansys.meshing.prime.RefineAtContactsParams.relative_tolerance.md#ansys.meshing.prime.RefineAtContactsParams.relative_tolerance)    | Option to specify the contact tolerance is relative or absolute. |
<!-- vale on -->