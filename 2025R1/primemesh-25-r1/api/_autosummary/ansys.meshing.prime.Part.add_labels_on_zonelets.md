# add_labels_on_zonelets

<a id="ansys.meshing.prime.Part.add_labels_on_zonelets"></a>

#### Part.add_labels_on_zonelets(labels, zonelets)

Add the given labels on the provided zonelets.

* **Parameters:**
  **labels**
  : Labels to be added on zonelets.

  **zonelets**
  : Ids of zonelets.
* **Returns:**
  :

  [`AddLabelResults`](ansys.meshing.prime.AddLabelResults.md#ansys.meshing.prime.AddLabelResults)
  : Returns the AddLabelResults.
* **Return type:**
  [`AddLabelResults`](ansys.meshing.prime.AddLabelResults.md#ansys.meshing.prime.AddLabelResults)

### Examples

```pycon
>>> labels = ["wall", "outer"]
>>> part.add_labels_on_zonelets(labels, zonelets)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-part-add-labels-on-zonelets"></a>

## Examples using Part.add_labels_on_zonelets

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to set the base mesh size and number of layers for each solid in a generic PCB geometry and then generate a mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a generic PCB geometry with multiple hexa layers</div>
</div>
* [Mesh a generic PCB geometry with multiple hexa layers](../../examples/gallery_examples/gallery/09_multi_layer_quad_mesh_pcb.md#sphx-glr-examples-gallery-examples-gallery-09-multi-layer-quad-mesh-pcb-py)

<!-- thumbnail-parent-div-close --></div>
