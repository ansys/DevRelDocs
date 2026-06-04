# ScopeZoneletParams

<a id="ansys.meshing.prime.ScopeZoneletParams"></a>

### *class* ansys.meshing.prime.ScopeZoneletParams(model=None, json_data=None, \*\*kwargs)

Parameters used to get the scoped face or edge zonelets.

* **Parameters:**

  **model: Model**
  : Model to create a `ScopeZoneletParams` object with default parameters.

  **json_data: dict, optional**
  : JSON dictionary to create a `ScopeZoneletParams` object with provided parameters.

### Examples

```pycon
>>> scope_zonelet_params = prime.ScopeZoneletParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`ScopeZoneletParams.print_default`](ansys.meshing.prime.ScopeZoneletParams.print_default.md#ansys.meshing.prime.ScopeZoneletParams.print_default)()   | Print the default values of `ScopeZoneletParams` object.   |
| [`ScopeZoneletParams.set_default`](ansys.meshing.prime.ScopeZoneletParams.set_default.md#ansys.meshing.prime.ScopeZoneletParams.set_default)()         | Set the default values of the `ScopeZoneletParams` object. |
<!-- vale on -->