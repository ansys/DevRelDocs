# optimize_quad_mesh

<a id="ansys.meshing.prime.AutoQuadMesher.optimize_quad_mesh"></a>

#### AutoQuadMesher.optimize_quad_mesh(part_id, topo_face_ids, params)

Optimize quad faces with given parameters.

* **Parameters:**

  **part_id**
  : Id of the Part.

  **topo_face_ids**
  : Ids of topofaces.

  **params**
  : Parameters of optimize quad mesh.

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
>>> results = autoQuadMesher.optimize_quad_mesh(part_id, topo_face_ids, params);
```

<!-- !! processed by numpydoc !! -->
