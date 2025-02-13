# merge_overlapping_topo_faces

<a id="ansys.meshing.prime.Scaffolder.merge_overlapping_topo_faces"></a>

#### Scaffolder.merge_overlapping_topo_faces(topo_faces, params)

Merge overlapping topofaces.

* **Parameters:**
  **topo_faces**
  : Ids of topology faces.

  **params**
  : Scaffolder parameters.
* **Returns:**
  :

  [`ScaffolderMergeResults`](ansys.meshing.prime.ScaffolderMergeResults.md#ansys.meshing.prime.ScaffolderMergeResults)
  : Return results in ScaffolderMergeResults.
* **Return type:**
  [`ScaffolderMergeResults`](ansys.meshing.prime.ScaffolderMergeResults.md#ansys.meshing.prime.ScaffolderMergeResults)

### Examples

```pycon
>>> results = scaffolder.MergeOverlappingTopoFaces([1,2,7,8], params)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-scaffolder-merge-overlapping-topo-faces"></a>

## Examples using Scaffolder.merge_overlapping_topo_faces

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
