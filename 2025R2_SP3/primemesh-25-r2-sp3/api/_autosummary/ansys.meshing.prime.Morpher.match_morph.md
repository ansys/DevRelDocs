# match_morph

<a id="ansys.meshing.prime.Morpher.match_morph"></a>

#### Morpher.match_morph(part_id, match_pairs, match_morph_params, bc_params, solve_params)

Matches source and target zonelets defined using match pairs with prescribed boundary conditions for each pair. Also, solves boundary condition parameters to define uniform surface and volume regions in source neighborhood.

* **Parameters:**

  **part_id**
  : Id of source part.

  **match_pairs**
  : Array of  source and target match pairs.

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
