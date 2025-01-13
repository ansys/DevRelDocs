# CheckMeshParams

<a id="ansys.meshing.prime.CheckMeshParams"></a>

### *class* ansys.meshing.prime.CheckMeshParams(model=None, json_data=None, \*\*kwargs)

Parameters used to check mesh.

* **Parameters:**
  **model: Model**
  : Model to create a `CheckMeshParams` object with default parameters.

  **json_data: dict, optional**
  : JSON dictionary to create a `CheckMeshParams` object with provided parameters.

### Examples

```pycon
>>> check_mesh_params = prime.CheckMeshParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`CheckMeshParams.print_default`](ansys.meshing.prime.CheckMeshParams.print_default.md#ansys.meshing.prime.CheckMeshParams.print_default)()   | Print the default values of `CheckMeshParams` object.   |
| [`CheckMeshParams.set_default`](ansys.meshing.prime.CheckMeshParams.set_default.md#ansys.meshing.prime.CheckMeshParams.set_default)()         | Set the default values of the `CheckMeshParams` object. |

<a id="examples-using-checkmeshparams"></a>

## Examples using CheckMeshParams

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to wrap a toy car for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Wrap a toy car for a flow analysis</div>
</div>
* [Wrap a toy car for a flow analysis](../../examples/gallery_examples/gallery/04_lucid_toy_car.md#sphx-glr-examples-gallery-examples-gallery-04-lucid-toy-car-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
