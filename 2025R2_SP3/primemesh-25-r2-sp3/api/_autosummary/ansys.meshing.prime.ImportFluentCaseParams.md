# ImportFluentCaseParams

<a id="ansys.meshing.prime.ImportFluentCaseParams"></a>

### *class* ansys.meshing.prime.ImportFluentCaseParams(model=None, append=None, json_data=None, \*\*kwargs)

Parameters to import fluent case file.

* **Parameters:**

  **model: Model**
  : Model to create a `ImportFluentCaseParams` object with default parameters.

  **append: bool, optional**
  : Option to append imported case instead of resetting model to imported case.

  **json_data: dict, optional**
  : JSON dictionary to create a `ImportFluentCaseParams` object with provided parameters.

### Examples

```pycon
>>> import_fluent_case_params = prime.ImportFluentCaseParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`ImportFluentCaseParams.print_default`](ansys.meshing.prime.ImportFluentCaseParams.print_default.md#ansys.meshing.prime.ImportFluentCaseParams.print_default)()   | Print the default values of `ImportFluentCaseParams` object.   |
| [`ImportFluentCaseParams.set_default`](ansys.meshing.prime.ImportFluentCaseParams.set_default.md#ansys.meshing.prime.ImportFluentCaseParams.set_default)([append]) | Set the default values of the `ImportFluentCaseParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`ImportFluentCaseParams.append`](ansys.meshing.prime.ImportFluentCaseParams.append.md#ansys.meshing.prime.ImportFluentCaseParams.append)   | Option to append imported case instead of resetting model to imported case.   |
<!-- vale on -->