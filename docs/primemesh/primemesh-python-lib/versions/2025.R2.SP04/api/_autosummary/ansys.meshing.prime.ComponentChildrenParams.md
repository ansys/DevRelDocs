# ComponentChildrenParams

<a id="ansys.meshing.prime.ComponentChildrenParams"></a>

### *class* ansys.meshing.prime.ComponentChildrenParams(model=None, json_data=None, \*\*kwargs)

Parameters associated with querying child components.

* **Parameters:**

  **model: Model**
  : Model to create a `ComponentChildrenParams` object with default parameters.

  **json_data: dict, optional**
  : JSON dictionary to create a `ComponentChildrenParams` object with provided parameters.

### Examples

```pycon
>>> component_children_params = prime.ComponentChildrenParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [`ComponentChildrenParams.print_default`](ansys.meshing.prime.ComponentChildrenParams.print_default.md#ansys.meshing.prime.ComponentChildrenParams.print_default)()   | Print the default values of `ComponentChildrenParams` object.   |
| [`ComponentChildrenParams.set_default`](ansys.meshing.prime.ComponentChildrenParams.set_default.md#ansys.meshing.prime.ComponentChildrenParams.set_default)()         | Set the default values of the `ComponentChildrenParams` object. |
<!-- vale on -->