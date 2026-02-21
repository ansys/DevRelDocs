# split_modeling_plies_by_production_material

<a id="compolyx.ModelingGroup.split_modeling_plies_by_production_material"></a>

#### ModelingGroup.split_modeling_plies_by_production_material(\*, source_plies=None)

Split modeling plies into separate modeling plies for each production material.

For each given modeling ply which has a sub laminate as ply material,
the modeling ply is replaced by the corresponding modeling plies defined
by the production materials (fabrics or stack-ups).

Note that this is supported only for modeling plies which have
nominal thickness definition and no taper edges. Otherwise,
the original modeling ply is retained and an error is logged.

* **Parameters:**
  - source_plies: Modeling plies to replace. If None, all modeling plies
    of this modeling group are considered.
