# get_bounding_box_of_zonelets

<a id="ansys.meshing.prime.SurfaceUtilities.get_bounding_box_of_zonelets"></a>

#### SurfaceUtilities.get_bounding_box_of_zonelets(zonelets)

Get bounding box of given zonelets.

* **Parameters:**

  **zonelets**
  : Ids of zonelets.

* **Returns:**

  [`BoundingBox`](ansys.meshing.prime.BoundingBox.md#ansys.meshing.prime.BoundingBox)
  : Returns bounding of box of given zonelets.

* **Return type:**

  [`BoundingBox`](ansys.meshing.prime.BoundingBox.md#ansys.meshing.prime.BoundingBox)

### Examples

```pycon
>>> zonelets = part.get_face_zonelets() + part.get_edge_zonelets()
>>> bounding_box = surface_utilities.get_bounding_box_of_zonelets(zonelets)
```

<!-- !! processed by numpydoc !! -->
