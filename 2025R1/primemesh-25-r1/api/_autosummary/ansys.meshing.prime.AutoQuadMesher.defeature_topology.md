# defeature_topology

<a id="ansys.meshing.prime.AutoQuadMesher.defeature_topology"></a>

#### AutoQuadMesher.defeature_topology(part_id, topo_face_ids, params)

Defeature topology with given parameters.

* **Parameters:**

  **part_id**
  : Id of the Part.

  **topo_face_ids**
  : Ids of topofaces.

  **params**
  : Parameters of defeature topology.

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
>>> results = autoQuadMesher.defeature_topology(part_id, topo_face_ids, params);
```

<!-- !! processed by numpydoc !! -->
