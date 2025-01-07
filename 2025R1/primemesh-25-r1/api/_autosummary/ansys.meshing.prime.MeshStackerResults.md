# MeshStackerResults

<a id="ansys.meshing.prime.MeshStackerResults"></a>

### *class* ansys.meshing.prime.MeshStackerResults(model=None, error_code=None, error_codes_per_topo_volume=None, non_stackable_faces=None, non_stackable_edges=None, small_features=None, base_face_ids=None, size_control_ids=None, json_data=None, \*\*kwargs)

Results associated with the mesh stacker operations.

* **Parameters:**
  **model: Model**
  : Model to create a `MeshStackerResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the operation.

  **error_codes_per_topo_volume: Iterable[int], optional**
  : Error codes associated with the topovolume-by-topovolume stacking.

  **non_stackable_faces: Iterable[int], optional**
  : List of non-stackable faces. Note: Under-resolved faceting can also create non-stackable geometry.

  **non_stackable_edges: Iterable[int], optional**
  : List of non-stackable edges. Note: Under-resolved faceting can also create non-stackable geometry.

  **small_features: Iterable[int], optional**
  : List of features edges smaller than input tolerance.

  **base_face_ids: Iterable[int], optional**
  : List of base face ids after base creation.

  **size_control_ids: Iterable[int], optional**
  : List of ids of newly created size controls.

  **json_data: dict, optional**
  : JSON dictionary to create a `MeshStackerResults` object with provided parameters.

### Examples

```pycon
>>> mesh_stacker_results = prime.MeshStackerResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| [`MeshStackerResults.print_default`](ansys.meshing.prime.MeshStackerResults.print_default.md#ansys.meshing.prime.MeshStackerResults.print_default)()            | Print the default values of `MeshStackerResults` object.   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`MeshStackerResults.set_default`](ansys.meshing.prime.MeshStackerResults.set_default.md#ansys.meshing.prime.MeshStackerResults.set_default)([error_code, ...]) | Set the default values of the `MeshStackerResults` object. |

### Attributes

| [`MeshStackerResults.base_face_ids`](ansys.meshing.prime.MeshStackerResults.base_face_ids.md#ansys.meshing.prime.MeshStackerResults.base_face_ids)                                           | List of base face ids after base creation.                         |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`MeshStackerResults.error_code`](ansys.meshing.prime.MeshStackerResults.error_code.md#ansys.meshing.prime.MeshStackerResults.error_code)                                                    | Error code associated with the operation.                          |
| [`MeshStackerResults.error_codes_per_topo_volume`](ansys.meshing.prime.MeshStackerResults.error_codes_per_topo_volume.md#ansys.meshing.prime.MeshStackerResults.error_codes_per_topo_volume) | Error codes associated with the topovolume-by-topovolume stacking. |
| [`MeshStackerResults.non_stackable_edges`](ansys.meshing.prime.MeshStackerResults.non_stackable_edges.md#ansys.meshing.prime.MeshStackerResults.non_stackable_edges)                         | Under-resolved faceting can also create non-stackable geometry.    |
| [`MeshStackerResults.non_stackable_faces`](ansys.meshing.prime.MeshStackerResults.non_stackable_faces.md#ansys.meshing.prime.MeshStackerResults.non_stackable_faces)                         | Under-resolved faceting can also create non-stackable geometry.    |
| [`MeshStackerResults.size_control_ids`](ansys.meshing.prime.MeshStackerResults.size_control_ids.md#ansys.meshing.prime.MeshStackerResults.size_control_ids)                                  | List of ids of newly created size controls.                        |
| [`MeshStackerResults.small_features`](ansys.meshing.prime.MeshStackerResults.small_features.md#ansys.meshing.prime.MeshStackerResults.small_features)                                        | List of features edges smaller than input tolerance.               |

<a id="examples-using-meshstackerresults"></a>

## Examples using MeshStackerResults

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
