# improve_by_auto_node_move

<a id="ansys.meshing.prime.VolumeMeshTool.improve_by_auto_node_move"></a>

#### VolumeMeshTool.improve_by_auto_node_move(part_id, cell_zonelets, boundary_zonelets, params)

Improve volume mesh by auto node move.

* **Parameters:**
  **part_id**
  : Id of a part.

  **cell_zonelets**
  : Ids of cell zonelets to be improved.

  **boundary_zonelets**
  : Ids of boundary face zonelets.

  **params**
  : Auto node move parameters.
* **Returns:**
  :

  [`VolumeMeshToolResults`](ansys.meshing.prime.VolumeMeshToolResults.md#ansys.meshing.prime.VolumeMeshToolResults)
  : Return the VolumeMeshToolResults.
* **Return type:**
  [`VolumeMeshToolResults`](ansys.meshing.prime.VolumeMeshToolResults.md#ansys.meshing.prime.VolumeMeshToolResults)

### Examples

```pycon
>>> results = volume_mesh_tool.improve_by_auto_node_move(part_id,
>>>                                cell_zonelets,
>>>                                boundary_zonelets,
>>>                                prime.AutoNodeMoveParams(model =model))
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-volumemeshtool-improve-by-auto-node-move"></a>

## Examples using VolumeMeshTool.improve_by_auto_node_move

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to wrap a toy car for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Wrap a toy car for a flow analysis</div>
</div>
* [Wrap a toy car for a flow analysis](../../examples/gallery_examples/gallery/04_lucid_toy_car.md#sphx-glr-examples-gallery-examples-gallery-04-lucid-toy-car-py)

<!-- thumbnail-parent-div-close --></div>
