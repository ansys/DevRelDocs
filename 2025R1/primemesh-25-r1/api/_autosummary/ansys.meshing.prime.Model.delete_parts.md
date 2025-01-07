# delete_parts

<a id="ansys.meshing.prime.Model.delete_parts"></a>

#### Model.delete_parts(part_ids)

Delete parts and their contents.

* **Parameters:**
  **part_ids**
  : IDs of parts to delete.
* **Returns:**
  :

  [`DeleteResults`](ansys.meshing.prime.DeleteResults.md#ansys.meshing.prime.DeleteResults)
  : Results from deleting parts and their contents.
* **Return type:**
  [`DeleteResults`](ansys.meshing.prime.DeleteResults.md#ansys.meshing.prime.DeleteResults)

### Examples

```pycon
>>> results = model.delete_parts(part_ids)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-model-delete-parts"></a>

## Examples using Model.delete_parts

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a pipe T-section for both structural thermal and fluid flow simulation.">  <div class="sphx-glr-thumbnail-title">Mesh a pipe T-section for structural thermal and fluid flow analysis</div>
</div>
* [Mesh a pipe T-section for structural thermal and fluid flow analysis](../../examples/gallery_examples/gallery/03_lucid_pipe_tee.md#sphx-glr-examples-gallery-examples-gallery-03-lucid-pipe-tee-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
