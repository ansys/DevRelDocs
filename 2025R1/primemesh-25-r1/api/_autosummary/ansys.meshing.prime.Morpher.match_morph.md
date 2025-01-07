# match_morph

<a id="ansys.meshing.prime.Morpher.match_morph"></a>

#### Morpher.match_morph(part_id, match_pairs, match_morph_params, bc_params, solve_params)

Match source and target zonelets defined by match pairs with prescribed boundary conditions for each pair. Also, solve boundary condition parameters to define uniform surface and volume regions in source neighborhood.

* **Parameters:**
  **part_id**
  : Id of source part.

  **match_pairs**
  : Array of match pairs of sources and targets.

  **match_morph_params**
  : Match morph parameters.

  **bc_params**
  : Morph boundary condition parameters.

  **solve_params**
  : Morpher solve parameters.
* **Returns:**
  :

  [`MatchMorphResults`](ansys.meshing.prime.MatchMorphResults.md#ansys.meshing.prime.MatchMorphResults)
  : Returns the MatchMorphResults.
* **Return type:**
  [`MatchMorphResults`](ansys.meshing.prime.MatchMorphResults.md#ansys.meshing.prime.MatchMorphResults)

### Examples

```pycon
>>> result = morph.match_morph([match_pair1, match_pair2], match_morph_params, bc_params, solve_params)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-morpher-match-morph"></a>

## Examples using Morpher.match_morph

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to morph a structural hexahedral mesh of a turbine blade to a new deformed shape defined by a target geometry file.">  <div class="sphx-glr-thumbnail-title">Morph a hexahedral mesh of a turbine blade to a new shape</div>
</div>
* [Morph a hexahedral mesh of a turbine blade to a new shape](../../examples/gallery_examples/gallery/06_blade_morph.md#sphx-glr-examples-gallery-examples-gallery-06-blade-morph-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
