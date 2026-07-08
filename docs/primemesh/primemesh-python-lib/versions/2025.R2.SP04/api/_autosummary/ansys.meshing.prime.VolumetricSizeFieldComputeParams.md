# VolumetricSizeFieldComputeParams

<a id="ansys.meshing.prime.VolumetricSizeFieldComputeParams"></a>

### *class* ansys.meshing.prime.VolumetricSizeFieldComputeParams(model=None, enable_multi_threading=None, enable_periodicity=None, periodic_params=None, growth_rate_lower_bound=None, json_data=None, \*\*kwargs)

Parameters associated with the compute volumetric size field operation.

* **Parameters:**

  **model: Model**
  : Model to create a `VolumetricSizeFieldComputeParams` object with default parameters.

  **enable_multi_threading: bool, optional**
  : Option to compute volumetric size field in parallel using multithreads.

  **enable_periodicity: bool, optional**
  : Option to enable periodic size field computations.

  **periodic_params: SFPeriodicParams, optional**
  : Periodic parameters to compute the size field.

  **growth_rate_lower_bound: float, optional**
  : Lower bound for growth rate.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `VolumetricSizeFieldComputeParams` object with provided parameters.

### Examples

```pycon
>>> volumetric_size_field_compute_params = prime.VolumetricSizeFieldComputeParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`VolumetricSizeFieldComputeParams.print_default`](ansys.meshing.prime.VolumetricSizeFieldComputeParams.print_default.md#ansys.meshing.prime.VolumetricSizeFieldComputeParams.print_default)()   | Print the default values of `VolumetricSizeFieldComputeParams` object.   |
| [`VolumetricSizeFieldComputeParams.set_default`](ansys.meshing.prime.VolumetricSizeFieldComputeParams.set_default.md#ansys.meshing.prime.VolumetricSizeFieldComputeParams.set_default)([...])    | Set the default values of the `VolumetricSizeFieldComputeParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`VolumetricSizeFieldComputeParams.enable_multi_threading`](ansys.meshing.prime.VolumetricSizeFieldComputeParams.enable_multi_threading.md#ansys.meshing.prime.VolumetricSizeFieldComputeParams.enable_multi_threading)    | Option to compute volumetric size field in parallel using multithreads.   |
| [`VolumetricSizeFieldComputeParams.enable_periodicity`](ansys.meshing.prime.VolumetricSizeFieldComputeParams.enable_periodicity.md#ansys.meshing.prime.VolumetricSizeFieldComputeParams.enable_periodicity)                | Option to enable periodic size field computations.                        |
| [`VolumetricSizeFieldComputeParams.growth_rate_lower_bound`](ansys.meshing.prime.VolumetricSizeFieldComputeParams.growth_rate_lower_bound.md#ansys.meshing.prime.VolumetricSizeFieldComputeParams.growth_rate_lower_bound) | Lower bound for growth rate.                                              |
| [`VolumetricSizeFieldComputeParams.periodic_params`](ansys.meshing.prime.VolumetricSizeFieldComputeParams.periodic_params.md#ansys.meshing.prime.VolumetricSizeFieldComputeParams.periodic_params)                         | Periodic parameters to compute the size field.                            |
<!-- vale on -->