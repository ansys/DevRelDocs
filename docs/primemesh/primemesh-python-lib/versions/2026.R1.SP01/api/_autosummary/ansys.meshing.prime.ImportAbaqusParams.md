# ImportAbaqusParams

<a id="ansys.meshing.prime.ImportAbaqusParams"></a>

### *class* ansys.meshing.prime.ImportAbaqusParams(model=None, initial_counters=None, json_data=None, \*\*kwargs)

Parameters for importing Abaqus solver input files.

**Parameters:**

  **model: Model**

  Model to create a `ImportAbaqusParams` object with default parameters.

  **initial_counters: Dict[str, Union[str, int, float, bool]], optional**

  Parameter to specify the starting counter values for import
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**

  JSON dictionary to create a `ImportAbaqusParams` object with provided parameters.

### Examples

```pycon
>>> import_abaqus_params = prime.ImportAbaqusParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`ImportAbaqusParams.print_default`](ansys.meshing.prime.ImportAbaqusParams.print_default.md#ansys.meshing.prime.ImportAbaqusParams.print_default)()   | Print the default values of `ImportAbaqusParams` object.   |
| [`ImportAbaqusParams.set_default`](ansys.meshing.prime.ImportAbaqusParams.set_default.md#ansys.meshing.prime.ImportAbaqusParams.set_default)([...])    | Set the default values of the `ImportAbaqusParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ImportAbaqusParams.initial_counters`](ansys.meshing.prime.ImportAbaqusParams.initial_counters.md#ansys.meshing.prime.ImportAbaqusParams.initial_counters)   | Parameter to specify the starting counter values for import   |
<!-- vale on -->