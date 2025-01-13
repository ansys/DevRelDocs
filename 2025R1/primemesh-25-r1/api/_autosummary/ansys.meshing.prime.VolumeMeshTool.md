# VolumeMeshTool

<a id="ansys.meshing.prime.VolumeMeshTool"></a>

### *class* ansys.meshing.prime.VolumeMeshTool(model)

VolumeMeshTool allows you to check grid and improve volume mesh quality.

VolumeMeshTool provides various volume mesh improvement algorithms.

* **Parameters:**
  **model**
  : Server model to create VolumeMeshTool object.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| [`VolumeMeshTool.check_mesh`](ansys.meshing.prime.VolumeMeshTool.check_mesh.md#ansys.meshing.prime.VolumeMeshTool.check_mesh)(part_id, params)                                  | Checks mesh of a part.                                               |
| [`VolumeMeshTool.copy_cell_zonelets`](ansys.meshing.prime.VolumeMeshTool.copy_cell_zonelets.md#ansys.meshing.prime.VolumeMeshTool.copy_cell_zonelets)(...)                      | Copy cell zonelets and face zonelets connected to the cell zonelets. |
| [`VolumeMeshTool.improve_by_auto_node_move`](ansys.meshing.prime.VolumeMeshTool.improve_by_auto_node_move.md#ansys.meshing.prime.VolumeMeshTool.improve_by_auto_node_move)(...) | Improve volume mesh by auto node move.                               |

<a id="examples-using-volumemeshtool"></a>

## Examples using VolumeMeshTool

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to wrap a toy car for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Wrap a toy car for a flow analysis</div>
</div>
* [Wrap a toy car for a flow analysis](../../examples/gallery_examples/gallery/04_lucid_toy_car.md#sphx-glr-examples-gallery-examples-gallery-04-lucid-toy-car-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
