# AutoQuadMesher

<a id="ansys.meshing.prime.AutoQuadMesher"></a>

### *class* ansys.meshing.prime.AutoQuadMesher(model)

Generate full quad mesh.

* **Parameters:**

  **model**
  : Server model to create AutoQuadMesher object.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`AutoQuadMesher.check_topology`](ansys.meshing.prime.AutoQuadMesher.check_topology.md#ansys.meshing.prime.AutoQuadMesher.check_topology)(part_id, ...)                         | Check topology for inconsistencies with the given parameters.     |
| [`AutoQuadMesher.defeature_topology`](ansys.meshing.prime.AutoQuadMesher.defeature_topology.md#ansys.meshing.prime.AutoQuadMesher.defeature_topology)(part_id, ...)             | Defeature topology with given parameters.                         |
| [`AutoQuadMesher.detect_and_treat_features`](ansys.meshing.prime.AutoQuadMesher.detect_and_treat_features.md#ansys.meshing.prime.AutoQuadMesher.detect_and_treat_features)(...) | Detect features in topology and treat them with given parameters. |
| [`AutoQuadMesher.optimize_quad_mesh`](ansys.meshing.prime.AutoQuadMesher.optimize_quad_mesh.md#ansys.meshing.prime.AutoQuadMesher.optimize_quad_mesh)(part_id, ...)             | Optimize quad faces with given parameters.                        |
| [`AutoQuadMesher.repair_topology`](ansys.meshing.prime.AutoQuadMesher.repair_topology.md#ansys.meshing.prime.AutoQuadMesher.repair_topology)(part_id, ...)                      | Repair topology with given parameters.                            |
<!-- vale on -->