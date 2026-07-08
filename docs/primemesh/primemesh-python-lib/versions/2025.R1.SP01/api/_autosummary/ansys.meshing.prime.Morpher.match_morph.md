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

  [`MatchMorphResults`](ansys.meshing.prime.MatchMorphResults.md#ansys.meshing.prime.MatchMorphResults)
  : Returns the MatchMorphResults.

* **Return type:**

  [`MatchMorphResults`](ansys.meshing.prime.MatchMorphResults.md#ansys.meshing.prime.MatchMorphResults)

### Examples

```pycon
>>> result = morph.match_morph([match_pair1, match_pair2], match_morph_params, bc_params, solve_params)
```

<!-- !! processed by numpydoc !! -->

