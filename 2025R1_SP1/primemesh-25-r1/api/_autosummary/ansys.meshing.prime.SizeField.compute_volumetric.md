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

<a id="examples-using-sizefield-compute-volumetric"></a>

## Examples using SizeField.compute_volumetric

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
