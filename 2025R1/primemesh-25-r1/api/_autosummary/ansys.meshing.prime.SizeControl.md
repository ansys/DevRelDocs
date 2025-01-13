# SizeControl

<a id="ansys.meshing.prime.SizeControl"></a>

### *class* ansys.meshing.prime.SizeControl(model, id, object_id, name, local=False)

Size control is used to compute the size field.

The size field is computed based on the size control defined.
Different type of size controls provide control over how the mesh size is distributed on a
surface or within the volume.

* **Parameters:**
  **model**
  : Server model to create SizeControl object.

  **id**
  : Id of the SizeControl.

  **object_id**
  : Object id of the SizeControl.

  **name**
  : Name of the SizeControl..

  **local**
  : Unused. The default is `False`.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| [`SizeControl.get_boi_sizing_params`](ansys.meshing.prime.SizeControl.get_boi_sizing_params.md#ansys.meshing.prime.SizeControl.get_boi_sizing_params)()                         | Get the body of influence sizing parameters of size control.                              |
| [`SizeControl.get_curvature_sizing_params`](ansys.meshing.prime.SizeControl.get_curvature_sizing_params.md#ansys.meshing.prime.SizeControl.get_curvature_sizing_params)()       | Get the curvature sizing parameters of size control.                                      |
| [`SizeControl.get_hard_sizing_params`](ansys.meshing.prime.SizeControl.get_hard_sizing_params.md#ansys.meshing.prime.SizeControl.get_hard_sizing_params)()                      | Get the hard sizing parameters of size control.                                           |
| [`SizeControl.get_meshed_sizing_params`](ansys.meshing.prime.SizeControl.get_meshed_sizing_params.md#ansys.meshing.prime.SizeControl.get_meshed_sizing_params)()                | Get the meshed sizing parameters of size control.                                         |
| [`SizeControl.get_proximity_sizing_params`](ansys.meshing.prime.SizeControl.get_proximity_sizing_params.md#ansys.meshing.prime.SizeControl.get_proximity_sizing_params)()       | Get the proximity sizing parameters of size control.                                      |
| [`SizeControl.get_scope`](ansys.meshing.prime.SizeControl.get_scope.md#ansys.meshing.prime.SizeControl.get_scope)()                                                             | Get the scope used by size control to evaluate entities.                                  |
| [`SizeControl.get_sizing_type`](ansys.meshing.prime.SizeControl.get_sizing_type.md#ansys.meshing.prime.SizeControl.get_sizing_type)()                                           | Gets the sizing type for the size control.                                                |
| [`SizeControl.get_soft_sizing_params`](ansys.meshing.prime.SizeControl.get_soft_sizing_params.md#ansys.meshing.prime.SizeControl.get_soft_sizing_params)()                      | Get the soft sizing parameters of size control.                                           |
| [`SizeControl.get_summary`](ansys.meshing.prime.SizeControl.get_summary.md#ansys.meshing.prime.SizeControl.get_summary)(params)                                                 | Get the size control summary along with the evaluated scope for the provided parameters.. |
| [`SizeControl.set_boi_sizing_params`](ansys.meshing.prime.SizeControl.set_boi_sizing_params.md#ansys.meshing.prime.SizeControl.set_boi_sizing_params)(params)                   | Set the body of influence sizing parameters to compute volumetric size field.             |
| [`SizeControl.set_curvature_sizing_params`](ansys.meshing.prime.SizeControl.set_curvature_sizing_params.md#ansys.meshing.prime.SizeControl.set_curvature_sizing_params)(params) | Set the curvature sizing parameters to compute volumetric size field.                     |
| [`SizeControl.set_hard_sizing_params`](ansys.meshing.prime.SizeControl.set_hard_sizing_params.md#ansys.meshing.prime.SizeControl.set_hard_sizing_params)(params)                | Set the hard sizing parameters to compute volumetric size field.                          |
| [`SizeControl.set_meshed_sizing_params`](ansys.meshing.prime.SizeControl.set_meshed_sizing_params.md#ansys.meshing.prime.SizeControl.set_meshed_sizing_params)(params)          | Set the meshed sizing parameters to compute volumetric size field.                        |
| [`SizeControl.set_proximity_sizing_params`](ansys.meshing.prime.SizeControl.set_proximity_sizing_params.md#ansys.meshing.prime.SizeControl.set_proximity_sizing_params)(params) | Set the proximity sizing parameters to compute volumetric size field.                     |
| [`SizeControl.set_scope`](ansys.meshing.prime.SizeControl.set_scope.md#ansys.meshing.prime.SizeControl.set_scope)(scope)                                                        | Set the scope for size control to evaluate.                                               |
| [`SizeControl.set_soft_sizing_params`](ansys.meshing.prime.SizeControl.set_soft_sizing_params.md#ansys.meshing.prime.SizeControl.set_soft_sizing_params)(params)                | Set the soft sizing parameters to compute volumetric size field.                          |
| [`SizeControl.set_suggested_name`](ansys.meshing.prime.SizeControl.set_suggested_name.md#ansys.meshing.prime.SizeControl.set_suggested_name)(name)                              | Set the unique name for the size control to a suggested name.                             |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------|-------------------------------|
| [`SizeControl.id`](ansys.meshing.prime.SizeControl.id.md#ansys.meshing.prime.SizeControl.id)       | Get the id of SizeControl.    |
| [`SizeControl.name`](ansys.meshing.prime.SizeControl.name.md#ansys.meshing.prime.SizeControl.name) | Get the name of size control. |

<a id="examples-using-sizecontrol"></a>

## Examples using SizeControl

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
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
