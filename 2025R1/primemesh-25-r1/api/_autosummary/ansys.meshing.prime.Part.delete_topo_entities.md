# delete_topo_entities

<a id="ansys.meshing.prime.Part.delete_topo_entities"></a>

#### Part.delete_topo_entities(params)

Delete topoentities of part controled by parameters.

* **Parameters:**
  **params**
  : Parameters for control delete topoentities operation.
* **Returns:**
  :

  [`DeleteTopoEntitiesResults`](ansys.meshing.prime.DeleteTopoEntitiesResults.md#ansys.meshing.prime.DeleteTopoEntitiesResults)
  : Return results of delete topoentities.
* **Return type:**
  [`DeleteTopoEntitiesResults`](ansys.meshing.prime.DeleteTopoEntitiesResults.md#ansys.meshing.prime.DeleteTopoEntitiesResults)

### Examples

```pycon
>>> results = part.delete_topo_entities(params)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-part-delete-topo-entities"></a>

## Examples using Part.delete_topo_entities

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

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
