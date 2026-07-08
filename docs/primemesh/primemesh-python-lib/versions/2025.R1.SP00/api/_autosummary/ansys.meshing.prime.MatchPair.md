# MatchPair

<a id="ansys.meshing.prime.MatchPair"></a>

### *class* ansys.meshing.prime.MatchPair(model=None, source_surfaces=None, target_surfaces=None, target_type=None, bc_pairs=None, json_data=None, \*\*kwargs)

Match pair to specify sources, targets for match morphing. Included boundary conditions specification.

* **Parameters:**

  **model: Model**
  : Model to create a `MatchPair` object with default parameters.

  **source_surfaces: Iterable[int], optional**
  : Ids of source surfaces.

  **target_surfaces: Iterable[int], optional**
  : Ids of target surfaces.

  **target_type: MatchPairTargetType, optional**
  : Option to specify target surface type.

  **bc_pairs: List[BCPair], optional**
  : Array of boundary condition pairs.

  **json_data: dict, optional**
  : JSON dictionary to create a `MatchPair` object with provided parameters.

### Examples

```pycon
>>> match_pair = prime.MatchPair(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`MatchPair.print_default`](ansys.meshing.prime.MatchPair.print_default.md#ansys.meshing.prime.MatchPair.print_default)()                 | Print the default values of `MatchPair` object.   |
| [`MatchPair.set_default`](ansys.meshing.prime.MatchPair.set_default.md#ansys.meshing.prime.MatchPair.set_default)([source_surfaces, ...]) | Set the default values of the `MatchPair` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| [`MatchPair.bc_pairs`](ansys.meshing.prime.MatchPair.bc_pairs.md#ansys.meshing.prime.MatchPair.bc_pairs)                      | Array of boundary condition pairs.     |
| [`MatchPair.source_surfaces`](ansys.meshing.prime.MatchPair.source_surfaces.md#ansys.meshing.prime.MatchPair.source_surfaces) | Ids of source surfaces.                |
| [`MatchPair.target_surfaces`](ansys.meshing.prime.MatchPair.target_surfaces.md#ansys.meshing.prime.MatchPair.target_surfaces) | Ids of target surfaces.                |
| [`MatchPair.target_type`](ansys.meshing.prime.MatchPair.target_type.md#ansys.meshing.prime.MatchPair.target_type)             | Option to specify target surface type. |


<!-- vale on -->
