# add_labels_on_topo_entities

<a id="ansys.meshing.prime.Part.add_labels_on_topo_entities"></a>

#### Part.add_labels_on_topo_entities(labels, topo_entities)

Add the given labels on the provided topoentities.

* **Parameters:**
  **labels**
  : Labels to be added on topoentities.

  **topo_entities**
  : Ids of topoentities.
* **Returns:**
  :

  [`AddLabelResults`](ansys.meshing.prime.AddLabelResults.md#ansys.meshing.prime.AddLabelResults)
  : Returns the AddLabelResults.
* **Return type:**
  [`AddLabelResults`](ansys.meshing.prime.AddLabelResults.md#ansys.meshing.prime.AddLabelResults)

### Examples

```pycon
>>> labels = ["wall", "outer"]
>>> part.add_labels_on_topo_entities(labels, topo_entities)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-part-add-labels-on-topo-entities"></a>

## Examples using Part.add_labels_on_topo_entities

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a printed circuit board with mainly hexahedral elements for structural thermal simulation using the volume sweeper.">  <div class="sphx-glr-thumbnail-title">Mesh a PCB for structural thermal analysis</div>
</div>
* [Mesh a PCB for structural thermal analysis](../../examples/gallery_examples/gallery/05_pcb_stacker.md#sphx-glr-examples-gallery-examples-gallery-05-pcb-stacker-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a thin solid with hexahedral and prism cells.">  <div class="sphx-glr-thumbnail-title">Mesh a saddle bracket for a structural analysis</div>
</div>
* [Mesh a saddle bracket for a structural analysis](../../examples/gallery_examples/gallery/07_saddle_bracket.md#sphx-glr-examples-gallery-examples-gallery-07-saddle-bracket-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
