# Morpher

<a id="ansys.meshing.prime.Morpher"></a>

### *class* ansys.meshing.prime.Morpher(model)

Morpher contain functionalities to change the geometry, adapting the mesh accordingly without a recomputation.

* **Parameters:**
  **model**
  : Server model to create Morpher object.

<!-- !! processed by numpydoc !! -->

### Methods

| [`Morpher.match_morph`](ansys.meshing.prime.Morpher.match_morph.md#ansys.meshing.prime.Morpher.match_morph)(part_id, match_pairs, ...)   | Match source and target zonelets defined by match pairs with prescribed boundary conditions for each pair.   |
|------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|

<a id="examples-using-morpher"></a>

## Examples using Morpher

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to morph a structural hexahedral mesh of a turbine blade to a new deformed shape defined by a target geometry file.">  <div class="sphx-glr-thumbnail-title">Morph a hexahedral mesh of a turbine blade to a new shape</div>
</div>
* [Morph a hexahedral mesh of a turbine blade to a new shape](../../examples/gallery_examples/gallery/06_blade_morph.md#sphx-glr-examples-gallery-examples-gallery-06-blade-morph-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
