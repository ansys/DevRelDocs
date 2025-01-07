# PrismControl

<a id="ansys.meshing.prime.PrismControl"></a>

### *class* ansys.meshing.prime.PrismControl(model, id, object_id, name)

PrismControl allows you to generate prisms.

PrismControl allows you to control generation of prisms. Controls include setting the face scope, volume scope and growth parameters.

* **Parameters:**
  **model**
  : Server model to create PrismControl object.

  **id**
  : Id of the PrismControl.

  **object_id**
  : Object id of the PrismControl.

  **name**
  : Name of the PrismControl.

<!-- !! processed by numpydoc !! -->

### Methods

| [`PrismControl.get_surface_scope`](ansys.meshing.prime.PrismControl.get_surface_scope.md#ansys.meshing.prime.PrismControl.get_surface_scope)()         | Gets the surface control scope.          |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|
| [`PrismControl.get_volume_scope`](ansys.meshing.prime.PrismControl.get_volume_scope.md#ansys.meshing.prime.PrismControl.get_volume_scope)()            | Gets the volume control scope.           |
| [`PrismControl.set_growth_params`](ansys.meshing.prime.PrismControl.set_growth_params.md#ansys.meshing.prime.PrismControl.set_growth_params)(...)      | Set growth parameters for prism control. |
| [`PrismControl.set_surface_scope`](ansys.meshing.prime.PrismControl.set_surface_scope.md#ansys.meshing.prime.PrismControl.set_surface_scope)(entities) | Sets the surface control scope.          |
| [`PrismControl.set_volume_scope`](ansys.meshing.prime.PrismControl.set_volume_scope.md#ansys.meshing.prime.PrismControl.set_volume_scope)(entities)    | Sets the volume control scope.           |

### Attributes

| [`PrismControl.id`](ansys.meshing.prime.PrismControl.id.md#ansys.meshing.prime.PrismControl.id)       | Get the id of PrismControl.   |
|-------------------------------------------------------------------------------------------------------|-------------------------------|
| [`PrismControl.name`](ansys.meshing.prime.PrismControl.name.md#ansys.meshing.prime.PrismControl.name) | Get the name of PrismControl. |

<a id="examples-using-prismcontrol"></a>

## Examples using PrismControl

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
