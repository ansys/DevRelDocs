# mesh

<a id="ansys.meshing.prime.AutoMesh.mesh"></a>

#### AutoMesh.mesh(part_id, automesh_params)

Performs volume meshing on the part with the given meshing parameters.

* **Parameters:**

  **part_id**
  : Id of the part.

  **automesh_params**
  : Parameters for auto mesh.
* **Returns:**
  :

  [`AutoMeshResults`](ansys.meshing.prime.AutoMeshResults.md#ansys.meshing.prime.AutoMeshResults)
  : Returns the AutomeshResults.
* **Return type:**
  [`AutoMeshResults`](ansys.meshing.prime.AutoMeshResults.md#ansys.meshing.prime.AutoMeshResults)

### Examples

```pycon
>>> auto_mesh = AutoMesh(model = model)
>>> automesh_params = AutoMeshParams(model = model)
>>> results = auto_mesh.mesh(part_id, automesh_params)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-automesh-mesh"></a>

## Examples using AutoMesh.mesh

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a thin solid with hexahedral and prism cells.">  <div class="sphx-glr-thumbnail-title">Mesh a saddle bracket for a structural analysis</div>
</div>
* [Mesh a saddle bracket for a structural analysis](../../examples/gallery_examples/gallery/07_saddle_bracket.md#sphx-glr-examples-gallery-examples-gallery-07-saddle-bracket-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
