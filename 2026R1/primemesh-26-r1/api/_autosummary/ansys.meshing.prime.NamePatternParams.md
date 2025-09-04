<!-- vale off -->

<a id="namepatternparams"></a>

# NamePatternParams

<a id="ansys.meshing.prime.NamePatternParams"></a>

### *class* ansys.meshing.prime.NamePatternParams(model=None, json_data=None, \*\*kwargs)

Parameters to be used to match name pattern with names.

* **Parameters:**

  **model: Model**
  : Model to create a `NamePatternParams` object with default parameters.

  **json_data: dict, optional**
  : JSON dictionary to create a `NamePatternParams` object with provided parameters.

### Examples

```pycon
>>> name_pattern_params = prime.NamePatternParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`NamePatternParams.print_default`](ansys.meshing.prime.NamePatternParams.print_default.md#ansys.meshing.prime.NamePatternParams.print_default)()   | Print the default values of `NamePatternParams` object.   |
| [`NamePatternParams.set_default`](ansys.meshing.prime.NamePatternParams.set_default.md#ansys.meshing.prime.NamePatternParams.set_default)()         | Set the default values of the `NamePatternParams` object. |
<!-- vale on -->