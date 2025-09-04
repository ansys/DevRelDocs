# repair_topology

<a id="ansys.meshing.prime.AutoQuadMesher.repair_topology"></a>

#### AutoQuadMesher.repair_topology(part_id, topo_face_ids, params)

Repair topology with given parameters.

* **Parameters:**

  **part_id**
  : Id of the Part.

  **topo_face_ids**
  : Ids of topofaces.

  **params**
  : Parameters of repair topology.

* **Returns:**
  
  [`AutoQuadMesherResults`](ansys.meshing.prime.AutoQuadMesherResults.md#ansys.meshing.prime.AutoQuadMesherResults)
  : Returns the AutoQuadMesherResults structure.

* **Return type:**

  [`AutoQuadMesherResults`](ansys.meshing.prime.AutoQuadMesherResults.md#ansys.meshing.prime.AutoQuadMesherResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> autoQuadMesher = AutoQuadMesher(model=model)
>>> results = autoQuadMesher.repair_topology(part_id, topo_face_ids, params);
```

<!-- !! processed by numpydoc !! -->
