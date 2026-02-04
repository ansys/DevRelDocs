# mesh_topo_faces

<a id="ansys.meshing.prime.Surfer.mesh_topo_faces"></a>

#### Surfer.mesh_topo_faces(part_id, topo_faces, params)

Perform meshing on TopoFaces with given parameters.

* **Parameters:**

  **part_id**
  : ID of part.

  **topo_faces**
  : IDs of the TopoFaces.

  **params**
  : Surfer parameters.

* **Returns:**

  [`SurferResults`](ansys.meshing.prime.SurferResults.md#ansys.meshing.prime.SurferResults)
  : Results from performing meshing on the TopoFaces.

* **Return type:**

  [`SurferResults`](ansys.meshing.prime.SurferResults.md#ansys.meshing.prime.SurferResults)

### Examples

```pycon
>>> surfer = prime.Surfer(model)
>>> surfer_params = prime.SurferParams(model)
>>> results = surfer.mesh_topo_faces(part_id, topo_faces, surfer_params)
```

<!-- !! processed by numpydoc !! -->
