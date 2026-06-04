<!-- vale off -->

<a id="contactpreventionparams"></a>

# ContactPreventionParams

<a id="ansys.meshing.prime.ContactPreventionParams"></a>

### *class* ansys.meshing.prime.ContactPreventionParams(model=None, source_scope=None, target_scope=None, size=None, json_data=None, \*\*kwargs)

ContactPreventionParams defines contact prevention control parameters for wrapper.

* **Parameters:**

  **model: Model**
  : Model to create a `ContactPreventionParams` object with default parameters.

  **source_scope: ScopeDefinition, optional**
  : Source scope used for contact prevention control.

  **target_scope: ScopeDefinition, optional**
  : Target scope used for contact prevention control.

  **size: float, optional**
  : Minimum gap size (gap/4) to resolve contact between source and target.

  **json_data: dict, optional**
  : JSON dictionary to create a `ContactPreventionParams` object with provided parameters.

### Examples

```pycon
>>> contact_prevention_params = prime.ContactPreventionParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [`ContactPreventionParams.print_default`](ansys.meshing.prime.ContactPreventionParams.print_default.md#ansys.meshing.prime.ContactPreventionParams.print_default)()   | Print the default values of `ContactPreventionParams` object.   |
| [`ContactPreventionParams.set_default`](ansys.meshing.prime.ContactPreventionParams.set_default.md#ansys.meshing.prime.ContactPreventionParams.set_default)([...])    | Set the default values of the `ContactPreventionParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`ContactPreventionParams.size`](ansys.meshing.prime.ContactPreventionParams.size.md#ansys.meshing.prime.ContactPreventionParams.size)                         | Minimum gap size (gap/4) to resolve contact between source and target.   |
| [`ContactPreventionParams.source_scope`](ansys.meshing.prime.ContactPreventionParams.source_scope.md#ansys.meshing.prime.ContactPreventionParams.source_scope) | Source scope used for contact prevention control.                        |
| [`ContactPreventionParams.target_scope`](ansys.meshing.prime.ContactPreventionParams.target_scope.md#ansys.meshing.prime.ContactPreventionParams.target_scope) | Target scope used for contact prevention control.                        |
<!-- vale on -->