# project_topo_faces_on_geometry

<a id="ansys.meshing.prime.SurfaceUtilities.project_topo_faces_on_geometry"></a>

#### SurfaceUtilities.project_topo_faces_on_geometry(topo_faces, params)

Project nodes of given topofaces on geometry associated to those topofaces.

* **Parameters:**

  **topo_faces**
  : Ids of topofaces to be used to project nodes on the geometry.

  **params**
  : Parameters used for projecting topoface nodes on geometry.

* **Returns:**

  [`ProjectOnGeometryResults`](ansys.meshing.prime.ProjectOnGeometryResults.md#ansys.meshing.prime.ProjectOnGeometryResults)
  : Returns the ProjectOnGeometryResults.

* **Return type:**

  [`ProjectOnGeometryResults`](ansys.meshing.prime.ProjectOnGeometryResults.md#ansys.meshing.prime.ProjectOnGeometryResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> params = prime.ProjectOnGeometryParams(model = model)
>>> results = surface_utils.project_topo_faces_on_geometry(topofaces, params)
```

<!-- !! processed by numpydoc !! -->
