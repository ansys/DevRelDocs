# SurfaceScope

<a id="ansys.meshing.prime.lucid.SurfaceScope"></a>

### *class* ansys.meshing.prime.lucid.SurfaceScope(part_expression='\*', entity_expression='\*', scope_evaluation_type=ScopeEvaluationType.LABELS)

SurfaceScope is one of the classes in Lucid API.

This class is meant for beginners to meshing. This class is used to define
a scope for operation on surfaces.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`SurfaceScope.get_face_zonelets`](ansys.meshing.prime.lucid.SurfaceScope.get_face_zonelets.md#ansys.meshing.prime.lucid.SurfaceScope.get_face_zonelets)(model, part_id)   | Get the list of face zonelets for the given part in the scope.   |
| [`SurfaceScope.get_parts`](ansys.meshing.prime.lucid.SurfaceScope.get_parts.md#ansys.meshing.prime.lucid.SurfaceScope.get_parts)(model)                                    | Get the list of part ids in the scope.                           |
| [`SurfaceScope.get_scope_definition`](ansys.meshing.prime.lucid.SurfaceScope.get_scope_definition.md#ansys.meshing.prime.lucid.SurfaceScope.get_scope_definition)(model)   | Get the scope definition of the scope.                           |
| [`SurfaceScope.get_topo_faces`](ansys.meshing.prime.lucid.SurfaceScope.get_topo_faces.md#ansys.meshing.prime.lucid.SurfaceScope.get_topo_faces)(model, part_id)            | Get the list of topofaces for the given part in the scope.       |

<a id="examples-using-surfacescope"></a>

## Examples using SurfaceScope

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a printed circuit board with mainly hexahedral elements for structural thermal simulation using the volume sweeper.">  <div class="sphx-glr-thumbnail-title">Mesh a PCB for structural thermal analysis</div>
</div>
* [Mesh a PCB for structural thermal analysis](../../examples/gallery_examples/gallery/05_pcb_stacker.md#sphx-glr-examples-gallery-examples-gallery-05-pcb-stacker-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a thin solid with hexahedral and prism cells.">  <div class="sphx-glr-thumbnail-title">Mesh a saddle bracket for a structural analysis</div>
</div>
* [Mesh a saddle bracket for a structural analysis](../../examples/gallery_examples/gallery/07_saddle_bracket.md#sphx-glr-examples-gallery-examples-gallery-07-saddle-bracket-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to set the base mesh size and number of layers for each solid in a generic PCB geometry and then generate a mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a generic PCB geometry with multiple hexa layers</div>
</div>
* [Mesh a generic PCB geometry with multiple hexa layers](../../examples/gallery_examples/gallery/09_multi_layer_quad_mesh_pcb.md#sphx-glr-examples-gallery-examples-gallery-09-multi-layer-quad-mesh-pcb-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
