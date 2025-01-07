# MeshStackerParams

<a id="ansys.meshing.prime.MeshStackerParams"></a>

### *class* ansys.meshing.prime.MeshStackerParams(model=None, origin=None, direction=None, lateral_defeature_tolerance=None, stacking_defeature_tolerance=None, max_offset_size=None, size_control_ids=None, delete_base=None, json_data=None, \*\*kwargs)

Input parameters associated with the mesh stacker operations.

* **Parameters:**
  **model: Model**
  : Model to create a `MeshStackerParams` object with default parameters.

  **origin: Iterable[float], optional**
  : Origin coordinate list of stacker.

  **direction: Iterable[float], optional**
  : Direction vector of stacker.

  **lateral_defeature_tolerance: float, optional**
  : Absolute lateral distance tolerance for stacker. If the lateral distance tolerance is not specified, a default tolerance value is calculated by stacker.

  **stacking_defeature_tolerance: float, optional**
  : Absolute stacking distance tolerance for stacker. If the stacking distance tolerance is not specified, a default tolerance value is calculated by stacker.

  **max_offset_size: float, optional**
  : Maximum stack size allowed during stacking. If the maximum stack size is not specified, it is set to global max size.

  **size_control_ids: Iterable[int], optional**
  : List of size control ids to be respected by stacker. Stacker respects all supported controls by default.

  **delete_base: bool, optional**
  : Option to delete base face at the end of stacking. The default is false.

  **json_data: dict, optional**
  : JSON dictionary to create a `MeshStackerParams` object with provided parameters.

### Examples

```pycon
>>> mesh_stacker_params = prime.MeshStackerParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| [`MeshStackerParams.print_default`](ansys.meshing.prime.MeshStackerParams.print_default.md#ansys.meshing.prime.MeshStackerParams.print_default)()        | Print the default values of `MeshStackerParams` object.   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`MeshStackerParams.set_default`](ansys.meshing.prime.MeshStackerParams.set_default.md#ansys.meshing.prime.MeshStackerParams.set_default)([origin, ...]) | Set the default values of the `MeshStackerParams` object. |

### Attributes

| [`MeshStackerParams.delete_base`](ansys.meshing.prime.MeshStackerParams.delete_base.md#ansys.meshing.prime.MeshStackerParams.delete_base)                                                    | Option to delete base face at the end of stacking.   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`MeshStackerParams.direction`](ansys.meshing.prime.MeshStackerParams.direction.md#ansys.meshing.prime.MeshStackerParams.direction)                                                          | Direction vector of stacker.                         |
| [`MeshStackerParams.lateral_defeature_tolerance`](ansys.meshing.prime.MeshStackerParams.lateral_defeature_tolerance.md#ansys.meshing.prime.MeshStackerParams.lateral_defeature_tolerance)    | Absolute lateral distance tolerance for stacker.     |
| [`MeshStackerParams.max_offset_size`](ansys.meshing.prime.MeshStackerParams.max_offset_size.md#ansys.meshing.prime.MeshStackerParams.max_offset_size)                                        | Maximum stack size allowed during stacking.          |
| [`MeshStackerParams.origin`](ansys.meshing.prime.MeshStackerParams.origin.md#ansys.meshing.prime.MeshStackerParams.origin)                                                                   | Origin coordinate list of stacker.                   |
| [`MeshStackerParams.size_control_ids`](ansys.meshing.prime.MeshStackerParams.size_control_ids.md#ansys.meshing.prime.MeshStackerParams.size_control_ids)                                     | List of size control ids to be respected by stacker. |
| [`MeshStackerParams.stacking_defeature_tolerance`](ansys.meshing.prime.MeshStackerParams.stacking_defeature_tolerance.md#ansys.meshing.prime.MeshStackerParams.stacking_defeature_tolerance) | Absolute stacking distance tolerance for stacker.    |

<a id="examples-using-meshstackerparams"></a>

## Examples using MeshStackerParams

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a printed circuit board with mainly hexahedral elements for structural thermal simulation using the volume sweeper.">  <div class="sphx-glr-thumbnail-title">Mesh a PCB for structural thermal analysis</div>
</div>
* [Mesh a PCB for structural thermal analysis](../../examples/gallery_examples/gallery/05_pcb_stacker.md#sphx-glr-examples-gallery-examples-gallery-05-pcb-stacker-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to set the base mesh size and number of layers for each solid in a generic PCB geometry and then generate a mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a generic PCB geometry with multiple hexa layers</div>
</div>
* [Mesh a generic PCB geometry with multiple hexa layers](../../examples/gallery_examples/gallery/09_multi_layer_quad_mesh_pcb.md#sphx-glr-examples-gallery-examples-gallery-09-multi-layer-quad-mesh-pcb-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
