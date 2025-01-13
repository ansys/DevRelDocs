# DeleteTopoEntitiesParams

<a id="ansys.meshing.prime.DeleteTopoEntitiesParams"></a>

### *class* ansys.meshing.prime.DeleteTopoEntitiesParams(model=None, delete_geom_zonelets=None, delete_mesh_zonelets=None, json_data=None, \*\*kwargs)

Parameters to control delete topoentities.

* **Parameters:**
  **model: Model**
  : Model to create a `DeleteTopoEntitiesParams` object with default parameters.

  **delete_geom_zonelets: bool, optional**
  : Option to delete geometry zonelets of topology.

  **delete_mesh_zonelets: bool, optional**
  : Option to delete mesh zonelets of topology.

  **json_data: dict, optional**
  : JSON dictionary to create a `DeleteTopoEntitiesParams` object with provided parameters.

### Examples

```pycon
>>> delete_topo_entities_params = prime.DeleteTopoEntitiesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`DeleteTopoEntitiesParams.print_default`](ansys.meshing.prime.DeleteTopoEntitiesParams.print_default.md#ansys.meshing.prime.DeleteTopoEntitiesParams.print_default)()   | Print the default values of `DeleteTopoEntitiesParams` object.   |
| [`DeleteTopoEntitiesParams.set_default`](ansys.meshing.prime.DeleteTopoEntitiesParams.set_default.md#ansys.meshing.prime.DeleteTopoEntitiesParams.set_default)([...])    | Set the default values of the `DeleteTopoEntitiesParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`DeleteTopoEntitiesParams.delete_geom_zonelets`](ansys.meshing.prime.DeleteTopoEntitiesParams.delete_geom_zonelets.md#ansys.meshing.prime.DeleteTopoEntitiesParams.delete_geom_zonelets)   | Option to delete geometry zonelets of topology.   |
| [`DeleteTopoEntitiesParams.delete_mesh_zonelets`](ansys.meshing.prime.DeleteTopoEntitiesParams.delete_mesh_zonelets.md#ansys.meshing.prime.DeleteTopoEntitiesParams.delete_mesh_zonelets)   | Option to delete mesh zonelets of topology.       |

<a id="examples-using-deletetopoentitiesparams"></a>

## Examples using DeleteTopoEntitiesParams

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example shows how mesh and geometry formats are converted during import and export.">  <div class="sphx-glr-thumbnail-title">Convert data when importing and exporting mesh and CAD formats</div>
</div>
* [Convert data when importing and exporting mesh and CAD formats](../../examples/gallery_examples/gallery/00_lucid_file_IO.md#sphx-glr-examples-gallery-examples-gallery-00-lucid-file-io-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a thin solid with hexahedral and prism cells.">  <div class="sphx-glr-thumbnail-title">Mesh a saddle bracket for a structural analysis</div>
</div>
* [Mesh a saddle bracket for a structural analysis](../../examples/gallery_examples/gallery/07_saddle_bracket.md#sphx-glr-examples-gallery-examples-gallery-07-saddle-bracket-py)

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
