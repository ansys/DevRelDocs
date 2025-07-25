# ShellBLParams

<a id="ansys.meshing.prime.ShellBLParams"></a>

### *class* ansys.meshing.prime.ShellBLParams(model=None, json_data=None, \*\*kwargs)

Parameters used to generate ShellBL.

* **Parameters:**

  **model: Model**
  : Model to create a `ShellBLParams` object with default parameters.

  **json_data: dict, optional**
  : JSON dictionary to create a `ShellBLParams` object with provided parameters.

### Examples

```pycon
>>> shell_blparams = prime.ShellBLParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`ShellBLParams.print_default`](ansys.meshing.prime.ShellBLParams.print_default.md#ansys.meshing.prime.ShellBLParams.print_default)()   | Print the default values of `ShellBLParams` object.   |
| [`ShellBLParams.set_default`](ansys.meshing.prime.ShellBLParams.set_default.md#ansys.meshing.prime.ShellBLParams.set_default)()         | Set the default values of the `ShellBLParams` object. |
<!-- vale on -->