# set_curvature_sizing_params

<a id="ansys.meshing.prime.SizeControl.set_curvature_sizing_params"></a>

#### SizeControl.set_curvature_sizing_params(params)

Set the curvature sizing parameters to compute volumetric size field.

* **Parameters:**
  **params**
  : Parameters that enables you to set the normal angle as the maximum allowable angle at which one element edge may span.
* **Returns:**
  :

  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)
  : Return the SetSizingResults.
* **Return type:**
  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)

### Examples

```pycon
>>> size_control.set_curvature_sizing_params(
>>>                  prime.CurvatureSizingParams(model=model,
>>>                  min = 0.1, max = 1.0, growth_rate = 1.2,
>>>                  normal_angle = 18))
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-sizecontrol-set-curvature-sizing-params"></a>

## Examples using SizeControl.set_curvature_sizing_params

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
