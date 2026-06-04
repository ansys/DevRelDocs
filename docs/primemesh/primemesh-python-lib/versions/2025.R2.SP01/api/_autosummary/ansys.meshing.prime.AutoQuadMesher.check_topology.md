# check_topology

<a id="ansys.meshing.prime.AutoQuadMesher.check_topology"></a>

#### AutoQuadMesher.check_topology(part_id, topo_face_ids, params)

Check topology for inconsistencies with the given parameters.

* **Parameters:**

  **part_id**
  : Id of the Part.

  **topo_face_ids**
  : Ids of topofaces.

  **params**
  : Parameters of check topology.

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
>>> results = autoQuadMesher.check_topology(part_id, topo_face_ids, params);
```

<!-- !! processed by numpydoc !! -->
