# SetLeakPreventionsResults

<a id="ansys.meshing.prime.SetLeakPreventionsResults"></a>

### *class* ansys.meshing.prime.SetLeakPreventionsResults(model=None, error_code=None, ids=None, json_data=None, \*\*kwargs)

Results associated with set leak preventions.

* **Parameters:**

  **model: Model**
  : Model to create a `SetLeakPreventionsResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the set leak preventions.

  **ids: Iterable[int], optional**
  : Ids of added leak prevention controls.

  **json_data: dict, optional**
  : JSON dictionary to create a `SetLeakPreventionsResults` object with provided parameters.

### Examples

```pycon
>>> set_leak_preventions_results = prime.SetLeakPreventionsResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`SetLeakPreventionsResults.print_default`](ansys.meshing.prime.SetLeakPreventionsResults.print_default.md#ansys.meshing.prime.SetLeakPreventionsResults.print_default)()   | Print the default values of `SetLeakPreventionsResults` object.   |
| [`SetLeakPreventionsResults.set_default`](ansys.meshing.prime.SetLeakPreventionsResults.set_default.md#ansys.meshing.prime.SetLeakPreventionsResults.set_default)([...])    | Set the default values of the `SetLeakPreventionsResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`SetLeakPreventionsResults.error_code`](ansys.meshing.prime.SetLeakPreventionsResults.error_code.md#ansys.meshing.prime.SetLeakPreventionsResults.error_code)   | Error code associated with the set leak preventions.   |
| [`SetLeakPreventionsResults.ids`](ansys.meshing.prime.SetLeakPreventionsResults.ids.md#ansys.meshing.prime.SetLeakPreventionsResults.ids)                        | Ids of added leak prevention controls.                 |
<!-- vale on -->