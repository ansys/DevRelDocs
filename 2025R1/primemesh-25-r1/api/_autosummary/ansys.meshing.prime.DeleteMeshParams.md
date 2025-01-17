# DeleteMeshParams

<a id="ansys.meshing.prime.DeleteMeshParams"></a>

### *class* ansys.meshing.prime.DeleteMeshParams(model=None, delete_mesh_on_connected_topo_edges=None, json_data=None, \*\*kwargs)

Parameters to delete mesh on topoentities.

* **Parameters:**
  **model: Model**
  : Model to create a `DeleteMeshParams` object with default parameters.

  **delete_mesh_on_connected_topo_edges: bool, optional**
  : Option to delete mesh on topoedges connected only to provided topoentities.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `DeleteMeshParams` object with provided parameters.

### Examples

```pycon
>>> delete_mesh_params = prime.DeleteMeshParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| Name | Description |
| [`DeleteMeshParams.print_default`](ansys.meshing.prime.DeleteMeshParams.print_default.md#ansys.meshing.prime.DeleteMeshParams.print_default)()   | Print the default values of `DeleteMeshParams` object.   |
| [`DeleteMeshParams.set_default`](ansys.meshing.prime.DeleteMeshParams.set_default.md#ansys.meshing.prime.DeleteMeshParams.set_default)([...])    | Set the default values of the `DeleteMeshParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| Name | Description |
| [`DeleteMeshParams.delete_mesh_on_connected_topo_edges`](ansys.meshing.prime.DeleteMeshParams.delete_mesh_on_connected_topo_edges.md#ansys.meshing.prime.DeleteMeshParams.delete_mesh_on_connected_topo_edges)   | Option to delete mesh on topoedges connected only to provided topoentities.   |

<a id="examples-using-deletemeshparams"></a>

## Examples using DeleteMeshParams

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
