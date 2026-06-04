# compute_volumetric

<a id="ansys.meshing.prime.SizeField.compute_volumetric"></a>

#### SizeField.compute_volumetric(size_control_ids, volumetric_sizefield_params)

Computes the volumetric size field using given size control ids.

* **Parameters:**

  **size_control_ids**
  : Ids of size controls.

* **Return type:**

  [`VolumetricSizeFieldComputeResults`](ansys.meshing.prime.VolumetricSizeFieldComputeResults.md#ansys.meshing.prime.VolumetricSizeFieldComputeResults)

### Examples

```pycon
>>> size_field.compute_volumetric(
>>>           [size_control.id for size_control in model.control_data.size_controls], volumetric_sizefield_params))
```

<!-- !! processed by numpydoc !! -->
