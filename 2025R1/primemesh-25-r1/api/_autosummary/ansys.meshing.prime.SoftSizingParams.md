# SoftSizingParams

<a id="ansys.meshing.prime.SoftSizingParams"></a>

### *class* ansys.meshing.prime.SoftSizingParams(model=None, max=None, growth_rate=None, json_data=None, \*\*kwargs)

Size field computed using soft size control enables you to set the maximum size on the scoped zonelets .

When the soft sizing is computed for edges or faces, the size will be affected by size computed using other controls.
The minimum size on the zonelet will be determined based on the influence of other size controls,
else a uniform size will be maintained.

* **Parameters:**
  **model: Model**
  : Model to create a `SoftSizingParams` object with default parameters.

  **max: float, optional**
  : Maximum size used for computing edge and face size using soft size control.

  **growth_rate: float, optional**
  : Growth rate used for transitioning from one element size to neighbor element size.

  **json_data: dict, optional**
  : JSON dictionary to create a `SoftSizingParams` object with provided parameters.

### Examples

```pycon
>>> soft_sizing_params = prime.SoftSizingParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`SoftSizingParams.print_default`](ansys.meshing.prime.SoftSizingParams.print_default.md#ansys.meshing.prime.SoftSizingParams.print_default)()             | Print the default values of `SoftSizingParams` object.   |
| [`SoftSizingParams.set_default`](ansys.meshing.prime.SoftSizingParams.set_default.md#ansys.meshing.prime.SoftSizingParams.set_default)([max, growth_rate]) | Set the default values of the `SoftSizingParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`SoftSizingParams.growth_rate`](ansys.meshing.prime.SoftSizingParams.growth_rate.md#ansys.meshing.prime.SoftSizingParams.growth_rate)   | Growth rate used for transitioning from one element size to neighbor element size.   |
| [`SoftSizingParams.max`](ansys.meshing.prime.SoftSizingParams.max.md#ansys.meshing.prime.SoftSizingParams.max)                           | Maximum size used for computing edge and face size using soft size control.          |

<a id="examples-using-softsizingparams"></a>

## Examples using SoftSizingParams

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to set the base mesh size and number of layers for each solid in a generic PCB geometry and then generate a mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a generic PCB geometry with multiple hexa layers</div>
</div>
* [Mesh a generic PCB geometry with multiple hexa layers](../../examples/gallery_examples/gallery/09_multi_layer_quad_mesh_pcb.md#sphx-glr-examples-gallery-examples-gallery-09-multi-layer-quad-mesh-pcb-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to create a contact patch for use with wrapping to avoid meshing into a narrow contact region between two objects.">  <div class="sphx-glr-thumbnail-title">Create a contact patch for wrapping between a wheel and ground interface</div>
</div>
* [Create a contact patch for wrapping between a wheel and ground interface](../../examples/gallery_examples/gallery/10_wheel_ground_contact_patch.md#sphx-glr-examples-gallery-examples-gallery-10-wheel-ground-contact-patch-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
