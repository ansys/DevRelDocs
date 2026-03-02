# fill_holes_at_plane

<a id="ansys.meshing.prime.SurfaceUtilities.fill_holes_at_plane"></a>

#### SurfaceUtilities.fill_holes_at_plane(part_id, face_zonelets, plane_points, params)

Fill holes in given face zonelets at given plane.

* **Parameters:**

  **part_id**
  : Id of part to associate face zonelets created to fill hole.

  **face_zonelets**
  : Ids of face zonelets to be used to find holes.

  **plane_points**
  : Coordinates of three points to define plane.

  **params**
  : Parameters to fill holes.

* **Returns:**

  [`FillHolesAtPlaneResults`](ansys.meshing.prime.FillHolesAtPlaneResults.md#ansys.meshing.prime.FillHolesAtPlaneResults)
  : Returns the FillHolesAtPlaneResults.

* **Return type:**

  [`FillHolesAtPlaneResults`](ansys.meshing.prime.FillHolesAtPlaneResults.md#ansys.meshing.prime.FillHolesAtPlaneResults)

### Examples

```pycon
>>> params = prime.FillHolesAtPlaneParams(model = model)
>>> results = surface_utils.fill_holes_at_plane(part_id, face_zonelets, plane_points, params)
```

<!-- !! processed by numpydoc !! -->
