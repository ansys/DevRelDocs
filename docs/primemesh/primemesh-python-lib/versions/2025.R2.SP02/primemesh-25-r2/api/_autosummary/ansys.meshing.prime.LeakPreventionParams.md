# LeakPreventionParams

<a id="ansys.meshing.prime.LeakPreventionParams"></a>

### *class* ansys.meshing.prime.LeakPreventionParams(model=None, material_points=None, scope=None, max_hole_size=None, n_expansion_layers=None, json_data=None, \*\*kwargs)

LeakPreventionParams defines leakage prevention control parameters for wrapper.

* **Parameters:**

  **model: Model**
  : Model to create a `LeakPreventionParams` object with default parameters.

  **material_points: List[str], optional**
  : Material points used for leak prevention control.

  **scope: ScopeDefinition, optional**
  : Scope used for leak prevention control.

  **max_hole_size: float, optional**
  : Maximum hole size to prevent leakage into region.

  **n_expansion_layers: int, optional**
  : Number of layers to expand leaking region.

  **json_data: dict, optional**
  : JSON dictionary to create a `LeakPreventionParams` object with provided parameters.

### Examples

```pycon
>>> leak_prevention_params = prime.LeakPreventionParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`LeakPreventionParams.print_default`](ansys.meshing.prime.LeakPreventionParams.print_default.md#ansys.meshing.prime.LeakPreventionParams.print_default)()   | Print the default values of `LeakPreventionParams` object.   |
| [`LeakPreventionParams.set_default`](ansys.meshing.prime.LeakPreventionParams.set_default.md#ansys.meshing.prime.LeakPreventionParams.set_default)([...])    | Set the default values of the `LeakPreventionParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| [`LeakPreventionParams.material_points`](ansys.meshing.prime.LeakPreventionParams.material_points.md#ansys.meshing.prime.LeakPreventionParams.material_points)          | Material points used for leak prevention control.   |
| [`LeakPreventionParams.max_hole_size`](ansys.meshing.prime.LeakPreventionParams.max_hole_size.md#ansys.meshing.prime.LeakPreventionParams.max_hole_size)                | Maximum hole size to prevent leakage into region.   |
| [`LeakPreventionParams.n_expansion_layers`](ansys.meshing.prime.LeakPreventionParams.n_expansion_layers.md#ansys.meshing.prime.LeakPreventionParams.n_expansion_layers) | Number of layers to expand leaking region.          |
| [`LeakPreventionParams.scope`](ansys.meshing.prime.LeakPreventionParams.scope.md#ansys.meshing.prime.LeakPreventionParams.scope)                                        | Scope used for leak prevention control.             |
<!-- vale on -->