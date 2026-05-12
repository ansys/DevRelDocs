# SetContactPreventionsResults

<a id="ansys.meshing.prime.SetContactPreventionsResults"></a>

### *class* ansys.meshing.prime.SetContactPreventionsResults(model=None, error_code=None, ids=None, json_data=None, \*\*kwargs)

Results associated with set contact preventions.

* **Parameters:**

  **model: Model**
  : Model to create a `SetContactPreventionsResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the set contact preventions.

  **ids: Iterable[int], optional**
  : Ids of added contact prevention controls.

  **json_data: dict, optional**
  : JSON dictionary to create a `SetContactPreventionsResults` object with provided parameters.

### Examples

```pycon
>>> set_contact_preventions_results = prime.SetContactPreventionsResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| [`SetContactPreventionsResults.print_default`](ansys.meshing.prime.SetContactPreventionsResults.print_default.md#ansys.meshing.prime.SetContactPreventionsResults.print_default)()   | Print the default values of `SetContactPreventionsResults` object.   |
| [`SetContactPreventionsResults.set_default`](ansys.meshing.prime.SetContactPreventionsResults.set_default.md#ansys.meshing.prime.SetContactPreventionsResults.set_default)([...])    | Set the default values of the `SetContactPreventionsResults` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`SetContactPreventionsResults.error_code`](ansys.meshing.prime.SetContactPreventionsResults.error_code.md#ansys.meshing.prime.SetContactPreventionsResults.error_code)   | Error code associated with the set contact preventions.   |
| [`SetContactPreventionsResults.ids`](ansys.meshing.prime.SetContactPreventionsResults.ids.md#ansys.meshing.prime.SetContactPreventionsResults.ids)                        | Ids of added contact prevention controls.                 |
<!-- vale on -->