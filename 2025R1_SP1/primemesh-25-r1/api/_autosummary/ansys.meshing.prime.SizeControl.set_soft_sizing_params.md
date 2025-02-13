# set_soft_sizing_params

<a id="ansys.meshing.prime.SizeControl.set_soft_sizing_params"></a>

#### SizeControl.set_soft_sizing_params(params)

Set the soft sizing parameters to compute volumetric size field.

* **Parameters:**
  **params**
  : Parameters that enables you to set the maximum size on scoped face zonelets.
* **Returns:**
  :

  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)
  : Return the SetSizingResults.
* **Return type:**
  [`SetSizingResults`](ansys.meshing.prime.SetSizingResults.md#ansys.meshing.prime.SetSizingResults)

### Examples

```pycon
>>> size_control.set_soft_sizing_params(
>>>                  prime.SoftSizingParams(model=model,
>>>                  max = 1.0, growth_rate = 1.2))
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-sizecontrol-set-soft-sizing-params"></a>

## Examples using SizeControl.set_soft_sizing_params

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
