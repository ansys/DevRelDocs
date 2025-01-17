# GlobalSizingParams

<a id="ansys.meshing.prime.GlobalSizingParams"></a>

### *class* ansys.meshing.prime.GlobalSizingParams(model=None, min=None, max=None, growth_rate=None, json_data=None, \*\*kwargs)

Global sizing parameters.

* **Parameters:**
  **model: Model**
  : Model to create a `GlobalSizingParams` object with default parameters.

  **min: float, optional**
  : Minimum value of global sizing parameters.

  **max: float, optional**
  : Maximum value of global sizing parameters.

  **growth_rate: float, optional**
  : Growth rate of global sizing parameters.

  **json_data: dict, optional**
  : JSON dictionary to create a `GlobalSizingParams` object with provided parameters.

### Examples

```pycon
>>> global_sizing_params = prime.GlobalSizingParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| Name | Description |
| [`GlobalSizingParams.print_default`](ansys.meshing.prime.GlobalSizingParams.print_default.md#ansys.meshing.prime.GlobalSizingParams.print_default)()          | Print the default values of `GlobalSizingParams` object.   |
| [`GlobalSizingParams.set_default`](ansys.meshing.prime.GlobalSizingParams.set_default.md#ansys.meshing.prime.GlobalSizingParams.set_default)([min, max, ...]) | Set the default values of the `GlobalSizingParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| Name | Description |
| [`GlobalSizingParams.growth_rate`](ansys.meshing.prime.GlobalSizingParams.growth_rate.md#ansys.meshing.prime.GlobalSizingParams.growth_rate)   | Growth rate of global sizing parameters.   |
| [`GlobalSizingParams.max`](ansys.meshing.prime.GlobalSizingParams.max.md#ansys.meshing.prime.GlobalSizingParams.max)                           | Maximum value of global sizing parameters. |
| [`GlobalSizingParams.min`](ansys.meshing.prime.GlobalSizingParams.min.md#ansys.meshing.prime.GlobalSizingParams.min)                           | Minimum value of global sizing parameters. |

<a id="examples-using-globalsizingparams"></a>

## Examples using GlobalSizingParams

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a pipe T-section for both structural thermal and fluid flow simulation.">  <div class="sphx-glr-thumbnail-title">Mesh a pipe T-section for structural thermal and fluid flow analysis</div>
</div>
* [Mesh a pipe T-section for structural thermal and fluid flow analysis](../../examples/gallery_examples/gallery/03_lucid_pipe_tee.md#sphx-glr-examples-gallery-examples-gallery-03-lucid-pipe-tee-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a printed circuit board with mainly hexahedral elements for structural thermal simulation using the volume sweeper.">  <div class="sphx-glr-thumbnail-title">Mesh a PCB for structural thermal analysis</div>
</div>
* [Mesh a PCB for structural thermal analysis](../../examples/gallery_examples/gallery/05_pcb_stacker.md#sphx-glr-examples-gallery-examples-gallery-05-pcb-stacker-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to set the base mesh size and number of layers for each solid in a generic PCB geometry and then generate a mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a generic PCB geometry with multiple hexa layers</div>
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
