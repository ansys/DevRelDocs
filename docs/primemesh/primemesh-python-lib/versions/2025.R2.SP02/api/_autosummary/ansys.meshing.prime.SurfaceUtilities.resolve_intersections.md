# resolve_intersections

<a id="ansys.meshing.prime.SurfaceUtilities.resolve_intersections"></a>

#### SurfaceUtilities.resolve_intersections(face_zonelet_ids, params)

Resolve facezonelets intersections.

* **Parameters:**

  **face_zonelet_ids**
  : Ids of face zonelets.

  **params**
  : ResolveIntersectionsParams for resolve intersection.

* **Returns:**

  [`ResolveIntersectionResult`](ansys.meshing.prime.ResolveIntersectionResult.md#ansys.meshing.prime.ResolveIntersectionResult)
  : Returns a ResolveIntersectionResult.

* **Return type:**

  [`ResolveIntersectionResult`](ansys.meshing.prime.ResolveIntersectionResult.md#ansys.meshing.prime.ResolveIntersectionResult)

### Examples

```pycon
>>> result = surf_utils.resolve_intersections(zonelets, prime.ResolveIntersectionsParams(model))
```

<!-- !! processed by numpydoc !! -->
