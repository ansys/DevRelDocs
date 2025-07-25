# VolumetricScaffolderParams

<a id="ansys.meshing.prime.VolumetricScaffolderParams"></a>

### *class* ansys.meshing.prime.VolumetricScaffolderParams(model=None, absolute_dist_tol=None, only_check_exact_overlaps=None, json_data=None, \*\*kwargs)

Parameters to control delete shadowed topofaces operation.

* **Parameters:**

  **model: Model**
  : Model to create a `VolumetricScaffolderParams` object with default parameters.

  **absolute_dist_tol: float, optional**
  : Specify distance tolerance between overlapping faces.

  **only_check_exact_overlaps: bool, optional**
  : Check only for fully overlapping topofaces when true.

  **json_data: dict, optional**
  : JSON dictionary to create a `VolumetricScaffolderParams` object with provided parameters.

### Examples

```pycon
>>> volumetric_scaffolder_params = prime.VolumetricScaffolderParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`VolumetricScaffolderParams.print_default`](ansys.meshing.prime.VolumetricScaffolderParams.print_default.md#ansys.meshing.prime.VolumetricScaffolderParams.print_default)()   | Print the default values of `VolumetricScaffolderParams` object.   |
| [`VolumetricScaffolderParams.set_default`](ansys.meshing.prime.VolumetricScaffolderParams.set_default.md#ansys.meshing.prime.VolumetricScaffolderParams.set_default)([...])    | Set the default values of the `VolumetricScaffolderParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`VolumetricScaffolderParams.absolute_dist_tol`](ansys.meshing.prime.VolumetricScaffolderParams.absolute_dist_tol.md#ansys.meshing.prime.VolumetricScaffolderParams.absolute_dist_tol)                         | Specify distance tolerance between overlapping faces.   |
| [`VolumetricScaffolderParams.only_check_exact_overlaps`](ansys.meshing.prime.VolumetricScaffolderParams.only_check_exact_overlaps.md#ansys.meshing.prime.VolumetricScaffolderParams.only_check_exact_overlaps) | Check only for fully overlapping topofaces when true.   |
<!-- vale on -->