# CreateCapParams

<a id="ansys.meshing.prime.CreateCapParams"></a>

### *class* ansys.meshing.prime.CreateCapParams(model=None, json_data=None, \*\*kwargs)

Parameters to create cap on face zonelets.

* **Parameters:**

  **model: Model**
  : Model to create a `CreateCapParams` object with default parameters.

  **json_data: dict, optional**
  : JSON dictionary to create a `CreateCapParams` object with provided parameters.

### Examples

```pycon
>>> create_cap_params = prime.CreateCapParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`CreateCapParams.print_default`](ansys.meshing.prime.CreateCapParams.print_default.md#ansys.meshing.prime.CreateCapParams.print_default)()   | Print the default values of `CreateCapParams` object.   |
| [`CreateCapParams.set_default`](ansys.meshing.prime.CreateCapParams.set_default.md#ansys.meshing.prime.CreateCapParams.set_default)()         | Set the default values of the `CreateCapParams` object. |
<!-- vale on -->