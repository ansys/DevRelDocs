# VolumetricSizeFieldComputeResults

<a id="ansys.meshing.prime.VolumetricSizeFieldComputeResults"></a>

### *class* ansys.meshing.prime.VolumetricSizeFieldComputeResults(model=None, error_code=None, size_field_id=None, json_data=None, \*\*kwargs)

Results associated with the compute volumetric size field operation.

* **Parameters:**

  **model: Model**
  : Model to create a `VolumetricSizeFieldComputeResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the compute volumetric size field operation.

  **size_field_id: int, optional**
  : Id of the computed size field.

  **json_data: dict, optional**
  : JSON dictionary to create a `VolumetricSizeFieldComputeResults` object with provided parameters.

### Examples

```pycon
>>> volumetric_size_field_compute_results = prime.VolumetricSizeFieldComputeResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`VolumetricSizeFieldComputeResults.print_default`](ansys.meshing.prime.VolumetricSizeFieldComputeResults.print_default.md#ansys.meshing.prime.VolumetricSizeFieldComputeResults.print_default)()   | Print the default values of `VolumetricSizeFieldComputeResults` object.   |
| [`VolumetricSizeFieldComputeResults.set_default`](ansys.meshing.prime.VolumetricSizeFieldComputeResults.set_default.md#ansys.meshing.prime.VolumetricSizeFieldComputeResults.set_default)([...])    | Set the default values of the `VolumetricSizeFieldComputeResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`VolumetricSizeFieldComputeResults.error_code`](ansys.meshing.prime.VolumetricSizeFieldComputeResults.error_code.md#ansys.meshing.prime.VolumetricSizeFieldComputeResults.error_code)          | Error code associated with the compute volumetric size field operation.   |
| [`VolumetricSizeFieldComputeResults.size_field_id`](ansys.meshing.prime.VolumetricSizeFieldComputeResults.size_field_id.md#ansys.meshing.prime.VolumetricSizeFieldComputeResults.size_field_id) | Id of the computed size field.                                            |
<!-- vale on -->