# PrismParams

<a id="ansys.meshing.prime.PrismParams"></a>

### *class* ansys.meshing.prime.PrismParams(model=None, stair_step=None, no_imprint_zonelets=None, json_data=None, \*\*kwargs)

Parameters to control prism mesh generation.

* **Parameters:**

  **model: Model**
  : Model to create a `PrismParams` object with default parameters.

  **stair_step: PrismStairStep, optional**
  : Prism stairstep parameters.

  **no_imprint_zonelets: Iterable[int], optional**
  : Option to specify zonelets to skip prism imprint.

  **json_data: dict, optional**
  : JSON dictionary to create a `PrismParams` object with provided parameters.

### Examples

```pycon
>>> prism_params = prime.PrismParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| [`PrismParams.print_default`](ansys.meshing.prime.PrismParams.print_default.md#ansys.meshing.prime.PrismParams.print_default)()            | Print the default values of `PrismParams` object.   |
| [`PrismParams.set_default`](ansys.meshing.prime.PrismParams.set_default.md#ansys.meshing.prime.PrismParams.set_default)([stair_step, ...]) | Set the default values of the `PrismParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| [`PrismParams.no_imprint_zonelets`](ansys.meshing.prime.PrismParams.no_imprint_zonelets.md#ansys.meshing.prime.PrismParams.no_imprint_zonelets)   | Option to specify zonelets to skip prism imprint.   |
| [`PrismParams.stair_step`](ansys.meshing.prime.PrismParams.stair_step.md#ansys.meshing.prime.PrismParams.stair_step)                              | Prism stairstep parameters.                         |
<!-- vale on -->