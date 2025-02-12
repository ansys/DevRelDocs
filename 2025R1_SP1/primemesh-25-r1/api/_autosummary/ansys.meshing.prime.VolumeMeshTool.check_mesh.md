# check_mesh

<a id="ansys.meshing.prime.VolumeMeshTool.check_mesh"></a>

#### VolumeMeshTool.check_mesh(part_id, params)

Checks mesh of a part.

* **Parameters:**
  **part_id**
  : Id of a part.

  **params**
  : Parameters to check mesh.
* **Returns:**
  :

  [`CheckMeshResults`](ansys.meshing.prime.CheckMeshResults.md#ansys.meshing.prime.CheckMeshResults)
  : Returns the CheckMeshResults.
* **Return type:**
  [`CheckMeshResults`](ansys.meshing.prime.CheckMeshResults.md#ansys.meshing.prime.CheckMeshResults)

### Examples

```pycon
>>> results = volume_mesh_tool.check_mesh(part_id,
>>>                                prime.CheckMeshParams(model =model))
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-volumemeshtool-check-mesh"></a>

## Examples using VolumeMeshTool.check_mesh

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to wrap a toy car for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Wrap a toy car for a flow analysis</div>
</div>
* [Wrap a toy car for a flow analysis](../../examples/gallery_examples/gallery/04_lucid_toy_car.md#sphx-glr-examples-gallery-examples-gallery-04-lucid-toy-car-py)

<!-- thumbnail-parent-div-close --></div>
