# scaffold_topo_faces_and_beams

<a id="ansys.meshing.prime.Scaffolder.scaffold_topo_faces_and_beams"></a>

#### Scaffolder.scaffold_topo_faces_and_beams(topo_faces, topo_beams, params)

Scaffold faces and beams with provided parameters.

* **Parameters:**
  **topo_faces**
  : Ids of topology faces.

  **topo_beams**
  : Ids of topology edges for beams.

  **params**
  : Scaffolding parameters.
* **Returns:**
  :

  [`ScaffolderResults`](ansys.meshing.prime.ScaffolderResults.md#ansys.meshing.prime.ScaffolderResults)
  : Return results in ScaffolderResults structure.
* **Return type:**
  [`ScaffolderResults`](ansys.meshing.prime.ScaffolderResults.md#ansys.meshing.prime.ScaffolderResults)

### Examples

```pycon
>>> results = scaffolder.ScaffoldTopoFacesAndBeams([1,2], [7,8], params)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-scaffolder-scaffold-topo-faces-and-beams"></a>

## Examples using Scaffolder.scaffold_topo_faces_and_beams

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
